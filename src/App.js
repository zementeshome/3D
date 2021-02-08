import React, { useRef } from 'react';
import './App.scss';
import { Canvas, useFrame } from 'react-three-fiber';
// import { Box } from "drei";

const SpinningMesh = ({position, args, color}) => {
  const mesh = useRef(null)
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh castShadow position={position} ref={mesh}>
          {/* <circleBufferGeometry attach='geometry' args={[2,200]} /> */}
          <boxBufferGeometry attach='geometry' args={args}/>
          <meshStandardMaterial attach='material' color={color}/>
        </mesh>
  )
}

function App() {
  return (
    <div className="app">
      <Canvas shadowMap colorManagement camera={{position: [-5, 2, 10], fov: 60}}>
        <ambientLight intensity={0.3}/>
        <directionalLight 
        castShadow
        position={[0, 10, 0]} 
        intensity={1.5} 
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}/>
        <pointLight position={[-10, 0, -2]} intensity={0.5}/>
        <pointLight position={[0, -10, 0]} intensity={1.5}/>

        <group>
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]}/>
            <shadowMaterial attach='material' opacity={0.3}/>
            {/* <meshStandardMaterial attach='material' color={'yellow'}/> */}
          </mesh>
        </group>

        <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color='lightblue'/>
        <SpinningMesh position={[-2, 1, -5]} color="pink"/>
        <SpinningMesh position={[5, 1, -2]}  color="pink"/>
        {/* <Box>
          <meshStandardMaterial attach='material'/>
        </Box> */}
      </Canvas>
    </div>
  );
}

export default App;
