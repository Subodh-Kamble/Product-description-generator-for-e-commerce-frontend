import { useState } from "react";
import { useParams } from "react-router-dom";
import ToneSelector from "./ToneSelector";
import LanguageSelector from "./LanguageSelector";
import toast from "react-hot-toast";

const DescriptionGenerator = ({ onGenerated }) => {
  const { id } = useParams();

  const [tone, setTone] = useState("professional");
  const [language, setLanguage] = useState("English");
  const [variations, setVariations] = useState(3);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setMessage("");

      const res = await fetch(
        `https://product-description-generator-for-e.vercel.app/api/products/${id}/generate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tone,
            language,
            num_variations: variations,
          }),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.detail || "Failed to generate descriptions");
      }

      toast.success("Descriptions generated successfully ✨");
      setMessage("Descriptions generated successfully");

      // IMPORTANT: refresh product details
      if (onGenerated) {
        onGenerated();
      }

    } catch (err) {
        if (
          err.message?.includes("RESOURCE_EXHAUSTED") ||
          err.message?.includes("quota") ||
          err.message?.includes("429")
        ) {
          toast.error("AI limit reached. Please try again later ⏳");
          setMessage("AI limit reached. Please try again later.");
        } else {
          toast.error(err.message || "Generation failed");
          setMessage(err.message || "Generation failed");
        }
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="mb-12 rounded-3xl border bg-white/80 backdrop-blur-xl p-8 shadow-xl">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-gray-900">
          Generate AI Descriptions
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Customize tone, language, and variations before generating
        </p>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ToneSelector value={tone} onChange={setTone} />
        <LanguageSelector value={language} onChange={setLanguage} />

        {/* Variations */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Variations
          </label>
          <select
            value={variations}
            onChange={(e) => setVariations(Number(e.target.value))}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value={3}>3 Variations</option>
            <option value={4}>4 Variations</option>
            <option value={5}>5 Variations</option>
          </select>
        </div>
      </div>

      {/* Action */}
      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="inline-flex items-center justify-center rounded-xl
                     bg-gradient-to-r from-indigo-600 to-purple-600
                     px-8 py-3 text-white font-semibold
                     hover:opacity-90 transition
                     disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Descriptions"}
        </button>

        {message && (
          <span className="text-sm text-green-600 font-medium">
            {message}
          </span>
        )}
      </div>
    </div>
  );
};

export default DescriptionGenerator;
