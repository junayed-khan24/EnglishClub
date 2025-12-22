// src/components/About.jsx
import React from 'react';

const About = () => {
  const profile = {
    name: "Hasan Ahamed Faisal",
    bio1: "I am Hasan Ahamed Faisal; a teacher; an entrepreneur; a travel enthusiast. I am a certified trainer, and I am proud to have completed my Master's (TESOL) from North South University which is the most prestigious private university in Bangladesh.",
    bio2: "I have always been profusely passionate about teaching. I want to teach people because I want to reach people. Through twenty years of vigorous hard work and perseverance, I have been able to establish 'SHAFIN'S' as one of the greatest language centers in Bangladesh. Our YouTube channel has more than 2 million subscribers which offers plethora of free courses on Spoken and IELTS. 39 lakh students have been benefited by our online spoken course. I emphasize on practical teaching, and I am thankful to Shomoy TV for featuring my interview which immediately went viral. Being an entrepreneur has allowed me taking major decisions and setting strategic direction. Since I am the public face of the organization, training all the staff including faculty and management has always been my major concern. SHAFIN'S is a place where quality is born."
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* Left side: Image */}
          <div 
            className="w-full lg:w-2/5 relative flex justify-center lg:justify-start"
            data-aos="fade-right"
          >
            <div className="relative w-full max-w-md h-auto">
              <div className="hidden md:block absolute top-10 left-10 w-full h-full bg-gray-900 rounded-lg shadow-2xl transform rotate-3 md:border md:border-black" style={{ zIndex: 0 }}></div>
              
              <div className="relative z-10 p-2 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <img 
                  className="w-full h-auto object-cover rounded-lg" 
                  src='../../public/asset/hasan.jpg' 
                  alt={profile.name} 
                  style={{ aspectRatio: '4/5' }} 
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-200 dark:border-gray-700 rounded-lg transform -translate-x-4 -translate-y-4"></div>
            </div>
          </div>

          {/* Right side: Text */}
          <div className="w-full lg:w-3/5 space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed" data-aos="fade-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white  border-black inline-block pb-2 mb-4">
              {profile.name}
            </h1>

            <p>{profile.bio1}</p>
            <p>{profile.bio2}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
