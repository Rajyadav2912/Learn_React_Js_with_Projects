import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export const NavBar = (props) => {
  const isloggedIn = props.isloggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-evenly mt-3">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="w-[160px] h-[32px]"
          loading="lazy"
        />
      </Link>

      <nav>
        <ul className="flex gap-3 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login - Signup - LogOut - Dashboard */}
      <div className="flex mx-3 gap-3 font-semibold">
        {/*when user not log in show login btn or signup btn page with login show logout btn or dashboard btn*/}

        {!isloggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        {!isloggedIn && (
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        )}
        {isloggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Log Out
            </button>
          </Link>
        )}
        {isloggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};
