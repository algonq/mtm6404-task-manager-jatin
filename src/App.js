import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TaskProvider } from "./TaskContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ListDetail from "./components/ListDetail";

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:id" element={<ListDetail />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
