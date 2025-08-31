// src/components/Table/Table.types.ts
export interface TableProps {
  headers: string[];
  rows: string[][];
  disabled?: boolean;
}

export interface TableHeaderProps {
  children: React.ReactNode;
}

export interface TableRowProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export interface TableCellProps {
  children: React.ReactNode;
}

export interface TableFooterProps {
  children: React.ReactNode;
}
