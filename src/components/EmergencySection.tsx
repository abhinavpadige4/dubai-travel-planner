import React from 'react';

const EmergencySection: EmergencySectionProps = {
  title?: string;
};

const EmergencySection: React.FC<EmergencySectionProps> = ({ title = 'Emergency Contacts' }) => {
  return (
    <section className="py-12 bg-gray-900/50 backdrop-blur-sm border border-sand/20 rounded-2xl mb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-terracotta to-sunset-clip text-transparent bg-[length:200%_100%] animate-[gradientShift_3s_ease_infinite]">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-sand/20">
            <h3 className="text-xl font-semibold text-terracotta mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l9 18" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 6l-9 18" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18h12" />
              </svg>
              Police
            </h3>
            <p className="text-2xl font-bold text-white mb-2">999</p>
            <p className="text-gray-400">For all emergencies requiring police assistance</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-sand/20">
            <h3 className="text-xl font-semibold text-terracotta mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11v2a2 2 0 002 2h2a2 2 0 002-2v-2m-2-4l2-2-2-2m2 2l2 2-2 2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9a2 2 0 012-2h2.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2H6a2 2 0 01-2-2V9z" />
              </svg>
              Ambulance
            </h3>
            <p className="text-2xl font-bold text-white mb-2">998</p>
            <p className="text-gray-400">For medical emergencies and ambulance services</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-sand/20">
            <h3 className="text-xl font-semibold text-terracotta mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0-2c2.21 0 4 1.343 4 3h2c0-1.657-1.343-3-3-3s-3 1.343-3 3h2c0-1.656-1.789-3-4-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12a8 8 0 018-8v8z" />
              </svg>
              Tourism Police
            </h3>
            <p className="text-2xl font-bold text-white mb-2">800-4444</p>
            <p className="text-gray-400">Special assistance for tourists and visitors</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-sand/20">
            <h3 className="text-xl font-semibold text-terracotta mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l9 18" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 6l-9 18" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18h12" />
              </svg>
              General Inquiries
            </h3>
            <p className="text-2xl font-bold text-white mb-2">800-5555</p>
            <p className="text-gray-400">Dubai Tourism general information and support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;

// Add keyframes for gradient animation
const style = document.createElement('style');
style.textContent = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;
document.head.appendChild(style);