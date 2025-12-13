import React from "react";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AboutClub = () => {
  return (
    <div>
        <Navbar></Navbar>
        <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 mt-12">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Our English Club</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our English Club is dedicated to helping students enhance their
            English skills through interactive learning, workshops, and
            community activities. Join thousands of learners in improving
            communication, vocabulary, and confidence.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow space-y-3">
            <PiStudentBold size={60} className="text-indigo-500" />
            <h3 className="text-3xl font-bold">10,000+</h3>
            <p className="text-lg text-gray-600">Students</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow space-y-3">
            <GiTeacher size={60} className="text-green-500" />
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-lg text-gray-600">Expert Teachers</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow space-y-3">
            <FaRegCalendarAlt size={60} className="text-yellow-500" />
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-lg text-gray-600">Weekly Sessions</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow space-y-3">
            <MdOutlineVerified size={60} className="text-red-500" />
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-lg text-gray-600">Satisfaction</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To provide high-quality English education to learners of all
              levels, fostering confidence and proficiency through engaging
              activities, personalized guidance, and community support.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To become the leading English learning community where every
              student can achieve their goals and communicate effectively in a
              global environment.
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Achievements</h3>
          <ul className="max-w-4xl mx-auto space-y-4 text-gray-700 list-disc list-inside">
            <li>Trained over 10,000 students successfully in 5 years.</li>
            <li>Certified teachers from top universities and institutes.</li>
            <li>Organized more than 500 workshops and online webinars.</li>
            <li>High student satisfaction rate: 100% positive feedback.</li>
            <li>Collaborated with global English learning platforms.</li>
          </ul>
        </div>

        {/* Teachers Showcase */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">Meet Our Teachers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {["Alice Johnson", "Mark Smith", "Sara Lee", "John Doe"].map((teacher) => (
              <div key={teacher} className="bg-white p-6 rounded-lg shadow text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-200 flex items-center justify-center text-3xl font-bold text-white">
                  {teacher.split(" ")[0][0]}
                  {teacher.split(" ")[1][0]}
                </div>
                <h4 className="text-xl font-semibold">{teacher}</h4>
                <p className="text-gray-600">English Language Expert</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      
    </section>
    <Footer></Footer>
    </div>
  );
};

export default AboutClub;
