import React from 'react';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  width: 250px;
  background-color: #2c3e50;
  padding: 20px;
  color: #ecf0f1;
  font-family: 'Arial', sans-serif;
`;

const ControlGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const ColorPicker = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  cursor: pointer;
`;

const SpeedControl = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SpeedButton = styled.button`
  padding: 10px;
  background-color: ${props => props.active ? '#e74c3c' : '#34495e'};
  color: #ecf0f1;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e74c3c;
  }
`;

const Controls = ({ modelColor, setModelColor, animationSpeed, setAnimationSpeed }) => {
  return (
    <ControlsContainer>
      <ControlGroup>
        <Label>Skeleton Color</Label>
        <ColorPicker type="color" value={modelColor} onChange={(e) => setModelColor(e.target.value)} />
      </ControlGroup>
      <ControlGroup>
        <Label>Animation Speed</Label>
        <SpeedControl>
          <SpeedButton active={animationSpeed === 0.5} onClick={() => setAnimationSpeed(0.5)}>Slow</SpeedButton>
          <SpeedButton active={animationSpeed === 1} onClick={() => setAnimationSpeed(1)}>Normal</SpeedButton>
          <SpeedButton active={animationSpeed === 2} onClick={() => setAnimationSpeed(2)}>Fast</SpeedButton>
        </SpeedControl>
      </ControlGroup>
    </ControlsContainer>
  );
};

export default Controls;