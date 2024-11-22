import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import "./../styles/components.css";

const AddListForm = () => {
  const [listName, setListName] = useState("");
  const { dispatch } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!listName.trim()) {
      alert("Please enter a valid list name.");
      return;
    }
    dispatch({
      type: "ADD_LIST",
      payload: { id: Date.now(), name: listName, items: [] },
    });
    setListName("");
  };

  return (
    <div className="add-list-container">
      <h2>Create a New List</h2>
      <p>
        Organize your tasks efficiently by creating separate lists. Enter a name
        for your list below and click "Add List" to get started.
      </p>
      <form onSubmit={handleSubmit} className="add-list-form">
        <input
          type="text"
          placeholder="Enter list name (e.g., Groceries, Work Tasks)"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
        <button type="submit">Add List</button>
      </form>
    </div>
  );
};

export default AddListForm;
