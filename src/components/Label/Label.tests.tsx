import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('Label is visible', () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText('Test Label')).toBeVisible();
});

test('Label color changes when disabled', () => {
  render(<Label text="Test Label" disabled />);
  const label = screen.getByText('Test Label');
  expect(label).toHaveStyle('color: #ccc');
});
