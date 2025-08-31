import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const Select = styled.select<{ disabled?: boolean }>`
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  background-color: ${props => props.disabled ? '#eee' : '#fff'};
  width: 200px;
`;

const Dropdown: React.FC<DropdownProps> = ({ options, selected, disabled = false, onChange }) => {
  return (
    <Select disabled={disabled} value={selected} onChange={(e) => onChange?.(e.target.value)}>
      {options.map((option, idx) => (
        <option key={idx} value={option}>{option}</option>
      ))}
    </Select>
  );
};

export default Dropdown;
