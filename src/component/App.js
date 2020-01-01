import React from "react";
import "../App.css";
import TaskList from "./TaskList";
import TaskContext from "../context/TaskListContext";

const App = () => {
  return (
    <TaskContext>
      <div>
        <TaskList />
      </div>
    </TaskContext>
  );
};

export default App;
