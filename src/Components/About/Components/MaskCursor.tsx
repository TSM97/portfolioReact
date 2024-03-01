import { backIn, backInOut, backOut, motion } from "framer-motion";
import useMousePosition from "../hooks/useMousePosition";
import { useState } from "react";

export default function MaskCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  return (
    <main className="flex flex-col items-center text-5xl text-center px-[10%] pt-[10vh]">
      <motion.div
        className="mask w-full h-full text-red"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ tpye: "tween", ease: backOut, duration: 0.5 }}
      >
        <p
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
      <div className="body w-1/2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed suscipit,
          doloribus cumque qui natus reiciendis ab voluptatum ratione.
        </p>
      </div>
    </main>
  );
}
