import { useRef } from "react";
import useInView from "../hooks/useInView";

const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.08, rootMargin: "0px 0px -40px" });

  const transforms = {
    up: "translateY(24px)",
    down: "translateY(-24px)",
    left: "translateX(24px)",
    right: "translateX(-24px)",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 motion-reduce:transform-none motion-reduce:transition-none ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translate(0)" : transforms[direction] || transforms.up,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
