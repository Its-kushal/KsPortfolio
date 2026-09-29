import { projectsData } from "../../data/portfolioData";
import { ExternalLink, CheckCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function ProjectsSection() {
    return (
        <div className="space-y-6">
            <div className="hidden md:block">
                <h3 className="text-3xl font-extrabold text-[var(--text-main)] mb-2">
                    Featured Software Projects
                </h3>
                <p className="text-[var(--text-muted)] text-base max-w-2xl">
                    Engineered systems spanning algorithmic trading, enterprise ERP suites, and systems programming.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {projectsData.map((project) => (
                    <article
                        key={project.id}
                        className="flex flex-col justify-between p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-[var(--surface-color)] shadow-md hover:shadow-xl hover:border-[var(--primary-color)] transition-all duration-300 group"
                    >
                        <div>
                            <div className="flex items-center justify-between gap-2 mb-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary-color)] px-2.5 py-0.5 rounded-full bg-[var(--primary-color)]/10">
                                    {project.category}
                                </span>
                                <span className="text-xs text-[var(--text-muted)] border border-gray-300 dark:border-gray-700 px-2 py-0.5 rounded-md">
                                    {project.status}
                                </span>
                            </div>

                            <h4 className="text-xl font-bold text-[var(--text-main)] mb-3 group-hover:text-[var(--primary-color)] transition-colors">
                                {project.title}
                            </h4>

                            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                                {project.description}
                            </p>

                            {project.highlights && project.highlights.length > 0 && (
                                <ul className="space-y-1.5 mb-4 text-xs text-[var(--text-muted)]">
                                    {project.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start gap-1.5">
                                            <CheckCircle size={14} className="text-[var(--primary-color)] shrink-0 mt-0.5" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div>
                            <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[var(--text-main)] font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-3">
                                {project.repositoryUrl && (
                                    <a
                                        href={project.repositoryUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white dark:hover:text-black transition-colors"
                                    >
                                        <SiGithub size={14} /> View Code
                                    </a>
                                )}
                                {project.demoUrl ? (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-[var(--primary-color)] text-white dark:text-black hover:opacity-90 transition-opacity"
                                    >
                                        <ExternalLink size={14} /> Live Demo
                                    </a>
                                ) : (
                                    <span className="text-xs text-[var(--text-muted)] italic">
                                        Demo on request
                                    </span>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
