import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import {Moon,Sun,Download,ChevronDown,ChevronUp,Terminal,Mail} from "lucide-react";
import { SiGithub, SiHuggingface, SiKaggle } from "react-icons/si";
import LinkedinIcon from "../ui/LinkedinIcon";

export default function StandardLayout() {
    const { toggleViewMode } = useTheme();
    const resumePath = `${import.meta.env.BASE_URL}Resume.pdf`;
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showContactLinks, setShowContactLinks] = useState(false);
    const [activeSection, setActiveSection] = useState("About");
    const toggleTheme = () => setIsDarkMode((prev) => !prev);
    const idCardShape =
        "rounded-tl-[20px] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px]";
    return (
        <div className={isDarkMode ? "dark" : ""}>
            <div
                className="w-full mx-auto flex flex-col min-h-screen relative bg-[var(--bg-color)] 
                           text-[var(--text-main)] transition-colors duration-500 font-sans pb-24 md:pb-12">
                <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-8 md:pt-12 flex flex-col gap-6 flex-grow">
                    <header
                        className={`relative w-full bg-[var(--surface-color)] shadow-2xl border border-gray-200 
                                    dark:border-gray-800 p-6 flex justify-between items-start md:items-center z-40 
                                    transition-colors duration-500 ${idCardShape} hover:border-[var(--primary-color)]`}
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={`${import.meta.env.BASE_URL}photo.png`}
                                alt="Kushal Khivasara"
                                className="w-16 h-16 object-cover shadow-lg rounded-xl"
                                onError={(e) => {
                                    e.target.src =
                                        "https://via.placeholder.com/150";
                                }}
                            />
                            <div className="flex flex-col mt-1 md:mt-0">
                                <span
                                    className="text-[var(--primary-color)] font-bold text-xs sm:text-sm 
                                                 tracking-widest uppercase mb-1"
                                >
                                    Software Developer
                                </span>
                                <h1 className="text-xl sm:text-2xl font-extrabold text-[var(--text-main)] leading-tight">
                                    Er. Kushal Khivasara
                                </h1>
                            </div>
                        </div>
                        <div
                            className="hidden md:flex absolute top-0 right-0 p-2 rounded-tr-[20px] rounded-bl-[20px] 
                                       items-center"
                        >
                            <button
                                onClick={() =>
                                    setShowContactLinks(!showContactLinks)
                                }
                                className="px-4 py-2 font-semibold text-sm text-[var(--text-muted)] 
                                           hover:text-[var(--primary-color)] transition-colors cursor-pointer"
                            >
                                {showContactLinks
                                    ? "Hide Contacts"
                                    : "Show Contacts"}
                            </button>
                            <div className="border-l border-[var(--primary-color)] h-4 mx-2"></div>
                            <a
                                href={resumePath}
                                download="Resume.pdf"
                                className="p-2 text-[var(--text-muted)] hover:text-[var(--primary-color)] 
                                           transition-colors cursor-pointer"
                                title="Download Resume"
                            >
                                <Download size={18} />
                            </a>
                            <button
                                onClick={toggleTheme}
                                className="p-2 text-[var(--text-muted)] hover:text-[var(--primary-color)] 
                                           transition-colors cursor-pointer"
                            >
                                {isDarkMode ? (
                                    <Sun size={18} />
                                ) : (
                                    <Moon size={18} />
                                )}
                            </button>
                            <button
                                onClick={toggleViewMode}
                                className="p-2 pr-4 text-[var(--text-muted)] hover:text-[var(--primary-color)] 
                                           transition-colors cursor-pointer"
                                title="Terminal Mode"
                            >
                                <Terminal size={18} />
                            </button>
                        </div>
                        <button
                            className="md:hidden p-2 rounded-xl hover:bg-gray-200 border-1 text-[var(--primary-color)] 
                                       transition-colors cursor-pointer absolute top-4 right-4"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        >
                            {isMobileMenuOpen ? (
                                <ChevronUp size={20} />
                            ) : (
                                <ChevronDown size={20} />
                            )}
                        </button>
                    </header>
                    {isMobileMenuOpen && (
                        <div
                            className={`md:hidden w-full bg-[var(--surface-color)] shadow-xl border border-gray-200 
                                        dark:border-gray-800 p-4 flex flex-col gap-4 z-30 transition-colors 
                                        duration-500 ${idCardShape}`}
                        >
                            <button
                                onClick={() => {
                                    setShowContactLinks(!showContactLinks);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="font-bold text-sm px-4 py-3 border-1 border-[var(--primary-color)] 
                                           text-[var(--primary-color)] rounded-xl w-full text-center"
                            >
                                {showContactLinks
                                    ? "Hide Contact"
                                    : "Show Contact"}
                            </button>
                            <a
                                href={resumePath}
                                download="Resume.pdf"
                                className="flex items-center justify-center gap-2 px-4 py-3 border-1 
                                           border-[var(--primary-color)] text-[var(--primary-color)] 
                                           rounded-xl font-bold w-full"
                            >
                                <Download size={16} /> Download Resume
                            </a>
                            <div className="flex justify-center mt-2">
                                <button
                                    onClick={toggleTheme}
                                    className="flex items-center gap-2 border-1 border-[var(--primary-color)]
                                               text-[var(--primary-color)] font-bold w-full justify-center 
                                               p-3 rounded-xl"
                                >
                                    {isDarkMode ? (
                                        <Sun size={18} />
                                    ) : (
                                        <Moon size={18} />
                                    )}{" "}
                                    Toggle Theme
                                </button>
                            </div>
                        </div>
                    )}
                    {showContactLinks && (
                        <div
                            className={`w-full bg-[var(--primary-color)] text-white dark:text-black 
                                        shadow-lg p-6 flex flex-wrap justify-center gap-6 z-20 
                                        transition-all duration-300 ${idCardShape}`}
                        >
                            <a
                                href="mailto:kushal.khivasara@outlook.com"
                                className="flex items-center gap-2 hover:scale-110 transition-transform font-bold"
                            >
                                <Mail size={24} /> Email
                            </a>
                            <a
                                href="https://github.com/Its-kushal"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 hover:scale-110 transition-transform font-bold"
                            >
                                <SiGithub size={24} /> GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/kushal-khivasara/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 hover:scale-110 transition-transform font-bold"
                            >
                                <LinkedinIcon size={24} /> LinkedIn
                            </a>
                            <a
                                href="https://huggingface.co/ItsKushal/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 hover:scale-110 transition-transform font-bold"
                            >
                                <SiHuggingface size={24} /> HuggingFace
                            </a>
                            <a
                                href="https://kaggle.com/itskushal/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 hover:scale-110 transition-transform font-bold"
                            >
                                <SiKaggle size={24} /> Kaggle
                            </a>
                        </div>
                    )}
                    <main
                        className={`relative w-full bg-[var(--surface-color)] shadow-2xl border border-gray-200 
                                    dark:border-gray-800 p-6 md:p-8 pt-10 md:pt-20 flex flex-col z-10 transition-colors
                                    duration-500 min-h-[400px] ${idCardShape} hover:border hover:border-[var(--primary-color)]`}
                    >
                        <nav
                            className="hidden md:flex absolute top-0 right-0 px-8 py-6 gap-8 rounded-tr-[20px] rounded-bl-[20px] 
                                        items-center z-20"
                        >
                            {[
                                "About",
                                "Projects",
                                "Certificates",
                                "Career",
                            ].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setActiveSection(item)}
                                    className={`font-semibold text-sm transition-colors tracking-wide cursor-pointer
                                                ${
                                                    activeSection === item
                                                        ? "text-[var(--primary-color)]"
                                                        : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                                                }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>
                        <div className="md:hidden mb-6">
                            <h2
                                className="text-3xl font-extrabold text-[var(--text-main)] tracking-tight border-b-2 
                                           border-[var(--primary-color)] inline-block pb-1"
                            >
                                {activeSection}
                            </h2>
                        </div>
                        <div className="flex-grow">
                            {activeSection === "About" && (
                                <div>
                                    <h3
                                        className="hidden md:block text-4xl sm:text-5xl font-extrabold 
                                                   text-[var(--text-main)] mb-6 leading-tight mt-2"
                                    >
                                        I build high-performance systems.
                                    </h3>
                                    <p
                                        className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed 
                                                  max-w-2xl mb-4"
                                    >
                                        I'm Kushal Khivasara, a Software
                                        Developer. Passionate about programming,
                                        web development, and building scalable
                                        solutions to solve real-world problems.
                                    </p>
                                    <p
                                        className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed 
                                                  max-w-2xl"
                                    >
                                        I specialize in React, Node.js, and
                                        Linux DevOps architectures. My passion
                                        for continuous learning drives me to
                                        stay up-to-date with the latest
                                        technologies and frameworks in the
                                        industry.
                                    </p>
                                </div>
                            )}
                            {activeSection !== "About" && (
                                <div className="mt-2">
                                    <h3
                                        className="hidden md:block text-3xl font-extrabold text-[var(--text-main)] 
                                                   mb-4"
                                    >
                                        {activeSection}
                                    </h3>
                                    <p className="text-[var(--text-muted)]">
                                        Content for {activeSection} will go
                                        here. Straightforward and simple.
                                    </p>
                                </div>
                            )}
                        </div>
                    </main>
                    <footer
                        className="hidden md:flex w-full bg-[var(--surface-color)] shadow-xl border border-gray-200 
                                   dark:border-gray-800 rounded-[20px] px-8 py-4 justify-between items-center 
                                   z-10 mt-4 text-sm text-[var(--text-muted)] transition-colors duration-500
                                   hover:border-[var(--primary-color)]"
                    >
                        <div className="flex-shrink-0">
                            <p>© 2026 Kushal Khivasara</p>
                        </div>
                        <div className="flex gap-6 font-semibold tracking-wide">
                            <a
                                href="#sitemap"
                                className="hover:text-[var(--primary-color)] transition-colors"
                            >
                                Sitemap
                            </a>
                        </div>
                        <a
                            href={resumePath}
                            download="Resume.pdf"
                            className="flex items-center justify-center font-bold hover:text-[var(--primary-color)] 
                                       transition-colors"
                        >
                            <Download size={16} className="mr-2" /> Resume
                        </a>
                    </footer>
                </div>
                <nav
                    className="md:hidden fixed bottom-0 left-0 w-full bg-[var(--surface-color)] 
                               border-t border-gray-200 dark:border-gray-800 p-4 pb-6 flex 
                               justify-around items-center z-50 rounded-t-[24px] shadow-[0_-10px_20px_rgba(0,0,0,0.2)]"
                >
                    {["About", "Projects", "Certificates", "Career"].map(
                        (item) => (
                            <button
                                key={item}
                                onClick={() => setActiveSection(item)}
                                className={`font-semibold text-[13px] transition-colors tracking-wide cursor-pointer
                                        ${
                                            activeSection === item
                                                ? "text-[var(--primary-color)]"
                                                : "text-[var(--text-muted)]"
                                        }`}
                            >
                                {item}
                            </button>
                        ),
                    )}
                </nav>
            </div>
        </div>
    );
}
