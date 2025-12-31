import React from "react";
import MymensinghMap from "./MymensinghMap";

const Contact = () => {
  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-red-700">EnglishClub</span>
          </h2>
          <p className="mt-3 text-base-content/70 max-w-xl mx-auto">
            Have questions about our courses or admissions?
            Get in touch with EnglishClub today.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* Contact Form */}
          <div className="card bg-base-100 shadow-xl min-h-[420px] md:min-h-[480px]">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-4">
                Send Us a Message
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                />

                <textarea
                  className="textarea textarea-bordered h-28 w-full"
                  placeholder="Your Message"
                ></textarea>

                <button className="btn bg-red-900 w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-base-100 rounded-xl shadow-xl overflow-hidden min-h-[420px] md:min-h-[480px] flex flex-col">
            <h3 className="text-xl font-semibold text-center py-3 border-b">
              EnglishClub Location
            </h3>

            {/* Map */}
            <div className="flex-1">
              <MymensinghMap />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
