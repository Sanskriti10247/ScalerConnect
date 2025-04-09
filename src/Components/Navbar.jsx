import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <Link to="/">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="ScalerConnect Logo" className="h-10" />
          <span className="text-xl font-bold text-blue-700">ScalerConnect</span>
        </div>
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/feed" className="text-gray-700 hover:text-blue-600">Feed</Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
