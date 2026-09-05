```tsx
import React, { useState } from 'react';

interface EmergencyContact {
  name: string;
  icon: string;
  number: string;
  description: string;
  color: string;
}

const emergencyContacts: EmergencyContact[] = [
  {
    name: 'Police',
    icon: '🚔',
    number: '999',
    description: 'Emergency police services',
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Ambulance',
    icon: '🚑',
    number: '998',
    description: 'Emergency medical services',
    color: 'from-red-600 to-red-800',
  },
  {
    name: 'Tourism Police',
    icon: '👮',
    number: '800-4444',
    description: 'Tourist assistance & complaints',
    color: 'from-amber-600 to-amber-800',
  },
  {
    name: 'Fire Department',
    icon: '🚒',
    number: '997',
    description: 'Fire & rescue services',
    color: 'from-orange-600 to-orange-800',
  },
  {
    name: 'Dubai Emergency',
    icon: '📞',
    number: '901',
    description: 'Non-emergency government services',
    color: 'from-purple-600 to-purple-800',
  },
  {
    name: 'Roadside Assistance',
    icon: '🔧',
    number: '800-NAS (627)',
    description: 'RTA roadside help',
    color: 'from-teal-600 to-teal-800',
  },
];

const usefulNumbers: { name: string; number: string; icon: string }[] = [
  { name: 'Dubai Metro Helpline', number: '800-5111', icon: '