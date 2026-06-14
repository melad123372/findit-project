import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import img10 from "../../../assets/img10.jpg";
import img11 from "../../../assets/img11.jpg";
import img12 from "../../../assets/img12.jpg";
import img13 from "../../../assets/img13.jpg";
import img14 from "../../../assets/img14.jpg";

const locations = [
  {
    id: 1,
    name: "Brooklyn",
    properties: 3,
    image: img10,
  },
  {
    id: 2,
    name: "Manhattan",
    properties: 4,
    image: img11,
  },
  {
    id: 3,
    name: "Queens",
    properties: 6,
    image: img12,
  },
  {
    id: 4,
    name: "Bronx",
    properties: 5,
    image: img13,
  },
  {
    id: 5,
    name: "Staten Island",
    properties: 2,
    image: img14,
  },
];

const Locations = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h5 className="flex items-center justify-center gap-2 text-sm font-semibold uppercase text-gray-600 mb-4">
            <FaRegDotCircle />
            Explore Cities
          </h5>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Our Location For You
          </h2>

          <p className="text-gray-500 text-base md:text-lg">
            Each neighborhood has its own story. Discover the areas that match
            your lifestyle — whether you seek vibrant city energy, peaceful
            family communities, or exclusive luxury living.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {locations.map((item, index) => (
            <div
              key={item.id}
              className={`group cursor-pointer ${
                index < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-1">
                  {item.properties} Properties
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
