import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/NavBar";
import Articles from "./components/Articles/Articles";
import BestSellerBooks from "./components/Books/Books";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/books" element={<BestSellerBooks />} />
      </Routes>
    </Router>
  );
};

export default App;
