import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/model/keyboard.gltf");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Big_Buttons}
        />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Chassis} />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Small_Buttons}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/keyboard.gltf");
