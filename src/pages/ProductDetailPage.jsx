import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";
import DescriptionList from "../components/DescriptionList";
import { auth } from "../config/firebase";
import PageLayout from "../layouts/PageLayout";
import BackButton from "../components/BackButton";
import DescriptionGenerator from "../components/DescriptionGenerator";
import DeleteConfirmDialog from "../components/DeleteConfirmDialog";
import toast from "react-hot-toast";
import KeywordDisplay from "../components/KeywordDisplay";
import AnalyticsPanel from "../components/AnalyticsPanel";


const ProductDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [loadingKeywords, setLoadingKeywords] = useState(false);
  const [keywordError, setKeywordError] = useState("");
  const [analytics, setAnalytics] = useState(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const [analyticsError, setAnalyticsError] = useState("");



  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      setDeleting(true);

      const user = auth.currentUser;
      if (!user) throw new Error("Not authenticated");

      const res = await fetch(
        `https://product-description-generator-for-e.onrender.com/api/products/${id}?user_id=${user.uid}`,
        {
          method: "DELETE",
        }
      );
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.detail || "Failed to delete product");
      }

      toast.success("Product deleted successfully 🗑️");

      navigate("/dashboard");
      
    } catch (err) {
      toast.error(err.message || "Delete failed");
    } finally {
      setDeleting(false);
      setOpenDelete(false);
    }
  };

  const extractKeywords = async () => {
    try {
      setLoadingKeywords(true);
      setKeywordError("");

      const res = await fetch(
        `https://product-description-generator-for-e.onrender.com/api/products/${id}/keywords`,
        { method: "POST" }
      );

      const result = await res.json();
           

      if (!res.ok) {
        throw new Error("Failed to extract keywords");
      }

      
      setKeywords(result.keywords);

    } catch (err) {
      setKeywordError(err.message);
    } finally {
      setLoadingKeywords(false);
    }
  };

  const fetchProduct = async () => {
    try {
      const res = await fetch(
        `https://product-description-generator-for-e.onrender.com/api/products/${id}`
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.detail || "Failed to load product");
      }

      setData(result.data);
      setError("");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const fetchAnalytics = async () => {
    try {
      setAnalyticsLoading(true);
      setAnalyticsError("");

      const BASE = import.meta.env.VITE_API_BASE;
      const res = await fetch(
        `${BASE}/api/products/${id}/analytics`
      );  

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.detail || "Failed to fetch analytics");
      }

      setAnalytics(result);

    } catch (err) {
      setAnalyticsError(err.message);
    } finally {
      setAnalyticsLoading(false);
    }
  };
  
  const refreshAfterAnalysis = () => {
    fetchProduct();
    fetchAnalytics();
  };


  useEffect(() => {
    fetchProduct();
    fetchAnalytics();

  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <PageLayout>
          <p className="text-center text-gray-600 text-lg mt-20">
            Loading product details...
          </p>
        </PageLayout>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <PageLayout>
          <p className="text-center text-red-500 text-lg mt-20">
            {error}
          </p>
        </PageLayout>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <PageLayout>

        <DescriptionGenerator onGenerated={fetchProduct}/>
        {/* Product Info Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <ProductDetail product={data.product} />
        </div>

        {/* SEO KEYWORDS SECTION */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              SEO Keywords
            </h3>

            <button
              onClick={extractKeywords}
              disabled={loadingKeywords}
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-60"
            >
              {loadingKeywords ? "Extracting..." : "Extract Keywords"}
            </button>
          </div>

          {keywordError && (
            <p className="text-red-600 text-sm mb-2">
              {keywordError}
            </p>
          )}

          {keywords.length > 0 && (
            <KeywordDisplay keywords={keywords} />
          )}

          {keywords.length === 0 && !loadingKeywords && !keywordError && (
            <p className="text-sm text-gray-500">
              No keywords extracted yet.
            </p>
          )}
        </div>        
        
        <AnalyticsPanel
          analytics={analytics}
          loading={analyticsLoading}
          descriptions={data.descriptions}
          error={analyticsError}
        />


        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Generated Descriptions
          </span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>




        {/* Descriptions */}
        <DescriptionList   
            descriptions={data.descriptions}   
            productId={data.product.id}
            onAnalyzed={refreshAfterAnalysis}
        />

        <button
          onClick={() => setOpenDelete(true)}
          className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700"
        >
          Delete Product
        </button>


        <DeleteConfirmDialog
          open={openDelete}
          loading={deleting}
          onCancel={() => setOpenDelete(false)}
          onConfirm={handleDelete}
        />



        

      </PageLayout>

      <Footer />
    </>
  );
};

export default ProductDetailPage;
