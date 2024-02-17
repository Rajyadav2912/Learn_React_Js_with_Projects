import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";

import Navbar from "./Component/Navbar";
import Filter from "./Component/Filter";
import Cards from "./Component/Cards";
import { toast } from "react-toastify";
import { Spinner } from "./Component/Spinner";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const result = await response.json();
      // save data into a variable
      setCourses(result.data);

      // console.log(result.data);
    } catch (error) {
      toast.error("something went wrong");
      // console.log("error ayi hn ");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
