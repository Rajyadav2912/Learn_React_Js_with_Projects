import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const API_KEY = "GeUvSahAAoSYYq7KNgasjMj7LfZhJ9Hc";

const Tag = () => {
  const [tag, setTag] = useState("");
  const [gif, setgif] = useState("");
  const [loading, setloading] = useState("false");

  const fetchData = async () => {
    setloading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageSearch = data.data.images.downsized_large.url;
    setgif(imageSearch);
    setloading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    console.log("click hua ");
    fetchData();
  }

  return (
    <div
      className="w-1/2  bg-blue-500 rounded-lg 
    border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-[30px]"
    >
      <h2 className="mt-[15px] text-2xl underline uppercase font-bold ">
        A Random Gifs
      </h2>

      {loading ? <Spinner /> : <img src={gif} alt="gif" width={400} />}

      <input
        className="w-10/12 text-lg py-2 capitalize rounded-3xl text-center mb-[3px] hover:shadow"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      <button
        onClick={clickHandler}
        className="w-10/12 mb-[20px] bg-yellow-500 text-lg py-2 uppercase rounded-3xl hover:shadow"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
