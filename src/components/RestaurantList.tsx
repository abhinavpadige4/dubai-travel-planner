```tsx
import React, { useState, useEffect, useRef } from 'react';

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  price: string;
  description: string;
}

const restaurants: Restaurant[] = [
  { id: 1, name: 'Al Mallah', cuisine: 'Lebanese', price: '$$', description: '24‑hr shawarma' },
  { id: 2, name: 'Pierchic', cuisine: 'Seafood', price: '$$$', description: 'over‑water dining' },
  { id: 3, name: 'Ravi Restaurant', cuisine: 'Pakistani', price: '$', description: 'legendary biryani' },
  { id: 4, name: 'At.mosphere', cuisine: 'International', price: '$$$$', description: 'Burj Khalifa 122nd floor' },
  { id: 5, name: 'Bu Qtair', cuisine: 'Fish', price: '$', description: 'beachside fried fish' },
];

const RestaurantList: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 px-4 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center tracking-tight">
          Top Restaurant Picks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((rest) => (
            <div
              key={rest.id}
              className="bg-white/10 backdrop-blur-[8px] border border-white/20 rounded-xl p-6 shadow-xl hover:scale-[1.05] transition-transform duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">{rest.name}</h3>
                  <span className="text-[#d4a373] font-medium bg-[#d4a373]/10 px-2.5 py-1 rounded-md text-sm border border-[#d4a373]/20">
                    {rest.price}
                  </span>
                </div>
                <span className="inline-block text-sm text-gray-400 mb-3 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                  {rest.cuisine}
                </span>
                <p className="text-gray-300 text-sm leading-relaxed">{rest.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4a373]"></span>
                <span className="text-xs text-gray-500">Book in advance recommended</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantList;
