export const ColorPicker = ({changeColor}) => {
  return <>
    <mesh 
      rotation-x={-Math.PI * 0.5} 
      position={[-0.095, -0.3999, 0.28]}
      onClick={() => {
        changeColor("#F53F32")
      }}
    >
      <circleGeometry args={[0.05,32]}/>
      <meshStandardMaterial color={0xF53F32}/>
    </mesh>

    <mesh 
      rotation-x={-Math.PI * 0.5} 
      position={[0.095, -0.399, 0.28]}
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
      onClick={() => {
        changeColor("#4A4CF5")
      }}
    >
      <circleGeometry args={[0.05,32]}/>
      <meshStandardMaterial color={0x4A4CF5}/>
    </mesh>

    <mesh 
      rotation-x={-Math.PI * 0.5} 
      position={[0.095, -0.399, 0.465]}
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
      onClick={() => {
        changeColor("#FFDD00")
      }}
    >
      <circleGeometry args={[0.05,32]}/>
      <meshStandardMaterial color={0xFFDD00}/>
    </mesh>

    <mesh 
      rotation-x={-Math.PI * 0.5} 
      position={[0.095, -0.399, 0.65]}
      onClick={() => {
        changeColor("#1D9C2F")
      }}
    >
      <circleGeometry args={[0.05,32]}/>
      <meshStandardMaterial color={0x1D9C2F}/>
    </mesh>
  </>
}
