import React, { useState } from 'react';

const PackingChecklist: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Passport', checked: false },
    { id: 2, text: 'Visa', checked: false },
    { id: 3, text: 'Travel Insurance', checked: false },
    { id: 4, text: 'Sunscreen SPF 50', checked: false },
    { id: 5, text: 'Sunglasses', checked: false },
    { id: 6, text: 'Light Clothing', checked: false },
    { id: 7, text: 'Scarf/Shawl (for mosques)', checked: false },
    { id: 8, text: 'Comfortable Walking Shoes', checked: false },
    { id: 9, text: 'Hat', checked: false },
    { id: 10, text: 'Reusable Water Bottle', checked: false },
    { id: 11, text: 'Camera', checked: false },
    { id: 12, text: 'Chargers', checked: false },
    { id: 13, text: 'Medications', checked: false },
    { id: 14, text: 'Snacks', checked: false },
  ]);

  const toggleItem = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const checkedCount = items.filter((item) => item.checked).length;
  const totalItems = items.length;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Packing Checklist</h2>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-white">Progress</span>
          <span className="text-d4a373 font-bold">
            {checkedCount}/{totalItems} items packed
          </span>
        </div>
        <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
          <div
            className={`h-full bg-d4a373 transition-all duration-300 width-[${(checkedCount / totalItems) * 100}%]`}
          ></div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleItem(item.id)}
                className="w-4 h-4 text-d4a373 focus:ring-d4a373"
              />
              <span
                className={`ml-3 flex-1 text-white ${
                  item.checked ? 'line-through text-white/50' : ''
                }`}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackingChecklist;