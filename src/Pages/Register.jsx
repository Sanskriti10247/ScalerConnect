import FormInput from "../Components/FormInput";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login on register for now
    login(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-scaler-blue mb-6 text-center">
        Register
      </h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Full Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full mt-4 bg-scaler-blue text-white py-2 rounded hover:bg-scaler-lightBlue transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
