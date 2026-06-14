import React from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import img23 from "../../assets/img23.jpg";

export default function RealEstateLanding() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        {/* Background Image */}
        <img
          src={img23}
          alt="House"
          className="w-full h-[500px]  md:h-[500px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Navbar */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden mt-3 bg-white rounded-xl p-5">
              <ul className="flex flex-col gap-4 text-gray-700">
                <li>Home</li>
                <li>About us</li>
                <li>Properties</li>
                <li>Agents</li>
                <li>Blog</li>
              </ul>

              <div className="flex flex-col gap-3 mt-5">
                <button className="bg-black text-white py-3 rounded-full">
                  Contact us
                </button>

                <button className="border border-black text-black py-3 rounded-full">
                  Submit property
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-2xl sm:text-5xl md:text-5xl font-semibold max-w-4xl">
            Ready to find your dream home?
          </h1>

          <p className="text-gray-200 mt-5 max-w-2xl text-sm md:text-lg">
            Whether you're buying, selling, or investing, our team is here to
            guide you every step of the way.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition">
            Schedule a consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>

            <p className="text-gray-400 leading-8">
              123 Main Street,
              <br />
              Suite 456,
              <br />
              Cityville, ST 78901
            </p>

            <div className="mt-5 space-y-3 text-gray-400">
              <p>(123) 456-7890</p>
              <p>(987) 654-3210</p>
              <p>info@findit.com</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">Our Company</h3>

            <ul className="space-y-4 text-gray-400">
              <li>All Properties</li>
              <li>Property for Buy</li>
              <li>Property for Rent</li>
              <li>Our Agents</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-4 text-gray-400">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Latest News</li>
              <li>404</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">Join Our Newsletter</h3>

            <p className="text-gray-400 mb-6">
              Sign up for updates on our latest news.
            </p>

            {/* Input + Arrow */}
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="w-full py-5 pl-6 pr-20 rounded-full bg-white text-black outline-none"
              />

              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                <FiArrowUpRight size={20} />
              </button>
            </div>

            <p className="text-gray-500 text-sm mt-5">
              By clicking subscribe, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-gray-500 text-center md:text-left">
            Copyright © 2025 - Findit by Melad Raufi. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-gray-400">Follow us :</span>

            <a href="/" className="hover:text-white">
              <FaInstagram size={18} />
            </a>

            <a href="/" className="hover:text-white">
              <FaFacebookF size={16} />
            </a>

            <a href="/" className="hover:text-white">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
