// About.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";

function About() {
  const { isDarkMode } = useTheme();

  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries to deliver fast and reliable solutions that shape the future of expat life in Korea.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: "blue",
    },
    {
      title: "Trust",
      description:
        "We build lasting relationships through transparency, reliability, and unwavering commitment to security.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      color: "purple",
    },
    {
      title: "Global Reach",
      description:
        "We connect people from all around world in Korea. Anyone regardless of their background can join our community and participate in our activities.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      color: "blue",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      } py-16 px-4`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1
            className={`text-4xl font-bold ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            } mb-4`}
          >
            About GLOBALNEST
          </h1>
          <p
            className={`text-xl ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Building the future of global connectivity
          </p>
        </div>

        {/* Mission Section */}
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-xl shadow-lg p-8 mb-10`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isDarkMode ? "text-gray-100" : "text-gray-800"
            } mb-4`}
          >
            Our Mission
          </h2>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } leading-relaxed`}
          >
            At GLOBALNEST is dedicated to making life in Korea easier for
            foreigners by providing essential information, tools, and software
            solutions tailored to their unique needs. We offer comprehensive
            resources that cover every stage of the journey—from arrival to
            daily life and even citizenship. Our services address common
            challenges like navigating legal requirements, setting up banking,
            obtaining necessary documents, and more. Our goal is to empower
            expatriates with reliable, accessible information and a supportive
            community to help them adapt and thrive in Korea. Whether through
            our app, online resources, or our network of experts, we're here to
            make living in Korea as smooth and enjoyable as possible.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {values.map((value, index) => (
            <div
              key={index}
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } rounded-xl shadow-lg p-6`}
            >
              <div className={`text-${value.color}-600 mb-4`}>{value.icon}</div>
              <h3
                className={`text-xl font-semibold ${
                  isDarkMode ? "text-gray-100" : "text-gray-800"
                } mb-2`}
              >
                {value.title}
              </h3>
              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-xl shadow-lg p-8`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isDarkMode ? "text-gray-100" : "text-gray-800"
            } mb-6`}
          >
            Our Team
          </h2>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } leading-relaxed mb-6`}
          >
            Our diverse team brings together expertise from technology,
            business, and international relations. We're passionate about
            solving problems expats face everyday and make life easier for them.
          </p>
          <div className="text-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition duration-300">
              Join Our Waitlist
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
