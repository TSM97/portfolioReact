import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./Model";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

// Radians of rotation per pixel dragged
const DRAG_SENSITIVITY = 0.007;
// Vertical drags tilt less than horizontal ones spin
const VERTICAL_FACTOR = 0.5;
// Maximum extra rotation (radians) so the model never flips out of its canvas
const MAX_DRAG = 1.2;
const clamp = (v: number) => Math.max(-MAX_DRAG, Math.min(MAX_DRAG, v));

export default function FloatingShapes() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(1);
  const smoothMouse = {
    x: useSpring(mouseX, { stiffness: 75, damping: 100, mass: 3 }),
    y: useSpring(mouseY, { stiffness: 75, damping: 100, mass: 3 }),
  };

  // Extra rotation added while the user grabs and drags the model.
  // It springs back to rest when the model is released.
  const dragTargetX = useMotionValue(0);
  const dragTargetY = useMotionValue(0);
  const drag = {
    x: useSpring(dragTargetX, { stiffness: 120, damping: 14 }),
    y: useSpring(dragTargetY, { stiffness: 120, damping: 14 }),
  };
  const lastPointer = useRef<{ x: number; y: number } | null>(null);
  const [hovered, setHovered] = useState(false);
  const [grabbing, setGrabbing] = useState(false);
  const [hasGrabbed, setHasGrabbed] = useState(false);

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [mouseX, mouseY]);

  const release = () => {
    lastPointer.current = null;
    dragTargetX.set(0);
    dragTargetY.set(0);
    setGrabbing(false);
  };

  return (
    <div
      className="absolute left-[40%]"
      style={{ height: "65%", width: "55%" }}
    >
      {/* Dashed orbit ring, behind the model */}
      <motion.svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] aspect-square -translate-x-1/2 -translate-y-1/2 -rotate-[20deg] text-foreground-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasGrabbed ? 0.25 : 0.6 }}
        transition={{ delay: hasGrabbed ? 0 : 1, duration: 1 }}
      >
        <motion.ellipse
          cx="50"
          cy="50"
          rx="48"
          ry="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 2.5"
          animate={{ strokeDashoffset: [0, -9] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>

      {/* Oversized (but centered) so a dragged model is never clipped */}
      <div className="pointer-events-none absolute -inset-[25%]">
        <Canvas
          orthographic
          camera={{ position: [0, 0, 500], zoom: 1.5 }}
          style={{ width: "100%", height: "100%" }}
        >
          <Model mouse={smoothMouse} drag={drag} />
          <Environment preset="studio" />
        </Canvas>
      </div>

      {/* Grab zone on top of the model */}
      <div
        className={`absolute left-1/2 top-1/2 aspect-square h-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full touch-none select-none ${
          grabbing ? "cursor-grabbing" : "cursor-grab"
        }`}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          lastPointer.current = { x: e.clientX, y: e.clientY };
          setGrabbing(true);
          setHasGrabbed(true);
        }}
        onPointerMove={(e) => {
          const last = lastPointer.current;
          if (!last) return;
          dragTargetY.set(
            clamp(dragTargetY.get() + (e.clientX - last.x) * DRAG_SENSITIVITY),
          );
          dragTargetX.set(
            clamp(
              dragTargetX.get() +
                (e.clientY - last.y) * DRAG_SENSITIVITY * VERTICAL_FACTOR,
            ),
          );
          lastPointer.current = { x: e.clientX, y: e.clientY };
        }}
        onPointerUp={release}
        onPointerCancel={release}
      >
        <AnimatePresence>
          {hovered && !grabbing && !hasGrabbed && (
            <motion.span
              className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-foreground-300 bg-background/70 px-3 py-1 text-xs text-foreground-600 backdrop-blur-sm"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
            >
              Grab &amp; drag
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
