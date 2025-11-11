"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import SidebarSubLink from "./SidebarSubLink";
import type { SidebarItem as SidebarItemType, SublinkItem } from "@/types";
import Link from "next/link";
import useBlogContext from "@/hooks/useBlogContext";

interface SidebarItemProps {
  item: SidebarItemType;
  openItems: string[];
  toggleItem: (itemName: string) => void;
  activeLink: string;
  handleLinkClick: (url: string) => void;
  location: string;
}

export default function SidebarItem({
  item,
  openItems,
  toggleItem,
  activeLink,
  handleLinkClick,
  location,
}: SidebarItemProps) {
  const blog = useBlogContext();
  if (!blog) return null;

  const isActive = location.startsWith(item.url || "");
  const isItemOpen = openItems.includes(item.name);

  return (
    <div className={`mb-2 text-primary`}>
      {/* Main Item */}
      <div className="flex items-center justify-between">
        <Link
          href={item.url || "#"}
          onClick={() => handleLinkClick(item.url || "")}
          className={`flex-1 flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 
            ${
              isActive
                ? "font-semibold bg-accent  hover:bg-amber-500 text-white"
                : "hover-color hover:text-white text-primary"
            }`}
        >
          {item.icon ? (
            <item.icon size={18} />
          ) : item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-5 h-5 object-contain"
            />
          ) : null}
          <span className="ml-2">{item.name}</span>
        </Link>

        {item.sublinks && item.sublinks.length > 0 && (
          <button
            onClick={() => toggleItem(item.name)}
            className={`p-2 text-primary hover:text-[#1d546c]`}
          >
            {isItemOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </button>
        )}
      </div>

      {/* Sublinks */}
      {item.sublinks && item.sublinks.length > 0 && isItemOpen && (
        <ul className="mt-1 space-y-1 transition-all duration-200">
          {item.sublinks.map((sub: SublinkItem) => (
            <SidebarSubLink
              key={sub.name}
              sub={sub}
              activeLink={activeLink}
              handleLinkClick={handleLinkClick}
              location={location}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
