import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useTheme } from "next-themes";
import { Float } from "@react-three/drei";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import type { MotionValue } from "framer-motion";
import { Color, type Mesh as ThreeMesh, type MeshStandardMaterial } from "three";

const MODEL_URL = `${import.meta.env.BASE_URL}medias/untitled.glb`;

// Average depth of the "</>" meshes in the model file
const SYMBOL_Z = -150;

const LIGHT_MODE_COLOR = "#45464c";

type Mouse = { x: MotionValue<number>; y: MotionValue<number> };

export default function Model({ mouse, drag }: { mouse: Mouse; drag: Mouse }) {
  const { nodes } = useGLTF(MODEL_URL);
  const { resolvedTheme } = useTheme();

  // The shapes are white, which disappears on the light background:
  // tint them dark in light mode and restore the original color otherwise.
  useEffect(() => {
    Object.values(nodes).forEach((node) => {
      const material = (node as ThreeMesh).material as
        | MeshStandardMaterial
        | undefined;
      if (!material?.color) return;
      material.userData.originalColor ??= material.color.clone();
      material.color.set(
        resolvedTheme === "light"
          ? LIGHT_MODE_COLOR
          : (material.userData.originalColor as Color)
      );
    });
  }, [nodes, resolvedTheme]);

  return (
    <Float>
      {/* The ring halves "(" and ")" stay put while dragging */}
      <Mesh node={nodes.topTorus as ThreeMesh} mouse={mouse} multiplier={0} />
      <Mesh node={nodes.bottomTorus as ThreeMesh} mouse={mouse} multiplier={0} />
      {/* Only the "</>" symbol (chevrons + slash) follows the drag. It sits
          around z = SYMBOL_Z, so rotate around that point, not the origin. */}
      <group position={[0, 0, SYMBOL_Z]}>
        <motion.group rotation-x={drag.x} rotation-y={drag.y}>
          <group position={[0, 0, -SYMBOL_Z]}>
            <Mesh node={nodes.center as ThreeMesh} mouse={mouse} multiplier={1.2} />
            <Mesh node={nodes.Torus_2 as ThreeMesh} mouse={mouse} multiplier={2} />
            <Mesh node={nodes.Torus as ThreeMesh} mouse={mouse} multiplier={2.5} />
          </group>
        </motion.group>
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
