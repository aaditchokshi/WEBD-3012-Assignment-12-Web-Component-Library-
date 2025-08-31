import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const RadioWrapper = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  color: ${props => (props.disabled ? '#ccc' : '#000')};
`;

const Input = styled.input`
  margin-right: 8px;
  cursor: inherit;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
}) => {
  return (
    <RadioWrapper disabled={disabled}>
      <Input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange?.(value)}
      />
      {label}
    </RadioWrapper>
  );
};

export default RadioButton;
