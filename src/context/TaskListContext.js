import React, { useState, createContext } from "react";
import uuid from "uuid";

export const TaskListContext = createContext();

const TaskListContextProviver = props => {
  const [tasks, setTasks] = useState([
    { title: "Read a book", id: 1 },
    { title: "Write some code ", id: 2 },
    { title: "Meet  Mahmoud", id: 3 }
  ]);

  const [editItem, setEditItem] = useState(null);

  const addTask = title => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };

  const findItem = id => {
    const item = tasks.find(task => task.id === id);

    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTask = tasks.map(task => (task.id === id ? { title, id } : task));

    setTasks(newTask);
    setEditItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        editItem,
        tasks,
        addTask,
        editTask,
        removeTask,
        clearList,
        findItem
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProviver;
