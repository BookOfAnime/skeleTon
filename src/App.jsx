import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import SkeletonModel from './SkeletonModel';
import Cemetery from './Cemetery';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const glowAnimation = keyframes`
  0% { text-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000, 0 0 20px #ff0000, 0 0 35px #ff0000, 0 0 40px #ff0000, 0 0 50px #ff0000, 0 0 75px #ff0000; }
  100% { text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 70px #ff0000, 0 0 80px #ff0000, 0 0 100px #ff0000, 0 0 150px #ff0000; }
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Arial Black', sans-serif;
  font-size: 10vw; // Responsive font size
  color: #ff0000;
  text-transform: uppercase;
  animation: ${glowAnimation} 2s ease-in-out infinite alternate;
  z-index: 10;
  -webkit-text-stroke: 2px white;
  text-stroke: 2px white;
  text-align: center;
  width: 90%; // Prevent text from overflowing on small screens

  @media (min-width: 768px) {
    font-size: 64px; // Larger font size for desktop
  }
`;

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column; // Stack buttons vertically on mobile
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  z-index: 20;

  @media (min-width: 768px) {
    flex-direction: row; // Horizontal layout on desktop
    justify-content: space-around;
    padding: 20px 0;
  }
`;

const BoneButton = styled.a`
  color: white;
  text-decoration: none;
  font-family: Arial, sans-serif;
  font-size: 16px;
  padding: 8px 16px;
  background-color: rgba(68, 68, 68, 0.7);
  border: 2px solid #666;
  border-radius: 30px;
  position: relative;
  transition: all 0.3s ease;
  margin: 5px 0; // Add vertical margin for stacked buttons

  &:before, &:after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: rgba(68, 68, 68, 0.7);
    border: 2px solid #666;
    border-radius: 50%;
  }

  &:before {
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:after {
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    background-color: rgba(85, 85, 85, 0.7);
    &:before, &:after {
      background-color: rgba(85, 85, 85, 0.7);
    }
  }

  @media (min-width: 768px) {
    font-size: 18px;
    padding: 10px 20px;
    margin: 0; // Remove vertical margin on desktop

    &:before, &:after {
      width: 20px;
      height: 20px;
    }

    &:before {
      left: -10px;
    }

    &:after {
      right: -10px;
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <CanvasContainer>
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 5, 10]} fov={50} />
            <OrbitControls target={[0, 1, 0]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <SkeletonModel />
              <Cemetery />
            </Suspense>
          </Canvas>
        </CanvasContainer>
        <Navbar>
          <BoneButton href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</BoneButton>
          <BoneButton href="https://sunpump.meme/home" target="_blank" rel="noopener noreferrer">PumpFun</BoneButton>
          <BoneButton href="https://telegram.org" target="_blank" rel="noopener noreferrer">Telegram</BoneButton>
        </Navbar>
        <Title>Skeletron</Title>
      </AppContainer>
    </>
  );
}

export default App;