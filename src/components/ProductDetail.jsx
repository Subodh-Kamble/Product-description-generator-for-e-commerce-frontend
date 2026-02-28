import { useNavigate } from "react-router-dom";

const ProductDetail = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
      
      {/* Header */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {product.name}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Category: {product.category}
          </p>
        </div>

        {/*Edit Button */}
        <button
          onClick={() => navigate(`/products/${product.id}/edit`)}
          className="px-4 py-2 text-sm font-semibold rounded-xl
                     bg-gradient-to-r from-indigo-500 to-purple-500
                     text-white hover:opacity-90 transition shadow"
        >
          Edit Product
        </button>
      </div>

      {/* Specifications */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-800">Specifications</h3>
        <p className="text-gray-600 mt-1">{product.specs}</p>
      </div>

      {/* Features */}
      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">Features</h3>
        <p className="text-gray-600 mt-1">{product.features}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
