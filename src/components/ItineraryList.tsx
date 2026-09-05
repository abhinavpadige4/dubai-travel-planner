import React from 'react';
import DayCard from './DayCard';

const itineraryData = [
  { day: 1, title: 'Burj Khalifa', description: 'Visit the world\'s tallest building. Experience breathtaking views from the observation decks on levels 124 and 125.' },
  { day: 2, title: 'Desert Safari', description: 'Thrilling dune bashing, camel riding, traditional Bedouin camp experience with BBQ dinner and cultural show.' },
  { day: 3, title: 'Dubai Marina', description: 'Stroll along the marina walk, enjoy yacht views, and explore the vibrant waterfront promenade with cafes and boutiques.' },
  { day: 4, title: 'Al Fahidi & Gold Souk', description: 'Explore the historic Al Fahidi district and wander through the legendary Gold Souk with its dazzling displays of jewelry.' },
  { day: 5, title: 'Palm Jumeirah', description: 'Visit the iconic palm-shaped island. See Atlantis The Palm and enjoy beach time or a monorail ride.' },
  { day: 6, title: 'Dubai Frame', description: 'Walk through the architectural landmark that frames old and new Dubai. Enjoy panoramic views from the sky deck.' },
  { day: 7, title: 'Abu Dhabi Trip', description: 'Day trip to the capital city. Visit Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, and Yas Island attractions.' },
  { day: 8, title: 'Ski Dubai', description: 'Experience real snow in the desert! Ski, snowboard, or play with penguins at this indoor winter wonderland.' },
  { day: 9, title: 'Creek Dhow Cruise', description: 'Traditional wooden boat cruise along Dubai Creek. Enjoy dinner with views of historic buildings and modern skyline.' },
  { day: 10, title: 'Bluewaters Island', description: 'Visit Ain Dubai, the world\'s largest observation wheel. Enjoy beachfront dining and entertainment options.' }
];

const ItineraryList: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
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