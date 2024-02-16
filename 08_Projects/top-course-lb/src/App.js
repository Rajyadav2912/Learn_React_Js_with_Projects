import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";

import Navbar from "./Component/Navbar";
import Filter from "./Component/Filter";
import Cards from "./Component/Cards";
import { toast } from "react-toastify";
import { Spinner } from "./Component/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

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
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>{loading ? <Spinner /> : <Cards courses={courses} />}</div>
    </div>
  );
};

export default App;
