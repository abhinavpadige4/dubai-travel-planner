import React from 'react';

const EmergencyContacts: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 rounded-xl mb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8 text-white">
          Emergency Contacts
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Police
            </h3>
            <p className="text-xl font-bold text-red-500">999</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ambulance
            </h3>
            <p className="text-xl font-bold text-red-500">998</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Fire
            </h3>
            <p className="text-xl font-bold text-red-500">997</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2s1 2 2 2 2-.9 2-2-1-2-2-2zm0 2a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z" />
              </svg>
              Tourist Police
            </h3>
            <p className="text-xl font-bold text-blue-500">800-4444</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2s1 2 2 2 2-.9 2-2-1-2-2-2zm0 2a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z" />
              </svg>
              Your Embassy
            </h3>
            <p className="text-xl font-bold text-green-500">(Insert your embassy number)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContacts;