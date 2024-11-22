import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddListForm from "./components/AddListForm";
import ListView from "./components/ListView";
import { AppProvider } from "./context/AppContext";
import "./styles/App.css";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<AddListForm />} />
            <Route path="/list/:id" element={<ListView />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AppProvider>
  );
};

export default App;
