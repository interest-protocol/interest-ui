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
    Prefix: <PlusIcon />,
  },
};

export const WithSuffix: Story = {
  args: {
    placeholder: '0.123',
    suffix: <PlusIcon />,
  },
};

export const WithPrefixAndTopLabel: Story = {
  args: {
    placeholder: '0.123',
    label: 'Label',
    Prefix: <PlusIcon />,
  },
};
export const WithPrefixTopLabelAndSupportingText: Story = {
  args: {
    placeholder: '0.123',
    label: 'Label',
    Prefix: <PlusIcon />,
    supportingText: 'Supporting text',
  },
};

export const Error: Story = {
  args: {
    error: 'Error supporting text',
    supportingText: 'Normal supporting text',
    placeholder: '0.123',
  },
};

export const ErrorWithTopLabel: Story = {
  args: {
    error: 'Supporting text',
    label: 'Label',
    placeholder: '0.123',
  },
};

export const ErrorWithPrefix: Story = {
  args: {
    error: 'Supporting text',
    placeholder: '0.123',
    Prefix: <SwapIcon />,
  },
};

export const ErrorWithSuffix: Story = {
  args: {
    error: 'Supporting text',
    placeholder: '0.123',
    suffix: <PlusIcon />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '0.123',
  },
};
