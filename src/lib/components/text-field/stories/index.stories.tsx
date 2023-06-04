import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PlusIcon, SwapIcon } from '../../../../storybook/icons';
import { Button } from '../../button';
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
    textAlign: 'right',
    Prefix: (
      <Button size="small" variant="filled">
        Prefix
      </Button>
    ),
  },
};

export const WithPrefixAndBottomText: Story = {
  args: {
    placeholder: '0.123',
    textAlign: 'right',
    Prefix: (
      <Button size="small" variant="filled">
        Prefix
      </Button>
    ),
    bottomText: '$0.123 USD',
  },
};

export const WithSuffix: Story = {
  args: {
    placeholder: '0.123',
    Suffix: (
      <Button size="small" variant="filled">
        Prefix
      </Button>
    ),
  },
};

export const WithPrefixIcon: Story = {
  args: {
    placeholder: '0.123',
    PrefixIcon: <SwapIcon />,
  },
};

export const WithSuffixIcon: Story = {
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

export const ErrorWithPrefixIcon: Story = {
  args: {
    error: 'Supporting text',
    placeholder: '0.123',
    PrefixIcon: <SwapIcon />,
  },
};

export const ErrorWithSuffixIcon: Story = {
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

export const SuccessWithPrefixIcon: Story = {
  args: {
    valid: 'Supporting text',
    placeholder: '0.123',
    PrefixIcon: <SwapIcon />,
  },
};

export const SuccessWithSuffixIcon: Story = {
  args: {
    valid: 'Supporting text',
    placeholder: '0.123',
    SuffixIcon: <PlusIcon />,
  },
};
