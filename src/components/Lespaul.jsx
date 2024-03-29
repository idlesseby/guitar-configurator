/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 lespaul.glb --transform -M 
Files: lespaul.glb [7.43MB] > /Users/sebastianmoedritzer/Desktop/lespaul-transformed.glb [349.62KB] (95%)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Lespaul({color}) {
  const { nodes, materials } = useGLTF('/models/lespaul-transformed.glb')

  return (
    <group dispose={null}>
      <group position={[0, 0.134, 0]} scale={1.25}>
        <mesh geometry={nodes.Generic_Les_Paul_Mesh.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Generic_Les_Paul_Mesh_1.geometry} material={materials['Golden Metal']} />
        <mesh geometry={nodes.Generic_Les_Paul_Mesh_2.geometry} material={materials['Fretboard Wood']} />
        <mesh geometry={nodes.Generic_Les_Paul_Mesh_3.geometry} material={materials.Ivory} />
        <mesh geometry={nodes.Generic_Les_Paul_Mesh_4.geometry} material={materials.Finish} material-color={color}/>
        <mesh geometry={nodes.Generic_Les_Paul_Mesh_5.geometry} material={materials['Silver Metal']} />
        <mesh geometry={nodes.Generic_Les_Paul_Mesh_6.geometry} material={materials.Knobs} />
        <mesh geometry={nodes.Generic_Les_Paul_Mesh_7.geometry} material={materials['Pickup Wrap Fabric']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/lespaul-transformed.glb')
