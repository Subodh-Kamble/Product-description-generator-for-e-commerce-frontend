import { useState } from "react";
import ExportButton from "./ExportButton";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";


const DescriptionCard = ({ description, index,number, productId, onAnalyzed }) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(
    description.overall_score !== null
  );

  const analyzeDescription = async () => {
    try {
      setAnalyzing(true);

      const res = await fetch(
        `${API_BASE}/api/products/${productId}/descriptions/${description.id}/analyze`,
        { method: "POST" }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.detail || "Analysis failed");
      }

      setAnalyzed(true);

      // refresh product + analytics from parent
      if (onAnalyzed) onAnalyzed();

    } catch (err) {
      alert(err.message);
    } finally {
      setAnalyzing(false);
    }
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      
      {/* Meta */}
      <h3 className="text-sm font-bold text-gray-600 mb-2">
        Description #{number}
      </h3>

      <div className="flex flex-wrap gap-3 mb-4 text-sm">
        <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium">
          Tone: {description.tone}
        </span>
        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-medium">
          Language: {description.language}
        </span>
      </div>

      {/* Text */}
      <p className="text-gray-700 leading-relaxed mb-4">
        {description.description}
      </p>

      {/* Analyze Button */}
      <div className="mb-4">
        <button
          onClick={analyzeDescription}
          disabled={analyzing || analyzed}
          className={`px-4 py-2 rounded-lg text-sm font-semibold
            ${analyzed
              ? "bg-green-100 text-green-700"
              : "bg-indigo-600 text-white hover:bg-indigo-700"}
            disabled:opacity-60`}
        >
          {analyzing
            ? "Analyzing..."
            : analyzed
            ? "Analyzed ✓"
            : "Analyze"}
        </button>
      </div>

      {description.overall_score && (
        <div className="mt-4 rounded-xl bg-gray-100 p-4 text-sm">
          <p className="font-semibold text-gray-700 mb-1">
            Analysis Scores
          </p>

          <div className="grid grid-cols-2 gap-2 text-gray-600">
            <span>Quality: {description.quality_score}</span>
            <span>SEO: {description.seo_score}</span>
            <span>Engagement: {description.engagement_score}</span>
            <span>Conversion: {description.conversion_score}</span>
          </div>

          <p className="mt-2 text-gray-500">
            {description.analysis_notes}
          </p>
        </div>
      )}

      
      {/* Keywords */}
      {description.keywords && (
        <p className="text-xs text-gray-500">
          <span className="font-semibold">Keywords:</span>{" "}
          {description.keywords}
        </p>

      
      )}
      <ExportButton text={description.description} />

    </div>
  );
};

export default DescriptionCard;
