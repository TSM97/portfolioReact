import { useEffect, useRef } from "react";

// Not yet fixed!

export default function Line() {
  const path = useRef(null);
  let progress = 0;
  let time: number = Math.PI / 2;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress: number) => {
    const { innerWidth } = window;
    const width = innerWidth;
    path.current.setAttributeNS(
      "",
      "d",
      `M0 50 Q${width / 2} ${50 + progress}, ${width} 50`
    );
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { movementY } = e;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    const newProgress = progress * Math.sin(time);
    setPath(newProgress);
    AnimateOut();
    window.requestAnimationFrame(AnimateOut);
  };

  const AnimateOut = (): void => {
    time += 0.2;
  };

  return (
    <div className="flex justify-center items-center">
      <div className="h-[1px] mb-5 w-[90dvw] relative">
        <div
          className="h-10 border border-red-500 relative z-10 top-16"
          onMouseMove={(e) => {
            manageMouseMove(e);
          }}
          onMouseLeave={manageMouseLeave}
        ></div>
        <svg className="w-full h-[50px] absolute">
          <path
            className="stroke-foreground stroke-1 fill-none"
            ref={path}
          ></path>
        </svg>
      </div>
    </div>
  );
}
