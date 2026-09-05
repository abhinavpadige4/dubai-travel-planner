```tsx
import React, { useEffect, useState, useRef } from 'react';

interface DayCard {
  day: number;
  title: string;
  icon: string;
  description: string;
  highlights: string[];
  time: string;
}

const itineraryData: DayCard[] = [
  {
    day: 1,
    title: 'Burj Khalifa',
    icon: '🏗️',
    description: 'Visit the world\'s tallest building and enjoy breathtaking views from the observation decks on levels 124, 125, and 148.',
    highlights: ['At the Top (Level 124/125)', 'Burj Khalifa SKY (Level 148)', 'Dubai Mall & Fountain Show'],
    time: 'Full Day',
  },
  {
    day: 2,
    title: 'Desert Safari',
    icon: '🐪',
    description: 'Experience the thrill of dune bashing, camel riding, and a traditional Bedouin camp with BBQ dinner and entertainment.',
    highlights: ['Dune Bashing', 'Camel Riding', 'Sunset Photography', 'BBQ Dinner & Tanoura Dance'],
    time: 'Afternoon & Evening',
  },
  {
    day: 3,
    title: 'Dubai Marina',
    icon: '⛵',
    description: 'Explore the stunning waterfront district with its towering skyscrapers, yacht-lined marinas, and vibrant dining scene.',
    highlights: ['Marina Walk', 'Dubai Marina Mall', 'Abra Boat Ride', 'Beach Time at JBR'],
    time: 'Full Day',
  },
  {
    day: 4,
    title: 'Al Fahidi & Gold Souk',
    icon: '🕌',
    description: 'Step back in time at the historic Al Fahidi neighborhood and explore the dazzling Gold Souk with its glittering jewelry shops.',
    highlights: ['Al Fahidi Historical Neighborhood', 'Gold Souk', 'Spice Souk', 'Abra Ride across Dubai Creek'],
    time: 'Full Day',
  },
  {
    day: 5,
    title: 'Palm Jumeirah',
    icon: '🌴',
    description: 'Visit the iconic man-made island featuring luxury resorts, world-class restaurants, and the famous Atlantis The Palm.',
    highlights: ['Atlantis The Palm Aquarium', 'The View at The Palm', 'Lost Chambers Aquarium', 'Beach Club'],
    time: 'Full Day',
  },
  {
    day: 6,
    title: 'Dubai Frame',
    icon: '🖼️',
    description: 'Get a unique perspective of old and new Dubai from the iconic Dubai Frame, a 150-meter tall rectangular frame structure.',
    highlights: ['Glass Floor Walkway', 'Panoramic Views', 'Old Dubai Side', 'New Dubai Side'],
    time: 'Half Day',
  },
  {
    day: 7,
    title: 'Abu Dhabi Trip',
    icon: '🕌',
    description: 'Take a day trip to the capital city Abu Dhabi to visit the stunning Sheikh Zayed Grand Mosque and other landmarks.',
    highlights: ['Sheikh Zayed Grand Mosque', 'Louvre Abu Dhabi', 'Emirates Palace', 'Corniche Beach'],
    time: 'Full Day',
  },
  {
    day: 8,
    title: 'Ski Dubai',
    icon: '⛷️',
    description: 'Experience skiing and snowboarding in the middle of the desert at Ski Dubai inside the Mall of the Emirates.',
    highlights: ['Ski Slopes', 'Penguin Encounter', 'Snow Park Activities', 'Indoor Skiing'],
    time: 'Half Day',
  },
  {
    day: 9,
    title: 'Creek Dhow Cruise',
    icon: '🚢',
    description: 'Sail along the historic Dubai Creek on a traditional dhow boat, enjoying dinner and live entertainment.',
    highlights: ['Traditional Dhow Boat', 'Buffet Dinner', 'Live Entertainment', 'Dubai Skyline Views'],
    time: 'Evening',
  },
  {
    day: 10,
    title: 'Bluewaters Island',
    icon: '🎡',
    description: 'End your trip at Bluewaters Island, home to the iconic Ain Dubai observation wheel and numerous dining options.',
    highlights: ['Ain Dubai (Dubai Eye)', 'Beach Activities', 'Dining & Shopping', 'Sunset Views'],
    time: 'Full Day',
  },
];

const Itinerary: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-card]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section data-section="itinerary" ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            📅 Your Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              10-Day Itinerary
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A carefully curated day-by-day plan covering Dubai\'s most iconic attractions and hidden gems.
          </p>
        </div>

        {/* Day Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {itineraryData.map((day, index) => (
            <div
              key={day.day}
              data-card
              data-index={index}
              className={`group relative rounded-2xl bg-white/5 border border-amber-500/20 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:border-amber-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1 ${
                visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Day Badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-gray-900 font-bold text-sm shadow-lg">
                {day.day}
              </div>

              <div className="p-6">
                {/* Icon */}
                <div className="text-4xl mb-4">{day.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-amber-300 transition-colors">
                  {day.title}
                </h3>

                {/* Time */}
                <div className="flex items-center gap-1.5 text-sm text-amber-400/70 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {day.time}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {day.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {day.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-amber-500/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="h-1 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
