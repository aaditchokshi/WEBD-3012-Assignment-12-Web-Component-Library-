import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Button>;

// Define the type for your stories
type Story = StoryObj<typeof Button>;

// Default button story
export const Default: Story = {
  args: {
    text: 'Click Me',
    backgroundColor: 'blue',
    disabled: false,
  },
};

// Disabled button story
export const Disabled: Story = {
  args: {
    text: 'Disabled',
    backgroundColor: 'gray',
    disabled: true,
  },
};
