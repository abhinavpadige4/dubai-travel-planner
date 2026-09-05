import React from 'react';

const EmergencySection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900/50 backdrop-blur-sm border border-sand/20 rounded-2xl mb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-terracotta">
          Emergency Contacts
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-sand/10 border border-sand/20 rounded-xl p-6 hover:bg-sand/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-terracotta mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Police
            </h3>
            <p className="text-lg font-medium text-white">999</p>
          </div>
          <div className="bg-sand/10 border border-sand/20 rounded-xl p-6 hover:bg-sand/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-terracotta mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M6 6a9 9 0 0118 0c0 4.418-2.91 8.18-7 9.5V21a2 2 0 01-2 2H5a2 2 0 01-2-2v-3.5c-4.09-1.32-7-5.082-7-9.5z" />
              </svg>
              Ambulance
            </h3>
            <p className="text-lg font-medium text-white">998</p>
          </div>
          <div className="bg-sand/10 border border-sand/20 rounded-xl p-6 hover:bg-sand/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-terracotta mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M6 6a9 9 0 0118 0c0 4.418-2.91 8.18-7 9.5V21a2 2 0 01-2 2H5a2 2 0 01-2-2v-3.5c-4.09-1.32-7-5.082-7-9.5z" />
              </svg>
              Tourism Police
            </h3>
            <p className="text-lg font-medium text-white">800-4444</p>
          </div>
          <div className="bg-sand/10 border border-sand/20 rounded-xl p-6 hover:bg-sand/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-terracotta mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M6 6a9 9 0 0118 0c0 4.418-2.91 8.18-7 9.5V21a2 2 0 01-2 2H5a2 2 0 01-2-2v-3.5c-4.09-1.32-7-5.082-7-9.5z" />
              </svg>
              General Inquiries
            </h3>
            <p className="text-lg font-medium text-white">800-5555</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;