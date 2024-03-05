import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="spinner"></div>
      <p className="text-xl font-semibold">Loading...</p>
    </div>
  );
};

export default Spinner;
