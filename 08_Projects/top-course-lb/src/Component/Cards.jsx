import React from "react";
import Card from "./Card";

const Cards = (props) => {
  const courses = props.courses;
  //   returns you a list of all courses recevied from the api response
  const getCourses = () => {
    let allCourses = [];

    Object.values(courses).forEach((array) => {
      array.forEach((course) => {
        allCourses.push(course);
      });
    });

    // console.log(allCourses);

    return allCourses;
  };

  return (
    <div>
      {getCourses().map((course) => {
        // console.log(course);
        return <Card key={course.id} course={course} />;
      })}
    </div>
  );
};

export default Cards;
