import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-sand/20 py-8 mt-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm text-sand/60">
          © 2026 Dubai Travel Planner
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="/about" className="text-sm text-sand/40 hover:text-terracotta transition-colors duration-300">
            About
          </a>
          <a href="/privacy" className="text-sm text-sand/40 hover:text-terracotta transition-colors duration-300">
            Privacy
          </a>
          <a href="/contact" className="text-sm text-sand/40 hover:text-terracotta transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
</path>