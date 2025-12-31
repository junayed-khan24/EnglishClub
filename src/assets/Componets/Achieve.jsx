import React, { useEffect, useState, useRef } from "react";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";

const Achieve = () => {
  const sectionRef = useRef(null);
  const [scrollKey, setScrollKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrollKey((prev) => prev + 1);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const CountUp = ({ target, duration, keyProp }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [target, duration, keyProp]);

    return <span>{count.toLocaleString()}+</span>;
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-r from-red-500 from-10% via-red-400 via-30% to-red-500 to-90%">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">

          {/* Card */}
          <div className="group flex flex-col bg-white rounded-xl py-6 md:py-8 shadow-xl items-center text-center space-y-3 transition-all duration-300 hover:bg-black/40 hover:text-white">
            <GiGraduateCap className="text-rose-800 group-hover:text-white text-5xl sm:text-6xl md:text-7xl" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <CountUp target={20000} duration={2000} keyProp={scrollKey} />
            </h2>
            <p className="text-sm sm:text-base text-gray-700 group-hover:text-white">
              Total Students
            </p>
          </div>

          <div className="group flex flex-col bg-white rounded-xl py-6 md:py-8 shadow-xl items-center text-center space-y-3 transition-all duration-300 hover:bg-black/40 hover:text-white">
            <PiStudentFill className="text-green-600 group-hover:text-white text-5xl sm:text-6xl md:text-7xl" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <CountUp target={3000} duration={3000} keyProp={scrollKey} />
            </h2>
            <p className="text-sm sm:text-base text-gray-700 group-hover:text-white">
              Active Students
            </p>
          </div>

          <div className="group flex flex-col bg-white rounded-xl py-6 md:py-8 shadow-xl items-center text-center space-y-3 transition-all duration-300 hover:bg-black/40 hover:text-white">
            <FaYoutube className="text-red-600 group-hover:text-white text-5xl sm:text-6xl md:text-7xl" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <CountUp target={15000} duration={4000} keyProp={scrollKey} />
            </h2>
            <p className="text-sm sm:text-base text-gray-700 group-hover:text-white">
              YouTube Followers
            </p>
          </div>

          <div className="group flex flex-col bg-white rounded-xl py-6 md:py-8 shadow-xl items-center text-center space-y-3 transition-all duration-300 hover:bg-black/40 hover:text-white">
            <FaFacebook className="text-blue-600 group-hover:text-white text-5xl sm:text-6xl md:text-7xl" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <CountUp target={40000} duration={5000} keyProp={scrollKey} />
            </h2>
            <p className="text-sm sm:text-base text-gray-700 group-hover:text-white">
              Facebook Followers
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achieve;
