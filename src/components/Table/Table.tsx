import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  filter: ${props => (props.disabled ? 'grayscale(80%)' : 'none')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
`;

const StyledThead = styled.thead`
  background-color: #f0f0f0;
`;

const StyledTr = styled.tr<{ disabled?: boolean }>`
  background-color: #fff;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const StyledTh = styled.th`
  padding: 8px 12px;
  border: 1px solid #ddd;
`;

const StyledTd = styled.td`
  padding: 8px 12px;
  border: 1px solid #ddd;
`;

const StyledTfoot = styled.tfoot`
  background-color: #f0f0f0;
`;

// Updated Table component
export const Table: React.FC<TableProps> = ({ headers, rows, disabled = false }) => (
  <StyledTable disabled={disabled}>
    <StyledThead>
      <StyledTr>
        {headers.map((header, idx) => (
          <StyledTh key={idx}>{header}</StyledTh>
        ))}
      </StyledTr>
    </StyledThead>
    <tbody>
      {rows.map((row, rowIdx) => (
        <StyledTr key={rowIdx} disabled={disabled}>
          {row.map((cell, cellIdx) => (
            <StyledTd key={cellIdx}>{cell}</StyledTd>
          ))}
        </StyledTr>
      ))}
    </tbody>
    <StyledTfoot>
      <StyledTr>
        <StyledTd colSpan={headers.length}>Footer</StyledTd>
      </StyledTr>
    </StyledTfoot>
  </StyledTable>
);

export default Table;
