import { personalInfo, technicalSkills } from "../../data/portfolioData";
import { Terminal, Database, Cpu, Layers } from "lucide-react";

export default function AboutSection() {
    const getCategoryIcon = (category) => {
        if (category.includes("Languages")) return <Terminal size={18} className="text-[var(--primary-color)]" />;
        if (category.includes("Frameworks")) return <Layers size={18} className="text-[var(--primary-color)]" />;
        if (category.includes("Data")) return <Database size={18} className="text-[var(--primary-color)]" />;
        return <Cpu size={18} className="text-[var(--primary-color)]" />;
    };

    return (
        <div className="space-y-8 animate-fadeIn">
            <div>
                <h3
                    className="hidden md:block text-3xl sm:text-4xl font-extrabold 
                               text-[var(--text-main)] mb-6 leading-tight mt-2"
                >
                    {personalInfo.headline}
                </h3>
                {personalInfo.aboutParagraphs.map((para, idx) => (
                    <p
                        key={idx}
                        className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed 
                                   max-w-3xl mb-4"
                    >
                        {para}
                    </p>
                ))}
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <h4 className="text-xl font-bold text-[var(--text-main)] mb-4">
                    Core Technical Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {technicalSkills.map((group) => (
                        <div
                            key={group.category}
                            className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-black/30"
                        >
                            <div className="flex items-center gap-2 mb-2 font-bold text-sm text-[var(--text-main)]">
                                {getCategoryIcon(group.category)}
                                <span>{group.category}</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs px-2.5 py-1 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[var(--text-main)] shadow-xs"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
