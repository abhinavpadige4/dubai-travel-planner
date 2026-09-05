import React from 'react';
import { FiExternalLink, FiInfo } from 'react-icons/fi';

const VisaInfo = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="section-title">
        <span className="text-amber-500">Visa</span> Requirements
      </h2>
      
      <div className="glass-card p-8 border-l-4 border-l-amber-500">
        <div className="flex items-start gap-4">
          <div className="bg-amber-500/20 p-3 rounded-full text-amber-500">
            <FiInfo size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Visa on Arrival</h3>
            <p className="text-gray-300 mb-4">
              Citizens of many countries, including the US, UK, EU, and others, are eligible for a free visa on arrival valid for 30 days. 
              Ensure your passport is valid for at least 6 months from the date of entry.
            </p>
            <a 
              href="https://www.ica.gov.ae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-amber-500 hover:text-amber-400 font-semibold transition-colors"
            >
              Check Eligibility <FiExternalLink className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaInfo;