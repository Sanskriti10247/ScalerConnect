import React, { useState } from 'react';  // Importing React and useState hook for managing component state
import { useNavigate } from 'react-router-dom';  // Importing useNavigate for navigation after form submission
import { GoogleLogin } from '@react-oauth/google'; // Importing Google OAuth for login functionality

const LoginRegister = () => {
  // Initializing state variables for handling the form type (Login/Register)
  const [isLogin, setIsLogin] = useState(true);  // Default isLogin state is true, meaning the Login form is shown initially
  const navigate = useNavigate();  // This hook allows navigation after form submission

  // Function to toggle between Login and Register forms when the link is clicked
  const handleFormToggle = () => {
    setIsLogin(!isLogin);  // Toggle between login and register states
  };

  // Login form submission handler
  const handleLoginSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission
    alert(`Logged in successfully`);  // Alert after successful login
    navigate('/dashboard'); // After successful login, redirect the user to the dashboard page
  };

  // Register form submission handler
  const handleRegisterSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission
    alert(`Registered successfully`);  // Alert after successful registration
    navigate('/dashboard'); // After successful registration, redirect the user to the dashboard page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-gray-300">
        {/* Displaying title based on whether the form is in login or register mode */}
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">
          {isLogin ? "Login to ScalerConnect" : "Register to ScalerConnect"}
        </h2>

        {/* Form Toggle Links */}
        <div className="text-center mb-4">
          <button 
            onClick={handleFormToggle}  // When clicked, toggle between login and register form
            className={`px-6 py-2 text-lg font-semibold ${isLogin ? 'text-blue-600' : 'text-gray-600'}`}
          >
            {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
          </button>
        </div>

        {/* Login Form */}
        {isLogin ? (
          <form className="space-y-4" onSubmit={handleLoginSubmit}>  {/* Form for login */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Submit Button for Login */}
            <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
              Login
            </button>
          </form>
        ) : (
          // Register Form (if not login)
          <form className="space-y-4" onSubmit={handleRegisterSubmit}>  {/* Form for registration */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Submit Button for Register */}
            <button type="submit" className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300">
              Register
            </button>
          </form>
        )}

        {/* Google Login Option */}
        <div className="mt-6 space-y-4">
          <GoogleLogin
            onSuccess={() => navigate('/dashboard')}  // If login is successful, redirect to dashboard
            onError={(error) => console.log('Google Login Error:', error)}  // If error occurs during login
            useOneTap  // Use the one-tap sign-in feature
            theme="filled_blue"  // Google login button style
            shape="circle"  // Circular Google login button style
  clientId="507795154422-0fb2g5k32jevk6c2f8e84tf5mppjsumg.apps.googleusercontent.com"// your Google OAuth Client ID
            className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all duration-300 flex items-center justify-center"
          >
            Login with Google  {/* Display the Google login option */}
          </GoogleLogin>
          
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
