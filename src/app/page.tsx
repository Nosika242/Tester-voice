"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const [countdown, setCountdown] = useState(10);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);
    const redirect = setTimeout(() => {
      router.push("/voicetrendz");
    }, 10000);
    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-gray-800 px-6">
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to <span className="text-blue-600">VoiceTrendz</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Your home for music, artists, news, and community. Explore songs,
          lyrics, press releases, and connect with creators worldwide.
        </p>

        <p className="text-gray-500 text-base">
          Redirecting to voicetrendz in{" "}
          <span className="font-semibold">{countdown}</span> seconds...
        </p>

        <button
          onClick={() => router.push("/voicetrendz")}
          className="mt-4 px-6 py-2 bg-[#00A58E] text-white rounded-lg hover:bg-[#00907B] transition-all duration-300"
        >
          Go Now
        </button>
      </section>
    </main>
  );
}
