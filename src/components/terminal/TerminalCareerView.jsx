import { careerData } from "../../data/portfolioData";
import {
    getSimulatedCommitHash,
    getSimulatedCareerTag,
} from "../../utils/careerGitMetadata";
import { GitCommit } from "lucide-react";

/**
 * Note: Commit hashes and tags are simulated presentation metadata
 * designed to provide an authentic retro Git CLI aesthetic in the terminal.
 * They do not represent real repository commits or Git tags.
 */
export default function TerminalCareerView() {
    return (
        <section
            aria-label="Career Timeline"
            className="space-y-6 text-left font-mono"
        >
            <header className="text-terminal-c text-xs sm:text-sm border-b border-terminal-c/30 pb-2 flex flex-wrap items-center justify-between gap-2">
                <div>
                    <span className="text-white font-bold">
                        $ git log --career
                    </span>
                    <span className="text-terminal-c/70 ml-2">
                        ({careerData.length} commits)
                    </span>
                </div>
                <span
                    className="text-gray-500 text-xs hidden sm:inline"
                    aria-hidden="true"
                >
                    branch: career/main
                </span>
            </header>

            <ol aria-label="Career milestones" className="space-y-6">
                {careerData.map((item, index) => {
                    const isFirst = index === 0;
                    const isLast = index === careerData.length - 1;
                    const hash = getSimulatedCommitHash(item);
                    const tag = getSimulatedCareerTag(item, index);
                    const decoration = isFirst
                        ? `(HEAD -> career/main, tag: ${tag})`
                        : `(tag: ${tag})`;

                    return (
                        <li
                            key={item.id}
                            className="flex items-stretch gap-3 sm:gap-4"
                        >
                            {/* Responsive Graph Rail Column */}
                            <div
                                aria-hidden="true"
                                className="flex flex-col items-center shrink-0 w-5 sm:w-6 select-none font-mono text-terminal-c"
                            >
                                <span className="text-base sm:text-lg font-bold text-terminal-c leading-none">
                                    *
                                </span>
                                <div className="flex-1 w-px bg-terminal-c/30 my-1 relative flex items-center justify-center">
                                    <span className="text-[11px] text-terminal-c/60 select-none">
                                        │
                                    </span>
                                </div>
                                <span className="text-xs sm:text-sm font-bold text-terminal-c leading-none">
                                    {isLast ? "└─" : "├─"}
                                </span>
                            </div>

                            {/* Milestone Content Box */}
                            <article className="flex-1 min-w-0 p-3 sm:p-4 border border-terminal-c/30 hover:border-terminal-c bg-terminal-c/5 rounded transition-colors space-y-3">
                                {/* Commit Header */}
                                <div className="text-xs sm:text-sm border-b border-gray-800 pb-2">
                                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                        <GitCommit
                                            size={14}
                                            aria-hidden="true"
                                            className="text-terminal-c shrink-0 hidden sm:inline"
                                        />
                                        <span className="text-yellow-400 font-bold">
                                            commit {hash}
                                        </span>
                                        <span className="text-terminal-c font-semibold break-all sm:break-normal">
                                            {decoration}
                                        </span>
                                    </div>
                                </div>

                                {/* Role and Org */}
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-white break-words">
                                        <span className="text-terminal-c text-sm mr-1 font-normal">
                                            Role:
                                        </span>
                                        {item.role}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-300 mt-1">
                                        <span>
                                            <span className="text-gray-400">Org: </span>
                                            <strong className="text-white">
                                                {item.organization}
                                            </strong>
                                        </span>
                                        {item.location && (
                                            <span>
                                                <span className="text-gray-400">Location: </span>
                                                <span className="text-gray-300">
                                                    {item.location}
                                                </span>
                                            </span>
                                        )}
                                        <span>
                                            <span className="text-gray-400">Period: </span>
                                            <span className="text-terminal-c font-semibold">
                                                {item.period}
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                {/* Summary */}
                                {item.summary && (
                                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed break-words">
                                        <span className="text-gray-400 mr-1">Summary:</span>
                                        {item.summary}
                                    </p>
                                )}

                                {/* Highlights with diff-style "+ " */}
                                {Array.isArray(item.highlights) &&
                                    item.highlights.length > 0 && (
                                        <div className="pt-2 border-t border-gray-800/80">
                                            <div className="text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-semibold">
                                                Diff Highlights:
                                            </div>
                                            <ul
                                                aria-label="Milestone highlights"
                                                className="space-y-1.5 text-xs sm:text-sm"
                                            >
                                                {item.highlights.map(
                                                    (highlight, hIdx) => (
                                                        <li
                                                            key={`${item.id}-h-${hIdx}`}
                                                            className="flex items-start gap-1.5 leading-snug break-words"
                                                        >
                                                            <span
                                                                aria-hidden="true"
                                                                className="text-green-400 font-bold select-none shrink-0"
                                                            >
                                                                +
                                                            </span>
                                                            <span className="text-green-300/90 font-mono">
                                                                {highlight}
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    )}
                            </article>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}
