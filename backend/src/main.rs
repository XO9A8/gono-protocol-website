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

#[derive(Serialize)]
struct ArchitectureLayer {
    layer: u32,
    name: String,
    description: String,
    components: Vec<String>,
}

#[derive(Serialize)]
struct UseCase {
    id: u32,
    title: String,
    description: String,
    category: String,
    pallets_used: Vec<String>,
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
            title: "Capture".to_string(),
            description: "Privacy-first asset capture with zk-SNARK proofs. Generate cryptographic hashes and embed C2PA metadata while preserving creator anonymity for high-stakes journalism.".to_string(),
            icon: "capture".to_string(),
        },
        Feature {
            id: 2,
            title: "Store".to_string(),
            description: "Optional permanent storage via Arweave integration. Decentralized content hosting with Storage Endowment subsidies for long-term preservation.".to_string(),
            icon: "storage".to_string(),
        },
        Feature {
            id: 3,
            title: "Verify".to_string(),
            description: "Community attestations powered by SANUB reputation algorithms and AI oracles. Agnostic interface for trust-building across platforms.".to_string(),
            icon: "verify".to_string(),
        },
        Feature {
            id: 4,
            title: "Certify".to_string(),
            description: "ERC-7053 compliant media receipts on the Gono Parachain. Immutable blockchain indexing creates a global 'Media Receipt' ledger with institutional-grade security.".to_string(),
            icon: "certify".to_string(),
        },
        Feature {
            id: 5,
            title: "Check".to_string(),
            description: "Public auditing and verification via Gono Explorer. Anyone can validate the authenticity and provenance chain of registered digital assets.".to_string(),
            icon: "check".to_string(),
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
            excerpt: "Historic agreements captured and preserved with blockchain provenance."
                .to_string(),
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
        Partner {
            id: 1,
            name: "Polkadot".to_string(),
            category: "Infrastructure".to_string(),
        },
        Partner {
            id: 2,
            name: "Substrate".to_string(),
            category: "Infrastructure".to_string(),
        },
        Partner {
            id: 3,
            name: "Arweave".to_string(),
            category: "Storage".to_string(),
        },
        Partner {
            id: 4,
            name: "C2PA".to_string(),
            category: "Standards".to_string(),
        },
        Partner {
            id: 5,
            name: "Parity Technologies".to_string(),
            category: "Infrastructure".to_string(),
        },
        Partner {
            id: 6,
            name: "Web3 Foundation".to_string(),
            category: "Ecosystem".to_string(),
        },
        Partner {
            id: 7,
            name: "IPFS".to_string(),
            category: "Storage".to_string(),
        },
        Partner {
            id: 8,
            name: "Chainlink".to_string(),
            category: "Oracles".to_string(),
        },
    ];
    HttpResponse::Ok().json(wrap_response(partners))
}

#[get("/api/products")]
async fn get_products() -> impl Responder {
    let products = vec![
        Product {
            id: 1,
            name: "Gono Moncho News".to_string(),
            description: "Decentralized journalism platform enabling anonymous reporting with cryptographic proof of authenticity. Built for high-stakes investigative journalism.".to_string(),
            features: vec![
                "ZKP Privacy Protection".to_string(),
                "C2PA Metadata".to_string(),
                "Immutable Publishing".to_string(),
            ],
            link: "https://moncho.gono.io".to_string(),
        },
        Product {
            id: 2,
            name: "Capture SDK".to_string(),
            description: "Developer toolkit for integrating provenance tracking into any application. Generate cryptographic hashes, embed metadata, and register assets on-chain.".to_string(),
            features: vec![
                "Multi-Platform Support".to_string(),
                "Modular Architecture".to_string(),
                "Open Source".to_string(),
            ],
            link: "https://github.com/gono-protocol/capture-sdk".to_string(),
        },
        Product {
            id: 3,
            name: "x402 Micropayment Rail".to_string(),
            description: "HTTP-402 revival for machine-to-machine commerce. Enable AI agents to pay for data and services per request with stablecoin settlement.".to_string(),
            features: vec![
                "M2M Payments".to_string(),
                "Stablecoin Settlement".to_string(),
                "GONO Protocol Fees".to_string(),
            ],
            link: "https://x402.gono.io".to_string(),
        },
    ];
    HttpResponse::Ok().json(wrap_response(products))
}

#[get("/api/token")]
async fn get_token_info() -> impl Responder {
    let token = TokenInfo {
        symbol: "GONO".to_string(),
        name: "Gono Protocol Token".to_string(),
        total_supply: "1,000,000,000".to_string(),
        circulating_supply: "250,000,000".to_string(),
        features: vec![
            TokenFeature {
                icon: "⚡".to_string(),
                title: "Network Gas".to_string(),
                description: "Pay for ERC-7053 provenance indexing and on-chain transactions"
                    .to_string(),
            },
            TokenFeature {
                icon: "💾".to_string(),
                title: "Storage Endowment".to_string(),
                description: "Subsidize permanent Arweave storage for digital assets".to_string(),
            },
            TokenFeature {
                icon: "💎".to_string(),
                title: "Validator Staking".to_string(),
                description: "Secure the Polkadot Parachain and earn staking rewards".to_string(),
            },
            TokenFeature {
                icon: "🗳️".to_string(),
                title: "Governance Rights".to_string(),
                description:
                    "Vote on protocol upgrades, pallet activations, and treasury allocation"
                        .to_string(),
            },
        ],
    };
    HttpResponse::Ok().json(wrap_response(token))
}

