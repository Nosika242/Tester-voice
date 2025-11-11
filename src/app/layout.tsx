import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Poppins, Inter, Montserrat, DM_Sans,} from "next/font/google";
import "./globals.css";
import { BlogProvider } from "../context/BlogContext";
import { ThemeProvider } from "../context/ThemeContext"; 


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});


const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"], 
  variable: "--font-poppins", 
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({ 
  subsets: ["latin"], 
  variable: "--font-manrope",
  display: "swap", 
});

export const metadata: Metadata = {
  title: "VoiceTrendz",
  description: "Explore the latest songs, news, and artists on VoiceTrendz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning 
      className={`
        ${spaceGrotesk.variable} 
        ${manrope.variable} 
        ${poppins.variable} 
        ${inter.variable} 
        ${montserrat.variable} 
        ${dmSans.variable}
      `}
    >
      <body className="font-sans">
        <ThemeProvider>
          <BlogProvider>{children}</BlogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}