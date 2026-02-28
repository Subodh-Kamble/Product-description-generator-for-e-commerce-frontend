const ToneSelector = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Tone
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm
                   focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="professional">Professional</option>
        <option value="formal">Formal</option>
        <option value="friendly">Friendly</option>
        <option value="casual">Casual</option>
        <option value="technical">Technical</option>
      </select>
    </div>
  );
};

export default ToneSelector;
