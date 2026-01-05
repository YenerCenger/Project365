/**
 * DevJourney 2026: Smart AI Edition
 * Ana Uygulama Dosyası
 */

import { curriculum } from './data/curriculum.js';
import { StorageService } from './services/storage.js';
import { SupabaseService } from './services/supabase-service.js';
import { AIService, AI_ACTIONS } from './services/ai-service.js';
import { showToast } from './components/toast.js';
import {
    openSettingsModal,
    closeSettingsModal,
    openDetailModal,
    closeDetailModal,
    showAILoading,
    hideAILoading,
    renderAIContent,
    showAIError,
    resetAIView
} from './components/modal.js';

// ==========================================
// STATE
// ==========================================
let progressData = {};
let geminiApiKey = "";
let activeDayId = null;
let supabaseService = null;
let isAuthMode = 'signin'; // 'signin' veya 'signup'
let currentUser = null;

// Supabase yapılandırması (Bu değerleri kendi Supabase projenizden alın)
const SUPABASE_URL = 'https://svrkfiibmmqdeshpwhkn.supabase.co'; // Supabase proje URL'inizi buraya ekleyin
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2cmtmaWlibW1xZGVzaHB3aGtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2MzYwOTYsImV4cCI6MjA4MzIxMjA5Nn0.M_AcWWoQ3BhmJXyReY8CxvQPTV_J7VWfL5tlHS2gx6s'; // Supabase anon key'inizi buraya ekleyin

// ==========================================
// INITIALIZATION
// ==========================================

/**
 * Uygulama başlatılır
 */
async function init() {
    // Supabase servisini başlat
    if (SUPABASE_URL && SUPABASE_ANON_KEY) {
        supabaseService = new SupabaseService(SUPABASE_URL, SUPABASE_ANON_KEY);

        // Auth state listener
        window.addEventListener('supabase-sync', handleSupabaseSync);

        // Mevcut kullanıcıyı kontrol et
        currentUser = await supabaseService.getCurrentUser();
        updateAuthUI();
    }

    await loadData();
    renderApp();
    setupEventListeners();
}

/**
 * Verileri yükler (Supabase veya LocalStorage)
 */
async function loadData() {
    if (supabaseService && supabaseService.isConnected() && currentUser) {
        // Supabase'den yükle
        try {
            progressData = await supabaseService.loadProgressData();
            geminiApiKey = await supabaseService.loadApiKey();
        } catch (error) {
            console.error('Supabase yükleme hatası:', error);
            // Fallback: LocalStorage
            progressData = StorageService.loadProgressData();
            geminiApiKey = StorageService.loadApiKey();
        }
    } else {
        // LocalStorage'dan yükle
        progressData = StorageService.loadProgressData();
        geminiApiKey = StorageService.loadApiKey();
    }

    // API anahtarı yoksa uyarı göster
    if (!geminiApiKey) {
        document.getElementById('aiStatusBanner').classList.remove('hidden');
    }

    updateStats();
}

/**
 * Verileri kaydeder (Supabase veya LocalStorage)
 */
async function saveData() {
    if (supabaseService && supabaseService.isConnected() && currentUser) {
        // Supabase'e kaydet
        try {
            await supabaseService.saveProgressData(progressData);
        } catch (error) {
            console.error('Supabase kaydetme hatası:', error);
            // Fallback: LocalStorage
            StorageService.saveProgressData(progressData);
        }
    } else {
        // LocalStorage'a kaydet
        StorageService.saveProgressData(progressData);
    }
    updateStats();
}

/**
 * Supabase senkronizasyon event handler'ı
 */
function handleSupabaseSync(event) {
    const { progressData: syncedProgress, apiKey: syncedApiKey } = event.detail;
    progressData = syncedProgress;
    geminiApiKey = syncedApiKey;
    renderApp();
    showToast('Veriler senkronize edildi');
}

