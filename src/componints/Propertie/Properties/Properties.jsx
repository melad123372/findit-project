import React, { useState } from "react";
import img16 from "../../../assets/img16.jpg";
import img17 from "../../../assets/img17.jpg";
import img4 from "../../../assets/img4.jpg";
import img18 from "../../../assets/img18.jpg";
import img3 from "../../../assets/img3.jpg";
import img19 from "../../../assets/img19.jpg";
import img2 from "../../../assets/img2.jpg";
import img5 from "../../../assets/img5.jpg";
import img6 from "../../../assets/img6.jpg";
import por7 from "../../../assets/por7.jpg";
import por1 from "../../../assets/por1.jpg";
import por6 from "../../../assets/por6.jpg";
import pro9 from "../../../assets/pro9.jpg";
import por11 from "../../../assets/por11.jpg";
import por2 from "../../../assets/por2.jpg";
import por4 from "../../../assets/por4.jpg";
import por5 from "../../../assets/por5.jpg";
import por3 from "../../../assets/por3.jpg";
import por8 from "../../../assets/por8.jpg";
import img13 from "../../../assets/img13.jpg";

const properties = [
  {
    id: 1,
    title: "South Sunlight Apartment",
    location: "Staten Island",
    category: "Apartments",
    type: "Rent",
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
    category: "Houses",
    type: "Sell",
    image: img2,
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
    category: "Villas",
    type: "Sell",
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
    category: "Apartments",
    type: "Rent",
    image: img19,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 4,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: img4,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 5,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: img5,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 6,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: pro9,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 7,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: img6,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 8,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: por7,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 9,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: por1,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 10,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: img5,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 11,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: img19,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 12,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: por6,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 13,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: por11,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 14,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: por2,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 15,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: por7,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 16,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: img13,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 17,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: por4,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 18,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: por5,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 19,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: por3,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
  {
    id: 20,
    title: "East Sunlight Apartment",
    location: "Brooklyn",
    category: "Apartments",
    type: "Rent",
    image: por8,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: "$1,800",
    agent: "John Smith",
    agentImg: img18,
  },
];
export default function PropertyDashboard() {
  const [type, setType] = useState("All");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const types = ["All", "Sell", "Rent"];
  const categories = ["Apartments", "Condos", "Houses", "Villas"];
  const locations = [
    "Brooklyn",
    "Manhattan",
    "Queens",
    "Staten Island",
    "The Bronx",
  ];

  const filtered = properties.filter((item) => {
    return (
      (type === "All" || item.type === type) &&
      (category === "" || item.category === category) &&
      (location === "" || item.location === location)
    );
  });

  return (
    <section className="px-4 md:px-10 py-10">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Fresh on the market
        </h1>

        <p className="max-w-md text-gray-600 md:text-right">
          Stay ahead of the curve with our newest listings — handpicked homes
          and investments.
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* LEFT FILTER */}
        <div className="w-full lg:w-1/3">
          <div className="lg:sticky lg:top-20 bg-white p-5 rounded-2xl shadow space-y-6">
            <h2 className="text-xl md:text-2xl font-bold">
              Explore Properties
            </h2>

            {/* TYPE */}
            <div>
              <h3 className="font-semibold mb-2">Type</h3>
              <div className="flex flex-wrap gap-2">
                {types.map((item) => (
                  <button
                    key={item}
                    onClick={() => setType(item)}
                    className={`px-3 md:px-4 py-2 rounded-full text-sm md:text-base ${
                      type === item ? "bg-black text-white" : "bg-gray-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* CATEGORY */}
            <div>
              <h3 className="font-semibold mb-2">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`px-3 md:px-4 py-2 rounded-full text-sm md:text-base ${
                      category === item ? "bg-black text-white" : "bg-gray-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* LOCATION */}
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <div className="flex flex-wrap gap-2">
                {locations.map((item) => (
                  <button
                    key={item}
                    onClick={() => setLocation(item)}
                    className={`px-3 md:px-4 py-2 rounded-full text-sm md:text-base ${
                      location === item ? "bg-black text-white" : "bg-gray-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                className="h-52 sm:h-60 md:h-64 w-full object-cover"
                alt={item.title}
              />

              <div className="p-4">
                <p className="text-sm text-gray-500">📍 {item.location}</p>
                <h2 className="font-semibold text-base md:text-lg">
                  {item.title}
                </h2>

                <div className="text-sm text-gray-600 flex flex-wrap gap-3 mt-2">
                  <span>🛏 {item.beds}</span>
                  <span>🛁 {item.baths}</span>
                  <span>📐 {item.sqft} sqft</span>
                </div>

                <div className="flex justify-between mt-4">
                  <span className="font-bold">{item.price}</span>
                  <span className="text-sm text-gray-500">{item.agent}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
