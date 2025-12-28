import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-primary">EnglishClub</span>
          </h2>
          <p className="mt-3 text-base-content/70 max-w-xl mx-auto">
            Have questions about our courses or admissions?  
            Get in touch with EnglishClub today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body space-y-6">
              <h3 className="card-title text-2xl">Get In Touch</h3>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-base-content/70">
                    +880 1XXX-XXXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-base-content/70">
                    englishclub@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-base-content/70">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-4">
                Send Us a Message
              </h3>

              <form className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control gap-2">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-28"
                    placeholder="Write your message"
                  ></textarea>
                </div>

                <button className="btn btn-primary w-full mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
