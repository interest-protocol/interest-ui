import { Meta, StoryObj } from '@storybook/react';

import { InfoCard } from '..';

const meta: Meta<typeof InfoCard> = {
  title: 'InfoCard',
  component: InfoCard,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InfoCard>;

export const Normal: Story = {
  args: {
    title: 'TVL',
    children: '$52,294.12',
    onClick: () => alert('clicked'),
  },
};

export const NormalSized: Story = {
  args: {
    width: '10rem',
    title: 'TVL',
    children: '$52,294.12',
    onClick: () => alert('clicked'),
  },
};
