import React from 'react';

const RestaurantList: React.FC = () => {
  const restaurants = [
    {
      id: 1,
      name: "Al Mallah",
      cuisine: "Lebanese",
      price: "$$",
      description: "24-hr shawarma"
    },
    {
      id: 2,
      name: "Pierchic",
      cuisine: "Seafood",
      price: "$$$",
      description: "Over-water dining"
    },
    {
      id: 3,
      name: "Ravi Restaurant",
      cuisine: "Pakistani",
      price: "$",
      description: "Legendary biryani"
    },
    {
      id: 4,
      name: "At.mosphere",
      cuisine: "International",
      price: "$$$$",
      description: "Burj Khalifa 122nd floor"
    },
    {
      id: 5,
      name: "Bu Qtair",
      cuisine: "Fish",
      price: "$",
      description: "Beachside fried fish"
    }
  ];

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 mb-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-d4a373 mb-6">Top Restaurant Picks</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {restaurants.map(restaurant => (
          <div 
            key={restaurant.id} 
            className="bg-gray-900 bg-opacity-30 backdrop-blur-sm rounded-lg border border-gray-700 p-4 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold text-d4a373 mb-2">{restaurant.name}</h3>
            <p className="text-gray-400 text-sm mb-1">{restaurant.cuisine} • {restaurant.price}</p>
            <p className="text-gray-300 text-sm">{restaurant.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;