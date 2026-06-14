import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

const timeline = [
  {
    year: "2005",
    title: "FOUNDED",
    desc: "Started with a simple mission: to make real estate transparent, accessible, and client-focused.",
  },
  {
    year: "2010",
    title: "BUILDING REPUTATION",
    desc: "Earned trust through successful transactions and expanded services in residential and commercial real estate.",
  },
  {
    year: "2015",
    title: "EXPANDING HORIZONS",
    desc: "Reached 250+ closed deals and introduced specialized support for investors and luxury buyers.",
  },
  {
    year: "2025",
    title: "LEADING TODAY",
    desc: "With $150M+ in sales and 500+ clients served, we stand as a trusted partner in every real estate journey.",
  },
];

export default function History() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-2 text-gray-500 uppercase tracking-widest text-xs md:text-sm mb-6">
            <FaRegDotCircle />
            <span>Our History</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            A legacy of trust and growth
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            From a small vision to a trusted real estate partner, our journey
            has been defined by dedication, growth, and client success.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-[120px] left-0 w-full h-[2px] bg-gray-300"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <h3 className="text-4xl md:text-4xl font-medium">
                  {item.year}
                </h3>

                <p className="uppercase text-gray-700 mt-3 ">{item.title}</p>

                {/* Dot */}
                <div className="hidden md:flex absolute top-[113px] left-0 w-5 h-5 rounded-full border-2 border-orange-400 bg-white items-center justify-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                </div>

                <p className="mt-16 md:mt-24 text-gray-700  leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
