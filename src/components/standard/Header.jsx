import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun, Download, ChevronDown, ChevronUp, Terminal } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

export default function Header({
    showContactLinks,
    setShowContactLinks,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    idCardShape,
}) {
    const { toggleViewMode, isDarkMode, toggleTheme } = useTheme();
    const resumePath = personalInfo.resumePath;

    const fallbackAvatar =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='100%25' height='100%25' fill='%231f2937'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='20' font-family='sans-serif'%3EKK%3C/text%3E%3C/svg%3E";

    return (
        <>
            <header
                className={`relative w-full bg-[var(--surface-color)] shadow-2xl border border-gray-200 
                            dark:border-gray-800 p-6 flex justify-between items-start md:items-center z-40 
                            transition-colors duration-500 ${idCardShape} hover:border-[var(--primary-color)]`}
            >
                <div className="flex items-center gap-4">
                    <img
                        src={personalInfo.avatarPath}
                        alt="Kushal Khivasara"
                        width={64}
                        height={64}
                        className="w-16 h-16 object-cover shadow-lg rounded-xl"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = fallbackAvatar;
                        }}
                    />
                    <div className="flex flex-col mt-1 md:mt-0">
                        <span
                            className="text-[var(--primary-color)] font-bold text-xs sm:text-sm 
                                       tracking-widest uppercase mb-1"
                        >
                            {personalInfo.role}
                        </span>
                        <h1 className="text-xl sm:text-2xl font-extrabold text-[var(--text-main)] leading-tight">
                            {personalInfo.titlePrefix} {personalInfo.name}
                        </h1>
                    </div>
                </div>

                <div
                    className="hidden md:flex absolute top-0 right-0 p-2 rounded-tr-[20px] rounded-bl-[20px] 
                               items-center"
                >
                    <button
                        type="button"
                        onClick={() => setShowContactLinks(!showContactLinks)}
                        className="px-4 py-2 font-semibold text-sm text-[var(--text-muted)] 
                                   hover:text-[var(--primary-color)] transition-colors cursor-pointer"
                    >
                        {showContactLinks ? "Hide Contacts" : "Show Contacts"}
                    </button>
                    <div className="border-l border-[var(--primary-color)] h-4 mx-2"></div>
                    <a
                        href={resumePath}
                        download="Resume.pdf"
                        className="p-2 text-[var(--text-muted)] hover:text-[var(--primary-color)] 
                                   transition-colors cursor-pointer"
                        title="Download Resume"
                        aria-label="Download Resume"
                    >
                        <Download size={18} />
                    </a>
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="p-2 text-[var(--text-muted)] hover:text-[var(--primary-color)] 
                                   transition-colors cursor-pointer"
                        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        type="button"
                        onClick={toggleViewMode}
                        className="p-2 pr-4 text-[var(--text-muted)] hover:text-[var(--primary-color)] 
                                   transition-colors cursor-pointer"
                        title="Terminal Mode"
                        aria-label="Terminal Mode"
                    >
                        <Terminal size={18} />
                    </button>
                </div>

                <button
                    type="button"
                    className="md:hidden p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-700 text-[var(--primary-color)] 
                               transition-colors cursor-pointer absolute top-4 right-4"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
                        type="button"
                        onClick={() => {
                            setShowContactLinks(!showContactLinks);
                            setIsMobileMenuOpen(false);
                        }}
                        className="font-bold text-sm px-4 py-3 border border-[var(--primary-color)] 
                                   text-[var(--primary-color)] rounded-xl w-full text-center cursor-pointer"
                    >
                        {showContactLinks ? "Hide Contact" : "Show Contact"}
                    </button>
                    <a
                        href={resumePath}
                        download="Resume.pdf"
                        className="flex items-center justify-center gap-2 px-4 py-3 border 
                                   border-[var(--primary-color)] text-[var(--primary-color)] 
                                   rounded-xl font-bold w-full cursor-pointer"
                    >
                        <Download size={16} /> Download Resume
                    </a>
                    <div className="flex justify-center mt-2">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="flex items-center gap-2 border border-[var(--primary-color)]
                                       text-[var(--primary-color)] font-bold w-full justify-center 
                                       p-3 rounded-xl cursor-pointer"
                        >
                            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}{" "}
                            Toggle Theme
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
