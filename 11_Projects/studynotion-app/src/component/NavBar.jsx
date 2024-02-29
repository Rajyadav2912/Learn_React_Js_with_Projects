import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export const NavBar = (props) => {
  const isloggedIn = props.isloggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between text-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="w-[160px] h-[32px]"
          loading="lazy"
        />
      </Link>

      <nav>
        <ul className="flex gap-x-6 text-richblack-100">
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
      <div className="flex items-center gap-x-4">
        {/*when user not log in show login btn or signup btn page with login show logout btn or dashboard btn*/}

        {!isloggedIn && (
          <Link to="/login">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[15px] rounded-[8px] border-richblack-700 ">
              LogIn
            </button>
          </Link>
        )}
        {!isloggedIn && (
          <Link to="/signup">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[15px] rounded-[8px] border-richblack-700 ">
              Sign Up
            </button>
          </Link>
        )}
        {isloggedIn && (
          <Link to="/">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[15px] rounded-[8px] border-richblack-700 "
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              {" "}
              LogOut
            </button>
          </Link>
        )}
        {isloggedIn && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[15px] rounded-[8px] border-richblack-700 ">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
