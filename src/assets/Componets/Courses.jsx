import React from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Spoken Course",
    image: "../../public/asset/corses1.png",
    description:
      "Boost your confidence in English speaking through interactive sessions and real-life practice.",
  },
  {
    id: 2,
    title: "Kids Spoken",
    image: "../../public/asset/courses2.jpg",
    description:
      "Fun-filled English learning for kids with stories, games, and creative activities.",
  },
  {
    id: 3,
    title: "Online Course",
    image: "../../public/asset/coursess3.jpeg",
    description:
      "Learn English anytime, anywhere! Flexible online classes with live guidance.",
  },
  {
    id: 4,
    title: "Grammar Course",
    image: "../../public/asset/couses5.jpg",
    description:
      "Master English grammar with structured lessons and easy-to-follow exercises.",
  },
];

const Courses = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-3">
          Our Courses
        </h2>
        <p className="text-gray-600 text-lg">
          Explore our popular English learning programs designed for everyone.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-base mb-4">
                  {course.description}
                </p>
              </div>
              <Link
                to={`/courses/${course.id}`}
                className="mt-auto bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-500 text-center transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
