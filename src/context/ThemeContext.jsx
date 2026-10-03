import { createContext, useState, useEffect, useContext, useCallback } from "react";

const ThemeContext = createContext();

const STORAGE_KEYS = {
    VIEW_MODE: "ks_portfolio_view_mode",
    THEME: "ks_portfolio_theme",
};

const getStoredPreference = (key, fallback) => {
    try {
        if (typeof window !== "undefined" && window.localStorage) {
            const item = window.localStorage.getItem(key);
            if (item !== null) return item;
        }
    } catch {
        // Storage access restricted (e.g. private mode or sandboxed iframe)
    }
    return fallback;
};

const setStoredPreference = (key, value) => {
    try {
        if (typeof window !== "undefined" && window.localStorage) {
            window.localStorage.setItem(key, value);
        }
    } catch {
        // Storage access restricted
    }
};

export function ThemeProvider({ children }) {
    const [viewMode, setViewModeState] = useState(() =>
        getStoredPreference(STORAGE_KEYS.VIEW_MODE, "terminal"),
    );

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const stored = getStoredPreference(STORAGE_KEYS.THEME, "dark");
        return stored === "dark";
    });

    const setViewMode = useCallback((mode) => {
        setViewModeState(mode);
        setStoredPreference(STORAGE_KEYS.VIEW_MODE, mode);
    }, []);

    const toggleViewMode = useCallback(() => {
        setViewModeState((prev) => {
            const next = prev === "terminal" ? "standard" : "terminal";
            setStoredPreference(STORAGE_KEYS.VIEW_MODE, next);
            return next;
        });
    }, []);

    const toggleTheme = useCallback(() => {
        setIsDarkMode((prev) => {
            const next = !prev;
            setStoredPreference(STORAGE_KEYS.THEME, next ? "dark" : "light");
            return next;
        });
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider
            value={{
                viewMode,
                setViewMode,
                toggleViewMode,
                isDarkMode,
                setIsDarkMode,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
    return useContext(ThemeContext);
}
