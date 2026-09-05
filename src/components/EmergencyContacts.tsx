import React from 'react';

const EmergencyContacts: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 rounded-xl mb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8 text-white">
          Emergency Contacts
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414A2 2 0 009.414 8H6a2 2 0 00-2 2v2a2 2 0 002 2h2.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
              Police
            </h3>
            <p className="text-xl font-bold text-red-400">999</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 10a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              Ambulance
            </h3>
            <p className="text-xl font-bold text-amber-400">998</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 10a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              Fire
            </h3>
            <p className="text-xl font-bold text-red-500">997</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2v-4h2v4z" />
              </svg>
              Tourist Police
            </h3>
            <p className="text-xl font-bold text-blue-400">800-4444</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a6 6 0 100-12 6 6 0 000 12zM7 10a1 1 0 100-2h2a1 1 0 100 2H7z" clipRule="evenodd" />
              </svg>
              Your Embassy
            </h3>
            <p className="text-xl font-bold text-green-400">(insert your country's embassy number)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContacts;