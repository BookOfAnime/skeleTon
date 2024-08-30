import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Cemetery(props) {
  const { nodes, materials } = useGLTF('/cemetery.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cementary_mesh.geometry} material={materials.Cementary_mat1} />
    </group>
  )
}

useGLTF.preload('/cemetery.glb')

export default Cemetery;