// ==========================================
// EVENT LISTENERS
// ==========================================

/**
 * Event listener'ları ayarlar
 */
function setupEventListeners() {
    // Global fonksiyonları window'a ekle (HTML onclick için)
    window.openAuthModal = openAuthModal;
    window.closeAuthModal = closeAuthModal;
    window.toggleAuthMode = toggleAuthMode;
    window.handleAuth = handleAuth;
    window.handleSignOut = handleSignOut;
    window.openSettingsModal = () => {
        if (typeof openSettingsModal === 'function') {
            openSettingsModal(geminiApiKey);
        }
    };
    window.closeSettingsModal = closeSettingsModal;
    window.saveApiKey = handleSaveApiKey;
    window.downloadBackup = handleDownloadBackup;
    window.restoreBackup = handleRestoreBackup;
    window.closeModal = handleCloseModal;
    window.saveDayData = handleSaveDayData;
    window.triggerAI = handleTriggerAI;
}

// ==========================================
// HANDLERS
// ==========================================

/**
 * Auth modal'ını açar
 */
function openAuthModal() {
    document.getElementById('authModal').classList.remove('hidden');
    document.getElementById('authError').classList.add('hidden');
    document.getElementById('authEmailInput').value = '';
    document.getElementById('authPasswordInput').value = '';
    isAuthMode = 'signin';
    updateAuthModeUI();
}

/**
 * Auth modal'ını kapatır
 */
function closeAuthModal() {
    document.getElementById('authModal').classList.add('hidden');
}

/**
 * Auth modunu değiştirir (giriş/kayıt)
 */
function toggleAuthMode() {
    isAuthMode = isAuthMode === 'signin' ? 'signup' : 'signin';
    updateAuthModeUI();
}

/**
 * Auth mode UI'ını günceller
 */
function updateAuthModeUI() {
    const submitBtn = document.getElementById('authSubmitBtn');
    const modeText = document.getElementById('authModeText');
    const modeAction = document.getElementById('authModeAction');

    if (isAuthMode === 'signin') {
        submitBtn.textContent = 'Giriş Yap';
        modeText.textContent = 'Kayıt ol';
        modeAction.textContent = 'giriş yap';
    } else {
        submitBtn.textContent = 'Kayıt Ol';
        modeText.textContent = 'Giriş yap';
        modeAction.textContent = 'kayıt ol';
    }
}

/**
 * Auth handler (giriş/kayıt)
 */
async function handleAuth() {
    const email = document.getElementById('authEmailInput').value.trim();
    const password = document.getElementById('authPasswordInput').value;
    const errorDiv = document.getElementById('authError');

    if (!email || !password) {
        errorDiv.textContent = 'Lütfen e-posta ve şifre girin.';
        errorDiv.classList.remove('hidden');
        return;
    }

    if (!supabaseService || !supabaseService.isConnected()) {
        errorDiv.textContent = 'Supabase bağlantısı kurulmamış. Lütfen yapılandırmayı kontrol edin.';
        errorDiv.classList.remove('hidden');
        return;
    }

    try {
        errorDiv.classList.add('hidden');

        if (isAuthMode === 'signin') {
            await supabaseService.signIn(email, password);
            showToast('Giriş başarılı!');
        } else {
            await supabaseService.signUp(email, password);
            showToast('Kayıt başarılı! E-posta doğrulama linkini kontrol edin.');
        }

        currentUser = await supabaseService.getCurrentUser();
        updateAuthUI();
        closeAuthModal();
        await loadData();
        renderApp();
    } catch (error) {
        errorDiv.textContent = error.message || 'Bir hata oluştu.';
        errorDiv.classList.remove('hidden');
    }
}

/**
 * Çıkış yapar
 */
