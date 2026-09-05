```typescript
import React, { useState, useMemo } from 'react'

interface PackingItem {
  id: string
  name: string
  icon: string
  category: string
  checked: boolean
}

const initialItems: PackingItem[] = [
  { id: 'passport', name: 'Passport & Visa', icon: '🛂', category: 'Documents', checked: false },
  { id: 'sunscreen', name: 'Sunscreen (SPF 50+)', icon: '🧴', category: 'Essentials', checked: false },
  { id: 'clothing', name: 'Light Clothing', icon: '👕', category: 'Clothing', checked: false },
  { id: 'scarf', name: 'Scarf / Shawl', icon: '🧣', category: 'Clothing', checked: false },
  { id: 'shoes', name: 'Comfortable Shoes', icon: '👟', category: 'Clothing', checked: false },
  { id: 'camera', name: 'Camera', icon: '📷', category: 'Electronics', checked: false },
  { id: 'adapter', name: 'Power Adapter (Type G)', icon: '🔌', category: 'Electronics', checked: false },
  { id: 'medications', name: 'Medications', icon: '💊', category: 'Health', checked: false },
  { id: 'sunglasses', name: 'Sunglasses', icon: '🕶️', category: 'Essentials', checked: false },
  { id: 'hat', name: 'Hat / Cap', icon: '🧢', category: 'Clothing', checked: false },
  { id: 'swimsuit', name: 'Swimwear', icon: '🩱', category: 'Clothing', checked: false },
  { id: 'waterbottle', name: 'Reusable Water Bottle', icon: '💧', category: 'Essentials', checked: false },
  { id: 'phone', name: 'Phone & Charger', icon: '📱', category: 'Electronics', checked: false },
  { id: 'toiletries', name: 'Toiletries', icon: '🧼', category: 'Health', checked: false },
  { id: 'cash', name: 'Cash (AED)', icon: '💵', category: 'Documents', checked: false },
  { id: 'travelinsurance', name: 'Travel Insurance', icon: '📋', category: 'Documents', checked: false },
]

const categories = ['All', 'Documents', 'Essentials', 'Clothing', 'Electronics', 'Health']

const PackingChecklist: React.FC = () => {
  const [items, setItems] = useState<PackingItem[]>(initialItems)
  const [filter, setFilter] = useState('All')

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    )
  }

  const filteredItems = useMemo(
    () => (filter === 'All' ? items : items.filter((item) => item.category === filter)),
    [items, filter]
  )

  const checkedCount = useMemo(
    () => items.filter((item) => item.checked).length,
    [items]
  )

  const totalCount = items.length
  const progressPercent = totalCount > 0 ? (checkedCount / totalCount) * 100 : 0

  const resetAll = () => {
    setItems((prev) => prev.map((item) => ({ ...item, checked: false })))
  }

  const checkAll = () => {
    setItems((prev) => prev.map((item) => ({ ...item, checked: true })))
  }

  return (
    <div className="py-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="section-title gradient-text">Packing Checklist</h2>
        <p className="section-subtitle">
          Make sure you have everything for your Dubai adventure
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-terracotta to-sunset mx-auto rounded-full" />
      </div>

      {/* Progress Bar */}
      <div className="glass-card p-6 mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sand-300 font-semibold">
            {checkedCount} of {totalCount} items packed
          </span>
          <span className="text-terracotta-light font-bold">
            {Math.round(progressPercent)}%
          </span>
        </div>
        <div className="w-full h-3 bg-desert-card rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-terracotta to-sunset transition-all duration-700 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        {progressPercent === 100 && (
          <p className="text-center mt-3 text-sunset-light font-semibold animate-pulse">
            🎉 All packed! You're ready for Dubai!
          </p>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              filter === cat
                ? 'bg-gradient-to-r from-terracotta to-sunset text-white shadow-lg'
                : 'bg-desert-card text-sand-400 hover:text-sand-200 border border-desert-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Checklist Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`checklist-item ${item.checked ? 'checked' : ''}`}
            onClick={() => toggleItem(item.id)}
          >
            <div
              className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                item.checked
                  ? 'bg-gradient-to-r from-terracotta to-sunset border-transparent'
                  : 'border-sand-500 hover:border-sand-400'
              }`}
            >
              {item.checked && (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-xl flex-shrink-0">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <p className={`font-medium transition-all ${item.checked ? 'line-through text-sand-500' : 'text-sand-200'}`}>
                {item.name}
              </p>
              <p className="text-xs text-sand-600">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={checkAll}
          className="px-6 py-2 rounded-xl border border-desert-border text-sand-400 hover:text-sand-100 hover:border-sand-400/40 transition-all duration-200 text-sm"
        >
          Check All
        </button>
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

export default PackingChecklist
