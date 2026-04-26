import ResumeView from "../components/terminal/ResumeView";

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
        label: "$ ./contact.sh",
        output: (
            <div className="flex flex-col gap-4 pointer-events-auto mt-2">
                <p>
                    <span className="text-white font-bold"></span>
                    {}
                    <a
                        href="mailto:kushal.khivasara@outlook.com"
                        target="_blank"
                        className="text-terminal-c hover:text-white underline focus:bg-terminal-c focus:text-black focus:font-bold outline-none px-1 contact-link"
                    >
                        kushal.khivasara@outlook.com
                    </a>
                </p>
                <p>
                    <span className="text-white font-bold"></span>
                    {}
                    <a
                        href="https://github.com/Its-kushal"
                        target="_blank"
                        rel="noreferrer"
                        className="text-terminal-c hover:text-white underline focus:bg-terminal-c focus:text-black focus:font-bold outline-none px-1 contact-link"
                    >
                        github.com/Its-kushal
                    </a>
                </p>
                <p>
                    <span className="text-white font-bold"></span>
                    {}
                    <a
                        href="https://linkedin.com/in/kushal-khivasara/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-terminal-c hover:text-white underline focus:bg-terminal-c focus:text-black focus:font-bold outline-none px-1 contact-link"
                    >
                        linkedin.com/in/kushal-khivasara/
                    </a>
                </p>
            </div>
        ),
        //         output: "Email: kushal.khivasara@outlook.com\n\
        // GitHub: github.com/Its-kushal\n\
        // Linkedin: linkedin.com/in/kushal-khivasara/\n\
        // Hugging Face: huggingface.co/ItsKushal\n\
        // Kaggle: kaggle.com/itskushal\n",
    },
    {
        id: "theme",
        label: "$ ./switch_gui.sh",
        action: "toggle_theme",
        output: "Switching to Standard UI...",
    },
];