#[get("/api/architecture")]
async fn get_architecture() -> impl Responder {
    let architecture = vec![
        ArchitectureLayer {
            layer: 1,
            name: "Polkadot Relay Chain".to_string(),
            description: "Shared security layer providing institutional-grade protection against censorship and 51% attacks.".to_string(),
            components: vec![
                "Shared Security".to_string(),
                "Cross-Chain Communication".to_string(),
                "Validator Network".to_string(),
            ],
        },
        ArchitectureLayer {
            layer: 2,
            name: "Gono Execution Rail".to_string(),
            description: "Core Substrate parachain handling mandatory ERC-7053 indexing logic - the global Media Receipt ledger.".to_string(),
            components: vec![
                "ERC-7053 Indexing".to_string(),
                "Transaction Processing".to_string(),
                "State Management".to_string(),
            ],
        },
        ArchitectureLayer {
            layer: 3,
            name: "Modular Service Pallets".to_string(),
            description: "Optional extensions developers can opt-in based on application needs - pluggable module approach.".to_string(),
            components: vec![
                "Store Pallet (Arweave)".to_string(),
                "Verify Pallet (SANUB)".to_string(),
                "Privacy Pallet (zk-SNARKs)".to_string(),
                "x402 Micropayment Pallet".to_string(),
            ],
        },
        ArchitectureLayer {
            layer: 4,
            name: "Application Layer".to_string(),
            description: "User-facing applications and developer tools interfacing with the protocol via decentralized APIs.".to_string(),
            components: vec![
                "Gono Moncho News dApp".to_string(),
                "Capture SDK".to_string(),
                "Gono Explorer".to_string(),
                "Third-party Integrations".to_string(),
            ],
        },
    ];
    HttpResponse::Ok().json(wrap_response(architecture))
}

#[get("/api/use-cases")]
async fn get_use_cases() -> impl Responder {
    let use_cases = vec![
        UseCase {
            id: 1,
            title: "High-Stakes Journalism".to_string(),
            description: "Anonymous whistleblowing and investigative reporting with cryptographic proof of authenticity. Protect sources while maintaining content integrity.".to_string(),
            category: "Media".to_string(),
            pallets_used: vec![
                "Capture".to_string(),
                "Privacy (ZKP)".to_string(),
                "Certify".to_string(),
                "Store".to_string(),
            ],
        },
        UseCase {
            id: 2,
            title: "AI Data Marketplaces".to_string(),
            description: "Autonomous AI agents buying and selling data with per-request micropayments. Machine-to-machine commerce powered by x402 protocol.".to_string(),
            category: "AI Commerce".to_string(),
            pallets_used: vec![
                "x402 Micropayment".to_string(),
                "Verify".to_string(),
                "Certify".to_string(),
            ],
        },
        UseCase {
            id: 3,
            title: "Real Estate Digital Twins".to_string(),
            description: "Immutable property records with provenance tracking for photos, videos, and documents. Pilot program for verifiable real estate assets.".to_string(),
            category: "Real Estate".to_string(),
            pallets_used: vec![
                "Capture".to_string(),
                "Store".to_string(),
                "Certify".to_string(),
                "Check".to_string(),
            ],
        },
        UseCase {
            id: 4,
            title: "Academic Research Integrity".to_string(),
            description: "Timestamped publication of research data and findings. Prevent plagiarism and establish priority claims with blockchain verification.".to_string(),
            category: "Academia".to_string(),
            pallets_used: vec![
                "Capture".to_string(),
                "Certify".to_string(),
                "Verify".to_string(),
            ],
        },
    ];
    HttpResponse::Ok().json(wrap_response(use_cases))
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

    println!("🚀 Gono Protocol Backend v1.0.0");
    println!("📡 Server running at http://localhost:8080");
    println!("📋 Available endpoints:");
    println!("   GET /api/health       - Health check");
    println!("   GET /api/stats        - Site statistics");
    println!("   GET /api/features     - 5 Core modules");
    println!("   GET /api/archive      - Archive items");
    println!("   GET /api/partners     - Partners list");
    println!("   GET /api/products     - Gono products");
    println!("   GET /api/token        - GONO token info");
    println!("   GET /api/architecture - 4-layer architecture");
    println!("   GET /api/use-cases    - Platform use cases");

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
            .service(get_architecture)
            .service(get_use_cases)
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
