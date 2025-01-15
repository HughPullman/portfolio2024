/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Macbook from "../Macbook/Macbook";
import "./CanvasMac.scss";

const CanvasMac = () => {
  return (
    <div className="canvasMac" role="canvasMac">
      <Canvas
        orthographic
        camera={{
          position: [20, 20, 30],
          left: -2,
          right: 2,
          top: 2,
          bottom: -2,
          zoom: 0.75,
        }}
      >
        <OrbitControls />
        <directionalLight position={[4, 2, 2]} intensity={25} />
        <Suspense fallback={null}>
          <Macbook />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasMac;
