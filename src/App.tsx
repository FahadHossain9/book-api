import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Articles from "./components/Articles/Articles";
import BestSellerBooks from "./components/Books/Books";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/books" element={<BestSellerBooks />} />
      </Routes>
    </Router>
  );
};

export default App;
