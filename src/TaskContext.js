import React, { createContext, useContext, useState, useEffect } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "lists"), (snapshot) => {
      setLists(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });

    return () => unsubscribe();
  }, []);

  const addList = async (name) => {
    await addDoc(collection(db, "lists"), { name, tasks: [] });
  };

  const deleteList = async (id) => {
    await deleteDoc(doc(db, "lists", id));
  };

  const addTask = async (listId, task) => {
    const listRef = doc(db, "lists", listId);
    const updatedTasks = [...selectedList.tasks, task];
    await updateDoc(listRef, { tasks: updatedTasks });
    setSelectedList((prev) => ({ ...prev, tasks: updatedTasks }));
  };

  return (
    <TaskContext.Provider
      value={{ lists, selectedList, setSelectedList, addList, deleteList, addTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
