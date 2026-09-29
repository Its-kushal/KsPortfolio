import { careerData } from "../../data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function CareerSection() {
    return (
        <div className="space-y-6">
            <div className="hidden md:block">
                <h3 className="text-3xl font-extrabold text-[var(--text-main)] mb-2">
                    Professional Experience & Career
                </h3>
                <p className="text-[var(--text-muted)] text-base max-w-2xl">
                    Engineering history spanning commercial ERP implementations, financial systems, and systems engineering.
                </p>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--primary-color)]/30 space-y-8 mt-4">
                {careerData.map((item) => (
                    <div key={item.id} className="relative group">
                        <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[var(--primary-color)] border-4 border-[var(--surface-color)] shadow-sm" />

                        <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-[var(--surface-color)] shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                <h4 className="text-xl font-bold text-[var(--text-main)]">
                                    {item.role}
                                </h4>
                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary-color)] bg-[var(--primary-color)]/10 px-2.5 py-1 rounded-full">
                                    <Calendar size={13} /> {item.period}
                                </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] mb-3">
                                <span className="inline-flex items-center gap-1 font-medium">
                                    <Briefcase size={14} /> {item.organization}
                                </span>
                                <span className="inline-flex items-center gap-1">
                                    <MapPin size={14} /> {item.location}
                                </span>
                            </div>

                            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                                {item.summary}
                            </p>

                            <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)]">
                                {item.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle size={15} className="text-[var(--primary-color)] shrink-0 mt-0.5" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
