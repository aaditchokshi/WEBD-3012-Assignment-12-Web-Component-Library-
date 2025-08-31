import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';

test('Table renders correctly', () => {
  render(
    <Table
      headers={['H1', 'H2']}
      rows={[
        ['R1C1', 'R1C2'],
        ['R2C1', 'R2C2'],
      ]}
    />
  );

  expect(screen.getByText('H1')).toBeVisible();
  expect(screen.getByText('R1C1')).toBeVisible();
  expect(screen.getByText('R2C2')).toBeVisible();
});

test('Table is gray when disabled', () => {
  render(
    <Table
      headers={['H1', 'H2']}
      rows={[
        ['R1C1', 'R1C2']
      ]}
      disabled
    />
  );

  const table = screen.getByRole('table');
  expect(table).toHaveStyle('filter: grayscale(80%)');
});
