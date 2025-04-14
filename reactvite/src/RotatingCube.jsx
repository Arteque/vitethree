import { Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RotatingCube = () => {

  const meshRef = useRef();


  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.005;
    }
  });
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1,1,1]} />
      <meshLambertMaterial color="#468585" emissive="#468585" />
      <Sparkles  count={10} scale={2} speed={0.002}  size={6} noise={0.3} color="orange" />
    </mesh>
  );
};

export default RotatingCube