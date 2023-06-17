import React, { useRef } from "react";
import { Center, useGLTF, Environment, AccumulativeShadows, RandomizedLight, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { states } from './store'

export default function App({ position = states.cameraPos, fov = 25 }) {
  return (
    <Canvas
      shadows
      camera={{position, fov}}
      eventSource={document.getElementById('root')}
      eventPrefix="client"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="studio" />
      <CameraRig>
        <Center>
          <Shirt/>
          <Backdrop/>
        </Center>
      </CameraRig>
      <OrbitControls/>
    </Canvas>
  )
}

function Shirt(props) {
  const snap = useSnapshot(states)

  const { nodes, materials } = useGLTF("/lespaul.glb");

  materials.Finish.color = new THREE.Color(snap.selectedColor)

  return (
    <group {...props} dispose={null}>
      <group position={[window.innerWidth * 0.00006, 0, 0]}>
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
  const shadows = useRef()

  useFrame((delta) =>
    easing.dampC(
      shadows.current.getMesh().material.color,
      states.selectedColor,
      0.25,
      delta
    )
  )

  return (
  <AccumulativeShadows
    ref={shadows}
    temporal
    frames={60}
    alphaTest={0.85}
    scale={10}
    rotation={[Math.PI / 2, 0, 0.0]}
    position={[0, 0, -0.05]}
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

function CameraRig({ children }) {
  const group = useRef()

  useFrame((state, delta) => {
    state.camera.position.set(...states.cameraPos)
    console.log(state.camera.position)
    
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, state.pointer.x / 10, 0],
      0.5,
      delta
    )
  })

  return <group ref={group}>{children}</group>
}

useGLTF.preload("/lespaul.glb");