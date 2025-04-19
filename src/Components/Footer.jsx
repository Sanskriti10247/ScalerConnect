import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center py-4">
    <p>&copy; 2025 ScalerConnect. All Rights Reserved.</p>
    
    {/* Links for Privacy Policy and Terms of Service */}
    <div className="mt-2">
      <a href="/privacy-policy" className="text-gray-400 hover:text-gray-300 mx-4">Privacy Policy</a>
      <a href="/terms-of-service" className="text-gray-400 hover:text-gray-300 mx-4">Terms of Service</a>
    </div>

    {/* Social Media Icons */}
    <div className="mt-4">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 mx-2 hover:text-gray-300">
        <FaLinkedin className="text-xl" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 mx-2 hover:text-gray-300">
        <FaTwitter className="text-xl" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 mx-2 hover:text-gray-300">
        <FaInstagram className="text-xl" />
      </a>
    </div>
  </footer>
);

export default Footer;
