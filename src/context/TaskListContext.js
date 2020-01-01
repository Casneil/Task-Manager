import React, { useState, createContext } from "react";

export const TaskListContext = createContext();

const TaskListContextProviver = props => {
  const [tasks, setTask] = useState([
    { task: "Read a book", id: 1 },
    { task: "Write some code ", id: 2 },
    { task: "Meet  Mahmoud", id: 3 }
  ]);
  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProviver;
