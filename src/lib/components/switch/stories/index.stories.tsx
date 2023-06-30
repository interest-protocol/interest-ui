import { Meta, StoryObj } from '@storybook/react';

import { SwitchButton } from '..';

const meta: Meta<typeof SwitchButton> = {
  title: 'Switch',
  component: SwitchButton,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SwitchButton>;

export const Normal: Story = {
  args: {
    name: 'switch',
    labels: 'Switch',
    defaultValue: false,
  },
};

export const Activation: Story = {
  args: {
    name: 'switch',
    labels: 'Switch',
    activation: true,
    defaultValue: false,
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    name: 'switch',
    labels: 'Switch',
    defaultValue: false,
  },
};

export const Selected: Story = {
  args: {
    name: 'switch',
    labels: 'Switch',
    defaultValue: true,
  },
};

export const SelectedDisabled: Story = {
  args: {
    name: 'switch',
    disabled: true,
    labels: 'Switch',
    defaultValue: true,
  },
};

export const DoubleLabel: Story = {
  args: {
    name: 'switch',
    defaultValue: true,
    labels: ['on', 'off'],
  },
};

export const WithoutLabel: Story = {
  args: {
    name: 'switch',
    defaultValue: false,
  },
};
