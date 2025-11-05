"use client";
import { Moon, Sun, Menu, Search } from "lucide-react";
import useBlogContext from "@/src/hooks/useBlogContext";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const blog = useBlogContext();
  if (!blog) return null;

  return (
    <nav className={`h-18 md:h-22 p-4 md:px-8 border-b  ${blog.borderClass} ${blog.bgClass} transition-all duration-300`}
    >
      <div className="flex items-center justify-between gap-3 sm:gap-6 ">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <h1
            className={`md:hidden text-sm sm:text-xl font-semibold shrink-0 ${blog.textClass}`}
          >
            VoiceTrendz
          </h1>

          <div className="flex-1 max-w-sm relative mx-auto">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F4F4F4]"
              size={18}
            />
              <input
              type="text"
              placeholder="Search..."
              value={blog.searchQuery}
              onChange={(e) => blog.setSearchQueryState(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D546C] focus:border-transparent text-sm sm:text-md transition-all
                ${
                  blog.isDarkMode
                  ? "bg-gray-100 text-gray-800 border-[#1A3D64] placeholder-gray-500"
                  : "bg-[#0e1038] text-gray-100 border-[#1D546C] placeholder-gray-400"
                }`}
            />
          </div>
        </div>
        <div className="flex items-center ml-auto gap-3 ">
          {/* Theme Toggle */}
             <button
            onClick={blog.toggleTheme}
            className={`p-2 rounded-lg border transition-colors ${
              blog.isDarkMode
                ? "bg-[#0C2B4E] hover:bg-[#00001a]"
                : "border-[#1A3D64]  hover:bg-gray-300"
            }`}
          >
            {blog.isDarkMode ? (
              <Sun size={18} className="text-yellow-300" />
            ) : (
              <Moon size={18} className="{blog.textClass}" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
           <button
            onClick={onMenuClick}
            className={`md:hidden p-2 rounded-lg border transition-colors ${
              blog.isDarkMode
                ? "border-[#1D546C] bg-[#0e1038] hover:bg-[#1A3D64]"
                : "border-[#1A3D64]  hover:bg-gray-300"
            }`}
            aria-label="Open menu"
          >
            <Menu size={24} className={blog.textClass} />
          </button>
        </div>
      </div>
    </nav>
  );
}
