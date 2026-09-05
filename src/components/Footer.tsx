import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 pt-8 border-t border-white/10">
      <div className="text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Dubai Travel Planner. All rights reserved.</p>
        <p className="mt-1">Built with ❤️ using React, Tailwind CSS, and Vite</p>
      </div>
    </footer>
  );
};

export default Footer;