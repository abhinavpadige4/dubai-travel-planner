import React from 'react';
import DayCard from './DayCard';

const itinerary = [
  { day: 1, title: 'Burj Khalifa', description: 'Visit the world\'s tallest building. Go to At The Top observation deck for panoramic views.' },
  { day: 2, title: 'Desert Safari', description: 'Experience dune bashing, camel riding, and a traditional Bedouin camp with BBQ dinner.' },
  { day: 3, title: 'Dubai Marina', description: 'Stroll along the marina, take a dhow cruise, and enjoy waterfront dining.' },
  { day: 4, title: 'Al Fahidi & Gold Souk', description: 'Explore historic Al Fahidi Fort and haggle for gold in the bustling souk.' },
  { day: 5, title: 'Palm Jumeirah', description: 'Visit Atlantis, The Palm, relax on the beach, and see the iconic palm-shaped island.' },
  { day: 6, title: 'Dubai Frame', description: 'Walk through the architectural landmark offering old vs new Dubai views.' },
  { day: 7, title: 'Abu Dhabi Trip', description: 'Day trip to Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, and Yas Island.' },
  { day: 8, title: 'Ski Dubai', description: 'Hit the slopes at the indoor ski resort in Mall of the Emirates.' },
  { day: 9, title: 'Creek Dhow Cruise', description: 'Cruise Dubai Creek on a traditional dhow with dinner and live entertainment.' },
  { day: 10, title: 'Bluewaters Island', description: 'See Ain Dubai (world\'s largest observation wheel) and enjoy beachfront dining.' }
];

const ItineraryList: React.FC = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#D4A373] to-[#E8C29A]">
        Day\u2011by\u2011Day Itinerary
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {itinerary.map((day) => (
          <DayCard key={day.day} day={day} />
        ))}
      </div>
    </section>
  );
};

export default ItineraryList;