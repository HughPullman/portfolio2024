import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "./BackCanvas.scss";
import KeyBoard from "../Keyboard/Keyboard";
import { Suspense } from "react";

const BackCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{
        fov: 45,
        position: [-3, 5, 3],
      }}
      className="backCanvas"
    >
      <ambientLight />
      <Suspense fallback={null}>
        <OrbitControls />
        <KeyBoard />
      </Suspense>
    </Canvas>
  );
};
export default BackCanvas;
