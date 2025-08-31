import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button is visible', () => {
  render(<Button text="Test" />);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Button background changes when disabled', () => {
  render(<Button text="Test" disabled backgroundColor="blue" />);
  const button = screen.getByText('Test');
  expect(button).toHaveStyle('background-color: #ccc');
});
