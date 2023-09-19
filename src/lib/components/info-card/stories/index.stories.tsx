import { Meta, StoryObj } from '@storybook/react';

import { InfoCard } from '..';

const meta: Meta<typeof InfoCard> = {
  title: 'InfoCard',
  component: InfoCard,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    info: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InfoCard>;

export const Normal: Story = {
  args: {
    info: '53%',
    title: 'List item',
    children: 'USD 6,786.99',
    onClick: () => alert('clicked'),
  },
};

export const NormalSized: Story = {
  args: {
    info: '53%',
    width: '10rem',
    title: 'List item',
    children: 'USD 6,786.99',
    onClick: () => alert('clicked'),
  },
};
