import React from "react";

export const NavBar = () => {
  return (
    <div className=" my-4 h-[60px] rounded-lg bg-white flex  
    items-center justify-center gap-2 text-xl font-medium">
      <img src="/images/firebase.svg" alt="img" />
      <h1>Firebase CRUD Contact App</h1>
    </div>
  );
};
