import { useEffect, useRef } from 'react';
import scrollTo from '../../utils/scrollTo';

// Not yet fixed!

export default function Line() {
  const path = useRef(null);
  let progress = 0;
  let x: number = 0.5;
  let time: number = Math.PI / 2;
  let reqId: unknown = null;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress: number) => {
    const width = window.innerWidth * 0.9;
    path.current.setAttributeNS(
      '',
      'd',
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  };

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { movementY, clientX } = e;
    const pathBound = path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='h-[1px] mb-5 w-[90dvw] relative'>
          <div
            className='h-12 relative z-10 top-16'
            onMouseEnter={() => {
              manageMouseEnter();
            }}
            onMouseMove={(e: MouseEvent) => {
              manageMouseMove(e);
            }}
            onMouseLeave={() => {
              manageMouseLeave();
            }}
          ></div>
          <div className='flex justify-center items-center'>
            <div className='pr-2'>{'<'}</div>
            <div
              onClick={() => scrollTo('About')}
              className='text-center font-light border-1 border-foreground-600 rounded-md text-foreground-800 px-2 py-1 text-lg z-20 cursor-pointer'
            >
              Keep Scrolling
            </div>
            <div className='pl-2'>{'>'}</div>
          </div>

          <svg className='w-full h-[300px] absolute -top-[9.5rem]'>
            <path
              className='stroke-foreground stroke-1 fill-none'
              ref={path}
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
