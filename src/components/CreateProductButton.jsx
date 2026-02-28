import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const CreateProductButton = () => {
  return (
    <Link
      to="/products/create"
      className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
    >
      <Plus size={18} />
      Create Product
    </Link>
  );
};

export default CreateProductButton;
