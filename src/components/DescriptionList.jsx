import DescriptionCard from "./DescriptionCard";

const DescriptionList = ({ descriptions, productId, onAnalyzed }) => {
  if (!descriptions || descriptions.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No descriptions generated yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {descriptions.map((desc, index) => (
        <DescriptionCard
          key={desc.id}
          description={desc}
          index={index}
          number={index + 1}
          productId={productId}
          onAnalyzed={onAnalyzed}
        />
      ))}
    </div>
  );
};

export default DescriptionList;
