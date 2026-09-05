```tsx
import React, { useState } from 'react';

interface DayData {
  day: number;
  title: string;
  icon: string;
  description: string;
  highlights: string[];
  time: string;
  cost: string;
}

const itineraryData: DayData[] = [
  {
    day: 1,
    title: 'Burj Khalifa',
    icon: '🏗️',
    description: 'Visit the world\'s tallest building and enjoy breathtaking views from the observation decks on levels 124 and 125.',
    highlights: ['At the Top observation deck', 'Dubai Mall shopping', 'Aquarium visit', 'Dinner at Souk Al Bahar'],
    time: 'Full Day',
    cost: '$40-80',
  },
  {
    day: 2,
    title: 'Desert Safari',
    icon: '🐪',
    description: 'Experience the thrill of dune bashing, camel riding, and a traditional Bedouin camp under the stars.',
    highlights: ['Dune bashing adventure', 'Camel riding', 'Sandboarding', 'BBQ dinner & entertainment'],
    time: 'Afternoon & Evening',
    cost: '$60-120',
  },
  {
    day: 3,
    title: 'Dubai Marina',
    icon: '⛵',
    description: 'Explore the stunning waterfront district with its towering skyscrapers, yacht-lined marinas, and vibrant dining scene.',
    highlights: ['Marina Walk promenade', 'Dubai Marina Mall', 'Yacht cruise', 'Beach time at JBR'],
    time: 'Full Day',
    cost: '$30-100',
  },
  {
    day: 4,
    title: 'Al Fahidi & Gold Souk',
    icon: '🕌',
    description: 'Step back in time at the historic Al Fahidi neighborhood and get lost in the dazzling Gold Souk.',
    highlights: ['Al Fahidi Historical District', 'Abra boat ride', 'Gold Souk shopping', 'Spice Souk exploration'],
    time: 'Full Day',
    cost: '$10-30',
  },
  {
    day: 5,
    title: 'Palm Jumeirah',
    icon: '🌴',
    description: 'Visit the iconic man-made island featuring luxury resorts, world-class dining, and the Atlantis Aquaventure.',
    highlights: ['Atlantis Aquaventure', 'The View at The Palm', 'Lost Chambers Aquarium', 'Beach clubs'],
    time: 'Full Day',
    cost: '$50-150',
  },
  {
    day: 6,
    title: 'Dubai Frame',
    icon: '🖼️',
    description: 'Walk through the massive picture frame offering panoramic views of old and new Dubai from its glass-floored bridge.',
    highlights: ['Glass floor walkway', 'Old Dubai view', 'New Dubai view', 'Zabeel Park nearby'],
    time: 'Half Day',
    cost: '$15-25',
  },
  {
    day: 7,
    title: 'Abu Dhabi Day Trip',
    icon: '🕌',
    description: 'Take a day trip to the capital to visit the magnificent Sheikh Zayed Grand Mosque and Yas Island attractions.',
    highlights: ['Sheikh Zayed Grand Mosque', 'Yas Island', 'Ferrari World', 'Louvre Abu Dhabi'],
    time: 'Full Day',
    cost: '$80-200',
  },
  {
    day: 8,
    title: 'Ski Dubai',
    icon: '⛷️',
    description: 'Experience skiing and snowboarding in the middle of the desert at the indoor ski resort inside Mall of the Emirates.',
    highlights: ['Ski slopes', 'Penguin encounter', 'Snow park activities', 'Indoor snow experience'],
    time: 'Half Day',
    cost: '$50-100',
  },
  {
    day: 9,
    title: 'Creek Dhow Cruise',
    icon: '🚢',
    description: 'Sail along the historic Dubai Creek on a traditional wooden dhow while enjoying dinner and live entertainment.',
    highlights: ['Traditional dhow boat', 'Buffet dinner', 'Live entertainment', 'Creek skyline views'],
    time: 'Evening',
    cost: '$40-80',
  },
  {
    day: 10,
    title: 'Bluewaters Island',
    icon: '🎡',
    description: 'End your trip at Bluewaters Island, home to the iconic Ain Dubai observation wheel and beachfront dining.',
    highlights: ['Ain Dubai observation wheel', 'Beach activities', 'Dining options', 'Sunset views'],
    time: 'Full Day',
    cost: '$30-80',
  },
];

interface ItineraryProps {
  isVisible: boolean;
}

const Itinerary: React.FC<ItineraryProps> = ({ isVisible }) => {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 glass-card rounded-full text-amber-400 text-sm font-medium mb-4">
            📅 Your Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">10-Day Itinerary</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A carefully curated day-by-day guide to experiencing the best of Dubai
          </p>
        </div>

        {/* Day Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itineraryData.map((day, index) => (
            <div
              key={day.day}
              className={`glass-card glass-card-hover rounded-2xl p-6 cursor-pointer transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
            >
              {/* Day Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-900/30">
                    {day.day}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{day.title}</h3>
                    <span className="text-amber-400/70 text-sm">{day.time}</span>
                  </div>
                </div>
                <span className="text-3xl">{day.icon}</span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {day.description}
              </p>

              {/* Cost Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-500">Estimated Cost</span>
                <span className="px-3 py-1 bg-amber-900/30 text-amber-400 text-sm font-semibold rounded-full border border-amber-700/30">
                  {day.cost}
                </span>
              </div>

              {/* Expandable Highlights */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedDay === day.day ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-3 border-t border-amber-800/20">
                  <h4 className="text-amber-400 text-sm font-semibold mb-2">✨ Highlights</h4>
                  <ul className="space-y-2">
                    {day.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Expand indicator */}
              <div className="flex items-center justify-center mt-3">
                <svg
                  className={`w-5 h-5 text-amber-500/50 transition-transform duration-300 ${
                    expandedDay === day.day ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
