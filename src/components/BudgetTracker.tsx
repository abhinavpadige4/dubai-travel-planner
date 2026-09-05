import React, { useState } from 'react';

const BudgetTracker: React.FC = () => {
  const [totalBudget, setTotalBudget] = useState<number | ''>('');
  const [expenses, setExpenses] = useState<Array<{ id: number; description: string; amount: number }>>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<string>('');

  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = typeof totalBudget === 'number' ? totalBudget - totalSpent : 0;

  const handleAddExpense = () => {
    const desc = description.trim();
    const amt = parseFloat(amount);
    if (desc && !isNaN(amt) && amt > 0) {
      setExpenses([...expenses, { id: Date.now(), description: desc, amount: amt }]);
      setDescription('');
      setAmount('');
    }
  };

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#D4A373] to-[#E8C29A]">
        Budget Tracker
      </h2>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-[#2D1B17]/80 backdrop-blur-sm border border-[#D4A373]/30 rounded-xl p-6">
          <label className="block text-sm font-medium mb-2 text-[#E8C29A]/90">Total Budget (USD)</label>
          <input
            type="number"
            value={totalBudget === '' ? '' : totalBudget}
            onChange={(e) => setTotalBudget(e.target.value === '' ? '' : parseFloat(e.target.value) || 0)}
            placeholder="Enter your budget"
            className="w-full px-4 py-3 bg-[#1A0F08]/50 border border-[#D4A373]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50"
          />
        </div>

        <div className="bg-[#2D1B17]/80 backdrop-blur-sm border border-[#D4A373]/30 rounded-xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-[#E8C29A]/90">Add Expense</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full px-4 py-3 bg-[#1A0F08]/50 border border-[#D4A373]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-[#E8C29A]/90">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                className="w-full px-4 py-3 bg-[#1A0F08]/50 border border-[#D4A373]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50"
              />
            </div>
            <button
              onClick={handleAddExpense}
              className="bg-[#D4A373] hover:bg-[#E8C29A] text-[#1A0F08] font-semibold py-3 px-6 rounded-lg transition-transform duration-300 hover:-translate-y-2 shadow-lg sm:mt-0 mt-4"
            >
              Add Expense
            </button>
          </div>
        </div>

        <div className="bg-[#2D1B17]/80 backdrop-blur-sm border border-[#D4A373]/30 rounded-xl p-6 text-center">
          <p className="text-2xl font-bold">
            Spent: ${totalSpent.toFixed(2)} / ${typeof totalBudget === 'number' ? totalBudget.toFixed(2) : '0'}
          </p>
          {typeof totalBudget === 'number' && totalBudget > 0 && (
            <p className="mt-2 text-[#E8C29A]/90">
              Remaining: ${remaining.toFixed(2)}
            </p>
          )}
        </div>

        {expenses.length > 0 && (
          <div className="bg-[#2D1B17]/80 backdrop-blur-sm border border-[#D4A373]/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Expenses</h3>
            <ul className="space-y-3">
              {expenses.map((exp) => (
                <li key={exp.id} className="flex justify-between text-[#E8C29A]/90">
                  <span>{exp.description}</span>
                  <span>${exp.amount.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default BudgetTracker;