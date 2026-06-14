import React, { useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";

import Discover1 from "../../../assets/Discover1.jpg";
import Experience1 from "../../../assets/Experience1.jpg";
import Secure1 from "../../../assets/Secure1.jpg";

export default function ProcessSection() {
  const [activeImage, setActiveImage] = useState(Discover1);

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div>
            <div className="flex items-center gap-2 uppercase text-sm mb-4 text-gray-700">
              <FaRegDotCircle />
              <span>Our Process</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Simple steps to your dream home
            </h2>

            <p className="text-black mt-6 max-w-md">
              We make buying, selling, or investing in property effortless.
            </p>

            <div className="mt-10 space-y-8">
              {/* DISCOVER */}
              <div
                className="flex gap-5 cursor-pointer hover:bg-white/40 p-3 rounded-xl transition"
                onMouseEnter={() => setActiveImage(Discover1)}
              >
                <h3 className="text-4xl font-semibold">01.</h3>
                <div>
                  <h4 className="text-2xl font-medium">Discover</h4>
                  <p className="text-black">
                    Understand your goals and find matching properties.
                  </p>
                </div>
              </div>

              {/* EXPERIENCE */}
              <div
                className="flex gap-5 cursor-pointer hover:bg-white/40 p-3 rounded-xl transition"
                onMouseEnter={() => setActiveImage(Experience1)}
              >
                <h3 className="text-4xl text-black font-semibold">02.</h3>
                <div>
                  <h4 className="text-2xl text-black">Experience</h4>
                  <p className="text-black">Explore options with confidence.</p>
                </div>
              </div>

              {/* SECURE */}
              <div
                className="flex gap-5 cursor-pointer hover:bg-white/40 p-3 rounded-xl transition"
                onMouseEnter={() => setActiveImage(Secure1)}
              >
                <h3 className="text-4xl text-black font-semibold">03.</h3>
                <div>
                  <h4 className="text-2xl text-black">Secure</h4>
                  <p className="text-black">Complete your purchase smoothly.</p>
                </div>
              </div>
            </div>

            <button className="mt-10 px-6 py-3 bg-black text-white rounded-full hover:opacity-90 transition">
              Start your journey
            </button>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div>
            <img
              src={activeImage}
              alt="Process step"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-md transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
