import { Meta, StoryObj } from '@storybook/react';

import { ErrorSVG } from '../../../icons';
import { Tag } from '..';

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
  argTypes: {
    variant: {
      options: ['filled', 'outline'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const FilledWithCombined: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'filled',
    PrefixIcon: ErrorSVG,
    onClose: () => {
      alert('close button licked');
    },
  },
};

export const FilledWithPrefix: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'filled',
    PrefixIcon: ErrorSVG,
  },
};
export const FilledWithDismiss: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'filled',
    onClose: () => {
      alert('close button licked');
    },
  },
};
export const Filled: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'filled',
  },
};

export const OutlinedWithCombined: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'outline',
    PrefixIcon: ErrorSVG,
    onClose: () => {
      alert('close button licked');
    },
  },
};

export const OutlinedWithPrefix: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'outline',
    PrefixIcon: ErrorSVG,
  },
};
export const OutlinedWithDismiss: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'outline',
    onClose: () => {
      alert('close button licked');
    },
  },
};
export const Outlined: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'outline',
  },
};
