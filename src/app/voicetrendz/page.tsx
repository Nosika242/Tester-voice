
"use client";

import { hotStories, artistItems, newsItems } from "@/types";

export default function DashboardPage() {
  return (
 <div className="h-full min-h-screen text-white flex flex-col mb-10">
      {/* Header */}

      {/* Hot Stories Section */}
      <section className="mb-12">
        <h2 className="text-2xl text-blue-400 mb-6">
          🔥 Hot Stories
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
          {hotStories.map((story, index) => (
            <div
              key={index}
              className="card-body border border-card rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-blue-400/30 transition-all duration-300"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-44 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg text-secondary mb-2">{story.title}</h3>
                <div className="flex justify-between text-sm text-primary">
                  <span>{story.views} views</span>
                  <span>{story.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*  Artists Section gradient-to-br from-[#000420] to-[#1a0a00] */}
      <section className="mb-12">
        <h2 className="text-2xl text-blue-400 mb-6">
          🎤 New Artists Showcase
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
          {artistItems.map((artist, index) => (
            <div           
              key={index}
              className="card-body border border-card rounded-xl p-4 shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h3 className="text-lg font-bold text-secondary">{artist.name}</h3>
              <p className="text-sm text-[#ff9900]">{artist.genre}</p>
              <p className="text-gray-400 text-sm mt-2">{artist.bio}</p>
            </div>
          ))}
        </div>
      </section>

    
    </div>
  );
}


