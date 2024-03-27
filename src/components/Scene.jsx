import React, { useState } from "react";
import { Center, useGLTF, Environment, PresentationControls, Float, OrbitControls, Text } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { GridBox } from "./GridBox";
import { ColorPicker } from "./ColorPicker";
import { Lespaul } from "./Lespaul";

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

      <PresentationControls speed={1.5} global polar={[-0.1, Math.PI / 8]} cursor={false}>
        <Center>
          <Float floatIntensity={0.05} rotationIntensity={0.75}>
            <Lespaul color={guitarColor}/>
          </Float>
        </Center>
      </PresentationControls>
    </Canvas>
  )
}

function ModelName() {
  const { viewport } = useThree()

  viewport.width < 0.55

  return (
    viewport.width < 0.55 ? 
      <group>
        <Text position={[0,0.23, -1.09]} scale={0.3} anchorX="center" anchorY="middle">LES</Text>
        <Text position={[0,-0.02, -1.09]} scale={0.3} anchorX="center" anchorY="middle">PAUL</Text>
      </group> :
      <Text position={[0,0.1775, -1.09]} scale={0.5} anchorX="center" anchorY="middle">LESPAUL</Text>
  )
}
