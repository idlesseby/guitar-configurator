
import * as THREE from 'three'
import { useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";

export function GridBox() {
  const diffuse = useTexture("textures/grid-texture.png");

  diffuse.wrapS = RepeatWrapping;
  diffuse.wrapT = RepeatWrapping;
  diffuse.anisotropy = 4;
  diffuse.repeat.set(16, 16);
  diffuse.offset.set(0, 0);

  const gridMaterial = new THREE.MeshBasicMaterial({
    color: [1, 1, 1],
    opacity: 1,
    map: diffuse,
    alphaMap: diffuse,
    transparent: true,
  })

  return <>
    <mesh rotation-x={-Math.PI * 0.5} position={[0, -0.325, 0]} material={gridMaterial}>
      <planeGeometry args={[3, 3]} />
    </mesh>

    <mesh position={[0, 0.675, -1]} material={gridMaterial}>
      <planeGeometry args={[3, 2]} />
    </mesh>
  </>
}