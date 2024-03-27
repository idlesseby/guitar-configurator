import React, { useState } from "react";
import { Center, useGLTF, Environment, PresentationControls, Float, OrbitControls, Text } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { GridBox } from "./GridBox";
import { ColorPicker } from "./ColorPicker";

export default function Scene() {
  const [guitarColor, setGuitarColor] = useState('#222')

  return (
    <Canvas
      shadows
      camera={{position: [0, 0, 2.625], fov: 25}}
      eventSource={document.getElementById('root')}
      eventPrefix="client"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <color attach="background" args={['#101010']} />

      <GridBox/>      
      <ColorPicker changeColor={setGuitarColor}/>
      <ModelName/>

      {/* <OrbitControls/> */}
      <PresentationControls speed={1.5} global polar={[-0.1, Math.PI / 8]} cursor={false}>
        <Center>
          <Float floatIntensity={0.05} rotationIntensity={0.75}>
            <Guitar color={guitarColor}/>
          </Float>
        </Center>
      </PresentationControls>
    
    </Canvas>
  )
}

function ModelName() {
  return (
    <Text position={[0,-0.015, -1.09]} scale={0.5} anchorX="center" anchorY="middle">LESPAUL</Text>
  )
}

function Guitar({color}) {
  const { nodes, materials } = useGLTF("/models/lespaul_rough.glb");

  materials.Finish.color = new THREE.Color(color)

  return (
    <group dispose={null} scale={1.25}>
      <group>
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

useGLTF.preload("/models/lespaul.glb");