export const RestaurantRecommendations = () => {
  const restaurants = [
    {
      id: 1,
      name: 'At.mosphere',
      cuisine: 'Fine Dining',
      rating: 4.8,
      description: 'Located on the 122nd floor of Burj Khalifa, offering breathtaking views and exquisite international cuisine.'
    },
    {
      id: 2,
      name: 'Pierchic',
      cuisine: 'Seafood',
      rating: 4.7,
      description: 'Romantic overwater restaurant at the end of a pier in Al Qasr, serving fresh seafood with stunning views.'
    },
    {
      id: 3,
      name: 'Zuma',
      cuisine: 'Japanese',
      rating: 4.6,
      description: 'Contemporary Japanese izakaya-style dining in the heart of DIFC with robata grill and sushi counter.'
    },
    {
      id: 4,
      name: 'La Petite Maison',
      cuisine: 'French-Mediterranean',
      rating: 4.5,
      description: 'Nicoise-inspired cuisine in a charming setting, known for its fresh ingredients and vibrant flavors.'
    }
  ];

  return (
    <section className="py-16 fade-in">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title mb-10">Top Restaurant Picks</h2>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {restaurants.map(restaurant => (
            <div 
              key={restaurant.id} 
              className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-sand-primary">{restaurant.name}</h3>
                <p className="text-gray-300 mb-2">{restaurant.cuisine}</p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map(star => (
                    <span 
                      key={star} 
                      className="text-yellow-400"
                    >
                      {star <= restaurant.rating ? '★' : '☆'}
                    </span>
                  ))}
                  <span className="ml-2 text-gray-400">{restaurant.rating}/5</span>
                </div>
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