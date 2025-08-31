import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

test('Dropdown is visible', () => {
  render(<Dropdown options={['A','B','C']} />);
  expect(screen.getByRole('combobox')).toBeVisible();
});

test('Dropdown background changes when disabled', () => {
  render(<Dropdown options={['A','B','C']} disabled />);
  const dropdown = screen.getByRole('combobox');
  expect(dropdown).toHaveStyle('background-color: #eee');
});
