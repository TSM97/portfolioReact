import { backOut, motion } from "framer-motion";
import useMousePosition from "../hooks/useMousePosition";
import { useRef, useState } from "react";
import "../mask.css";

export default function MaskCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isInside, setIsInside] = useState(false);
  const elementRef = useRef(null);
  const { x, y }: { x: number | null; y: number | null } = useMousePosition(
    elementRef,
    isInside
  );
  const size = isHovered ? 350 : 30;
  return (
    <main
      ref={elementRef}
      className="lg:text-5xl md:text-3xl sm:text-xl text-medium text-center"
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
    >
      <motion.div
        className="mask flex items-center justify-center cursor-default w-full h-[100dvh] absolute"
        // Pt-[5dvh] for default font-family, in order to be aligned
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
          className="px-[10dvw] w-3/4 text-"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          In my spare time, I enjoy various pastimes, such as <u>sketching</u>,
          casually playing the <u>Bouzouki</u> and <u>piano</u>, and diving into
          the <u>gaming</u> world, where I find enjoyment and relaxation.
          Ofcourse, I always try to meet my friends
        </p>
      </motion.div>
      <div className=" flex items-center justify-center cursor-default w-full h-[100dvh]">
        <p className=" px-[10dvw] w-3/4">
          My <span className="text-[#e33d30]">passion for programming</span>{" "}
          extends far beyond the confines of the workweek. During my free time,
          you'll often find me diving deep into various coding projects,
          exploring new technologies, and honing my skills in{" "}
          <span className="text-[#e33d30]">FrontEnd development</span>.
        </p>
      </div>
    </main>
  );
}
