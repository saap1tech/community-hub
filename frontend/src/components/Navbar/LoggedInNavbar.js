import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaNetworkWired,
  FaEnvelope,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";
import axios from "../../axios";

const LoggedInNavbar = ({ user, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      onLogout();

      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="bg-gray-800 p-4 shadow-lg fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-[#38b2ac]">COMMUNITY HUB</h1>
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="hover:text-[#38b2ac] flex items-center space-x-2 text-white"
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            to="/network"
            className="hover:text-[#38b2ac] flex items-center space-x-2 text-white"
          >
            <FaNetworkWired />
            <span>My Network</span>
          </Link>
          <Link
            to="/chat"
            className="hover:text-[#38b2ac] flex items-center space-x-2 text-white"
          >
            <FaEnvelope />
            <span>Messages</span>
          </Link>
          <Link
            to="/notifications"
            className="hover:text-[#38b2ac] flex items-center space-x-2 text-white"
          >
            <FaBell />
            <span>Notifications</span>
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="hover:text-[#38b2ac] flex items-center space-x-2 text-white focus:outline-none">
              <FaUserCircle />
              <span>{user.name}</span>
            </button>
            {showDropdown && (
              <ul
                ref={dropdownRef}
                className="absolute z-10 left-0 top-full w-48 bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              >
                <li>
                  <Link
                    to={`/profile/${user.id}`}
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-gray-600"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
          />
        </div>
      </nav>
    </header>
  );
};

export default LoggedInNavbar;
