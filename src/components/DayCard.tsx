import React from 'react';

interface DayCardProps {
  day: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const DayCard: React.FC<DayCardProps> = ({ day, title, icon: Icon, description }) => {
  return (
    <div className="relative bg-[rgba(210,180,140,0.08)] backdrop-blur-sm border border-[rgba(210,180,140,0.2)] rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(210,180,140,0.3)] transition-all duration-500 transform hover:-translate-y-1">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 flex items-center justify-center bg-[rgba(210,180,140,0.15)] rounded-xl">
          <Icon className="text-[rgba(210,180,140,0.8)] h-6)] text-xl" />
        </div>
        <div className="flex-1">
          <h3 className="text-[rgba(210,180,140,0.9)] font-semibold text-lg mb-2">
            Day {day}
          </h3>
          <h2 className="text-white font-bold text-xl mb-3">
            {title}
          </h2>
          <p className="text-[rgba(210,180,140,0.7)] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(210,180,140,0.05)] to-[rgba(210,180,140,0.01)] opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default DayCard;