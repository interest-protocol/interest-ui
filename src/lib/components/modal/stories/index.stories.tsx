import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { v4 } from 'uuid';

import { Box } from '../../../elements';
import { Modal } from '..';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    isOpen: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    allowClose: {
      control: { type: 'boolean' },
    },
    hasCloseButton: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

let isNormalOpen = false;
const toggleModal = () => {
  console.log('>> before :: ', isNormalOpen);
  isNormalOpen = !isNormalOpen;
  console.log('>> after :: ', isNormalOpen);
};
export const Normal: Story = {
  args: {
    isOpen: false,
    allowClose: true,
    title: 'IPX Balance',
    hasCloseButton: true,
    onClose: toggleModal,
    children: ['Modal', 'Content'].map((text) => (
      <Box p="4xl" borderTop="1px solid" borderColor="textAccent" key={v4()}>
        {text}
      </Box>
    )),
  },
};

export const WithMainButton: Story = {
  args: {
    isOpen: false,
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
    isOpen: false,
    title: 'IPX Balance',
    hasCloseButton: true,
    children: 'Marco Pitra',
  },
};
