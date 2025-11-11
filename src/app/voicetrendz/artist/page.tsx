
"use client";

import { ArtistItem,  artistItems,  } from "@/src/types";

 export default function ArtistPage() {
  return (
    <div className="h-full min-h-screen text-white flex flex-col mb-10 p-6">

    <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">
            🎤 Featured Artists
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
            {artistItems.map((artist, index) => (
              <div
                key={index}
                className=" card-body border border-[#00022e] rounded-xl p-4 shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-bold">{artist.name}</h3>
                <p className="text-sm text-[#ff9900]">{artist.genre}</p>
                <p className="text-gray-400 text-sm mt-2">{artist.bio}</p>
              </div>
            ))}
          </div>
        </section>
    </div>
  )
 }