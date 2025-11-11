"use client";

import useTheme from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className=" transition-colors icon-bg hover:bg-[var(--bg2)] rounded-full p-2"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className=" w-5 h-5" />
      )}
    </button>
  );
}
