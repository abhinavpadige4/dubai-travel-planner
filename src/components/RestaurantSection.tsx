import React from 'react';

const RestaurantSection: React.FC = () => {
  const restaurants = [
    {
      id: 1,
      name: "At.mosphere",
      cuisine: "Fine Dining / International",
      rating: 4.8,
      description: "Located on the 122nd floor of Burj Khalifa, offering breathtaking views and exquisite cuisine"
    },
    {
      id: 2,
      name: "Pierchic",
      cuisine: "Seafood",
      rating: 4.7,
      description: "Romantic overwater restaurant at the end of a pier in Al Qasr, Madinat Jumeirah"
    },
    {
      id: 3,
      name: "Zuma Dubai",
      cuisine: "Japanese Izakaya",
      rating: 4.6,
      description: "Contemporary Japanese restaurant in DIFC known for its robata grill and sushi"
    },
    {
      id: 4,
      name: "La Petite Maison",
      cuisine: "French Mediterranean",
      rating: 4.5,
      description: "Nicoise-inspired dishes in a lively setting in DIFC"
    },
    {
      id: 5,
      name: "Al Mallah",
      cuisine: "Lebanese Street Food",
      rating: 4.4,
      description: "Authentic Lebanese falafel, shawarma, and manakeesh in Satwa"
    },
    {
      id: 6,
      name: "Bushra",
      cuisine: "Emirati",
      rating: 4.3,
      description: "Traditional Emirati cuisine in a heritage setting in Al Fahidi"
    }
  ];

  return (
    <section className="py-16 bg-gray-900/50 backdrop-blur-sm border border-sand/20 rounded-2xl mb-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-terracotta to-sunset bg-clip-text text-transparent">
          Top Restaurant Picks
        </h2>
        <p className="text-center text-gray-400 mt-2 mb-12 max-w-2xl mx-auto">
          Experience Dubai's diverse culinary scene with these highly-rated restaurants
        </p>
        <div className="grid gap-6">
          {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-gray-800/50 border border-sand/30 rounded-xl p-6 hover:border-terracotta/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-terracotta mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-gray-400 mb-3">{restaurant.cuisine}</p>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`text-amber-400 ${index < restaurant.rating ? 'text-terracotta' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="ml-2 text-gray-400 text-sm">({restaurant.rating}/5)</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {restaurant.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;