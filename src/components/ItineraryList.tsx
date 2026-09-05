import React from 'react';
import DayCard from './DayCard';

const itineraryData = [
  { day: 1, title: 'Burj Khalifa', description: 'Visit the world\'s tallest building, enjoy panoramic views from observation decks' },
  { day: 2, title: 'Desert Safari', description: 'Experience dune bashing, camel riding, and traditional Bedouin camp' },
  { day: 3, title: 'Dubai Marina', description: 'Stroll along the marina, enjoy waterfront dining and yacht views' },
  { day: 4, title: 'Al Fahidi & Gold Souk', description: 'Explore historic district and traditional gold market' },
  { day: 5, title: 'Palm Jumeirah', description: 'Visit the iconic palm-shaped island, Atlantis Hotel, and beach clubs' },
  { day: 6, title: 'Dubai Frame', description: 'See old and new Dubai from this architectural landmark' },
  { day: 7, title: 'Abu Dhabi Trip', description: 'Day trip to capital city: Sheikh Zayed Mosque, Louvre Abu Dhabi' },
  { day: 8, title: 'Ski Dubai', description: 'Enjoy indoor skiing and snow activities in the Mall of the Emirates' },
  { day: 9, title: 'Creek Dhow Cruise', description: 'Traditional wooden boat ride along Dubai Creek with dinner' },
  { day: 10, title: 'Bluewaters Island', description: 'Visit Ain Dubai (world\'s largest observation wheel) and beachfront promenade' }
];

const ItineraryList: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Day-by-Day Itinerary
      </h2>
      <div className="grid gap-6">
        {/* Mobile: 1 column */}
        <div className="space-y-6">
          {itineraryData.map((day) => (
            <DayCard
              key={day.day}
              day={day.day}
              title={day.title}
              description={day.description}
            />
          ))}
        </div>
        
        {/* Tablet: 2 columns */}
        <div className="hidden md:block grid grid-cols-2 gap-6">
          {itineraryData.map((day) => (
            <DayCard
              key={day.day}
              day={day.day}
              title={day.title}
              description={day.description}
            />
          ))}
        </div>
        
        {/* Desktop: 3 columns */}
        <div className="hidden lg:block grid grid-cols-3 gap-6">
          {itineraryData.map((day) => (
            <DayCard
              key={day.day}
              day={day.day}
              title={day.title}
              description={day.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItineraryList;