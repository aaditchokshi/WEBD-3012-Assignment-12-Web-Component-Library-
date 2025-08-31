import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Img from './Img';
import { ImgProps } from './Img.types';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Img>;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/200',
    alt: 'Placeholder Image',
    width: '200px',
    height: '200px',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/200',
    alt: 'Disabled Image',
    width: '200px',
    height: '200px',
    disabled: true,
  },
};
