import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    image: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'Card description here.',
    image: 'https://via.placeholder.com/300x180',
    backgroundColor: '#fff',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    description: 'This card is disabled.',
    image: 'https://via.placeholder.com/300x180',
    backgroundColor: '#eee',
    disabled: true,
  },
};
