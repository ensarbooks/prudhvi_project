
import React, { useState, useEffect } from 'react';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [shouldFetchData, setShouldFetchData] = useState(false);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  const transformTasks = (tasksObj) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  const fetchDataHandler = () => {
    setShouldFetchData(true);
  };

  // Fetch data when shouldFetchData is true
  useEffect(() => {
    if (shouldFetchData) {
      fetchTasks(
        { url: 'https://pry-data-ee556-default-rtdb.firebaseio.com/tasks.json' },
        transformTasks
      );
      setShouldFetchData(false); // Reset the flag after fetching
    }
  }, [shouldFetchData, fetchTasks]);

  const taskAddHandler = (task) => {
    setIsAddingTask(true);

    fetchTasks(
      {
        url: 'https://pry-data-ee556-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      },
      () => {
        setShouldFetchData(true); // Fetch data after adding a task
        setIsAddingTask(false);
      }
    );
  };

  const tryAgainHandler = () => {
    setShouldFetchData(true); // Fetch data when "Try Again" is pressed
  };

  const deleteTaskHandler = (taskId) => {
    // Implement the logic to delete the task with the given taskId
    // This can be done by sending a DELETE request to the API
    // Adjust the URL and method accordingly based on your API structure

    // For illustration purposes, let's assume you have a DELETE API endpoint
    fetch(`https://pry-data-ee556-default-rtdb.firebaseio.com/tasks/${taskId}.json`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Delete request failed!');
        }
        // Trigger a data fetch after successful deletion
        setShouldFetchData(true);
      })
      .catch(error => {
        console.error('Error deleting task:', error);
      });
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} isAddingTask={isAddingTask} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={tryAgainHandler}
        onFetchData={fetchDataHandler}
        onDeleteTask={deleteTaskHandler}
      />
    </React.Fragment>
  );
}

export default App;
