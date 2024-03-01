import React, { useState } from "react";
import Spinner from "./Spinner";
import usegifs from "../hook/usegifs";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// const API_KEY = "GeUvSahAAoSYYq7KNgasjMj7LfZhJ9Hc";

const Tag = () => {
  const [tag, setTag] = useState("");
  const { gif, loading, fetchData } = usegifs(tag);

  return (
    <div
      className="w-1/2  bg-blue-500 rounded-lg 
    border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-[30px]"
    >
      <h2 className="mt-[15px] text-2xl underline uppercase font-bold ">
        A Random Gifs
      </h2>

      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} alt="gif" width={400} className="rounded-xl" />
      )}

      <input
        className="w-10/12 text-lg py-2 capitalize rounded-3xl text-center mb-[3px] hover:shadow"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
        placeholder="Search any gifs name"
      />

      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 mb-[20px] bg-yellow-500 text-lg py-2 uppercase rounded-3xl hover:shadow"
      >
        Submit
      </button>
    </div>
  );
};

export default Tag;
