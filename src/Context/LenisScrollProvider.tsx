import { ReactNode, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

// Shared instance so other modules (e.g. utils/scrollTo) can drive Lenis
export let lenisInstance: Lenis | null = null;

interface SmoothScrollProps {
  children: ReactNode;
}

export default function LenisScrollProvider({
  children,
}: SmoothScrollProps): JSX.Element {
  useEffect(() => {
    const lenis = new Lenis();
    lenisInstance = lenis;
    let rafId = 0;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return <>{children}</>;
}
