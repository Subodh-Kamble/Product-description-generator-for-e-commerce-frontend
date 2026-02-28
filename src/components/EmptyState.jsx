import { Link } from "react-router-dom";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white rounded-3xl shadow-md p-12 border border-gray-100">
      
      {/* Icon */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold mb-6">
        ✨
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-extrabold text-gray-900">
        No products yet
      </h2>

      {/* Description */}
      <p className="mt-3 text-gray-600 max-w-md">
        You haven’t created any products yet. Start by adding your first product
        and generate AI-powered descriptions in seconds.
      </p>

      {/* CTA */}
      <Link
        to="/products/create"
        className="mt-8 inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
      >
        + Create Your First Product
      </Link>
    </div>
  );
};

export default EmptyState;
