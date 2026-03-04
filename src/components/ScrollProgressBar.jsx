import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollAnimation';

const ScrollProgressBar = ({ className = "", color = "#E63946" }) => {
  const progress = useScrollProgress();

  return (
    <motion.div
      className={`fixed top-0 left-0 h-1 z-50 ${className}`}
      style={{
        backgroundColor: color,
        width: `${progress}%`,
        originX: 0,
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
    />
  );
};

export default ScrollProgressBar;
