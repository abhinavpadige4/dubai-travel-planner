```tsx
import React, { useState, useEffect, useRef } from 'react';

interface PackingItem {
  id: string;
  name: string;
  icon: string;
  category: string;
  checked: boolean;
}

const initialItems: PackingItem[] = [
  { id: 'passport', name: 'Passport & Copies', icon: '📄', category: 'Essentials', checked: false },
  { id: 'sunscreen', name: 'Sunscreen (SPF 50+)', icon: '☀️', category: 'Essentials', checked: false },
  { id: 'clothing', name: 'Light Clothing', icon: '👕', category: 'Clothing', checked: false },
  { id: 'scarf', name: 'Scarf / Shawl', icon: '🧣', category: 'Clothing', checked: false },
  { id: 'shoes', name: 'Comfortable Shoes', icon: '👟', category: 'Clothing', checked: false },
  { id: 'camera', name: 'Camera', icon: '📷', category: 'Electronics', checked: false },
  { id: 'adapter', name: 'Power Adapter (Type G)', icon: '🔌', category: 'Electronics', checked: false },
  { id: 'medications', name: 'Medications', icon: '💊', category: 'Health', checked: false },
  { id: 'glasses', name: 'Sunglasses', icon: '🕶️', category: 'Essentials', checked: false },
  { id: 'hat', name: 'Hat / Cap', icon: '🧢', category: 'Clothing', checked: false },
  { id: 'water', name: 'Reusable Water Bottle', icon: '💧', category: 'Essentials', checked: false },
  { id: 'powerbank', name: 'Power Bank', icon: '🔋', category: 'Electronics', checked: false },
  { id: 'swimsuit', name: 'Swimwear', icon: '🩱', category: 'Clothing', checked: false },
  { id: 'modest', name: 'Modest Clothing (for mosques)', icon: '👘', category: 'Clothing', checked: false },
  { id: 'firstaid', name: 'First Aid Kit', icon: '🩹', category: 'Health', checked: false },
  { id: 'toiletries', name: 'Toiletries', icon: '🧴', category: 'Health', checked: false },
];

const categories = ['All', 'Essentials', 'Clothing', 'Electronics', 'Health'];

const PackingChecklist: React.FC = () => {
  const [items, setItems] = useState<PackingItem[]>(initialItems);
  const [filter, setFilter] = useState<string>('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const toggleAll = () => {
    const allChecked = filteredItems.every((item) => item.checked);
    setItems((prev) =>
      prev.map((item) =>
        filteredItems.includes(item) ? { ...item, checked: !allChecked } : item
      )
    );
  };

  const filteredItems = filter === 'All' ? items : items.filter((item) => item.category === filter);
  const checkedCount = items.filter((item) => item.checked).length;
  const totalCount = items.length;
  const progress = totalCount > 0 ? (checkedCount / totalCount) * 100 : 0;

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            🎒 Get Ready
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Packing Checklist
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Make sure you have everything you need for your Dubai adventure.
          </p>
        </div>

        {/* Checklist Card */}
        <div
          className={`rounded-2xl bg-white/5 border border-amber-500/20 backdrop-blur-sm overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="p-6 sm:p-8">
            {/* Progress Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-sm text-gray-500 mb-1">
                  {checkedCount} of {totalCount} items packed
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                  {progress.toFixed(0)}% Ready
                </div>
              </div>
              <button
                onClick={toggleAll}
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-amber-300 border border-amber-500/30 hover:bg-amber-500/10 hover:border-amber-400/50 transition-all duration-300"
              >
                {progress === 100 ? 'Uncheck All' : 'Check All'}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="h-2 rounded-full bg-gray-800 overflow-hidden mb-6">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    filter === cat
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'text-gray-500 border border-transparent hover:text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`group flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 text-left ${
                    item.checked
                      ? 'bg-amber-500/10 border-amber-500/30'
                      : 'bg-white/5 border-gray-800 hover:border-amber-500/20 hover:bg-white/10'
                  }`}
                >
                  {/* Checkbox */}
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-300 ${
                      item.checked
                        ? 'bg-amber-500 border-amber-500'
                        : 'border-gray-600 group-hover:border-amber-500/50'
                    }`}
                  >
                    {item.checked && (
                      <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>

                  {/* Icon */}
                  <span className="text-xl flex-shrink-0">{item.icon}</span>

                  {/* Item Info */}
                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-sm font-medium transition-all duration-300 ${
                        item.checked ? 'text-amber-300 line-through opacity-70' : 'text-gray-200'
                      }`}
                    >
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-600 mt-0.5">{item.category}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackingChecklist;
