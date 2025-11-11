"use client";
import { Search, Menu, X, MoreVertical } from "lucide-react";
import useBlogContext from "@/hooks/useBlogContext";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import DeskSearchBar from "./DeskSearchBar";

interface NavbarProps {
  onMenuClick: () => void;
}
export default function Navbar({ onMenuClick }: NavbarProps) {
  const blog = useBlogContext();
  if (!blog) return null;

  const { isSearchOpen, toggleSearch, setSearchQueryState } = blog;

  return (
    <nav 
      className={`nav-gradient  relative border-b nav-border-color text-textPrimary h-auto md:h-22 p-4 md:px-8 transition-all duration-300 ${
        isSearchOpen ? "sm:flex-row flex-col" : ""
      } `}
    >
      <div
        className={`flex items-center justify-between gap-4 sm:gap-6 w-full`}
      >
        <Link href="/" className={`flex items-center shrink-0`}>
          <Image
            src="/assets/logo_2.png"
            alt="VoiceTrendz Logo"
            width={40}
            height={40}
            className="object-contain mix-blend-multiply dark:mix-blend-screen"
          />
          <h1
            className={`text-base text-secondary py-5.5 sm:text-xl font-[montserrat] shrink-0 `}
          >
            VOICE<span className="text-accent ">TRENDZ</span>
          </h1>
        </Link>

        <div className="hidden sm:block flex-1 min-w-0 mx-4">
          <DeskSearchBar />
        </div>

        <div className="flex items-center gap-3 shrink-0 ml-auto">
          <button
            onClick={toggleSearch}
            className={`sm:hidden transition-colors rounded-full p-2 hover:bg-[#1A3D64] 
                    ${
                      isSearchOpen
                        ? "icon-bg text-amber-600 animate-slideDown"
                        : "text-white"
                    }`}
            aria-label={isSearchOpen ? "Close search" : "Open search"}
          >
            {isSearchOpen ? <X size={24} /> : <Search size={20} />}
          </button>

          <ThemeToggle />

          <button
            onClick={onMenuClick}
            className={`md:hidden transition-colors rounded-full p-2 icon-bg hover:bg-[#1A3D64] `}
            aria-label="Open menu"
          >
            <Menu className={`h-5 w-5`} />
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="flex sm:hidden items-center w-full mt-2 border-t border-gray-900 pt-2 animate-slideDown">
          <input
            type="text"
            placeholder="Search for artists, songs, news..."
            value={blog.searchQuery}
            onChange={(e) => setSearchQueryState(e.target.value)}
            className="flex-1 w-full text-md bg-transparent border-none text-white focus:outline-none placeholder-gray-400"
            autoFocus
          />
        </div>
      )}
    </nav>
  );
}