async function handleSignOut() {
    if (supabaseService && supabaseService.isConnected()) {
        try {
            await supabaseService.signOut();
            currentUser = null;
            updateAuthUI();
            progressData = {};
            geminiApiKey = '';
            await loadData();
            renderApp();
            showToast('Çıkış yapıldı');
        } catch (error) {
            console.error('Çıkış hatası:', error);
        }
    }
}

/**
 * Auth UI'ını günceller
 */
function updateAuthUI() {
    const authButtons = document.getElementById('authButtons');
    const authButtonText = document.getElementById('authButtonText');

    if (currentUser) {
        authButtons.innerHTML = `
            <button onclick="handleSignOut()"
                class="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-red-600 transition-all bg-slate-50 hover:bg-red-50 px-3 py-2 rounded-lg border border-slate-200 hover:border-red-200">
                <i class="fa-solid fa-sign-out text-slate-400"></i>
                <span class="hidden sm:inline">Çıkış Yap</span>
            </button>
            <span class="text-xs text-slate-500 hidden sm:inline">(${currentUser.email})</span>
        `;
    } else {
        authButtons.innerHTML = `
            <button onclick="openAuthModal()"
                class="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-all bg-slate-50 hover:bg-indigo-50 px-3 py-2 rounded-lg border border-slate-200 hover:border-indigo-200">
                <i class="fa-solid fa-user text-slate-400"></i>
                <span class="hidden sm:inline">Giriş Yap</span>
            </button>
        `;
    }
}

/**
 * API anahtarını kaydetme handler'ı
 */
async function handleSaveApiKey() {
    const key = document.getElementById('apiKeyInput').value.trim();

    if (key) {
        geminiApiKey = key;

        if (supabaseService && supabaseService.isConnected() && currentUser) {
            try {
                await supabaseService.saveApiKey(key);
            } catch (error) {
                console.error('Supabase API key kaydetme hatası:', error);
                StorageService.saveApiKey(key);
            }
        } else {
            StorageService.saveApiKey(key);
        }

        closeSettingsModal();
        document.getElementById('aiStatusBanner').classList.add('hidden');
        showToast("API Anahtarı Kaydedildi!");
    } else {
        alert("Geçersiz anahtar.");
    }
}

/**
 * Yedek indirme handler'ı
 */
function handleDownloadBackup() {
    StorageService.downloadBackup(progressData, geminiApiKey);
    showToast("Yedek indirildi");
}

/**
 * Yedek yükleme handler'ı
 * @param {HTMLInputElement} input - Dosya input elementi
 */
function handleRestoreBackup(input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            progressData = StorageService.parseBackupFile(e.target.result);
            saveData();
            renderApp();
            showToast("Yedek yüklendi");
        } catch (err) {
            alert("Hata: " + err);
        }
        input.value = '';
    };
    reader.readAsText(file);
}

/**
 * Modal kapatma handler'ı
 */
function handleCloseModal() {
    closeDetailModal();
    activeDayId = null;
}

/**
 * Gün verisini kaydetme handler'ı
 */
function handleSaveDayData() {
    if (!activeDayId) return;

    if (!progressData[activeDayId]) {
        progressData[activeDayId] = {};
    }

    // Manuel girdileri güncelle (AI verisini koru)
    progressData[activeDayId].completed = document.getElementById('inputCompleted').checked;
    progressData[activeDayId].time = document.getElementById('inputDuration').value;
    progressData[activeDayId].notes = document.getElementById('inputNotes').value;

    saveData();
    renderApp();
    handleCloseModal();
    showToast("İlerleme Başarıyla Kaydedildi");
}

/**
 * AI tetikleme handler'ı
 * @param {string} action - Eylem tipi (explain, code, quiz)
 * @param {boolean} forceRefresh - Önbelleği yoksay
 */
