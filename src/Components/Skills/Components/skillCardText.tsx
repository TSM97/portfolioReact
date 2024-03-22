const SkillCardText = ({ card }) => {
  return (
    <div key={card.id} className='h-[100dvh] w-[40dvw] bg-neutral-200 '>
      <div className='flex inset-0 h-full w-full z-10 items-center justify-center'>
        <p className='bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black text-white backdrop-blur-lg'>
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default SkillCardText;
