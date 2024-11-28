import React, { useState } from "react";
import { useTaskContext } from "../TaskContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { lists, addList, deleteList } = useTaskContext();
  const [listName, setListName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listName) {
      addList(listName);
      setListName("");
    }
  };

  return (
    <div>
      <h1>Task Lists</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          placeholder="New List Name"
        />
        <button type="submit">Add List</button>
      </form>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            <Link to={`/list/${list.id}`}>{list.name}</Link>
            <button onClick={() => deleteList(list.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
