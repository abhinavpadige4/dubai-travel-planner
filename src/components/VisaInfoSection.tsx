import React from 'react';

const VisaInfoSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 rounded-xl mb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-terracotta-400 to-sunset-300 bg-clip-text text-transparent">
          Visa Information
        </h2>
        <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
          <p className="text-gray-300 leading-relaxed text-lg">
            Most nationalities receive a <span className="font-semibold text-terracotta-300">30-day visa on arrival</span> when visiting Dubai. 
            Visa requirements vary by nationality, so it's essential to check the latest regulations before your trip.
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span className="w-3 h-3 bg-terracotta-400 rounded-full"></span>
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-medium">Passport Validity:</span> Your passport must be valid for at least 6 months from your date of entry into the UAE.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span className="w-3 h-3 bg-terracotta-400 rounded-full"></span>
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-medium">Visa on Arrival:</span> Available for citizens of GCC countries, USA, UK, EU nations, Canada, Australia, and many others. 
                  Typically valid for 30 days and can be extended once for an additional 30 days.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span className="w-3 h-3 bg-terracotta-400 rounded-full"></span>
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-medium">Required Documents:</span> Valid passport, return/onward ticket, proof of accommodation, and sufficient funds for your stay.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span className="w-3 h-3 bg-terracotta-400 rounded-full"></span>
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-medium">Important Note:</span> Visa policies change frequently. Always verify requirements with the 
                  <a href="https://www.ica.gov.ae/" className="text-terracotta-300 hover:underline" target="_blank" rel="noopener noreferrer">
                    UAE Federal Authority for Identity and Citizenship
                  </a> or your nearest UAE embassy before traveling.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700/50">
            <p className="text-gray-400 text-sm text-center">
              Last updated: April 2026 • Information subject to change
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaInfoSection;