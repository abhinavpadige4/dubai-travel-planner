import React, { useState } from 'react';

const PackingChecklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

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

  const clothing = [
    'T\u2011shirts (5)',
    'Light jacket',
    'Swimsuit',
    'Comfortable walking shoes',
    'Sandals'
  ];

  const essentials = [
    'Passport & Visa',
    'Travel insurance',
    'Sunscreen SPF 50+',
    'Reusable water bottle',
    'Sunglasses',
    'Hat or cap'
  ];

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#D4A373] to-[#E8C29A]">
        Packing Checklist
      </h2>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-[#2D1B17]/80 backdrop-blur-sm border border-[#D4A373]/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Clothing</h3>
          <ul className="space-y-2">
            {clothing.map((item) => (
              <li key={item} className="flex items-center p-3 bg-[#1A0F08]/50 border border-[#D4A373]/30 rounded-lg transition-colors duration-200 hover:bg-[#1A0F08]/70">
                <input
                  type="checkbox"
                  checked={checkedItems.has(item)}
                  onChange={() => toggleItem(item)}
                  className="w-4 h-4 text-[#D4A373] focus:ring-[#D4A373]"
                />
                <span className="ml-3 text-[#E8C29A]/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#2D1B17]/80 backdrop-blur-sm border border-[#D4A373]/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Essentials</h3>
          <ul className="space-y-2">
            {essentials.map((item) => (
              <li key={item} className="flex items-center p-3 bg-[#1A0F08]/50 border border-[#D4A373]/30 rounded-lg transition-colors duration-200 hover:bg-[#1A0F08]/70">
                <input
                  type="checkbox"
                  checked={checkedItems.has(item)}
                  onChange={() => toggleItem(item)}
                  className="w-4 h-4 text-[#D4A373] focus:ring-[#D4A373]"
                />
                <span className="ml-3 text-[#E8C29A]/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PackingChecklist;