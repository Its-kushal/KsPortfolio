import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { SiGithub, SiHuggingface, SiKaggle } from "react-icons/si";
import LinkedinIcon from "../ui/LinkedinIcon";
import { personalInfo } from "../../data/portfolioData";

export default function TerminalContactView() {
    const [copiedItem, setCopiedItem] = useState(null);

    const handleCopy = (text, name) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setCopiedItem(name);
                setTimeout(() => setCopiedItem(null), 2500);
            })
            .catch((err) => console.error("Clipboard copy error:", err));
    };

    const handleKeyDown = (e, text, name) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c") {
            e.preventDefault();
            handleCopy(text, name);
        }
    };

    const getIcon = (name) => {
        switch (name) {
            case "Email":
                return <Mail size={18} />;
            case "GitHub":
                return <SiGithub size={18} />;
            case "LinkedIn":
                return <LinkedinIcon size={18} />;
            case "HuggingFace":
                return <SiHuggingface size={18} />;
            case "Kaggle":
                return <SiKaggle size={18} />;
            default:
                return <Mail size={18} />;
        }
    };

    return (
        <div className="space-y-6 text-left font-mono">
            <div className="p-4 border-2 border-dashed border-terminal-c bg-terminal-c/10 text-terminal-c leading-relaxed">
                <div className="text-[clamp(14px,1.2vw,18px)] opacity-90">
                    USE [TAB] TO CYCLE THROUGH LINKS.
                    <br />
                    USE [Ctrl + C] OR CLICK THE COPY ICON TO COPY THE ADDRESS.
                </div>
                {copiedItem && (
                    <div className="mt-2 text-white bg-terminal-c/40 px-2 py-1 inline-flex items-center gap-1.5 text-xs font-bold rounded">
                        <Check size={14} className="text-white" />
                        Copied {copiedItem} to clipboard!
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-3 pointer-events-auto">
                {personalInfo.socialLinks.map((item) => {
                    const isCopied = copiedItem === item.name;
                    return (
                        <div
                            key={item.name}
                            className="flex items-center justify-between gap-3 p-2 rounded hover:bg-terminal-c/10 border border-transparent hover:border-terminal-c/30 transition-colors"
                        >
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${item.name}: ${item.display || item.url}`}
                                className="text-terminal-c hover:text-white underline focus:bg-terminal-c focus:text-black focus:font-bold outline-none px-2 py-1 contact-link flex items-center gap-2 w-fit rounded transition-colors text-sm sm:text-base"
                                onKeyDown={(e) =>
                                    handleKeyDown(e, item.display || item.url, item.name)
                                }
                            >
                                {getIcon(item.name)}
                                <span>{item.display || item.name}</span>
                            </a>

                            <button
                                type="button"
                                onClick={() => handleCopy(item.display || item.url, item.name)}
                                aria-label={`Copy ${item.name} to clipboard`}
                                title={`Copy ${item.name}`}
                                className="p-1.5 text-terminal-c/70 hover:text-white hover:bg-terminal-c/20 rounded transition-colors cursor-pointer"
                            >
                                {isCopied ? (
                                    <Check size={16} className="text-green-400" />
                                ) : (
                                    <Copy size={16} />
                                )}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
