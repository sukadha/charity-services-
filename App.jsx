import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./Books/books";
import Clothes from "./Clothes/clothes";
import Food from "./Food/food";
import Handicap from "./Handicap/handicap";
import Money from "./Money/money";
import Plants from "./Plants/plants";
import Mainpage from "./Mainpage/mainpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/food" element={<Food />} />
        <Route path="/handicap" element={<Handicap />} />
        <Route path="/money" element={<Money />} />
        <Route path="/plants" element={<Plants />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
