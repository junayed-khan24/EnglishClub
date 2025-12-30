import React, { useState, useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";
import { useSwipeable } from "react-swipeable";

// Import images
import Slide1 from "../../../public/asset/Slide1.jpg";
import Slide2 from "../../../public/asset/Slide2.jpg";
import Slide3 from "../../../public/asset/Slide3.jpg";

const slides = [
  {
    image: Slide1,
    title: "Speak Smart",
    subtitle: "Learn English easily and speak first",
  },
  {
    image: Slide2,
    title: "Fluent Future",
    subtitle: "Boost your English and speak confidently",
  },
  {
    image: Slide3,
    title: "English Vibes",
    subtitle: "Join a modern club to practice, grow, and shine",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Dot click handler
  const handleDotClick = (index) => {
    setCurrent(index);
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % slides.length),
    onSwipedRight: () =>
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length),
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative w-full h-screen overflow-hidden select-none"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-50"
          />
          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-16 lg:px-24">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6">
              {slide.title}
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 max-w-lg">
              {slide.subtitle}
            </p>
            <button className="btn bg-red-900 hover:bg-red-800 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 text-lg sm:text-xl flex items-center gap-2 rounded-md">
              Join Us <HiArrowRight className="animate-bounce" />
            </button>
          </div>
        </div>
      ))}

      {/* Dot Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-red-400"
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
