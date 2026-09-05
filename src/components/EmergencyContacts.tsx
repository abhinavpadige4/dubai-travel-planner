import React from 'react';

const EmergencyContacts: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 rounded-xl mb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8 text-white">
          Emergency Contacts
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-d4a373/50 transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="font-semibold text-d4a373 mb-3">Police</h3>
            <p className="text-white text-lg font-medium">999</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-d4a373/50 transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="font-semibold text-d4a373 mb-3">Ambulance</h3>
            <p className="text-white text-lg font-medium">998</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-d4a373/50 transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="font-semibold text-d4a373 mb-3">Fire</h3>
            <p className="text-white text-lg font-medium">997</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-d4a373/50 transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="font-semibold text-d4a373 mb-3">Tourist Police</h3>
            <p className="text-white text-lg font-medium">800-4444</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-d4a373/50 transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="font-semibold text-d4a373 mb-3">Your Embassy</h3>
            <p className="text-white text-lg font-medium">(insert your country's embassy number)</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-d4a373/50 transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="font-semibold text-d4a373 mb-3">Dubai Tourism</h3>
            <p className="text-white text-lg font-medium">800-555</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContacts;