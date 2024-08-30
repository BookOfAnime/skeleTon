import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import styled, { keyframes } from 'styled-components';
import SkeletonModel from './SkeletonModel';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: calc(100% - 60px); // Adjust for navbar height
`;

const glowAnimation = keyframes`
  0% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de; }
  100% { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de; }
`;

const Title = styled.h1`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Arial Black', sans-serif;
  font-size: 48px;
  color: #fff;
  text-transform: uppercase;
  animation: ${glowAnimation} 2s ease-in-out infinite alternate;
  z-index: 10;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #333;
  height: 60px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-family: Arial, sans-serif;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

function App() {
  return (
    <AppContainer>
      <Navbar>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Navbar>
      <CanvasContainer>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 5, 10]} fov={50} />
          <OrbitControls target={[0, 1, 0]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <SkeletonModel />
          </Suspense>
        </Canvas>
      </CanvasContainer>
      <Title>Skeletron</Title>
    </AppContainer>
  );
}

export default App;