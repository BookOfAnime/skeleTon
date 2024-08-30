import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

export default function SkeletonModel() {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/tonSkele.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Set all materials to a red color
    Object.values(materials).forEach(material => {
      material.color = new THREE.Color(0xff0000);
    });

    // Play the first animation, if available
    const animationNames = Object.keys(actions);
    if (animationNames.length > 0) {
      const firstAnimation = actions[animationNames[0]];
      firstAnimation.play();
    }

    // Cleanup function
    return () => {
      Object.values(actions).forEach(action => action.stop());
    };
  }, [materials, actions]);

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh 
            name="Skeleton" 
            geometry={nodes.Object_2.geometry} 
            material={materials['Bones___Vray.002']} 
            skeleton={nodes.Object_2.skeleton} 
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/tonSkele.glb');