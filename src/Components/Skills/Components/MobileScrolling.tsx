import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

import { dynamicCards } from '../data/dynamicCards';
import SkillCard from './skillCards';

const MobileScrolling = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className='relative h-[200vh]'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <motion.div style={{ x }} className='flex gap-4'>
          {dynamicCards.map((card) => {
            return <SkillCard card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MobileScrolling;
