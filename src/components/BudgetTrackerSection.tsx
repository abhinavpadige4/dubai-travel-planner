import React, { useState } from 'react';

const BudgetTrackerSection: React.FC = () => {
  const [budget, setBudget] = useState({
    transport: 0,
    accommodation: 0,
    food: 0,
    activities: 0,
    miscellaneous: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBudget(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const total = Object.values(budget).reduce((sum, val) => sum + val, 0);

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-terracotta to-sunset-clip text-transparent">
          Budget Tracker
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1a1a1a/0.5] backdrop-blur-sm border border-sand/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-terracotta">Transport</h3>
            <input
              type="number"
              name="transport"
              value={budget.transport}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#2d2d2d/0.5] border border-sand/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-terracotta/50"
              placeholder="Enter amount in USD"
            />
          </div>
          <div className="bg-[#1a1a1a/0.5] backdrop-blur-sm border border-sand/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-terracotta">Accommodation</h3>
            <input
              type="number"
              name="accommodation"
              value={budget.accommodation}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#2d2d2d/0.5] border border-sand/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-terracotta/50"
              placeholder="Enter amount in USD"
            />
          </div>
          <div className="bg-[#1a1a1a/0.5] backdrop-blur-sm border border-sand/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-terracotta">Food</h3>
            <input
              type="number"
              name="food"
              value={budget.food}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#2d2d2d/0.5] border border-sand/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-terracotta/50"
              placeholder="Enter amount in USD"
            />
          </div>
          <div className="bg-[#1a1a1a/0.5] backdrop-blur-sm border border-sand/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-terracotta">Activities</h3>
            <input
              type="number"
              name="activities"
              value={budget.activities}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#2d2d2d/0.5] border border-sand/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-terracotta/50"
              placeholder="Enter amount in USD"
            />
          </div>
          <div className="bg-[#1a1a1a/0.5] backdrop-blur-sm border border-sand/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-terracotta">Miscellaneous</h3>
            <input
              type="number"
              name="miscellaneous"
              value={budget.miscellaneous}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#2d2d2d/0.5] border border-sand/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-terracotta/50"
              placeholder="Enter amount in USD"
            />
          </div>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-terracotta">Estimated Total: ${total.toFixed(2)}</h3>
        </div>
      </div>
    </section>
  );
};

export default BudgetTrackerSection;