import React from 'react';

const RestaurantSection: React.FC = () => {
  const restaurants = [
    {
      id: 1,
      name: "At.mosphere",
      cuisine: "Fine Dining / International",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzY1Nzl8MHwxfHNlYXJjaHwxfHxEdWJhal8lMjBUcmVzdGF1cmFudHx8ZW58MHx8fHwxNjY2NzY2NjY0&ixlib=rb-1.2.1&q=85",
      description: "Located on the 122nd floor of Burj Khalifa, offering breathtaking views and exquisite international cuisine."
    },
    {
      id: 2,
      name: "Pierchic",
      cuisine: "Seafood / Romantic",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzY1Nzl8MHwxfHNlYXJjaHwxfHxEdWJhaF8lMjBTZWVmb29kfGVufDB8fHx8MTY2Njc2NjY2MA&ixlib=rb-1.2.1&q=85",
      description: "Overwater restaurant at Al Qasr Madinat Jumeirah serving fresh seafood with stunning Arabian Gulf views."
    },
    {
      id: 3,
      name: "Al Mallah",
      cuisine: "Middle Eastern / Street Food",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzY1Nzl8MHwxfHNlYXJjaHwxfHxEdWJhaF8lMjBNZWRpdGhlcmFuJTIwQ29va2luZ3x8ZW58MHx8fHwxNjY2NzY2NjYz&ixlib=rb-1.2.1&q=85",
      description: "Popular local spot for authentic shawarma, falafel, and traditional Emirati dishes at reasonable prices."
    },
    {
      id: 4,
      name: "Thiptara",
      cuisine: "Thai / Riverside",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1584558777162-2713b24d40dd?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzY1Nzl8MHwxfHNlYXJjaHwxfHxEdWJhaF8lMjBUaGFpfGVufDB8fHx8MTY2Njc2NjY2NA&ixlib=rb-1.2.1&q=85",
      description: "Elegant Thai restaurant at The Palace Downtown with stunning views of Burj Khalifa and Dubai Fountain."
    },
    {
      id: 5,
      name: "Logma",
      cuisine: "Emirati / Modern",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1599488317973-d66d60dca22d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzY1Nzl8MHwxfHNlYXJjaHwxfHxFbWlyYXRpJTIwQ29va2luZ3x8ZW58MHx8fHwxNjY2NzY2NjY1&ixlib=rb-1.2.1&q=85",
      description: "Modern take on traditional Emirati cuisine in The Dubai Mall, featuring dishes like balaleet and chabab."
    }
  ];

  return (
    <section className="py-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 rounded-xl mb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-terracotta-400 to-sunset-300 bg-clip-text text-transparent">
          Top Restaurant Picks
        </h2>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {restaurants.map(restaurant => (
            <div 
              key={restaurant.id} 
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {restaurant.name}
                  </h3>
                  <p className="text-terracotta-300 font-medium mb-2">
                    {restaurant.cuisine}
                  </p>
                  <div className="flex items-center space-x-2 mb-3">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span 
                        key={star} 
                        className={`text-yellow-400 ${star <= restaurant.rating ? 'fas' : 'far'} fa-star`}
                      />
                    ))}
                    <span className="text-gray-400 text-sm">
                      ({restaurant.rating}/5)
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {restaurant.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;