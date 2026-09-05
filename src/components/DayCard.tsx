import React from 'react';

interface DayCardProps {
  day: number;
  title: string;
  icon: string;
  description: string;
}

const DayCard: React.FC<DayCardProps> = ({ day, title, icon, description }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-sand/30 rounded-xl p-6 hover:border-sand/50 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-terracotta to-sunset flex items-center justify-center rounded-lg text-white text-xl">
          {icon}
        </div>
        <div>
          <h3 className="text-sand font-bold text-lg mb-2">Day {day}</h3>
          <p className="text-gray-300 font-medium">{title}</p>
          <p className="text-gray-400 text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DayCard;