import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <div className="font-bold text-lg">ScalerConnect</div>
      <div className="space-x-4">
        <Link to="/home">Home</Link>
        <Link to="/feed">Feed</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
