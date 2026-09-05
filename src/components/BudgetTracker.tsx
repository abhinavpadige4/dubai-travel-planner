```tsx
import React, { useState, useMemo } from 'react';

interface BudgetCategory {
  id: string;
  label: string;
  icon: string;
  value: number;
  suggestedMin: number;
  suggestedMax: number;
  tips: string;
}

interface BudgetTrackerProps {
  isVisible: boolean;
}

const BudgetTracker: React.FC<BudgetTrackerProps> = ({ isVisible }) => {
  const [budget, setBudget] = useState<BudgetCategory[]>([
    {
      id: 'transport',
      label: 'Transport',
      icon: '🚗',
      value: 0,
      suggestedMin: 100,
      suggestedMax: 300,
      tips: 'Metro, taxis, and occasional car rentals',
    },
    {
      id: 'accommodation',
      label: 'Accommodation',
      icon: '🏨',
      value: 0,
      suggestedMin: 500,
      suggestedMax: 2000,
      tips: '9 nights × average nightly rate',
    },
    {
      id: 'food',
      label: 'Food & Dining',
      icon: '🍽️',
      value: 0,
      suggestedMin: 200,
      suggestedMax: 600,
      tips: 'Mix of casual and fine dining',
    },
    {
      id: 'activities',
      label: 'Activities & Tours',
      icon: '🎯',
      value: 0,
      suggestedMin: 300,
      suggestedMax: 800,
      tips: 'Attractions, safaris, cruises, etc.',
    },
    {
      id: 'misc',
      label: 'Miscellaneous',
      icon: '🛍️',
      value: 0,
      suggestedMin: 100,
      suggestedMax: 500,
      tips: 'Shopping, souvenirs, tips, extras',
    },
  ]);

  const [currency, setCurrency] = useState<'USD' | 'AED'>('USD');

  const total = useMemo(() => {
    return budget.reduce((sum, cat) => sum + cat.value, 0);
  }, [budget]);

  const updateValue = (id: string, newValue: number) => {
    setBudget((prev) =>
      prev.map((cat) => (cat.id === id ? { ...cat, value: Math.max(0, newValue) } : cat))
    );
  };

  const resetBudget = () => {
    setBudget((prev) => prev.map((cat) => ({ ...cat, value: 0 })));
  };

  const fillSuggested = () => {
    setBudget((prev) =>
      prev.map((cat) => ({
        ...cat,
        value: Math.round((cat.suggestedMin + cat.suggestedMax) / 2),
      }))
    );
  };

  const displayTotal = currency === 'AED' ? Math.round(total * 3.67) : total;
  const currencySymbol = currency === 'AED' ? 'AED ' : '$';

  const getProgressColor = (value: number, min: number, max: number) => {
    if (value === 0) return 'bg-gray-700';
    const ratio = value / max;
    if (ratio < 0.5) return 'bg-green-500';
    if (ratio < 0.8) return 'bg-amber-500';
    return 'bg-orange-500';
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 glass-card rounded-full text-amber-400 text-sm font-medium mb-4">
            💰 Money Matters
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Budget Tracker</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Plan your spending across categories to stay on track
          </p>
        </div>

        {/* Currency Toggle & Actions */}
        <div className={`flex flex-wrap items-center justify-between gap-4 mb-8 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          <div className="flex items-center gap-2 glass-card rounded-xl p-1">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                currency === 'USD'
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-amber-400'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('AED')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                currency === 'AED'
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-amber-400'
              }`}
            >
              AED (د.إ)
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fillSuggested}
              className="px-4 py-2 glass-card rounded-lg text-sm text-amber-400 hover:border-amber-500/40 transition-all duration-300"
            >
              ✨ Fill Suggested
            </button>
            <button
              onClick={resetBudget}
              className="px-4 py-2 glass-card rounded-lg text-sm text-gray-400 hover:text-red-400 hover:border-red-500/30 transition-all duration-300"
            >
              🔄 Reset
            </button>
          </div>
        </div>

        {/* Budget Categories */}
        <div className="space-y-4 mb-8">
          {budget.map((category, index) => (
            <div
              key={category.id}
              className={`glass-card glass-card-hover rounded-xl p-5 transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Icon & Label */}
                <div className="flex items-center gap-3 sm:w-48 flex-shrink-0">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white">{category.label}</h3>
                    <p className="text-xs text-gray-500">{category.tips}</p>
                  </div>
                </div>

                {/* Input */}
                <div className="flex-1">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500 font-semibold">
                      {currencySymbol}
                    </span>
                    <input
                      type="number"
                      value={category.value || ''}
                      onChange={(e) => updateValue(category.id, Number(e.target.value))}
                      placeholder="0"
                      className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-amber-800/30 rounded-lg text-white font-semibold focus:outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                    />
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${getProgressColor(
                        category.value,
                        category.suggestedMin,
                        category.suggestedMax
                      )}`}
                      style={{
                        width: `${Math.min(100, (category.value / category.suggestedMax) * 100)}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-600">
                      {currencySymbol}{category.suggestedMin}
                    </span>
                    <span className="text-xs text-gray-600">
                      {currencySymbol}{category.suggestedMax}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div
          className={`glass-card rounded-2xl p-8 text-center transition-all duration-500 ${
            isVisible ? 'animate-scale-in delay-800' : 'opacity-0'
          }`}
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Estimated Total</p>
          <p className="text-5xl sm:text-6xl font-bold gradient-text mb-2">
            {currencySymbol}{displayTotal.toLocaleString()}
          </p>
          <p className="text-gray-500 text-sm">
            {currency === 'USD'
              ? `≈ AED ${Math.round(total * 3.67).toLocaleString()}`
              : `≈ $${total.toLocaleString()} USD`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BudgetTracker;
