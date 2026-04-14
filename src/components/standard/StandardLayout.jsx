import { useTheme } from "../../context/ThemeContext";
export default function StandardLayout() {
    const { toggleViewMode } = useTheme();
    const resumePath = `${import.meta.env.BASE_URL}Kushal-Khivasara-resume-v2.pdf`;
    return (
        <div className="w-full max-w-5xl mx-auto px-6 py-12 md:py-24 flex flex-col min-h-screen">
            <header className="flex justify-between items-center mb-16">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
                    Kushal.
                </h1>
                <nav className="hidden md:flex gap-8 text-sm font-bold text-gray-500 uppercase tracking-widest">
                    <a
                        href="#about"
                        className="hover:text-black transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="hover:text-black transition-colors"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-black transition-colors"
                    >
                        Contact
                    </a>
                </nav>
            </header>
            <main className="flex-grow flex flex-col justify-center max-w-3xl">
                <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tighter">
                    I build high-performance systems.
                </h2>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl">
                    Hi, I am Kushal. I specialize in React, Node.js, and Linux
                    DevOps architectures. Welcome to my standard portfolio view.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href={resumePath}
                        download="Kushal_Resume.pdf"
                        className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                    >
                        Download Resume
                    </a>
                    <button
                        onClick={toggleViewMode}
                        className="hidden md:flex items-center justify-center border-2 border-gray-200 px-8 py-4 rounded-lg font-bold text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors cursor-pointer"
                    >
                        [ Switch to Terminal OS ]
                    </button>
                </div>
            </main>
            <footer className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center">
                <p>© 2026 Kushal. All rights reserved.</p>
                <p className="md:hidden mt-2 sm:mt-0 text-center">
                    Note: Terminal OS UI is restricted to desktop screens.
                </p>
            </footer>
        </div>
    );
}
