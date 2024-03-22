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
    bottomValue: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    showZeroValue: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    max: 100,
    initial: 0,
    disabled: false,
    withTooltip: false,
    bottomValue: false,
    showZeroValue: false,
  },
};

export const DefaultInterval: Story = {
  args: {
    max: 100,
    initial: [0, 20],
    disabled: false,
    withTooltip: false,
    bottomValue: false,
    showZeroValue: false,
  },
};

export const InTheMiddleWithoutTooltip: Story = {
  args: {
    max: 100,
    initial: 50,
    disabled: false,
    withTooltip: false,
    bottomValue: false,
    showZeroValue: false,
  },
};

export const InTheEndWithoutTooltip: Story = {
  args: {
    max: 100,
    initial: 100,
    disabled: false,
    withTooltip: false,
    bottomValue: false,
    showZeroValue: false,
  },
};

export const InTheMiddleWithTooltip: Story = {
  args: {
    max: 100,
    initial: 50,
    disabled: false,
    withTooltip: true,
    bottomValue: true,
    showZeroValue: false,
  },
};

export const InTheEndWithTooltip: Story = {
  args: {
    max: 100,
    initial: 100,
    disabled: false,
    withTooltip: true,
    bottomValue: false,
    showZeroValue: false,
  },
};
