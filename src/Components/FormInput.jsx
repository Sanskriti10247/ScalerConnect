const FormInput = ({ label, type, name, value, onChange }) => {
    return (
      <div className="mb-4">
        <label className="block mb-1 font-semibold">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
      </div>
    );
  };
  
  export default FormInput;
  