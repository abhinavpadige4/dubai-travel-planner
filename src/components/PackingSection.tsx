import React, { useState } from 'react';

const PackingSection: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState(new Set<string>());
  
  const items = [
    "Passport",
    "Sunscreen",
    "Light clothing",
    "Scarf",
    "Comfortable shoes",
    "Camera",
    "Adapter",
    "Medications",
    "Sunglasses",
    "Reusable water bottle",
    "Hat or cap",
    "Light jacket for evenings"
  ];

  const toggleItem = (item: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(item)) {
        newSet.delete(item);
      } else {
        newSet.add(item);
      }
      return newSet;
    });
  };

  const progress = Math.round((checkedItems.size / items.length) * 100);

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-terracotta to-sunset bg-clip-text text-transparent">
          Packing Checklist
        </h2>
        
        <div className="space-y-6">
          <div className="bg-[rgba(210,180,140,0.1)] backdrop-blur-sm rounded-xl border border-[rgba(210,180,140,0.2)] p-6">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white">Packing Progress</h3>
              <div className="w-full bg-[rgba(255,255,255,0.05)] rounded-full h-2.5 mt-2 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r from-terracotta to-sunset transition-all duration-500 w-${progress}%`}
                ></div>
              </div>
              <p className="text-white/70 text-center mt-2">{checkedItems.size}/{items.length} items packed</p>
            </div>

            <div className="space-y-3">
              {items.map((item, index) => (
                <label key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={checkedItems.has(item)}
                    onChange={() => toggleItem(item)}
                    className="w-4 h-4 text-terracotta border-[rgba(210,180,140,0.3)] rounded focus:ring-terracotta/50"
                  />
                  <span className={`text-white/90 ${checkedItems.has(item) ? 'line-through' : ''}`}>
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {checkedItems.size === items.length && (
            <div className="text-center py-8 bg-[rgba(210,180,140,0.1)] rounded-xl border border-[rgba(210,180,140,0.2)]">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-terracotta/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-terracotta">Packing Complete!</h3>
              </div>
              <p className="text-white/70">You've packed all essential items for your Dubai trip. Have a wonderful journey!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PackingSection;