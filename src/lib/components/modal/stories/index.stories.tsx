import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/test';
import React, { FC, useState } from 'react';
import { v4 } from 'uuid';

import { Box } from '../../../elements';
import { Button } from '../../button';
import { Modal as IUIModal } from '..';
import { ModalProps } from '../modal.types';
import { convertViewportUnitsToPixels } from '../modal.utils';

const Modal: FC<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} role="button" variant="filled">
        Open Modal
      </Button>
      <IUIModal
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          args.onClose?.();
        }}
      >
        {['Content', 'Footer'].map((text) => (
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
    </>
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
  play: async ({ step }) => {
    const modalOverlay = document.body.getElementsByClassName(
      'ReactModal__Overlay'
    )[0] as HTMLElement;

    const dialog = document.body.querySelector(
      '[role="dialog"]'
    ) as HTMLElement;

    const buttonCounter = dialog.getElementsByTagName('button');
    const dialogSections = dialog.firstChild?.firstChild?.childNodes;

    await step('Checking modal overlay structure', () => {
      expect(
        modalOverlay,
        'It expects that the modal overlay is being rendered '
      ).toBeInTheDocument();

      expect(
        modalOverlay,
        'It expects that the modal overlay has the position absolute'
      ).toHaveStyle('position: fixed');

      expect(
        modalOverlay,
        'It expects that the modal overlay has the 9999 z-index'
      ).toHaveStyle('z-index: 99999');

      expect(
        modalOverlay,
        'It expects that the modal overlay background is "rgba(0, 0, 0, 0.5)"'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0.5)');
    });

    await step('Checking modal overlay structure', () => {
      expect(
        modalOverlay.childNodes,
        'It expects that the modal overlay has only one child'
      ).toHaveLength(1);
    });

    await step('Checking dialog structure', () => {
      const maxWidthPx = Math.floor(convertViewportUnitsToPixels('95vw'));
      const maxHeightPx = Math.floor(convertViewportUnitsToPixels('95vh'));

      const computedStyle = getComputedStyle(dialog);

      const maxWidth = Math.floor(
        parseFloat(
          computedStyle.getPropertyValue('max-width').replace('px', '')
        )
      );
      const maxHeight = Math.floor(
        parseFloat(
          computedStyle.getPropertyValue('max-height').replace('px', '')
        )
      );

      expect(
        dialog,
        'It expects that the dialog is being rendered '
      ).toBeInTheDocument();

      expect(
        dialog,
        'It expects that the dialog has the position static'
      ).toHaveStyle('position: static');

      expect(
        maxWidth,
        'It expects that the dialog has the max-width of 95vw'
      ).toBe(maxWidthPx);

      expect(
        maxHeight,
        'It expects that the dialog has the max-height of 95vh'
      ).toBe(maxHeightPx);

      expect(
        dialog,
        'It expects that the dialog background-color is "rgba(0, 0, 0, 0)"'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Checking dialog content', () => {
      expect(
        modalOverlay.childNodes,
        'It expects that the dialog has only one child'
      ).toHaveLength(1);

      expect(
        dialog,
        'It expects that the dialog has the title'
      ).toHaveTextContent('IPX Balance');

      expect(
        dialog,
        'It expects that the dialog has the text Content'
      ).toHaveTextContent('Content');

      expect(
        dialog,
        'It expects that the dialog has the text Footer'
      ).toHaveTextContent('Footer');

      expect(
        buttonCounter.length,
        'It expects that the dialog has at least one button'
      ).toBeGreaterThanOrEqual(1);

      expect(
        dialogSections,
        'It expects that the dialog has 3 sections'
      ).toHaveLength(3);
    });
  },
};
