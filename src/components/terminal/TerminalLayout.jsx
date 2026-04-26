import { useState, useEffect, useRef, useMemo } from "react";
import { Panel, Group, Separator } from "react-resizable-panels";
import Pane from "../ui/Pane";
import { useTheme } from "../../context/ThemeContext";
import { terminalContent } from "../../data/terminalData";
export default function TerminalLayout() {
    const { toggleViewMode } = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);
    // const [isContentFocused, setIsContentFocused] = useState(false);
    const [previewContent, setPreviewContent] = useState(
        "Use Arrow Keys to navigate. Press Enter/Right arrow to select.",
    );
    const previewPanelRef = useRef(null);
    const navItems = useMemo(() => terminalContent, []);
    const executeCommand = (index) => {
        const selectedItem = navItems[index];
        if (selectedItem.action === "toggle_theme") {
            toggleViewMode();
        } else {
            setPreviewContent(selectedItem.output);
            if (selectedItem.id === "contact") {
                // setIsContentFocused(true);
                setTimeout(() => {
                    const firstLink = document.querySelector(".contact-link");
                    if (firstLink) firstLink.focus();
                }, 50);
            }
        }
    };
    useEffect(() => {
        const handleKeyDown = (e) => {
            // if (isContentFocused) {
            //     // If they press Escape or Left, exit focus mode and go back to terminal
            //     if (e.key === "Escape" || e.key === "ArrowLeft") {
            //         e.preventDefault();
            //         setIsContentFocused(false);
            //         document.activeElement.blur(); // Remove highlight from links
            //     }
            //     // DANGER/IMPORTANT: We MUST return early here!
            //     // This stops the rest of the terminal logic from running.
            //     // It allows the browser's native 'Tab' and 'Enter' keys to work on the links.
            //     return;
            // }
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
            }
            if (e.key === "ArrowRight" || e.key === "Enter") {
                executeCommand(activeIndex);
            } else if (e.key === "ArrowLeft" || e.key === "Escape") {
                setPreviewContent("Use Arrow Keys to navigate. Press Enter/Right to select.");
                // setIsContentFocused(false);
                if (previewPanelRef.current) previewPanelRef.current.resize(50);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex, navItems, toggleViewMode]);
    return (
        <div className="w-full max-w-[1600px] mx-auto h-[calc(100vh-16px)] lg:h-[calc(100vh-32px)]">
            <div className="h-full">
                <Group orientation="horizontal" style={{ height: "100%" }}>
                    <Panel defaultSize={25} minSize={20}>
                        <Pane title="controller">
                            <div className="mb-8 p-4 border-2 border-dashed border-terminal-c bg-terminal-c/10 text-terminal-c leading-relaxed">
                                <div className="text-[clamp(18px,1.8vw,24px)] font-bold mb-1">
                                    <span className="animate-pulse mr-2">⚠</span> 
                                    WARNING: MOUSE RESTRICTED
                                </div>
                                <div className="text-[clamp(14px,1.2vw,18px)] opacity-90">
                                    USE [↑] [↓] ARROWS TO NAVIGATE.<br/>
                                    USE [TAB] TO JUMP PANES.
                                </div>
                            </div>
                            <div className="space-y-2 font-mono text-[clamp(16px,1.5vw,22px)]">
                                {navItems.map((item, index) => {
                                    const isActive = index === activeIndex;
                                    return (
                                        <p
                                            key={item.id}
                                            className={`w-fit px-3 py-1 transition-colors ${
                                                isActive ? "bg-terminal-c text-black font-bold" : "text-white"
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
                    <Separator className="w-2 flex items-center justify-center transition-colors duration-200 bg-transparent hover:bg-terminal-c/50 
                    cursor-col-resize">
                        <div className="w-0.5 h-4 bg-terminal-c/30" />
                    </Separator>
                    <Panel ref={previewPanelRef} defaultSize={50} minSize={20}>
                        <Pane title="Content">
                            <div className="text-[clamp(16px,1.5vw,22px)] leading-relaxed opacity-80 whitespace-pre-wrap p-2 h-full">
                                {previewContent}
                            </div>
                        </Pane>
                    </Panel>
                    <Separator className="w-2 flex items-center justify-center transition-colors duration-200 bg-transparent hover:bg-terminal-c/50 cursor-col-resize">
                        <div className="w-0.5 h-4 bg-terminal-c/30" />
                    </Separator>
                    <Panel defaultSize={25} minSize={10}>
                        <div style={{ height: "100%" }}>
                            <Group orientation="vertical" style={{ height: "100%" }}>
                                <Panel defaultSize={50} minSize={20}>
                                    <Pane title="Details">
                                        <div className="text-[clamp(14px,1.2vw,18px)] space-y-1 p-2">
                                            <p><span className="text-white font-bold">OS:</span> Arch Linux</p>
                                            <p><span className="text-white font-bold">Host:</span> Kushal-Portfolio</p>
                                        </div>
                                    </Pane>
                                </Panel>
                                <Separator className="h-2 flex items-center justify-center transition-colors duration-200 bg-transparent hover:bg-terminal-c/50 cursor-row-resize">
                                    <div className="h-0.5 w-4 bg-terminal-c/30" />
                                </Separator>
                                <Panel defaultSize={50} minSize={20}>
                                    <Pane title="Resources In Hand">
                                        <div className="text-[clamp(14px,1.2vw,18px)] space-y-3 p-2">
                                            <div>
                                                <div className="flex justify-between mb-1"><span>React.js</span><span>10%</span></div>
                                                <div className="w-full bg-gray-800 h-2"><div className="bg-terminal-c h-2 w-[10%]"></div></div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between mb-1"><span>Linux / DevOps</span><span>85%</span></div>
                                                <div className="w-full bg-gray-800 h-2"><div className="bg-terminal-c h-2 w-[85%]"></div></div>
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