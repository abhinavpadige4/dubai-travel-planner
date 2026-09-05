import React from 'react';
import './Layout.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2D1B0E] to-[#1A0F04] text-[#D2B48C] antialiased">
      <header className="bg-[#3D2B1F]/80 backdrop-blur-sm border-b-[1px] border-[#4A3421]/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-[#D2B48C]">Dubai 10-Day Travel Planner</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-[#3D2B1F]/80 backdrop-blur-sm border-t-[1px] border-[#4A3421]/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-[#A67852]">
          © 2026 Dubai Travel Planner | <a href="/about" className="hover:text-[#D2B48C] transition-colors">About</a> | 
          <a href="/privacy" className="hover:text-[#D2B48C] mx-2 transition-colors">Privacy</a> | 
          <a href="/contact" className="hover:text-[#D2B48C] transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;