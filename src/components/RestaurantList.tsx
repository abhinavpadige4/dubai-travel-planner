import React from 'react';

const RestaurantList: React.FC = () => {
  const restaurants = [
    {
      id: 1,
      name: "Al Mallah",
      cuisine: "Lebanese",
      price: "$$",
      description: "24-hr shawarma",
      image: "https://images.unsplash.com/photo-1551782450-a2132b43b1d2?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Pierchic",
      cuisine: "Seafood",
      price: "$$$",
      description: "Over-water dining",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Ravi Restaurant",
      cuisine: "Pakistani",
      price: "$",
      description: "Legendary biryani",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "At.mosphere",
      cuisine: "International",
      price: "$$$$",
      description: "Burj Khalifa 122nd floor",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Bu Qtair",
      cuisine: "Fish",
      price: "$",
      description: "Beachside fried fish",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 mb-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-d4a373 mb-6">Top Restaurant Picks</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {restaurants.map(restaurant => (
          <div 
            key={restaurant.id} 
            className="bg-gray-900 bg-opacity-30 backdrop-blur-sm rounded-lg border border-gray-700 p-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img 
              src={restaurant.image} 
              alt={restaurant.name} 
              className="w-full h-32 object-cover rounded mb-4"
            />
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