async function handleTriggerAI(action, forceRefresh = false) {
    if (!geminiApiKey) {
        alert("Lütfen önce AI Ayarları'ndan API anahtarı girin.");
        openSettingsModal(geminiApiKey);
        return;
    }

    const cacheKey = AIService.getCacheKey(action);

    // Önbellekten kontrol et
    if (!forceRefresh && progressData[activeDayId]?.[cacheKey]) {
        console.log("Önbellekten yükleniyor:", cacheKey);
        const label = AIService.getActionLabel(action);
        renderAIContent(
            progressData[activeDayId][cacheKey],
            label,
            () => handleTriggerAI(action, true)
        );
        return;
    }

    // Yükleme durumunu göster
    showAILoading();

    const dayInfo = {
        title: document.getElementById('modalTitle').innerText,
        desc: document.getElementById('modalDesc').innerText,
        ref: document.getElementById('modalRef').innerText
    };

    try {
        const userPrompt = AIService.buildPrompt(action, dayInfo);
        const response = await AIService.callGeminiAPI(geminiApiKey, userPrompt);

        // Önbelleğe kaydet
        if (!progressData[activeDayId]) {
            progressData[activeDayId] = {};
        }
        progressData[activeDayId][cacheKey] = response;
        await saveData();

        // Sonucu render et
        const label = AIService.getActionLabel(action);
        renderAIContent(response, label, () => handleTriggerAI(action, true));

    } catch (error) {
        showAIError(error.message);
    } finally {
        hideAILoading();
    }
}

// ==========================================
// RENDERING
// ==========================================

/**
 * Tüm uygulamayı render eder
 */
