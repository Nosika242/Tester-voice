"use client";

import Link from "next/link";
import useBlogContext from "@/src/hooks/useBlogContext";
import Image from "next/image";
import { socialLinks, SocialLink } from "@/src/types";

export default function FooterPage() {
  const blog = useBlogContext();
  if (!blog) return null;

  return (
    <footer
      className={`nav-gradient  border-gray-900/70  border-t transition-all duration-300`}
    >
      <div className="mx-auto py-8 md:py-10 px-4 sm:px-8">
        <div className="mb-10">
          <Link href="/voicetrendz" className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="VoiceTrendz Logo"
              width={40}
              height={40}
              className="object-contain rounded-full"
            />
            <span className={`text-2xl font-bold `}>VoiceTrendz</span>
          </Link>
        </div>
        <div className="flex space-x-6 mb-6 sm:mb-10">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-gray-400 icon-bg hover:text-amber-600 transition-colors p-2 rounded-full hover:bg-[#1A3D64]"
            >
              <link.Icon size={24} />
            </Link>
          ))}
        </div>
        {/* <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] "> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Brand Info */}

          {/* About / Advertise */}
          <div>
            <h4 className={`font-bold mb-4 text-lg `}>Advertise With Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-amber-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-amber-600 transition-colors"
                >
                  Contact Us
                </Link>
                </li>
                <li>
                <Link
                  href="/contact-us"
                  className="hover:text-amber-600 transition-colors"
                >
                  Support 
                </Link>
                </li>
                <li>
                <Link
                  href="/contact-us"
                  className="hover:text-amber-600 transition-colors"
                >
                  Email us 
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className={`font-bold mb-4 text-lg `}>Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-amber-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-amber-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className={`font-bold mb-4 text-lg `}>Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/forums"
                  className="hover:text-amber-600 transition-colors"
                >
                  Forums
                </Link>
              </li>
              <li>
                <Link
                  href="/polls"
                  className="hover:text-amber-600 transition-colors"
                >
                  Fan Polls
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div
        className={`border-t border-slate-900 mt-8  pt-8 text-center text-sm`}
      >
        <p className="opacity-60">
          &copy; {new Date().getFullYear()} VoiceTrendz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
