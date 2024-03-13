import { useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function useMousePosition(
  elementRef: React.MutableRefObject<null>,
  isInside: boolean
) {
  const mousePosition = {
    x: useSpring(0, {
      stiffness: 150,
      damping: 15,
      mass: 0.1,
    }),
    y: useSpring(0, {
      stiffness: 150,
      damping: 15,
      mass: 0.1,
    }),
  };

  const { x, y } = mousePosition;

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!elementRef.current) return;

      const { clientX, clientY } = e;

      // Assert the type of ref.current to HTMLElement
      const element = elementRef.current as HTMLElement;

      if (!element) return;

      const { left, top } = element.getBoundingClientRect();
      x.set(clientX - left);
      y.set(clientY - top);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [elementRef, x, y]);
  console.log('x' + x.get(), 'y' + y.get());

  return mousePosition;
}
