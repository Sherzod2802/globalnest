import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="/"
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        >
          GLOBALNEST
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`
          ${isOpen ? "block" : "hidden"} 
          md:flex space-y-4 md:space-y-0 md:space-x-6 
          absolute md:relative top-full left-0 right-0 
          bg-white md:bg-transparent 
          shadow-lg md:shadow-none
          p-4 md:p-0`}
        >
          <a
            href="/"
            className="block md:inline-block text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            Home
          </a>
          <a
            href="/products"
            className="block md:inline-block text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            Products
          </a>
          <a
            href="/about"
            className="block md:inline-block text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            About
          </a>
          <a
            href="/contact"
            className="block md:inline-block text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            Contact
          </a>
          <a
            href="/account"
            className="block md:inline-block text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            My Account
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
