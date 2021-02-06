import './App.scss';
import { Canvas } from 'react-three-fiber';

function App() {
  return (
    <div className="App">
      <Canvas>
        <mesh>
          <boxBufferGeometry attach='geometry' args={[1,1,1]}/>
          <meshStandardMaterial attach='material' />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
