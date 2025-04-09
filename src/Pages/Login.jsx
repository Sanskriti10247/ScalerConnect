import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import FormInput from "../Components/FormInput";
import googleIcon from "../Assets/google-icon.png";
import githubIcon from "../Assets/github-icon.png";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
    navigate("/feed");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-scaler-bg p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-scaler-blue mb-6 text-center">Login to ScalerConnect</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full bg-scaler-blue hover:bg-scaler-lightBlue text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        {/* OR separator */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="flex-grow border-t" />
        </div>

        {/* Social login buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition">
            <img src={googleIcon} alt="Google" className="h-5 w-5" />
            Login with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition">
            <img src={githubIcon} alt="GitHub" className="h-5 w-5 invert" />
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
