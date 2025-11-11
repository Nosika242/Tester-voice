"use client";

import Link from "next/link";
import type { SublinkItem } from "@/src/types";
import useBlogContext from "@/src/hooks/useBlogContext";

interface SidebarSubLinkProps {
  sub: SublinkItem;
  activeLink: string;
  handleLinkClick: (url: string) => void;
  location: string;
}

export default function SidebarSubLink({
  sub,
  handleLinkClick,
  location,
}: SidebarSubLinkProps) {
  const blog = useBlogContext();
  if (!blog) return null;

  const isActive = location === sub.url;

  return (
    <li>
      <Link
        href={sub.url || "#"}
        onClick={() => handleLinkClick(sub.url || "")}
        className={`flex items-center gap-2 px-5 py-2 rounded transition-all duration-200 
          ${
            isActive
              ? "bg-[#00001a] text-white font-semibold"
              : `${blog.textClass} hover:bg-amber-500/50 hover:text-white`
          }`}
      >
        {sub.image && (
          <img src={sub.image} alt={sub.name} className="w-4 h-4" />
        )}
        {sub.name}
      </Link>
    </li>
  );
}
