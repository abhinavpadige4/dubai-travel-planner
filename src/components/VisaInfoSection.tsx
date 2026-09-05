import React from 'react';

const VisaInfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900/50 backdrop-blur-sm border border-sand/20 rounded-2xl mb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-terracotta to-sunset bg-clip-text text-transparent">
          Visa Information
        </h2>
        <div className="bg-gray-800/50 border border-sand/30 rounded-xl p-8">
          <p className="text-gray-300 leading-relaxed text-lg">
            Most nationalities receive a <span className="font-semibold text-terracotta">30-day visa on arrival</span> when visiting Dubai. 
            Visa requirements can change frequently, so it's essential to <span className="font-semibold text-terracotta underline">check the latest requirements</span> 
            based on your nationality before traveling.
          </p>
          <div className="mt-6 pt-4 border-t border-sand/20">
            <h3 className="text-xl font-semibold text-terracotta mb-4">Important Notes:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Passport must be valid for at least 6 months from your travel date</li>
              <li>Some nationalities may require pre-arranged visas</li>
              <li>Visit the official UAE government immigration website for the most current information</li>
              <li>Keep a digital and physical copy of your visa approval</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaInfoSection;