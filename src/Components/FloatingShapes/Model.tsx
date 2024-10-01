import { useGLTF } from "@react-three/drei";
import { Float } from "@react-three/drei";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";

export default function Model({ mouse }: { mouse: any }) {
  const { nodes } = useGLTF("./medias/untitled.glb");
  return (
    <Float>
      <group>
        <Mesh node={nodes.center} mouse={mouse} multiplier={1.2} />
        <Mesh node={nodes.Torus_2} mouse={mouse} multiplier={2} />
        <Mesh node={nodes.topTorus} mouse={mouse} multiplier={0} />
        <Mesh node={nodes.bottomTorus} mouse={mouse} multiplier={0} />
        <Mesh node={nodes.Torus} mouse={mouse} multiplier={2.5} />
      </group>
    </Float>
  );
}

useGLTF.preload("./medias/untitled.glb");

function Mesh({
  node,
  mouse,
  multiplier,
}: {
  node: any;
  mouse: any;
  multiplier: any;
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
