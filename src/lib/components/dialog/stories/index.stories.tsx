import { Meta, StoryObj } from '@storybook/react';
import React, { FC, useState } from 'react';

import { DialogProps } from '../dialog.types';
import { Dialog as IUDialog } from '../index';

const Dialog: FC<DialogProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <IUDialog
      {...args}
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
        args.onClose?.();
      }}
    />
  );
};

const meta: Meta<typeof Dialog> = {
  title: 'Dialog',
  component: Dialog,
  argTypes: {
    isOpen: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    primaryButton: {},
    secondaryButton: {},
    title: {
      defaultValue: 'Title',
      control: { type: 'text' },
    },
    message: {
      defaultValue:
        "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Success: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    message:
      "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
    status: 'success',
    primaryButton: {
      label: 'GOT IT',
      onClick: () => console.log('OK button clicked'),
    },
    secondaryButton: {
      label: 'CLOSE',
      onClick: () => console.log('OK button clicked'),
    },
  },
};

export const Warning: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    message:
      "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
    status: 'warning',
    primaryButton: {
      label: 'GOT IT',
      onClick: () => console.log('OK button clicked'),
    },
    secondaryButton: {
      label: 'CLOSE',
      onClick: () => console.log('OK button clicked'),
    },
  },
};

export const Error: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    message:
      "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
    status: 'error',
    primaryButton: {
      label: 'GOT IT',
      onClick: () => console.log('OK button clicked'),
    },
    secondaryButton: {
      label: 'CLOSE',
      onClick: () => console.log('OK button clicked'),
    },
  },
};

export const Info: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    message:
      "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
    status: 'info',
    primaryButton: {
      label: 'GOT IT',
      onClick: () => console.log('OK button clicked'),
    },
    secondaryButton: {
      label: 'CLOSE',
      onClick: () => console.log('OK button clicked'),
    },
  },
};

export const General: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    message:
      "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
    status: 'general',
    primaryButton: {
      label: 'GOT IT',
      onClick: () => console.log('OK button clicked'),
    },
    secondaryButton: {
      label: 'CLOSE',
      onClick: () => console.log('OK button clicked'),
    },
  },
};

export const Loading: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    message:
      "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
    status: 'loading',
    primaryButton: {
      label: 'GOT IT',
      onClick: () => console.log('OK button clicked'),
    },
    secondaryButton: {
      label: 'CLOSE',
      onClick: () => console.log('OK button clicked'),
    },
  },
};
