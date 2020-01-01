import React, { useState, createContext } from "react";

export const TaskContext = createContext();

const TaskContextProviver = () => {
  const [task, setTask] = useState([
    { task: "Read a book", id: 1 },
    { task: "Write some code ", id: 2 },
    { task: "Meet  Mahmoud", id: 3 }
  ]);
  return <div>Task Context Context</div>;
};

export default TaskContextProviver;
