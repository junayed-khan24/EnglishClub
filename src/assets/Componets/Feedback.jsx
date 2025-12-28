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
    image: "https://i.ibb.co/7RyhRwx/avatar1.png",
    feedback:
      "I joined for Bank Job and Spoken English. The course was structured, practical, and result-oriented. The grammar and writing sessions really helped me improve.",
  },
  {
    id: 2,
    name: "Sazzadur Rahman",
    location: "Mirpur, Dhaka",
    image: "https://i.ibb.co/QdJQ1pH/avatar2.png",
    feedback:
      "Excellent coaching center! I enrolled in IELTS and saw huge improvement in just a few weeks. The teachers are highly experienced and focus on individual weaknesses.",
  },
  {
    id: 3,
    name: "Raihan Alam",
    location: "Banani, Dhaka",
    image: "https://i.ibb.co/yhj7trb/avatar3.png",
    feedback:
      "S@ifur’s helped me overcome my speaking fear. The classes are interactive, and teachers are very supportive. I can now express myself confidently in English!",
  },
  {
    id: 4,
    name: "Jannatul Ferdous",
    location: "Dhanmondi, Dhaka",
    image: "https://i.ibb.co/FgP0yQw/avatar4.png",
    feedback:
      "Great learning environment for kids! My son enjoys every class, and I can already see improvement in his pronunciation and confidence.",
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    location: "Bashundhara, Dhaka",
    image: "https://i.ibb.co/fvQFY8k/avatar5.png",
    feedback:
      "The online classes are convenient and well-organized. The instructors are friendly and professional. Highly recommend their online English course!",
  },
  {
    id: 6,
    name: "Tanvir Hasan",
    location: "Mohakhali, Dhaka",
    image: "https://i.ibb.co/xFm4kLW/avatar6.png",
    feedback:
      "Best place to prepare for IELTS! Their feedback sessions and mock tests helped me score higher than I expected. Thank you S@ifur’s!",
  },
];

const Feedback = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3"
        >
          What Our Students Say About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto text-base sm:text-base md:text-lg"
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
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
            1280: { slidesPerView: 3, spaceBetween: 30 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="pb-10"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-lg rounded-xl p-6 m-3 relative border-t-4 border-red-800 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full"
              >
                {/* Quote Icon */}
                <div className="absolute top-0 left-0 bg-red-700 text-5xl text-white px-3 py-1 rounded-br-xl font-serif">
                  “
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 flex space-x-1 px-2 py-1 bg-red-700 text-yellow-400 rounded">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm sm:text-base" />
                  ))}
                </div>

                {/* Feedback Text */}
                <p className="text-gray-700 text-left mt-8 leading-relaxed text-sm sm:text-base md:text-base">
                  {item.feedback}
                </p>

                {/* User Info */}
                <div className="flex items-center mt-4 sm:mt-6 space-x-3 sm:space-x-4">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-red-700"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-gray-900 font-semibold text-sm sm:text-base md:text-base">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-sm text-gray-500">
                      {item.location}
                    </p>
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
