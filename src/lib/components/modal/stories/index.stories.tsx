import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box } from '../../../elements';
import { Modal } from '..';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    isOpen: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Normal: Story = {
  args: {
    isOpen: true,
    title: 'IPX Balance',
    children: (
      <Box p="4xl" borderTop="1px solid" borderColor="textAccent">
        Marco Pitra
      </Box>
    ),
  },
};

export const WithMainButton: Story = {
  args: {
    isOpen: true,
    title: 'IPX Balance',
    children: 'Marco Pitra',
    buttonProps: {
      onClick: alert,
      variant: 'filled',
    },
    buttonText: 'Test Button',
  },
};

export const WithCloseButton: Story = {
  args: {
    isOpen: true,
    title: 'IPX Balance',
    hasCloseButton: true,
    children: 'Marco Pitra',
  },
};
