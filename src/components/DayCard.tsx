import React from 'react';

interface DayCardProps {
  day: {
    day: number;
    title: string;
    description: string;
  };
}

const DayCard: React.FC<DayCardProps> = ({ day }) => {
  return (
    <div className="bg-[#2D1B17]/80 backdrop-blur-sm border border-[#D4A373]/30 rounded-xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="bg-[#D4A373]/20 w-10 h-10 flex items-center justify-center rounded-full text-[#D4A373] font-bold">
          {day.day}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">{day.title}</h3>
          <p className="text-[#E8C29A]/90 text-sm">{day.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DayCard;