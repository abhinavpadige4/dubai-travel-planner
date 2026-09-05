import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const DayCard = ({ day }) => {
  return (
    <div className="glass-card group hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={`https://source.unsplash.com/600x400/?dubai,${day.id === 3 ? 'desert' : day.id === 4 ? 'palm' : 'city'}`} 
          alt={day.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/600x400/1e293b/f59e0b?text=Dubai+Day+' + day.id;
          }}
        />
        <div className="absolute top-4 left-4 bg-amber-500 text-dark font-bold px-3 py-1 rounded-full text-sm">
          Day {day.id}
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
          {day.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">
          {day.desc}
        </p>
        <button className="flex items-center text-amber-500 text-sm font-semibold hover:text-amber-400 transition-colors mt-auto">
          View Details <FiChevronRight className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default DayCard;