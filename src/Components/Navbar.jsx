import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <Link to="/home" className="flex items-center space-x-2">
        <img src={logo} alt="ScalerConnect Logo" className="h-10 w-10 object-contain" />
        <span className="text-xl font-bold text-scaler-blue">ScalerConnect</span>
      </Link>

      <div className="flex items-center space-x-4">
        <Link
          to="/feed"
          className="text-gray-700 hover:text-scaler-blue transition-colors duration-200"
        >
          Feed
        </Link>
        <Link
          to="/login"
          className="bg-scaler-blue text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition duration-200"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="border border-scaler-blue text-scaler-blue px-4 py-1.5 rounded-full hover:bg-scaler-blue hover:text-white transition duration-200"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};


export default Navbar;
