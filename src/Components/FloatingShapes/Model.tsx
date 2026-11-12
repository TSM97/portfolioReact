import { useGLTF } from "@react-three/drei";
import { Float } from "@react-three/drei";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import type { MotionValue } from "framer-motion";
import type { Mesh as ThreeMesh } from "three";

const MODEL_URL = `${import.meta.env.BASE_URL}medias/untitled.glb`;

type Mouse = { x: MotionValue<number>; y: MotionValue<number> };

export default function Model({ mouse }: { mouse: Mouse }) {
  const { nodes } = useGLTF(MODEL_URL);
  return (
    <Float>
      <group>
        <Mesh node={nodes.center as ThreeMesh} mouse={mouse} multiplier={1.2} />
        <Mesh node={nodes.Torus_2 as ThreeMesh} mouse={mouse} multiplier={2} />
        <Mesh node={nodes.topTorus as ThreeMesh} mouse={mouse} multiplier={0} />
        <Mesh node={nodes.bottomTorus as ThreeMesh} mouse={mouse} multiplier={0} />
        <Mesh node={nodes.Torus as ThreeMesh} mouse={mouse} multiplier={2.5} />
      </group>
    </Float>
  );
}

useGLTF.preload(MODEL_URL);

function Mesh({
  node,
  mouse,
  multiplier,
}: {
  node: ThreeMesh;
  mouse: Mouse;
  multiplier: number;
}) {
  const {
    castShadow,
    receiveShadow,
    geometry,
    material,
    position,
    rotation,
    scale,
  } = node;
  const rotationX = useTransform(
    mouse.x,
    [0, 1],
    [rotation.x - multiplier, rotation.x + multiplier]
  );
  const rotationY = useTransform(
    mouse.y,
    [0, 1],
    [rotation.y - multiplier, rotation.y + multiplier]
  );
  return (
    <motion.mesh
      castShadow={castShadow}
      receiveShadow={receiveShadow}
      geometry={geometry}
      material={material}
      position={position}
      rotation={rotation}
      scale={scale}
      rotation-x={rotationX}
      rotation-y={rotationY}
    />
  );
}
