import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.div 
      className="text-center mb-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-center mb-4">
        <span className="text-3xl font-bold text-gray-400 cyber-text">SecureScan</span>
      </div>
      <motion.h1 
        className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight cyber-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Check for Malicious Files
      </motion.h1>
      <motion.p 
        className="text-gray-400 max-w-lg mx-auto text-sm md:text-base opacity-90 cyber-text font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        Upload your files for instant scanning and identification of potential threats
      </motion.p>
    </motion.div>
  );
};

export default Header;