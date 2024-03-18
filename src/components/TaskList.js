import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const taskList = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
    />
  ));
  return <div className="tasks">{taskList}</div>;
}

export default TaskList;

// import React from "react";
// import Task from "./Task.js";

// function TaskList({ tasks, handleDelete }) {
//     const taskList = tasks.map(task => (
//       <Task 
//         text = {task.text}
//         category = {task.category}
//         key = {task.text}
//         handleDelete = {handleDelete}
//       />
//     ))
//   return (
//     <div className = "tasks">
//       {taskList}
//     </div>
//   );
// }

// export default TaskList;
