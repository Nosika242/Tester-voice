"use client";

import { usePathname, useRouter } from "next/navigation";
import { sidebarData } from "@/types";
import SidebarItem from "./SidebarItem";
import useBlogContext from "@/hooks/useBlogContext";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
interface SidebarProps {
  closeSidebar: () => void;
}

export default function Sidebar({ closeSidebar }: SidebarProps) {
  const blog = useBlogContext();
  const pathname = usePathname() || "/";
  const router = useRouter();

  const handleLinkClick = (url: string) => {
    blog.setActiveLink(url);
    closeSidebar();
    router.push(url);
  };

  if (!blog) return null;
  
  return (
    <aside
      className={`py-4 overflow-y-auto h-full nav-gradient shadow-2xl border-slate-900 border-r transition-all duration-300 border-side `}
    >
      {/* Header */}
      <div className={`border-b nav-border-color flex-1 mb-6 px-3 flex items-center justify-between h-21 sm:h-18 `}>

        <button
          onClick={closeSidebar}
          className="md:hidden text-gray-500 hover:text-gray-700 p-3 mr-1"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      {/* Sidebar Items */}
      
      {sidebarData.map((item) => (
        <SidebarItem
          key={item.name}
          item={item}
          openItems={blog.openItems}
          toggleItem={blog.toggleItem}
          activeLink={blog.activeLink || pathname}
          handleLinkClick={handleLinkClick}
          location={pathname}
        />
      ))}
     
    </aside>
  );
}
