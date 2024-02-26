import React from "react";
import "./App.css";
import Testimonial from "./Components/Testimonial";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-gray-200 text-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonial</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
