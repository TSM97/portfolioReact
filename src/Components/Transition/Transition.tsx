import { AnimationControls, motion } from 'framer-motion';

export default function Transition({
  controls,
}: {
  controls: AnimationControls;
}) {
  return (
    <div className='sticky top-0 z-50'>
      <motion.div
        className='absolute bg-[#262626]  w-[100dvw] h-[500dvh] top-[100dvh]  z-30'
        animate={controls}
        initial='initial'
        transition={{
          ease: 'circInOut',
        }}
      ></motion.div>
      {/* <motion.div
        className='absolute bg-black w-[100dvw] h-[100dvh] z-40'
        animate={{
          y: '-100dvh',
        }}
        transition={{
          ease: 'circInOut',
          duration: 1.2,
        }}
      /> */}
    </div>
  );
}
