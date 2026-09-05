import React,tsx
import React, { useState } from 'react';

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

const BudgetTracker: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [remainingBudget, setRemainingBudget] = useState(5000);

  const categories = ['Food', 'Transport', 'Activities', 'Shopping', 'Other'];

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim() || !amount || parseFloat(amount) <= 0) return;

    const newExpense: Expense = {
      id: Date.now(),
      description: description.trim(),
      amount: parseFloat(amount),
      category,
    };

    setExpenses([...expenses, newExpense]);
    setRemainingBudget(prev => prev - parseFloat(amount));
    setDescription('');
    setAmount('');
    setCategory('Food');
  };

  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Budget Tracker</h2>
      
      <form onSubmit={handleAddExpense} className="space-y-4 mb-6">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Dinner at Al Mallah"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-d4a373"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Amount (AED)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
              step="0.01"
              placeholder="e.g., 120.50"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-d4a373"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-d4a373"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-d4a373 text-white font-bold py-3 px-6 rounded-lg hover:bg-d4a373/90 transition-colors duration-200 transform hover:scale-[1.02]"
        >
          Add Expense
        </button>
      </form>

      <div className="space-y-4">
        <div className="flex justify-between items-center text-lg font-semibold text-white">
          <span>Total Spent:</span>
          <span>{totalSpent.toFixed(2)} AED</span>
        </div>
        <div className="flex justify-between items-center text-lg font-semibold text-white">
          <span>Remaining Budget:</span>
          <span className={remainingBudget < 0 ? 'text-red-400' : 'text-green-400'}>
            {remainingBudget.toFixed(2)} AED
          </span>
        </div>
        <div className="h-0.5 bg-gray-700 my-4"></div>
        {expenses.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white mb-3">Recent Expenses</h3>
            {expenses
              .slice()
              .reverse()
              .slice(0, 5)
              .map((exp) => (
                <div
                  key={exp.id}
                  className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg"
                >
                  <div>
                    <span className="font-medium text-white">{exp.description}</span>
                    <span className="text-sm text-gray-400 ml-2">{exp.category}</span>
                  </div>
                  <span className="text-lg font-semibold text-d4a373">
                    {exp.amount.toFixed(2)} AED
                  </span>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetTracker;