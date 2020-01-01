import React, { useContext } from "react";
import TaskContext from "../context/TaskContext";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div>
      <ul className="list">
        {tasks.map(task => {
          return;
        })}
      </ul>
    </div>
  );
};

export default TaskList;
