"use client";

import { useState } from "react";

export default function VotePage() {
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
  const [voted, setVoted] = useState(false);

  // Example artist list — you can later fetch this from your API
  const artists = [
    { id: 1, name: "Taylor Swift" },
    { id: 2, name: "Burna Boy" },
    { id: 3, name: "Drake" },
    { id: 4, name: "Ayra Starr" },
  ];

  const handleVote = () => {
    if (selectedArtist) {
      setVoted(true);
    }
  };

  if (voted) {
    return (
      <div className="p-6 text-white">
        <h1 className="text-2xl font-bold mb-4 text-purple-400"> Thank You for Voting!</h1>
        <p className="mb-4">You voted for: <span className="font-semibold text-amber-400">{selectedArtist}</span></p>
        <button
          onClick={() => {
            setSelectedArtist(null);
            setVoted(false);
          }}
          className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
        >
          Vote Again
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4 text-purple-400">Vote for Your Favorite Artist 🎶</h1>
      <p className="mb-6 font-medium">Select your favorite artist and cast your vote below.</p>

      {/* Artist List */}
      <ul className="space-y-3 mb-6">
        {artists.map((artist) => (
          <li
            key={artist.id}
            onClick={() => setSelectedArtist(artist.name)}
            className={`p-4 rounded-lg cursor-pointer border transition-all duration-200 ${
              selectedArtist === artist.name
                ? "bg-purple-700 border-purple-400 shadow-lg scale-[1.02]"
                : "bg-gray-800 hover:bg-purple-800 border-gray-700"
            }`}
          >
            {artist.name}
          </li>
        ))}
      </ul>

      {/* Cast Vote Button */}
      <button
        onClick={handleVote}
        disabled={!selectedArtist}
        className={`w-full py-2 font-semibold rounded-lg transition-all ${
          selectedArtist
            ? "bg-purple-600 hover:bg-purple-700 text-white"
            : "bg-gray-600 text-gray-300 cursor-not-allowed"
        }`}
      >
        Cast Vote
      </button>
    </div>
  );
}
