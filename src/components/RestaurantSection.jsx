import React, { useState } from 'react';
import { restaurants } from '../utils/constants';
import { FiStar } from 'react-icons/fi';

const RestaurantSection = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(restaurants)[0]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="section-title">
        Best <span className="text-amber-500">Restaurants</span>
      </h2>
      
      <div className="glass-card p-6">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-white/10 pb-4">
          {Object.keys(restaurants).map((area) => (
            <button
              key={area}
              onClick={() => setActiveTab(area)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === area 
                  ? 'bg-amber-500 text-dark' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {area}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="space-y-4">
          {restaurants[activeTab].map((restaurant, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center p-4 bg-dark/30 rounded-lg border border-white/5 hover:border-amber-500/30 transition-colors"
            >
              <div>
                <h4 className="text-white font-semibold">{restaurant.name}</h4>
                <div className="flex items-center mt-1">
                  <span className="text-amber-500 text-sm mr-2">{restaurant.price}</span>
                  <div className="flex text-amber-500 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className={i < restaurant.rating ? 'fill-current' : 'text-gray-600'} />
                    ))}
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-amber-500 transition-colors">
                Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantSection;