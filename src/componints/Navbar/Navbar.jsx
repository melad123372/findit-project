import React, { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Agents", path: "/agents" },
    { name: "Blog", path: "/blog" },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between px-5 sm:px-6 lg:px-12 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Findit Logo"
            className="w-25 h-11 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-10 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-black transition duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition">
            Contact Us
          </button>

          <button className="border border-black px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Submit Property
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <IoClose className="text-3xl text-black" />
          ) : (
            <IoMenu className="text-3xl text-black" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t px-5 py-5 bg-white">
          <ul className="flex flex-col gap-5 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="block hover:text-black transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-6">
            <button className="bg-black text-white py-2 rounded-full">
              Contact Us
            </button>

            <button className="border border-black py-2 rounded-full">
              Submit Property
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
