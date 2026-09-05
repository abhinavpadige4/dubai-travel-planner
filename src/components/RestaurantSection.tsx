import React from 'react';

const RestaurantSection: React.FC = () => {
  const restaurants = [
    {
      id: 1,
      name: "At.mosphere",
      cuisine: "Fine Dining",
      rating: 4.8,
      description: "Located on the 122nd floor of Burj Khalifa, offering breathtaking views with contemporary European cuisine.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Pierchic",
      cuisine: "Seafood",
      rating: 4.7,
      description: "Overwater restaurant at the end of a pier in Al Qasr, serving exceptional seafood with romantic ambiance.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Al Mallah",
      cuisine: "Middle Eastern",
      rating: 4.6,
      description: "Authentic Lebanese street food famous for shawarma and falafel, popular with locals and tourists alike.",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      name: "La Petite Maison",
      cuisine: "French-Mediterranean",
      rating: 4.5,
      description: "Nicoise-inspired cuisine in DIFC, known for fresh ingredients and vibrant flavors.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 rounded-2xl mb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-terracotta to-sunset-rose bg-clip-text text-transparent">
          Top Restaurant Picks
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map(restaurant => (
            <div 
              key={restaurant.id} 
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{restaurant.name}</h3>
              <p className="text-gray-400 mb-3">{restaurant.cuisine}</p>
              
              <div className="flex items-center mb-3">
                {[1, 2, 3, 4, 5].map(star => (
                  <span 
                    key={star} 
                    className={`text-yellow-400 ${star <= restaurant.rating ? '' : 'text-gray-600'}`}
                  >
                    ⭐
                  </span>
                ))}
                <span className="ml-2 text-gray-400 text-sm">({restaurant.rating})</span>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {restaurant.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;