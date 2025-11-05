"use client";

import {StoryItem, hotStories} from "@/src/types";

export default function HotstoryPage() {
  return (
    <div className="h-full min-h-screen text-white flex flex-col mb-10 p-6">
        <section className="mb-12">
          <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-400 mb-2">
          Welcome to VoiceTrendz songs and 
        </h1>
        <p className="text-gray-400">
          Discover the hottest stories, trending artists, and breaking music news.
        </p>
      </div>
        <h2 className="text-2xl font-semibold text-blue-400 mb-6">
          🔥 Hot Stories
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
          {hotStories.map((story, index) => (
            <div
              key={index}
              className=" bg-gradient-to-br from-[#000420] via-black to-[#00001a] border border-[#663d00] rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-blue-400/30 transition-all duration-300"
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
    </div>
  )
}