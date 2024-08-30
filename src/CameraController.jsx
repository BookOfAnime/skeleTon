import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CameraController({ targetRef, focusPart = 'head' }) {
  const cameraRef = useRef();

  useFrame((state) => {
    if (targetRef.current) {
      const targetPosition = new THREE.Vector3().setFromMatrixPosition(targetRef.current.matrixWorld);

      let focusOffset = new THREE.Vector3(0, 1.5, 0); // Focus on the head by default
      if (focusPart === 'body') {
        focusOffset = new THREE.Vector3(0, 0.5, 0); // Focus on the body
      }

      const focusPosition = targetPosition.clone().add(focusOffset);

      state.camera.position.set(0, 1.5, 5); // Keep camera position fixed
      state.camera.lookAt(focusPosition);
    }
  });

  return <group ref={cameraRef} />;
}

export default CameraController;
