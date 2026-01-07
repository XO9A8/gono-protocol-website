use actix_cors::Cors;
use actix_web::{
    get, middleware, web, App, HttpRequest, HttpResponse, HttpServer, Responder, Result,
};
use serde::Serialize;
use std::time::Instant;

// ================================
// Data Models
// ================================

#[derive(Serialize)]
struct ApiResponse<T: Serialize> {
    success: bool,
    data: T,
    timestamp: String,
}

#[derive(Serialize)]
struct HealthResponse {
    status: String,
    version: String,
    uptime_seconds: u64,
}

#[derive(Serialize)]
struct StatsResponse {
    assets_registered: String,
    active_users: String,
    partners: u32,
    transactions: String,
    countries: u32,
}

#[derive(Serialize)]
struct Feature {
    id: u32,
    title: String,
    description: String,
    icon: String,
}

#[derive(Serialize)]
struct ArchiveItem {
    id: u32,
    emoji: String,
    category: String,
    title: String,
    excerpt: String,
    date: String,
    hash: String,
    verified: bool,
}

#[derive(Serialize)]
struct Partner {
    id: u32,
    name: String,
    category: String,
}

#[derive(Serialize)]
struct Product {
    id: u32,
    name: String,
    description: String,
    features: Vec<String>,
    link: String,
}

#[derive(Serialize)]
struct TokenInfo {
    symbol: String,
    name: String,
    total_supply: String,
    circulating_supply: String,
    features: Vec<TokenFeature>,
}

#[derive(Serialize)]
struct TokenFeature {
    icon: String,
    title: String,
    description: String,
}

// ================================
// App State
// ================================

struct AppState {
    start_time: Instant,
    version: String,
}

// ================================
// API Handlers
// ================================

fn wrap_response<T: Serialize>(data: T) -> ApiResponse<T> {
    ApiResponse {
        success: true,
        data,
        timestamp: chrono::Utc::now().to_rfc3339(),
    }
}

#[get("/api/health")]
async fn health_check(data: web::Data<AppState>) -> impl Responder {
    let response = HealthResponse {
        status: "healthy".to_string(),
        version: data.version.clone(),
        uptime_seconds: data.start_time.elapsed().as_secs(),
    };
    HttpResponse::Ok().json(wrap_response(response))
}

#[get("/api/stats")]
async fn get_stats() -> impl Responder {
    let stats = StatsResponse {
        assets_registered: "10M+".to_string(),
        active_users: "100K+".to_string(),
        partners: 50,
        transactions: "25M+".to_string(),
        countries: 120,
    };
    HttpResponse::Ok().json(wrap_response(stats))
}

#[get("/api/features")]
async fn get_features() -> impl Responder {
    let features = vec![
        Feature {
            id: 1,
            title: "Blockchain Provenance".to_string(),
            description: "Every digital asset receives an immutable blockchain record, creating a transparent and verifiable chain of custody.".to_string(),
            icon: "blockchain".to_string(),
        },
        Feature {
            id: 2,
            title: "Real-time Verification".to_string(),
            description: "Instantly verify the authenticity and origin of any digital content with our AI-powered verification engine.".to_string(),
            icon: "verify".to_string(),
        },
        Feature {
            id: 3,
            title: "Decentralized Storage".to_string(),
            description: "Content is stored across a distributed network, ensuring permanence and censorship resistance.".to_string(),
            icon: "storage".to_string(),
        },
        Feature {
            id: 4,
            title: "AI Detection".to_string(),
            description: "Identify AI-generated content and deepfakes with advanced detection algorithms.".to_string(),
            icon: "ai".to_string(),
        },
        Feature {
            id: 5,
            title: "Global Standards".to_string(),
            description: "Compatible with C2PA, IPTC, and EIP-7053 standards for universal interoperability.".to_string(),
            icon: "globe".to_string(),
        },
    ];
    HttpResponse::Ok().json(wrap_response(features))
}

#[get("/api/archive")]
async fn get_archive() -> impl Responder {
    let archive = vec![
        ArchiveItem {
            id: 1,
            emoji: "🌍".to_string(),
            category: "Planet".to_string(),
            title: "Climate Summit 2024".to_string(),
            excerpt: "Historic agreements captured and preserved with blockchain provenance.".to_string(),
            date: "Dec 15, 2024".to_string(),
            hash: "0x8f3d9a2b1c4e5f6a7b8c9d0e1f2a3b4c".to_string(),
            verified: true,
        },
        ArchiveItem {
            id: 2,
            emoji: "🗳️".to_string(),
            category: "Politics".to_string(),
            title: "Global Elections 2024".to_string(),
            excerpt: "Verified documentation of electoral events worldwide.".to_string(),
            date: "Nov 5, 2024".to_string(),
            hash: "0x2a7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e".to_string(),
            verified: true,
        },
        ArchiveItem {
            id: 3,
            emoji: "🤖".to_string(),
            category: "Tech".to_string(),
            title: "AI Revolution".to_string(),
            excerpt: "Documenting the rapid advancement of artificial intelligence.".to_string(),
            date: "Oct 22, 2024".to_string(),
            hash: "0x5e9a1b2c3d4e5f6a7b8c9d0e1f2a3b4c".to_string(),
            verified: true,
        },
        ArchiveItem {
            id: 4,
            emoji: "👥".to_string(),
            category: "Society".to_string(),
            title: "Digital Rights Movement".to_string(),
            excerpt: "Grassroots campaigns for online privacy and data ownership.".to_string(),
            date: "Sep 18, 2024".to_string(),
            hash: "0x7f8e9d0c1b2a3c4d5e6f7a8b9c0d1e2f".to_string(),
            verified: true,
        },
    ];
    HttpResponse::Ok().json(wrap_response(archive))
}

