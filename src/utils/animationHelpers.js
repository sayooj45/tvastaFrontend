import React from 'react';
import { withScrollAnimation } from './animations.jsx';

// Animation configuration presets
export const ANIMATION_PRESETS = {
  FADE: { animation: 'fade', duration: 0.6, delay: 0, threshold: 0.1 },
  SLIDE_LEFT: { animation: 'slide-left', duration: 0.6, delay: 0, threshold: 0.1 },
  SLIDE_RIGHT: { animation: 'slide-right', duration: 0.6, delay: 0, threshold: 0.1 },
  SLIDE_UP: { animation: 'slide-up', duration: 0.6, delay: 0, threshold: 0.1 },
  SCALE: { animation: 'scale', duration: 0.6, delay: 0, threshold: 0.1 },
  STAGGER: { animation: 'stagger', duration: 0.6, staggerDelay: 0.1, threshold: 0.1 }
};

// Higher Order Component for section animations
export const withSectionAnimation = (Component, options = {}) => {
  const defaultOptions = {
    animation: 'fade',
    duration: 0.6,
    delay: 0,
    threshold: 0.1,
    once: true,
    ...options
  };

  const AnimatedSection = React.forwardRef((props, ref) => {
    const AnimatedComponent = withScrollAnimation(Component, defaultOptions);
    return <AnimatedComponent ref={ref} {...props} />;
  });

  AnimatedSection.displayName = `withSectionAnimation(${Component.displayName || Component.name || 'Component'})`;
  
  return AnimatedSection;
};

// Pre-configured animation HOCs for common use cases
export const FadeInSection = (Component) => 
  withSectionAnimation(Component, ANIMATION_PRESETS.FADE);

export const SlideInLeftSection = (Component) => 
  withSectionAnimation(Component, ANIMATION_PRESETS.SLIDE_LEFT);

export const SlideInRightSection = (Component) => 
  withSectionAnimation(Component, ANIMATION_PRESETS.SLIDE_RIGHT);

export const SlideInUpSection = (Component) => 
  withSectionAnimation(Component, ANIMATION_PRESETS.SLIDE_UP);

export const ScaleUpSection = (Component) => 
  withSectionAnimation(Component, ANIMATION_PRESETS.SCALE);

// Animation utility for adding delays
export const withDelay = (Component, delay = 0) => {
  return (props) => <Component {...props} delay={delay} />;
};

// Staggered animation helper for multiple elements
export const createStaggeredElements = (elements, staggerDelay = 0.1) => {
  return elements.map((element, index) => ({
    ...element,
    delay: index * staggerDelay
  }));
};

// Animation timing utilities
export const ANIMATION_TIMING = {
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 1.0,
  VERY_SLOW: 1.5
};

export const ANIMATION_DELAYS = {
  NONE: 0,
  SHORT: 0.1,
  MEDIUM: 0.3,
  LONG: 0.5,
  VERY_LONG: 1.0
};

// Easing presets
export const EASING = {
  EASE_IN: [0.4, 0, 1, 1],
  EASE_OUT: [0, 0, 0.2, 1],
  EASE_IN_OUT: [0.4, 0, 0.2, 1],
  SPRING: [0.6, -0.05, 0.01, 0.99],
  BOUNCE: [0.68, -0.55, 0.265, 1.55]
};
