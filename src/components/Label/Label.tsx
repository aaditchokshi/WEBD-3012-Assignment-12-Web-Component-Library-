import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.span<{ color?: string; fontSize?: string; disabled?: boolean }>`
  color: ${props => (props.disabled ? '#ccc' : props.color || '#000')};
  font-size: ${props => props.fontSize || '16px'};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
  user-select: none;
`;

const Label: React.FC<LabelProps> = ({ text, color, fontSize, disabled = false }) => {
  return <StyledLabel color={color} fontSize={fontSize} disabled={disabled}>{text}</StyledLabel>;
};

export default Label;
