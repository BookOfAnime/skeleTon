import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Sk(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/sk.glb');

  const { animations} = useGLTF('/animations.glb')
  const { actions, mixer } = useAnimations(animations, group);
  const [animation, setAnimation] = useState(
    animations.find((a) => a.name === "Idle") ? "Idle" : animations[0].name // Check if Idle animation exists otherwise use first animation
  );
  useEffect(() => {
    actions[animation]
      .reset()
      .fadeIn(mixer.stats.actions.inUse === 0 ? 0 : 0.5)
      .play();
    return () => actions[animation].fadeOut(0.5);
  }, [animation]);
    

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.938, -0.563, -3.412]}>
          {/* Meshes */}
          <mesh geometry={nodes.Object_3.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_14.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_16.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_18.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_19.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_20.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_21.geometry} material={materials.material_0} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/sk.glb');