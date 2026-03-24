import React, { useState } from 'react';
import useInView from '../hooks/useInView';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [ref, setRef] = useState(null);
  const isInView = useInView({ current: ref }, { threshold: 0.1 });

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(20px)';
      case 'down': return 'translateY(-20px)';
      case 'left': return 'translateX(20px)';
      case 'right': return 'translateX(-20px)';
      default: return 'translateY(20px)';
    }
  };

  return (
    <div
      ref={setRef}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translate(0)' : getTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
