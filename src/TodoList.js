import React, { useState } from "react";
import TodoItems from "./TodoItems";

function TodoList() {
  const [items, setItems] = useState([]);

  let inputElement;

  const addItem = (e) => {
    e.preventDefault();
    if (inputElement.value !== "") {
      const newItem = {
        text: inputElement.value,
        key: Date.now(),
      };
      setItems((prevState) => [...prevState, newItem]);
      inputElement.value = "";
    }
  };

  const deleteItem = (key) => {
    const filteredItems = items.filter((item) => item.key !== key);
    setItems(filteredItems);
  };

  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={addItem}>
          <input
            ref={(a) => (inputElement = a)}
            placeholder="Enter Task"
          ></input>
          <button type="submit">Add Task</button>
        </form>
        <TodoItems entries={items} deleteEntry={deleteItem} />
      </div>
    </div>
  );
}

export default TodoList;
