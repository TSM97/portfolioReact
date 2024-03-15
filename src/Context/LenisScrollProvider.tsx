import { ReactNode, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function LenisScrollProvider({
  children,
}: SmoothScrollProps): JSX.Element {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
}
