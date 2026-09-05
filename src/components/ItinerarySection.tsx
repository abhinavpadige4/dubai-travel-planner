import React from 'react';
import DayCard from './DayCard';

const icons = {
  burjKhalifa: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h12m5-5v6m0 0l-3 3m3-3l-3-3"/></svg>,
  desertSafari: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>,
  marina: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2"/></svg>,
  goldSouk: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.5 10L12 14.5l4.5-4M12 14.5H19"/></svg>,
  palmJumeirah: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  dubaiFrame: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h12m5-5v6m0 0l-3 3m3-3l-3-3"/></svg>,
  abuDhabi: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h12m5-5v6m0 0l-3 3m3-3l-3-3"/></svg>,
  skiDubai: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h12m5-5v6m0 0l-3 3m3-3l-3-3"/></svg>,
  dhowCruise: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l0 7m0 0l-3 3m3-3l3 3"/></svg>,
  bluewaters: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 00-10 10A10.011 10.011 0 000 22a10 10 0 0010-10 10.011 10.011 0 0010 10zm0-2a8 8 0 110 16 8 8 0 010-16z"/></svg>
};

const itineraryData = [
  { day: 1, title: "Burj Khalifa", icon: icons.burjKhalifa, description: "Visit the world's tallest building. Experience breathtaking views from the observation decks on levels 124 and 125." },
  { day: 2, title: "Desert Safari", icon: icons.desertSafari, description: "Thrilling 4x4 dune bashing, camel riding, traditional Bedouin camp experience with BBQ dinner and cultural performances." },
  { day: 3, title: "Dubai Marina", icon: icons.marina, description: "Stroll along the Marina Walk, admire luxury yachts, and enjoy waterfront dining with stunning skyline views." },
  { day: 4, title: "Al Fahidi & Gold Souk", icon: icons.goldSouk, description: "Explore the historic Al Fahidi district, visit the Dubai Museum, and shop for gold and spices in the traditional souks." },
  { day: 5, title: "Palm Jumeirah", icon: icons.palmJumeirah, description: "Discover the iconic palm-shaped island, visit Atlantis The Palm, and relax on pristine beaches." },
  { day: 6, title: "Dubai Frame", icon: icons.dubaiFrame, description: "Walk through the architectural landmark offering panoramic views of old and new Dubai from its sky-deck." },
  { day: 7, title: "Abu Dhabi Trip", icon: icons.abuDhabi, description: "Day trip to Abu Dhabi to visit the magnificent Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, and Yas Island attractions." },
  { day: 8, title: "Ski Dubai", icon: icons.skiDubai, description: "Experience real snow in the desert! Ski, snowboard, or play with penguins at this indoor winter wonderland." },
  { day: 9, title: "Creek Dhow Cruise", icon: icons.dhowCruise, description: "Traditional wooden dhow cruise along Dubai Creek with dinner, live entertainment, and views of historic landmarks." },
  { day: 10, title: "Bluewaters Island", icon: icons.bluewaters, description: "Visit Ain Dubai, the world's largest observation wheel, and enjoy dining, shopping, and beach access." }
];

const ItinerarySection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[rgba(210,180,140,0.9)] text-3xl font-bold text-center mb-12">
          10-Day Itinerary
        </h2>
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