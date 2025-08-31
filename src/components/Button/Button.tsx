import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ bgColor: string; disabled?: boolean }>`
  background-color: ${props => props.disabled ? '#ccc' : props.bgColor};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  &:hover {
    opacity: ${props => props.disabled ? 1 : 0.8};
  }
`;

const Button: React.FC<ButtonProps> = ({
  text = "Click me",
  disabled = false,
  backgroundColor = "blue",
  onClick
}) => {
  return (
    <StyledButton
      bgColor={backgroundColor}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
