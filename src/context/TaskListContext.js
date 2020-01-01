import React, { useState, createContext } from "react";

export const TaskListContext = createContext();

const TaskListContextProviver = props => {
  const [tasks, setTask] = useState([
    { title: "Read a book", id: 1 },
    { title: "Write some code ", id: 2 },
    { title: "Meet  Mahmoud", id: 3 }
  ]);
  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProviver;
