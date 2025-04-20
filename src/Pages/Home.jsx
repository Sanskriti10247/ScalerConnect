import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate between routes

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Animated heading using Framer Motion */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }} // Initial animation state
        animate={{ y: 0, opacity: 1 }} // Final animation state
        transition={{ duration: 0.8 }} // Animation duration
        className="text-5xl md:text-6xl font-bold text-blue-800 mb-6 drop-shadow-md"
      >
        Welcome to ScalerConnect
      </motion.h1>

      {/* Animated subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-gray-700 max-w-2xl"
      >
        Your one-stop student platform for raising concerns, getting updates on events,
        discussing academics, and staying connected with your peers. Everything is real-time and community-driven.
      </motion.p>

      {/* Animated "Get Started" button */}
      <motion.button
        whileHover={{ scale: 1.05 }} // Slight zoom on hover
        whileTap={{ scale: 0.95 }} // Slight shrink on tap
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={() => navigate('/loginRegister')}  // Navigate to login/register page on click
        className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-2xl text-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
      >
        Get Started
      </motion.button>

      {/* Animated footer text */}
      <motion.div
        className="absolute bottom-10 right-10 text-blue-800 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Made with ❤️ for Scaler students
      </motion.div>
    </div>
  );
};

export default Home;
