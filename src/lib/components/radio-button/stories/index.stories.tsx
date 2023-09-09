import { Meta, StoryObj } from '@storybook/react';

import { RadioButton } from '..';

const meta: Meta<typeof RadioButton> = {
  title: 'Radio',
  component: RadioButton,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Normal: Story = {
  args: {},
};

export const NormalDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    defaultValue: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    defaultValue: true,
    disabled: true,
  },
};
