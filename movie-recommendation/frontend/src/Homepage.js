import React from "react";
import { Search } from "lucide-react";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Movie Recommender</h1>
      <p className="text-gray-400 text-lg md:text-xl mb-8">
        Discover your next favorite movie
      </p>
      
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none"
        />
        <Search className="absolute right-3 top-3 text-gray-500" size={20} />
      </div>
    </div>
  );
};

export default Homepage;
