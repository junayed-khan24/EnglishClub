import React from "react";
import { Link } from "react-router-dom";

// Import images
import Course1 from "../../../public/asset/corses1.png";
import Course2 from "../../../public/asset/courses2.jpg";
import Course3 from "../../../public/asset/coursess3.jpeg";
import Course4 from "../../../public/asset/couses5.jpg";

const courses = [
  {
    id: 1,
    title: "Spoken Course",
    image: Course1,
    description:
      "Boost your confidence in English speaking through interactive sessions and real-life practice.",
    price: "$49",
    rating: 4.8,
    date: "Jan 15, 2025",
  },
  {
    id: 2,
    title: "Kids Spoken",
    image: Course2,
    description:
      "Fun-filled English learning for kids with stories, games, and creative activities.",
    price: "$29",
    rating: 4.5,
    date: "Feb 10, 2025",
  },
  {
    id: 3,
    title: "Online Course",
    image: Course3,
    description:
      "Learn English anytime, anywhere! Flexible online classes with live guidance.",
    price: "$39",
    rating: 4.7,
    date: "Mar 5, 2025",
  },
  {
    id: 4,
    title: "Grammar Course",
    image: Course4,
    description:
      "Master English grammar with structured lessons and easy-to-follow exercises.",
    price: "$59",
    rating: 4.9,
    date: "Apr 20, 2025",
  },
];

const Courses = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 md:px-10">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-3">
          Our Courses
        </h2>
        <p className="text-gray-600 text-lg">
          Explore our popular English learning programs designed for everyone.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 md:h-56 lg:h-60 object-cover"
              />
              {/* Price Tag */}
              <div className="absolute top-3 right-3 bg-red-600 text-white font-bold py-1 px-3 rounded-full text-sm md:text-base shadow-lg">
                {course.price}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4 flex-1 leading-relaxed">
                {course.description}
              </p>

              {/* Rating & Date */}
              <div className="flex justify-between items-center mb-4 text-gray-500 text-sm md:text-base">
                <span>⭐ {course.rating}</span>
                <span>{course.date}</span>
              </div>

              <Link
                to={`/courses/${course.id}`}
                className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg text-center transition-all duration-300"
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
