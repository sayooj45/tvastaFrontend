// Export all animation components and utilities
export * from './animations.jsx';
export * from './animationHelpers';

// Export commonly used hooks
export * from '../hooks/useScrollAnimation';

// Re-export framer-motion for convenience
export { motion, AnimatePresence } from 'framer-motion';
export { useInView } from 'react-intersection-observer';
