
"use client";

import { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo_3 from "@/public/assets/logo_3.jpg";

 

export default function LandingPage()  {
  const router = useRouter();
  

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/voicetrendz");
    }, 7000); // 4 seconds delay
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
     <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#050515] via-[#0A102A] to-[#00001a]  overflow-hidden">

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
      
      {/* Logo Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-center"
      >
        
        <Image
          src="/assets/logo_3.jpg"
          alt="VoiceTrendz Logo"
          width={180}
          height={180}
          className="drop-shadow-[0_0_25px_rgba(56,189,248,0.7)] rounded-full"
        />
         </motion.div>

    
      {/* Shimmering Gradient Text */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex mt-16 text-4xl sm:text-5xl font-[Space_Grotesk] tracking-[0.3em]
        bg-[length:200%_auto] bg-clip-text text-yellow-200
        animate-[shimmer_6s_linear_infinite] mx-auto"
      >
        {text.map((char, index) => (
          <motion.span key={index} variants={letter}
           className="drop-shadow-[0_0_4px_rgba(56,189,248,0.8)]" 
           >
            {char}
          </motion.span>
        ))}
      </motion.div>  

      {/* Subtext / Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="mt-4 text-sm sm:text-base text-gray-400 tracking-wide font-[Manrope]"
      >
        Discover • Create • Inspire
      </motion.p>
    </div>
  );
}

// from-[#00b4d8] via-[#8ab4f8] to-[#1D546C]