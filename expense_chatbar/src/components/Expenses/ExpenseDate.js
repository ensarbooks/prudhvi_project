import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
  // Check if props.date is a valid Date object before using it
  if (!(props.date instanceof Date && !isNaN(props.date))) {
    return null; // Return null if props.date is not a valid Date
  }

  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_year">{year}</div>
      <div className="expense-date_day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
