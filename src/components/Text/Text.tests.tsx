import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('Text renders correctly', () => {
  render(<Text value="Hello World" />);
  // Use getByDisplayValue for input elements
  expect(screen.getByDisplayValue('Hello World')).toBeVisible();
});

test('Text is disabled', () => {
  render(<Text value="Disabled Text" disabled />);
  const input = screen.getByDisplayValue('Disabled Text');
  expect(input).toHaveStyle('color: #ccc');
  expect(input).toHaveStyle('cursor: not-allowed');
  expect(input).toBeDisabled(); // verifies the input is actually disabled
});
