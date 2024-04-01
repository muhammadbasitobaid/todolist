import React from "react";

function TodoItems(props) {
  const { entries, deleteEntry } = props;
  const deleteEntryTask = (key) => {
    deleteEntry(key);
  };

  const createTasks = (item) => {
    return (
      <li onClick={() => deleteEntryTask(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  };

  const todoEntries = entries;
  const listItems = todoEntries.map(createTasks);

  return <ul className="theList">{listItems}</ul>;
}

export default TodoItems;
