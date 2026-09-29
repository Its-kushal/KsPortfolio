import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import Header from "./Header";
import ContactDrawer from "./ContactDrawer";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import CertificatesSection from "./CertificatesSection";
import CareerSection from "./CareerSection";
import Footer from "./Footer";

const SECTIONS = ["About", "Projects", "Certificates", "Career"];

export default function StandardLayout() {
    const { isDarkMode } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showContactLinks, setShowContactLinks] = useState(false);
    const [activeSection, setActiveSection] = useState("About");

    const idCardShape =
        "rounded-tl-[20px] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px]";

    const renderActiveSection = () => {
        switch (activeSection) {
            case "About":
                return <AboutSection />;
            case "Projects":
                return <ProjectsSection />;
            case "Certificates":
                return <CertificatesSection />;
            case "Career":
                return <CareerSection />;
            default:
                return <AboutSection />;
        }
    };

    return (
        <div className={isDarkMode ? "dark" : ""}>
            <div
                className="w-full mx-auto flex flex-col min-h-screen relative bg-[var(--bg-color)] 
                           text-[var(--text-main)] transition-colors duration-500 font-sans pb-24 md:pb-12"
            >
                <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-8 md:pt-12 flex flex-col gap-6 flex-grow">
                    <Header
                        showContactLinks={showContactLinks}
                        setShowContactLinks={setShowContactLinks}
                        isMobileMenuOpen={isMobileMenuOpen}
                        setIsMobileMenuOpen={setIsMobileMenuOpen}
                        idCardShape={idCardShape}
                    />

                    {showContactLinks && (
                        <ContactDrawer idCardShape={idCardShape} />
                    )}

                    <main
                        className={`relative w-full bg-[var(--surface-color)] shadow-2xl border border-gray-200 
                                    dark:border-gray-800 p-6 md:p-8 pt-10 md:pt-20 flex flex-col z-10 transition-colors
                                    duration-500 min-h-[400px] ${idCardShape} hover:border hover:border-[var(--primary-color)]`}
                    >
                        <nav
                            aria-label="Portfolio sections"
                            className="hidden md:flex absolute top-0 right-0 px-8 py-6 gap-8 rounded-tr-[20px] rounded-bl-[20px] 
                                       items-center z-20"
                        >
                            {SECTIONS.map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => setActiveSection(item)}
                                    aria-current={activeSection === item ? "page" : undefined}
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
                            {renderActiveSection()}
                        </div>
                    </main>

                    <Footer />
                </div>

                <nav
                    aria-label="Mobile sections navigation"
                    className="md:hidden fixed bottom-0 left-0 w-full bg-[var(--surface-color)] 
                               border-t border-gray-200 dark:border-gray-800 p-4 pb-6 flex 
                               justify-around items-center z-50 rounded-t-[24px] shadow-[0_-10px_20px_rgba(0,0,0,0.2)]"
                >
                    {SECTIONS.map((item) => (
                        <button
                            key={item}
                            type="button"
                            onClick={() => setActiveSection(item)}
                            aria-current={activeSection === item ? "page" : undefined}
                            className={`font-semibold text-[13px] transition-colors tracking-wide cursor-pointer
                                    ${
                                        activeSection === item
                                            ? "text-[var(--primary-color)] font-bold"
                                            : "text-[var(--text-muted)]"
                                    }`}
                        >
                            {item}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}
