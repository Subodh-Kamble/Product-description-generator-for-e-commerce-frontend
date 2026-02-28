import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import CreateProductButton from "../components/CreateProductButton";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import PageLayout from "../layouts/PageLayout";


const Dashboard = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const fetchProducts = async () => {
    try {
      const user = auth.currentUser;

      if (!user) {
        throw new Error("User not authenticated");
      }

      const response = await fetch(
        `https://product-description-generator-for-e.vercel.app/api/products?user_id=${user.uid}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const result = await response.json();
      setProducts(result.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteFromDashboard = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSearch = async (query, category) => {
    try {
      setLoading(true);
      setError("");

      if (!query) {
        fetchProducts(); // fallback to all products
        return;
      }

      const user = auth.currentUser;
      if (!user) return;

      const params = new URLSearchParams({
        user_id: user.uid,
        query,
      });

      if (category) {
        params.append("category", category);
      }

      const res = await fetch(
        `https://product-description-generator-for-e.vercel.app/api/products/search?${params.toString()}`
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.detail || "Search failed");
      }

      setProducts(result.data);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />

      {/* 🌤️ HERO */}
      <section className="relative overflow-hidden pt-32 pb-28 bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50">
        
        {/* Floating gradient orbs */}
        <div className="absolute -top-20 -left-20 w-[420px] h-[420px] bg-indigo-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 -right-20 w-[380px] h-[380px] bg-purple-300/30 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-sky-300/30 rounded-full blur-3xl animate-pulse delay-700" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-gray-200 text-sm font-medium text-indigo-700 shadow-sm">
              ✨ AI Powered Workspace
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Manage Products. <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Generate Descriptions with AI.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              A professional dashboard to create products, generate high-quality
              AI descriptions, and manage everything seamlessly in one place.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="transform transition hover:-translate-y-1 hover:shadow-xl">
                <span className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg">
                  🚀 Your Dashboard
                </span>
              </div>

              <span className="inline-flex items-center text-sm text-gray-600">
                Secure • Fast • AI-Driven
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 🧊 CONTENT */}
      <main className="-mt-20 pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* ✨ GLASS TOOLBAR */}
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-6 mb-14 flex flex-col md:flex-row items-center justify-between gap-6 transition hover:shadow-2xl">
            <SearchBar onSearch={handleSearch} />
            <CreateProductButton />
          </div>

          {/* ⏳ LOADING */}
          {loading && (
            <div className="mt-24 text-center text-gray-500 text-lg animate-pulse">
              Loading your products...
            </div>
          )}

          {/* ❌ ERROR */}
          {error && (
            <div className="mt-24 text-center text-red-600 text-lg">
              {error}
            </div>
          )}

          {/* 🌱 EMPTY STATE */}
          {!loading && !error && products.length === 0 && (
            <div className="mt-28 flex flex-col items-center text-center">
              <div className="
                w-24 h-24 rounded-full
                bg-gradient-to-br from-indigo-600 to-purple-600
                text-white text-4xl
                flex items-center justify-center
                shadow-2xl
                animate-bounce
              ">
                ✨
              </div>

              <h3 className="mt-8 text-3xl font-bold text-gray-900">
                No products yet
              </h3>
              <p className="mt-3 max-w-md text-gray-600">
                Start by creating your first product and unlock AI-generated,
                conversion-focused descriptions instantly.
              </p>

              <div className="mt-8">
                <CreateProductButton />
              </div>
            </div>
          )}

          {/* 🧠 PRODUCT GRID (HOVER ANIMATED) */}
          {!loading && !error && products.length > 0 && (
            <div className="
              transition-all duration-300
              [&>*:hover]:opacity-100
            ">
              <ProductList 
                products={products} 
                onDelete={handleDeleteFromDashboard}
              />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Dashboard;
