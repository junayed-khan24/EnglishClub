import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact <span className="text-rose-600">EnglishClub</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Have questions about our courses or admissions?  
            Get in touch with EnglishClub today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Contact Info */}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Get In Touch
            </h3>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-rose-600 text-xl" />
              <div>
                <p className="font-medium text-gray-700">Phone</p>
                <p className="text-gray-600">+880 1XXX-XXXXXX</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-rose-600 text-xl" />
              <div>
                <p className="font-medium text-gray-700">Email</p>
                <p className="text-gray-600">englishclub@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-rose-600 text-xl" />
              <div>
                <p className="font-medium text-gray-700">Location</p>
                <p className="text-gray-600">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 w-full rounded-lg border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 w-full rounded-lg border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="mt-1 w-full rounded-lg border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message"
                  className="mt-1 w-full rounded-lg border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
