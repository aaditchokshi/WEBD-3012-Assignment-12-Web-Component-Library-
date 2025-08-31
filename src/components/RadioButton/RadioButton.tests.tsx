import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

test('RadioButton is visible', () => {
  render(<RadioButton label="Test Option" name="group1" value="1" />);
  expect(screen.getByText('Test Option')).toBeVisible();
});

test('RadioButton is disabled', () => {
  render(<RadioButton label="Disabled Option" name="group1" value="2" disabled />);
  const input = screen.getByRole('radio');
  expect(input).toBeDisabled();
});
