
import React, { useState } from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import ExpenseForm from '../NewExpense/ExpenseForm';
import '../Expenses/ExpenseItem';

const ExpenseItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const submitHandler = (editedExpense) => {
    props.onEdit(props.id, editedExpense);
    setIsEditing(false);
  };

  return (
    <li>
      <Card className='expense-item'>
        {!isEditing && (
          <div>
            <ExpenseDate date={props.date} />

            <div className='expense-item_description'>
              <h2>{props.title}</h2>
              <div className='expense-item_price'>${props.amount.toFixed(2)}</div>
            </div>

            <div className='expense-item__actions'>
              <button onClick={startEditingHandler}>Edit</button>
              <button onClick={deleteHandler}>Delete</button>
            </div>
          </div>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={submitHandler}
            onCancel={stopEditingHandler}
            isEditing={isEditing}
            initialData={{ title: props.title, amount: props.amount, date: props.date }}
            onEdit={props.onEdit} // Pass the onEdit function to the ExpenseForm
          />
        )}
      </Card>
    </li>
  );
};

export default ExpenseItem;
