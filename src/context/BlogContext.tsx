"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

export interface BlogContextType {
  openItems: string[];
  toggleItem: (name: string) => void;
  toggleTheme: () => void;
  activeLink: string | null;
  setActiveLink: (link: string | null) => void;
  searchQuery: string;
  setSearchQueryState: (query: string) => void;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  isDarkMode: boolean;
  bgClass: string;
  textClass: string;
  cardBg: string;
  borderClass: string;
}

export const BlogContext = createContext<BlogContextType | undefined>(
  undefined
);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleItem = (name: string) => {
    setOpenItems((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const setSearchQueryState = (query: string) => setSearchQuery(query);

  const bgClass = isDarkMode
    ? "bg-gradient-to-b from-[#f4f4f5] via-[#e4e4e7] to-[#d4d4d8]"
    : "bg-gradient-to-b from-[#00001a] to-[#000000]";

  const textClass = isDarkMode ? "text-[#0c2b4e]" : "text-gray-100";

  const cardBg = isDarkMode ? "bg-[#0c2b4e]" : "bg-[#f9fafb]";
  const borderClass = isDarkMode ? "border-[#663d00]" : "border-[#663d00]";

  const contextValue: BlogContextType = {
    openItems,
    toggleItem,
    toggleTheme,
    activeLink,
    setActiveLink,
    searchQuery,
    setSearchQueryState,
    mobileMenuOpen,
    toggleMobileMenu,
    isDarkMode,
    bgClass,
    textClass,
    cardBg,
    borderClass,
  };

  return (
    <BlogContext.Provider value={contextValue}>{children}</BlogContext.Provider>
  );
};
