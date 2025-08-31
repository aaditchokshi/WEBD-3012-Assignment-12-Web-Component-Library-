import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledInput = styled.input<{ disabled?: boolean; color?: string; fontSize?: string }>`
  color: ${props => (props.disabled ? '#ccc' : props.color || '#000')};
  font-size: ${props => props.fontSize || '1rem'};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'text')};
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Text: React.FC<TextProps> = ({ placeholder = '', value, onChange, disabled = false, color, fontSize }) => {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      color={color}
      fontSize={fontSize}
    />
  );
};

export default Text;
