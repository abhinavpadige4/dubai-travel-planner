import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/10 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Dubai Travel Planner. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4 text-sm text-gray-500">
          <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;