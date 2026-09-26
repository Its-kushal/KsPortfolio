/**
 * Centralized portfolio data source of truth.
 * Verified and extracted from repository source files and public/Resume.pdf.
 */

export const personalInfo = {
    name: "Kushal Khivasara",
    titlePrefix: "Er.",
    role: "Software Developer",
    headline: "I build high-performance systems.",
    summary:
        "Results-oriented Software Developer and Data Analyst with expertise in Python, SQL, and modern web architectures. Proven track record in building full-stack scalable systems and processing high-volume financial data.",
    aboutParagraphs: [
        "I am a Software Developer who turns complex data and business requirements into scalable, production-ready systems. With deep expertise in Python, SQL, and Machine Learning, I build everything from algorithmic trading engines processing high-volume financial data to enterprise ERP systems.",
        "I specialize in React, Node.js, and Linux DevOps architectures. My passion for continuous learning drives me to engineer robust, high-performance solutions that solve real-world problems and drive measurable results.",
    ],
    email: "kushal.khivasara@outlook.com",
    phone: "7020822801",
    location: "Mumbai / Thane, India",
    resumePath: `${import.meta.env.BASE_URL}Resume.pdf`,
    avatarPath: `${import.meta.env.BASE_URL}photo.png`,
    socialLinks: [
        {
            name: "Email",
            url: "mailto:kushal.khivasara@outlook.com",
            display: "kushal.khivasara@outlook.com",
        },
        {
            name: "GitHub",
            url: "https://github.com/Its-kushal",
            display: "github.com/Its-kushal",
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/kushal-khivasara/",
            display: "linkedin.com/in/kushal-khivasara",
        },
        {
            name: "HuggingFace",
            url: "https://huggingface.co/ItsKushal/",
            display: "huggingface.co/ItsKushal",
        },
        {
            name: "Kaggle",
            url: "https://kaggle.com/itskushal/",
            display: "kaggle.com/itskushal",
        },
    ],
};

export const projectsData = [
    {
        id: "trading-algos",
        title: "TradingAlgos: High-Frequency Trading Engine",
        category: "FinTech & Systems",
        summary:
            "Real-time algorithmic trading bot processing massive tick-by-tick financial datasets via WebSockets.",
        description:
            "Engineered a robust algorithmic trading bot capable of ingesting and processing massive financial datasets in real-time using WebSockets and SmartAPI (AngelOne). Built a high-performance PostgreSQL data pipeline to log tick-by-tick market data, enabling efficient querying for historical backtesting and strategy validation. Utilized Pandas and NumPy to compute complex technical indicators (OI, RSI, MACD) on the fly with low latency.",
        technologies: [
            "Python",
            "SQL",
            "Pandas",
            "NumPy",
            "WebSockets",
            "PostgreSQL",
            "SmartAPI",
        ],
        repositoryUrl: "https://github.com/Its-kushal",
        demoUrl: null,
        status: "Active",
        highlights: [
            "Real-time WebSocket data stream ingestion via AngelOne SmartAPI",
            "Optimized PostgreSQL schema for high-throughput tick-by-tick logging",
            "Low-latency on-the-fly technical indicator calculations (OI, RSI, MACD)",
        ],
    },
    {
        id: "wholesale-manager",
        title: "WholeSaleManager (ERP Suite)",
        category: "Full Stack & Enterprise",
        summary:
            "Custom enterprise ERP solution digitizing operations, inventory, and finance for wholesale clients.",
        description:
            "Architected a custom ERP solution using Django REST Framework and Next.js to digitize operations for a wholesale client, managing HR, inventory, and finance modules. Designed a normalized PostgreSQL database schema handling complex relationships between daily sales registers, employee attendance, and retailer credits. Implemented a Cash Denomination algorithm that automated end-of-day financial reconciliation, reducing manual accounting errors by over 40%.",
        technologies: [
            "Django",
            "Django REST Framework",
            "Next.js",
            "PostgreSQL",
            "JWT",
            "Tailwind CSS",
        ],
        repositoryUrl: "https://github.com/Its-kushal",
        demoUrl: null,
        status: "Production",
        highlights: [
            "Modular architecture for HR, inventory management, and finance",
            "Cash Denomination algorithm reducing reconciliation errors by >40%",
            "Secured sensitive records using JWT authentication and RBAC",
        ],
    },
    {
        id: "bank-churn-prediction",
        title: "Bank Customer Churn Prediction",
        category: "Data Science & ML",
        summary:
            "Predictive machine learning pipeline identifying at-risk banking customers and retention trends.",
        description:
            "Developed a predictive model to identify at-risk customers, performing rigorous data cleaning and feature engineering on large customer datasets. Leveraged SQL for data extraction and Python libraries (Scikit-learn) to train classification models, achieving high accuracy in forecasting customer retention trends.",
        technologies: [
            "Python",
            "Scikit-Learn",
            "SQL",
            "Pandas",
            "NumPy",
            "Matplotlib",
        ],
        repositoryUrl: "https://github.com/Its-kushal",
        demoUrl: null,
        status: "Completed",
        highlights: [
            "Feature engineering and preprocessing on high-dimensional customer data",
            "High-accuracy predictive model trained with Scikit-learn",
            "SQL extraction pipelines for reproducible evaluation",
        ],
    },
    {
        id: "ks-portfolio",
        title: "KsPortfolio (Dual-UI Terminal OS & Web GUI)",
        category: "Frontend & Architecture",
        summary:
            "Interactive developer portfolio featuring a retro Linux terminal OS and a responsive ID-card GUI.",
        description:
            "Engineered an interactive developer portfolio web application built with React 19, Vite, and Tailwind CSS v4. Delivers an authentic CRT Linux terminal OS with resizable tiling window panes for desktop power users, paired with a responsive ID-card style graphical interface for mobile browsing. Includes automated CI/CD deployment to GitHub Pages.",
        technologies: [
            "React 19",
            "Vite 8",
            "Tailwind CSS v4",
            "react-resizable-panels",
            "Vitest",
        ],
        repositoryUrl: "https://github.com/Its-kushal/KsPortfolio",
        demoUrl: "https://Its-kushal.github.io/KsPortfolio/",
        status: "Active",
        highlights: [
            "Dual-interface architecture with auto-routing on viewport < 768px",
            "Authentic CRT bootloader and draggable tiling window manager",
            "Automated CI/CD with testing, linting, and Pages deployment",
        ],
    },
];

