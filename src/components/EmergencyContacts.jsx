import React from 'react';
import { emergencyContacts } from '../utils/constants';
import { FiPhone } from 'react-icons/fi';

const EmergencyContacts = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="section-title">
        <span className="text-amber-500">Emergency</span> Contacts
      </h2>
      
      <div className="glass-card p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyContacts.map((contact, index) => (
            <div 
              key={index} 
              className="flex items-center p-4 bg-dark/30 rounded-lg border border-white/5 hover:border-amber-500/30 transition-colors"
            >
              <div className="text-2xl mr-4">{contact.icon}</div>
              <div>
                <p className="text-gray-400 text-sm">{contact.name}</p>
                <p className="text-white font-bold text-lg">{contact.number}</p>
              </div>
              <a 
                href={`tel:${contact.number.replace(/[^0-9+]/g, '')}`}
                className="ml-auto text-amber-500 hover:text-amber-400"
              >
                <FiPhone size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;