// Default hooks

import { useEffect, useState } from "react";
import axios from "axios";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const API_KEY = "GeUvSahAAoSYYq7KNgasjMj7LfZhJ9Hc";

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const usegifs = (tag) => {
  const [gif, setgif] = useState("");
  const [loading, setloading] = useState("false");

  const fetchData = async (tag) => {
    setloading(true);

    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSearch = data.data.images.downsized_large.url;
    setgif(imageSearch);
    setloading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default usegifs;
