import React from "react";

function Products() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">App 1 Name</h2>
          <p>Detailed description of the first mobile app</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Learn More
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">App 2 Name</h2>
          <p>Detailed description of the second mobile app</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
