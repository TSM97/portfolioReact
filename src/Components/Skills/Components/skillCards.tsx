const SkillCard = ({ card }) => {
  return (
    <div
      key={card.id}
      className='group relative h-[50dvh] w-[40dvw] py-5 overflow-hidden bg-neutral-200 grayscale hover:grayscale-[50%] duration-700'
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
        <p className='bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black text-white backdrop-blur-lg'>
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
