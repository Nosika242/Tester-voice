"use client";

import Link from "next/link";
import useBlogContext from "@/src/hooks/useBlogContext";
import Image from "next/image";

export default function LinksPage() {
  const blog = useBlogContext();
  if (!blog) return null;

  return (
    <footer className={`${blog.bgClass} border-gray-900/70  border-t transition-all duration-300`} >
      <div className="mx-auto py-8 md:py-10 px-6 sm:px-8">
        <div className="mb-10">
            <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="VoiceTrendz Logo"
            width={40}
            height={40}
            className="object-contain rounded-full"
          />
         <span className={`text-2xl font-bold ${blog.textClass}`}>
              VoiceTrendz
            </span>
       </Link>
      
        </div>
        {/* <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] "> */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Brand Info */}

          {/* About / Advertise */}
          <div>
            <h4 className={`font-bold mb-4 text-lg ${blog.textClass}`}>
              Advertise With Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-purple-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-purple-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className={`font-bold mb-4 text-lg ${blog.textClass}`}>
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-purple-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-purple-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className={`font-bold mb-4 text-lg ${blog.textClass}`}>
              Community
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/forums"
                  className="hover:text-purple-400 transition-colors"
                >
                  Forums
                </Link>
              </li>
              <li>
                <Link
                  href="/polls"
                  className="hover:text-purple-400 transition-colors"
                >
                  Fan Polls
                </Link>
              </li>
            </ul>
          </div>
        </div>
       </div>
        {/* Footer Bottom */}
        <div className={`border-t border-slate-900 my-8 pt-8 text-center text-sm ${blog.textClass}`} >
          <p className="opacity-60">
            &copy; {new Date().getFullYear()} VoiceTrendz. All rights reserved.
          </p>
        </div>
      
    </footer>
  );
}
