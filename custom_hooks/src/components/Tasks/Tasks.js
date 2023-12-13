// import React from 'react';
// import Section from '../UI/Section';
// import TaskItem from './TaskItem';
// import classes from './Tasks.module.css';

// const Tasks = (props) => {
//   let taskList = <h2>No tasks found. Start adding some!</h2>;

//   if (props.items.length > 0) {
//     taskList = (
//       <ul>
//         {props.items.map((task) => (
//           <TaskItem key={task.id}>{task.text}</TaskItem>
//         ))}
//       </ul>
//     );
//   }

//   let content = taskList;

//   if (props.error) {
//     content = (
//       <>
//         <button className={classes.button} onClick={props.onFetch}>
//           Try again
//         </button>
//         <p>{props.error}</p>
//       </>
//     );
//   }

//   if (props.loading) {
//     content = 'Loading tasks...';
//   }

//   return (
//     <Section>
//       <div className={classes.container}>
//         {content}
//         <button className={classes.button} onClick={props.onFetchData}>
//           Fetch Data
//         </button>
//       </div>
//     </Section>
//   );
// };

// export default Tasks;

import React from 'react';
import Section from '../UI/Section';
import TaskItem from './TaskItem';
import classes from './Tasks.module.css';

const Tasks = (props) => {
  let content = null;

  if (props.error) {
    content = (
      <>
        <button className={classes.button} onClick={props.onFetch}>
          Try again
        </button>
        <p>{props.error}</p>
      </>
    );
  } else if (props.loading) {
    content = 'Loading tasks...';
  } else if (props.items.length > 0) {
    content = (
      <ul>
        {props.items.map((task) => (
          <li key={task.id}>
            <TaskItem>{task.text}</TaskItem>
            <button onClick={() => props.onDeleteTask(task.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Section>
      <div className={classes.container}>
        {content}
        {!props.loading && !props.error && props.items.length === 0 && (
          <button className={classes.button} onClick={props.onFetchData}>
            Fetch Data
          </button>
        )}
      </div>
    </Section>
  );
};

export default Tasks;
