import React, { useRef } from "react";
import { Center, useGLTF, Environment, PresentationControls, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useSnapshot } from 'valtio'
import { states } from '../../data/store'
import './Viewer.css'

export default function Viewer({ position = states.cameraPos, fov = 25 }) {
  return (
    <div className="viewer">
      <Canvas
        shadows
        camera={{position, fov}}
        eventSource={document.getElementById('root')}
        eventPrefix="client"
      >
        <spotLight position={[10, 20, 10]} penumbra={1} intensity={0.5} color="#FFBC68" />
        <ambientLight intensity={0.25} />
        <Environment preset="city" />
        <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 8]}>
          <CameraRig>
            <Center>
              <Guitar/>
            </Center>
          </CameraRig>
          <AccumulativeShadows position={[0, -0.325, 0]} frames={100} alphaTest={0.9} scale={10}>
            <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
          </AccumulativeShadows>
        </PresentationControls>
      </Canvas>
    </div>
  )
}

function Guitar(props) {
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
  })

  return <group ref={group}>{children}</group>
}

useGLTF.preload("/lespaul.glb");