import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      <ul className="list">
        {tasks.length > 0 ? (
          tasks.map(task => {
            return <Task key={task.id} task={task} />;
          })
        ) : (
          <div className="no-tasks">No Tasks Available</div>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
