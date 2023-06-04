import { Meta, StoryObj } from '@storybook/react';

import { Slider } from '..';

const meta: Meta<typeof Slider> = {
  title: 'Slider',
  component: Slider,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    initial: {
      control: { type: 'number' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    max: 100,
  },
};

export const InTheMiddle: Story = {
  args: {
    max: 100,
    initial: 50,
  },
};

export const InTheEnd: Story = {
  args: {
    max: 100,
    initial: 100,
  },
};
