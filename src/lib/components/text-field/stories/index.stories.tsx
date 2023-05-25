import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PlusIcon, SwapIcon } from '../../../../storybook/icons';
import { TextField } from '..';

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    placeholder: '0.123',
  },
};

export const WithPrefix: Story = {
  args: {
    placeholder: '0.123',
    PrefixIcon: <SwapIcon />,
  },
};

export const WithSuffix: Story = {
  args: {
    placeholder: '0.123',
    SuffixIcon: <PlusIcon />,
  },
};

export const Error: Story = {
  args: {
    error: 'Supporting text',
    placeholder: '0.123',
  },
};

export const ErrorWithPrefix: Story = {
  args: {
    error: 'Supporting text',
    placeholder: '0.123',
    PrefixIcon: <SwapIcon />,
  },
};

export const ErrorWithSuffix: Story = {
  args: {
    error: 'Supporting text',
    placeholder: '0.123',
    SuffixIcon: <PlusIcon />,
  },
};

export const Success: Story = {
  args: {
    valid: 'Supporting text',
    placeholder: '0.123',
  },
};

export const SuccessWithPrefix: Story = {
  args: {
    valid: 'Supporting text',
    placeholder: '0.123',
    PrefixIcon: <SwapIcon />,
  },
};

export const SuccessWithSuffix: Story = {
  args: {
    valid: 'Supporting text',
    placeholder: '0.123',
    SuffixIcon: <PlusIcon />,
  },
};
