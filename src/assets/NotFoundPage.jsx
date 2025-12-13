import React from "react";
import { Link } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-900 via-red-800 to-red-500 px-4 text-center">
      
      {/* Error Icon */}
      <RiErrorWarningLine className="text-white text-9xl mb-8 animate-bounce" />
      
      {/* Error Text */}
      <h1 className="text-white text-6xl font-bold mb-4">404</h1>
      <h2 className="text-white text-2xl md:text-3xl mb-6">
        Oops! Page Not Found
      </h2>
      <p className="text-white/80 max-w-md mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-600 hover:text-white transition duration-300"
      >
        Go Back Home
      </Link>

      {/* Optional Animation */}
      <div className="mt-16">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 Illustration"
          className="w-64 md:w-96 mx-auto rounded-2xl"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
