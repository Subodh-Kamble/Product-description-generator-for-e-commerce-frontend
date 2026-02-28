import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductForm from "../components/ProductForm";
import PageLayout from "../layouts/PageLayout";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/api/products/${id}`
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.detail || "Failed to load product");
        }

        setProduct(data.data.product);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdate = async (updatedData) => {
    try {
      const res = await fetch(
        `${API_BASE}/api/products/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.detail || "Update failed");
      }

      navigate(`/products/${id}`);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p className="text-center mt-32">Loading...</p>;
  if (error) return <p className="text-center mt-32 text-red-500">{error}</p>;

  return (
    <>
      <Navbar />
      <PageLayout>
        <ProductForm
          initialData={product}
          onSubmit={handleUpdate}
          isEdit
        />
      </PageLayout>
      <Footer />
    </>
  );
};

export default EditProductPage;
