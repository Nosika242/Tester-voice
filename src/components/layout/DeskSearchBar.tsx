
"use client";

import { useRef } from "react";
import { Search } from "lucide-react";
import useBlogContext from "@/hooks/useBlogContext";

export default function DeskSearchBar() {
  const blog = useBlogContext();
  const searchRef = useRef<HTMLDivElement>(null);

  if (!blog) return null;

  const { searchQuery, setSearchQueryState } = blog;

  return (
    <div ref={searchRef} className="flex-1 max-w-sm relative mx-auto">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQueryState(e.target.value)}
          className={`w-full pl-10 pr-4 py-2 border rounded-full text-sm sm:text-md  
             focus:border-purple-500 input-bg text-primary border-card
            focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-current placeholder-gray-400
          `}
        />
    </div>
  );
}