import React from 'react';
import { useBudget } from '../context/BudgetContext';

const BudgetTracker = () => {
  const { estimatedBudget, setEstimatedBudget, actualSpending, categories, updateCategory } = useBudget();
  const percentage = Math.min((actualSpending / estimatedBudget) * 100, 100);
  const remaining = estimatedBudget - actualSpending;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="section-title">
        <span className="text-amber-500">Budget</span> Tracker
      </h2>
      
      <div className="glass-card p-6 md:p-8">
        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-dark/50 p-4 rounded-lg border border-white/5">
            <p className="text-gray-400 text-sm">Estimated Budget</p>
            <input 
              type="number" 
              value={estimatedBudget}
              onChange={(e) => setEstimatedBudget(Number(e.target.value))}
              className="w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-700 focus:border-amber-500 transition-colors"
            />
          </div>
          <div className="bg-dark/50 p-4 rounded-lg border border-white/5">
            <p className="text-gray-400 text-sm">Actual Spending</p>
            <p className="text-2xl font-bold text-amber-500">AED {actualSpending.toLocaleString()}</p>
          </div>
          <div className="bg-dark/50 p-4 rounded-lg border border-white/5">
            <p className="text-gray-400 text-sm">Remaining</p>
            <p className={`text-2xl font-bold ${remaining < 0 ? 'text-red-500' : 'text-emerald-500'}`}>
              AED {remaining.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Budget Used</span>
            <span>{percentage.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-500" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(categories).map((cat) => (
            <div key={cat} className="flex items-center justify-between bg-dark/30 p-3 rounded-lg border border-white/5">
              <label className="text-gray-300 font-medium">{cat}</label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2 text-sm">AED</span>
                <input 
                  type="number" 
                  value={categories[cat] || ''}
                  onChange={(e) => updateCategory(cat, e.target.value)}
                  className="w-24 bg-transparent text-right text-white focus:outline-none border-b border-gray-700 focus:border-amber-500 transition-colors"
                  placeholder="0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetTracker;