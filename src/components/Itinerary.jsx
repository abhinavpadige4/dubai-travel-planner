import React from 'react';
import { itineraryDays } from '../utils/constants';
import DayCard from './DayCard';

const Itinerary = () => {
  return (
    <div className="w-full">
      <h2 className="section-title">
        Your <span className="text-amber-500">10-Day</span> Itinerary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itineraryDays.map((day) => (
          <DayCard key={day.id} day={day} />
        ))}
      </div>
    </div>
  );
};

export default Itinerary;