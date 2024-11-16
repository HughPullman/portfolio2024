import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { useThree } from "@react-three/fiber";

export default function Model(props) {
  const { camera } = useThree();

  //use gsap on mouse move to move camera position to face mouse

  const updateCamera = () => {
    gsap.to(camera.position, {
      x: () => 2,
      y: () => 2,
      z: () => 4,
    });

    gsap.to(camera.rotation, {
      x: () => -0.463,
      y: () => 0.2,
      z: () => 0.2,
    });
  };

  useEffect(() => {
    updateCamera();
  }, []);

  const { nodes, materials } = useGLTF("/model/macbook.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["Aluminum_-_Anodized_Glossy_Grey"]}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["Aluminum_-_Anodized_Glossy_Grey_keyboard.jpg"]}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Glass_-_Heavy_Color"]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["Plastic_-_Translucent_Matte_Gray"]}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.Acrylic_Clear}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials["Bronze_-_Polished"]}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["Rubber_-_Soft"]}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials["Steel_-_Satin"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/model/macbook.gltf");
