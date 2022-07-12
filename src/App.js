import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Side from "./components/Side/Side";
import Home from "./components/Home/Home";
import Voting from "./pages/Voting/Voting";
import Breeds from "./pages/Breeds/Breeds";
import Gallery from "./pages/Gallery/Gallery";

const App = () => {
  console.log("render App");
  return (
    <div className="main-wrapper">
      <Router>
        <Side />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
