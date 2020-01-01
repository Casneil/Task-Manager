import React, { useState, createContext } from "react";
import uuid from "uuid";

export const TaskListContext = createContext();

const TaskListContextProviver = props => {
  const [tasks, setTask] = useState([
    { title: "Read a book", id: 1 },
    { title: "Write some code ", id: 2 },
    { title: "Meet  Mahmoud", id: 3 }
  ]);

  const [editItem, setEditItem] = useState(null);

  const addTask = title => {
    setTask([...tasks, { title: title, id: uuid() }]);
  };

  const removeTask = id => {
    setTask(tasks.filter(task => task.id !== id));
  };

  const clearList = () => {
    setTask([]);
  };

  const findItem = id => {
    const item = task.find(task => task.id === id);

    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTask = tasks.map(task => (tasks.id === id ? { title, id } : task));
    setTask(newTask);
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
