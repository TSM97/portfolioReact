import OppositeScrolling from './Components/OppositeScrolling';

const Skills = () => {
  return (
    <div className='bg-neutral-800'>
      <div className='flex h-48 items-center justify-center'>
        <span className='font-semibold uppercase text-neutral-500'>
          Scroll down
        </span>
      </div>
      <OppositeScrolling />
      <div className='flex h-48 items-center justify-center'>
        <span className='font-semibold uppercase text-neutral-500'>
          Scroll up
        </span>
      </div>
    </div>
  );
};

export default Skills;
