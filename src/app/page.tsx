
"use client";

import { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

 

export default function LandingPage()  {
  const router = useRouter();
  

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/voicetrendz");
    }, 5000); // 4 seconds delay
    return () => clearTimeout(timer);
  }, [router]);

  const text = "VOICETRENDZ".split(""); // Split letters for animation
  // Animation setup
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 1, staggerChildren: 0.1 },
    },
  };

  const letter: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
  };
  

  return (
    <div className={` bg-gradient-to-tr from-[#cce6ff] flex flex-col items-center justify-center h-screen overflow-hidden relative `}>
      {/* Shimmer Animation Keyframes */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/assets/logo_3.jpg"
          alt="VoiceTrendz Logo"
          width={180}
          height={180}
          className="object-contain rounded-lg drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        />
      </motion.div>

      {/* Shimmering Gradient Text */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex mt-6 text-2xl sm:text-5xl font-extrabold tracking-[0.3em]
        bg-gradient-to-br from-[#00b4d8] via-[#050515] to-[#ff9900]
        bg-[length:200%_auto] text-transparent bg-clip-text
        animate-[shimmer_3s_linear_infinite] mx-auto"
      >
        {text.map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* Subtext / Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="mt-4 text-sm sm:text-base text-slate-950 tracking-wide"
      >
        Discover • Create • Inspire
      </motion.p>
    </div>
  );
}

// from-[#00b4d8] via-[#8ab4f8] to-[#1D546C]