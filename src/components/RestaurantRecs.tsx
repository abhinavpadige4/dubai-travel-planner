```tsx
import React, { useState, useEffect, useRef } from 'react';

interface Restaurant {
  name: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  location: string;
  description: string;
  icon: string;
}

const restaurants: Restaurant[] = [
  {
    name: 'Al Nafoorah',
    cuisine: 'Lebanese',
    rating: 4.8,
    priceRange: '$$$$',
    location: 'Madinat Jumeirah',
    description: 'Open-air Lebanese restaurant with stunning views of the Burj Al Arab and traditional architecture.',
    icon: '🍽️',
  },
  {
    name: 'Nakheel',
    cuisine: 'Arabic',
    rating: 4.7,
    priceRange: '$$$$',
    location: 'Atlantis The Palm',
    description: 'All-you-can-eat buffet with live cooking stations and a stunning indoor garden setting.',
    icon: '🌴',
  },
  {
    name: 'La Petite Maison',
    cuisine: 'Mediterranean',
    rating: 4.6,
    priceRange: '$$$',
    location: 'DIFC',
    description: 'Authentic Mediterranean cuisine in an elegant setting, famous for its grilled meats and fresh seafood.',
    icon: '🐟',
  },
  {
    name: 'Arabian Tea House',
    cuisine: 'Indian',
    rating: 4.5,
    priceRange: '$$',
    location: 'Al Fahidi',
    description: 'Michelin-starred Indian restaurant in a restored heritage house with a charming courtyard.',
    icon: '🍛',
  },
  {
    name: 'Pierchic',
    cuisine: 'Seafood',
    rating: 4.7,
    priceRange: '$$$$',
    location: 'Palm Jumeirah',
    description: 'Overwater fine dining restaurant at Atlantis The Palm with fresh seafood and ocean views.',
    icon: '🦞',
  },
  {
    name: 'Sakhawat Al Fanar',
    cuisine: 'Arabic',
    rating: 4.4,
    priceRange: '$$',
    location: 'Al Fahidi',
    description: 'Traditional Arabic cuisine served in a beautifully restored heritage building with courtyard seating.',
    icon: '🫖',
  },
  {
    name: 'The Warehouse',
    cuisine: 'International',
    rating: 4.3,
    priceRange: '$$',
    location: 'Al Seef',
    description: 'Casual dining in a converted warehouse with a diverse menu and vibrant atmosphere.',
    icon: '🍔',
  },
  {
    name: 'Ossiano',
    cuisine: 'Seafood',
    rating: 4.8,
    priceRange: '$$$$',
    location: 'Atlantis The Palm',
    description: 'Fine dining restaurant overlooking the Lost Chambers Aquarium with innovative seafood dishes.',
    icon: '🐠',
  },
];

const RestaurantRecs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sortBy, setSortBy] = useState<'rating' | 'price'>('rating');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const sortedRestaurants = [...restaurants].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    return a.priceRange.length - b.priceRange.length;
  });

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < fullStars
                ? 'text-amber-400'
                : i === fullStars && hasHalf
                ? 'text-amber-400/50'
                : 'text-gray-600'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-400">{rating}</span>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            🍴 Where to Eat
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Top Restaurant Picks
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Handpicked dining experiences across Dubai, from fine dining to hidden gems.
          </p>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-sm text-gray-500">Sort by:</span>
          <button
            onClick={() => setSortBy('rating')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              sortBy === 'rating'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'text-gray-500 border border-transparent hover:text-gray-300 hover:bg-white/5'
            }`}
          >
            ⭐ Rating
          </button>
          <button
            onClick={() => setSortBy('price')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              sortBy === 'price'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'text-gray-500 border border-transparent hover:text-gray-300 hover:bg-white/5'
            }`}
          >
            💰 Price
          </button>
        </div>

        {/* Restaurant Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {sortedRestaurants.map((restaurant, index) => (
            <div
              key={restaurant.name}
              className="group rounded-2xl bg-white/5 border border-amber-500/20 backdrop-blur-sm overflow-hidden hover:border-amber-400/40 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {/* Card Header */}
              <div className="p-5 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{restaurant.icon}</span>
                  <span className="text-xs font-medium px-2 py-1 rounded-md bg-amber-500/10 text-amber-400">
                    {restaurant.priceRange}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-100 mb-1 group-hover:text-amber-300 transition-colors">
                  {restaurant.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 text-amber-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {restaurant.location}
                </div>

                <div className="mb-3">{renderStars.restaurant?.(restaurant.rating) || renderStars(restaurant.rating)}</div>

                <p className="text-sm text-gray-400 leading-relaxed">{restaurant.description}</p>
              </div>

              {/* Cuisine Tag */}
              <div className="px-5 py-3 bg-white/5 border-t border-amber-500/10">
                <span className="text-xs font-medium text-amber-400/70 uppercase tracking-wider">
                  {restaurant.cuisine}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantRecs;
