# Kushal Khivasara - Dual-UI Portfolio 🚀

Welcome to my personal portfolio! This project is a unique web application featuring two distinct user interfaces: a fully keyboard-navigable **Terminal OS** view for desktop power users, and a clean, modern **Standard** view for mobile devices.

## 🌟 Features

* **Dual Interface System:** Conditionally renders a Linux-inspired Terminal UI or a standard web portfolio based on user preference and screen size.
* **Terminal OS Mode:**
  * **Keyboard Navigation:** Fully navigable using `↑` `↓` `←` `→` arrows, `Enter`, and `Esc`.
  * **Resizable Panes:** Built with `react-resizable-panels` to mimic a true tiling window manager (like tmux or i3).
  * **Live Previews:** Simulated commands (`neofetch`, `htop_progress`) and an integrated PDF viewer to read my resume directly in the terminal.
* **Responsive Design:** Automatically detects screens smaller than 768px and forces the Standard UI to ensure a perfect mobile experience.
* **Automated CI/CD:** Deploys automatically to GitHub Pages using GitHub Actions whenever changes are pushed to the `main` branch.

## 🛠️ Tech Stack

* **Framework:** React 19 + Vite
* **Styling:** Tailwind CSS v4
* **Components & Utilities:** `react-resizable-panels`, `framer-motion`, `lucide-react`
* **Deployment:** GitHub Pages (via GitHub Actions)

## 🚀 Local Setup & Installation

To run this project on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Its-kushal/KsPortfolio.git](https://github.com/Its-kushal/KsPortfolio.git)