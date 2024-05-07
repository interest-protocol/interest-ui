import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import React, { FC, useState } from 'react';
import { v4 } from 'uuid';

import { Box } from '../../../elements';
import { Modal as IUIModal } from '..';
import { ModalProps } from '../modal.types';

const Modal: FC<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <IUIModal
      {...args}
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
        args.onClose?.();
      }}
    >
      {['Modal', 'Content'].map((text) => (
        <Box
          p="4xl"
          borderTop="1px solid"
          borderColor="outline.outline"
          key={v4()}
        >
          {text}
        </Box>
      ))}
    </IUIModal>
  );
};

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

export const Normal: Story = {
  args: {
    isOpen: true,
    allowClose: true,
    ariaHideApp: false,
    title: 'IPX Balance',
    hasCloseButton: true,
  },
  play: async ({ args, step, canvasElement }) => {
    const canvas = within(canvasElement);

    const modal = canvas.getByRole('modal');
    const computedStyle = getComputedStyle(modal);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');

    await step('onClick event', () => {
      userEvent.click(modal);
    });

    await step('Check property value and args', () => {
      expect(args.isOpen).toBeTruthy();
      expect(args.allowClose).toBeTruthy();
      expect(args.ariaHideApp).toBeFalsy();
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
    });
  },
};
