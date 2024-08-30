import React from 'react';
import styled from 'styled-components';

const UIContainer = styled.div`
  width: 300px;
  background-color: #2c3e50;
  padding: 20px;
  color: #ecf0f1;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const ColorPicker = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  cursor: pointer;
`;

const Slider = styled.input`
  width: 100%;
`;

const UI = ({ modelColor, setModelColor, animationSpeed, setAnimationSpeed }) => {
  return (
    <UIContainer>
      <ControlGroup>
        <Label>Skeleton Color</Label>
        <ColorPicker 
          type="color" 
          value={modelColor} 
          onChange={(e) => setModelColor(e.target.value)} 
        />
      </ControlGroup>
      <ControlGroup>
        <Label>Animation Speed: {animationSpeed.toFixed(1)}x</Label>
        <Slider 
          type="range" 
          min="0.1" 
          max="2" 
          step="0.1" 
          value={animationSpeed} 
          onChange={(e) => setAnimationSpeed(Number(e.target.value))}
        />
      </ControlGroup>
    </UIContainer>
  );
};

export default UI;