import React from 'react';
import DayCard from './DayCard';

const itineraryData = [
  { day: 1, title: 'Burj Khalifa', description: 'Visit the world\'s tallest building and enjoy panoramic views from the observation deck.' },
  { day: 2, title: 'Desert Safari', description: 'Thrilling dune bashing, camel riding, and traditional Bedouin camp experience.' },
  { day: 3, title: 'Dubai Marina', description: 'Stroll along the marina, enjoy waterfront dining, and take a yacht tour.' },
  { day: 4, title: 'Al Fahidi & Gold Souk', description: 'Explore historic Al Fahidi district and shop for gold in the famous Gold Souk.' },
  { day: 5, title: 'Palm Jumeirah', description: 'Visit the iconic palm-shaped island, Atlantis Hotel, and relax on pristine beaches.' },
  { day: 6, title: 'Dubai Frame', description: 'Walk through the architectural landmark offering old vs new Dubai views.' },
  { day: 7, title: 'Abu Dhabi Trip', description: 'Day trip to visit Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, and Yas Island.' },
  { day: 8, title: 'Ski Dubai', description: 'Enjoy skiing, snowboarding, and penguin encounters in the indoor ski resort.' },
  { day: 9, title: 'Creek Dhow Cruise', description: 'Traditional wooden boat ride along Dubai Creek with dinner and entertainment.' },
  { day: 10, title: 'Bluewaters Island', description: 'Visit Ain Dubai, the world\'s largest observation wheel, and enjoy beachfront dining.' }
];

const ItineraryList: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Day-by-Day Itinerary
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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