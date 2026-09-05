```tsx
import React, { useState, useEffect, useRef } from 'react';

interface BudgetCategory {
  id: string;
  label: string;
  icon: string;
  value: number;
  placeholder: string;
  suggestedMin: number;
  suggestedMax: number;
}

const BudgetTracker: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [budget, setBudget] = useState<BudgetCategory[]>([
    { id: 'transport', label: 'Transport', icon: '🚗', value: 0, placeholder: 'e.g., 500', suggestedMin: 300, suggestedMax: 800 },
    { id: 'accommodation', label: 'Accommodation', icon: '🏨', value: 0, placeholder: 'e.g., 2000', suggestedMin: 1000, suggestedMax: 4000 },
    { id: 'food', label: 'Food & Dining', icon: '🍽️', value: 0, placeholder: 'e.g., 800', suggestedMin: 400, suggestedMax: 1500 },
    { id: 'activities', label: 'Activities', icon: '🎯', value: 0, placeholder: 'e.g., 1000', suggestedMin: 500, suggestedMax: 2000 },
    { id: 'misc', label: 'Miscellaneous', icon: '🛍️', value: 0, placeholder: 'e.g., 300', suggestedMin: 200, suggestedMax: 600 },
  ]);

  const total = budget.reduce((sum, item) => sum + item.value, 0);

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

  const handleInputChange = (id: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    setBudget((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value: numValue } : item))
    );
  };

  const handleReset = () => {
    setBudget((prev) => prev.map((item) => ({ ...item, value: 0 })));
  };

  const getMaxBudget = budget.reduce((sum, item) => sum + item.suggestedMax, 0);
  const budgetPercentage = Math.min((total / getMaxBudget) * 100, 100);

  const getBudgetStatus = () => {
    if (total === 0) return { label: 'Start adding expenses', color: 'text-gray-500' };
    if (budgetPercentage <= 50) return { label: 'Budget-friendly', color: 'text-green-400' };
    if (budgetPercentage <= 75) return { label: 'Moderate spending', color: 'text-amber-400' };
    if (budgetPercentage <= 100) return { label: 'Premium experience', color: 'text-orange-400' };
    return { label: 'Over budget', color: 'text-red-400' };
  };

  const status = getBudgetStatus();

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            💰 Plan Your Spending
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Budget Tracker
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Estimate your trip costs across all major categories.
          </p>
        </div>

        {/* Budget Card */}
        <div
          className={`rounded-2xl bg-white/5 border border-amber-500/20 backdrop-blur-sm overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="p-6 sm:p-8">
            {/* Budget Categories */}
            <div className="space-y-6">
              {budget.map((item) => (
                <div key={item.id} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                      <span className="text-lg">{item.icon}</span>
                      {item.label}
                    </label>
                    <span className="text-sm text-gray-500">
                      Suggested: ${item.suggestedMin} - ${item.suggestedMax}
                    </span>
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">$</span>
                    <input
                      type="number"
                      min="0"
                      value={item.value || ''}
                      placeholder={item.placeholder}
                      onChange={(e) => handleInputChange(item.id, e.target.value)}
                      className="w-full pl-8 pr-4 py-3 rounded-xl bg-gray-900/50 border border-amber-500/20 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 text-lg"
                    />
                  </div>
                  {/* Progress bar for each category */}
                  <div className="mt-2 h-1.5 rounded-full bg-gray-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500"
                      style={{ width: `${Math.min((item.value / item.suggestedMax) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-amber-500/20" />

            {/* Total Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm text-gray-500 mb-1">Estimated Total</div>
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                  ${total.toLocaleString()}
                </div>
                <div className={`text-sm font-medium mt-1 ${status.color}`}>
                  {status.label}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-400 border border-gray-700 hover:border-amber-500/30 hover:text-amber-300 hover:bg-amber-500/10 transition-all duration-300"
                >
                  Reset All
                </button>
              </div>
            </div>

            {/* Overall Budget Bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>Budget Utilization</span>
                <span>{budgetPercentage.toFixed(0)}%</span>
              </div>
              <div className="h-3 rounded-full bg-gray-800 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    budgetPercentage <= 50
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                      : budgetPercentage <= 75
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500'
                      : budgetPercentage <= 100
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500'
                      : 'bg-gradient-to-r from-red-500 to-orange-500'
                  }`}
                  style={{ width: `${budgetPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 p-6 rounded-2xl bg-amber-500/5 border border-amber-500/15">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">💡</span>
            <div>
              <h4 className="font-semibold text-amber-300 mb-2">Budget Tips</h4>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li>• Book flights and hotels in advance for better rates</li>
                <li>• Use the Dubai Metro for affordable transportation</li>
                <li>• Look for combo tickets for attractions</li>
                <li>• Visit free attractions like beaches and public parks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetTracker;
