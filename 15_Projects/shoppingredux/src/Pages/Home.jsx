import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Product from "../Components/Product";
// import data from "./data.js";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      //   console.log(data);
    } catch (error) {
      console.log("error");
      setPosts([]);
    }

    setLoading(false);
  }

  // console.log(posts);

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div>
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
