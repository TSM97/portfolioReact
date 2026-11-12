import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Model from './Model';
import { useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export default function FloatingShapes() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(1);
  const smoothMouse = {
    x: useSpring(mouseX, { stiffness: 75, damping: 100, mass: 3 }),
    y: useSpring(mouseY, { stiffness: 75, damping: 100, mass: 3 }),
  };

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, [mouseX, mouseY]);
  return (
    <>
      <Canvas
        orthographic
        camera={{ position: [0, 0, 500], zoom: 1.5 }}
        className='left-[40%] '
        style={{ position: 'absolute', height: '65%', width: '55%' }}
      >
        <Model mouse={smoothMouse} />
        <Environment preset='studio' />
      </Canvas>
    </>
  );
}
