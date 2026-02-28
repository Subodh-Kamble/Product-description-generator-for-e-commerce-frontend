import ProductCard from "./ProductCard";
import EmptyState from "./EmptyState";

const ProductList = ({ products, onDelete }) => {
  // Empty state
  if (!products || products.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ProductList;
