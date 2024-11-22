import React, { useReducer, createContext } from "react";

const AppContext = createContext();

const initialState = {
  lists: JSON.parse(localStorage.getItem("lists")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIST":
      const newLists = [...state.lists, action.payload];
      localStorage.setItem("lists", JSON.stringify(newLists));
      return { ...state, lists: newLists };
    case "ADD_TASK":
      const updatedLists = state.lists.map((list) =>
        list.id === action.payload.listId
          ? { ...list, items: [...list.items, action.payload.task] }
          : list
      );
      localStorage.setItem("lists", JSON.stringify(updatedLists));
      return { ...state, lists: updatedLists };
    case "UPDATE_LIST_ITEMS":
      const modifiedLists = state.lists.map((list) =>
        list.id === action.payload.id ? { ...list, items: action.payload.items } : list
      );
      localStorage.setItem("lists", JSON.stringify(modifiedLists));
      return { ...state, lists: modifiedLists };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
};

export default AppContext;