#[get("/api/partners")]
async fn get_partners() -> impl Responder {
    let partners = vec![
        Partner { id: 1, name: "Reuters".to_string(), category: "Media".to_string() },
        Partner { id: 2, name: "Filecoin".to_string(), category: "Storage".to_string() },
        Partner { id: 3, name: "Protocol Labs".to_string(), category: "Infrastructure".to_string() },
        Partner { id: 4, name: "C2PA".to_string(), category: "Standards".to_string() },
        Partner { id: 5, name: "IPTC".to_string(), category: "Standards".to_string() },
        Partner { id: 6, name: "Starling Lab".to_string(), category: "Research".to_string() },
        Partner { id: 7, name: "USC Shoah Foundation".to_string(), category: "Archive".to_string() },
        Partner { id: 8, name: "WITNESS".to_string(), category: "Human Rights".to_string() },
    ];
    HttpResponse::Ok().json(wrap_response(partners))
}

#[get("/api/products")]
async fn get_products() -> impl Responder {
    let products = vec![
        Product {
            id: 1,
            name: "Capture App".to_string(),
            description: "The blockchain camera that captures photos and videos with instant provenance registration.".to_string(),
            features: vec![
                "Mobile First".to_string(),
                "Instant Registration".to_string(),
                "NFT Creation".to_string(),
            ],
            link: "https://capture.numbersprotocol.io".to_string(),
        },
        Product {
            id: 2,
            name: "Numbers Search".to_string(),
            description: "Search engine for digital media provenance. Find origin, ownership, and history.".to_string(),
            features: vec![
                "Reverse Image Search".to_string(),
                "AI-Powered".to_string(),
                "Multi-Network".to_string(),
            ],
            link: "https://search.numbersprotocol.io".to_string(),
        },
        Product {
            id: 3,
            name: "Dashboard".to_string(),
            description: "Manage your digital assets, track provenance history, and control AI mining permissions.".to_string(),
            features: vec![
                "Analytics".to_string(),
                "Access Control".to_string(),
                "Monetization".to_string(),
            ],
            link: "https://dashboard.numbersprotocol.io".to_string(),
        },
    ];
    HttpResponse::Ok().json(wrap_response(products))
}

#[get("/api/token")]
async fn get_token_info() -> impl Responder {
    let token = TokenInfo {
        symbol: "NUM".to_string(),
        name: "Numbers Protocol Token".to_string(),
        total_supply: "1,000,000,000".to_string(),
        circulating_supply: "450,000,000".to_string(),
        features: vec![
            TokenFeature {
                icon: "⚡".to_string(),
                title: "Transaction Fees".to_string(),
                description: "Pay for asset registration and verification services".to_string(),
            },
            TokenFeature {
                icon: "🗳️".to_string(),
                title: "Governance".to_string(),
                description: "Vote on protocol upgrades and proposals".to_string(),
            },
            TokenFeature {
                icon: "💎".to_string(),
                title: "Staking Rewards".to_string(),
                description: "Earn rewards by securing the network".to_string(),
            },
            TokenFeature {
                icon: "🔄".to_string(),
                title: "Cross-Chain".to_string(),
                description: "ERC-20 compatible with BNB bridge".to_string(),
            },
        ],
    };
    HttpResponse::Ok().json(wrap_response(token))
}

// ================================
// Main Server
// ================================

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Initialize logger
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("info"));

    let app_state = web::Data::new(AppState {
        start_time: Instant::now(),
        version: "1.0.0".to_string(),
    });

    println!("🚀 Numbers Protocol Backend v1.0.0");
    println!("📡 Server running at http://localhost:8080");
    println!("📋 Available endpoints:");
    println!("   GET /api/health   - Health check");
    println!("   GET /api/stats    - Site statistics");
    println!("   GET /api/features - Features list");
    println!("   GET /api/archive  - Archive items");
    println!("   GET /api/partners - Partners list");
    println!("   GET /api/products - Products list");
    println!("   GET /api/token    - Token info");

    HttpServer::new(move || {
        // Configure CORS
        let cors = Cors::default()
            .allowed_origin("http://localhost:3000")
            .allowed_origin("http://127.0.0.1:3000")
            .allowed_methods(vec!["GET", "POST", "PUT", "DELETE", "OPTIONS"])
            .allowed_headers(vec![
                actix_web::http::header::AUTHORIZATION,
                actix_web::http::header::ACCEPT,
                actix_web::http::header::CONTENT_TYPE,
            ])
            .max_age(3600);

        App::new()
            .app_data(app_state.clone())
            .wrap(cors)
            .wrap(middleware::Logger::default())
            .wrap(middleware::Compress::default())
            .service(health_check)
            .service(get_stats)
            .service(get_features)
            .service(get_archive)
            .service(get_partners)
            .service(get_products)
            .service(get_token_info)
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
