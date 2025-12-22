import React, { useState, useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";
import { useSwipeable } from "react-swipeable";

const slides = [
  {
    image:
      "../../public/asset/Slide1.jpg",
    title: "Speak Smart",
    subtitle: "Learn English easily and speak first",
  },
  {
    image:
      "../../public/asset/slide2.jpg",
    title: "Fluent Future",
    subtitle: "Boost your English and speak confidently",
  },
  {
    image:
      "../../public/asset/slide44.jpg",
    title: "English Vibes",
    subtitle: "Join a modern club to prictice, grow, and shine",
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
    trackMouse: true, // allow mouse drag too
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
          <div className="absolute inset-0 h-auto w-[555px] -mb-52 bg-opacity-50 flex flex-col justify-center items-start text-center md:text-left  px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 ">
              {slide.title}
            </h1>
            <p className="text-white text-lg md:text-2xl">{slide.subtitle}</p>
           
            <button className="btn btn-outline border-none bg-red-900 mt-4 py-6 px-12 hover:bg-red-800 font-bold text-xl text-white btn-secondary">
               Join Us  <HiArrowRight className="hover:animate-bounce"></HiArrowRight>
               </button>
          </div>
        </div>
      ))}

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-colors ${
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
