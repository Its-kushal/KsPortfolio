import { projectsData } from "../../data/portfolioData";
import { ExternalLink, Folder } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function TerminalProjectsView() {
    return (
        <div className="space-y-6 text-left font-mono">
            <div className="text-terminal-c text-xs sm:text-sm border-b border-terminal-c/30 pb-2">
                <span className="text-white font-bold">$ ls -la projects/</span>
                <span className="text-terminal-c/70 ml-2">
                    (total {projectsData.length} projects)
                </span>
            </div>

            <div className="space-y-6">
                {projectsData.map((project, idx) => (
                    <article
                        key={project.id}
                        className="p-3 border border-terminal-c/30 hover:border-terminal-c bg-terminal-c/5 rounded transition-colors"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                                <Folder size={18} className="text-terminal-c shrink-0" />
                                <h4 className="font-bold text-base sm:text-lg text-white">
                                    {project.title}
                                </h4>
                            </div>
                            <span className="text-xs px-2 py-0.5 border border-terminal-c text-terminal-c rounded">
                                {project.category}
                            </span>
                        </div>

                        <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                            {project.summary}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-2 py-0.5 bg-black/60 border border-gray-700 text-gray-300 rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 text-xs pt-2 border-t border-gray-800">
                            {project.repositoryUrl && (
                                <a
                                    href={project.repositoryUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 text-terminal-c hover:text-white underline focus:outline-none focus:ring-1 focus:ring-terminal-c rounded px-1"
                                >
                                    <SiGithub size={14} /> View Repository
                                </a>
                            )}
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 text-terminal-c hover:text-white underline focus:outline-none focus:ring-1 focus:ring-terminal-c rounded px-1"
                                >
                                    <ExternalLink size={14} /> Live Demo
                                </a>
                            )}
                            <span className="text-gray-500 ml-auto text-[11px] self-center">
                                drwxr-xr-x {idx + 1} kushal
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
