
"use client";
import { Moon, Sun, Menu, Search, MoreVertical  } from "lucide-react";
import useBlogContext from "@/src/hooks/useBlogContext";
import Link from "next/link";
import Image from "next/image";


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
          <Link href="/" className="flex items-center md:hidden">
          <Image
            src="/assets/logo_2.png"
            alt="VoiceTrendz Logo"
            width={40}
            height={40}
            className="object-contain mix-blend-multiply dark:mix-blend-screen"
          />
          <h1
            className={`text-base sm:text-xl font-semibold shrink-0 ${blog.textClass}`}
          >
            VoiceTrendz
          </h1>
       </Link>
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
                  : "bg-[#00001a]  text-gray-100 border-[#484b4f] placeholder-gray-400"
                }`}
            />
          </div>
        </div>
        <div className="flex items-center ml-auto gap-3 ">
          {/* Theme Toggle */}
             <button
            onClick={blog.toggleTheme}
            className={` transition-colors ${
              blog.isDarkMode
                ? "bg-[#0C2B4E] hover:bg-[#00001a]"
                : "border-[#1A3D64]  hover:bg-gray-300"
            }`}
          >
            {blog.isDarkMode ? (
              <Sun className="text-yellow-300 w-6 h-6 md:w-8 md:h-8" />
            ) : (
              <Moon className="{blog.textClass} w-6 h-6 md:w-8 md:h-8" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
           <button
            onClick={onMenuClick}
            className={`md:hidden  transition-colors ${
              blog.isDarkMode
                ? "border-[#1D546C] bg-[#0e1038] hover:bg-[#1A3D64]"
                : "border-[#1A3D64]  hover:bg-gray-300"
            }`}
            aria-label="Open menu"
          >
            <MoreVertical  className={`{blog.textClass} h-6 w-6 `}/>
          </button>
        </div>
      </div>
    </nav>
  );
 }



// "use client";
// import Image from "next/image";
// import { Moon, Sun, Search, MoreVertical } from "lucide-react";
// import useBlogContext from "@/src/hooks/useBlogContext";
// import Link from "next/link";

// interface NavbarProps {
//   onMenuClick: () => void;
// }

// export default function Navbar({ onMenuClick }: NavbarProps) {
//   const blog = useBlogContext();
//   if (!blog) return null;

//   return (
//     <nav
//       className={`p-4 md:px-8 border-b ${blog.borderClass} ${blog.bgClass} transition-all duration-300`}
//     >
//       {/* Top row — logo + title + icons */}
//       <div className="flex items-center justify-between gap-3 sm:gap-6">
//           <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/assets/logo.png"
//             alt="VoiceTrendz Logo"
//             width={40}
//             height={40}
//             className="object-contain rounded-full"
//           />
//           <h1
//             className={`text-base sm:text-xl font-semibold shrink-0 ${blog.textClass}`}
//           >
//             VoiceTrendz
//           </h1>
//        </Link>

//         {/* Right icons */}
//         <div className="flex items-center gap-3">
//           {/* Theme toggle */}
//           <button
//             onClick={blog.toggleTheme}
//             className={`transition-colors rounded-md p-2 ${
//               blog.isDarkMode
//                 ? "bg-[#0C2B4E] hover:bg-[#00001a]"
//                 : "border border-[#1A3D64] hover:bg-gray-300"
//             }`}
//           >
//             {blog.isDarkMode ? (
//               <Sun size={18} className="text-yellow-300" />
//             ) : (
//               <Moon size={18} className={blog.textClass} />
//             )}
//           </button>

//           {/* Mobile menu toggle */}
//           <button
//             onClick={onMenuClick}
//             className={`md:hidden rounded-md p-2 transition-colors ${
//               blog.isDarkMode
//                 ? "bg-[#0e1038] hover:bg-[#1A3D64]"
//                 : "border border-[#1A3D64] hover:bg-gray-300"
//             }`}
//             aria-label="Open menu"
//           >
//             <MoreVertical className={`h-6 w-6 ${blog.textClass}`} />
//           </button>
//         </div>
//       </div>

//       {/* Search bar */}
//       <div className="mt-3 md:mt-0 md:flex md:justify-center">
//         <div className="relative w-full md:max-w-sm">
//           <Search
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F4F4F4]"
//             size={18}
//           />
//           <input
//             type="text"
//             placeholder="Search..."
//             value={blog.searchQuery}
//             onChange={(e) => blog.setSearchQueryState(e.target.value)}
//             className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D546C] focus:border-transparent text-sm sm:text-md transition-all
//               ${
//                 blog.isDarkMode
//                   ? "bg-gray-100 text-gray-800 border-[#1A3D64] placeholder-gray-500"
//                   : "bg-[#00001a] text-gray-100 border-[#484b4f] placeholder-gray-400"
//               }`}
//           />
//         </div>
//       </div>
//     </nav>
//   );
// }

