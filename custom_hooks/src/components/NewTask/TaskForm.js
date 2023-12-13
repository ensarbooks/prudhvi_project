import React, { useState } from 'react';
import classes from './TaskForm.module.css';

const TaskForm = (props) => {
  const [enteredTask, setEnteredTask] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    // Check if there's no input text to prevent sending empty tasks
    if (!enteredTask.trim()) {
      return;
    }

    props.onEnterTask(enteredTask);
    setEnteredTask(''); // Reset the input field
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="task"
          value={enteredTask}
          onChange={(event) => setEnteredTask(event.target.value)}
        />
      </div>
      <div className={classes.actions}>
        <button type="submit">{props.loading ? 'Adding Task...' : 'Add Task'}</button>
      </div>
    </form>
  );
};

export default TaskForm;
