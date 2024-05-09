import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Characters from "@/containers/Characters";
import Comics from "@/containers/Comics";
import Fav from "@/containers/Fav";
import CharacterProfil from "@/containers/CharacterProfil";
import ComicProfil from "@/containers/ComicProfil";

import NavBars from "@/components/NavBars";
import Footer from "@/components/Footer";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen p-4 md:p-8">
      <Router>
        <NavBars />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/comics" element={<Comics />} />
            <Route path="/comics/comic/:comicId" element={<ComicProfil />} />
            <Route path="/comics/:characterId" element={<CharacterProfil />} />
            <Route path="/fav" element={<Fav />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
