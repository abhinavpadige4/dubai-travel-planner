import React from 'react';

interface DayCardProps {
  day: number;
  title: string;
  description?: string;
}

const DayCard: React.FC<DayCardProps> = ({ day, title, description }) => {
  return (
    <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:scale-[1.05] transition-transform duration-300 ease-in-out cursor-pointer">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{day}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {description && (
            <p className="text-sm text-white/60 mt-1">{description}</p>
          )}
        </div>
      </div>
      <div className="h-0.5 bg-white/20"></div>
    </div>
  );
};

export default DayCard;