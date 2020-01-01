import React from "react";
import "../App.css";
import TaskList from "./TaskList";
import TaskContext from "../context/TaskListContext";
import TaskForm from "./TaskForm";
import Header from "./Header";

const App = () => {
  return (
    <TaskContext>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskContext>
  );
};

export default App;
