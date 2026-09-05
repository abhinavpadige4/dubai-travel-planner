import React from 'react';
import DayCard from './DayCard';

const itineraryData = [
  { day: 1, title: 'Burj Khalifa', icon: '🏙️', description: 'Visit the world\'s tallest building. Enjoy panoramic views from the At the Top observation decks on levels 124, 125, and 148.' },
  { day: 2, title: 'Desert Safari', icon: '🐪', description: 'Experience thrilling dune bashing, camel rides, and a traditional Bedouin camp with BBQ dinner and belly dancing under the stars.' },
  { day: 3, title: 'Dubai Marina', icon: '🌊', description: 'Stroll along the waterfront promenade, enjoy yacht cruises, and explore luxury dining and shopping at Marina Walk.' },
  { day: 4, title: 'Al Fahidi & Gold Souk', icon: '🕌', description: 'Explore historic wind-tower architecture, visit the Dubai Museum, and haggle for gold and spices in the traditional souks.' },
  { day: 5, title: 'Palm Jumeirah', icon: '🌴', description: 'Relax at Atlantis The Palm, visit The View at The Palm, and enjoy luxury beach clubs and water parks.' },
  { day: 6, title: 'Dubai Frame', icon: '🖼️', description: 'Step inside the giant golden frame for 360° views of old and new Dubai. Experience immersive multimedia shows on the glass floor.' },
  { day: 7, title: 'Abu Dhabi Trip', icon: '🕌', description: 'Day trip to the capital. Visit Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, and the Corniche waterfront.' },
  { day: 8, title: 'Ski Dubai', icon: '⛷️', description: 'Indoor skiing and snowboarding in the desert. Meet penguins, enjoy snow tubing, and experience alpine activities year-round.' },
  { day: 9, title: 'Creek Dhow Cruise', icon: '🚢', description: 'Traditional wooden boat dinner cruise along Dubai Creek. Enjoy live entertainment, buffet dining, and illuminated skyline views.' },
  { day: 10, title: 'Bluewaters Island', icon: '🎡', description: 'Ride the Ain Dubai observation wheel, explore retail and dining outlets, and enjoy family-friendly attractions and beaches.' }
];

const ItinerarySection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-to-b from-[#1A1512] to-[#0F0C0A]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E2725B] to-[#F4A261] bg-clip-text text-transparent mb-3">
          10-Day Itinerary
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A carefully curated journey through Dubai's most iconic landmarks, cultural experiences, and adventure activities.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itineraryData.map((item) => (
          <DayCard
            key={item.day}
            day={item.day}
            title={item.title}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ItinerarySection;