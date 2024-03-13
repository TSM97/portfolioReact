import { useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function useMousePosition(
  elementRef: React.MutableRefObject<null>,
  isInside: boolean
) {
  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const { x, y } = mousePosition;

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(x, smoothOptions),

    y: useSpring(y, smoothOptions),
  };

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (isInside) {
        const { left, top } = elementRef.current.getBoundingClientRect();
        x.set(e.clientX - left);
        y.set(e.clientY - top);
      }
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [elementRef, isInside]);

  return smoothMouse;
}
