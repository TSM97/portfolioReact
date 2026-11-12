import { useCallback, useEffect, useRef } from "react";
import scrollTo from "../../utils/scrollTo";
import useScreenSize from "../../hooks/useScreenSize";

const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

export default function Line() {
  const path = useRef<SVGPathElement>(null);
  // Mutable animation state: must survive re-renders
  const state = useRef({ progress: 0, x: 0.5, time: Math.PI / 2, reqId: 0 });
  const { isMobile } = useScreenSize();

  const setPath = useCallback((progress: number) => {
    if (!path.current) return;
    const width = window.innerWidth * 0.9;
    path.current.setAttribute(
      "d",
      `M0 250 Q${width * state.current.x} ${250 + progress}, ${width} 250`
    );
  }, []);

  const resetAnimation = useCallback(() => {
    state.current.time = Math.PI / 2;
    state.current.progress = 0;
  }, []);

  useEffect(() => {
    setPath(0);
    const s = state.current;
    return () => cancelAnimationFrame(s.reqId);
  }, [setPath]);

  const animateOut = useCallback(() => {
    const s = state.current;
    const newProgress = s.progress * Math.sin(s.time);
    s.progress = lerp(s.progress, 0, 0.025);
    s.time += 0.2;
    setPath(newProgress);
    if (Math.abs(s.progress) > 0.75) {
      s.reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  }, [setPath, resetAnimation]);

  const manageMouseEnter = () => {
    if (state.current.reqId) {
      cancelAnimationFrame(state.current.reqId);
      state.current.reqId = 0;
      resetAnimation();
    }
  };

  const manageMouseMove = (e: React.MouseEvent) => {
    if (!path.current) return;
    const { movementY, clientX } = e.nativeEvent;
    const pathBound = path.current.getBoundingClientRect();
    state.current.x = (clientX - pathBound.left) / pathBound.width;
    state.current.progress += movementY;
    setPath(state.current.progress);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="h-[1px] mb-5 w-[90dvw] relative">
          <div
            className="relative h-12 z-10 top-16"
            onMouseEnter={() => {
              manageMouseEnter();
            }}
            onMouseMove={manageMouseMove}
            onMouseLeave={animateOut}
          ></div>
          <div className="flex justify-center items-center">
            <div className="pr-2">{"<"}</div>
            <div
              onClick={() => scrollTo("About")}
              className={`text-center font-light border-1 border-foreground-600 rounded-md text-foreground-800 px-2 py-1 text-lg z-20 cursor-pointer ${
                isMobile ? "prevent-select" : null
              }`}
            >
              Keep Scrolling
            </div>
            <div className="pl-2">{">"}</div>
          </div>

          <svg className="w-full h-[300px] absolute -top-[9.5rem] pointer-events-none">
            <path
              className="stroke-foreground stroke-1 fill-none"
              ref={path}
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
