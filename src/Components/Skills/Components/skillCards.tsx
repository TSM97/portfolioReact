const SkillCard = ({ card }) => {
  return (
    <div
      key={card.id}
      className='group relative h-[100dvh] w-[40dvw] overflow-hidden bg-neutral-200 grayscale hover:grayscale-[50%] duration-700'
    >
      <img
        loading='lazy'
        src={`${card.url}`}
        className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
      />
      <div className='absolute inset-0 z-10 grid place-content-center'>
        <p className='bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black text-white backdrop-blur-lg'>
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
