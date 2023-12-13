import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14), // Make sure this is a valid Date object
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) // Make sure this is a valid Date object
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28), // Make sure this is a valid Date object
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12), // Make sure this is a valid Date object
  },
];


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const editExpenseHandler = (expenseId, updatedExpenseData) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.map((expense) => {
        return expense.id === expenseId ? { ...expense, ...updatedExpenseData } : expense;
      });
      return updatedExpenses;
    });
  };

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== expenseId));
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onEdit={editExpenseHandler} onDelete={deleteExpenseHandler} />
    </div>
  );
};

export default App;
