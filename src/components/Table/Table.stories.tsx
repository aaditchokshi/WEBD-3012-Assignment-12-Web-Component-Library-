import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';
import type { TableProps } from './Table.types';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta<TableProps>;

type Story = StoryObj<TableProps>;

export const Default: Story = {
  args: {
    headers: ['Header 1', 'Header 2'],
    rows: [
      ['Row 1 Cell 1', 'Row 1 Cell 2'],
      ['Row 2 Cell 1', 'Row 2 Cell 2'],
    ],
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    headers: ['Header 1', 'Header 2'],
    rows: [
      ['Row 1 Cell 1', 'Row 1 Cell 2'],
    ],
    disabled: true,
  },
};
