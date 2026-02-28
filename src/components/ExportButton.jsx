import { useState } from "react";

const ExportButton = ({ text }) => {
  const [message, setMessage] = useState("");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage("Copied to clipboard ✓");

      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      setMessage("Copy failed ❌");
    }
  };

  const downloadAsFile = () => {
    try {
      const blob = new Blob([text], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "description.txt";
      link.click();

      URL.revokeObjectURL(url);

      setMessage("Downloaded ✓");
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      setMessage("Download failed ❌");
    }
  };

  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      <button
        onClick={copyToClipboard}
        className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium hover:bg-gray-200"
      >
        Copy
      </button>

      <button
        onClick={downloadAsFile}
        className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium hover:bg-gray-200"
      >
        Download
      </button>

      {message && (
        <span className="text-xs text-green-600 font-medium">
          {message}
        </span>
      )}
    </div>
  );
};

export default ExportButton;
