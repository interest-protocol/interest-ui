import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library/dist';
import React from 'react';

import { Box } from '../../../elements';
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
    PrefixIcon: (
      <Box
        p=".1875rem"
        width="2rem"
        height="2rem"
        display="flex"
        color="onSurface"
        alignItems="center"
        borderRadius="full"
        justifyContent="center"
      >
        <ErrorSVG maxWidth="1.125rem" maxHeight="1.125rem" width="100%" />
      </Box>
    ),
    onClose: () => {
      alert('close button clicked');
    },
  },
};

export const FilledWithPrefix: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'filled',
    PrefixIcon: (
      <Box
        p=".1875rem"
        width="2rem"
        height="2rem"
        display="flex"
        color="onSurface"
        alignItems="center"
        borderRadius="full"
        justifyContent="center"
      >
        <ErrorSVG maxWidth="1.125rem" maxHeight="1.125rem" width="100%" />
      </Box>
    ),
  },
};

export const FilledWithDismiss: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'filled',
    onClose: () => {
      alert('close button clicked');
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
    PrefixIcon: (
      <Box
        p=".1875rem"
        width="2rem"
        height="2rem"
        display="flex"
        color="onSurface"
        alignItems="center"
        borderRadius="full"
        justifyContent="center"
      >
        <ErrorSVG maxWidth="1.125rem" maxHeight="1.125rem" width="100%" />
      </Box>
    ),
    onClose: () => {
      alert('close button clicked');
    },
  },
};

export const OutlinedWithPrefix: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'outline',
    PrefixIcon: (
      <Box
        p=".1875rem"
        width="2rem"
        height="2rem"
        display="flex"
        color="onSurface"
        alignItems="center"
        borderRadius="full"
        justifyContent="center"
      >
        <ErrorSVG maxWidth="1.125rem" maxHeight="1.125rem" width="100%" />
      </Box>
    ),
  },
};

export const OutlinedWithDismiss: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'outline',
    onClose: () => {
      alert('close button clicked');
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

export const TestTag: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'filled',
    PrefixIcon: (
      <Box
        p=".1875rem"
        width="2rem"
        height="2rem"
        display="flex"
        color="onSurface"
        alignItems="center"
        borderRadius="full"
        justifyContent="center"
      >
        <ErrorSVG maxWidth="1.125rem" maxHeight="1.125rem" width="100%" />
      </Box>
    ),
    onClose: () => {
      alert('close button clicked');
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByTestId('tag'));
    await userEvent.hover(canvas.getByTestId('tag'));
    await userEvent.unhover(canvas.getByTestId('tag'));
  },
};
