import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('Card is visible', () => {
  render(<Card title="Test Card" />);
  expect(screen.getByText('Test Card')).toBeVisible();
});

test('Card background changes when disabled', () => {
  render(<Card title="Test Card" disabled backgroundColor="#fff" />);
  const card = screen.getByText('Test Card').parentElement?.parentElement;
  expect(card).toHaveStyle('background-color: #ccc');
});
