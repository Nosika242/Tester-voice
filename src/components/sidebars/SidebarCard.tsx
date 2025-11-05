
"use client";


import useBlogContext from "@/src/hooks/useBlogContext";
import { sidebarData } from "@/src/types";

export default function SidebarCard() {
  const blog = useBlogContext();
  if (!blog) return null;

  return (
    <>
      {/* Overlay for mobile view */}
      {blog.mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={blog.toggleMobileMenu}
        ></div>
      )}

      {/* Sidebar panel */}
      <aside
        className={`fixed inset-y-0 left-0 h-screen w-64 z-50 p-4 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${blog.bgClass} ${blog.textClass} border-r ${blog.borderClass} 
          ${blog.mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
          md:relative md:translate-x-0`}
      >
        <ul className="space-y-3">
          {sidebarData.map((item) => (
            <li key={item.name}>
              <div
                onClick={() => blog.toggleItem(item.name)}
                className="cursor-pointer font-medium flex justify-between"
              >
                {item.name}
                {item.sublinks && item.sublinks.length > 0 && (
                  <span>{blog.openItems.includes(item.name) ? "−" : "+"}</span>
                )}
              </div>

              {blog.openItems.includes(item.name) && (
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  {item.sublinks?.map((sub) => (
                    <li key={sub.name}>
                      <a href={sub.url}>{sub.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
