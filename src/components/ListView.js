import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import AddItemForm from "./AddItemForm";
import "./../styles/components.css";

const ListView = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(AppContext);

  const list = state.lists.find((l) => l.id === parseInt(id));
  if (!list) return <p>List not found!</p>;

  const handleDeleteTask = (taskId) => {
    const updatedItems = list.items.filter((item) => item.id !== taskId);
    dispatch({ type: "UPDATE_LIST_ITEMS", payload: { id: list.id, items: updatedItems } });
  };

  const toggleComplete = (taskId) => {
    const updatedItems = list.items.map((item) =>
      item.id === taskId ? { ...item, completed: !item.completed } : item
    );
    dispatch({ type: "UPDATE_LIST_ITEMS", payload: { id: list.id, items: updatedItems } });
  };

  return (
    <div className="list-view">
      <h2>{list.name}</h2>
      <AddItemForm listId={list.id} />
      <ul>
        {list.items.map((item) => (
          <li key={item.id} className={`task ${item.completed ? "completed" : ""}`}>
            {item.task} ({item.priority})
            <button onClick={() => toggleComplete(item.id)}>
              {item.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => handleDeleteTask(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
