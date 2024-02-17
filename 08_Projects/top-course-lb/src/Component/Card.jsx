import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  const course = props.course;
  const likedCourse = props.likedCourse;
  const setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    // logic
    if (likedCourse.includes(course.id)) {
      // phele se like hua pda tha
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      // phele se like nhi hn ye course
      // insert krna h ye course liked courses me

      if (likedCourse.length === 0) {
        setLikedCourses([course.id]);
      } else {
        // non-empty phele se
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Succesfully");
    }
  }

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden ">
      <div className="relative">
        <img src={course.image.url} alt={course.image.alt} />
        <div
          className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] 
        grid place-items-center"
        >
          <button onClick={clickHandler}>
            {likedCourse.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4 text-white">
        <p className="font-semibold text-lg leading-6">{course.title}</p>
        <p className="mt-2">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
