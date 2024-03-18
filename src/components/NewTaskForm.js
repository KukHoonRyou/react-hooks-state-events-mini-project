import React,{useState} from "react";

function NewTaskForm({categories, addNewTask}) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')

  const onTaskFormSubmit = (e) => {
    e.preventDefault();
    addNewTask({text, category})
}

  return(
    <form className = "new-task-form" onSubmit = {(e) => onTaskFormSubmit(e)}>
      <lable>
        Details
        <input type = "text" name = "text" value = {text} onChange = {(e) => setText(e.target.value)}/>
      </lable>
      <lable>
        Category
        <select name = "category" value = {category} onChange = {(e) => setCategory(e.target.value)}>
          <option></option>
            {categories.map(category => (
            <option key = {category}>
                {category}
            </option>
          ))}
        </select>
      </lable>
    <input type = "submit" value = "Add task" />
    </form>
    );
}

export default NewTaskForm;