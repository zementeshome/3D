import React, { useRef } from 'react';
import './App.scss';
import { Canvas, useFrame } from 'react-three-fiber';
// import { Box } from "drei";

const SpinningMesh = ({position}) => {
  const mesh = useRef(null)
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh position={position} ref={mesh}>
          {/* <circleBufferGeometry attach='geometry' args={[2,200]} /> */}
          <boxBufferGeometry attach='geometry' args={[1,1,1]}/>
          <meshStandardMaterial attach='material' color='pink'/>
        </mesh>
  )
}

function App() {
  return (
    <div className="app">
      <Canvas colorManagement camera={{position: [-5, 2, 10], fov: 60}}>
        <ambientLight intensity={0.3} />
        <SpinningMesh position={[0, 1, 0]}/>
        <SpinningMesh position={[-2, 1, -5]}/>
        <SpinningMesh position={[5, 1, -2]}/>
        {/* <Box>
          <meshStandardMaterial attach='material'/>
        </Box> */}
      </Canvas>
    </div>
  );
}

export default App;
