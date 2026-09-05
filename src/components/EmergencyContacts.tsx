import React from 'react';

const EmergencyContacts: React.FC = () => {
  const contacts = [
    { label: 'Police', number: '999' },
    { label: 'Ambulance', number: '998' },
    { label: 'Fire', number: '997' },
    { label: 'Dubai Tourism Hotline', number: '800 555' },
    { label: 'Your Country Embassy', number: 'Check local directory' }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white mb-4">Emergency Contacts</h2>
      <div className="space-y-3">
        {contacts.map((contact, index) => (
          <div key={index} className="flex justify-between items-center bg-white/10 border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-colors duration-300">
            <span className="text-white font-medium">{contact.label}</span>
            <span className="text-gray-300">{contact.number}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmergencyContacts;