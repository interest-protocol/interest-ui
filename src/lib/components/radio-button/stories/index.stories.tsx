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
  args: {
    name: 'radio',
  },
};

export const NormalDisabled: Story = {
  args: {
    name: 'radio',
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    name: 'radio',
    checked: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    name: 'radio',
    checked: true,
    disabled: true,
  },
};
