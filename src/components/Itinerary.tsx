```typescript
import React, { useState } from 'react'

interface DayData {
  day: number
  title: string
  icon: string
  description: string
  highlights: string[]
  time: string
  cost: string
}

const itineraryData: DayData[] = [
  {
    day: 1,
    title: 'Burj Khalifa',
    icon: '🏗️',
    description:
      'Visit the world\'s tallest building and enjoy breathtaking views from the observation decks on levels 124 and 125.',
    highlights: [
      'At the Top (Level 124/125)',
      'Dubai Mall Aquarium',
      'Dubai Fountain Show',
      'Souk Al Bahar dining',
    ],
    time: 'Full Day',
    cost: '$40-150',
  },
  {
    day: 2,
    title: 'Desert Safari',
    icon: '🐪',
    description:
      'Experience the thrill of dune bashing, camel riding, and a traditional Bedouin camp under the stars.',
    highlights: [
      'Dune bashing adventure',
      'Camel riding',
      'Sandboarding',
      'BBQ dinner & entertainment',
    ],
    time: 'Afternoon-Evening',
    cost: '$60-120',
  },
  {
    day: 3,
    title: 'Dubai Marina',
    icon: '⛵',
    description:
      'Explore the stunning waterfront district with its towering skyscrapers, yacht-lined marinas, and vibrant dining scene.',
    highlights: [
      'Marina Walk promenade',
      'Dubai Marina Metro',
      'Ain Dubai observation wheel',
      'Beach time at JBR',
    ],
    time: 'Full Day',
    cost: '$30-80',
  },
  {
    day: 4,
    title: 'Al Fahidi & Gold Souk',
    icon: '🏺',
    description:
      'Step back in time at the historic Al Fahidi neighborhood and get lost in the dazzling Gold Souk.',
    highlights: [
      'Al Fahidi Historical District',
      'Dubai Museum',
      'Abra boat ride across creek',
      'Gold & Spice Souks',
    ],
    time: 'Full Day',
    cost: '$10-30',
  },
  {
    day: 5,
    title: 'Palm Jumeirah',
    icon: '🌴',
    description:
      'Visit the iconic man-made island featuring luxury resorts, world-class dining, and the Atlantis Aquaventure.',
    highlights: [
      'Atlantis Aquaventure',
      'The View at The Palm',
      'Lost Chambers Aquarium',
      'Beach clubs & dining',
    ],
    time: 'Full Day',
    cost: '$80-200',
  },
  {
    day: 6,
    title: 'Dubai Frame',
    icon: '🖼️',
    description:
      'Walk across the glass floor of Dubai Frame for panoramic views of old and new Dubai.',
    highlights: [
      'Glass floor walkway',
      'Old Dubai panorama',
      'New Dubai panorama',
      'Zabeel Park nearby',
    ],
    time: 'Half Day',
    cost: '$15-25',
  },
  {
    day: 7,
    title: 'Abu Dhabi Day Trip',
    icon: '🕌',
    description:
      'Take a day trip to the capital to visit the magnificent Sheikh Zayed Grand Mosque and Yas Island.',
    highlights: [
      'Sheikh Zayed Grand Mosque',
      'Yas Island & Ferrari World',
      'Louvre Abu Dhabi',
      'Emirates Palace exterior',
    ],
    time: 'Full Day',
    cost: '$50-150',
  },
  {
    day: 8,
    title: 'Ski Dubai',
    icon: '⛷️',
    description:
      'Experience snow and skiing in the middle of the desert at the indoor ski resort inside Mall of the Emirates.',
    highlights: [
      'Ski & snowboarding',
      'Penguin enclosure',
      'Snow park activities',
      'Mall of the Emirates shopping',
    ],
    time: 'Half Day',
    cost: '$50-100',
  },
  {
    day: 9,
    title: 'Creek Dhow Cruise',
    icon: '🚢',
    description:
      'Sail along the historic Dubai Creek on a traditional dhow boat with dinner and live entertainment.',
    highlights: [
      'Traditional dhow boat',
      'Buffet dinner onboard',
      'Live entertainment',
      'Creek skyline views',
    ],
    time: 'Evening',
    cost: '$40-80',
  },
  {
    day: 10,
    title: 'Bluewaters Island',
    icon: '🎡',
    description:
      'End your trip at Bluewaters Island with Ain Dubai, beach clubs, and a spectacular farewell dinner.',
    highlights: [
      'Ain Dubai observation wheel',
      'Beach club relaxation',
      'Fine dining experience',
      'Sunset photo session',
    ],
    time: 'Full Day',
    cost: '$40-120',
  },
]

const Itinerary: React.FC = () => {
  const [expandedDay, setExpandedDay] = useState<number | null>(null)

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day)
  }

  return (
    <div className="py-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="section-title gradient-text">10-Day Itinerary</h2>
        <p className="section-subtitle">
          A carefully curated journey through Dubai's most iconic experiences
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-terracotta to-sunset mx-auto rounded-full" />
      </div>

      {/* Day Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itineraryData.map((day, index) => (
          <div
            key={day.day}
            className="day-card group"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => toggleDay(day.day)}
          >
            {/* Day Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-terracotta to-sunset flex items-center justify-center text-xl shadow-lg">
                  {day.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold text-terracotta-light uppercase tracking-wider">
                    Day {day.day}
                  </span>
                  <h3 className="text-lg font-bold text-sand-100 group-hover:text-sand-50 transition-colors">
                    {day.title}
                  </h3>
                </div>
              </div>
              <svg
                className={`w-5 h-5 text-sand-400 transition-transform duration-300 ${
                  expandedDay === day.day ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Description */}
            <p className="text-sand-400 text-sm leading-relaxed mb-4">
              {day.description}
            </p>

            {/* Quick Info */}
            <div className="flex items-center gap-4 text-xs text-sand-500 mb-3">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {day.time}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {day.cost}
              </span>
            </div>

            {/* Expanded Highlights */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                expandedDay === day.day ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pt-3 border-t border-desert-border">
                <h4 className="text-sm font-semibold text-sand-300 mb-2">Highlights</h4>
                <ul className="space-y-2">
                  {day.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-sand-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-terracotta to-sunset flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Itinerary
