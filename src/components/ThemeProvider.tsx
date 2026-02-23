"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Theme = "dark" | "light" | "system";
type ResolvedTheme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const THEME_STORAGE_KEY = "theme";
const THEME_MEDIA_QUERY = "(prefers-color-scheme: dark)";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function isTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light" || value === "system";
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "system";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isTheme(storedTheme) ? storedTheme : "system";
}

function getSystemPrefersDark(): boolean {
  if (typeof window === "undefined") {
    return true;
  }

  return window.matchMedia(THEME_MEDIA_QUERY).matches;
}

function resolveTheme(theme: Theme, prefersDark: boolean): ResolvedTheme {
  if (theme === "system") {
    return prefersDark ? "dark" : "light";
  }

  return theme;
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());
  const [systemPrefersDark, setSystemPrefersDark] = useState<boolean>(() =>
    getSystemPrefersDark(),
  );

  const resolvedTheme = resolveTheme(theme, systemPrefersDark);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(THEME_MEDIA_QUERY);

    const handleChange = (event: MediaQueryListEvent) => {
      setSystemPrefersDark(event.matches);
    };

    mediaQueryList.addEventListener("change", handleChange);
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", resolvedTheme === "dark");
    root.style.colorScheme = resolvedTheme;

    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [resolvedTheme, theme]);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const currentResolvedTheme = resolveTheme(currentTheme, getSystemPrefersDark());
      return currentResolvedTheme === "dark" ? "light" : "dark";
    });
  }, []);

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme, toggleTheme }),
    [theme, resolvedTheme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
