import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Announce from "./Announce";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className=" top-0 left-0 w-full bg-white shadow-md -mb-16">
        <div className="bg-red-900 text-white text-sm py md:py-1">
          <Announce></Announce>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between h-16 items-center">

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-red-800">
              <span className="text-3xl">E</span>nglish
              <span className="text-3xl">C</span>lub
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center font-bold">
              <Link to="/" className="hover:text-red-600">Home</Link>
              <Link to="/" className="hover:text-red-600">About</Link>
              <Link to="/" className="hover:text-red-600">Courses</Link>
              <Link to="/" className="hover:text-red-600">Contact</Link>

              <div className="flex items-center gap-2 text-red-800">
                <FaPhoneAlt />
                01867-26****
              </div>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-red-700"
            >
              <div className="text-4xl">
                {isOpen ? "✕" : "☰"}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            {["/", "/aboutClub", "/services", "/contact"].map((path, i) => (
              <Link
                key={i}
                to={path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 hover:bg-gray-100"
              >
                {path === "/" ? "Home" : path.replace("/", "")}
              </Link>
            ))}

            <div className="flex justify-center items-center gap-2 text-red-800 py-4">
              <FaPhoneAlt />
              01867-2647**
            </div>
          </div>
        )}
      </nav>

      {/* 🔥 IMPORTANT: Navbar height space */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
