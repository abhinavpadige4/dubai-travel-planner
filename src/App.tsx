import { useState } from 'react';
import Hero from './components/Hero';
import Itinerary from './components/Itinerary';
import BudgetTracker from './components/BudgetTracker';
import PackingChecklist from './components/PackingChecklist';
import VisaInfo from './components/VisaInfo';
import RestaurantRecommendations from './components/RestaurantRecommendations';
import EmergencyContacts from './components/EmergencyContacts';

function App() {
  const [budget, setBudget] = useState(5000);
  const [expenses, setExpenses] = useState<Array<{ description: string; amount: number; category: string }>>([]);

  const addExpense = (description: string, amount: number, category: string) => {
    setExpenses([...expenses, { description, amount, category }]);
    setBudget(budget - amount);
  };

  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remainingBudget = budget;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2d1b0e] to-[#1a0f05] text-white font-sans antialiased">
      <Hero />
      <Itinerary />
      <BudgetTracker 
        totalSpent={totalSpent} 
        remainingBudget={remainingBudget} 
        onAddExpense={addExpense} 
      />
      <PackingChecklist />
      <VisaInfo />
      <RestaurantRecommendations />
      <EmergencyContacts />
    </div>
  );
}

export default App;