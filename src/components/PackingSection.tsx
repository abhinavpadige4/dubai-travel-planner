import React, { useState } from 'react';

const PackingSection: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Passport', packed: false },
    { id: 2, name: 'Sunscreen', packed: false },
    { id: 3, name: 'Light clothing', packed: false },
    { id: 4, name: 'Scarf', packed: false },
    { id: 5, name: 'Comfortable shoes', packed: false },
    { id: 6, name: 'Camera', packed: false },
    { id: 7, name: 'Adapter', packed: false },
    { id: 8, name: 'Medications', packed: false },
  ]);

  const togglePacked = (id: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const packedCount = items.filter(item => item.packed).length;
  const totalItems = items.length;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-terracotta to-sunset-clip text-transparent">
          Packing Checklist
        </h2>
        <div className="bg-[#1a1a1a/0.5] backdrop-blur-sm border border-sand/20 rounded-xl p-6">
          <div className="mb-4 flex justify-between items-center">
            <span className="text-terracotta font-medium">
              Progress: {packedCount}/{totalItems} items packed
            </span>
            <div className="w-full max-w-xs h-2.5 bg-[#2d2d2d/0.5] rounded-full overflow-hidden">
              <div
                className={`h-full bg-terracotta transition-all duration-300 width-${Math.round(
                  (packedCount / totalItems) * 100
                )}%`}
              ></div>
            </div>
          </div>
          <ul className="space-y-3">
            {items.map(item => (
              <li
                key={item.id}
                className="flex items-center p-3 bg-[#2d2d2d/0.3] border border-sand/20 rounded-lg transition-transform duration-300 hover:-translate-x-1"
              >
                <input
                  type="checkbox"
                  checked={item.packed}
                  onChange={() => togglePacked(item.id)}
                  className="h-4 w-4 text-terracotta focus:ring-terracotta/50"
                />
                <span
                  className={`ml-4 flex-1 text-white ${item.packed ? 'line-through text-sand/50' : ''}`}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PackingSection;