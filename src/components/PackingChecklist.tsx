import React, { useState } from 'react';

const PackingChecklist: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Passport', checked: true },
    { id: 2, text: 'Visa', checked: true },
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

  const [newItem, setNewItem] = useState('');

  const toggleItem = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    const newItemObj = {
      id: Date.now(),
      text: newItem.trim(),
      checked: false,
    };
    setItems([...items, newItemObj]);
    setNewItem('');
  };

  const checkedCount = items.filter((item) => item.checked).length;
  const totalCount = items.length;

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Packing Checklist</h2>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-white">
            Progress: {checkedCount}/{totalCount}
          </span>
          <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden">
            <div
              className={`bg-d4a373 h-full transition-width duration-300 w-${Math.round(
                (checkedCount / totalCount) * 100
              )%}`}
            ></div>
          </div>
        </div>
      </div>

      <form onSubmit={addItem} className="mb-6 flex gap-3">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item..."
          className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-d4a373"
        />
        <button
          type="submit"
          className="bg-d4a373 text-white font-bold py-3 px-5 rounded-lg hover:bg-d4a373/90 transition-colors duration-200 transform hover:scale-[1.02]"
        >
          Add Item
        </button>
      </form>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-3 bg-gray-800/50 rounded-lg"
          >
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleItem(item.id)}
              className="w-5 h-5 text-d4a373 bg-gray-700 border-gray-600 rounded focus:ring-d4a373"
            />
            <span
              className={`ml-4 flex-1 text-left text-white ${
                item.checked ? 'line-through text-gray-500' : ''
              }`}
            >
              {item.text}
            </span>
            <button
              onClick={() => deleteItem(item.id)}
              className="text-gray-400 hover:text-white transition-colors duration-200 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-700"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackingChecklist;