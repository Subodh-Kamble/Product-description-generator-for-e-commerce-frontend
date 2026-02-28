const InputField = ({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
  required = false,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full rounded-xl border px-4 py-3"
      />
    </div>
  );
};

export default InputField;
