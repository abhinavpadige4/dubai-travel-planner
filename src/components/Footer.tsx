import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800/30 py-8 mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Dubai Travel Planner. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Built with React 18, Tailwind CSS 3, Vite 4 & TypeScript
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;