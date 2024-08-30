import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function CemeteryModel() {
  const group = useRef();
  const { nodes, materials } = useGLTF('/cemetery.glb');

  return (
    <group ref={group} dispose={null} position={[0, 0, 0]} scale={[1, 1, 1]}>
      <primitive object={nodes.Scene} />
    </group>
  );
}

useGLTF.preload('/cemetery.glb');