import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "./BookingForm";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Service", path: "/service_page" },
    { name: "Resume", path: "/resume_page" },
    { name: "About Me", path: "/about_page" },
    { name: "Project", path: "/project_page" },
    { name: "Blog", path: "/blog_page" },
    { name: "Contact", path: "/contact_page" },
  ];

  return (
    <div className="bg-gray-100">
      <nav className="bg-black sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link to="/home" className="flex items-center">
            <h1 className="text-[25px] uppercase font-extrabold text-white">
              MyFolio
            </h1>
          </Link>

          {/* Login Button & Mobile Menu Toggle */}
          <div className="flex md:order-2 space-x-3">
            <BookingForm />

            {/* Hamburger / Close Button */}
            <button
              type="button"
              className="md:hidden p-2 w-10 h-10 text-[#ffbd39] rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                // Close Icon
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navbar Links */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col p-4 md:p-0 font-medium md:space-x-5 md:flex-row">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="inline-block py-2 px-3 text-[#ffbd39] text-base border-b-4 border-transparent hover:text-[#ffbd39] hover:border-[#ffbd39] transition duration-700"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
