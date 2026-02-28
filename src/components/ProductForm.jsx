import { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const ProductForm = ({
  initialData = null,
  onSubmit = null,
  submitLabel = "Create Product",
}) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [specs, setSpecs] = useState("");
  const [features, setFeatures] = useState("");
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /* ✅ STEP 6: Pre-populate form when editing */
  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setSpecs(initialData.specs || "");
      setFeatures(initialData.features || "");
      setCategory(initialData.category || "");
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !specs || !features || !category) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      /* ✅ EDIT MODE */
      if (onSubmit) {
        await onSubmit({
          name,
          specs,
          features,
          category,
        });
        return;
      }

      /* ✅ CREATE MODE (existing logic untouched) */
      const user = auth.currentUser;
      if (!user) throw new Error("User not authenticated");

      const response = await fetch("https://product-description-generator-for-e.vercel.app/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: user.uid,
          name,
          specs,
          features,
          category,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      setSuccess("Product created successfully 🎉");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          {initialData ? "Edit Product" : "Create New Product"}
        </h2>
        <p className="mt-2 text-gray-600 text-sm">
          {initialData
            ? "Update product details"
            : "Enter product details to generate AI-powered descriptions"}
        </p>
      </div>

      {/* Messages */}
      {error && (
        <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-red-700 text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 rounded-xl bg-green-50 px-4 py-3 text-green-700 text-sm">
          {success}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Product Name
          </label>
          <input
            type="text"
            placeholder="e.g. Wireless Headphones"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Specifications */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Specifications
          </label>
          <textarea
            rows="3"
            placeholder="e.g. Bluetooth 5.3, Noise Cancellation"
            value={specs}
            onChange={(e) => setSpecs(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Key Features
          </label>
          <textarea
            rows="3"
            placeholder="e.g. Long battery life, Fast charging"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Category
          </label>
          <input
            type="text"
            placeholder="e.g. Electronics"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3.5 rounded-xl text-white font-semibold text-sm transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 shadow-lg"
          }`}
        >
          {loading
            ? initialData
              ? "Updating Product..."
              : "Creating Product..."
            : submitLabel}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
