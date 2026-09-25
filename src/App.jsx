import { useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import TerminalLayout from "./components/terminal/TerminalLayout";
import StandardLayout from "./components/standard/StandardLayout";
import ErrorBoundary from "./components/common/ErrorBoundary";

const MainScreen = () => {
    const { viewMode, setViewMode } = useTheme();

    useEffect(() => {
        const checkScreenSize = () => {
            if (typeof window !== "undefined" && window.innerWidth < 768) {
                if (viewMode !== "standard") {
                    setViewMode("standard");
                }
            }
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, [viewMode, setViewMode]);

    const themeClasses =
        viewMode === "terminal"
            ? "bg-[#050505] text-terminal-c font-mono p-2 lg:p-4 select-none"
            : "bg-[var(--bg-color)] text-[var(--text-main)] font-sans cursor-auto";

    return (
        <div
            className={`min-h-screen flex flex-col transition-colors duration-500 ${themeClasses}`}
        >
            {viewMode === "terminal" ? <TerminalLayout /> : <StandardLayout />}
        </div>
    );
};

export default function App() {
    return (
        <ErrorBoundary>
            <ThemeProvider>
                <MainScreen />
            </ThemeProvider>
        </ErrorBoundary>
    );
}