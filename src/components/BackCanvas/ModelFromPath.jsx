import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ModelFromPath = ({ selected }) => {
  useGLTF.preload("/model/xyz_home_work_01_animate.glb");

  const group = useRef(null);

  const { nodes, materials, animations, scene } = useGLTF(
    "/model/xyz_home_work_01_animate.glb"
  );
  const { actions, clips } = useAnimations(animations, scene);

  useEffect(() => {
    scene.position.x = -245.5;
    scene.position.y = 12.5;
    scene.position.z = -28;
    const axis = new THREE.Vector3(0, 0, 1);
    scene.rotateOnWorldAxis(axis, THREE.MathUtils.degToRad(-3));
    // const axis2 = new THREE.Vector3(0, 0, 0);
    // scene.rotateOnWorldAxis(axis2, THREE.MathUtils.degToRad(-1));
    actions["Scene"].play();
  }, []);

  return (
    <group ref={group} key="globeModel">
      <primitive object={scene} />
    </group>
  );
};
export default ModelFromPath;
