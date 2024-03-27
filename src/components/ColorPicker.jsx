import { useEffect, useState } from "react"

export const ColorPicker = ({changeColor}) => {
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return <>
    <mesh 
      rotation-x={-Math.PI * 0.5} 
      position={[-0.095, -0.3999, 0.28]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        changeColor("#F53F32")
      }}
    >
      <circleGeometry args={[0.05,32]}/>
      <meshStandardMaterial color={0xF53F32} />
    </mesh>

    <mesh 
      rotation-x={-Math.PI * 0.5} 
      position={[0.095, -0.3999, 0.28]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        changeColor("#222")
      }}
    >
      <circleGeometry args={[0.05,32]}/>
      <meshStandardMaterial color={0x222222}/>
    </mesh>

    <mesh 
      rotation-x={-Math.PI * 0.5} 
      position={[-0.095, -0.3999, 0.465]} 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        changeColor("#4A4CF5")
      }}
    >
      <circleGeometry args={[0.05,32]}/>
      <meshStandardMaterial color={0x4A4CF5}/>
    </mesh>

    <mesh 
      rotation-x={-Math.PI * 0.5} 
      position={[0.095, -0.3999, 0.465]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        changeColor("#DE3AD3")
      }}
    >
      <circleGeometry args={[0.05,32]}/>
      <meshStandardMaterial color={0xDE3AD3}/>
    </mesh>

    <mesh 
      rotation-x={-Math.PI * 0.5} 
      position={[-0.095, -0.3999, 0.65]} 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        changeColor("#FFDD00")
      }}
    >
      <circleGeometry args={[0.05,32]}/>
      <meshStandardMaterial color={0xFFDD00}/>
    </mesh>

    <mesh 
      rotation-x={-Math.PI * 0.5} 
      position={[0.095, -0.3999, 0.65]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        changeColor("#1D9C2F")
      }}
    >
      <circleGeometry args={[0.05,32]}/>
      <meshStandardMaterial color={0x1D9C2F}/>
    </mesh>
  </>
}
