import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Contact() {
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error("Error sending email:", errorData);
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      } py-12 px-4`}
    >
      <div
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } p-10 rounded-xl shadow-2xl w-full max-w-md mx-auto`}
      >
        <h1
          className={`text-3xl font-bold mb-6 text-center ${
            isDarkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className={`block ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              } mb-2`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-gray-100"
                    : "bg-gray-100 border-gray-300 text-gray-900"
                }`}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={`block ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              } mb-2`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-gray-100"
                    : "bg-gray-100 border-gray-300 text-gray-900"
                }`}
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className={`block ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              } mb-2`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-gray-100"
                    : "bg-gray-100 border-gray-300 text-gray-900"
                }`}
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 
              text-white py-3 rounded-md hover:opacity-90 
              transition duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
