"use client";

import {NewsItem, newsItems } from "@/src/types";

export default function NewsPage() {
  return (
    <div className="h-full min-h-screen text-white flex flex-col mb-10 p-6">
       <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-6">
                📰 Latest Music News
              </h2>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
                {newsItems.map((news, index) => (
                  <div
                    key={index}  
                    className="bg-gradient-to-br from-blue-900 via-black to-gray-900 border border-[#663d00] rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-blue-400/30 transition-all duration-300"
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
  )
}