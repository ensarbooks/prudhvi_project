import React, { useState } from 'react';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [expenseData, setExpenseData] = useState({ title: '', amount: '', date: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExpenseData((prevData) => ({ ...prevData, [name]: value }));
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const submitExpenseHandler = (event) => {
    event.preventDefault();
    props.onAddExpense(expenseData);
    setExpenseData({ title: '', amount: '', date: '' });
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && (
        <form onSubmit={submitExpenseHandler}>
          <div>
            <label>Title</label>
            <input type="text" name="title" value={expenseData.title} onChange={handleInputChange} />
          </div>
          <div>
            <label>Amount</label>
            <input type="number" name="amount" value={expenseData.amount} onChange={handleInputChange} />
          </div>
          <div>
            <label>Date</label>
            <input type="date" name="date" value={expenseData.date} onChange={handleInputChange} />
          </div>
          <button type="submit">Add Expense</button>
        </form>
      )}
    </div>
  );
};

export default NewExpense;
