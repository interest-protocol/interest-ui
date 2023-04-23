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

const toggleModal = () => alert('close');

export const Normal: Story = {
  args: {
    isOpen: false,
    allowClose: true,
    title: 'IPX Balance',
    hasCloseButton: true,
    onClose: toggleModal,
    ariaHideApp: false, // JUST FOR THE STORY - because we are not setting the app
    children: ['Modal', 'Content'].map((text) => (
      <Box p="4xl" borderTop="1px solid" borderColor="textAccent" key={v4()}>
        {text}
      </Box>
    )),
  },
};
