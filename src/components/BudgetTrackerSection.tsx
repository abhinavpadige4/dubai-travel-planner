import React, { useState } from 'react';

const BudgetTrackerSection: React.FC = () => {
  const [budget, setBudget] = useState({
    transport: 0,
    accommodation: 0,
    food: 0,
    activities: 0,
    miscellaneous: 0,
  });

  const total = Object.values(budget).reduce((sum, val) => sum + val, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBudget(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  return (
    <section className="py-12 bg-gray-900/50 backdrop-blur-sm border border-sand/20 rounded-2xl mb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-terracotta to-sunset-clip text-transparent bg-clip-text">
          Budget Tracker
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-sand mb-1">Transport (flights, taxis, metro)</label>
              <input
                type="number"
                name="transport"
                value={budget.transport}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta"
                placeholder="Enter amount in USD"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-sand mb-1">Accommodation (hotels, Airbnb)</label>
              <input
                type="number"
                name="accommodation"
                value={budget.accommodation}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta"
                placeholder="Enter amount in USD"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-sand mb-1">Food (meals, snacks, drinks)</label>
              <input
                type="number"
                name="food"
                value={budget.food}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta"
                placeholder="Enter amount in USD"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-sand mb-1">Activities (tours, entry fees)</label>
              <input
                type="number"
                name="activities"
                value={budget.activities}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta"
                placeholder="Enter amount in USD"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-sand mb-1">Miscellaneous (shopping, tips)</label>
              <input
                type="number"
                name="miscellaneous"
                value={budget.miscellaneous}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta"
                placeholder="Enter amount in USD"
              />
            </div>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-sand/20">
            <h3 className="text-xl font-semibold text-sand mb-4">Estimated Total</h3>
            <p className="text-4xl font-bold text-terracotta mb-6">
              ${total.toFixed(2)}
            </p>
            <p className="text-gray-400 text-sm">
              Adjust the fields above to see your total budget update in real time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetTrackerSection;

// FILE: src/components/PackingSection.tsx
import React, { useState } from 'react';

const PackingSection: React.FC = () => {
  const [packingList, setPackingList] = useState([
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
    setPackingList(prev =>
      prev.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const packedCount = packingList.filter(item => item.packed).length;
  const totalItems = packingList.length;
  const progress = totalItems > 0 ? (packedCount / totalItems) * 100 : 0;

  return (
    <section className="py-12 bg-gray-900/50 backdrop-blur-sm border border-sand/20 rounded-2xl mb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-terracotta to-sunset-clip text-transparent bg-clip-text">
          Packing Checklist
        </h2>
        <div className="space-y-6">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-sand/20">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-sand">Packing Progress</span>
              <span className="text-sm text-terracotta font-medium">{packedCount}/{totalItems}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-terracotta to-sunset transition-width duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <ul className="space-y-3">
            {packingList.map(item => (
              <li
                key={item.id}
                className="flex items-center p-3 bg-gray-800/50 border border-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-700/50"
              >
                <input
                  type="checkbox"
                  checked={item.packed}
                  onChange={() => togglePacked(item.id)}
                  className="h-4 w-4 text-terracotta border-gray-600 rounded focus:ring-terracotta"
                />
                <span
                  className={`ml-4 flex-1 text-left text-white ${item.packed ? 'line-through text-gray-400' : ''}`}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
          {packedCount === totalItems && (
            <div className="mt-4 text-center text-terracotta font-semibold">
              🎉 All packed! You're ready for your Dubai adventure!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PackingSection;