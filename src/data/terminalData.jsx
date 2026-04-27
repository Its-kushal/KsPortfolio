import ResumeView from "../components/terminal/ResumeView";
import { Mail } from "lucide-react";
import { SiGithub, SiHuggingface, SiKaggle } from "react-icons/si";
import LinkedinIcon from "../components/ui/LinkedinIcon";

const handleCopyLink = (e, textToCopy) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c") {
        e.preventDefault();

        navigator.clipboard
            .writeText(textToCopy)
            .then(() =>
                console.log(
                    "Successfully copied to invisible pocket: ",
                    textToCopy,
                ),
            )
            .catch((err) => console.error("Failed to copy!", err));
    }
};

export const terminalContent = [
    {
        id: "about",
        label: "$ cat about_me",
        output: "I am a Software Developer who turns complex data and business requirements \
into scalable, production-ready systems. With deep expertise in Python, SQL, and \
Machine Learning, I build everything from algorithmic trading engines processing \
high-volume financial data to cutting-edge LLM and RAG architectures. Whether I \
am architecting a custom ERP or deploying production-grade ML models, my goal is \
to design robust, high-performance solutions that solve real-world problems and \
drive measurable results.",
    },
    {
        id: "projects",
        label: "$ ls projects/",
        output: "drwxr-xr-x  Kernel-Smasher\ndrwxr-xr-x  React-Dashboard",
    },
    {
        id: "resume",
        label: "$ cat resume.pdf",
        output: <ResumeView />,
    },
    {
        id: "contact",
        label: "$ ./contact",
        output: (
            <div>
                <div className="mb-8 p-4 border-2 border-dashed border-terminal-c bg-terminal-c/10 text-terminal-c leading-relaxed">
                    <div className="text-[clamp(14px,1.2vw,18px)] opacity-90">
                        USE [TAB] TO CYCLE THROUGH LINKS.
                        <br />
                        YOU CAN USE [Ctrl + C] TO COPY THE LINK WHEN HIGHLIGHTED
                    </div>
                </div>
                <div className="flex flex-col gap-4 pointer-events-auto mt-2">
                    <p>
                        <a
                            href="mailto:kushal.khivasara@outlook.com"
                            target="_blank"
                            className="text-terminal-c hover:text-white underline focus:bg-terminal-c focus:text-black focus:font-bold outline-none px-2 py-1 contact-link flex items-center gap-2 w-fit rounded"
                            onKeyDown={(e) =>
                                handleCopyLink(
                                    e,
                                    "kushal.khivasara@outlook.com",
                                )
                            }
                        >
                            <Mail size={18} />kushal.khivasara@outlook.com
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://github.com/Its-kushal"
                            target="_blank"
                            rel="noreferrer"
                            className="text-terminal-c hover:text-white underline focus:bg-terminal-c focus:text-black focus:font-bold outline-none px-2 py-1 contact-link flex items-center gap-2 w-fit rounded"
                            onKeyDown={(e) =>
                                handleCopyLink(
                                    e,
                                    "https://github.com/Its-kushal",
                                )
                            }
                        >
                            <SiGithub size={18} />github.com/Its-kushal
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://linkedin.com/in/kushal-khivasara/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-terminal-c hover:text-white underline focus:bg-terminal-c focus:text-black focus:font-bold outline-none px-2 py-1 contact-link flex items-center gap-2 w-fit rounded"
                            onKeyDown={(e) =>
                                handleCopyLink(
                                    e,
                                    "https://linkedin.com/in/kushal-khivasara/",
                                )
                            }
                        >
                            <LinkedinIcon size={18}/>linkedin.com/in/kushal-khivasara/
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://huggingface.co/ItsKushal/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-terminal-c hover:text-white underline focus:bg-terminal-c focus:text-black focus:font-bold outline-none px-2 py-1 contact-link flex items-center gap-2 w-fit rounded"
                            onKeyDown={(e) =>
                                handleCopyLink(
                                    e,
                                    "https://huggingface.co/ItsKushal/",
                                )
                            }
                        >
                            <SiHuggingface size={18} />huggingface.co/ItsKushal
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://kaggle.com/itskushal/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-terminal-c hover:text-white underline focus:bg-terminal-c focus:text-black focus:font-bold outline-none px-2 py-1 contact-link flex items-center gap-2 w-fit rounded"
                            onKeyDown={(e) =>
                                handleCopyLink(
                                    e,
                                    "https://kaggle.com/itskushal/",
                                )
                            }
                        >
                            <SiKaggle size={18} />kaggle.com/itskushal
                        </a>
                    </p>
                </div>
            </div>
        ),
    },
    {
        id: "theme",
        label: "$ ./switch_gui.sh",
        action: "toggle_theme",
        output: "Switching to Standard UI...",
    },
];
