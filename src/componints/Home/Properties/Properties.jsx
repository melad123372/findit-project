import React from "react";
import img16 from "../../../assets/img16.jpg";
import img17 from "../../../assets/img17.jpg";
import img4 from "../../../assets/img4.jpg";
import img18 from "../../../assets/img18.jpg";
import img3 from "../../../assets/img3.jpg";
import img19 from "../../../assets/img19.jpg";
import img5 from "../../../assets/img5.jpg";

const properties = [
  {
    id: 1,
    title: "South Sunlight Apartment",
    location: "Staten Island",
    image: img16,
    beds: 4,
    baths: 2,
    sqft: 160,
    price: "$1,200",
    agent: "Rachel Gray",
    agentImg: img17,
  },
  {
    id: 2,
    title: "Marble House",
    location: "Queens",
    image: img4,
    beds: 4,
    baths: 3,
    sqft: 250,
    price: "$550,000",
    agent: "Steve Parker",
    agentImg: img18,
  },
  {
    id: 3,
    title: "Family Mansion",
    location: "Manhattan",
    image: img3,
    beds: 2,
    baths: 2,
    sqft: 150,
    price: "$2,200",
    agent: "Emma Wilson",
    agentImg: img18,
  },
  {
    id: 4,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    image: img19,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 5,
    title: "South Side Garden",
    location: "Queens",
    image: img4,
    beds: 5,
    baths: 3,
    sqft: 300,
    price: "$620,000",
    agent: "Sophia Davis",
    agentImg: img18,
  },
  {
    id: 6,
    title: "Modern Family Home",
    location: "Manhattan",
    image: img5,
    beds: 4,
    baths: 2,
    sqft: 220,
    price: "$2,500",
    agent: "Michael Brown",
    agentImg: img17,
  },
];

function PropertySection() {
  return (
    <section className="bg-gray-100 py-16 px-5 md:px-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 mb-10">
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            Latest Properties
          </p>

          <h1 className="text-4xl md:text-5xl ">Fresh on the market</h1>
        </div>

        <p className="max-w-md text-gray-600 leading-7">
          Stay ahead of the curve with our newest listings — handpicked homes
          and investments recently added to the market.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        <button className="bg-black text-white px-5 py-2 rounded-full">
          View All
        </button>

        <button className="bg-white px-5 py-2 rounded-full">Apartments</button>

        <button className="bg-white px-5 py-2 rounded-full">Condos</button>

        <button className="bg-white px-5 py-2 rounded-full">Houses</button>

        <button className="bg-white px-5 py-2 rounded-full">Villas</button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((item) => (
          <div
            key={item.id}
            className="bg-gray-200 rounded-3xl overflow-hidden shadow hover:shadow-xl duration-300"
          >
            {/* Property Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <p className="text-gray-500 text-sm mb-2">📍 {item.location}</p>

              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-5">
                <span>🛏 {item.beds} Beds</span>
                <span>🛁 {item.baths} Baths</span>
                <span>📐 {item.sqft} Sqft</span>
              </div>

              <hr className="mb-4" />

              {/* Agent + Price */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={item.agentImg}
                    alt={item.agent}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <h4 className="font-medium">{item.agent}</h4>
                </div>

                <h3 className="text-xl font-bold">{item.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-12">
        <button className="bg-black text-white px-8 py-3 rounded-full">
          View all properties
        </button>
      </div>
    </section>
  );
}

export default PropertySection;
