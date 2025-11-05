"use client";

import Link from "next/link";
import useBlogContext from "@/src/hooks/useBlogContext";

export default function LinksPage() {
  const blog = useBlogContext();
  if (!blog) return null;

  return (
    <footer
      className={`${blog.bgClass} ${blog.borderClass} border-t transition-all duration-300`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-10">
        <div className="mb-10">
          <Link href="/" className="hover:text-purple-400 transition-colors">
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

        {/* Footer Bottom */}
        <div
          className={`border-t ${blog.borderClass} mt-12 pt-8 text-center text-sm ${blog.textClass}`}
        >
          <p className="opacity-60">
            &copy; {new Date().getFullYear()} VoiceTrendz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
