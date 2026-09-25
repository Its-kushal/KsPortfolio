# Kushal Khivasara - Dual-UI Portfolio 🚀

Welcome to my personal portfolio! This project is a modern web application featuring two distinct user interfaces: a fully keyboard-navigable **Terminal OS** view for desktop power users, and a clean, responsive **Standard** ID-card view for mobile devices and conventional desktop browsing.

Live Site: [https://Its-kushal.github.io/KsPortfolio/](https://Its-kushal.github.io/KsPortfolio/)

---

## 🌟 Features

* **Dual Interface System:** Conditionally renders a Linux-inspired Terminal UI or a standard web portfolio based on user preference and viewport width.
* **Terminal OS Mode (Desktop):**
  * **Authentic CRT Bootloader:** Simulated systemd kernel boot sequence and graceful poweroff states.
  * **Keyboard Navigation:** Fully navigable using `↑` `↓` `←` `→` arrows, `Enter`, `Space`, and `Esc`.
  * **Mouse & Touch Support:** Clickable command entries with visible focus and hover states for hybrid devices.
  * **Resizable Tiling Panes:** Built with `react-resizable-panels` to emulate a true tiling window manager (like i3 or tmux).
  * **System Diagnostics:** Live session uptime counter, viewport resolution monitor, and ASCII branding (`neofetch`-style).
  * **Integrated PDF Viewer:** Embedded interactive resume viewer (`Resume.pdf`) without third-party redirection.
* **Standard GUI Mode (Responsive Desktop & Mobile):**
  * **ID-Card Layout:** Profile card with professional headline, bio, and direct contact actions.
  * **Dark / Light Theme:** Seamless toggle with custom CSS variable tokens.
  * **Structured Portfolio Sections:** Comprehensive About, Projects, Certificates, and Career history tabs.
  * **Mobile Drawer:** Accessible slide-out contact panel with one-tap copy and social links.
  * **Offline Resilience:** Local SVG avatar fallbacks and standalone assets.
* **Automated CI/CD:** Continuous integration with linting, testing, and production builds deploying automatically to GitHub Pages.

---

## 🛠️ Tech Stack

* **Core:** React 19, JavaScript (ES6+), HTML5, CSS3
* **Build Tool:** Vite 8
* **Styling:** Tailwind CSS v4 with custom theme tokens
* **Tiling Layout:** `react-resizable-panels`
* **Icons:** `lucide-react`, `react-icons`
* **Testing:** Vitest, React Testing Library, `@testing-library/jest-dom`, `jsdom`
* **Linting:** ESLint 9 (Flat Config)
* **Deployment:** GitHub Actions to GitHub Pages

---

## 🚀 Local Setup & Installation

### Prerequisites

* **Node.js**: `>= 20.0.0` (Recommended: `v22.x`)
* **npm**: `>= 10.0.0`

### Step-by-Step Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Its-kushal/KsPortfolio.git
   cd KsPortfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/KsPortfolio/`.

4. **Run static analysis (Linting):**
   ```bash
   npm run lint
   ```

5. **Run automated test suite:**
   ```bash
   npm test
   ```

6. **Build for production:**
   ```bash
   npm run build
   ```

7. **Preview the production bundle:**
   ```bash
   npm run preview
   ```
   Preview the production build at `http://localhost:4173/KsPortfolio/`.

---

## ⌨️ Terminal Keyboard Navigation

| Key | Action |
| :--- | :--- |
| `↑` / `k` | Move selection to previous command |
| `↓` / `j` | Move selection to next command |
| `Enter` / `→` | Execute active command / open section |
| `Tab` | Focus first contact link in contact view |
| `Esc` / `←` | Reset preview content / clear selection |
| `Ctrl + C` | Copy highlighted contact link address |

---

## 📂 Project Architecture

```
Portfolio/
├── .github/workflows/
│   └── deploy.yml            # CI/CD: lint, test, build, deploy to Pages
├── public/                   # Static public assets
│   ├── Resume.pdf            # Curated professional resume
│   ├── favicon.svg           # Site favicon
│   ├── photo.png             # Profile avatar
│   ├── preview.jpg           # OpenGraph / Twitter social card preview
│   ├── robots.txt            # Search engine directives
│   └── sitemap.xml           # XML sitemap
├── src/
│   ├── App.jsx               # Screen controller & responsive listener
│   ├── index.css             # Tailwind v4 theme variables & utilities
│   ├── main.jsx              # React 19 entry point
│   ├── components/
│   │   ├── common/           # Shared components (ErrorBoundary, Toast)
│   │   ├── standard/         # Standard GUI modular tabs & layouts
│   │   ├── terminal/         # Terminal OS panes, bootloader, PDF viewer
│   │   └── ui/               # Reusable atomic UI elements (Pane, Icons)
│   ├── context/
│   │   └── ThemeContext.jsx  # Unified viewMode, theme, and persistence
│   ├── data/
│   │   ├── portfolioData.js  # Centralized portfolio source of truth
│   │   └── terminalData.jsx  # Terminal command bindings & actions
│   └── test/                 # Automated test harness & test suites
├── eslint.config.js          # ESLint 9 configuration
├── index.html                # HTML template with SEO & social tags
├── package.json              # Project metadata, scripts, and dependencies
└── vite.config.js            # Vite bundler & test configuration
```

---

## 📄 License & Author

Created and maintained by **Kushal Khivasara**.  
Email: [kushal.khivasara@outlook.com](mailto:kushal.khivasara@outlook.com)  
GitHub: [@Its-kushal](https://github.com/Its-kushal)  
LinkedIn: [kushal-khivasara](https://linkedin.com/in/kushal-khivasara/)