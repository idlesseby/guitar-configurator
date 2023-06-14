import React, { useRef } from "react";
import { OrbitControls, Center, useGLTF, Environment, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


export default function App({ position = [-1, 0, 2.5], fov = 25 }) {
  return (
    <Canvas
      shadows
      camera={{position, fov}}
      eventSource={document.getElementById('root')}
      eventPrefix="client"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <Center>
        <Shirt/>
        <Backdrop/>
      </Center>
      <OrbitControls/>
    </Canvas>
  )
}

function Shirt(props) {

  const { nodes, materials } = useGLTF("/lespaul.glb");

  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.05, -0.07]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Generic_Les_Paul_Mesh.geometry}
          material={materials.Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Generic_Les_Paul_Mesh_1.geometry}
          material={materials["Golden Metal"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Generic_Les_Paul_Mesh_2.geometry}
          material={materials["Fretboard Wood"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Generic_Les_Paul_Mesh_3.geometry}
          material={materials.Ivory}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Generic_Les_Paul_Mesh_4.geometry}
          material={materials.Finish}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Generic_Les_Paul_Mesh_5.geometry}
          material={materials["Silver Metal"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Generic_Les_Paul_Mesh_6.geometry}
          material={materials.Knobs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Generic_Les_Paul_Mesh_7.geometry}
          material={materials["Pickup Wrap Fabric"]}
        />
      </group>
    </group>
  )
}

function Backdrop() {
  return (
  <AccumulativeShadows
    temporal
    frames={60}
    alphaTest={0.85}
    scale={10}
    rotation={[Math.PI / 2, 0, 0]}
    position={[0, 0, -0.14]}
  >
    <RandomizedLight
      amount={4}
      radius={9}
      intensity={0.55}
      ambient={0.25}
      position={[5, 5, -10]}
    />
    <RandomizedLight
      amount={4}
      radius={5}
      intensity={0.25}
      ambient={0.55}
      position={[-5, 5, -9]}
    />
  </AccumulativeShadows>
  )
}

useGLTF.preload("/lespaul.glb");