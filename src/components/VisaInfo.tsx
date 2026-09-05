import React from 'react';

const VisaInfo: React.FC = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 mb-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-d4a373 mb-4">Visa Information</h2>
      <p className="text-gray-300 leading-relaxed">
        Most nationalities receive a 30-day visa on arrival (free). Check latest rules at 
        <a 
          href="https://www.ica.gov.ae" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-d4a373 hover:underline transition-colors duration-200"
        >
          https://www.ica.gov.ae
        </a>. Ensure passport validity ≥6 months.
      </p>
    </div>
  );
};

export default VisaInfo;