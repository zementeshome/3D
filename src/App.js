import React, { useRef } from 'react';
import './App.scss';
import { Canvas, useFrame } from 'react-three-fiber';
// import { Box } from "drei";

const Box = () => {
  const mesh = useRef(null)
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh ref={mesh}>
          {/* <circleBufferGeometry attach='geometry' args={[2,200]} /> */}
          <boxBufferGeometry attach='geometry' args={[1,1,1]}/>
          <meshStandardMaterial attach='material' />
        </mesh>
  )
}

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1>  */}
      <Canvas>
        <Box />
        {/* <Box>
          <meshStandardMaterial attach='material'/>
        </Box> */}
      </Canvas>
    </div>
  );
}

export default App;
