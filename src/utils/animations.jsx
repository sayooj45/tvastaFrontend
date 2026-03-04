import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

// Animation variants
export const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -60 },
  animate: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut"
    }
  })
};

export const slideInFromRight = {
  initial: { opacity: 0, x: 60 },
  animate: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut"
    }
  })
};

export const slideInFromBottom = {
  initial: { opacity: 0, y: 60 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut"
    }
  })
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideInUpVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Fade in animation for elements
export const FadeIn = ({ children, delay = 0, duration = 0.6, className = "", threshold = 0.1, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Slide up animation
export const SlideInUp = ({ children, delay = 0, duration = 0.6, className = "", threshold = 0.1, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Slide in from left animation
export const SlideInLeft = ({ children, delay = 0, duration = 0.6, className = "", threshold = 0.1, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Slide in from right animation
export const SlideInRight = ({ children, delay = 0, duration = 0.6, className = "", threshold = 0.1, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Scale up animation
export const ScaleUp = ({ children, delay = 0, duration = 0.6, className = "", threshold = 0.1, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Animated text component
export const AnimatedText = ({ 
  text, 
  delay = 0, 
  duration = 0.6, 
  className = "", 
  threshold = 0.1,
  as: Component = "div",
  ...props 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      {...props}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      <Component>
        {text}
      </Component>
    </motion.div>
  );
};

// Staggered animation for lists
export const StaggeredList = ({ 
  children, 
  delay = 0, 
  staggerDelay = 0.1, 
  className = "", 
  threshold = 0.1,
  ...props 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {React.Children.map(children, (child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Parallax scroll effect
export const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  className = "", 
  ...props 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        transform: inView ? `translateY(${speed * -50}px)` : 'translateY(0px)',
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Higher-order component to add scroll animation
export const withScrollAnimation = (Component, animationProps = {}) => {
  const defaultProps = {
    threshold: 0.1,
    duration: 0.6,
    delay: 0,
    ease: "easeOut",
    ...animationProps
  };

  return React.forwardRef((props, ref) => {
    const [inViewRef, inView] = useInView({
      triggerOnce: true,
      threshold: defaultProps.threshold,
    });

    return (
      <motion.div
        ref={inViewRef}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ 
          duration: defaultProps.duration, 
          delay: defaultProps.delay,
          ease: defaultProps.ease 
        }}
      >
        <Component ref={ref} {...props} />
      </motion.div>
    );
  });
};

// Page transition wrapper
export const PageTransition = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Button hover animations
export const AnimatedButton = ({ 
  children, 
  className = "", 
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.95 },
  transition = { duration: 0.2 },
  ...props 
}) => {
  return (
    <motion.button
      className={className}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Card hover effects
export const AnimatedCard = ({ 
  children, 
  className = "", 
  whileHover = { y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" },
  transition = { duration: 0.3 },
  ...props 
}) => {
  return (
    <motion.div
      className={className}
      whileHover={whileHover}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};
