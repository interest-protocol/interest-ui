import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '..';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    /*items: {
      control: { type: 'array' },
    },
    type: {
      options: ['circle', 'square'],
      control: { type: 'select' },
    },*/
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Normal: Story = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    type: 'circle',
    width: '',
  },
};

export const CustomPx: Story = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    type: 'circle',
    px: '0.5rem',
  },
};
