import { ThemeProvider, useTheme } from "./context/ThemeContext";
import TerminalLayout from "./components/terminal/TerminalLayout";

const MainScreen = () => {
    const { viewMode, toggleViewMode } = useTheme();

    // FACT: We explicitly tell the terminal to hide the cursor (cursor-none)
    // FACT: We explicitly tell the standard view to show the cursor (cursor-auto)
    // FACT: We removed 'cursor-none'. The mouse will now show up everywhere.
    const themeClasses =
        viewMode === "terminal"
            ? "bg-[#050505] text-terminal-green font-mono"
            : "bg-gray-100 text-gray-900 font-sans";

    return (
        <div
            className={`min-h-screen p-2 lg:p-4 flex flex-col transition-colors duration-500 ${themeClasses}`}
        >
            {viewMode === "terminal" ? (
                <TerminalLayout />
            ) : (
                /* THE STANDARD VIEW (The Regular House) */
                <div className="w-full max-w-7xl mx-auto border-2 border-gray-300 border-dashed p-12 text-center h-[80vh] flex flex-col items-center justify-center space-y-6">
                    <h2 className="text-4xl text-gray-800 font-bold">
                        Standard View
                    </h2>
                    <p className="text-gray-500">
                        The mouse cursor is back! You can click things normally
                        here.
                    </p>

                    {/* THE ESCAPE HATCH: Button to go back to Terminal */}
                    <button
                        onClick={toggleViewMode}
                        className="mt-8 px-6 py-3 bg-gray-900 text-white font-bold rounded-lg shadow-lg hover:bg-terminal-green hover:text-black transition-colors cursor-pointer"
                    >
                        Switch Back to Terminal OS
                    </button>
                </div>
            )}
        </div>
    );
};;

export default function App() {
    return (
        <ThemeProvider>
            <MainScreen />
        </ThemeProvider>
    );
}
