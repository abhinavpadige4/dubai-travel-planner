import React from 'react';

const EmergencySection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 rounded-xl mb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-terracotta">
          Emergency Contacts
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-terracotta/50 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
              <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Police
            </h3>
            <p className="text-xl font-bold text-terracotta">999</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-terracotta/50 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
              <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M6 6l10.293 10.293c.586.586 1.532.586 2.121 0l1.414-1.414a3 3 0 00-4.242-4.242L6 6z" />
              </svg>
              Ambulance
            </h3>
            <p className="text-xl font-bold text-terracotta">998</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-terracotta/50 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
              <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M6 6l10.293 10.293c.586.586 1.532.586 2.121 0l1.414-1.414a3 3 0 00-4.242-4.242L6 6z" />
              </svg>
              Tourism Police
            </h3>
            <p className="text-xl font-bold text-terracotta">800-4444</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;