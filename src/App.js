import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Side from "./components/Side/Side";
import Home from "./components/Home/Home";
import Voting from "./pages/Voting";

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <Side />
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/voting" element={<Voting/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
