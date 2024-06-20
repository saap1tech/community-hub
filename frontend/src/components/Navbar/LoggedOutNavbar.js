import React from "react";
import { Link } from "react-router-dom";

const LoggedOutNavbar = () => {
  return (
    <header className="bg-gray-800 p-4 shadow-lg fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-[#38b2ac]">COMMUNITY HUB</h1>
        </Link>
        <div className="hidden md:flex space-x-8">
          <a href="/#about" className="hover:text-[#38b2ac]">
            About
          </a>
          <a href="/#schools" className="hover:text-[#38b2ac]">
            Schools
          </a>
          <a href="/#resources" className="hover:text-[#38b2ac]">
            Resources
          </a>
          <a href="/#clubs" className="hover:text-[#38b2ac]">
            Clubs
          </a>
          <a href="/#podcasts" className="hover:text-[#38b2ac]">
            Podcasts
          </a>
          <a href="/#contact" className="hover:text-[#38b2ac]">
            Contact
          </a>
          <Link to="/blog" className="hover:text-[#38b2ac]">
            Blog
          </Link>
        </div>
        <div className="space-x-4">
          <Link to="/login" className="text-white">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-[#38b2ac] text-white px-4 py-2 rounded hover:bg-[#2d928d]"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default LoggedOutNavbar;
