"use client";

import { usePathname, useRouter } from "next/navigation";
import { sidebarData } from "@/src/types";
import SidebarItem from "./SidebarItem";
import useBlogContext from "@/src/hooks/useBlogContext";
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
      className={`py-4 h-full overflow-y-auto ${blog.bgClass} shadow-2xl border-slate-900 border-r transition-all duration-300`}
    >
      {/* Header */}
      <div className={`border-b ${blog.borderClass} flex-1 mb-6 px-3 flex items-center justify-between`} >
         <Link href="/" className="flex items-center gap-2 hidden md:flex">
          <Image
            src="/assets/logo.png"
            alt="VoiceTrendz Logo"
            width={40}
            height={40}
            className="object-contain rounded-full"
          />
          <h1 className={`text-sm mb px-3 py-5.5 sm:text-xl font-semibold shrink-0 ${blog.textClass}`}
          >
            VoiceTrendz
          </h1>
       </Link>

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
