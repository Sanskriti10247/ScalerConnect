// components/FormInput.jsx
const FormInput = ({ label, type, name, value, onChange, error, placeholder, className }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || `Enter ${label}`}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-scaler-blue ${className}`}
      />
      {/* Display error message if present */}
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
