/* eslint-disable react/no-unknown-property */
import "./BackCanvas.scss";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import ModelFromPath from "./ModelFromPath";
import { useEffect } from "react";

const BackCanvas = ({ selected }) => {
  const [translate, setTranslate] = useState("");

  useEffect(() => {
    if (selected === "1") {
      setTranslate("translate(0%, 0%)");
    } else if (selected === "2") {
      setTranslate("translate(255%, -85%)");
    } else if (selected === "3") {
      setTranslate("translate(0%, -85%)");
    } else {
      setTranslate("translate(260%, -5%)");
    }
  }, [selected]);

  return (
    <div
      className="container"
      style={{
        transform: translate,
      }}
    >
      <Canvas className="backCanvas" gl={{ antialias: true }} dpr={[1, 2]}>
        <directionalLight position={[5, 10, 5]} intensity={4} />
        {/* <ambientLight intensity={1} /> */}
        <Suspense fallback={null}>
          <mesh>
            <ModelFromPath selected={selected} />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
};
export default BackCanvas;
