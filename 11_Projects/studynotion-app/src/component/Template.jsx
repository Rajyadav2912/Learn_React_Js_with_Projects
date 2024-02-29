import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Template = ({ title, desc1, desc2, image, formtyped, setIsLoggedIn }) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] mx-auto py-12 gap-x-12 gap-y-0">
      <div>
        {/* className="w-11/12 max-w-[450px] mx-auto" */}
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-richblack-100 italic">{desc1}</span>
          <br />
          <span className="text-blue-100 italic">{desc2}</span>
        </p>
        {formtyped === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <button>
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div>
        <img
          src={frameImage}
          alt="pattern"
          className="w-[558px] h-[504px]"
          loading="lazy"
        />

        <img
          src={image}
          alt="students"
          className="w-[558px] h-[490px]"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Template;
