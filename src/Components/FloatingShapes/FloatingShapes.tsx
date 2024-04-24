import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Model from './Model';
import { useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export default function FloatingShapes() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(1),
  };
  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 3 }),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };
  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, []);
  return (
    <>
      <Canvas
        orthographic
        camera={{ position: [0, 0, 500], zoom: 2 }}
        className='left-1/3 '
        style={{ position: 'absolute', height: '65%', width: '65%' }}
      >
        <Model mouse={smoothMouse} />
        <Environment preset='studio' />
      </Canvas>
    </>
  );
}
