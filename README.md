# Sahayak (सहायक) — Frontend

> **An Intelligent Citizen Welfare Platform**  
> Empowering citizens to effortlessly discover, assess eligibility for, and apply to public welfare schemes through AI-assisted guidance.

---

## 🌟 Overview

**Sahayak** is a modern, responsive web application designed to bridge the gap between citizens and government welfare programs. By combining intelligent profile analysis, real-time eligibility scoring, document understanding, and step-by-step application assistance, Sahayak makes navigating public benefits simple, transparent, and accessible.

### Core Features

- 🎯 **Personalised Scheme Recommendations**: Intelligently matches citizen profiles against eligibility criteria across central and state welfare programs.
- ⚡ **AI-Powered Eligibility Assessment**: Evaluates criteria satisfaction, documents required, and estimated benefits with clear breakdown explanations.
- 📁 **Document Verification & Management**: Upload, inspect, and organize essential verification documents (Aadhaar, Income Certificates, Ration Cards) with OCR previews.
- 💬 **Interactive AI Assistant**: Real-time conversational guidance to answer citizen queries, clarify rules, and recommend appropriate schemes.
- 📊 **Unified Application Tracking**: Live tracking of application status, document review checkpoints, and timeline updates.
- 🔐 **Privacy-Preserving Design**: Built with data minimization and security best practices for citizen confidentiality.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion & Interactions**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript 5.7](https://www.typescriptlang.org/)
- **CI/CD**: GitHub Actions

---

## 📂 Project Structure

```
sahayak-frontend/
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated CI build & verification workflow
├── src/
│   ├── components/
│   │   ├── applications/        # Application timeline & status trackers
│   │   ├── assistant/           # Floating AI assistant widget
│   │   ├── layout/              # Navbar, Footer, Sidebar, DashboardLayout
│   │   ├── schemes/             # Scheme cards, filters & previews
│   │   └── ui/                  # Reusable UI primitives (Badges, Progress)
│   ├── lib/
│   │   ├── api.ts               # API service integration layer
│   │   ├── mockData.ts          # Comprehensive welfare schemes & mock profiles
│   │   └── utils.ts             # Styling and formatting utility helpers
│   ├── pages/                   # Landing, Dashboard, Schemes, Eligibility,
│   │                            # Documents, Applications, Profile, Login, Register
│   ├── types/                   # TypeScript interfaces & domain models
│   ├── App.tsx                  # Main router setup
│   ├── index.css                # Global CSS & Tailwind CSS v4 root
│   └── main.tsx                 # Application entry point
├── index.html                   # HTML template
├── package.json                 # Project dependencies and npm scripts
├── tsconfig.json                # TypeScript compiler configuration
└── vite.config.ts               # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20` or later (tested on `v22.15.0`)
- **Package Manager**: `npm` (v10+) or `pnpm`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/poorva234/Sahayak-Frontend.git
   cd Sahayak-Frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173` (or `http://localhost:8443` depending on port configuration).

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 🛡️ CI/CD

Automated builds and type checks run on every push and pull request to the `main` branch via GitHub Actions workflow (`.github/workflows/ci.yml`).

---

## 📄 License & Disclaimer

This project is a demonstration and research project created for citizen welfare assistance. All scheme eligibility assessments are preliminary and educational. Official determinations are made by the respective government ministries and agencies.
