import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import * as THREE from 'three'

export function TonSkele(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/tonSkele.glb')
  const { actions } = useAnimations(animations, group)
  const [currentAnimation, setCurrentAnimation] = useState(null)

  useEffect(() => {
    console.log('Available animations:', Object.keys(actions))

    // Start all animations but set their weight to 0
    Object.values(actions).forEach(action => {
      action.play()
      action.setEffectiveTimeScale(1)
      action.setEffectiveWeight(0)
    })

    // Cleanup function
    return () => Object.values(actions).forEach(action => action.stop())
  }, [actions])

  useEffect(() => {
    if (currentAnimation && actions[currentAnimation]) {
      // Crossfade with 0.5s
      const from = actions[currentAnimation]
      const to = actions[currentAnimation]
      from.fadeOut(0.5)
      to.reset().fadeIn(0.5).play()

      // Set weight of current animation to 1 and others to 0
      Object.entries(actions).forEach(([name, action]) => {
        if (name === currentAnimation) {
          action.setEffectiveWeight(1)
        } else {
          action.setEffectiveWeight(0)
        }
      })
    }
  }, [currentAnimation, actions])

  const playAnimation = (animationName) => {
    setCurrentAnimation(animationName)
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" position={[0, 2.167, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.052}>
          <group name="skeletonobjcleanermaterialmergergles" />
        </group>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials['Bones___Vray.002']} skeleton={nodes.Object_2.skeleton} />
          <skinnedMesh name="Object_3" geometry={nodes.Object_3.geometry} material={materials['Bones___Vray.002']} skeleton={nodes.Object_3.skeleton} />
          <skinnedMesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['Brown___Vray.002']} skeleton={nodes.Object_4.skeleton} />
          <skinnedMesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials['White___Vray.002']} skeleton={nodes.Object_5.skeleton} />
        </group>
      </group>
      <Html position={[0, 2, 0]}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(0,0,0,0.5)', padding: '10px', borderRadius: '5px' }}>
          {Object.keys(actions).map((animationName) => (
            <button
              key={animationName}
              onClick={() => playAnimation(animationName)}
              style={{
                margin: '5px',
                padding: '5px 10px',
                background: currentAnimation === animationName ? '#4CAF50' : '#008CBA',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              {animationName}
            </button>
          ))}
        </div>
      </Html>
    </group>
  )
}

useGLTF.preload('/tonSkele.glb')