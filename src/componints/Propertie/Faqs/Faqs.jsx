import { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import { FaRegDotCircle } from "react-icons/fa";

import fqs1 from "../../../assets/fqs1.png";
const faqs = [
  {
    question: "How do I start the process of buying a home?",
    answer:
      "Simply reach out to us for a consultation. We'll discuss your goals, budget, and preferences, then guide you step by step.",
  },
  {
    question: "Do I need to get pre-approved for a mortgage first?",
    answer:
      "Getting pre-approved is highly recommended. It helps you understand your budget and makes your offer more attractive to sellers.",
  },
  {
    question: "What types of properties do you specialize in?",
    answer:
      "We specialize in residential homes, luxury properties, apartments, investment opportunities, and commercial spaces.",
  },
  {
    question: "How long does the buying process usually take?",
    answer:
      "The process typically takes 30–60 days, depending on financing, inspections, negotiations, and closing requirements.",
  },
  {
    question: "Do you assist with selling properties as well?",
    answer:
      "Yes, we provide complete selling services including pricing strategy, marketing, property staging, negotiations, and closing support.",
  },
  {
    question: "What makes your agency different from others?",
    answer:
      "We focus on personalized service, deep market knowledge, transparent communication, and long-term client relationships.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f5f5f5] py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <FaRegDotCircle className="text-gray-500 text-sm" />
            <span className="text-sm font-medium uppercase tracking-wide text-gray-700">
              FAQ
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-4xl font-semibold text-black mb-5">
            Frequently Asked Questions
          </h2>

          <p className="max-w-2xl text-gray-600 text-base md:text-lg leading-relaxed">
            Got questions? We've answered some of the most common ones to guide
            you through your real estate journey.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-1 items-start">
          {/* Image Section */}
          <div>
            <img
              src={fqs1}
              alt="Real Estate Agent"
              className=" h-[400px] sm:h-[500px] md:h-[600px] object-cover rounded-2xl"
            />
          </div>

          {/* FAQ Section */}
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-6">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-start gap-5 text-left"
                >
                  <span className="mt-1 text-1xl text-gray-700 flex-shrink-0">
                    {activeIndex === index ? (
                      <HiOutlineMinus />
                    ) : (
                      <HiOutlinePlus />
                    )}
                  </span>

                  <div className="flex-1">
                    <h3 className=" md:text-xl  text-black">{faq.question}</h3>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeIndex === index
                          ? "max-h-40 opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
