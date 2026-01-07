# 🔗 Gono Protocol

> **Provenance infrastructure for humans and AI**

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Rust-1.75-orange?style=for-the-badge&logo=rust" alt="Rust"/>
  <img src="https://img.shields.io/badge/Actix--web-4.0-000000?style=for-the-badge" alt="Actix"/>
</p>

---

## ✨ Features

### Frontend
- 🎨 **Premium Dark Theme** - Glassmorphism, gradients, and glow effects
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- ⚡ **Server Components** - Fast rendering with Next.js App Router
- 🔄 **API Integration** - Live data fetching from Rust backend
- 💫 **Smooth Animations** - Hover effects, loading skeletons, micro-interactions
- 🎯 **TypeScript** - Full type safety across the codebase

### Backend
- 🦀 **Rust + Actix-web** - High-performance async web server
- 📊 **7 API Endpoints** - Health, stats, features, archive, partners, products, token
- 📝 **Request Logging** - Built-in middleware for debugging
- 🗜️ **Compression** - Gzip/Brotli support
- 🔒 **CORS Configured** - Ready for frontend integration

---

## 📁 Project Structure

```
gono-protocol/
├── frontend/                    # Next.js 15 + Tailwind CSS
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Custom dark theme styles
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation
│   │   ├── Hero.tsx            # Hero with live stats
│   │   ├── Partners.tsx        # Partner logos (API)
│   │   ├── Features.tsx        # Feature cards
│   │   ├── Products.tsx        # Product showcase
│   │   ├── Archive.tsx         # Archive with filters (API)
│   │   ├── Ecosystem.tsx       # GONO token section
│   │   ├── CTA.tsx             # Call-to-action
│   │   ├── Footer.tsx          # Footer links
│   │   └── Skeleton.tsx        # Loading states
│   └── lib/
│       └── api.ts              # API client with types
│
├── backend/                     # Rust + Actix-web
│   ├── Cargo.toml              # Dependencies
│   └── src/
│       └── main.rs             # API server with 7 endpoints
│
├── .gitignore
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | >= 18.x |
| npm | >= 9.x |
| Rust | >= 1.75 |

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd gono-protocol

# Install frontend dependencies
cd frontend && npm install

# Build backend
cd ../backend && cargo build --release
```

### Running the Application

Open **two terminals**:

**Terminal 1 - Backend (port 8080)**
```bash
cd backend
RUST_LOG=info cargo run
```

**Terminal 2 - Frontend (port 3000)**
```bash
cd frontend
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📡 API Reference

All endpoints return structured JSON:
```json
{
  "success": true,
  "data": { ... },
  "timestamp": "2024-01-15T09:42:33Z"
}
```

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check with uptime |
| `/api/stats` | GET | Site statistics (assets, users, partners) |
| `/api/features` | GET | List of platform features |
| `/api/archive` | GET | Archived content items |
| `/api/partners` | GET | Partner organizations |
| `/api/products` | GET | Product catalog |
| `/api/token` | GET | GONO token information |

**Example:**
```bash
curl http://localhost:8080/api/stats
```

---

## 🎨 Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#0a0a0a` | Page background |
| `--primary` | `#6366f1` | Indigo accent |
| `--secondary` | `#22d3ee` | Cyan accent |
| `--accent-green` | `#34d399` | Success states |

### Typography

- **Body**: Inter
- **Mono**: Roboto Mono
- **Display**: System serif (for italics)

### Effects

- **Glassmorphism**: `glass` utility class
- **Gradients**: `gradient-primary`, `gradient-secondary`
- **Glow**: `glow`, `glow-sm`
- **Animations**: `animate-float`, `animate-pulse-glow`, `animate-fade-in-up`

---

## 🛠️ Development

### Frontend Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Backend Commands

```bash
cargo run              # Development mode
cargo build --release  # Production build
cargo test             # Run tests
cargo clippy           # Lint code
```

### Environment Variables

Create a `.env.local` in the frontend:
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

---

## 📦 Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Frontend | Next.js 15 | React framework with App Router |
| Styling | Tailwind CSS 4 | Utility-first CSS |
| Language | TypeScript | Type safety |
| Backend | Rust | Systems programming |
| Server | Actix-web 4 | High-performance web framework |
| Serialization | Serde | JSON handling |

---

## 📄 License

---

## 🏢 About Gono Protocol

Gono Protocol is a modular blockchain infrastructure built on Substrate as a Polkadot Parachain. It provides a universal, content-addressable rail for verifiable media, digital assets, and autonomous AI commerce using a "Pluggable Module" approach.

---

<p align="center">
  Built with ❤️ using <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Rust</strong>
</p>
