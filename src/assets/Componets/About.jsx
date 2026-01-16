// src/components/About.jsx
import React from "react";
import img from "../../../public/asset/hasan.jpg";

const About = () => {
  const profile = {
    name: "Hasan Ahamed Faisal",
    bio1:
      "I am Hasan Ahamed Faisal; a teacher; an entrepreneur; a travel enthusiast. I am a certified trainer, and I am proud to have completed my Master's (TESOL) from North South University which is the most prestigious private university in Bangladesh.",
    bio2:
      "I have always been profusely passionate about teaching. I want to teach people because I want to reach people. Through twenty years of vigorous hard work and perseverance, I have been able to establish 'SHAFIN'S' as one of the greatest language centers in Bangladesh. Our YouTube channel has more than 2 million subscribers which offers plethora of free courses on Spoken and IELTS. 39 lakh students have been benefited by our online spoken course. I emphasize on practical teaching, and I am thankful to Shomoy TV for featuring my interview which immediately went viral. Being an entrepreneur has allowed me taking major decisions and setting strategic direction. Since I am the public face of the organization, training all the staff including faculty and management has always been my major concern. SHAFIN'S is a place where quality is born.",
  };

  return (
    <section className="py-10 sm:py-14 md:py-20 text-center md:text-left bg-gray-50  dark:bg-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
          
          {/* Image Section */}
          <div
            className="w-full lg:w-2/5 flex justify-center lg:justify-start"
            data-aos="fade-right"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              
              <div className="hidden md:block absolute top-8 left-8 w-full h-full bg-red-950 rounded-xl shadow-2xl rotate-3"></div>

              <div className="relative z-10 p-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
                <img
                  src={img}
                  alt={profile.name}
                  className="w-full h-auto object-cover rounded-xl aspect-[4/5]"
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-200 dark:border-gray-700 rounded-xl -translate-x-3 -translate-y-3"></div>
            </div>
          </div>

          {/* Text Section */}
          <div
            className="w-full lg:w-3/5 space-y-4 sm:space-y-6 text-gray-700 dark:text-gray-300"
            data-aos="fade-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
              {profile.name}
            </h1>

            <p className="sm:text-base md:text-lg leading-relaxed text-left">
              {profile.bio1}
            </p>

            <p className="sm:text-base md:text-lg leading-relaxed text-left">
              {profile.bio2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
