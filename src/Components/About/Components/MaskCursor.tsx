import { backOut, motion } from "framer-motion";
import useMousePosition from "../hooks/useMousePosition";
import { useState } from "react";
import "../mask.css";

export default function MaskCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [start, setStart] = useState(false);
  const { x, y } = useMousePosition(start);
  const size = isHovered ? 400 : 40;
  console.log("gaaaamta");
  return (
    <main
      className="text-5xl text-center"
      onMouseEnter={() => setStart(true)}
      onMouseLeave={() => setStart(false)}
    >
      <motion.div
        className="mask flex items-center justify-center cursor-default w-full h-[50dvh] pt-[5dvh] absolute"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: backOut, duration: 0.5 }}
      >
        <p
          className="px-[10dvw] w-3/4"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
          dignissimos tenetur qui autem perspiciatis debitis numquam veritatis
          facere.
        </p>
      </motion.div>
      <div className=" flex items-center justify-center cursor-default w-full  h-[50dvh] pt-[5dvh]">
        <p className=" px-[10dvw] w-3/4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
          dignissimos tenetur qui autem perspiciatis debitis numquam veritatis
          facere.
        </p>
      </div>
    </main>
  );
}
