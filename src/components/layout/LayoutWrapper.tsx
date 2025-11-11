"use client";

import { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "../sidebars/Sidebar";
import useBlogContext from "@/src/hooks/useBlogContext";
import FooterPage from "./Footer";

interface LayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const blog = useBlogContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => setSidebarOpen(false);
  if (!blog) return null;

  // ${blog.bgClass}

  return (
    <div
      className={`relative flex h-screen  transition-all duration-500`}
    >
      {sidebarOpen && (
        <div
          className="fixed backdrop-blur-sm md:hidden"
          onClick={closeSidebar}
        />
      )}
      
      <div
        className={`fixed left-0 top-0 z-40 h-full w-64 flex flex-col justify-between transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }
          md:translate-x-0`}
      >
        <Sidebar closeSidebar={closeSidebar} />
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1 ml-0 md:ml-64">
        <div className="fixed top-0 left-0 md:left-64 right-0 z-30">
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
        </div>

        <main className="flex-1 overflow-y-auto scroll-smooth">
          <div className="min-h-[calc(100vh-80px)] mt-40 px-4 sm:px-8">{children}</div>
          <FooterPage />
        </main>
      </div>
    </div>
  );
}
