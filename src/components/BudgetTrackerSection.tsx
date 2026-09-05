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
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-terracotta to-sunset bg-clip-text text-transparent">
          Budget Tracker
        </h2>
        
        <div className="space-y-6">
          <div className="bg-[rgba(210,180,140,0.1)] backdrop-blur-sm rounded-xl border border-[rgba(210,180,140,0.2)] p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">Estimate Your Expenses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Transport (flights, taxis, metro)</label>
                <input
                  type="number"
                  name="transport"
                  value={budget.transport}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(210,180,140,0.2)] rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-terracotta/50"
                  placeholder="e.g. 800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Accommodation (per night)</label>
                <input
                  type="number"
                  name="accommodation"
                  value={budget.accommodation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(210,180,140,0.2)] rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-terracotta/50"
                  placeholder="e.g. 120"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Food (per day)</label>
                <input
                  type="number"
                  name="food"
                  value={budget.food}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(210,180,140,0.2)] rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-terracotta/50"
                  placeholder="e.g. 50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Activities & Entry Fees</label>
                <input
                  type="number"
                  name="activities"
                  value={budget.activities}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(210,180,140,0.2)] rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-terracotta/50"
                  placeholder="e.g. 300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Miscellaneous (shopping, tips)</label>
                <input
                  type="number"
                  name="miscellaneous"
                  value={budget.miscellaneous}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(210,180,140,0.2)] rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-terracotta/50"
                  placeholder="e.g. 200"
                />
              </div>
            </div>
          </div>

          <div className="text-center py-8 bg-[rgba(210,180,140,0.05)] rounded-xl border border-[rgba(210,180,140,0.2)]">
            <h3 className="text-2xl font-bold text-white mb-4">Estimated Total: ${total.toLocaleString()}</h3>
            <p className="text-white/70">Adjust the fields above to see your total budget update in real time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetTrackerSection;