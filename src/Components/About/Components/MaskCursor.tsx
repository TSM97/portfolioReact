import { backOut, motion } from "framer-motion";
import { useRef, useState } from "react";
import "../mask.css";

import useMousePosition from "../../../hooks/useMousePosition";
import useScreenSize from "../../../hooks/useScreenSize";
import MobileTap from "./MobileTap";

export default function MaskCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isInside, setIsInside] = useState(false);
  const elementRef = useRef(null);
  const { isTablet, isMobile } = useScreenSize();

  const { x, y }: { x: number | null; y: number | null } = useMousePosition(
    elementRef,
    isInside
  );
  const size = isTablet ? (isHovered ? 300 : 30) : isHovered ? 350 : 30;
  return (
    <>
      <main
        ref={elementRef}
        className="lg:text-5xl md:text-3xl sm:text-xl text-lg text-center relative"
        onMouseMove={() => setIsInside(true)}
        onMouseLeave={() => setIsInside(false)}
      >
        {isMobile ? <MobileTap /> : null}
        <motion.div
          className="mask flex items-center justify-center cursor-default w-full h-[100vh] absolute xl:text-6xl md:text-4xl sm:text-3xl text-2xl"
          // Pt-[5vh] for default font-family, in order to be aligned
          animate={{
            WebkitMaskPosition: `${x && x - size / 2}px ${y && y - size / 2}px`,
            WebkitMaskSize: `${isInside ? size : 0}px`,
            offset: ["end end", "start start"],
          }}
          transition={{
            type: "tween",
            ease: backOut,
            duration: 0.7,
          }}
        >
          <p
            className={`mx-[10dvw] w-3/4 h-1/3 ${
              isMobile ? "prevent-select" : null
            }`}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            In my spare time, I enjoy various pastimes, such as <u>sketching</u>
            , casually playing the <u>Bouzouki</u> and <u>piano</u>, and diving
            into the <u>gaming</u> world, where I find enjoyment and relaxation.
            Ofcourse, I always try to meet my friends and catch up.
          </p>
        </motion.div>
        <div className=" flex items-center justify-center cursor-default w-full h-[100vh] xl:text-6xl md:text-4xl sm:text-3xl text-2xl">
          <p
            className={` mx-[10dvw] w-3/4 h-1/3 ${
              isMobile ? "prevent-select" : null
            }`}
          >
            My <span className="text-[#e33d30]">passion for programming</span>{" "}
            extends far beyond the confines of the workweek. During my free
            time, you'll often find me diving deep into various coding projects,
            exploring new technologies, and honing my skills in{" "}
            <span className="text-[#e33d30]">FrontEnd development</span>.
          </p>
        </div>
      </main>
    </>
  );
}
