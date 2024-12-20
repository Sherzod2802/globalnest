import React from "react";
import { useTheme } from "../context/ThemeContext";

function Products() {
  const { isDarkMode } = useTheme();

  const products = [
    {
      id: 1,
      name: "Alda App",
      description:
        "Mobile app for expats living in South Korea. Designed to make life easier for foreigners residing in South Korea and provide information about life, law, education and so much more to feel like home.",
    },
    {
      id: 2,
      name: "MeetMe App",
      description:
        "Place where random people can meet by posting cafe and restaurants menus they want to try, any stranger can send request to join them. Great place to make new friends and relationships.",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      } py-8`}
    >
      <div className="container mx-auto px-4">
        <h1
          className={`text-3xl font-bold mb-6 ${
            isDarkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Our Products
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`${
                isDarkMode
                  ? "bg-gray-800 text-gray-100"
                  : "bg-white text-gray-800"
              } p-6 rounded-lg shadow-md`}
            >
              <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                {product.description}
              </p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;

// import React from "react";
// import { useTheme } from "../context/ThemeContext";

// function Products() {
//   const { isDarkMode } = useTheme();

//   return (
//     <div
//       className={`${
//         isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
//       }`}
//     >
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className={`${
//               isDarkMode
//                 ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
//                 : "bg-gray-50 border-gray-200 hover:bg-gray-100"
//             } border rounded-lg p-4 transition-colors duration-200`}
//           >
//             <div className="container mx-auto px-4 py-8">
//               <h1
//                 className={`text-3xl font-bold mb-6 ${
//                   isDarkMode ? "text-gray-100" : "text-gray-900"
//                 } `}
//               >
//                 Our Products
//               </h1>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="bg-white p-6 rounded-lg shadow-md">
//                   <h2 className="text-2xl font-semibold mb-4">Alda App</h2>
//                   <p>
//                     Mobile app for expats living in South Korea. Designed to
//                     make life easier for foreigners residing in South Korea and
//                     provide information about life, law, education and so much
//                     more to feel like home.
//                   </p>
//                   <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
//                     Learn More
//                   </button>
//                 </div>

//                 <div className="bg-white p-6 rounded-lg shadow-md">
//                   <h2 className="text-2xl font-semibold mb-4">MeetMe App</h2>
//                   <p>
//                     Place where random people can meet by posting cafe and
//                     restaurants menus they want to try, any stranger can send
//                     request to join them. Great place to make new friends and
//                     relationships.
//                   </p>
//                   <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;
