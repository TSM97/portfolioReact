import { backOut, motion } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';
import { useRef, useState } from 'react';
import '../mask.css';

export default function MaskCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isInside, setIsInside] = useState(false);
  const elementRef = useRef(null);
  const { x, y } = useMousePosition(elementRef, isInside);
  const size = isHovered ? 400 : 40;
  console.log(x, y);
  return (
    <main
      ref={elementRef}
      className='text-5xl text-center'
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
    >
      <motion.div
        className='mask flex items-center justify-center cursor-default w-full h-[100dvh] pt-[5dvh] absolute'
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${isInside ? size : 0}px`,
          offset: ['end end', 'start start'],
        }}
        transition={{
          type: 'tween',
          ease: backOut,
          duration: 0.5,
        }}
      >
        <p
          className='px-[10dvw] w-3/4'
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
          dignissimos tenetur qui autem perspiciatis debitis numquam veritatis
          facere.
        </p>
      </motion.div>
      <div className=' flex items-center justify-center cursor-default w-full  h-[100dvh] pt-[5dvh]'>
        <p className=' px-[10dvw] w-3/4'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
          dignissimos tenetur qui autem perspiciatis debitis numquam veritatis
          facere.
        </p>
      </div>
    </main>
  );
}
