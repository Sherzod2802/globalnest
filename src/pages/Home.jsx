import React from "react";

const SampleWebsiteDesign = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a
            href="/"
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          >
            YourBrand
          </a>
          <nav className="hidden md:flex space-x-6">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Home
            </a>
            <a
              href="/products"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Products
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Contact
            </a>
          </nav>
          <button className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none">
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
          </button>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-6 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Mobile App Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Transforming innovative ideas into powerful mobile experiences
              that solve real-world challenges and enhance user productivity.
            </p>
            <a
              href="/products"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition duration-300"
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
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
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
                className="bg-gray-50 rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h2 className="text-xl font-bold mb-3 text-gray-800">
                  {feature.title}
                </h2>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 YourBrand. All Rights Reserved.</p>
          <div className="space-x-4">
            <a href="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SampleWebsiteDesign;