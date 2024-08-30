import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations, useFBX } from '@react-three/drei';
import * as THREE from 'three';

export function TonSkele(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/tonSkele.glb');
  
  // Load animations using useFBX (replace with correct paths to your animations)
  const { animations: idleAnimation } = useFBX('/animations/Idle.fbx');
  const { animations: walkAnimation } = useFBX('/animations/Walk.fbx');
  const { animations: jumpAnimation } = useFBX('/animations/Jump.fbx');
  
  // Rename animations for clarity
  idleAnimation[0].name = 'Idle';
  walkAnimation[0].name = 'Walk';
  jumpAnimation[0].name = 'Jump';

  const { actions } = useAnimations([idleAnimation[0], walkAnimation[0], jumpAnimation[0]], group);

  useEffect(() => {
    // Start the idle animation by default
    actions['Idle'].reset().fadeIn(0.5).play();

    return () => {
      actions['Idle'].fadeOut(0.5);
    };
  }, [actions]);

  useFrame((state) => {
    const head = group.current.getObjectByName('Head');
    const body = group.current.getObjectByName('Body');

    if (props.focusPart === 'head' && head) {
      head.lookAt(state.camera.position);
    } else if (props.focusPart === 'body' && body) {
      body.lookAt(state.camera.position);
    }
  });

  return (
    <group {...props} ref={group} dispose={null}>
      <group name="Skeleton">
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Skeleton_Body.geometry}
          material={materials.Skeleton_Body}
          skeleton={nodes.Skeleton_Body.skeleton}
        />
        <skinnedMesh
          name="Head"
          geometry={nodes.Skeleton_Head.geometry}
          material={materials.Skeleton_Head}
          skeleton={nodes.Skeleton_Head.skeleton}
        />
        <skinnedMesh
          name="Body"
          geometry={nodes.Skeleton_Torso.geometry}
          material={materials.Skeleton_Torso}
          skeleton={nodes.Skeleton_Torso.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/tonSkele.glb');
