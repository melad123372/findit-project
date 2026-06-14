import React from "react";
import img20 from "../../../assets/img20.jpg";
import img21 from "../../../assets/img21.jpg";
import img22 from "../../../assets/img22.jpg";

const blogs = [
  {
    id: 1,
    image: img20,
    title: "The Power of Natural Light in Architectural Design",
    description:
      "Natural light plays a crucial role in shaping architectural design, offering both aesthetic and functional benefits.",
  },
  {
    id: 2,
    image: img21,
    title: "Photography: Capturing the Essence of Buildings",
    description:
      "Architectural photography goes beyond simply documenting structures; it captures the soul of a building.",
  },
  {
    id: 3,
    image: img22,
    title: "The Future of Smart Homes: Innovative Interior Design",
    description:
      "The rise of smart homes is transforming the way we live, blending cutting-edge technology with innovation.",
  },
];

export default function LatestNews() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-[#f5f5f5]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 mb-16">
        <div>
          <p className="uppercase tracking-[3px] text-sm mb-4">⦿ Latest New</p>

          <h2 className="text-4xl md:text-4xl font-semibold">
            Insights & Updates
          </h2>
        </div>

        <div className="max-w-lg">
          <p className="text-gray-600 text-lg leading-8">
            Stay informed with expert tips, market trends, and property advice
            to guide your real estate journey.
          </p>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white overflow-hidden rounded-2xl group"
          >
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-medium leading-tight mb-4">
                {blog.title}
              </h3>

              <p className="text-gray-600 leading-8">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
