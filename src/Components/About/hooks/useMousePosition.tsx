import { useState, useEffect } from 'react';

export default function useMousePosition(
  elementRef: React.MutableRefObject<null>,
  isInside: boolean
) {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (isInside) {
        const { left, top } = elementRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - left,
          y: e.clientY - top,
        });
      }
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [elementRef, isInside]);

  return mousePosition;
}
