import { createContext, useState, useContext } from "react";
const ThemeContext = createContext();
export function ThemeProvider({ children }) {
    const [viewMode, setViewMode] = useState("terminal");
    const toggleViewMode = () => {
        setViewMode((prevMode) =>
            prevMode === "terminal" ? "standard" : "terminal",
        );
    };
    return (
        <ThemeContext.Provider
            value={{ viewMode, toggleViewMode, setViewMode }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
    return useContext(ThemeContext);
}
