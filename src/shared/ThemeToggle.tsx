
"use client";

import useBlogContext from "../hooks/useBlogContext";
import { Moon, Sun } from "lucide-react"; 

export default function ThemeToggle() {
  const blog = useBlogContext();
  if (!blog) return null;

  return (
    <button
      onClick={blog.toggleTheme}
      className="p-2 rounded-full transition bg-gray-200 dark:bg-gray-800 hover:opacity-80"
      title="Toggle theme"
    >
      {blog.isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