function renderApp() {
    renderCurriculum();
    updateStats();

    // Tarih gösterimi
    const dateDisplay = document.getElementById('currentDateDisplay');
    if (dateDisplay) {
        dateDisplay.innerText = new Date().toLocaleDateString('tr-TR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }
}

/**
 * Müfredatı render eder
 */
function renderCurriculum() {
    const container = document.getElementById('daysContainer');
    const nav = document.getElementById('moduleList');

    container.innerHTML = '';
    nav.innerHTML = '';

    curriculum.forEach((month, mIdx) => {
        // Sidebar navigasyonu
        const navItem = createNavItem(month, mIdx);
        nav.appendChild(navItem);

        // Ana içerik
        const monthDiv = createMonthSection(month, mIdx);
        container.appendChild(monthDiv);
    });
}

/**
 * Navigasyon öğesi oluşturur
 * @param {Object} month - Ay verisi
 * @param {number} mIdx - Ay indeksi
 * @returns {HTMLElement} Navigasyon öğesi
 */
function createNavItem(month, mIdx) {
    const navItem = document.createElement('div');
    navItem.className = 'flex items-center justify-between px-3 py-2.5 text-xs font-semibold text-slate-500 hover:bg-slate-50 hover:text-indigo-600 rounded-lg cursor-pointer transition-all mb-1 border border-transparent hover:border-slate-100';
    navItem.innerHTML = `
        <span>${month.month}</span>
        <span class="text-[10px] bg-slate-100 text-slate-400 px-1.5 py-0.5 rounded">Q${month.quarter}</span>
    `;
    navItem.onclick = () => {
        document.getElementById(`month-${mIdx}`).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    return navItem;
}

/**
 * Ay bölümü oluşturur
 * @param {Object} month - Ay verisi
 * @param {number} mIdx - Ay indeksi
 * @returns {HTMLElement} Ay bölümü
 */
function createMonthSection(month, mIdx) {
    const monthDiv = document.createElement('div');
    monthDiv.id = `month-${mIdx}`;
    monthDiv.className = 'bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden scroll-mt-6';
    monthDiv.innerHTML = `
        <div class="bg-slate-50/50 border-b border-slate-100 p-6 flex justify-between items-center">
            <div>
                <h3 class="font-black text-slate-800 text-xl">${month.month}</h3>
                <p class="text-xs text-slate-500 font-bold uppercase mt-1">${month.title}</p>
            </div>
            <span class="text-xs font-bold bg-white text-slate-600 px-3 py-1.5 rounded-lg border border-slate-200">Q${month.quarter}</span>
        </div>
    `;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'p-6 space-y-8';

    month.weeks.forEach(week => {
        const weekBlock = createWeekBlock(week, month.quarter);
        contentDiv.appendChild(weekBlock);
    });

    monthDiv.appendChild(contentDiv);
    return monthDiv;
}

/**
 * Hafta bloğu oluşturur
 * @param {Object} week - Hafta verisi
 * @param {number} quarter - Çeyrek
 * @returns {HTMLElement} Hafta bloğu
 */
function createWeekBlock(week, quarter) {
    const weekBlock = document.createElement('div');
    weekBlock.innerHTML = `
        <h4 class="text-xs font-extrabold text-indigo-500 uppercase mb-4 flex items-center gap-2 pl-1">
            <div class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
            ${week.title}
        </h4>
    `;

    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';

    week.days.forEach(day => {
        const card = createDayCard(day, quarter);
        grid.appendChild(card);
    });

    weekBlock.appendChild(grid);
    return weekBlock;
}

/**
 * Gün kartı oluşturur
 * @param {Object} day - Gün verisi
 * @param {number} quarter - Çeyrek
 * @returns {HTMLElement} Gün kartı
 */
function createDayCard(day, quarter) {
    const p = progressData[day.d] || {};
    const isDone = p.completed;
    const hasAI = p.ai_explain || p.ai_code || p.ai_quiz;

    const card = document.createElement('div');
    card.onclick = () => handleOpenDayModal(day, quarter);
    card.className = `relative p-5 rounded-2xl border transition-all cursor-pointer group flex flex-col h-full day-card ${isDone
        ? 'bg-emerald-50/40 border-emerald-200'
        : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-xl'
        }`;

    card.innerHTML = `
        <div class="flex justify-between items-start mb-3">
            <span class="text-[10px] font-mono font-bold px-2 py-1 rounded-md ${isDone ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
        }">GÜN ${day.d}</span>
            ${isDone ? '<div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs"><i class="fa-solid fa-check"></i></div>' : ''}
        </div>
        <h5 class="text-sm font-bold text-slate-800 leading-snug mb-3 group-hover:text-indigo-700 transition-colors line-clamp-2">${day.t}</h5>
        <div class="mt-auto pt-3 border-t border-dashed ${isDone ? 'border-emerald-200' : 'border-slate-100'} flex items-center gap-3">
            ${p.time ? `<span class="flex items-center gap-1.5 text-[10px] font-bold text-slate-500"><i class="fa-regular fa-clock"></i> ${p.time}dk</span>` : '<span class="text-[10px] text-slate-300 font-bold uppercase">Bekliyor</span>'}
            ${hasAI ? `<span class="flex items-center gap-1 text-[10px] font-bold text-indigo-500 ml-auto" title="AI İçeriği Hazır"><i class="fa-solid fa-robot"></i></span>` : ''}
        </div>
    `;

    return card;
}

/**
 * Gün modalını açma handler'ı
 * @param {Object} day - Gün verisi
 * @param {number} quarter - Çeyrek
 */
function handleOpenDayModal(day, quarter) {
    activeDayId = day.d;
    openDetailModal(day, quarter, progressData);
}

/**
 * İstatistikleri günceller
 */
function updateStats() {
    const keys = Object.keys(progressData);
    const completed = keys.filter(k => progressData[k].completed).length;

    const statsElement = document.getElementById('statsCompleted');
    if (statsElement) {
        statsElement.innerText = `${completed}/365`;
    }
}

// ==========================================
// START
// ==========================================

// Fonksiyonları hemen window'a ekle (modül yüklenir yüklenmez)
// Bu, HTML'deki onclick handler'lar için gerekli
setupEventListeners();

// DOM yüklendiğinde uygulamayı başlat
document.addEventListener('DOMContentLoaded', init);

