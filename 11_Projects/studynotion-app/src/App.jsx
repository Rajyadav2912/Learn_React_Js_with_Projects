import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { NavBar } from "./component/NavBar";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import PrivateRoute from "./component/PrivateRoute";

const App = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col text-white">
      <NavBar isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isloggedIn={isloggedIn} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isloggedIn={isloggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
