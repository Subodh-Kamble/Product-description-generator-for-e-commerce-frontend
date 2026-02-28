const KeywordDisplay = ({ keywords }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {keywords.map((keyword, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
        >
          {keyword}
        </span>
      ))}
    </div>
  );
};

export default KeywordDisplay;
