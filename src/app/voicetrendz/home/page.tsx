

"use client";

import { hotStories, artistItems, newsItems } from "@/src/types";

export default function DashboardPage() {
  return (
 <div className="h-full min-h-screen text-white flex flex-col mb-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-400 mb-2">
          Welcome to VoiceTrendz Dashboard
        </h1>
        <p className="text-gray-400">
          Discover the hottest stories, trending artists, and breaking music news.
        </p>
      </div>

      {/* Hot Stories Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-400 mb-6">
          🔥 Hot Stories
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
          {hotStories.map((story, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#331400] to-[#00001a] border border-[#333435] rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-blue-400/30 transition-all duration-300"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-44 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{story.views} views</span>
                  <span>{story.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*  Artists Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-400 mb-6">
          🎤 Featured Artists
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
          {artistItems.map((artist, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#000420] to-[#1a0a00] border border-[#484b4f] rounded-xl p-4 shadow-lg hover:-translate-y-2 transition-all duration-300"
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

      {/* News Section */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-400 mb-6">
          📰 Latest Music News
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a0a00] to-[#00001a] border border-[#333435] rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-blue-400/30 transition-all duration-300"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-44 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{news.excerpt}</p>
                <p className="text-sm text-[#ff9900]">{news.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


