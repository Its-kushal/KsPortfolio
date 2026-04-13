import { useState, useEffect, useRef, useMemo } from "react";
import { Panel, Group, Separator } from "react-resizable-panels";
import Pane from "../ui/Pane";
import { useTheme } from "../../context/ThemeContext";

const ResumeView = () => (
    <div className="w-full h-full flex flex-col pointer-events-auto">
        <div className="flex-grow border border-terminal-green/30 bg-gray-900">
            <iframe
                // Option A: Just remove the leading slash to make it relative
                // src="Kushal-Khivasara-resume-v2-light.pdf"
                // Option B (Best Practice): Use the Vite base URL variable
                src={`${import.meta.env.BASE_URL}Kushal-Khivasara-resume-v2-light.pdf`}

                className="w-full h-full"
                title="Kushal Resume"
            />
        </div>
    </div>
);

export default function TerminalLayout() {
    const { toggleViewMode } = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);
    const [previewContent, setPreviewContent] = useState(
        "Use Arrow Keys to navigate. Press Enter/Right to select.",
    );

    const previewPanelRef = useRef(null);
    const navItems = useMemo(() => [
        { id: "about", label: "$ cd about_me", output: "Loading about_me.txt... \n\nHi, I am Kushal. I build high-performance systems." },
        { id: "projects", label: "$ ls projects/", output: "drwxr-xr-x  Kernel-Smasher\ndrwxr-xr-x  React-Dashboard" },
        { id: "resume", label: "$ cat resume.pdf", output: <ResumeView /> },
        { id: "contact", label: "$ ./contact.sh", output: "Email: kushal@example.com\nGitHub: github.com/kushal" },
        { id: "theme", label: "$ ./switch_gui.sh", action: "toggle_theme", output: "Switching to Standard UI..." },
    ], []);

    const executeCommand = (index) => {
        const selectedItem = navItems[index];
        if (selectedItem.action === "toggle_theme") {
            toggleViewMode();
        } else {
            setPreviewContent(selectedItem.output);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (["ArrowUp", "ArrowDown", "Space"].includes(e.code)) {
                e.preventDefault();
            }

            let newIndex = activeIndex;

            if (e.key === "ArrowDown") {
                newIndex = activeIndex < navItems.length - 1 ? activeIndex + 1 : activeIndex;
            } else if (e.key === "ArrowUp") {
                newIndex = activeIndex > 0 ? activeIndex - 1 : activeIndex;
            }

            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
                const highlightedItem = navItems[newIndex];
                
                if (highlightedItem.action === "toggle_theme") {
                    setPreviewContent(">> Executable Script Detected <<\n\nPress [ENTER] or [RIGHT ARROW] to execute this script and switch to the Standard UI.");
                } else {
                    setPreviewContent(highlightedItem.output);
                }

                if (previewPanelRef.current) {
                    if (highlightedItem.id === "resume") {
                        previewPanelRef.current.resize(55);
                    } else {
                        previewPanelRef.current.resize(35);
                    }
                }
            }

            if (e.key === "ArrowRight" || e.key === "Enter") {
                executeCommand(activeIndex);
            } else if (e.key === "ArrowLeft" || e.key === "Escape") {
                setPreviewContent("Use Arrow Keys to navigate. Press Enter/Right to select.");
                if (previewPanelRef.current) previewPanelRef.current.resize(35);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex, navItems, toggleViewMode]);

    return (
        <div className="w-full max-w-[1600px] mx-auto h-[calc(100vh-16px)] lg:h-[calc(100vh-32px)]">
            <div className="hidden md:block h-full">
                <Group orientation="horizontal" style={{ height: "100%" }}>
                    
                    <Panel defaultSize={40} minSize={20}>
                        <Pane title="~/navigation">
                            <div className="mb-8 p-4 border-2 border-dashed border-terminal-green bg-terminal-green/10 text-terminal-green leading-relaxed">
                                <div className="text-[clamp(18px,1.8vw,24px)] font-bold mb-1">
                                    <span className="animate-pulse mr-2">⚠</span> 
                                    WARNING: MOUSE RESTRICTED
                                </div>
                                <div className="text-[clamp(14px,1.2vw,18px)] opacity-90">
                                    USE [↑] [↓] ARROWS TO NAVIGATE.<br/>
                                    USE [TAB] TO JUMP PANES.
                                </div>
                            </div>

                            <div className="space-y-2 font-mono text-[clamp(16px,1.5vw,22px)] md:pointer-events-none">
                                {navItems.map((item, index) => {
                                    const isActive = index === activeIndex;
                                    return (
                                        <p
                                            key={item.id}
                                            className={`w-fit px-3 py-1 transition-colors ${
                                                isActive ? "bg-terminal-green text-black font-bold" : "text-white"
                                            }`}
                                        >
                                            {isActive ? "> " : "  "}
                                            {item.label}
                                        </p>
                                    );
                                })}
                            </div>
                        </Pane>
                    </Panel>

                    <Separator className="w-2 flex items-center justify-center transition-colors duration-200 bg-transparent hover:bg-terminal-green/50 cursor-col-resize">
                        <div className="w-0.5 h-4 bg-terminal-green/30" />
                    </Separator>

                    <Panel ref={previewPanelRef} defaultSize={35} minSize={20}>
                        <Pane title="preview">
                            <div className="text-[clamp(16px,1.5vw,22px)] leading-relaxed opacity-80 whitespace-pre-wrap p-2 h-full">
                                {previewContent}
                            </div>
                        </Pane>
                    </Panel>

                    <Separator className="w-2 flex items-center justify-center transition-colors duration-200 bg-transparent hover:bg-terminal-green/50 cursor-col-resize">
                        <div className="w-0.5 h-4 bg-terminal-green/30" />
                    </Separator>

                    <Panel defaultSize={25} minSize={10}>
                        <div style={{ height: "100%" }}>
                            <Group orientation="vertical" style={{ height: "100%" }}>
                                <Panel defaultSize={50} minSize={20}>
                                    <Pane title="neofetch">
                                        <div className="text-[clamp(14px,1.2vw,18px)] space-y-1 p-2">
                                            <p><span className="text-white font-bold">OS:</span> Arch Linux</p>
                                            <p><span className="text-white font-bold">Host:</span> Kushal-Portfolio</p>
                                        </div>
                                    </Pane>
                                </Panel>

                                <Separator className="h-2 flex items-center justify-center transition-colors duration-200 bg-transparent hover:bg-terminal-green/50 cursor-row-resize">
                                    <div className="h-0.5 w-4 bg-terminal-green/30" />
                                </Separator>

                                <Panel defaultSize={50} minSize={20}>
                                    <Pane title="htop_progress">
                                        <div className="text-[clamp(14px,1.2vw,18px)] space-y-3 p-2">
                                            <div>
                                                <div className="flex justify-between mb-1"><span>React.js</span><span>90%</span></div>
                                                <div className="w-full bg-gray-800 h-2"><div className="bg-terminal-green h-2 w-[90%]"></div></div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between mb-1"><span>Linux / DevOps</span><span>85%</span></div>
                                                <div className="w-full bg-gray-800 h-2"><div className="bg-terminal-green h-2 w-[85%]"></div></div>
                                            </div>
                                        </div>
                                    </Pane>
                                </Panel>
                            </Group>
                        </div>
                    </Panel>

                </Group>
            </div>
            <div className="block md:hidden flex flex-col gap-4 h-full overflow-y-auto pb-12">
                
                <Pane title="~/navigation" className="h-fit">
                    <div className="space-y-2 font-mono text-base">
                        <div className="mb-2 text-sm text-gray-500 opacity-80">
                            // Tap commands below to execute
                        </div>
                        {navItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveIndex(index);
                                    executeCommand(index);
                                }}
                                className="block w-full text-left px-3 py-3 border border-terminal-green/20 hover:bg-terminal-green hover:text-black transition-colors cursor-pointer"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </Pane>

                <Pane title="preview" className="min-h-[250px]">
                    <div className="text-base leading-relaxed opacity-80 whitespace-pre-wrap p-2 h-full">
                        {previewContent}
                    </div>
                </Pane>

                <Pane title="neofetch" className="h-fit">
                    <div className="text-sm space-y-1 p-2">
                        <p><span className="text-white font-bold">OS:</span> Arch Linux (Mobile)</p>
                        <p><span className="text-white font-bold">Host:</span> Kushal-Portfolio</p>
                    </div>
                </Pane>

                <Pane title="htop_progress" className="h-fit">
                    <div className="text-sm space-y-3 p-2">
                        <div>
                            <div className="flex justify-between mb-1"><span>React.js</span><span>90%</span></div>
                            <div className="w-full bg-gray-800 h-2"><div className="bg-terminal-green h-2 w-[90%]"></div></div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1"><span>Linux / DevOps</span><span>85%</span></div>
                            <div className="w-full bg-gray-800 h-2"><div className="bg-terminal-green h-2 w-[85%]"></div></div>
                        </div>
                    </div>
                </Pane>

            </div>

        </div>
    );
}