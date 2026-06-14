import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import img20 from "../../../assets/img20.jpg";
import img21 from "../../../assets/img21.jpg";
import img22 from "../../../assets/img22.jpg";
import Blog1 from "../../../assets/Blog1.jpg";
import Blog2 from "../../../assets/Blog2.jpg";
import Blog3 from "../../../assets/Blog3.jpg";
import Blog4 from "../../../assets/Blog4.jpg";
import Blog5 from "../../../assets/Blog5.jpg";
import Blog6 from "../../../assets/Blog6.jpg";
import Blog7 from "../../../assets/Blog7.jpg";
import Blog8 from "../../../assets/Blog8.jpg";
import Blog9 from "../../../assets/Blog9.jpg";

const blogs = [
  {
    id: 1,
    image: img20,
    title: "The Power of Natural Light in Architectural Design",
    desc: "Natural light plays a crucial role in shaping architectural design, enhancing aesthetics, comfort, and energy efficiency.",
  },
  {
    id: 2,
    image: img21,
    title: "Photography: Capturing the Essence of Buildings",
    desc: "Architectural photography highlights the beauty, structure, and character of buildings through creative perspectives.",
  },
  {
    id: 3,
    image: img22,
    title: "The Future of Smart Homes",
    desc: "Smart home technology is transforming modern living by improving convenience, security, and energy management.",
  },
  {
    id: 4,
    image: Blog1,
    title: "The Art of Interior Design",
    desc: "Interior design combines creativity and functionality to create spaces that are both beautiful and practical.",
  },
  {
    id: 5,
    image: Blog2,
    title: "Preservation and Restoration",
    desc: "Preserving historic buildings helps protect cultural heritage while adapting structures for modern use.",
  },
  {
    id: 6,
    image: Blog3,
    title: "From Blueprint to Reality",
    desc: "Every successful project begins with a vision and evolves through careful planning into a remarkable structure.",
  },
  {
    id: 7,
    image: Blog9,
    title: "Designing Spaces for Better Living",
    desc: "Well-designed environments improve comfort, productivity, and overall quality of life for their occupants.",
  },
  {
    id: 8,
    image: Blog4,
    title: "Blending Art with Architecture",
    desc: "Architecture and art work together to create inspiring spaces that leave a lasting impression.",
  },
  {
    id: 9,
    image: Blog5,
    title: "Balancing Tradition and Innovation",
    desc: "Modern architects combine timeless design principles with innovative technologies to shape the future.",
  },
  {
    id: 10,
    image: Blog6,
    title: "Harmonizing Form and Function",
    desc: "Great architecture achieves a perfect balance between visual appeal and everyday functionality.",
  },
  {
    id: 11,
    image: Blog7,
    title: "Architectural Marvels Around the World",
    desc: "Iconic buildings showcase creativity, engineering excellence, and the cultural identity of their regions.",
  },
  {
    id: 12,
    image: Blog8,
    title: "Building a Sustainable Future",
    desc: "Sustainable architecture focuses on environmentally responsible designs that benefit both people and the planet.",
  },
];

const Blogs = () => {
  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaRegDotCircle className="text-sm" />

              <span className="uppercase tracking-widest text-sm text-gray-600">
                Blog
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Insights & Real Estate Tips
            </h1>
          </div>

          <p className="max-w-md text-gray-600 text-lg">
            Our agents combine local knowledge, market expertise, and a passion
            for helping clients find the right property.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>

                <p className="text-gray-600 leading-relaxed">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
