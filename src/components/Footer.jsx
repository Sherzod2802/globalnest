import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
        </div>
        <div className="space-x-4">
          <Link to="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-gray-300">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
