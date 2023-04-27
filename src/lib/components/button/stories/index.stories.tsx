import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PlusIcon, SwapIcon } from '../../../../storybook/icons';
import { Button } from '..';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['filled', 'outline', 'text', 'icon'],
      control: { type: 'select' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Enabled',
    disabled: false,
  },
};

export const FilledWithSuffix: Story = {
  args: {
    variant: 'filled',
    children: 'Enabled',
    PrefixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const FilledWithCombined: Story = {
  args: {
    variant: 'filled',
    children: 'Enabled',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Enabled',
    disabled: false,
  },
};

export const OutlineWithPrefix: Story = {
  args: {
    variant: 'outline',
    children: 'Enabled',
    PrefixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const OutlineWithSuffix: Story = {
  args: {
    variant: 'outline',
    children: 'Enabled',
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const OutlineWithCombined: Story = {
  args: {
    variant: 'outline',
    children: 'Enabled',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Enabled',
    disabled: false,
  },
};

export const TextWithPrefix: Story = {
  args: {
    variant: 'text',
    children: 'Enabled',
    PrefixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const TextWithSuffix: Story = {
  args: {
    variant: 'text',
    children: 'Enabled',
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const TextWithCombined: Story = {
  args: {
    variant: 'text',
    children: 'Enabled',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const Icon: Story = {
  args: {
    variant: 'icon',
    children: <SwapIcon />,
    disabled: false,
  },
};
