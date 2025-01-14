import React from "react";

function Task({ text, category, onDeleteTask }) {
  function handleClick() {
    onDeleteTask(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;


// import React from "react";

// function Task({ text, category, handleDelete }) {
//   const handleClick = () => {
//     handleDelete(text)
//   }
  
//   return (
//     <div className="tasks">
//     <div className="label">{ category }</div>
//     <div className="text">{ text }</div>
//       <button className = "delete" onClick = {handleClick}>X</button>
//     </div>
//   );
// }

// export default Task;
