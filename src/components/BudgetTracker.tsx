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
    setDescription('');
    setAmount('');
    setCategory('Food');
    setRemainingBudget(remainingBudget - parseFloat(amount));
  };

  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Budget Tracker</h2>
      <form onSubmit={handleAddExpense} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-d4a373"
              placeholder="e.g., Burj Khalifa tickets"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1">Amount (AED)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-d4a373"
              min="0"
              step="0.01"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-d4a373"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-d4a373 hover:bg-d4a373/90 text-white font-medium px-5 py-2 rounded-lg transition-transform duration-200 hover:scale-105"
            >
              Add Expense
            </button>
          </div>
        </div>
      </form>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-white">Summary</span>
          <span className="text-d4a373 font-bold">
            Total Spent: {totalSpent.toFixed(2)} AED | Remaining Budget: {remainingBudget.toFixed(2)} AED
          </span>
        </div>
        {expenses.length > 0 ? (
          <ul className="space-y-3">
            {expenses
              .slice()
              .sort((a, b) => b.id - a.id)
              .map((exp) => (
                <li
                  key={exp.id}
                  className="flex justify-between items-center p-3 bg-white/5 rounded-lg"
                >
                  <div>
                    <span className="font-medium text-white">{exp.description}</span>
                    <span className="block text-sm text-white/60">{exp.category}</span>
                  </div>
                  <span className="text-d4a373 font-medium">{exp.amount.toFixed(2)} AED</span>
                </li>
              ))}
          </ul>
        ) : (
          <p className="text-white/60 text-center py-4">No expenses added yet.</p>
        )}
      </div>
    </div>
  );
};

export default BudgetTracker;