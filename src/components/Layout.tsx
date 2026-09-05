import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] text-white">
      <header className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Dubai 10-Day Planner</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Itinerary</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Budget</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Packing</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Visa</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Restaurants</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Emergency</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Dubai Travel Planner. All rights reserved.
          </p>
          <p className="mt-1 text-gray-500 text-xs">
            Built with React, Tailwind CSS, and Vite
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;