import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "./Task";
import AddTask from "./AddTask";

const TaskList = () => {
  const Tasks = useSelector((state) => state.TaskReducer.Tasks);

  return (
    <div>
      <AddTask></AddTask>
      {Tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
