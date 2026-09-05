import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Array<{ description: string; amount: number; category: string }>>([]);
  const [budget, setBudget] = useState(5000);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('Food');

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim() || amount <= 0) return;
    setExpenses([...expenses, { description, amount, category }]);
    setDescription('');
    setAmount(0);
    setCategory('Food');
  };

  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remainingBudget = budget - totalSpent;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2d1b0d] to-[#1a0f05] text-white font-sans antialiased">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#d4a373] to-[#e8b88a]">
          Explore Dubai in 10 Days
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-[#e8b88a]/90">
          Your perfect itinerary with budget tracker, packing list, visa info & more
        </p>
        <button
          onClick={() => window.scrollTo({ top: document.getElementById('itinerary')?.offsetTop ?? 0, behavior: 'smooth' })}
          className="inline-block px-8 py-4 bg-[#d4a373] text-[#1a0f05] font-semibold rounded-lg hover:bg-[#e8b88a] transition-transform duration-300 transform hover:scale-105"
        >
          Start Planning
        </button>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#d4a373] to-[#e8b88a]">
          Day-by-Day Itinerary
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((day) => (
            <div
              key={day}
              className="bg-[#3a2416]/50 backdrop-blur-sm border border-[#d4a373]/20 rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <span className="bg-[#d4a373] text-[#1a0f05] px-3 py-1 rounded-full text-sm">Day {day}</span>
                {[
                  'Burj Khalifa',
                  'Desert Safari',
                  'Dubai Marina',
                  'Al Fahidi & Gold Souk',
                  'Palm Jumeirah',
                  'Dubai Frame',
                  'Abu Dhabi Trip',
                  'Ski Dubai',
                  'Creek Dhow Cruise',
                  'Bluewaters Island'
                ][day - 1]}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Budget Tracker Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#3a2416]/30">
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#d4a373] to-[#e8b88a]">
          Budget Tracker
        </h2>
        <form onSubmit={handleAddExpense} className="max-w-md mx-auto space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#e8b88a]/90">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 bg-[#2d1b0d]/50 border border-[#d4a373]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#d4a373]/50"
              placeholder="e.g., Dinner at Al Mallah"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-[#e8b88a]/90">Amount (AED)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value) || 0)}
                className="w-full px-4 py-2 bg-[#2d1b0d]/50 border border-[#d4a373]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#d4a373]/50"
                min="0"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#e8b88a]/90">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 bg-[#2d1b0d]/50 border border-[#d4a373]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#d4a373]/50"
              >
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Activities">Activities</option>
                <option value="Shopping">Shopping</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#d4a373] text-[#1a0f05] font-semibold rounded-lg hover:bg-[#e8b88a] transition-transform duration-300 transform hover:scale-105"
          >
            Add Expense
          </button>
        </form>
        <div className="mt-8 text-center text-xl font-semibold">
          Total Spent: <span className="text-[#d4a373]">{totalSpent}</span> AED |
          Remaining Budget: <span className="text-[#e8b88a]">{remainingBudget}</span> AED
        </div>
      </section>

      {/* Packing Checklist Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#d4a373] to-[#e8b88a]">
          Packing Checklist
        </h2>
        <ul className="space-y-3 max-w-md mx-auto">
          {[
            'Passport',
            'Visa',
            'Travel Insurance',
            'Sunscreen SPF 50',
            'Sunglasses',
            'Light Clothing',
            'Scarf/Shawl (for mosques)',
            'Comfortable Walking Shoes',
            'Hat',
            'Reusable Water Bottle',
            'Camera',
            'Chargers',
            'Medications',
            'Snacks'
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 px-4 py-2 bg-[#3a2416]/50 backdrop-blur-sm border border-[#d4a373]/20 rounded-lg"
            >
              <svg
                className="w-5 h-5 text-[#d4a373]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-[#e8b88a]/90">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Visa Info Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#3a2416]/30">
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#d4a373] to-[#e8b88a]">
          Visa Information
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-[#e8b88a]/90 leading-relaxed">
          Most nationalities receive a 30-day visa on arrival (free). Check latest rules at{' '}
          <a
            href="https://www.ica.gov.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4a373] hover:underline"
          >
            https://www.ica.gov.ae
          </a>{' '}
          . Ensure passport validity ≥6 months.
        </p>
      </section>

      {/* Restaurant Recommendations Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#d4a373] to-[#e8b88a]">
          Top Restaurant Picks
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[{
            name: 'Al Mallah',
            cuisine: 'Lebanese',
            price: '$$',
            desc: '24-hr shawarma'
          }, {
            name: 'Pierchic',
            cuisine: 'Seafood',
            price: '$$$',
            desc: 'over-water dining'
          }, {
            name: 'Ravi Restaurant',
            cuisine: 'Pakistani',
            price: '$',
            desc: 'legendary biryani'
          }, {
            name: 'At.mosphere',
            cuisine: 'International',
            price: '$$$$',
            desc: 'Burj Khalifa 122nd floor'
          }, {
            name: 'Bu Qtair',
            cuisine: 'Fish',
            price: '$',
            desc: 'beachside fried fish'
          }].map((restaurant, index) => (
            <div
              key={index}
              className="bg-[#3a2416]/50 backdrop-blur-sm border border-[#d4a373]/20 rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="bg-[#d4a373] text-[#1a0f05] px-2 py-0.5 rounded text-xs">{restaurant.price}</span>
                {restaurant.name}
              </h3>
              <p className="text-sm text-[#e8b88a]/80 mb-2">{restaurant.cuisine}</p>
              <p className="text-base text-[#e8b88a]/90">{restaurant.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Contacts Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#3a2416]/30">
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#d4a373] to-[#e8b88a]">
          Emergency Contacts
        </h2>
        <div className="space-y-4 max-w-md mx-auto">
          {[{
            label: 'Police',
            number: '999'
          }, {
            label: 'Ambulance',
            number: '998'
          }, {
            label: 'Fire',
            number: '997'
          }, {
            label: 'Tourist Police',
            number: '800-4444'
          }, {
            label: 'Your Embassy',
            number: '(insert your country code)'
          }].map((contact, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-4 py-3 bg-[#2d1b0d]/50 border border-[#d4a373]/30 rounded-lg"
            >
              <span className="w-20 text-sm font-medium text-[#e8b88a]/90">{contact.label}</span>
              <span className="text-lg font-mono text-[#d4a373]">{contact.number}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-[#e8b88a]/70">
        © 2025 Dubai Travel Planner. All rights reserved.
      </footer>
    </div>
  );
};

export default App;