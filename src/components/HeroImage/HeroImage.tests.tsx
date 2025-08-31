import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

test('HeroImage is visible', () => {
  render(<HeroImage image="https://via.placeholder.com/1200x400" title="Test Hero" />);
  expect(screen.getByText('Test Hero')).toBeVisible();
});

test('HeroImage is gray when disabled', () => {
  render(<HeroImage image="https://via.placeholder.com/1200x400" title="Test Hero" disabled />);
  const hero = screen.getByText('Test Hero').parentElement?.parentElement;
  expect(hero).toHaveStyle('filter: grayscale(80%)');
});
