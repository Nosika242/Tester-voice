"use client";

import { createContext, useState, ReactNode } from "react";

export interface BlogContextType {
  openItems: string[];
  toggleItem: (name: string) => void;
  activeLink: string | null;
  setActiveLink: (link: string | null) => void;
  searchQuery: string;
  setSearchQueryState: (query: string) => void;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  isSearchOpen: boolean;
  toggleSearch: () => void;
}

export const BlogContext = createContext<BlogContextType | undefined>( undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeLink, setActiveLink] = useState<string | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  // sidebar items
  const toggleItem = (name: string) => {
    setOpenItems((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const setSearchQueryState = (query: string) => setSearchQuery(query);
  
  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };


  const contextValue: BlogContextType = {
    openItems,
    toggleItem,
    activeLink,
    setActiveLink,
    searchQuery,
    setSearchQueryState,
    mobileMenuOpen,
    toggleMobileMenu,
    isSearchOpen,
    toggleSearch, 
  };

  return (
    <BlogContext.Provider value={contextValue}>{children}</BlogContext.Provider>
  );
};
