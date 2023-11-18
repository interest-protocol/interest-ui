import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '..';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Normal: Story = {
  args: {
    disabled: false,
    defaultValue: false,
    label: 'Checkbox Label',
  },
};

export const NormalWithIndetermated: Story = {
  args: {
    disabled: false,
    defaultValue: false,
    label: 'Checkbox Label',
    allowIndetermatedValue: true,
  },
};

export const NormalWithIndetermatedAndSupportText: Story = {
  args: {
    disabled: false,
    defaultValue: false,
    label: 'Checkbox Label',
    allowIndetermatedValue: false,
    supportingText: 'Supporting Text',
  },
};

export const NormalDisabled: Story = {
  args: {
    disabled: true,
    defaultValue: true,
    label: 'Checkbox Label',
  },
};
