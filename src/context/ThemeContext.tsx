
"use client";
import { createContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme;
    if (stored) setTheme(stored);
  }, []);

 useEffect(() => {
    if (theme) {
   document.documentElement.removeAttribute("data-theme")
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme); 
        localStorage.setItem("theme", theme);
    }
 }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


