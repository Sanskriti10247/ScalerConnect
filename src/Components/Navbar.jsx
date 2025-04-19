// components/Navbar.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext'; // Correct import for AuthContext
import { Link, useLocation } from 'react-router-dom'; // Added useLocation to highlight the active route
import logo from '../Assets/ChatGPT Image Apr 11, 2025, 01_36_52 AM (1).png'; // Correct relative path

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);  // Use the context here
  const location = useLocation(); // Get the current location/path

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path ? 'text-gray-200' : '';

  return (
    <nav className="bg-blue-700 shadow-md h-16 px-8 flex items-center">
      <Link to="/" className="flex items-center" aria-label="ScalerConnect Home">
        <img
          src={logo}
          alt="ScalerConnect Logo"
          className="w-32 h-auto"
        />
      </Link>
      <div className="ml-auto text-white space-x-4 text-lg">
        <Link to="/" className={`hover:text-gray-200 ${isActive('/')}`}>Home</Link>
        <Link to="/about" className={`hover:text-gray-200 ${isActive('/about')}`}>About</Link>
        <Link to="/contact" className={`hover:text-gray-200 ${isActive('/contact')}`}>Contact</Link>
        <Link to="/feed" className={`hover:text-gray-200 ${isActive('/feed')}`}>Feed</Link>

        {user ? (
          <>
            <Link to="/profile" className={`hover:text-gray-200 ${isActive('/profile')}`}>Profile</Link>
            <button onClick={logout} className="hover:text-gray-200">Logout</button>
          </>
        ) : (
          <Link to="/loginRegister" className={`hover:text-gray-200 ${isActive('/loginRegister')}`}>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
