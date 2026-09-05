import React, { useEffect, useState } from 'react';

interface DayCardProps {
  day: number;
  title: string;
  icon: string;
  description: string;
}

const DayCard: React.FC<DayCardProps> = ({ day, title, icon, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150 * day);
    return () => clearTimeout(timer);
  }, [day]);

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl border border-[#D2B48C]/30 bg-white/10 backdrop-blur-md
        shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        hover:shadow-[0_12px_40px_rgba(210,180,140,0.25)] hover:border-[#D2B48C]/50 hover:scale-[1.02]
      `}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E2725B] to-[#F4A261]" />
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#E2725B] to-[#F4A261] text-white font-bold text-sm shadow-md">
            {day}
          </span>
          <span className="text-2xl" role="img" aria-label={title}>
            {icon}
          </span>
        </div>
        <h3 className="text-xl font-bold text-[#F4A261] mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default DayCard;