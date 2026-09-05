import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800/30 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Dubai Travel Planner. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.ica.gov.ae" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-d4a373 transition-colors duration-300 text-sm">
            Visa Information
          </a>
          <a href="https://www.visitdubai.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-d4a373 transition-colors duration-300 text-sm">
            Dubai Tourism
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;