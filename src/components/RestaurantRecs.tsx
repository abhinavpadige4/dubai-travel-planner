```tsx
import React, { useState } from 'react';

interface Restaurant {
  name: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  location: string;
  description: string;
  icon: string;
  recommended: boolean;
}

const restaurants: Restaurant[] = [
  {
    name: 'Al Nafoorah',
    cuisine: 'Arabic / Lebanese',
    rating: 4.5,
    priceRange: '$$',
    location: 'Al Fahidi Historical District',
    description: 'Authentic Arabic cuisine in a charming traditional courtyard setting.',
    icon: '🫓',
    recommended: true,
  },
  {
    name: 'Nusr-Et Steakhouse',
    cuisine: 'Steakhouse',
    rating: 4.7,
    priceRange: '$$$$',
    location: 'DIFC',
    description: 'World-famous salt-bae steakhouse with premium cuts and live entertainment.',
    icon: '🥩',
    recommended: true,
  },
  {
    name: 'La Petite Maison',
    cuisine: 'French / Mediterranean',
    rating: 4.6,
    priceRange: '$$$',
    location: 'DIFC',
    description: 'Elegant French-Mediterranean dining with fresh seafood and pastries.',
    icon: '🥐',
    recommended: true,
  },
  {
    name: 'Indian Accent',
    cuisine: 'Indian',
    rating: 4.8,
    priceRange: '$$$',
    location: 'Atlantis, The Palm',
    description: 'Award-winning modern Indian cuisine with innovative flavors.',
    icon: '🍛',
    recommended: true,
  },
  {
    name: 'Pierchic',
    cuisine: 'Seafood',
    rating: 4.6,
    priceRange: '$$$$',
    location: 'Al Qasba, Dubai Creek',
    description: 'Romantic overwater seafood restaurant with stunning creek views.',
    icon: '🦞',
    recommended: false,
  },
  {
    name: 'Zuma',
    cuisine: 'Japanese / Izakaya',
    rating: 4.5,
    priceRange: '$$$',
    location: 'Downtown Dubai',
    description: 'Contemporary Japanese izakaya-style dining with vibrant atmosphere.',
    icon: '🍣',
    recommended: false,
  },
  {
    name: 'Thiptara',
    cuisine: 'Thai',
    rating: 4.4,
    priceRange: '$$$',
    location: 'Bangkok Restaurant, Downtown',
    description: 'Exquisite Thai cuisine in a beautifully designed setting.',
    icon: '🍜',
    recommended: false,
  },
  {
    name: 'Al Hadheerah',
    cuisine: 'Bedouin / Arabic',
    rating: 4.3,
    priceRange: '$$',
    location: 'Al Fahidi Historical District',
    description: 'Traditional Bedouin-style dining in a restored heritage building.',
    icon: '🏺',
    recommended: true,
  },
];

interface RestaurantRecsProps {
  isVisible: boolean;
}

const RestaurantRecs: React.FC<RestaurantRecsProps> = ({ isVisible }) => {
  const [filter, setFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'rating' | 'price'>('rating');

  const cuisines = ['All', ...Array.from(new Set(restaurants.map((r) => r.cuisine)))];

  const filteredRestaurants = restaurants
    .filter((r) => filter === 'All' || r.cuisine === filter)
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.priceRange.length - b.priceRange.length;
    });

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={i} className="text-amber-400 text-sm">
            ★
          </span>
        ))}
        {hasHalf && (
          <span className="text-amber-400 text-sm">
            ★
          </span>
        )}
        {Array.from({ length: 5 - fullStars - (hasHalf ? 1 : 0) }).map((_, i) => (
          <span key={i} className="text-gray-600 text-sm">
            ★
          </span>
        ))}
        <span className="ml-1 text-sm text-gray-400">{rating}</span>
      </div>
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 glass-card rounded-full text-amber-400 text-sm font-medium mb-4">
            🍽️ Foodie Guide
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Top Restaurant Picks</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hand-picked dining experiences across Dubai
          </p>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap items-center gap-3 mb-8 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}
        >
          <div className="flex flex-wrap gap-2">
            {cuisines.slice(0, 6).map((cuisine) => (
              <button
                key={cuisine}
                onClick={() => setFilter(cuisine)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                  filter === cuisine
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                    : 'glass-card text-gray-400 hover:text-amber-400'
                }`}
              >
                {cuisine}
              </button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs text-gray-500">Sort by:</span>
            <button
              onClick={() => setSortBy('rating')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                sortBy === 'rating'
                  ? 'bg-amber-600/30 text-amber-400 border border-amber-500/30'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              ⭐ Rating
            </button>
            <button
              onClick={() => setSortBy('price')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                sortBy === 'price'
                  ? 'bg-amber-600/30 text-amber-400 border border-amber-500/30'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              💰 Price
            </button>
          </div>
        </div>

        {/* Restaurant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRestaurants.map((restaurant, index) => (
            <div
              key={restaurant.name}
              className={`glass-card glass-card-hover rounded-xl p-5 transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{restaurant.icon}</span>
                  <div>
                    <h3 className="font-bold text-white text-lg">{restaurant.name}</h3>
                    <p className="text-xs text-amber-400/70">{restaurant.cuisine}</p>
                  </div>
                </div>
                {restaurant.recommended && (
                  <span className="px-2 py-0.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-bold rounded-full shadow-lg">
                    ★ Top Pick
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="mb-3">{renderStars(restaurant.rating)}</div>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {restaurant.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-amber-800/20">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  📍 {restaurant.location}
                </span>
                <span className="text-sm font-bold text-amber-400">{restaurant.priceRange}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantRecs;
