import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

import { OrbitControls } from "@react-three/drei";

function RotatingCube() {
  const meshRef = useRef();

  // This function runs on every frame (like "animate" in Three.js),
  // giving you the time delta since last frame, etc.
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* A simple cube geometry */}
      <boxGeometry args={[1, 1, 1]} />
      {/* MeshStandardMaterial reacts to lights */}
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      {/* Add a light so our StandardMaterial can show up */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Our rotating cube component */}
      <RotatingCube />

      {/* Optional: OrbitControls let you pan/zoom with mouse/touch */}
      <OrbitControls />
    </Canvas>
  );
}
