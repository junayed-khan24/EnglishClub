import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Sabbir Sheikh",
    location: "Uttara, Dhaka",
    image: "https://i.ibb.co.com/7RyhRwx/avatar1.png",
    feedback:
      "I joined for Bank Job and Spoken English. The course was structured, practical, and result-oriented. The grammar and writing sessions really helped me improve.  ",
  },
  {
    id: 2,
    name: "Sazzadur Rahman",
    location: "Mirpur, Dhaka",
    image: "https://i.ibb.co.com/QdJQ1pH/avatar2.png",
    feedback:
      "Excellent coaching center! I enrolled in IELTS and saw huge improvement in just a few weeks. The teachers are highly experienced and focus on individual weaknesses. ",
  },
  {
    id: 3,
    name: "Raihan Alam",
    location: "Banani, Dhaka",
    image: "https://i.ibb.co.com/yhj7trb/avatar3.png",
    feedback:
      "S@ifur’s helped me overcome my speaking fear. The classes are interactive, and teachers are very supportive. I can now express myself confidently in English!",
  },
  {
    id: 4,
    name: "Jannatul Ferdous",
    location: "Dhanmondi, Dhaka",
    image: "https://i.ibb.co.com/FgP0yQw/avatar4.png",
    feedback:
      "Great learning environment for kids! My son enjoys every class, and I can already see improvement in his pronunciation and confidence.",
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    location: "Bashundhara, Dhaka",
    image: "https://i.ibb.co.com/fvQFY8k/avatar5.png",
    feedback:
      "The online classes are convenient and well-organized. The instructors are friendly and professional. Highly recommend their online English course!",
  },
  {
    id: 6,
    name: "Tanvir Hasan",
    location: "Mohakhali, Dhaka",
    image: "https://i.ibb.co.com/xFm4kLW/avatar6.png",
    feedback:
      "Best place to prepare for IELTS! Their feedback sessions and mock tests helped me score higher than I expected. Thank you S@ifur’s!",
  },
];

const Feedback = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto md:mx-24 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
        >
          What Our Students Say About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto text-base md:text-lg"
        >
          Hear from our students about their experiences at{" "}
          <span className="text-red-700 font-semibold">EnglishClub</span>,
          where we inspire growth, foster excellence, and create a supportive
          learning community.
        </motion.p>

        {/* Swiper Container */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        //   pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="pb-10"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-lg rounded-xl p-6 m-3 relative border-t-4 border-red-800 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between md:h-[250px] h-full"
              >
                {/* Quote Icon */}
                <div className="absolute top-0 left-0 bg-red-700 text-5xl text-white px-3 py-1 rounded-br-xl  font-serif">
                  “
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 flex space-x-1 px-4 py-3 bg-red-700 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Feedback Text */}
                <p className="text-gray-700 text-left mt-8 leading-relaxed text-sm md:text-base">
                  {item.feedback}
                </p>

                {/* User Info */}
                <div className="flex items-center mt-6 space-x-4 ">
                  <div className="relative">
                    <img
                      src='../../public/asset/icons8-user-64.png'
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-red-700"
                    />
                    <div className="absolute inset-0 rounded-full  opacity-40 blur-md animate-pulse"></div>
                  </div>
                  <div className="text-left">
                    <h4 className="text-gray-900 font-semibold text-base md:text-lg">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Feedback;
