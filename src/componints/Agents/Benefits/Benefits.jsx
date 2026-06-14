import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import img7 from "../../../assets/img7.jpg";

const Benefits = () => {
  const benefitList = [
    {
      id: "01",
      title: "Buy a New Home",
      desc: "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
    },
    {
      id: "02",
      title: "Rent a Home",
      desc: "Discover your perfect rental effortlessly. Explore listings tailored to your lifestyle needs.",
    },
    {
      id: "03",
      title: "Sell a Home",
      desc: "Sell confidently with expert guidance and effective strategies for a successful sale.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-1">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={img7}
              alt="Real Estate Property"
              className="w-120 h-150 rounded-2xl ml-24  shadow-lg object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <h5 className="flex items-center gap-2 text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              <FaRegDotCircle />
              Featured Properties
            </h5>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find the Perfect Property for Your Future
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you're buying, renting, or selling, our experienced team
              provides the tools and guidance you need to make confident real
              estate decisions.
            </p>

            <div className="space-y-6">
              {benefitList.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-1 p-5 bg-white"
                >
                  {/* ID */}
                  <span className="text-2xl text-black min-w-[50px]">
                    {item.id}
                  </span>

                  {/* Content */}
                  <div className=" pl-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 px-6 py-3 bg-black text-white  font-medium rounded-lg hover:bg-blue-700 transition duration-300">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
