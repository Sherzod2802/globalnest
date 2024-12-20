import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react"; // Fixed import syntax

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme(); // Changed from theme to isDarkMode to match context

  return (
    <nav
      className={`fixed w-full top-0 z-50 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      } shadow-md`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${
            isDarkMode
              ? "from-blue-400 to-cyan-400"
              : "from-blue-600 to-purple-600"
          }`}
        >
          GLOBALNEST
        </Link>

        {/* Hamburger button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`hover:text-blue-600 focus:outline-none ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`
          ${isOpen ? "block" : "hidden"} 
          md:flex space-y-4 md:space-y-0 md:space-x-6 
          absolute md:relative top-full left-0 right-0 
          ${isDarkMode ? "bg-gray-900" : "bg-white"}
          md:bg-transparent 
          shadow-lg md:shadow-none
          p-4 md:p-0`}
        >
          {[
            { to: "/", text: "Home" },
            { to: "/products", text: "Products" },
            { to: "/about", text: "About" },
            { to: "/contact", text: "Contact" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block md:inline-block font-medium transition duration-300 ${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.text}
            </Link>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600 text-yellow-400"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
