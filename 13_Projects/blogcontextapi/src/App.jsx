import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";

export const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-1">
      <Header />
      <Blog />
      <Pagination />
    </div>
  );
};

export default App;
