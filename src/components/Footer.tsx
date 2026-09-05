import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Dubai Travel Planner. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          For informational purposes only. Always verify travel details.
        </p>
      </div>
    </footer>
  );
};

export default Footer;