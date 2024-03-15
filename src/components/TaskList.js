import React from "react";
import Task from "./Task.js";

function TaskList({ tasks, deletedItem }) {
      
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => (
      
      <TaskList
        tasks = {tasks}
        key =  {task.text}
        deletedItem = {deletedItem}
        text = {task.text}
        category = {task.category}
      />
      ))}
    </div>
  );
}

export default TaskList;
