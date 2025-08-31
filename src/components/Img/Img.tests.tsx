import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

test('Img is visible', () => {
  render(<Img src="https://via.placeholder.com/200" alt="Test Image" />);
  expect(screen.getByAltText('Test Image')).toBeVisible();
});

test('Img is gray when disabled', () => {
  render(<Img src="https://via.placeholder.com/200" alt="Test Image" disabled />);
  const img = screen.getByAltText('Test Image');
  expect(img).toHaveStyle('filter: grayscale(80%)');
});
