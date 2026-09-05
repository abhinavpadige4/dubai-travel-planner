import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 pt-8 border-t border-white/10">
      <div className="text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Dubai Travel Planner. All rights reserved.</p>
        <p className="mt-1">Built with React, Tailwind CSS & Vite • Deployed on Vercel</p>
      </div>
    </footer>
  );
};

export default Footer;