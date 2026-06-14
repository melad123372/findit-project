import React from "react";
import { FaRegDotCircle, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

import clients1 from "../../../assets/clients1.jpg";
import clients2 from "../../../assets/clients2.jpg";
import clients3 from "../../../assets/clients3.webp";
import clients4 from "../../../assets/clients4.png";
import clients5 from "../../../assets/clients5.webp";
import clients6 from "../../../assets/clients6.webp";
import clients7 from "../../../assets/clients7.jpg";

const Clients = () => {
  const testimonials = [
    {
      name: "Mia F.",
      image: clients1,
      title: "Support You Can Rely On",
    },
    {
      name: "David S.",
      image: clients2,
      title: "Exceptional Service",
    },
    {
      name: "Olivia C.",
      image: clients3,
      title: "Stress-Free Experience",
    },
    {
      name: "Peter R.",
      image: clients4,
      title: "Above and Beyond",
    },
    {
      name: "Sophia M.",
      image: clients5,
      title: "Expert Negotiation",
    },
    {
      name: "James P.",
      image: clients6,
      title: "Exceptional Experience",
    },
    {
      name: "Emily T.",
      image: clients7,
      title: "Professional Guidance",
    },
    {
      name: "John D.",
      image: clients1,
      title: "Confident Decisions",
    },
  ];

  const firstRow = [...testimonials, ...testimonials];
  const secondRow = [
    ...testimonials.slice().reverse(),
    ...testimonials.slice().reverse(),
  ];

  const Card = ({ item }) => (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 min-w-[320px] max-w-[320px] flex flex-col">
      <div className="flex text-yellow-500 gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={16} />
        ))}
      </div>

      <h3 className="font-semibold text-lg mt-4">{item.title}</h3>

      <p className="text-gray-500 text-sm mt-3 leading-relaxed flex-1">
        Their guidance made the entire process simple and stress-free. We felt
        confident every step of the way and couldn't be happier with the
        outcome.
      </p>

      <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="font-medium text-gray-700">{item.name}</span>
      </div>
    </div>
  );

  const MarqueeRow = ({ items, reverse = false }) => (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </motion.div>
    </div>
  );

  return (
    <>
      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50 overflow-hidden">
        <div className="text-center mb-14">
          <div className="flex justify-center items-center gap-2 text-gray-500">
            <FaRegDotCircle />
            <span>Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            What our clients say
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Real stories from homeowners and investors who trusted us to guide
            their real estate journey.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent" />

          <div className="space-y-6">
            <MarqueeRow items={firstRow} />
            <MarqueeRow items={secondRow} reverse />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-center">
          <div className="md:border-r border-gray-700 md:pr-8">
            <h2 className="text-5xl font-bold">$150M+</h2>

            <h4 className="mt-3 text-xl font-semibold">Properties Sold</h4>

            <p className="text-gray-400 mt-4 leading-7">
              Over $150M in sales, helping clients find homes and investments
              with ease and confidence.
            </p>
          </div>

          <div className="md:border-r border-gray-700 md:px-8">
            <h2 className="text-5xl font-bold">500+</h2>

            <h4 className="mt-3 text-xl font-semibold">Happy Clients</h4>

            <p className="text-gray-400 mt-4 leading-7">
              More than 500 satisfied clients trust us to make their real estate
              journey smooth and successful.
            </p>
          </div>

          <div className="md:pl-8">
            <h2 className="text-5xl font-bold">20+</h2>

            <h4 className="mt-3 text-xl font-semibold">Years of Expertise</h4>

            <p className="text-gray-400 mt-4 leading-7">
              Over 20 years of experience guiding clients with market insight
              and professional advice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
