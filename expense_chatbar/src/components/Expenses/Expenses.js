import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    const expenseDate = new Date(expense.date);

    // Check if expenseDate is a valid Date object before accessing its properties
    if (expenseDate instanceof Date && !isNaN(expenseDate)) {
      return expenseDate.getFullYear().toString() === filteredYear;
    }

    return false;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} onDelete={props.onDelete} onEdit={props.onEdit} />
    </Card>
  );
};

export default Expenses;
