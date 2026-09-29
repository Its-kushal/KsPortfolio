import { Download } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

export default function Footer() {
    return (
        <footer
            className="hidden md:flex w-full bg-[var(--surface-color)] shadow-xl border border-gray-200 
                       dark:border-gray-800 rounded-[20px] px-8 py-4 justify-between items-center 
                       z-10 mt-4 text-sm text-[var(--text-muted)] transition-colors duration-500
                       hover:border-[var(--primary-color)]"
        >
            <div className="flex-shrink-0">
                <p>© 2026 {personalInfo.name}</p>
            </div>
            <div className="flex gap-6 font-semibold tracking-wide">
                <a
                    href={`${import.meta.env.BASE_URL}sitemap.xml`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[var(--primary-color)] transition-colors"
                >
                    Sitemap
                </a>
            </div>
            <a
                href={personalInfo.resumePath}
                download="Resume.pdf"
                className="flex items-center justify-center font-bold hover:text-[var(--primary-color)] 
                           transition-colors"
            >
                <Download size={16} className="mr-2" /> Resume
            </a>
        </footer>
    );
}
