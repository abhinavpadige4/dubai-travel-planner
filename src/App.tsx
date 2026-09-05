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
    <div className="min-h-screen bg-gradient-to-b from-[#2a1b10] to/#1a0f08 text-white font-sans antialiased">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-[#d4a373] mb-4">Explore Dubai in 10 Days</h1>
        <p className="text-xl text-gray-300 mb-8">Your perfect itinerary with budget tracker, packing list, visa info & more</p>
        <button 
          onClick={() => window.scrollTo({ top: document.getElementById('itinerary')?.offsetTop ?? 0, behavior: 'smooth' })}
          className="bg-[#d4a373] hover:bg-[#e6b88d] text-[#1a0f08] font-semibold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105"
        >
          Start Planning
        </button>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#d4a373] mb-8 text-center">Day-by-Day Itinerary</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(day => (
            <div 
              key={day} 
              className="bg-[#3a241a]/50 backdrop-blur-sm border border-[#d4a373]/20 rounded-xl p-6 hover:scale-[1.05] transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-[#d4a373] mb-2">Day {day}</h3>
              <p className="text-gray-300">{getDayActivity(day)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Budget Tracker Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#3a241a]/30">
        <h2 className="text-3xl font-bold text-[#d4a373] mb-6 text-center">Budget Tracker</h2>
        <form onSubmit={handleAddExpense} className="max-w-md mx-auto space-y-4">
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 bg-[#2a1b10]/50 border border-[#d4a373]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
              placeholder="e.g., Dinner at Al Mallah"
            />
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex-1">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">Amount (AED)</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value) || 0)}
                className="w-full px-4 py-2 bg-[#2a1b10]/50 border border-[#d4a373]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
                min="0"
                placeholder="0"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 bg-[#2a1b10]/50 border border-[#d4a373]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
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
            className="w-full bg-[#d4a373] hover:bg-[#e6b88d] text-[#1a0f08] font-semibold py-3 rounded-lg transition-transform duration-300 hover:scale-105"
          >
            Add Expense
          </button>
        </form>
        <div className="mt-8 text-center text-lg">
          <p className="text-gray-300">Total Spent: <span className="text-[#d4a373] font-bold">{totalSpent} AED</span></p>
          <p className="text-gray-300">Remaining Budget: <span className="text-[#d4a373] font-bold">{remainingBudget} AED</span></p>
        </div>
      </section>

      {/* Packing Checklist Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#d4a373] mb-6 text-center">Packing Checklist</h2>
        <ul className="space-y-2 text-gray-300">
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
            <li key={index} className="flex items-center space-x-3">
              <input 
                type="checkbox" 
                className="h-4 w-4 text-[#d4a373] bg-[#2a1b10]/50 border border-[#d4a373]/30 rounded focus:ring-2 focus:ring-[#d4a373]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Visa Info Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#3a241a]/30">
        <h2 className="text-3xl font-bold text-[#d4a373] mb-6 text-center">Visa Information</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Most nationalities receive a 30-day visa on arrival (free). Check latest rules at 
          <a 
            href="https://www.ica.gov.ae" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#d4a373] hover:underline"
          >
            https://www.ica.gov.ae
          </a>. Ensure passport validity ≥6 months.
        </p>
      </section>

      {/* Restaurant Recommendations Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#d4a373] mb-8 text-center">Top Restaurant Picks</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[ 
            { name: "Al Mallah", cuisine: "Lebanese", price: "$$", desc: "24-hr shawarma" },
            { name: "Pierchic", cuisine: "Seafood", price: "$$$", desc: "over-water dining" },
            { name: "Ravi Restaurant", cuisine: "Pakistani", price: "$", desc: "legendary biryani" },
            { name: "At.mosphere", cuisine: "International", price: "$$$$", desc: "Burj Khalifa 122nd floor" },
            { name: "Bu Qtair", cuisine: "Fish", price: "$", desc: "beachside fried fish" }
          ].map((restaurant, index) => (
            <div 
              key={index} 
              className="bg-[#3a241a]/50 backdrop-blur-sm border border-[#d4a373]/20 rounded-xl p-6 hover:scale-[1.05] transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-[#d4a373] mb-2">{restaurant.name}</h3>
              <p className="text-gray-300 mb-2"><span className="font-medium">{restaurant.cuisine}</span> • {restaurant.price}</p>
              <p className="text-gray-300">{restaurant.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Contacts Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#3a241a]/30">
        <h2 className="text-3xl font-bold text-[#d4a373] mb-6 text-center">Emergency Contacts</h2>
        <div className="space-y-4 text-gray-300">
          <p><span className="font-medium text-[#d4a373]">Police</span> – 999</p>
          <p><span className="font-medium text-[#d4a373]">Ambulance</span> – 998</p>
          <p><span className="font-medium text-[#d4a373]">Fire</span> – 997</p>
          <p><span className="font-medium text-[#d4a373]">Tourist Police</span> – 800-4444</p>
          <p><span className="font-medium text-[#d4a373]">Your Embassy</span> – (insert your country's code)</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>© 2025 Dubai Travel Planner. All rights reserved.</p>
      </footer>
    </div>
  );
};

function getDayActivity(day: number): string {
  const activities: Record<number, string> = {
    1: "Burj Khalifa",
    2: "Desert Safari",
    3: "Dubai Marina",
    4: "Al Fahidi & Gold Souk",
    5: "Palm Jumeirah",
    6: "Dubai Frame",
    7: "Abu Dhabi Trip",
    8: "Ski Dubai",
    9: "Creek Dhow Cruise",
    10: "Bluewaters Island"
  };
  return activities[day] || "";
}

export default App;