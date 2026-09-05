import React, { createContext, useState, useContext } from 'react';

const BudgetContext = createContext();

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
};

export const BudgetProvider = ({ children }) => {
  const [estimatedBudget, setEstimatedBudget] = useState(5000);
  const [actualSpending, setActualSpending] = useState(0);
  const [categories, setCategories] = useState({
    Accommodation: 0,
    Food: 0,
    Transport: 0,
    Activities: 0,
    Shopping: 0,
  });

  const updateCategory = (category, amount) => {
    const newCategories = { ...categories, [category]: parseFloat(amount) || 0 };
    setCategories(newCategories);
    setActualSpending(Object.values(newCategories).reduce((a, b) => a + b, 0));
  };

  return (
    <BudgetContext.Provider value={{ 
      estimatedBudget, 
      setEstimatedBudget, 
      actualSpending, 
      categories, 
      updateCategory 
    }}>
      {children}
    </BudgetContext.Provider>
  );
};