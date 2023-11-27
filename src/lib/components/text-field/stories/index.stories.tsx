import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PlusIcon } from '../../../../storybook/icons';
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
    label: 'Label',
    Prefix: <PlusIcon />,
    placeholder: '0.123',
    supportingText: 'Supporting text',
  },
};

export const WithPrefixSucess: Story = {
  args: {
    label: 'Label',
    status: 'success',
    Prefix: <PlusIcon />,
    placeholder: '0.123',
    supportingText: 'Supporting text',
  },
};

export const WithSuffix: Story = {
  args: {
    label: 'Label',
    placeholder: '0.123',
    Suffix: <PlusIcon />,
    supportingText: 'Supporting text',
  },
};

export const WithTopLabel: Story = {
  args: {
    placeholder: '0.123',
    label: 'Label',
    supportingText: 'Supporting text',
  },
};

export const Combined: Story = {
  args: {
    placeholder: '0.123',
    label: 'Label',
    Prefix: <PlusIcon />,
    Suffix: <PlusIcon />,
    supportingText: 'Supporting text',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    Suffix: <PlusIcon />,
    placeholder: '0.123',
    supportingText: 'Enter a valid amount',
  },
};

export const ErrorCombined: Story = {
  args: {
    status: 'error',
    placeholder: '0.123',
    label: 'Label',
    Prefix: <PlusIcon />,
    Suffix: <PlusIcon />,
    supportingText: 'Supporting text',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '0.123',
  },
};
