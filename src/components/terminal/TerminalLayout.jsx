import { useState, useEffect } from "react";
import { Panel, Group, Separator } from "react-resizable-panels";
import Pane from "../ui/Pane";
import { useTheme } from "../../context/ThemeContext";

const navItems = [
    {
        id: "about",
        label: "$ cd about_me",
        output: "Loading about_me.txt... \n\nHi, I am Kushal. I build high-performance systems.",
    },
    {
        id: "projects",
        label: "$ ls projects/",
        output: "drwxr-xr-x  Kernel-Smasher\ndrwxr-xr-x  React-Dashboard",
    },
    {
        id: "resume",
        label: "$ cat resume.pdf",
        output: "[ Opening PDF Viewer... ]",
    },
    {
        id: "contact",
        label: "$ ./contact.sh",
        output: "Email: kushal@example.com\nGitHub: github.com/kushal",
    },
    {
        id: "theme",
        label: "$ ./switch_gui.sh",
        action: "toggle_theme",
        output: "Switching to Standard UI...",
    },
];

export default function TerminalLayout() {
    const { toggleViewMode } = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);
    const [previewContent, setPreviewContent] = useState(
        "Use Arrow Keys to navigate. Press Enter/Right to select.",
    );

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
            if (e.key === "ArrowDown") {
                setActiveIndex((prev) =>
                    prev < navItems.length - 1 ? prev + 1 : prev,
                );
            } else if (e.key === "ArrowUp") {
                setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
            } else if (e.key === "ArrowRight" || e.key === "Enter") {
                executeCommand(activeIndex);
            } else if (e.key === "ArrowLeft" || e.key === "Escape") {
                setPreviewContent(
                    "Use Arrow Keys to navigate. Press Enter/Right to select.",
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeIndex, toggleViewMode]);

    return (
        <div className="w-full max-w-[1600px] mx-auto h-[calc(100vh-16px)] lg:h-[calc(100vh-32px)]">
            {/* =========================================
                DESKTOP VIEW (Resizable 3-Column Layout) 
                ========================================= */}
            <div className="hidden md:block h-full">
                <Group orientation="horizontal" style={{ height: "100%" }}>
                    {/* COLUMN 1: NAVIGATION */}
                    <Panel defaultSize={40} minSize={20}>
                        <Pane title="~/navigation">
                            {/* THE EYE-CATCHER FIX: Larger font, thicker border, bg-tint, and font-bold */}
                            <div className="mb-8 p-4 border-2 border-dashed border-terminal-green bg-terminal-green/10 text-terminal-green leading-relaxed">
                                <div className="text-[clamp(18px,1.8vw,24px)] font-bold mb-1">
                                    <span className="animate-pulse mr-2">
                                        ⚠
                                    </span>
                                    WARNING: MOUSE DISABLED
                                </div>
                                <div className="text-[clamp(14px,1.2vw,18px)] opacity-90">
                                    USE [↑] [↓] ARROWS TO NAVIGATE.
                                    <br />
                                    PRESS [ENTER] TO SELECT.
                                </div>
                            </div>

                            <div className="space-y-2 font-mono text-[clamp(16px,1.5vw,22px)] md:pointer-events-none">
                                {navItems.map((item, index) => {
                                    const isActive = index === activeIndex;
                                    return (
                                        <p
                                            key={item.id}
                                            className={`w-fit px-3 py-1 transition-colors ${
                                                isActive
                                                    ? "bg-terminal-green text-black font-bold"
                                                    : "text-white"
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

                    {/* COLUMN 2: PREVIEW */}
                    <Panel defaultSize={35} minSize={20}>
                        <Pane title="preview">
                            <div className="text-[clamp(16px,1.5vw,22px)] leading-relaxed opacity-80 whitespace-pre-wrap p-2">
                                {previewContent}
                            </div>
                        </Pane>
                    </Panel>

                    <Separator className="w-2 flex items-center justify-center transition-colors duration-200 bg-transparent hover:bg-terminal-green/50 cursor-col-resize">
                        <div className="w-0.5 h-4 bg-terminal-green/30" />
                    </Separator>

                    {/* COLUMN 3: NEOFETCH + PROGRESS */}
                    <Panel defaultSize={25} minSize={15}>
                        <div style={{ height: "100%" }}>
                            <Group
                                orientation="vertical"
                                style={{ height: "100%" }}
                            >
                                <Panel defaultSize={50} minSize={20}>
                                    <Pane title="neofetch">
                                        <div className="text-[clamp(14px,1.2vw,18px)] space-y-1 p-2">
                                            <p>
                                                <span className="text-white font-bold">
                                                    OS:
                                                </span>{" "}
                                                Arch Linux
                                            </p>
                                            <p>
                                                <span className="text-white font-bold">
                                                    Host:
                                                </span>{" "}
                                                Kushal-Portfolio
                                            </p>
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
                                                <div className="flex justify-between mb-1">
                                                    <span>React.js</span>
                                                    <span>90%</span>
                                                </div>
                                                <div className="w-full bg-gray-800 h-2">
                                                    <div className="bg-terminal-green h-2 w-[90%]"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between mb-1">
                                                    <span>Linux / DevOps</span>
                                                    <span>85%</span>
                                                </div>
                                                <div className="w-full bg-gray-800 h-2">
                                                    <div className="bg-terminal-green h-2 w-[85%]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Pane>
                                </Panel>
                            </Group>
                        </div>
                    </Panel>
                </Group>
            </div>

            {/* =========================================
                MOBILE VIEW (Stacked + Touch Enabled) 
                ========================================= */}
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
                    <div className="text-base leading-relaxed opacity-80 whitespace-pre-wrap p-2">
                        {previewContent}
                    </div>
                </Pane>

                <Pane title="neofetch" className="h-fit">
                    <div className="text-sm space-y-1 p-2">
                        <p>
                            <span className="text-white font-bold">OS:</span>{" "}
                            Arch Linux (Mobile)
                        </p>
                        <p>
                            <span className="text-white font-bold">Host:</span>{" "}
                            Kushal-Portfolio
                        </p>
                    </div>
                </Pane>

                <Pane title="htop_progress" className="h-fit">
                    <div className="text-sm space-y-3 p-2">
                        <div>
                            <div className="flex justify-between mb-1">
                                <span>React.js</span>
                                <span>90%</span>
                            </div>
                            <div className="w-full bg-gray-800 h-2">
                                <div className="bg-terminal-green h-2 w-[90%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <span>Linux / DevOps</span>
                                <span>85%</span>
                            </div>
                            <div className="w-full bg-gray-800 h-2">
                                <div className="bg-terminal-green h-2 w-[85%]"></div>
                            </div>
                        </div>
                    </div>
                </Pane>
            </div>
        </div>
    );
}