export const certificatesData = [
    {
        id: "cert-python",
        title: "Python Training",
        issuer: "Internshala Trainings",
        technologies: ["Python", "OOP", "Data Structures", "APIs"],
        description:
            "Comprehensive training covering Python syntax, object-oriented design, data handling, and automation scripting.",
    },
    {
        id: "cert-react",
        title: "ReactJS Development",
        issuer: "Internshala Trainings",
        technologies: ["React", "JavaScript", "Components", "State"],
        description:
            "Modern component-driven development covering React lifecycle, custom hooks, virtual DOM optimization, and SPA architectures.",
    },
    {
        id: "cert-cpp",
        title: "C / C++ Programming",
        issuer: "Internshala Trainings",
        technologies: ["C", "C++", "Memory Management", "Pointers"],
        description:
            "Core systems programming focusing on memory management, pointer manipulation, and foundational algorithmic efficiency.",
    },
    {
        id: "cert-dsa",
        title: "Data Structures & Algorithms (DSA)",
        issuer: "Internshala Trainings",
        technologies: ["DSA", "Big-O", "Search & Sort", "Dynamic Programming"],
        description:
            "Data structures, computational complexity, problem solving, recursive strategies, and algorithmic design.",
    },
    {
        id: "cert-prompt",
        title: "Prompt Engineering",
        issuer: "Internshala Trainings",
        technologies: ["Prompt Engineering", "LLMs", "Generative AI"],
        description:
            "Foundational techniques for designing structured prompts, few-shot prompting, and interacting with modern large language models.",
    },
];

export const careerData = [
    {
        id: "exp-freelance",
        role: "Freelance Full Stack Developer",
        organization: "Client Engagement (WholeSaleManager)",
        location: "Remote",
        period: "June 2025 – Present",
        type: "Experience",
        summary:
            "Designed and delivered full-stack ERP architecture to digitize operations, HR, inventory, and finances for a wholesale business.",
        highlights: [
            "Architected REST APIs using Django REST Framework and frontend dashboards with Next.js.",
            "Engineered normalized PostgreSQL schemas and Cash Denomination reconciliation algorithm (40%+ error reduction).",
            "Implemented JWT role-based access control (RBAC) across administrative, DSO, and staff roles.",
        ],
    },
    {
        id: "exp-systems",
        role: "Independent Software & Systems Developer",
        organization: "Open Source / Independent",
        location: "Mumbai, India",
        period: "2024 – Present",
        type: "Experience",
        summary:
            "Building algorithmic trading engines, data pipelines, and specialized Unix-inspired web interfaces.",
        highlights: [
            "Developed real-time tick-by-tick financial market data pipelines using WebSockets and PostgreSQL.",
            "Trained predictive ML models for customer churn analysis using Scikit-learn.",
            "Created KsPortfolio dual-UI web application featuring Linux tiling window manager emulation.",
        ],
    },
];

export const technicalSkills = [
    {
        category: "Languages",
        skills: ["Python (Advanced)", "SQL (PostgreSQL/MySQL)", "JavaScript (ES6+)", "C++", "HTML5 / CSS3"],
    },
    {
        category: "Frameworks & Libraries",
        skills: ["Django", "Django REST Framework", "Next.js", "React 19", "FastAPI", "Tailwind CSS"],
    },
    {
        category: "Data & Machine Learning",
        skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-Learn", "Jupyter Lab", "Prompt Engineering"],
    },
    {
        category: "Tools & DevOps",
        skills: ["Linux (Arch/Debian)", "Git & GitHub", "Postman", "WebSockets", "Vite", "VS Code"],
    },
];
