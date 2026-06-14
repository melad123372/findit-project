import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import img18 from "../../../assets/img18.jpg";
import img26 from "../../../assets/img26.jpg";
import img17 from "../../../assets/img17.jpg";

const agents = [
  {
    id: 1,
    name: "Steve Parker",
    email: "steveparker@example.com",
    image: img18,
  },
  {
    id: 2,
    name: "Ingrid Vulk",
    email: "ingridvulk@example.com",
    image: img26,
  },
  {
    id: 3,
    name: "Rachel Gray",
    email: "rachelgray@example.com",
    image: img17,
  },
];

const AgentsSection = () => {
  return (
    <section className="bg-white py-20 px-5 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Label */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-4 h-4 rounded-full border border-black flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          </div>
          <span className="text-sm uppercase tracking-wide font-medium">
            Our Agents
          </span>
        </div>

        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-10 mb-14">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-medium leading-[1.05] text-black">
            Meet the experts behind
            <br />
            your real estate journey
          </h2>

          <div className="flex lg:justify-end">
            <p className="max-w-md text-lg md:text-xl text-gray-600 leading-relaxed">
              Our agents combine local knowledge, market expertise, and a
              passion for helping clients find the right property.
            </p>
          </div>
        </div>

        {/* Agent Cards */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-gray-100 rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className=" h-[450px] overflow-hidden">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-1xl font-medium text-black mb-2">
                    {agent.name}
                  </h3>
                  <p className="text-gray-500 text-base">{agent.email}</p>
                </div>

                <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform hover:scale-105">
                  <BsArrowUpRight size={10} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
