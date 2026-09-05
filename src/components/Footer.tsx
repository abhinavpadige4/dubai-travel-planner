import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800/30 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-400">
          © 2026 Dubai Travel Planner
        </p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-gray-300 hover:text-terracotta transition-colors duration-300 text-sm">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-terracotta transition-colors duration-300 text-sm">
            Privacy
          </a>
          <a href="#" className="text-gray-300 hover:text-terracotta transition-colors duration-300 text-sm">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
</filepath>