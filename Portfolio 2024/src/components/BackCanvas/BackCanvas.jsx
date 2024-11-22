import "./BackCanvas.scss";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ModelFromPath from "./ModelFromPath";

const BackCanvas = () => {
  const handleMouseOver = () => {};

  return (
    <Canvas
      className="backCanvas"
      gl={{ antialias: true }}
      dpr={[1, 2]}
      onMouseOver={handleMouseOver}
    >
      <directionalLight position={[5, 10, 5]} intensity={4} />
      {/* <ambientLight intensity={1} /> */}
      <Suspense fallback={null}>
        <mesh>
          <ModelFromPath />
        </mesh>
      </Suspense>
    </Canvas>
  );
};
export default BackCanvas;
