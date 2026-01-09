import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Navbar";
import Slider from "./Slider";
import Courses from "./Courses";
import Achieve from "./Achieve";
import About from "./About";
import Feedback from "./Feedback";
import Contact from "./Contact";
import Footer from "./Footer";
import Announce from "./Announce";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,        // animation only once
      offset: 120,
    });
  }, []);

  return (
    <div className="arimo-uniquifier overflow-x-hidden">
      <Navbar />

      <div data-aos="fade-in">
        <Slider />
      </div>

      <div data-aos="fade-up">
        <Courses />
      </div>

      <div data-aos="zoom-in">
        <Achieve />
      </div>

      <div className="divider bg-red-300 h-1 w-full my-16"></div>

      <div data-aos="fade-right">
        <About />
      </div>

      <div data-aos="fade-left">
        <Feedback />
      </div>

      <div data-aos="fade-up">
        <Contact />
      </div>

      <div data-aos="fade-in">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
