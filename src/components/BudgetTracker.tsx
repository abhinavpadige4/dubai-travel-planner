```typescript
import React, { useState, useMemo } from 'react'

interface BudgetCategory {
  id: string
  label: string
  icon: string
  value: number
  suggestedMin: number
  suggestedMax: number
}

const initialCategories: BudgetCategory[] = [
  { id: 'transport', label: 'Transport', icon: '🚗', value: 0, suggestedMin: 100, suggestedMax: 300 },
  { id: 'accommodation', label: 'Accommodation', icon: '🏨', value: 0, suggestedMin: 800, suggestedMax: 2000 },
  { id: 'food', label: 'Food', icon: '🍽️', value: 0, suggestedMin: 300, suggestedMax: 800 },
  { id: 'activities', label: 'Activities', icon: '🎯', value: 0, suggestedMin: 200, suggestedMax: 600 },
  { id: 'misc', label: 'Miscellaneous', icon: '🛍️', value: 0, suggestedMin: 100, suggestedMax: 400 },
]

const BudgetTracker: React.FC = () => {
  const [categories, setCategories] = useState<BudgetCategory[]>(initialCategories)
  const [currency, setCurrency] = useState<'USD' | 'AED'>('USD')

  const total = useMemo(
    () => categories.reduce((sum, cat) => sum + cat.value, 0),
    [categories]
  )

  const suggestedTotal = useMemo(
    () => ({
      min: categories.reduce((sum, cat) => sum + cat.suggestedMin, 0),
      max: categories.reduce((sum, cat) => sum + cat.suggestedMax, 0),
    }),
    [categories]
  )

  const updateValue = (id: string, newValue: number) => {
    setCategories((prev) =>
      prev.map((cat) => (cat.id === id ? { ...cat, value: newValue } : cat))
    )
  }

  const resetAll = () => {
    setCategories((prev) => prev.map((cat) => ({ ...cat, value: 0 })))
  }

  const formatCurrency = (amount: number) => {
    const symbol = currency === 'USD' ? '$' : 'د.إ'
    return `${symbol}${amount.toLocaleString()}`
  }

  const getProgressPercent = (cat: BudgetCategory) => {
    const range = cat.suggestedMax - cat.suggestedMin
    if (range === 0) return 0
    const percent = ((cat.value - cat.suggestedMin) / range) * 100
    return Math.max(0, Math.min(100, percent))
  }

  const getBarColor = (percent: number) => {
    if (percent < 30) return 'from-sand-400 to-sand-300'
    if (percent < 70) return 'from-terracotta to-sunset'
    return 'from-terracotta-dark to-terracotta'
  }

  return (
    <div className="py-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="section-title gradient-text">Budget Tracker</h2>
        <p className="section-subtitle">
          Plan your expenses and stay on track for your Dubai adventure
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-terracotta to-sunset mx-auto rounded-full" />
      </div>

      {/* Currency Toggle */}
      <div className="flex justify-center mb-8">
        <div className="glass-card inline-flex p-1 rounded-xl">
          {(['USD', 'AED'] as const).map((curr) => (
            <button
              key={curr}
              onClick={() => setCurrency(curr)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                currency === curr
                  ? 'bg-gradient-to-r from-terracotta to-sunset text-white shadow-lg'
                  : 'text-sand-400 hover:text-sand-200'
              }`}
            >
              {curr === 'USD' ? '🇺🇸 USD ($)' : '🇦🇪 AED (د.إ)'}
            </button>
          ))}
        </div>
      </div>

      {/* Total Display */}
      <div className="glass-card p-8 mb-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-terracotta/5 to-sunset/5" />
        <div className="relative z-10">
          <p className="text-sand-400 text-sm uppercase tracking-wider mb-2">
            Estimated Total
          </p>
          <p className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            {formatCurrency(total)}
          </p>
          <p className="text-sand-500 text-sm">
            Suggested range: {formatCurrency(suggestedTotal.min)} -{' '}
            {formatCurrency(suggestedTotal.max)}
          </p>
        </div>
      </div>

      {/* Category Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const percent = getProgressPercent(cat)
          return (
            <div key={cat.id} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-sand-100">{cat.label}</h3>
                  <p className="text-xs text-sand-500">
                    Suggested: {formatCurrency(cat.suggestedMin)} -{' '}
                    {formatCurrency(cat.suggestedMax)}
                  </p>
                </div>
              </div>

              {/* Input */}
              <div className="relative mb-4">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-400 font-semibold">
                  {currency === 'USD' ? '$' : 'د.إ'}
                </span>
                <input
                  type="number"
                  min={0}
                  value={cat.value || ''}
                  onChange={(e) =>
                    updateValue(cat.id, Math.max(0, Number(e.target.value)))
                  }
                  placeholder="0"
                  className="input-field pl-10 pr-4"
                />
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-desert-card rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${getBarColor(percent)} transition-all duration-500`}
                  style={{ width: `${percent}%` }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-sand-600">
                  {formatCurrency(cat.suggestedMin)}
                </span>
                <span className="text-xs text-sand-600">
                  {formatCurrency(cat.suggestedMax)}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Reset Button */}
      <div className="text-center mt-8">
        <button
          onClick={resetAll}
          className="px-6 py-2 rounded-xl border border-desert-border text-sand-400 hover:text-sand-100 hover:border-sand-400/40 transition-all duration-200 text-sm"
        >
          Reset All
        </button>
      </div>
    </div>
  )
}

export default BudgetTracker
