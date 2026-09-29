import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Panel, Group, Separator } from "react-resizable-panels";
import Pane from "../ui/Pane";
import { useTheme } from "../../context/ThemeContext";
import { terminalContent } from "../../data/terminalData";
import DetailsPane from "./DetailsPane";
import PowerSequence from "./PowerSequence";

export default function TerminalLayout() {
    const { toggleViewMode } = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);
    const [systemStatus, setSystemStatus] = useState("booting");
    const [previewContent, setPreviewContent] = useState(
        "Use Arrow Keys or Click commands to navigate. Press Enter to run.",
    );
    const previewPanelRef = useRef(null);
    const navItems = useMemo(() => terminalContent, []);

    const executeCommand = useCallback((index) => {
        const selectedItem = navItems[index];
        setActiveIndex(index);
        if (selectedItem.action === "toggle_theme_execute") {
            toggleViewMode();
        } else if (selectedItem.action === "poweroff_app_execute") {
            setSystemStatus("shutting_down");
        } else {
            setPreviewContent(selectedItem.output);
            if (selectedItem.id === "contact") {
                setTimeout(() => {
                    const firstLink = document.querySelector(".contact-link");
                    if (firstLink) firstLink.focus();
                }, 50);
            }
        }
    }, [navItems, toggleViewMode]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (systemStatus !== "running") return;

            // Allow normal tab navigation
            if (e.key === "Tab") {
                const firstLink = document.querySelector(".contact-link");
                if (
                    firstLink &&
                    !document.activeElement.classList.contains("contact-link")
                ) {
                    e.preventDefault();
                    firstLink.focus();
                    return;
                }
            }

            // Prevent scroll on arrows when navigating terminal
            if (["ArrowUp", "ArrowDown"].includes(e.key)) {
                e.preventDefault();
            }

            let newIndex = activeIndex;
            if (e.key === "ArrowDown" || e.key === "j") {
                newIndex =
                    activeIndex < navItems.length - 1
                        ? activeIndex + 1
                        : activeIndex;
            } else if (e.key === "ArrowUp" || e.key === "k") {
                newIndex = activeIndex > 0 ? activeIndex - 1 : activeIndex;
            }

            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
                const highlightedItem = navItems[newIndex];
                const executableRegex = /_execute$/;
                if (executableRegex.test(highlightedItem.action)) {
                    setPreviewContent(
                        `>> Executable Script Detected <<\n\nPress [ENTER] to execute this script.\n\n${highlightedItem.output}`,
                    );
                } else {
                    setPreviewContent(highlightedItem.output);
                }
            }

            if (e.key === "ArrowRight" || e.key === "Enter") {
                executeCommand(activeIndex);
            } else if (e.key === "ArrowLeft" || e.key === "Escape") {
                setPreviewContent(
                    "Use Arrow Keys or Click commands to navigate. Press Enter to select.",
                );
                if (previewPanelRef.current) previewPanelRef.current.resize(50);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeIndex, navItems, executeCommand, systemStatus]);

    if (systemStatus !== "running") {
        return (
            <div className="w-full max-w-[1600px] mx-auto h-[calc(100vh-16px)] lg:h-[calc(100vh-32px)] border-2 border-terminal-c shadow-[0_0_15px_rgba(48,159,207,0.2)]">
                <PowerSequence
                    systemStatus={systemStatus}
                    setSystemStatus={setSystemStatus}
                />
            </div>
        );
    }

    return (
        <div className="w-full max-w-[1600px] mx-auto h-[calc(100vh-16px)] lg:h-[calc(100vh-32px)]">
            <div className="h-full">
                <Group orientation="horizontal" style={{ height: "100%" }}>
                    <Panel defaultSize={25} minSize={20}>
                        <Pane title="controller">
                            <div className="mb-6 p-3.5 border-2 border-dashed border-terminal-c bg-terminal-c/10 text-terminal-c leading-relaxed">
                                <div className="text-[clamp(14px,1.4vw,18px)] font-bold mb-1 flex items-center gap-1.5">
                                    <span className="text-yellow-400">⚡</span>
                                    <span>TERMINAL OS: DUAL INPUT</span>
                                </div>
                                <div className="text-[clamp(12px,1.1vw,15px)] opacity-90">
                                    NAVIGATE: [↑] [↓] OR MOUSE CLICK
                                    <br />
                                    EXECUTE: [ENTER] OR DOUBLE CLICK
                                </div>
                            </div>

                            <nav
                                aria-label="Terminal commands"
                                className="space-y-2 font-mono text-[clamp(15px,1.4vw,20px)]"
                            >
                                {navItems.map((item, index) => {
                                    const isActive = index === activeIndex;
                                    return (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => executeCommand(index)}
                                            onMouseEnter={() => {
                                                setActiveIndex(index);
                                                if (item.action && /_execute$/.test(item.action)) {
                                                    setPreviewContent(
                                                        `>> Executable Script Detected <<\n\nClick or press [ENTER] to execute.\n\n${item.output}`,
                                                    );
                                                } else {
                                                    setPreviewContent(item.output);
                                                }
                                            }}
                                            aria-label={`Execute ${item.label}`}
                                            className={`w-full text-left px-3 py-1.5 rounded transition-all cursor-pointer flex items-center gap-1 outline-none ${
                                                isActive
                                                    ? "bg-terminal-c text-black font-bold shadow-[0_0_10px_rgba(48,159,207,0.5)]"
                                                    : "text-white hover:text-terminal-c hover:bg-terminal-c/15"
                                            }`}
                                        >
                                            <span className="font-bold">{isActive ? "> " : "  "}</span>
                                            <span>{item.label}</span>
                                        </button>
                                    );
                                })}
                            </nav>
                        </Pane>
                    </Panel>

                    <Separator
                        className="w-2 flex items-center justify-center transition-colors duration-200 bg-transparent hover:bg-terminal-c/50 cursor-col-resize"
                    >
                        <div className="w-0.5 h-4 bg-terminal-c/30" />
                    </Separator>

                    <Panel ref={previewPanelRef} defaultSize={50} minSize={20}>
                        <Pane title="Content">
                            <div className="text-[clamp(15px,1.3vw,19px)] leading-relaxed opacity-90 whitespace-pre-wrap p-2 h-full overflow-y-auto">
                                {previewContent}
                            </div>
                        </Pane>
                    </Panel>

                    <Separator className="w-2 flex items-center justify-center transition-colors duration-200 bg-transparent hover:bg-terminal-c/50 cursor-col-resize">
                        <div className="w-0.5 h-4 bg-terminal-c/30" />
                    </Separator>

                    <Panel defaultSize={25} minSize={15}>
                        <div style={{ height: "100%" }}>
                            <Group
                                orientation="vertical"
                                style={{ height: "100%" }}
                            >
                                <Panel defaultSize={60} minSize={20}>
                                    <Pane title="Details">
                                        <DetailsPane />
                                    </Pane>
                                </Panel>
                                <Separator className="h-2 flex items-center justify-center transition-colors duration-200 bg-transparent hover:bg-terminal-c/50 cursor-row-resize">
                                    <div className="h-0.5 w-4 bg-terminal-c/30" />
                                </Separator>
                                <Panel defaultSize={40} minSize={20}>
                                    <Pane title="Core Competencies">
                                        <div className="text-[clamp(12px,1.1vw,16px)] space-y-2.5 p-2 font-mono">
                                            <div>
                                                <div className="flex justify-between mb-0.5 text-xs text-terminal-c">
                                                    <span>Python & ML</span>
                                                    <span>Advanced</span>
                                                </div>
                                                <div className="w-full bg-gray-900 border border-gray-800 h-1.5 rounded-full overflow-hidden">
                                                    <div className="bg-terminal-c h-full w-[95%]"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between mb-0.5 text-xs text-terminal-c">
                                                    <span>SQL & PostgreSQL</span>
                                                    <span>Proficient</span>
                                                </div>
                                                <div className="w-full bg-gray-900 border border-gray-800 h-1.5 rounded-full overflow-hidden">
                                                    <div className="bg-terminal-c h-full w-[90%]"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between mb-0.5 text-xs text-terminal-c">
                                                    <span>Full Stack (React/Django)</span>
                                                    <span>Proficient</span>
                                                </div>
                                                <div className="w-full bg-gray-900 border border-gray-800 h-1.5 rounded-full overflow-hidden">
                                                    <div className="bg-terminal-c h-full w-[85%]"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between mb-0.5 text-xs text-terminal-c">
                                                    <span>Linux & DevOps</span>
                                                    <span>Proficient</span>
                                                </div>
                                                <div className="w-full bg-gray-900 border border-gray-800 h-1.5 rounded-full overflow-hidden">
                                                    <div className="bg-terminal-c h-full w-[85%]"></div>
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
        </div>
    );
}