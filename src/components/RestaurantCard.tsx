import React from 'react';

interface RestaurantCardProps {
  restaurant: {
    id: number;
    name: string;
    cuisine: string;
    rating: number;
    description: string;
  };
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:translate-y-[-4px] transition-transform duration-300">
      <h3 className="text-xl font-semibold text-white mb-2">{restaurant.name}</h3>
      <p className="text-sm text-gray-400 mb-2">{restaurant.cuisine}</p>
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-yellow-400">
            {index < restaurant.rating ? '★' : '☆'}
          </span>
        ))}
        <span className="ml-2 text-sm text-gray-300">({restaurant.rating})</span>
      </div>
      <p className="text-sm text-gray-300 leading-relaxed">{restaurant.description}</p>
    </div>
  );
};

export default RestaurantCard;