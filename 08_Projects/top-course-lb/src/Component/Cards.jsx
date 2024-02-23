import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  const courses = props.courses;
  const category = props.category;

  const [likedCourse, setLikedCourses] = useState([]);

  //   returns you a list of all courses recevied from the api response
  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];

      Object.values(courses).forEach((array) => {
        array.forEach((course) => {
          allCourses.push(course);
        });
      });

      console.log(allCourses);

      return allCourses;
    } else {
      // main sirf specific category ka data array krunga
      // console.log(courses[category]);
      return courses[category];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        // console.log(course);
        return (
          <Card
            key={course.id}
            course={course}
            likedCourse={likedCourse}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
