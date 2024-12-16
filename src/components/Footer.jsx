import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p>&copy; 2024 GLOBALNEST. All Rights Reserved.</p>
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
  );
}

export default Footer;
