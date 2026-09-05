```tsx
import React, { useState } from 'react';

interface PackingItem {
  id: string;
  name: string;
  icon: string;
  category: string;
  checked: boolean;
}

interface PackingChecklistProps {
  isVisible: boolean;
}

const initialItems: PackingItem[] = [
  { id: 'passport', name: 'Passport & Visa', icon: '🛂', category: 'Documents', checked: false },
  { id: 'sunscreen', name: 'Sunscreen (SPF 50+)', icon: '🧴', category: 'Essentials', checked: false },
  { id: 'clothing', name: 'Light Clothing', icon: '👕', category: 'Clothing', checked: false },
  { id: 'scarf', name: 'Scarf / Shawl', icon: '🧣', category: 'Clothing', checked: false },
  { id: 'shoes', name: 'Comfortable Shoes', icon: '👟', category: 'Clothing', checked: false },
  { id: 'camera', name: 'Camera / Phone', icon: '📷', category: 'Electronics', checked: false },
  { id: 'adapter', name: 'Power Adapter (Type G)', icon: '🔌', category: 'Electronics', checked: false },
  { id: 'medications', name: 'Medications', icon: '💊', category: 'Health', checked: false },
  { id: 'sunglasses', name: 'Sunglasses', icon: '🕶️', category: 'Essentials', checked: false },
  { id: 'hat', name: 'Hat / Cap', icon: '🧢', category: 'Clothing', checked: false },
  { id: 'swimsuit', name: 'Swimwear', icon: '🩱', category: 'Clothing', checked: false },
  { id: 'waterbottle', name: 'Reusable Water Bottle', icon: '💧', category: 'Essentials', checked: false },
  { id: 'powerbank', name: 'Power Bank', icon: '🔋', category: 'Electronics', checked: false },
  { id: 'toiletries', name: 'Toiletries', icon: '🧼', category: 'Health', checked: false },
  { id: 'cash', name: 'Cash (AED)', icon: '💵', category: 'Documents', checked: false },
  { id: 'mosque', name: 'Modest Clothing for Mosque', icon: '🕌', category: 'Clothing', checked: false },
];

const PackingChecklist: React.FC<PackingChecklistProps> = ({ isVisible }) => {
  const [items, setItems] = useState<PackingItem[]>(initialItems);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(items.map((item) => item.category)))];

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const resetAll = () => {
    setItems((prev) => prev.map((item) => ({ ...item, checked: false })));
  };

  const checkedCount = items.filter((item) => item.checked).length;
  const totalCount = items.length;
  const progressPercent = Math.round((checkedCount / totalCount) * 100);

  const filteredItems = filter === 'All' ? items : items.filter((item) => item.category === filter);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 glass-card rounded-full text-amber-400 text-sm font-medium mb-4">
            🎒 Get Ready
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Packing Checklist</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Make sure you don't forget anything essential for your Dubai adventure
          </p>
        </div>

        {/* Progress Bar */}
        <div
          className={`glass-card rounded-xl p-6 mb-8 transition-all duration-500 ${
            isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400">
              {checkedCount} of {totalCount} items packed
            </span>
            <span className="text-sm font-bold text-amber-400">{progressPercent}%</span>
          </div>
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-600 to-orange-500 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          {progressPercent === 100 && (
            <p className="text-green-400 text-sm mt-2 text-center animate-pulse">
              🎉 All packed! You're ready for Dubai!
            </p>
          )}
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap gap-2 mb-6 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-900/30'
                  : 'glass-card text-gray-400 hover:text-amber-400 hover:border-amber-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={resetAll}
            className="px-4 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-red-400 transition-all duration-300 ml-auto"
          >
            Reset All
          </button>
        </div>

        {/* Checklist Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`glass-card glass-card-hover rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              } ${item.checked ? 'border-green-500/30' : ''}`}
              style={{ animationDelay: `${(index + 4) * 80}ms` }}
            >
              {/* Checkbox */}
              <div
                className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  item.checked
                    ? 'bg-green-500 border-green-500'
                    : 'border-gray-600 hover:border-amber-500'
                }`}
              >
                {item.checked && (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>

              {/* Icon */}
              <span className="text-xl flex-shrink-0">{item.icon}</span>

              {/* Name */}
              <div className="flex-1 min-w-0">
                <p
                  className={`font-medium transition-all duration-300 ${
                    item.checked ? 'text-gray-500 line-through' : 'text-white'
                  }`}
                >
                  {item.name}
                </p>
                <p className="text-xs text-gray-600">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackingChecklist;
