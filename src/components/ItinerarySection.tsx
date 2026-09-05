import React from 'react';
import DayCard from './DayCard';

const itineraryData = [
  {
    day: 1,
    title: "Burj Khalifa",
    icon: "🏙️",
    description: "Visit the world's tallest building. Experience breathtaking views from At the Top observation deck on levels 124 and 125. Best visited at sunset for golden hour views over the city."
  },
  {
    day: 2,
    title: "Desert Safari",
    icon: "🐪",
    description: "Thrilling 4x4 dune bashing adventure followed by camel riding, sandboarding, and a traditional Bedouin camp experience with BBQ dinner, henna painting, and live entertainment under the stars."
  },
  {
    day: 3,
    title: "Dubai Marina",
    icon: "⛵",
    description: "Stroll along the Marina Walk, admire luxury yachts, and enjoy waterfront dining. Take an abra boat ride to see the skyline from the water, then explore The Beach at JBR for shopping and relaxation."
  },
  {
    day: 4,
    title: "Al Fahidi & Gold Souk",
    icon: "🕌",
    description: "Explore the historic Al Fahidi Fort and Dubai Museum, then wander through the labyrinthine alleys of the Gold Souk. Discover traditional architecture, wind towers, and haggle for exquisite gold jewelry."
  },
  {
    day: 5,
    title: "Palm Jumeirah",
    icon: "🌴",
    description: "Visit the iconic man-made palm-shaped island. See Atlantis The Palm, walk along the Boardwalk, and enjoy beach access. Consider a monorail ride for panoramic views of the fronds and crescent."
  },
  {
    day: 6,
    title: "Dubai Frame",
    icon: "🖼️",
    description: "Walk through this architectural landmark that 'frames' old and new Dubai. Enjoy panoramic views from the sky-deck glass bridge, showcasing historic Deira on one side and modern skyline on the other."
  },
  {
    day: 7,
    title: "Abu Dhabi Day Trip",
    icon: "🕌",
    description: "Visit the magnificent Sheikh Zayed Grand Mosque, explore the Louvre Abu Dhabi, and see the Emirates Palace. Experience the contrast between traditional heritage and futuristic architecture in the UAE capital."
  },
  {
    day: 8,
    title: "Ski Dubai",
    icon: "❄️",
    description: "Escape the desert heat at Middle East's first indoor ski resort. Enjoy skiing, snowboarding, or simply play in the snow park. Meet the penguins and experience sub-zero temperatures in the heart of the desert."
  },
  {
    day: 9,
    title: "Creek Dhow Cruise",
    icon: "🚤",
    description: "Sail along Dubai Creek on a traditional wooden dhow. Enjoy views of historic buildings, abras, and the bustling trade area. Includes dinner with live Tanoura dance and music performances."
  },
  {
    day: 10,
    title: "Bluewaters Island",
    icon: "🎡",
    description: "Visit Ain Dubai, the world's largest observation wheel. Explore the retail and dining district, relax at the beach, and enjoy panoramic views of Dubai Marina and the Arabian Gulf."
  }
];

const ItinerarySection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-sand mb-12">10-Day Itinerary</h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {itineraryData.map((day) => (
            <DayCard
              key={day.day}
              day={day.day}
              title={day.title}
              icon={day.icon}
              description={day.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;