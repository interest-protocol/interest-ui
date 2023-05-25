import { Meta, StoryObj } from '@storybook/react';

import { ProgressIndicator } from '..';

const meta: Meta<typeof ProgressIndicator> = {
  title: 'Progress Indicator',
  component: ProgressIndicator,
  argTypes: {
    variant: {
      defaultValue: 'bar',
      options: ['bar', 'circle', 'loading'],
      control: { type: 'radio' },
    },
    value: {
      constrol: { type: 'number' },
    },
    size: {
      constrol: { type: 'number' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressIndicator>;

export const NormalBar: Story = {
  args: {
    value: 25,
  },
};

export const WarningBar: Story = {
  args: {
    value: 75,
  },
};

export const DangerousBar: Story = {
  args: {
    value: 95,
  },
};

export const Circle: Story = {
  args: {
    variant: 'circle',
    value: 25,
  },
};

export const BigCircle: Story = {
  args: {
    variant: 'circle',
    value: 50,
    size: 80,
  },
};

export const LoadingCircle: Story = {
  args: {
    variant: 'loading',
  },
};
