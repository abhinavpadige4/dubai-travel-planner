```tsx
import React, { useState, useEffect, useRef } from 'react';

interface Contact {
  name: string;
  number: string;
  icon: string;
  description: string;
  color: string;
}

const contacts: Contact[] = [
  {
    name: 'Police',
    number: '999',
    icon: '🚔',
    description: 'Emergency police services for all urgent situations',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Ambulance',
    number: '998',
    icon: '🚑',
    description: 'Emergency medical services and ambulance',
    color: 'from-red-500 to-red-600',
  },
  {
    name: 'Tourism Police',
    number: '800-4444',
    icon: '🛡️',
    description: 'Tourism police for tourist-related issues and assistance',
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Fire Department',
    number: '997',
    icon: '🚒',
    description: 'Emergency fire and rescue services',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Marina Police',
    number: '800-6666',
    icon: '⚓',
    description: 'Maritime and water-related emergencies',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Roadside Assistance',
    number: '800-999',
    icon: '🔧',
    description: 'RTA roadside assistance for vehicle breakdowns',
    color: 'from-green-500 to-emerald-500',
  },
];

const EmergencyContacts: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () =>