import React from "react";
import img15 from "../../../assets/img15.jpg";
export default function RealEstateHero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans py-5">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={img15}
          alt="Modern house"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Left Content Card */}
      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-16">
        <div className="bg-white/95 backdrop-blur-md max-w-xl p-10 rounded-2xl shadow-xl">
          <p className="text-sm uppercase tracking-wide text-gray-500">
            Our Process
          </p>

          <h1 className="mt-3 text-4xl font-semibold leading-tight text-gray-900">
            Simple steps to your dream home
          </h1>

          <p className="mt-4 text-gray-600">
            We make buying, selling, or investing in property effortless. Here’s
            how we guide you every step of the way.
          </p>

          {/* Steps */}
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="text-gray-400 font-medium">01.</span>
              <div>
                <h3 className="font-semibold text-gray-900">Discover</h3>
                <p className="text-sm text-gray-600">
                  We start by understanding your goals and lifestyle, then
                  curate properties that match.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-gray-400 font-medium">02.</span>
              <div>
                <h3 className="font-semibold text-gray-900">Experience</h3>
                <p className="text-sm text-gray-600">
                  Guided viewings and expert insights help you explore the best
                  options with confidence.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-gray-400 font-medium">03.</span>
              <div>
                <h3 className="font-semibold text-gray-900">Secure</h3>
                <p className="text-sm text-gray-600">
                  From negotiation to closing, we ensure a seamless process.
                </p>
              </div>
            </div>
          </div>

          <button className="mt-8 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Start your journey
          </button>
        </div>
      </div>
    </div>
  );
}
