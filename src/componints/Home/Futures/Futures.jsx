import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import Futures2 from "../../../assets/img2.jpg";
import Futures3 from "../../../assets/img3.jpg";
import Futures4 from "../../../assets/img4.jpg";
import Futures5 from "../../../assets/img5.jpg";
import Futures6 from "../../../assets/img6.jpg";

const Futures = () => {
  const Futures = [
    {
      image: Futures2,
      name: "Marble House",
      address: "161-03 84th Ave, Queens, NY 11432, USA",
    },
    {
      image: Futures3,
      name: "Family Mansion",
      address: "654 Water St, Manhattan, NY 10002, USA",
    },
    {
      image: Futures4,
      name: "South Side Garden",
      address: "161-03 84th Ave, Queens, NY 11432, USA Queens New",
    },
    {
      image: Futures5,
      name: "Modern Family Home",
      address: "654 Water St, New York, NY 10002, USA Manhattan",
    },
    {
      image: Futures6,
      name: "Rustic Forest Cabin",
      address: "1845 Tenbroeck Ave, The Bronx, NY 10461, USA The",
    },
  ];

  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
        <div>
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            Featured Properties
          </h5>

          <h2 className="text-4xl font-bold mt-3">
            Explore Our Featured Listings
          </h2>
        </div>

        <p className="max-w-md mt-4 md:mt-0 text-gray-600">
          Discover premium properties carefully selected for comfort, style, and
          investment value.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-12 px-4">
        {Futures.slice(0, 2).map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-80 object-cover rounded-3xl"
            />
            <h3 className="text-xl font-semibold mt-3">{item.name}</h3>
            <p className="text-gray-500">{item.address}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6 px-4">
        {Futures.slice(2).map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover rounded-3xl"
            />
            <h3 className="text-xl font-semibold mt-3">{item.name}</h3>
            <p className="text-gray-500">{item.address}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Futures;
