import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  // Check if props.expenses is an array with at least one valid Date
  const validExpenses = props.expenses.filter(
    (expense) => expense.date instanceof Date && !isNaN(expense.date)
  );

  if (validExpenses.length === 0) {
    return null; // If no valid expenses, return null
  }

  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of validExpenses) {
    const expenseMonth = expense.date.getMonth(); // Ensure expense.date is a valid Date
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
