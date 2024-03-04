import React from "react";
import NavBar from "./Components/NavBar";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <div>
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
