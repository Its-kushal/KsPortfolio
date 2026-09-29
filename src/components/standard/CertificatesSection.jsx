import { certificatesData } from "../../data/portfolioData";
import { Award, CheckCircle } from "lucide-react";

export default function CertificatesSection() {
    return (
        <div className="space-y-6">
            <div className="hidden md:block">
                <h3 className="text-3xl font-extrabold text-[var(--text-main)] mb-2">
                    Professional Certifications
                </h3>
                <p className="text-[var(--text-muted)] text-base max-w-2xl">
                    Verified technical trainings and skill credentials earned across systems, algorithms, and web architectures.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                {certificatesData.map((cert) => (
                    <article
                        key={cert.id}
                        className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-[var(--surface-color)] shadow-sm hover:border-[var(--primary-color)] transition-colors flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-start justify-between gap-2 mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-lg bg-[var(--primary-color)]/10 text-[var(--primary-color)]">
                                        <Award size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[var(--text-main)]">
                                            {cert.title}
                                        </h4>
                                        <span className="text-xs text-[var(--text-muted)]">
                                            {cert.issuer}
                                        </span>
                                    </div>
                                </div>
                                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                                    <CheckCircle size={12} /> Verified
                                </span>
                            </div>

                            <p className="text-sm text-[var(--text-muted)] leading-relaxed mt-3 mb-4">
                                {cert.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 dark:border-gray-800">
                            {cert.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[var(--text-muted)]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
