import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import RotatingCube from "./RotatingCube";

const App = () => {
  return (
    <>
      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <OrbitControls enableZoom enablePan enableRotate />
        <directionalLight
          position={[1, 1, 1]}
          intensity={10}
          color={0x9cdba6}
        />
        <color attach="background" args={["#F0F0F0"]} />
        <RotatingCube />
      </Canvas>
    </>
  );
};
export default App;
