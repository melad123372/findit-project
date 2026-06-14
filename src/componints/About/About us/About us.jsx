import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import img24 from "../../../assets/img24.jpg";
import img25 from "../../../assets/img25.jpg";
const AboutUs = () => {
  return (
    <div className="w-full bg-white text-gray-900">
      {/* HERO */}
      <section className="px-5 md:px-12 lg:px-20 py-12 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <p className="uppercase text-xs md:text-sm tracking-widest text-gray-500 flex items-center gap-2">
            <FaRegDotCircle className="text-xs" />
            About Us
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mt-3 md:mt-5">
            Building dreams, <br /> one home at a time
          </h1>
        </div>

        <div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We’re more than real estate agents — we’re your trusted partners,
            helping you find the right property with confidence and ease.
          </p>

          <button className="mt-5 bg-black text-white px-5 py-2 rounded-full text-sm md:text-base">
            Contact us
          </button>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="px-5 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <img
          src={img24}
          className="w-full h-60 md:h-full object-cover rounded-xl"
          alt="img1"
        />

        <img
          src={img25}
          className="w-full h-60 md:h-full object-cover rounded-xl md:col-span-2"
          alt="img2"
        />
      </section>

      {/* STATS */}
      <section className="px-5 md:px-12 lg:px-20 py-14 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold">$150M+</h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Properties sold
          </p>
          <p>
            Over $150M in sales, helping clients find homes and investments with
            ease and confidence.
          </p>
        </div>

        <div className="border-l-2 border-gray-200 pl-8">
          <h2 className="text-2xl md:text-4xl font-bold">500+</h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Happy clients
          </p>
          <p>
            More than 500 satisfied clients trust us to make their real estate
            journey smooth and successful.
          </p>
        </div>

        <div className="border-l-2 border-gray-200 pl-8">
          <h2 className="text-2xl md:text-4xl font-bold">20+</h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Years of expertise
          </p>
          <p>
            Over 20 years of experience guiding clients with market insight and
            professional advice.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
