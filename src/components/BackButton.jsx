import { useNavigate } from "react-router-dom";

const BackButton = ({ label = "Back" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2
        px-5 py-2.5
        rounded-xl
        bg-gradient-to-r from-indigo-600 to-blue-600
        text-white font-semibold text-sm
        shadow-md
        hover:from-indigo-700 hover:to-blue-700
        hover:shadow-lg
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-indigo-400"
    >
      ← {label}
    </button>
  );
};

export default BackButton;
