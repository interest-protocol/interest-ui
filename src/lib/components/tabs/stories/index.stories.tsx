import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '..';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  // argTypes: {
  //   items: {
  //     control: { type: 'text' },
  //   },
  //   info: {
  //     control: { type: 'text' },
  //   },
  // },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Normal: Story = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  },
};

export const CustomPx: Story = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    px: '0.5rem',
  },
};
