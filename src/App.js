import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Side from "./components/Side/Side";
import Home from "./components/Home/Home";
import Voting from "./pages/Voting/Voting";
import Breeds from "./pages/Breeds/Breeds";
import Gallery from "./pages/Gallery/Gallery";
import BreedPage from "./pages/BreedPage/BreedPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import Likes from "./pages/Likes/Likes";
import Favourites from "./pages/Favourites/Favourites";
import Dislikes from "./pages/Dislikes/Dislikes";
import Upload from './pages/Upload/Upload'

const App = () => {

  return (
    <div className="main-wrapper">
      {/* <div className="overlay"></div> */}
      <Router>
        <Side />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/breeds" exact element={<Breeds />} />
          <Route path="/breeds/:id" element={<BreedPage />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/gallery/upload" element={<Upload/>} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/dislikes" element={<Dislikes />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
