import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Default Label',
    color: '#000000',
    fontSize: '16px',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Label',
    color: '#000000',
    fontSize: '16px',
    disabled: true,
  },
};
