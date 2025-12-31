import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Import images (keeping your structure)
import Course1 from "../../../public/asset/corses1.png";
import Course2 from "../../../public/asset/courses2.jpg";
import Course3 from "../../../public/asset/coursess3.jpeg";
import Course4 from "../../../public/asset/couses5.jpg";

// ⭐ Star component
const Stars = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-lg ${
            i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

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
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-16 px-4 md:px-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-4">
          Our Courses
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Explore our popular English learning programs designed for beginners,
          kids, and professionals.
        </p>
      </motion.div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <motion.img
                src={course.image}
                alt={course.title}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
                className="w-full h-52 md:h-56 object-cover"
              />

              {/* Price badge */}
              <div className="absolute top-4 right-4 bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                {course.price}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                {course.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed flex-1">
                {course.description}
              </p>

              {/* Rating & Date */}
              <div className="flex items-center justify-between mb-5">
                <Stars rating={course.rating} />
                <span className="text-sm text-gray-500">{course.date}</span>
              </div>

              <Link
                to={`/courses/${course.id}`}
                className="mt-auto bg-red-600 hover:bg-red-500 text-white font-semibold py-2.5 rounded-xl text-center transition-all duration-300"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
