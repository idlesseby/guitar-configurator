import React, { useRef } from "react";
import { Center, useGLTF, Environment, PresentationControls, AccumulativeShadows, RandomizedLight, Float } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useSnapshot } from 'valtio'
import { states } from '../../data/store'

export default function Viewer(props) {

  return (
      <Canvas
        shadows
        camera={{position: states.cameraPos, fov: 25}}
        eventSource={document.getElementById('root')}
        eventPrefix="client"
        {...props}
      >
        <ambientLight intensity={0.5} />
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" blur={1} />
        <color attach="background" args={['#101010']} />
          <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 8]}>
            <CameraRig>
              <Center>
                <Float floatIntensity={0.05} rotationIntensity={0.75}>
                  <Guitar/>
                </Float>
              </Center>
            </CameraRig>
            <AccumulativeShadows position={[0, -0.315, 0]} frames={100} alphaTest={0.9} scale={10}>
              <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
            </AccumulativeShadows>
          </PresentationControls>
      </Canvas>
  )
}

function Guitar(props) {
  const snap = useSnapshot(states)

  const { nodes, materials } = useGLTF("/lespaul_rough.glb");

  materials.Finish.color = new THREE.Color(snap.selectedFinishColor)
  materials.Knobs.color = new THREE.Color(snap.selectedKnobsColor)
  materials.Ivory.color = new THREE.Color(snap.selectedIvoryColor)
  materials.Plastic.color = new THREE.Color(snap.selectedPlasticColor) 
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
    //group.current.rotation.set(state.pointer.y / 10, -state.pointer.x / 5, 0)
  })

  return <group ref={group}>{children}</group>
}

useGLTF.preload("/lespaul.glb");