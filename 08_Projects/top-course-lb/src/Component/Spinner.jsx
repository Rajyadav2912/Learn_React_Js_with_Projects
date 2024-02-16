import React from "react";
import "./CSS/Spinner.css";

export const Spinner = () => {
  return (
    <div>
      <div className="spinner w-[56px] h-[56px] "></div>
      <p>Loading....</p>
    </div>
  );
};
