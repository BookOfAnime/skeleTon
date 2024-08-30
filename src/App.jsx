import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import styled, { createGlobalStyle, css } from 'styled-components';
import SkeletonModel from './SkeletonModel';
import Cemetery from './Cemetery';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Arial', sans-serif;
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

const glowStyles = css`
  color: #ff0000;
  text-shadow: 
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #ff0000,
    0 0 82px #ff0000,
    0 0 92px #ff0000,
    0 0 102px #ff0000,
    0 0 151px #ff0000;
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Arial Black', sans-serif;
  font-size: 10vw;
  ${glowStyles}
  text-transform: uppercase;
  z-index: 10;
  text-align: center;
  width: 90%;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 64px;
  }
`;

const Navbar = styled.nav`
  position: fixed;
  bottom: 20px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

const BoneButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin: 0 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const BoneIcon = styled.svg`
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
  fill: #ffffff;
`;

const ButtonText = styled.span`
  color: #ffffff;
  font-family: 'Arial Black', sans-serif;
  font-size: 14px;
  text-align: center;
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
          <BoneButton href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <BoneIcon viewBox="0 0 24 24">
              <path d="M8 3a1 1 0 0 1 1 1v3.279l1.172 1.172a1 1 0 0 1 0 1.414L9 11.038V19a1 1 0 1 1-2 0v-7.962l-1.172-1.173a1 1 0 0 1 0-1.414L7 7.279V4a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v3.279l1.172 1.172a1 1 0 0 1 0 1.414L17 11.038V19a1 1 0 1 1-2 0v-7.962l-1.172-1.173a1 1 0 0 1 0-1.414L15 7.279V4a1 1 0 0 1 1-1z"/>
            </BoneIcon>
            <ButtonText>Twitter</ButtonText>
          </BoneButton>
          <BoneButton href="#" target="_blank" rel="noopener noreferrer">
            <BoneIcon viewBox="0 0 24 24">
              <path d="M8 3a1 1 0 0 1 1 1v3.279l1.172 1.172a1 1 0 0 1 0 1.414L9 11.038V19a1 1 0 1 1-2 0v-7.962l-1.172-1.173a1 1 0 0 1 0-1.414L7 7.279V4a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v3.279l1.172 1.172a1 1 0 0 1 0 1.414L17 11.038V19a1 1 0 1 1-2 0v-7.962l-1.172-1.173a1 1 0 0 1 0-1.414L15 7.279V4a1 1 0 0 1 1-1z"/>
            </BoneIcon>
            <ButtonText>PumpFun</ButtonText>
          </BoneButton>
          <BoneButton href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <BoneIcon viewBox="0 0 24 24">
              <path d="M8 3a1 1 0 0 1 1 1v3.279l1.172 1.172a1 1 0 0 1 0 1.414L9 11.038V19a1 1 0 1 1-2 0v-7.962l-1.172-1.173a1 1 0 0 1 0-1.414L7 7.279V4a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v3.279l1.172 1.172a1 1 0 0 1 0 1.414L17 11.038V19a1 1 0 1 1-2 0v-7.962l-1.172-1.173a1 1 0 0 1 0-1.414L15 7.279V4a1 1 0 0 1 1-1z"/>
            </BoneIcon>
            <ButtonText>Telegram</ButtonText>
          </BoneButton>
        </Navbar>
        <Title>Skeletron</Title>
      </AppContainer>
    </>
  );
}

export default App;