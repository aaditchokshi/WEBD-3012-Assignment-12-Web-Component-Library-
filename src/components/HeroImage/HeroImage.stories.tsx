import type { Meta, StoryObj } from '@storybook/react-webpack5';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    image: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    overlayColor: { control: 'color' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof HeroImage>;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    image: 'https://via.placeholder.com/1200x400',
    title: 'Hero Title',
    subtitle: 'Hero subtitle goes here',
    overlayColor: 'rgba(0,0,0,0.5)',
    height: '400px',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    image: 'https://via.placeholder.com/1200x400',
    title: 'Disabled Hero',
    subtitle: 'This hero is disabled',
    overlayColor: 'rgba(0,0,0,0.5)',
    height: '400px',
    disabled: true,
  },
};
