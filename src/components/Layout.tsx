import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D1B17] to-[#1A0F08] text-white">
      <header className="bg-white/5 backdrop-blur-sm border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Dubai 10-Day Planner</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Itinerary</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Budget</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Packing</a>
            <a href="#" className="hover:text-gray-300 transition-colors">More</a>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {Outlet()}
      </main>
      <footer className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Dubai Travel Planner. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;