import { ThemeProvider, useTheme } from "./context/ThemeContext";
import TerminalLayout from "./components/terminal/TerminalLayout";

const MainScreen = () => {
    const { viewMode, toggleViewMode } = useTheme();

    const themeClasses =
        viewMode === "terminal"
            ? "bg-[#050505] text-terminal-green font-mono cursor-none"
            : "bg-gray-100 text-gray-900 font-sans";

    const buttonClasses =
        viewMode === "terminal"
            ? "border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black cursor-pointer"
            : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer";

    return (
        <div
            className={`min-h-screen p-4 lg:p-8 flex flex-col transition-colors duration-500 ${themeClasses}`}
        >
            <div className="flex justify-between items-center mb-8 w-full max-w-[1600px] mx-auto">
                <span className="text-sm font-bold opacity-50">
                    KUSHAL_OS v1.0
                </span>

                <button
                    onClick={toggleViewMode}
                    className={`border px-4 py-1 text-sm font-bold transition-colors ${buttonClasses}`}
                >
                    {viewMode === "terminal"
                        ? "[ Switch to Standard UI ]"
                        : "[ Switch to Terminal UI ]"}
                </button>
            </div>

            {viewMode === "terminal" ? (
                <TerminalLayout />
            ) : (
                <div className="w-full max-w-7xl mx-auto border-2 border-gray-300 border-dashed p-12 text-center h-[80vh] flex items-center justify-center">
                    <h2 className="text-2xl text-gray-400">Standard View</h2>
                </div>
            )}
        </div>
    );
};

export default function App() {
    return (
        <ThemeProvider>
            <MainScreen />
        </ThemeProvider>
    );
}
