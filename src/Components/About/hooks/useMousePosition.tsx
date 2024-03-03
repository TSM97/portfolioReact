import { useState, useEffect } from "react";

export default function useMousePosition(start) {
  const [mousePosition, setMousePosition] = useState<{
    x: null | number;
    y: null | number;
  }>({ x: null, y: null });

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY / 2 });
  };

  useEffect(() => {
    if (start) {
      window.addEventListener("mousemove", updateMousePosition);
      return () => window.removeEventListener("mousemove", updateMousePosition);
    }
  }, [start]);

  return mousePosition;
}
