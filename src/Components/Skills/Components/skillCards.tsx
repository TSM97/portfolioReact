import { dynamicCardsType } from '../data/dynamicCards';

import useScreenSize from '../../../hooks/useScreenSize';
const SkillCard = ({ card }: { card: dynamicCardsType }) => {
  const { isTablet } = useScreenSize();

  return (
    <div
      key={card.id}
      className={`group relative ${
        isTablet ? `h-[65dvh]` : `h-[100dvh]`
      } lg:w-[40dvw] w-screen overflow-hidden bg-neutral-200 grayscale hover:grayscale-[60%] duration-700`}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
      ></div>
      <div className='absolute inset-0 z-10 grid place-content-center'>
        <p className='bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl xl:text-5xl lg:text-4xl md:text-3xl font-black text-white backdrop-blur-lg'>
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
