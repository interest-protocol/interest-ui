import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '..';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Normal: Story = {
  args: {
    label: 'Checkbox',
    defaultValue: false,
  },
};

export const Active: Story = {
  args: {
    label: 'Checkbox',
    defaultValue: true,
  },
};
