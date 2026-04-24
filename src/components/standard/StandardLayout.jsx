import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Home, Moon, Download, Menu, Sun, X } from "lucide-react";

export default function StandardLayout() {
    const { toggleViewMode } = useTheme();
    const resumePath = `${import.meta.env.BASE_URL}Resume.pdf`;

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <div className={isDarkMode ? "dark" : ""}>
            <div className="w-full mx-auto flex flex-col min-h-screen relative bg-white dark:bg-gray-950 transition-colors duration-500 font-sans">
                <div className="w-full max-w-5xl mx-auto px-6 py-24 flex flex-col flex-grow">
                    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-4xl bg-white dark:bg-gray-950 shadow-xl border border-gray-200 dark:border-gray-800 rounded-full px-4 py-3 flex justify-between items-center z-50 transition-colors duration-500">
                        <div className="flex-shrink-0">
                            <h1 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white ml-2 transition-colors duration-500">
                                Kushal.
                            </h1>
                        </div>

                        <nav className="hidden md:flex gap-6 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest items-center">
                            <a href="#home" className="hover:text-black dark:hover:text-white transition-colors">
                                <Home size={18} />
                            </a>
                            <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">
                                Projects
                            </a>
                            <a href="#certificates" className="hover:text-black dark:hover:text-white transition-colors">
                                Certificates
                            </a>
                            <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">
                                Skills
                            </a>
                            <a href="#career" className="hover:text-black dark:hover:text-white transition-colors">
                                Career
                            </a>
                        </nav>

                        <div className="flex items-center gap-2 md:gap-4 mr-2">
                            <button 
                                onClick={toggleTheme}
                                className="hidden md:flex p-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                            >
                                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <a
                                href={resumePath}
                                download="Resume.pdf"
                                className="hidden md:flex items-center justify-center bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-4 py-1.5 rounded-full font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors text-sm"
                            >
                                <span className="mr-2">Resume</span>
                                <Download size={16} />
                            </a>

                            <button
                                className="md:hidden p-2 text-gray-900 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                            >
                                {isMobileMenuOpen ? (
                                    <X size={24} />
                                ) : (
                                    <Menu size={24} />
                                )}
                            </button>
                        </div>
                    </header>
                    {isMobileMenuOpen && (
                        <div className="md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-white dark:bg-gray-950 shadow-2xl border border-gray-200 dark:border-gray-800 rounded-3xl p-6 flex flex-col gap-4 z-40 transition-colors duration-500">
                            <a href="#home" className="flex items-center gap-3 text-gray-900 dark:text-white font-bold text-lg p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900" onClick={() => setIsMobileMenuOpen(false)}>
                                <Home size={20} /> Home
                            </a>
                            <a href="#projects" className="text-gray-900 dark:text-white font-bold text-lg p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900" onClick={() => setIsMobileMenuOpen(false)}>
                                Projects
                            </a>
                            <a href="#certificates" className="text-gray-900 dark:text-white font-bold text-lg p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900" onClick={() => setIsMobileMenuOpen(false)}>
                                Certificates
                            </a>
                            <a href="#skills" className="text-gray-900 dark:text-white font-bold text-lg p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900" onClick={() => setIsMobileMenuOpen(false)}>
                                Skills
                            </a>
                            <a href="#career" className="text-gray-900 dark:text-white font-bold text-lg p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900" onClick={() => setIsMobileMenuOpen(false)}>
                                Career
                            </a>

                            <hr className="my-2 border-gray-200 dark:border-gray-800" />

                            <button 
                                onClick={toggleTheme}
                                className="flex items-center justify-between bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-3 rounded-xl font-bold w-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                            >
                                <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                            <a 
                                href={resumePath} 
                                download="Resume.pdf" 
                                className="flex items-center justify-center gap-2 bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white p-3 rounded-xl font-bold w-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
                            >
                                Download Resume <Download size={18} />
                            </a>
                        </div>
                    )}
                    <main className="flex-grow flex flex-col justify-center max-w-3xl mt-12 z-10">
                        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tighter transition-colors duration-500">
                            I build high-performance systems.
                        </h2>
                        <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl transition-colors duration-500">
                            Hi, I am Kushal. I specialize in React, Node.js, and Linux
                            DevOps architectures. Welcome to my standard portfolio view.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={toggleViewMode}
                                className="hidden md:flex items-center justify-center border-2 border-gray-200 dark:border-gray-800 px-8 py-4 rounded-lg font-bold text-gray-600 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                            >
                                [ Switch to Terminal OS ]
                            </button>
                        </div>
                    </main>
                    <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-3xl bg-white dark:bg-gray-950 shadow-xl border border-gray-200 dark:border-gray-800 rounded-full px-6 py-3 flex justify-between items-center z-50 text-xs text-gray-500 dark:text-gray-400 transition-colors duration-500">
                        <div className="flex-shrink-0">
                            <p>© 2026 Kushal Khivasara</p>
                        </div>

                        <div className="hidden sm:flex gap-4 font-semibold tracking-wide">
                            <a href="#sitemap" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                                Sitemap
                            </a>
                            <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                                Contact
                            </a>
                        </div>
                        <a 
                            href={resumePath} 
                            download="Resume.pdf" 
                            className="flex items-center justify-center bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-4 py-1 rounded-full font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
                        >
                            <Download size={14} className="mr-1.5" />
                            Resume
                        </a>
                    </footer>
                </div>
            </div>
        </div>
    );
}