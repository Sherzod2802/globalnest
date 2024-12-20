import React from "react";
import { useTheme } from "../context/ThemeContext";

const SampleWebsiteDesign = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full bg-gradient-to-b from-transparent to-transparent"></div>
        </div>

        <div className="relative">
          <section className="container mx-auto px-4 pt-28 pb-16">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1
                className={`text-5xl font-extrabold ${
                  isDarkMode
                    ? "text-gray-100"
                    : "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                }`}
              >
                Mobile App Solutions
              </h1>

              <p
                className={`text-xl leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Transforming innovative ideas into powerful mobile experiences
                that solve real-world challenges and enhance user productivity.
              </p>

              <div className="mt-12">
                <a
                  href="/products"
                  className={`inline-flex items-center font-medium transition duration-300 ${
                    isDarkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                  }`}
                >
                  Explore Our Products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 w-5 h-5"
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
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className={`py-24 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Design",
                description:
                  "User-centric mobile applications with intuitive interfaces",
                icon: "🚀",
              },
              {
                title: "Cutting-Edge Tech",
                description:
                  "Leveraging latest technologies for robust solutions",
                icon: "💡",
              },
              {
                title: "Custom Solutions",
                description:
                  "Tailored apps that meet your specific business needs",
                icon: "🛠️",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl ${
                  isDarkMode
                    ? "bg-gray-700 text-gray-100 hover:bg-gray-600"
                    : "bg-white text-gray-800 hover:bg-gray-50"
                }`}
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h2
                  className={`text-xl font-bold mb-4 ${
                    isDarkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  {feature.title}
                </h2>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } leading-relaxed`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SampleWebsiteDesign;
