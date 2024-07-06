import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Environment } from "@react-three/drei";
import { TonSkele } from "./TonSkele";

function App() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }} camera={{ position: [0, 2, 5], fov: 50 }}>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <TonSkele scale={0.4} position={[0, -1, 0]} />
        </Stage>
        <Environment preset="city" />
      </Suspense>
      <OrbitControls target={[0, 0.5, 0]} autoRotate />
    </Canvas>
  );
}

export default App;