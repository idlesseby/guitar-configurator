import React, { useRef } from "react";
import { Center, useGLTF, Environment, MeshReflectorMaterial, PresentationControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
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
      <color attach="background" args={['#121213']} />
      <fog attach="fog" args={['#121213', 0, 15]} />
      <Environment preset="city" />
      <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 8]}>
        <CameraRig>
          <Center>
            <Shirt/>
          </Center>
        </CameraRig>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-0.32,0]}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>
      </PresentationControls>
    </Canvas>
  )
}

function Shirt(props) {
  const snap = useSnapshot(states)

  const { nodes, materials } = useGLTF("/lespaul.glb");

  materials.Finish.color = new THREE.Color(snap.selectedFinishColor)
  materials.Knobs.color = new THREE.Color(snap.selectedKnobsColor)
  materials.Ivory.color = new THREE.Color(snap.selectedIvoryColor)
  materials.Plastic.color = new THREE.Color(snap.selectedPlasticColor) 
  materials['Fretboard Wood'].color = new THREE.Color(snap.selectedFretboardColor)
  materials['Silver Metal'].color = new THREE.Color(snap.selectedStringsColor)
  materials['Golden Metal'].color = new THREE.Color(snap.selectedMetalColor)

  return (
    <group {...props} dispose={null}>
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

function CameraRig({ children }) {
  const group = useRef()

  useFrame((state) => {
    state.camera.position.set(...states.cameraPos)
    state.camera.lookAt(...states.cameraFocus)
    //console.log(state.camera.position)
  })

  return <group ref={group}>{children}</group>
}

useGLTF.preload("/lespaul.glb");