import React from "react";

function Task({ text, category, deletedItem}) {
  function handleClick() {
    deletedItem(text);
  }
  
  return (
    <div className="tasks">
    <div className="label">{ category }</div>
    <div className="text">{ text }</div>
      <button onClick = {handleClick} className = "delete">X</button>
    </div>
  );
}

export default Task;
