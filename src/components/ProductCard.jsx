import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../config/firebase";
import DeleteConfirmDialog from "./DeleteConfirmDialog";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

const ProductCard = ({ product, onDelete }) => {
  const navigate = useNavigate();
  const [openDelete, setOpenDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleViewDetails = () => {
    navigate(`/products/${product.id}`);
  };

  const handleDelete = async () => {
  const confirm = window.confirm("Delete this product?");
  if (!confirm) return;

  try {
    const user = auth.currentUser;
    if (!user) throw new Error("Not authenticated");
${API_BASE}
    const res = await fetch(
      `${API_BASE}/api/products/${product.id}?user_id=${user.uid}`,
      { method: "DELETE" }
    );

    if (!res.ok) {
      throw new Error("Delete failed");
    }

    toast.success("Product deleted");

    onDelete(product.id); // 👈 VERY IMPORTANT
  } catch (err) {
    toast.error(err.message);
  }
};




  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between">
      
      {/* Product Info */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 truncate">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Category: {product.category}
        </p>

        {/* <p className="text-xs text-gray-400 mt-2">
          Created on {product.createdAt}
        </p> */}
      </div>

      {/* Action */}
      <div className="mt-6 space-y-2">
        <button
          onClick={handleViewDetails}
          className="mt-6 w-full bg-indigo-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition"
        >
          View Details →
        </button>

        <button
          onClick={() => setOpenDelete(true)}
          className="bg-red-600 text-white px-5 py-2 rounded-xl"
        >
          Delete
        </button>

        <DeleteConfirmDialog
          open={openDelete}
          loading={deleting}
          onCancel={() => setOpenDelete(false)}
          onConfirm={handleDelete}
        />

      </div>

    </div>
  );
};

export default ProductCard;
