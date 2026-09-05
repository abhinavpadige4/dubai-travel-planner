import React from 'react';

const VisaInfoSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 rounded-2xl mb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-terracotta to-sunset-rose bg-clip-text text-transparent">
          Visa Information
        </h2>
        <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
          <p className="text-gray-300 leading-relaxed mb-6">
            Most nationalities receive a <span className="font-semibold text-terracotta">30-day visa on arrival</span> when visiting Dubai. 
            Visa requirements vary by nationality and purpose of visit.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span className="w-8 h-8 flex items-center justify-center bg-terracotta/20 text-terracotta rounded-full">
                  📋
                </span>
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Tourist Visa</h3>
                <p className="text-gray-400 text-sm">
                  Available for 30, 60, or 90 days. Can be single or multiple entry. 
                  Sponsored by hotels, tour operators, or relatives in UAE.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span className="w-8 h-8 flex items-center justify-center bg-terracotta/20 text-terracotta rounded-full">
                  ⏱️
                </span>
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Transit Visa</h3>
                <p className="text-gray-400 text-sm">
                  Free 48-hour or 96-hour visa for passengers transiting through UAE airports. 
                  Must be sponsored by airline.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span className="w-8 h-8 flex items-center justify-center bg-terracotta/20 text-terracotta rounded-full">
                  ⚠️
                </span>
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Important Notes</h3>
                <p className="text-gray-400 text-sm">
                  Always check latest requirements with UAE embassy or official channels before travel. 
                  Passport must be valid for at least 6 months from travel date.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-800/50">
            <p className="text-gray-500 text-sm text-center">
              For official visa information, visit: <a href="https://www.gdrfa.gov.ae" className="text-terracotta hover:underline" target="_blank" rel="noopener noreferrer">GDRFA UAE</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaInfoSection;