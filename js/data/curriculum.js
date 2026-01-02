/**
 * DevJourney 2026: Smart AI Edition
 * Müfredat Verileri
 */

// Ay isimlerini generate etmek için yardımcı
// Not: Şubat manuel olarak tanımlanmış, burada Mart'tan başlıyor
const MONTH_NAMES = [
    "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

const MONTH_TITLES = [
    "Veri Yapıları & OS",
    "Sistem Mimarisi",
    "Dağıtık Sistemler",
    "Web Teknolojileri",
    "DevOps & Cloud",
    "Siber Güvenlik",
    "Veritabanı & Big Data",
    "Yapay Zeka (AI)",
    "Programlama Paradigmaları",
    "Profesyonel Yetkinlikler"
];

export const curriculum = [
    {
        month: "Ocak",
        title: "Kodun Temelleri ve Kalite",
        quarter: 1,
        weeks: [
            {
                title: "Hafta 1: Temiz Kod Felsefesi ve İsimlendirme",
                days: [
                    { d: 1, t: "Technical Debt (Teknik Borç)", ref: "[Martin Fowler]", desc: "Technical Debt kavramı, türleri ve faizi. Teknik borç kavramı, finansal faiz metaforu ve projelere etkisi." },
                    { d: 2, t: "İsimlendirme Sanatı", ref: "[Clean Code]", desc: "İsimlendirme Sanatı: Intention-Revealing Names (Niyeti belli eden isimler). Değişken ve fonksiyonlarda niyeti belli eden isimlendirme." },
                    { d: 3, t: "Fonksiyon Anatomisi", ref: "[Clean Code]", desc: "Fonksiyon Anatomisi: Tek Sorumluluk ve Boyut (Small Functions). Bir fonksiyon sadece tek bir iş yapmalı." },
                    { d: 4, t: "DRY (Don't Repeat Yourself)", ref: "[Pragmatic Programmer]", desc: "DRY (Don't Repeat Yourself) ilkesi ve yanlış anlaşılmaları (WET). Kendini tekrar etme prensibi." },
                    { d: 5, t: "KISS ve YAGNI", ref: "[XP Principles]", desc: "KISS (Keep It Simple Stupid) ve YAGNI (You Aren't Gonna Need It) prensipleri." },
                    { d: 6, t: "Magic Numbers & Named Constants", ref: "[Code Complete]", desc: "Kodda Magic Numbers kullanımı ve çözüm yöntemleri (Named Constants). Belirsiz sayılar yerine isimlendirilmiş sabitler kullanmak." },
                    { d: 7, t: "Code as Documentation", ref: "[Clean Code]", desc: "Yorum Satırları: Ne zaman gerekli, ne zaman kodun başarısızlığıdır? (Code as Documentation)." }
                ]
            },
            {
                title: "Hafta 2: Nesne Yönelimli Prensipler (SOLID)",
                days: [
                    { d: 8, t: "Single Responsibility Principle (SRP)", ref: "[Robert C. Martin]", desc: "Single Responsibility Principle (SRP): Sınıfları bölme sanatı." },
                    { d: 9, t: "Open/Closed Principle (OCP)", ref: "[Meyer]", desc: "Open/Closed Principle (OCP): Değişime kapalı, gelişime açık tasarım." },
                    { d: 10, t: "Liskov Substitution Principle (LSP)", ref: "[Liskov]", desc: "Liskov Substitution Principle (LSP): Mirasın (Inheritance) tehlikeleri. Alt sınıflar üst sınıfların yerine geçebilmeli." },
                    { d: 11, t: "Interface Segregation Principle (ISP)", ref: "[Robert C. Martin]", desc: "Interface Segregation Principle (ISP): Fat Interface probleminden kaçınma." },
                    { d: 12, t: "Dependency Inversion Principle (DIP)", ref: "[Robert C. Martin]", desc: "Dependency Inversion Principle (DIP): Bağımlılıkları yönetme." },
                    { d: 13, t: "Dependency Injection (DI)", ref: "[Martin Fowler]", desc: "Dependency Injection (DI) nedir? Constructor vs Setter Injection. Bağımlılıkların dışarıdan verilmesi." },
                    { d: 14, t: "Composition over Inheritance", ref: "[Gang of Four]", desc: "Composition over Inheritance (Miras yerine Kompozisyon) prensibi." }
                ]
            },
            {
                title: "Hafta 3: Refactoring (Yeniden Düzenleme) Teknikleri",
                days: [
                    { d: 15, t: "Refactoring Nedir?", ref: "[Refactoring Book]", desc: "Refactoring nedir? Red-Green-Refactor döngüsü." },
                    { d: 16, t: "Code Smell: Long Method", ref: "[Refactoring Book]", desc: "Code Smells: Long Method ve Extract Method tekniği. Uzun metotları parçalama." },
                    { d: 17, t: "Code Smell: Large Class (God Object)", ref: "[Refactoring Book]", desc: "Code Smells: Large Class (God Object) ve parçalama stratejileri. Devasa sınıfları bölme." },
                    { d: 18, t: "Code Smell: Feature Envy", ref: "[Refactoring Book]", desc: "Code Smells: Feature Envy ve metodu doğru yere taşıma." },
                    { d: 19, t: "Code Smell: Primitive Obsession", ref: "[Refactoring Book]", desc: "Code Smells: Primitive Obsession ve Value Objects kullanımı." },
                    { d: 20, t: "Simplify Conditional Expressions", ref: "[Refactoring Book]", desc: "Teknik: Simplify Conditional Expressions (Guard Clauses kullanımı). Erken return ile karmaşıklığı azaltma." },
                    { d: 21, t: "Replace Conditional with Polymorphism", ref: "[Refactoring Book]", desc: "Teknik: Replace Conditional with Polymorphism (If/Switch yerine çok biçimlilik)." }
                ]
            },
            {
                title: "Hafta 4: Test Mühendisliği",
                days: [
                    { d: 22, t: "Unit Test (Birim Testi)", ref: "[Kent Beck]", desc: "Unit Test (Birim Testi) nedir? AAA (Arrange-Act-Assert) yapısı." },
                    { d: 23, t: "Integration Test (Entegrasyon Testi)", ref: "[Martin Fowler]", desc: "Integration Test (Entegrasyon Testi) ve Unit Test farkı. Birimler arası uyum testi." },
                    { d: 24, t: "Test Driven Development (TDD)", ref: "[Kent Beck]", desc: "Test Driven Development (TDD) felsefesi ve pratiği." },
                    { d: 25, t: "Test Doubles", ref: "[Martin Fowler]", desc: "Test Doubles: Mock, Stub, Fake, Spy ve Dummy farkları." },
                    { d: 26, t: "Code Coverage (Kod Kapsamı)", ref: "[Michael Cohn]", desc: "Code Coverage (Kod Kapsamı) metriği: Ne kadar güvenilir? Kod kapsamı analizi." },
                    { d: 27, t: "Mutation Testing", ref: "[Geoffrey DeMets]", desc: "Mutation Testing: Testlerinizin kalitesini test etmek." },
                    { d: 28, t: "Behavior Driven Development (BDD)", ref: "[Dan North]", desc: "Behavior Driven Development (BDD) ve Gherkin dili (Given-When-Then). Davranış odaklı geliştirme." },
                    { d: 29, t: "End-to-End (E2E) Testler", ref: "[Cypress/Playwright]", desc: "End-to-End (E2E) Testler (Selenium/Cypress/Playwright). Uçtan uca testler." },
                    { d: 30, t: "Property-Based Testing", ref: "[John Hughes]", desc: "Property-Based Testing kavramı (Örnek tabanlı testlerin ötesi). Rastgele veri testleri." },
                    { d: 31, t: "Test Piramidi (Test Pyramid)", ref: "[Mike Cohn]", desc: "Test Piramidi (Test Pyramid) ve Anti-Pattern'ler (Ice Cream Cone). İdeal test dağılımı." }
                ]
            }
        ]
    },
    {
        month: "Şubat",
        title: "Tasarım Desenleri (Design Patterns)",
        quarter: 1,
        weeks: [
            {
                title: "Hafta 5: Yaratımsal (Creational) Desenler",
                days: [
                    { d: 32, t: "Singleton Pattern", ref: "[Gang of Four]", desc: "Singleton Pattern: Kullanımı ve neden Anti-Pattern sayılabilir?" },
                    { d: 33, t: "Factory Method Pattern", ref: "[Gang of Four]", desc: "Factory Method Pattern: Nesne üretimini alt sınıflara bırakmak." },
                    { d: 34, t: "Abstract Factory Pattern", ref: "[Gang of Four]", desc: "Abstract Factory Pattern: İlişkili nesne aileleri üretmek." },
                    { d: 35, t: "Builder Pattern", ref: "[Gang of Four]", desc: "Builder Pattern: Karmaşık nesneleri adım adım inşa etmek." },
                    { d: 36, t: "Prototype Pattern", ref: "[Gang of Four]", desc: "Prototype Pattern: Nesneleri kopyalayarak üretmek." },
                    { d: 37, t: "Modern DI Container'lar", ref: "[Spring/NestJS]", desc: "Modern DI Container'lar (Spring/NestJS) nasıl Factory/Singleton kullanır?" },
                    { d: 38, t: "Object Pool Pattern", ref: "[Gang of Four]", desc: "Object Pool Pattern: Performans optimizasyonu." }
                ]
            },
            {
                title: "Hafta 6: Yapısal (Structural) Desenler",
                days: [
                    { d: 39, t: "Adapter Pattern", ref: "[Gang of Four]", desc: "Adapter Pattern: Uyumsuz arayüzleri bağlamak." },
                    { d: 40, t: "Decorator Pattern", ref: "[Gang of Four]", desc: "Decorator Pattern: Nesnelere dinamik özellik eklemek (Wrapper)." },
                    { d: 41, t: "Facade Pattern", ref: "[Gang of Four]", desc: "Facade Pattern: Karmaşık sistemleri basitleştirmek." },
                    { d: 42, t: "Proxy Pattern", ref: "[Gang of Four]", desc: "Proxy Pattern: Erişim kontrolü, lazy loading ve loglama." },
                    { d: 43, t: "Composite Pattern", ref: "[Gang of Four]", desc: "Composite Pattern: Ağaç yapıları ve hiyerarşiler." },
                    { d: 44, t: "Bridge Pattern", ref: "[Gang of Four]", desc: "Bridge Pattern: Soyutlama ve uygulamayı ayırmak." },
                    { d: 45, t: "Flyweight Pattern", ref: "[Gang of Four]", desc: "Flyweight Pattern: Bellek optimizasyonu (Örn: String Pool)." }
                ]
            },
            {
                title: "Hafta 7: Davranışsal (Behavioral) Desenler - 1",
                days: [
                    { d: 46, t: "Strategy Pattern", ref: "[Gang of Four]", desc: "Strategy Pattern: Algoritmayı çalışma zamanında değiştirmek." },
                    { d: 47, t: "Observer Pattern", ref: "[Gang of Four]", desc: "Observer Pattern: Olay (Event) tabanlı sistemlerin temeli." },
                    { d: 48, t: "Command Pattern", ref: "[Gang of Four]", desc: "Command Pattern: İşlemleri nesneleştirmek (Undo/Redo)." },
                    { d: 49, t: "Template Method Pattern", ref: "[Gang of Four]", desc: "Template Method Pattern: Algoritma iskeleti oluşturmak." },
                    { d: 50, t: "Iterator Pattern", ref: "[Gang of Four]", desc: "Iterator Pattern: Koleksiyonlarda gezinme standardı." },
                    { d: 51, t: "State Pattern", ref: "[Gang of Four]", desc: "State Pattern: Durum makineleri (State Machines) yönetimi." },
                    { d: 52, t: "Chain of Responsibility", ref: "[Gang of Four]", desc: "Chain of Responsibility: İstekleri zincirleme işlemek (Middleware)." }
                ]
            },
            {
                title: "Hafta 8: Davranışsal Desenler - 2 ve Mimari Desenler",
                days: [
                    { d: 53, t: "Mediator Pattern", ref: "[Gang of Four]", desc: "Mediator Pattern: Nesneler arası iletişimi merkezileştirmek." },
                    { d: 54, t: "Memento Pattern", ref: "[Gang of Four]", desc: "Memento Pattern: Nesne durumunu saklamak ve geri yüklemek." },
                    { d: 55, t: "Visitor Pattern", ref: "[Gang of Four]", desc: "Visitor Pattern: Sınıfları değiştirmeden yeni operasyonlar eklemek." },
                    { d: 56, t: "MVC (Model-View-Controller)", ref: "[Trygve Reenskaug]", desc: "MVC (Model-View-Controller) Mimarisi: Tarihçe ve kullanım." },
                    { d: 57, t: "MVVM (Model-View-ViewModel)", ref: "[John Gossman]", desc: "MVVM (Model-View-ViewModel) Mimarisi (Frontend odaklı)." },
                    { d: 58, t: "Repository Pattern", ref: "[Martin Fowler]", desc: "Repository Pattern: Veri erişim soyutlaması." },
                    { d: 59, t: "Unit of Work Pattern", ref: "[Martin Fowler]", desc: "Unit of Work Pattern: Transaction yönetimi." }
                ]
            }
        ]
    },
    {
        month: "Mart",
        title: "Veri Yapıları, Algoritmalar ve İşletim Sistemleri",
        quarter: 1,
        weeks: [
            {
                title: "Hafta 9: Temel Veri Yapıları ve Karmaşıklık",
                days: [
                    { d: 60, t: "Big O Notation", ref: "[Donald Knuth]", desc: "Big O Notation: Zaman ve Bellek karmaşıklığı analizi." },
                    { d: 61, t: "Arrays vs. Linked Lists", ref: "[CLRS]", desc: "Arrays vs. Linked Lists: Bellek yerleşimi ve Cache Locality." },
                    { d: 62, t: "Hash Tables", ref: "[CLRS]", desc: "Hash Tables: Hashing fonksiyonları ve Çakışma (Collision) çözümleri." },
                    { d: 63, t: "Stacks ve Queues", ref: "[CLRS]", desc: "Stacks ve Queues: LIFO/FIFO mantığı ve kullanım alanları." },
                    { d: 64, t: "Priority Queues ve Heaps", ref: "[CLRS]", desc: "Priority Queues ve Heaps: Öncelik yönetimi." },
                    { d: 65, t: "Recursion (Özyineleme)", ref: "[CLRS]", desc: "Recursion (Özyineleme): Temel mantık ve Stack Overflow riski." },
                    { d: 66, t: "Dynamic Programming", ref: "[Richard Bellman]", desc: "Dynamic Programming: Memoization vs. Tabulation." }
                ]
            },
            {
                title: "Hafta 10: Ağaçlar ve Grafikler",
                days: [
                    { d: 67, t: "Binary Search Trees (BST)", ref: "[CLRS]", desc: "Binary Search Trees (BST): Arama mantığı." },
                    { d: 68, t: "Balanced Trees: AVL Trees", ref: "[Adelson-Velsky & Landis]", desc: "Balanced Trees: AVL Trees (Dengeleme algoritmaları)." },
                    { d: 69, t: "Red-Black Trees", ref: "[Rudolf Bayer]", desc: "Red-Black Trees: Linux kernel ve dil kütüphanelerindeki yeri." },
                    { d: 70, t: "Graphs", ref: "[CLRS]", desc: "Graphs: Adjacency Matrix vs. Adjacency List temsili." },
                    { d: 71, t: "Graph Traversals: BFS", ref: "[CLRS]", desc: "Graph Traversals: BFS (Breadth-First Search) ve kullanım alanları." },
                    { d: 72, t: "Graph Traversals: DFS", ref: "[CLRS]", desc: "Graph Traversals: DFS (Depth-First Search) ve kullanım alanları." },
                    { d: 73, t: "Shortest Path: Dijkstra ve A*", ref: "[Edsger Dijkstra]", desc: "Shortest Path: Dijkstra Algoritması ve A* (A-Star)." }
                ]
            },
            {
                title: "Hafta 11: İleri Veri Yapıları (Sistem Odaklı)",
                days: [
                    { d: 74, t: "B-Trees ve B+ Trees", ref: "[Rudolf Bayer]", desc: "B-Trees ve B+ Trees: Veritabanı indeksleri neden bunu kullanır?" },
                    { d: 75, t: "LSM Trees (Log-Structured Merge-Trees)", ref: "[Patrick O'Neil]", desc: "LSM Trees (Log-Structured Merge-Trees): NoSQL ve yazma performansı." },
                    { d: 76, t: "Tries (Prefix Trees)", ref: "[Edward Fredkin]", desc: "Tries (Prefix Trees): Autocomplete sistemleri." },
                    { d: 77, t: "Bloom Filters", ref: "[Burton Bloom]", desc: "Bloom Filters: Olasılıksal veri yapıları ve False Positive kavramı." },
                    { d: 78, t: "HyperLogLog", ref: "[Philippe Flajolet]", desc: "HyperLogLog: Benzersiz eleman sayma (Cardinality estimation)." },
                    { d: 79, t: "Count-Min Sketch", ref: "[Graham Cormode]", desc: "Count-Min Sketch: Veri akışlarında frekans sayma." },
                    { d: 80, t: "Merkle Trees", ref: "[Ralph Merkle]", desc: "Merkle Trees: Blockchain ve Veri bütünlüğü (integrity)." }
                ]
            },
            {
                title: "Hafta 12: İşletim Sistemi (OS) Kavramları",
                days: [
                    { d: 81, t: "Process vs. Thread", ref: "[Andrew Tanenbaum]", desc: "Process vs. Thread: Farklar ve kaynak kullanımı." },
                    { d: 82, t: "Concurrency vs. Parallelism", ref: "[Andrew Tanenbaum]", desc: "Concurrency vs. Parallelism: Aynı anda yapmak vs. Aynı anda yönetmek." },
                    { d: 83, t: "Synchronization", ref: "[Andrew Tanenbaum]", desc: "Synchronization: Locks, Mutexes, Semaphores." },
                    { d: 84, t: "Deadlock, Livelock ve Starvation", ref: "[Andrew Tanenbaum]", desc: "Deadlock, Livelock ve Starvation problemleri." },
                    { d: 85, t: "Stack vs. Heap Memory", ref: "[Andrew Tanenbaum]", desc: "Stack vs. Heap Memory: Bellek yönetimi farkları." },
                    { d: 86, t: "Garbage Collection", ref: "[John McCarthy]", desc: "Garbage Collection: Tracing vs. Reference Counting." },
                    { d: 87, t: "Context Switching", ref: "[Andrew Tanenbaum]", desc: "Context Switching: İşlemci maliyeti ve performansa etkisi." },
                    { d: 88, t: "Virtual Memory, Paging ve Swap", ref: "[Andrew Tanenbaum]", desc: "Virtual Memory, Paging ve Swap alanı." },
                    { d: 89, t: "I/O Models", ref: "[Andrew Tanenbaum]", desc: "I/O Models: Blocking, Non-Blocking ve Async I/O." },
                    { d: 90, t: "Dosya Sistemleri (File Systems)", ref: "[Andrew Tanenbaum]", desc: "Dosya Sistemleri (File Systems): Inode, Journaling kavramları." }
                ]
            }
        ]
    },
    {
        month: "Nisan",
        title: "Sistem Mimarisi ve Tasarımı (Architecture)",
        quarter: 2,
        weeks: [
            {
                title: "Hafta 13: Mimari Stiller",
                days: [
                    { d: 91, t: "Monolithic Architecture", ref: "[Martin Fowler]", desc: "Monolithic Architecture: Avantajlar, dezavantajlar ve Modular Monolith." },
                    { d: 92, t: "Microservices Architecture", ref: "[Martin Fowler]", desc: "Microservices Architecture: Dağıtık sistem karmaşıklığı ve faydaları." },
                    { d: 93, t: "SOA vs. Microservices", ref: "[Martin Fowler]", desc: "Service-Oriented Architecture (SOA) vs. Microservices farkı." },
                    { d: 94, t: "Serverless Architecture (FaaS)", ref: "[AWS Lambda]", desc: "Serverless Architecture (FaaS): Cold Start ve Vendor Lock-in." },
                    { d: 95, t: "Event-Driven Architecture (EDA)", ref: "[Martin Fowler]", desc: "Event-Driven Architecture (EDA): Gevşek bağlı (loosely coupled) sistemler." },
                    { d: 96, t: "Hexagonal Architecture", ref: "[Alistair Cockburn]", desc: "Hexagonal Architecture (Ports and Adapters): Bağımlılıkları izole etmek." },
                    { d: 97, t: "Clean Architecture", ref: "[Robert C. Martin]", desc: "Clean Architecture (Onion Architecture): Katmanlı yapı." }
                ]
            },
            {
                title: "Hafta 14: Mikroservis Desenleri",
                days: [
                    { d: 98, t: "API Gateway Pattern", ref: "[Chris Richardson]", desc: "API Gateway Pattern: Tek giriş noktası ve cross-cutting concerns." },
                    { d: 99, t: "Service Discovery", ref: "[Chris Richardson]", desc: "Service Discovery: Servislerin birbirini bulması (Client-side vs Server-side)." },
                    { d: 100, t: "Circuit Breaker Pattern", ref: "[Michael Nygard]", desc: "Circuit Breaker Pattern: Hata toleransı ve Fail Fast." },
                    { d: 101, t: "Bulkhead Pattern", ref: "[Michael Nygard]", desc: "Bulkhead Pattern: Hata izolasyonu (Gemi bölmeleri analojisi)." },
                    { d: 102, t: "Retry Pattern ve Exponential Backoff", ref: "[AWS]", desc: "Retry Pattern ve Exponential Backoff/Jitter stratejileri." },
                    { d: 103, t: "Sidecar Pattern", ref: "[Brendan Burns]", desc: "Sidecar Pattern: Kubernetes dünyasında yardımcı konteynerler." },
                    { d: 104, t: "Strangler Fig Pattern", ref: "[Martin Fowler]", desc: "Strangler Fig Pattern: Monolitten Mikroservise güvenli geçiş." }
                ]
            },
            {
                title: "Hafta 15: İletişim Modelleri ve API",
                days: [
                    { d: 105, t: "Synchronous vs. Asynchronous Communication", ref: "[Martin Fowler]", desc: "Synchronous vs. Asynchronous Communication." },
                    { d: 106, t: "REST (Representational State Transfer)", ref: "[Roy Fielding]", desc: "REST (Representational State Transfer): Kaynak odaklı mimari ve Richardson Maturity Model." },
                    { d: 107, t: "GraphQL", ref: "[Facebook]", desc: "GraphQL: İstemci odaklı sorgulama ve Over-fetching çözümü." },
                    { d: 108, t: "gRPC ve Protocol Buffers", ref: "[Google]", desc: "gRPC ve Protocol Buffers: Yüksek performanslı RPC." },
                    { d: 109, t: "WebSockets", ref: "[RFC 6455]", desc: "WebSockets: Çift yönlü (full-duplex) iletişim." },
                    { d: 110, t: "Message Queues (RabbitMQ)", ref: "[RabbitMQ]", desc: "Message Queues (RabbitMQ): Point-to-Point ve asenkron işleme." },
                    { d: 111, t: "Pub/Sub Model (Kafka)", ref: "[Apache Kafka]", desc: "Pub/Sub Model (Kafka): Olay akışı ve veri yayıncılığı." }
                ]
            },
            {
                title: "Hafta 16: Veritabanı Mimarisi",
                days: [
                    { d: 112, t: "SQL vs. NoSQL", ref: "[Martin Fowler]", desc: "SQL (Relational) vs. NoSQL (Non-Relational) seçim kriterleri." },
                    { d: 113, t: "ACID Prensipleri", ref: "[Theo Haerder]", desc: "ACID Prensipleri (Atomicity, Consistency, Isolation, Durability)." },
                    { d: 114, t: "BASE Prensipleri", ref: "[Dan Pritchett]", desc: "BASE Prensipleri (Basically Available, Soft state, Eventual consistency)." },
                    { d: 115, t: "Veritabanı Normalizasyonu", ref: "[Edgar F. Codd]", desc: "Veritabanı Normalizasyonu (1NF, 2NF, 3NF) ve anormallikler." },
                    { d: 116, t: "Denormalizasyon", ref: "[Martin Fowler]", desc: "Denormalizasyon: Okuma performansı için veri tekrarı." },
                    { d: 117, t: "Database Indexing", ref: "[Database Systems]", desc: "Database Indexing: Clustered vs. Non-Clustered Index." },
                    { d: 118, t: "Query Optimization", ref: "[Database Systems]", desc: "Query Optimization: Execution Plan okuma ve analiz." },
                    { d: 119, t: "N+1 Query Problemi", ref: "[Martin Fowler]", desc: "N+1 Query Problemi: ORM kullanımında yaygın performans tuzağı." },
                    { d: 120, t: "Database Transactions ve Isolation Levels", ref: "[ANSI SQL]", desc: "Database Transactions ve Isolation Levels (Dirty Read, Phantom Read)." }
                ]
            }
        ]
    },
    {
        month: "Mayıs",
        title: "Dağıtık Sistemler (Distributed Systems)",
        quarter: 2,
        weeks: [
            {
                title: "Hafta 17: Dağıtık Sistem Temelleri",
                days: [
                    { d: 121, t: "Vertical Scaling vs. Horizontal Scaling", ref: "[Martin Abbott]", desc: "Vertical Scaling (Scale-up) vs. Horizontal Scaling (Scale-out)." },
                    { d: 122, t: "CAP Teoremi", ref: "[Eric Brewer]", desc: "CAP Teoremi: Tutarlılık, Erişilebilirlik ve Bölüm Toleransı dengesi." },
                    { d: 123, t: "PACELC Teoremi", ref: "[Daniel Abadi]", desc: "PACELC Teoremi: Gecikme (Latency) ve Tutarlılık ödünleşimi." },
                    { d: 124, t: "Load Balancing", ref: "[Martin Abbott]", desc: "Load Balancing: L4 (Transport) vs. L7 (Application) yük dengeleme." },
                    { d: 125, t: "Load Balancing Algoritmaları", ref: "[Martin Abbott]", desc: "Load Balancing Algoritmaları: Round Robin, Least Connections, Consistent Hashing." },
                    { d: 126, t: "Stateless vs. Stateful Services", ref: "[Martin Fowler]", desc: "Stateless vs. Stateful Services: Ölçeklenebilirlik etkisi." },
                    { d: 127, t: "Sticky Sessions (Session Affinity)", ref: "[Martin Abbott]", desc: "Sticky Sessions (Session Affinity) ve dezavantajları." }
                ]
            },
            {
                title: "Hafta 18: Veri Dağıtımı ve Çoğaltma",
                days: [
                    { d: 128, t: "Database Replication", ref: "[Martin Fowler]", desc: "Database Replication: Master-Slave vs. Multi-Master." },
                    { d: 129, t: "Database Sharding (Partitioning)", ref: "[Martin Fowler]", desc: "Database Sharding (Partitioning): Veriyi yatay bölme." },
                    { d: 130, t: "Consistent Hashing", ref: "[David Karger]", desc: "Consistent Hashing: Dinamik düğüm ekleme/çıkarma (Ring Topology)." },
                    { d: 131, t: "Partitioning Stratejileri", ref: "[Martin Fowler]", desc: "Partitioning Stratejileri: Range Based, Hash Based, Directory Based." },
                    { d: 132, t: "Distributed Transactions: 2PC", ref: "[Jim Gray]", desc: "Distributed Transactions: Two-Phase Commit (2PC) protokolü." },
                    { d: 133, t: "Saga Pattern", ref: "[Hector Garcia-Molina]", desc: "Saga Pattern: Mikroservislerde uzun süren işlemler (Choreography vs Orchestration)." },
                    { d: 134, t: "Event Sourcing", ref: "[Martin Fowler]", desc: "Event Sourcing: Durum yerine olayları saklamak." }
                ]
            },
            {
                title: "Hafta 19: Tutarlılık ve Konsensüs (Consensus)",
                days: [
                    { d: 135, t: "Strong Consistency vs. Eventual Consistency", ref: "[Eric Brewer]", desc: "Strong Consistency vs. Eventual Consistency modelleri." },
                    { d: 136, t: "Distributed Consensus ve Bizans Generalleri", ref: "[Leslie Lamport]", desc: "Distributed Consensus problemi ve Bizans Generalleri Problemi." },
                    { d: 137, t: "Paxos Algoritması", ref: "[Leslie Lamport]", desc: "Paxos Algoritması: Tarihçesi ve temel mantığı (Proposal/Accept)." },
                    { d: 138, t: "Raft Algoritması", ref: "[Diego Ongaro]", desc: "Raft Algoritması: Leader Election, Log Replication ve Safety." },
                    { d: 139, t: "Gossip Protocol", ref: "[Alan Demers]", desc: "Gossip Protocol: Epidemik bilgi yayılımı (Cassandra, Dynamo)." },
                    { d: 140, t: "Clock Synchronization (NTP)", ref: "[David Mills]", desc: "Clock Synchronization (NTP) sorunu ve Physical Clocks." },
                    { d: 141, t: "Logical Clocks", ref: "[Leslie Lamport]", desc: "Logical Clocks: Lamport Timestamps ve Vector Clocks (Olay sıralama)." }
                ]
            },
            {
                title: "Hafta 20: Caching (Önbellekleme) Stratejileri",
                days: [
                    { d: 142, t: "Cache Hit vs. Cache Miss", ref: "[Martin Fowler]", desc: "Cache Hit vs. Cache Miss ve Latency etkisi." },
                    { d: 143, t: "Caching Strategy: Cache-Aside", ref: "[Martin Fowler]", desc: "Caching Strategy: Cache-Aside (Lazy Loading)." },
                    { d: 144, t: "Caching Strategy: Write-Through", ref: "[Martin Fowler]", desc: "Caching Strategy: Write-Through (Yazma tutarlılığı)." },
                    { d: 145, t: "Caching Strategy: Write-Back", ref: "[Martin Fowler]", desc: "Caching Strategy: Write-Back / Write-Behind (Performans)." },
                    { d: 146, t: "Cache Eviction Policies", ref: "[Martin Fowler]", desc: "Cache Eviction Policies: LRU (Least Recently Used), LFU, FIFO." },
                    { d: 147, t: "Distributed Caching", ref: "[Redis/Memcached]", desc: "Distributed Caching: Redis ve Memcached mimarileri." },
                    { d: 148, t: "Cache Stampede (Thundering Herd)", ref: "[Martin Fowler]", desc: "Cache Stampede (Thundering Herd) problemi ve çözüm yöntemleri." },
                    { d: 149, t: "Content Delivery Network (CDN)", ref: "[Akamai]", desc: "Content Delivery Network (CDN): Statik içeriği uca taşımak." },
                    { d: 150, t: "Edge Computing", ref: "[Cloud Native]", desc: "Edge Computing: Hesaplamayı veriye yaklaştırmak." }
                ]
            }
        ]
    },
    {
        month: "Haziran",
        title: "Web Teknolojileri ve Derinlemesine İnternet",
        quarter: 2,
        weeks: [
            {
                title: "Hafta 21: İnternet Protokolleri",
                days: [
                    { d: 151, t: "OSI Modeli ve TCP/IP Modeli", ref: "[ISO/IEC 7498]", desc: "OSI Modeli (7 Katman) ve TCP/IP Modeli." },
                    { d: 152, t: "TCP vs. UDP", ref: "[RFC 793]", desc: "TCP vs. UDP: Bağlantı odaklı vs. Bağlantısız iletişim." },
                    { d: 153, t: "TCP Handshake ve Flow Control", ref: "[RFC 793]", desc: "TCP Handshake (3-way), Flow Control ve Congestion Control." },
                    { d: 154, t: "DNS (Domain Name System)", ref: "[RFC 1035]", desc: "DNS (Domain Name System): Recursive vs Iterative sorgular." },
                    { d: 155, t: "HTTP/1.1 vs HTTP/2", ref: "[RFC 7540]", desc: "HTTP/1.1 vs HTTP/2: Multiplexing, Header Compression (HPACK)." },
                    { d: 156, t: "HTTP/3 ve QUIC", ref: "[RFC 9000]", desc: "HTTP/3 ve QUIC: UDP üzerinden güvenli ve hızlı web." },
                    { d: 157, t: "HTTPS ve SSL/TLS Handshake", ref: "[RFC 8446]", desc: "HTTPS ve SSL/TLS Handshake: Sertifikalar ve şifreleme." }
                ]
            },
            {
                title: "Hafta 22: Web Performansı ve Rendering",
                days: [
                    { d: 158, t: "Critical Rendering Path", ref: "[Google Web Fundamentals]", desc: "Critical Rendering Path: DOM, CSSOM ve Render Tree oluşumu." },
                    { d: 159, t: "Browser Rendering: Layout ve Paint", ref: "[Google Web Fundamentals]", desc: "Browser Rendering: Layout (Reflow) ve Paint (Repaint) maliyetleri." },
                    { d: 160, t: "Core Web Vitals: LCP", ref: "[Google]", desc: "Core Web Vitals: LCP (Largest Contentful Paint) - Yükleme hızı." },
                    { d: 161, t: "Core Web Vitals: CLS", ref: "[Google]", desc: "Core Web Vitals: CLS (Cumulative Layout Shift) - Görsel stabilite." },
                    { d: 162, t: "Core Web Vitals: INP", ref: "[Google]", desc: "Core Web Vitals: INP (Interaction to Next Paint) - Tepkisellik." },
                    { d: 163, t: "Frontend Optimizasyonu", ref: "[Webpack/Vite]", desc: "Frontend Optimizasyonu: Minification, Bundling ve Tree Shaking." },
                    { d: 164, t: "Islands Architecture ve Progressive Hydration", ref: "[Astro]", desc: "Islands Architecture (Astro) ve Progressive Hydration." }
                ]
            },
            {
                title: "Hafta 23: Tarayıcı Güvenliği ve Mekanizmaları",
                days: [
                    { d: 165, t: "CORS (Cross-Origin Resource Sharing)", ref: "[W3C]", desc: "CORS (Cross-Origin Resource Sharing): Tarayıcı tabanlı güvenlik." },
                    { d: 166, t: "CSP (Content Security Policy)", ref: "[W3C]", desc: "CSP (Content Security Policy): XSS saldırılarını önleme." },
                    { d: 167, t: "XSS (Cross-Site Scripting)", ref: "[OWASP]", desc: "XSS (Cross-Site Scripting): Türleri (Reflected, Stored, DOM) ve korunma." },
                    { d: 168, t: "CSRF (Cross-Site Request Forgery)", ref: "[OWASP]", desc: "CSRF (Cross-Site Request Forgery) ve Anti-CSRF Token/SameSite Cookie." },
                    { d: 169, t: "Cookies, LocalStorage, SessionStorage", ref: "[W3C]", desc: "Cookies, LocalStorage, SessionStorage: Depolama farkları ve güvenlik." },
                    { d: 170, t: "Service Workers", ref: "[W3C]", desc: "Service Workers: Çevrimdışı çalışma ve PWA temeli." },
                    { d: 171, t: "WebAssembly (Wasm)", ref: "[W3C]", desc: "WebAssembly (Wasm): Tarayıcıda yüksek performanslı kod çalıştırma." }
                ]
            },
            {
                title: "Hafta 24: API Tasarımı ve Yönetimi",
                days: [
                    { d: 172, t: "Idempotency", ref: "[REST API Design]", desc: "Idempotency: Güvenli API tekrar istekleri." },
                    { d: 173, t: "API Versioning", ref: "[REST API Design]", desc: "API Versioning: URI, Header, Query Parameter stratejileri." },
                    { d: 174, t: "Pagination", ref: "[REST API Design]", desc: "Pagination: Offset-based vs. Cursor-based (Performans farkı)." },
                    { d: 175, t: "Rate Limiting Algoritmaları", ref: "[API Design]", desc: "Rate Limiting Algoritmaları: Token Bucket, Leaky Bucket." },
                    { d: 176, t: "HATEOAS", ref: "[Roy Fielding]", desc: "HATEOAS (Hypermedia as the Engine of Application State)." },
                    { d: 177, t: "OpenAPI (Swagger) Spesifikasyonu", ref: "[OpenAPI Initiative]", desc: "OpenAPI (Swagger) Spesifikasyonu ve Contract-First Development." },
                    { d: 178, t: "Webhooks", ref: "[API Design]", desc: "Webhooks: Olay bazlı ters API çağrıları." },
                    { d: 179, t: "Backend for Frontend (BFF) Pattern", ref: "[Sam Newman]", desc: "Backend for Frontend (BFF) Pattern: İstemciye özel API katmanı." },
                    { d: 180, t: "Server-Sent Events (SSE)", ref: "[W3C]", desc: "Server-Sent Events (SSE): Tek yönlü gerçek zamanlı veri." }
                ]
            }
        ]
    },
    {
        month: "Temmuz",
        title: "DevOps, Cloud Native ve Altyapı",
        quarter: 3,
        weeks: [
            {
                title: "Hafta 25: Konteynerizasyon",
                days: [
                    { d: 181, t: "Sanal Makineler (VM) vs. Konteynerler", ref: "[Docker]", desc: "Sanal Makineler (VM) vs. Konteynerler: Hypervisor vs. OS Kernel paylaşımı." },
                    { d: 182, t: "Docker Mimarisi", ref: "[Docker]", desc: "Docker Mimarisi: Docker Daemon, Images, Containers." },
                    { d: 183, t: "Dockerfile Best Practices", ref: "[Docker]", desc: "Dockerfile Best Practices: Layer Caching, Multi-stage builds." },
                    { d: 184, t: "Container Registry", ref: "[Docker Hub/ECR]", desc: "Container Registry: Docker Hub, ECR ve güvenlik taramaları." },
                    { d: 185, t: "OCI (Open Container Initiative)", ref: "[OCI]", desc: "OCI (Open Container Initiative) standartları (RunC)." },
                    { d: 186, t: "Container Orchestration İhtiyacı", ref: "[Kubernetes]", desc: "Container Orchestration ihtiyacı: Neden sadece Docker yetmez?" },
                    { d: 187, t: "Kubernetes (K8s) Temel Mimarisi", ref: "[Kubernetes]", desc: "Kubernetes (K8s) Temel Mimarisi: Control Plane (Master) ve Worker Nodes." }
                ]
            },
            {
                title: "Hafta 26: Kubernetes Derinlemesine",
                days: [
                    { d: 188, t: "K8s Objeleri: Pods, Deployments, ReplicaSets", ref: "[Kubernetes]", desc: "K8s Objeleri: Pods (Atomik birim), Deployments, ReplicaSets." },
                    { d: 189, t: "K8s Networking: Services", ref: "[Kubernetes]", desc: "K8s Networking: Services (ClusterIP, NodePort, LoadBalancer)." },
                    { d: 190, t: "K8s Ingress ve Ingress Controllers", ref: "[Kubernetes]", desc: "K8s Ingress ve Ingress Controllers: Dış trafiği yönetme." },
                    { d: 191, t: "ConfigMaps ve Secrets", ref: "[Kubernetes]", desc: "ConfigMaps ve Secrets: Konfigürasyon yönetimi." },
                    { d: 192, t: "StatefulSets", ref: "[Kubernetes]", desc: "StatefulSets: Veritabanları gibi durum bilgisi olan uygulamalar için." },
                    { d: 193, t: "DaemonSets ve Jobs/CronJobs", ref: "[Kubernetes]", desc: "DaemonSets (Her node'da bir pod) ve Jobs/CronJobs." },
                    { d: 194, t: "Helm Charts", ref: "[Helm]", desc: "Helm Charts: Kubernetes paket yöneticisi ve şablonlama." }
                ]
            },
            {
                title: "Hafta 27: CI/CD ve Altyapı (Infrastructure)",
                days: [
                    { d: 195, t: "Continuous Integration (CI)", ref: "[Jez Humble]", desc: "Continuous Integration (CI): Otomatik build ve test süreçleri." },
                    { d: 196, t: "Continuous Delivery vs. Continuous Deployment", ref: "[Jez Humble]", desc: "Continuous Delivery vs. Continuous Deployment (CD) farkı." },
                    { d: 197, t: "Infrastructure as Code (IaC)", ref: "[Terraform]", desc: "Infrastructure as Code (IaC): Altyapıyı kod olarak yönetmek." },
                    { d: 198, t: "Terraform", ref: "[HashiCorp]", desc: "Terraform: Declarative altyapı yönetimi ve State file." },
                    { d: 199, t: "Ansible", ref: "[Red Hat]", desc: "Ansible: Configuration Management ve Agentless yapı." },
                    { d: 200, t: "GitOps", ref: "[Weaveworks]", desc: "GitOps: Altyapı gerçeğinin tek kaynağı olarak Git (ArgoCD)." },
                    { d: 201, t: "Deployment Strategy: Blue-Green", ref: "[Martin Fowler]", desc: "Deployment Strategy: Blue-Green Deployment (Sıfır kesinti)." },
                    { d: 202, t: "Deployment Strategy: Canary", ref: "[Martin Fowler]", desc: "Deployment Strategy: Canary Deployment (Risk azaltma)." }
                ]
            },
            {
                title: "Hafta 28: Gözlemlenebilirlik (Observability)",
                days: [
                    { d: 203, t: "Monitoring vs. Observability", ref: "[Cindy Sridharan]", desc: "Monitoring vs. Observability: Ne bozuk? vs Neden bozuk?." },
                    { d: 204, t: "Log Aggregation: ELK Stack", ref: "[Elastic]", desc: "Log Aggregation: ELK Stack (Elasticsearch, Logstash, Kibana) veya Fluentd." },
                    { d: 205, t: "Metrics Collection: Prometheus", ref: "[Prometheus]", desc: "Metrics Collection: Prometheus (Pull model) ve Grafana." },
                    { d: 206, t: "Distributed Tracing", ref: "[Jaeger/OpenTelemetry]", desc: "Distributed Tracing: Mikroservislerde iz sürme (Jaeger, OpenTelemetry)." },
                    { d: 207, t: "OpenTelemetry (OTel)", ref: "[CNCF]", desc: "OpenTelemetry (OTel): Endüstri standardı toplama ajanı." },
                    { d: 208, t: "RED Method", ref: "[Tom Wilkie]", desc: "RED Method (Rate, Errors, Duration) - Servis izleme." },
                    { d: 209, t: "USE Method", ref: "[Brendan Gregg]", desc: "USE Method (Utilization, Saturation, Errors) - Kaynak izleme." },
                    { d: 210, t: "Alerting ve Alert Fatigue", ref: "[SRE]", desc: "Alerting: Uyarı yorgunluğu (Alert Fatigue) ve yönetimi." },
                    { d: 211, t: "Chaos Engineering", ref: "[Netflix]", desc: "Chaos Engineering: Kasıtlı arıza çıkarma (Chaos Monkey)." }
                ]
            }
        ]
    },
    {
        month: "Ağustos",
        title: "Siber Güvenlik (Security)",
        quarter: 3,
        weeks: [
            {
                title: "Hafta 29: Temel Güvenlik Prensipleri",
                days: [
                    { d: 212, t: "CIA Triad", ref: "[Security Fundamentals]", desc: "CIA Triad: Confidentiality, Integrity, Availability." },
                    { d: 213, t: "Authentication vs. Authorization", ref: "[Security Fundamentals]", desc: "Authentication (Kimlik) vs. Authorization (Yetki)." },
                    { d: 214, t: "Principle of Least Privilege", ref: "[Security Fundamentals]", desc: "Principle of Least Privilege (En az yetki ilkesi)." },
                    { d: 215, t: "Defense in Depth", ref: "[Security Fundamentals]", desc: "Defense in Depth (Katmanlı savunma)." },
                    { d: 216, t: "Security by Design ve Shift-Left Security", ref: "[Security Fundamentals]", desc: "Security by Design ve Shift-Left Security." },
                    { d: 217, t: "Threat Modeling ve STRIDE", ref: "[Microsoft]", desc: "Threat Modeling (Tehdit Modelleme) ve STRIDE." },
                    { d: 218, t: "Zero Trust Security Modeli", ref: "[Forrester]", desc: "Zero Trust Security Modeli: Asla güvenme, her zaman doğrula." }
                ]
            },
            {
                title: "Hafta 30: Kimlik ve Erişim Yönetimi (IAM)",
                days: [
                    { d: 219, t: "Basic Auth ve Digest Auth", ref: "[RFC 7617]", desc: "Basic Auth ve Digest Auth mekanizmaları." },
                    { d: 220, t: "Session Based Authentication", ref: "[Security Fundamentals]", desc: "Session Based Authentication ve Cookie güvenliği." },
                    { d: 221, t: "Token Based Authentication: JWT", ref: "[RFC 7519]", desc: "Token Based Authentication: JWT (JSON Web Token) yapısı ve riskleri." },
                    { d: 222, t: "OAuth 2.0", ref: "[RFC 6749]", desc: "OAuth 2.0: Yetkilendirme çerçevesi ve Grant Type'lar." },
                    { d: 223, t: "OpenID Connect (OIDC)", ref: "[OpenID Foundation]", desc: "OpenID Connect (OIDC): Kimlik katmanı." },
                    { d: 224, t: "SAML", ref: "[OASIS]", desc: "SAML: Kurumsal SSO (Single Sign-On) standardı." },
                    { d: 225, t: "Multi-Factor Authentication (MFA)", ref: "[NIST]", desc: "Multi-Factor Authentication (MFA) ve TOTP." }
                ]
            },
            {
                title: "Hafta 31: Kriptografi",
                days: [
                    { d: 226, t: "Symmetric Encryption (AES)", ref: "[NIST]", desc: "Symmetric Encryption (AES): Tek anahtarlı şifreleme." },
                    { d: 227, t: "Asymmetric Encryption (RSA, ECC)", ref: "[RSA/ECC]", desc: "Asymmetric Encryption (RSA, ECC): Public/Private Key." },
                    { d: 228, t: "Hashing", ref: "[Cryptography]", desc: "Hashing: Tek yönlü fonksiyonlar (MD5, SHA-256)." },
                    { d: 229, t: "Password Hashing: Salt ve Pepper", ref: "[OWASP]", desc: "Password Hashing: Salt ve Pepper kavramları neden gerekli?" },
                    { d: 230, t: "Güvenli Hashing Algoritmaları", ref: "[OWASP]", desc: "Güvenli Hashing Algoritmaları: BCrypt, Argon2, PBKDF2." },
                    { d: 231, t: "Digital Signatures", ref: "[Cryptography]", desc: "Digital Signatures: Veri bütünlüğü ve inkar edilemezlik." },
                    { d: 232, t: "Key Management Systems (KMS) ve HSM", ref: "[Cloud Security]", desc: "Key Management Systems (KMS) ve HSM (Hardware Security Module)." },
                    { d: 233, t: "PKI ve CA", ref: "[X.509]", desc: "PKI (Public Key Infrastructure) ve CA (Certificate Authority)." }
                ]
            },
            {
                title: "Hafta 32: Uygulama Güvenliği (AppSec)",
                days: [
                    { d: 234, t: "OWASP Top 10 (2025)", ref: "[OWASP]", desc: "OWASP Top 10 (2025): Genel bakış." },
                    { d: 235, t: "SQL Injection (SQLi)", ref: "[OWASP]", desc: "SQL Injection (SQLi) ve korunma (Prepared Statements)." },
                    { d: 236, t: "Broken Access Control: IDOR", ref: "[OWASP]", desc: "Broken Access Control: IDOR (Insecure Direct Object Reference)." },
                    { d: 237, t: "Security Misconfiguration", ref: "[OWASP]", desc: "Security Misconfiguration ve varsayılan ayarların tehlikesi." },
                    { d: 238, t: "SSRF (Server-Side Request Forgery)", ref: "[OWASP]", desc: "SSRF (Server-Side Request Forgery)." },
                    { d: 239, t: "Supply Chain Attacks ve SBOM", ref: "[OWASP]", desc: "Supply Chain Attacks ve SBOM (Software Bill of Materials)." },
                    { d: 240, t: "Fuzzing (Fuzz Testing)", ref: "[Security Testing]", desc: "Fuzzing (Fuzz Testing): Rastgele veri ile hata bulma." },
                    { d: 241, t: "Penetration Testing ve Bug Bounty", ref: "[Security Testing]", desc: "Penetration Testing (Sızma Testi) ve Bug Bounty kavramları." }
                ]
            }
        ]
    },
    {
        month: "Eylül",
        title: "Veritabanı Teknolojileri ve Büyük Veri",
        quarter: 3,
        weeks: [
            {
                title: "Hafta 33: NoSQL Veritabanları",
                days: [
                    { d: 242, t: "Key-Value Stores (Redis, DynamoDB)", ref: "[Redis/DynamoDB]", desc: "Key-Value Stores (Redis, DynamoDB): Hızlı erişim senaryoları." },
                    { d: 243, t: "Document Databases (MongoDB)", ref: "[MongoDB]", desc: "Document Databases (MongoDB): Esnek şema ve JSON dokümanlar." },
                    { d: 244, t: "Column-Family Stores (Cassandra)", ref: "[Apache Cassandra]", desc: "Column-Family Stores (Cassandra): Büyük veri ve yazma hızı." },
                    { d: 245, t: "Graph Databases (Neo4j)", ref: "[Neo4j]", desc: "Graph Databases (Neo4j): Karmaşık ilişkiler ve sosyal ağlar." },
                    { d: 246, t: "Time-Series Databases (InfluxDB)", ref: "[InfluxDB]", desc: "Time-Series Databases (InfluxDB): Zaman serisi verileri (IoT, Metrikler)." },
                    { d: 247, t: "Search Engines (Elasticsearch)", ref: "[Elasticsearch]", desc: "Search Engines (Elasticsearch): Inverted Index yapısı." },
                    { d: 248, t: "Multi-Model Databases", ref: "[Database Systems]", desc: "Multi-Model Databases: Birden fazla veri modelini destekleyenler." }
                ]
            },
            {
                title: "Hafta 34: Veri İşleme (Data Engineering)",
                days: [
                    { d: 249, t: "Batch Processing vs. Stream Processing", ref: "[Data Engineering]", desc: "Batch Processing vs. Stream Processing farkı." },
                    { d: 250, t: "ETL vs. ELT", ref: "[Data Engineering]", desc: "ETL (Extract, Transform, Load) vs. ELT yaklaşımları." },
                    { d: 251, t: "MapReduce Paradigması", ref: "[Google]", desc: "MapReduce paradigması: Dağıtık veri işleme." },
                    { d: 252, t: "Apache Spark", ref: "[Apache Spark]", desc: "Apache Spark: Bellek içi (In-memory) hızlı veri işleme." },
                    { d: 253, t: "Apache Kafka", ref: "[Apache Kafka]", desc: "Apache Kafka: Event Streaming ve Log tabanlı mimari." },
                    { d: 254, t: "Data Warehouse vs. Data Lake", ref: "[Data Engineering]", desc: "Data Warehouse (Ambari) vs. Data Lake (Göl) farkı." },
                    { d: 255, t: "Data Lakehouse", ref: "[Databricks]", desc: "Data Lakehouse: İki dünyanın birleşimi." }
                ]
            },
            {
                title: "Hafta 35: İleri SQL",
                days: [
                    { d: 256, t: "Stored Procedures ve Triggers", ref: "[SQL Standard]", desc: "Stored Procedures ve Triggers: Avantaj ve dezavantajları." },
                    { d: 257, t: "Views ve Materialized Views", ref: "[SQL Standard]", desc: "Views ve Materialized Views: Performans ve güncellik." },
                    { d: 258, t: "SQL Window Functions", ref: "[SQL Standard]", desc: "SQL Window Functions: Analitik sorgular (RANK, LEAD, LAG)." },
                    { d: 259, t: "Common Table Expressions (CTE)", ref: "[SQL Standard]", desc: "Common Table Expressions (CTE) ve Recursive CTE." },
                    { d: 260, t: "Database Locking", ref: "[Database Systems]", desc: "Database Locking: Optimistic vs. Pessimistic Locking." },
                    { d: 261, t: "Connection Pooling", ref: "[Database Systems]", desc: "Connection Pooling: Veritabanı bağlantı yönetimi." },
                    { d: 262, t: "Full-Text Search", ref: "[SQL Standard]", desc: "Full-Text Search: SQL içinde metin arama yetenekleri." }
                ]
            },
            {
                title: "Hafta 36: Veri Modelleme ve Yönetim",
                days: [
                    { d: 263, t: "ER Diagrams (Varlık-İlişki)", ref: "[Database Design]", desc: "ER Diagrams (Varlık-İlişki) çizim teknikleri." },
                    { d: 264, t: "Domain Driven Design (DDD) ve Veri Modelleme", ref: "[Eric Evans]", desc: "Domain Driven Design (DDD) bağlamında veri modelleme." },
                    { d: 265, t: "Schema Migration Tools", ref: "[Flyway/Liquibase]", desc: "Schema Migration Tools (Flyway, Liquibase): Veritabanı versiyonlama." },
                    { d: 266, t: "Polyglot Persistence", ref: "[Martin Fowler]", desc: "Polyglot Persistence: Birden fazla veritabanı teknolojisini bir arada kullanma." },
                    { d: 267, t: "CDC (Change Data Capture)", ref: "[Debezium]", desc: "CDC (Change Data Capture): Veri değişikliklerini yakalama (Debezium)." },
                    { d: 268, t: "Data Privacy: GDPR/KVKK", ref: "[GDPR]", desc: "Data Privacy: GDPR/KVKK uyumluluğu ve veri maskeleme." },
                    { d: 269, t: "Vector Embeddings ve Vektör Veritabanları", ref: "[Pinecone/Milvus]", desc: "Vector Embeddings ve Vektör Veritabanları (Pinecone, Milvus)." }
                ]
            }
        ]
    },
    {
        month: "Ekim",
        title: "Yapay Zeka (AI) ve Gelecek Teknolojileri",
        quarter: 4,
        weeks: [
            {
                title: "Hafta 37: AI ve ML Temelleri",
                days: [
                    { d: 270, t: "AI vs. ML vs. Deep Learning", ref: "[AI Fundamentals]", desc: "AI vs. ML vs. Deep Learning: Kavramsal hiyerarşi." },
                    { d: 271, t: "Öğrenme Türleri", ref: "[Machine Learning]", desc: "Öğrenme Türleri: Supervised, Unsupervised, Reinforcement Learning." },
                    { d: 272, t: "Neural Networks ve Backpropagation", ref: "[Deep Learning]", desc: "Neural Networks: Yapay sinir ağları nasıl öğrenir? (Backpropagation)." },
                    { d: 273, t: "NLP (Natural Language Processing)", ref: "[NLP]", desc: "NLP (Natural Language Processing) temel kavramları." },
                    { d: 274, t: "Computer Vision", ref: "[Computer Vision]", desc: "Computer Vision: Görüntü işleme temelleri." },
                    { d: 275, t: "Model Eğitimi", ref: "[Machine Learning]", desc: "Model Eğitimi: Training, Validation, Test setleri." },
                    { d: 276, t: "Overfitting ve Underfitting", ref: "[Machine Learning]", desc: "Overfitting ve Underfitting problemleri." }
                ]
            },
            {
                title: "Hafta 38: Generative AI ve LLM",
                days: [
                    { d: 277, t: "Generative AI (Üretken YZ)", ref: "[Generative AI]", desc: "Generative AI (Üretken YZ) nedir?" },
                    { d: 278, t: "Transformer Mimarisi", ref: "[Attention Is All You Need]", desc: "Transformer Mimarisi ve Attention is All You Need." },
                    { d: 279, t: "Large Language Models (LLM)", ref: "[LLM]", desc: "Large Language Models (LLM) ve Tokenization mantığı." },
                    { d: 280, t: "Prompt Engineering", ref: "[Prompt Engineering]", desc: "Prompt Engineering: Zero-shot, Few-shot, Chain-of-Thought." },
                    { d: 281, t: "Fine-Tuning", ref: "[Machine Learning]", desc: "Fine-Tuning: Modeli özel verilerle eğitmek." },
                    { d: 282, t: "Hallucination (Halüsinasyon) Problemi", ref: "[LLM]", desc: "Hallucination (Halüsinasyon) problemi ve nedenleri." },
                    { d: 283, t: "AI Ethics ve Bias", ref: "[Responsible AI]", desc: "AI Ethics ve Bias (Önyargı): Sorumlu AI (Responsible AI)." }
                ]
            },
            {
                title: "Hafta 39: AI Mühendisliği (AI Engineering)",
                days: [
                    { d: 284, t: "RAG (Retrieval-Augmented Generation)", ref: "[RAG]", desc: "RAG (Retrieval-Augmented Generation): LLM'i verilerinle konuşturmak." },
                    { d: 285, t: "LangChain ve LlamaIndex", ref: "[LangChain/LlamaIndex]", desc: "LangChain ve LlamaIndex: LLM uygulama çatıları." },
                    { d: 286, t: "AI Agents", ref: "[AI Agents]", desc: "AI Agents: Otonom görev yapabilen ajanlar." },
                    { d: 287, t: "Agentic AI", ref: "[Agentic AI]", desc: "Agentic AI: Geleceğin iş akışları ve çoklu ajan sistemleri." },
                    { d: 288, t: "MLOps", ref: "[MLOps]", desc: "MLOps: ML modellerinin DevOps süreçleri." },
                    { d: 289, t: "Platform Engineering ve AI", ref: "[Platform Engineering]", desc: "Platform Engineering ve AI: AI destekli platformlar." },
                    { d: 290, t: "Edge AI", ref: "[Edge Computing]", desc: "Edge AI: Yapay zekayı cihaz üzerinde çalıştırmak." }
                ]
            },
            {
                title: "Hafta 40: Diğer Yükselen Teknolojiler",
                days: [
                    { d: 291, t: "Blockchain Temelleri", ref: "[Blockchain]", desc: "Blockchain Temelleri: Dağıtık defter ve değişmezlik." },
                    { d: 292, t: "Smart Contracts", ref: "[Solidity]", desc: "Smart Contracts: Kodun hukukla buluşması (Solidity)." },
                    { d: 293, t: "Quantum Computing", ref: "[Quantum Computing]", desc: "Quantum Computing: Qubit, Superposition ve Entanglement (Temel seviye)." },
                    { d: 294, t: "IoT Protokolleri", ref: "[IoT]", desc: "IoT Protokolleri: MQTT vs CoAP vs LwM2M." },
                    { d: 295, t: "Low-Code / No-Code Platformları", ref: "[Low-Code]", desc: "Low-Code / No-Code platformlarının mühendisliğe etkisi." },
                    { d: 296, t: "Web3 ve dApps", ref: "[Web3]", desc: "Web3 ve dApps (Merkeziyetsiz uygulamalar)." },
                    { d: 297, t: "FinOps", ref: "[FinOps]", desc: "FinOps: Bulut maliyet yönetimi mühendisliği." }
                ]
            }
        ]
    },
    {
        month: "Kasım",
        title: "Programlama Paradigmaları ve Diller",
        quarter: 4,
        weeks: [
            {
                title: "Hafta 41: Fonksiyonel Programlama (FP)",
                days: [
                    { d: 298, t: "Imperative vs. Declarative Programming", ref: "[Programming Paradigms]", desc: "Imperative vs. Declarative Programming farkı." },
                    { d: 299, t: "Pure Functions ve Side Effects", ref: "[Functional Programming]", desc: "Pure Functions ve Side Effects (Yan etkiler)." },
                    { d: 300, t: "Immutability (Değişmezlik)", ref: "[Functional Programming]", desc: "Immutability (Değişmezlik) neden önemlidir?" },
                    { d: 301, t: "Higher-Order Functions", ref: "[Functional Programming]", desc: "Higher-Order Functions: Map, Filter, Reduce." },
                    { d: 302, t: "Currying ve Partial Application", ref: "[Functional Programming]", desc: "Currying ve Partial Application." },
                    { d: 303, t: "Monads", ref: "[Functional Programming]", desc: "Monads: Hata yönetimi ve zincirleme (Basitleştirilmiş)." },
                    { d: 304, t: "Referential Transparency", ref: "[Functional Programming]", desc: "Referential Transparency." }
                ]
            },
            {
                title: "Hafta 42: Modern Diller ve Özellikleri",
                days: [
                    { d: 305, t: "Rust ve Memory Safety", ref: "[Rust]", desc: "Rust ve Memory Safety: Ownership & Borrowing modeli." },
                    { d: 306, t: "Go (Golang) ve Concurrency", ref: "[Go]", desc: "Go (Golang) ve Concurrency: Goroutines ve Channels (CSP)." },
                    { d: 307, t: "Kotlin ve Coroutines", ref: "[Kotlin]", desc: "Kotlin ve Coroutines: Structured Concurrency." },
                    { d: 308, t: "TypeScript", ref: "[TypeScript]", desc: "TypeScript: Static Typing'in dinamik dillerdeki değeri." },
                    { d: 309, t: "Python GIL (Global Interpreter Lock)", ref: "[Python]", desc: "Python GIL (Global Interpreter Lock) sorunu ve çözümleri." },
                    { d: 310, t: "JIT vs. AOT Compilation", ref: "[Compilers]", desc: "JIT (Just-In-Time) vs. AOT (Ahead-Of-Time) Compilation." },
                    { d: 311, t: "Garbage Collected vs. Manual Memory Management", ref: "[Programming Languages]", desc: "Garbage Collected vs. Manual Memory Management diller." }
                ]
            },
            {
                title: "Hafta 43: Mobil ve Cross-Platform",
                days: [
                    { d: 312, t: "Native Development (Swift/Kotlin)", ref: "[Mobile Development]", desc: "Native Development (Swift/Kotlin) avantajları." },
                    { d: 313, t: "React Native: Yeni Mimari", ref: "[React Native]", desc: "React Native: Yeni mimari (Fabric/TurboModules)." },
                    { d: 314, t: "Flutter: Skia Engine", ref: "[Flutter]", desc: "Flutter: Skia Engine ve Widget mantığı." },
                    { d: 315, t: "Kotlin Multiplatform (KMP)", ref: "[Kotlin]", desc: "Kotlin Multiplatform (KMP): İş mantığını paylaşma." },
                    { d: 316, t: "PWA (Progressive Web Apps)", ref: "[PWA]", desc: "PWA (Progressive Web Apps): Web'in mobil yetenekleri." },
                    { d: 317, t: "Mobile CI/CD", ref: "[Mobile DevOps]", desc: "Mobile CI/CD zorlukları ve araçları." },
                    { d: 318, t: "Gömülü Sistemler", ref: "[Embedded Systems]", desc: "Gömülü Sistemler: Zephyr RTOS ve modern gömülü yazılım." }
                ]
            },
            {
                title: "Hafta 44: Derleyiciler ve Dil Teorisi",
                days: [
                    { d: 319, t: "Compiler vs. Interpreter", ref: "[Compilers]", desc: "Compiler vs. Interpreter farkı." },
                    { d: 320, t: "Abstract Syntax Tree (AST)", ref: "[Compilers]", desc: "Abstract Syntax Tree (AST) nedir?" },
                    { d: 321, t: "Lexical Analysis vs. Semantic Analysis", ref: "[Compilers]", desc: "Lexical Analysis vs. Semantic Analysis." },
                    { d: 322, t: "Transpiler (Source-to-Source)", ref: "[Babel]", desc: "Transpiler (Source-to-Source): Babel örneği." },
                    { d: 323, t: "Intermediate Representation (IR) ve LLVM", ref: "[LLVM]", desc: "Intermediate Representation (IR) ve LLVM." },
                    { d: 324, t: "Linker ve Loader", ref: "[Compilers]", desc: "Linker ve Loader ne iş yapar?" },
                    { d: 325, t: "Regular Expressions (Regex)", ref: "[Regex]", desc: "Regular Expressions (Regex) çalışma mantığı ve performansı." }
                ]
            }
        ]
    },
    {
        month: "Aralık",
        title: "Profesyonel Yetkinlikler, Tarihçe ve Kariyer",
        quarter: 4,
        weeks: [
            {
                title: "Hafta 45: Yazılım Mühendisliği Kültürü ve Tarihi",
                days: [
                    { d: 326, t: "The Mythical Man-Month: Brooks Yasası", ref: "[Fred Brooks]", desc: "The Mythical Man-Month: Brooks Yasası (Geç kalan projeye adam eklemek)." },
                    { d: 327, t: "No Silver Bullet", ref: "[Fred Brooks]", desc: "No Silver Bullet: Yazılımın özündeki karmaşıklık." },
                    { d: 328, t: "Worse is Better Felsefesi", ref: "[Richard Gabriel]", desc: "Worse is Better Felsefesi: Unix vs. MIT yaklaşımı." },
                    { d: 329, t: "Jargon: Yak Shaving", ref: "[Software Culture]", desc: "Jargon: Yak Shaving (Asıl işi yapmak için gereken yan işler)." },
                    { d: 330, t: "Jargon: Bike Shedding", ref: "[Software Culture]", desc: "Jargon: Bike Shedding (Önemsiz detaylarda boğulmak)." },
                    { d: 331, t: "Rubber Duck Debugging", ref: "[Software Culture]", desc: "Teknik: Rubber Duck Debugging (Sesli anlatarak hata çözme)." },
                    { d: 332, t: "Vaka Analizi: Therac-25 Faciası", ref: "[Software Safety]", desc: "Vaka Analizi: Therac-25 Faciası (Yazılım hatası can aldığında)." }
                ]
            },
            {
                title: "Hafta 46: Metodolojiler ve Süreçler",
                days: [
                    { d: 333, t: "Waterfall vs. Agile", ref: "[Agile Manifesto]", desc: "Waterfall vs. Agile: Tarihsel değişim." },
                    { d: 334, t: "Scrum Framework", ref: "[Scrum Guide]", desc: "Scrum Framework: Roller, Ritüeller ve Artifacts." },
                    { d: 335, t: "Kanban", ref: "[Kanban]", desc: "Kanban: WIP (Work In Progress) limitleri ve Akış." },
                    { d: 336, t: "Extreme Programming (XP)", ref: "[Kent Beck]", desc: "Extreme Programming (XP): Pair Programming ve TDD." },
                    { d: 337, t: "Lean Software Development", ref: "[Mary Poppendieck]", desc: "Lean Software Development: İsrafı önleme." },
                    { d: 338, t: "MVP vs. PoC vs. Prototype", ref: "[Product Management]", desc: "MVP (Minimum Viable Product) vs. PoC vs. Prototype." },
                    { d: 339, t: "Efor Tahminleme (Estimation)", ref: "[Agile]", desc: "Efor Tahminleme (Estimation): Story Points vs. Hours." }
                ]
            },
            {
                title: "Hafta 47: Yumuşak Beceriler (Soft Skills)",
                days: [
                    { d: 340, t: "Empati", ref: "[Soft Skills]", desc: "Empati: Mühendislikte kullanıcıyı anlama." },
                    { d: 341, t: "Etkili İletişim", ref: "[Soft Skills]", desc: "Etkili İletişim: Teknik konuları teknik olmayana anlatmak." },
                    { d: 342, t: "Geri Bildirim (Feedback)", ref: "[Soft Skills]", desc: "Geri Bildirim (Feedback): Code Review adabı." },
                    { d: 343, t: "Zaman Yönetimi", ref: "[Productivity]", desc: "Zaman Yönetimi: Pomodoro ve Time Boxing." },
                    { d: 344, t: "Problem Çözme: Root Cause Analysis", ref: "[Problem Solving]", desc: "Problem Çözme: Root Cause Analysis (5 Whys)." },
                    { d: 345, t: "Dokümantasyon: ADR", ref: "[Documentation]", desc: "Dokümantasyon: ADR (Architecture Decision Records) tutmak." },
                    { d: 346, t: "Mentorluk", ref: "[Mentoring]", desc: "Mentorluk: Öğrenmek için öğretmek." }
                ]
            },
            {
                title: "Hafta 48: Hukuk, Lisanslama ve Kariyer",
                days: [
                    { d: 347, t: "Intellectual Property (Fikri Mülkiyet)", ref: "[Legal]", desc: "Intellectual Property (Fikri Mülkiyet) ve Yazılım." },
                    { d: 348, t: "Lisanslar: Permissive (MIT, Apache 2.0, BSD)", ref: "[Open Source]", desc: "Lisanslar: Permissive (MIT, Apache 2.0, BSD) farkları." },
                    { d: 349, t: "Lisanslar: Copyleft (GPL)", ref: "[GPL]", desc: "Lisanslar: Copyleft (GPL) ve Viral etkisi." },
                    { d: 350, t: "SLA, SLO, SLI", ref: "[SRE]", desc: "SLA (Agreement), SLO (Objective), SLI (Indicator) farkları." },
                    { d: 351, t: "NDA (Non-Disclosure Agreement)", ref: "[Legal]", desc: "NDA (Non-Disclosure Agreement) nedir?" },
                    { d: 352, t: "T-Shaped vs. Pi-Shaped Engineer", ref: "[Career]", desc: "T-Shaped vs. Pi-Shaped Engineer kavramları." },
                    { d: 353, t: "Imposter Syndrome", ref: "[Psychology]", desc: "Imposter Syndrome (Sahtekarlık Sendromu) ile başa çıkma." }
                ]
            },
            {
                title: "Hafta 49: Kapanış ve Yeni Yıl Vizyonu",
                days: [
                    { d: 354, t: "Burnout (Tükenmişlik)", ref: "[Wellness]", desc: "Burnout (Tükenmişlik) belirtileri ve önleme." },
                    { d: 355, t: "Topluluklara Katılım", ref: "[Community]", desc: "Topluluklara Katılım: Networking ve Open Source katkısı." },
                    { d: 356, t: "Lifelong Learning (Yaşam Boyu Öğrenme)", ref: "[Learning]", desc: "Lifelong Learning (Yaşam Boyu Öğrenme) stratejileri." },
                    { d: 357, t: "Kişisel Marka", ref: "[Career]", desc: "Kişisel Marka: Blog yazmak ve GitHub profili." },
                    { d: 358, t: "Uzaktan Çalışma (Remote Work)", ref: "[Remote Work]", desc: "Uzaktan Çalışma (Remote Work) disiplini ve etiği." },
                    { d: 359, t: "2027 Trendlerini Araştırmak", ref: "[Future Tech]", desc: "2027 Trendlerini Araştırmak." },
                    { d: 360, t: "Yılın Genel Tekrarı - Bölüm 1", ref: "[Review]", desc: "Yılın Genel Tekrarı, Eksiklerin Giderilmesi ve Kutlama." },
                    { d: 361, t: "Yılın Genel Tekrarı - Bölüm 2", ref: "[Review]", desc: "Yılın Genel Tekrarı, Eksiklerin Giderilmesi ve Kutlama." },
                    { d: 362, t: "Yılın Genel Tekrarı - Bölüm 3", ref: "[Review]", desc: "Yılın Genel Tekrarı, Eksiklerin Giderilmesi ve Kutlama." },
                    { d: 363, t: "Yılın Genel Tekrarı - Bölüm 4", ref: "[Review]", desc: "Yılın Genel Tekrarı, Eksiklerin Giderilmesi ve Kutlama." },
                    { d: 364, t: "Yılın Genel Tekrarı - Bölüm 5", ref: "[Review]", desc: "Yılın Genel Tekrarı, Eksiklerin Giderilmesi ve Kutlama." },
                    { d: 365, t: "Yılın Genel Tekrarı - Bölüm 6 ve Kutlama", ref: "[Review]", desc: "Yılın Genel Tekrarı, Eksiklerin Giderilmesi ve Kutlama." }
                ]
            }
        ]
    },
];