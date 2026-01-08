import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import React, { useState } from 'react';

import FormFieldFileBox from '../index';

const meta = {
  title: 'Interest Protocol/Form Field File Box',
  component: FormFieldFileBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onChangeFile: fn(),
    onDropFile: fn(),
    onError: fn(),
  },
} satisfies Meta<typeof FormFieldFileBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const getContainer = (canvasElement: HTMLElement): HTMLElement | null => {
  const fileInput = canvasElement.querySelector('input[type="file"]');
  if (!fileInput) return null;
  return (fileInput.parentElement?.parentElement as HTMLElement) || null;
};

export const Default: Story = {
  args: {
    dropImageUrl: undefined,
    fileName: undefined,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Renders component with empty state', async () => {
      const uploadText = canvas.getByText(/Drop your file here or/i);
      expect(
        uploadText,
        'It is expected that the upload text is rendered'
      ).toBeInTheDocument();

      const uploadLabel = canvas.getByText('upload');
      expect(
        uploadLabel,
        'It is expected that the upload label is rendered'
      ).toBeInTheDocument();
    });

    await step('Verifies container styles', async () => {
      const container = getContainer(canvasElement);
      expect(
        container,
        'It is expected that the container is rendered'
      ).toBeInTheDocument();
      expect(
        container,
        'It is expected that the container has display flex'
      ).toHaveStyle({ display: 'flex' });
      expect(
        container,
        'It is expected that the container has align-items center'
      ).toHaveStyle({ alignItems: 'center' });
      expect(
        container,
        'It is expected that the container has justify-content center'
      ).toHaveStyle({ justifyContent: 'center' });
    });

    await step('Verifies hidden file input presence', async () => {
      const fileInput = canvasElement.querySelector('input[type="file"]');
      expect(
        fileInput,
        'It is expected that the file input is rendered'
      ).toBeInTheDocument();
      expect(
        fileInput,
        'It is expected that the file input accepts image files only'
      ).toHaveAttribute('accept', 'image/*');
    });
  },
};

export const WithUploadedImage: Story = {
  args: {
    dropImageUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
    fileName: 'my-image.png',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Renders with uploaded image', async () => {
      const fileName = canvas.getByText('my-image.png');
      expect(
        fileName,
        'It is expected that the file name is rendered'
      ).toBeInTheDocument();
    });

    await step('Verifies image preview', async () => {
      const container = getContainer(canvasElement);
      expect(
        container,
        'It is expected that the container is rendered'
      ).toBeInTheDocument();

      const allDivs = container?.querySelectorAll('div') || [];
      const previewDiv = Array.from(allDivs).find((div) => {
        const style = div.getAttribute('style') || '';
        const computedStyle = window.getComputedStyle(div);
        return (
          style.includes('url(') ||
          (computedStyle.backgroundImage !== 'none' &&
            computedStyle.backgroundImage.includes('url'))
        );
      });
      expect(
        previewDiv,
        'It is expected that the image preview is rendered'
      ).toBeInTheDocument();
    });

    await step('Does not show upload text when image is present', async () => {
      const uploadText = canvas.queryByText(/Drop your file here or/i);
      expect(
        uploadText,
        'It is expected that the upload text is not shown when an image is present'
      ).not.toBeInTheDocument();
    });
  },
};

export const DragStates: Story = {
  args: {
    dropImageUrl: undefined,
    fileName: undefined,
  },
  play: async ({ canvasElement, step }) => {
    await step('Verifies initial state without drag', async () => {
      const container = getContainer(canvasElement);
      expect(
        container,
        'It is expected that the container is rendered in the initial state'
      ).toBeInTheDocument();
    });

    await step('Simulates drag enter', async () => {
      const container = getContainer(canvasElement);
      expect(
        container,
        'It is expected that the container is rendered'
      ).toBeInTheDocument();
      if (!container) return;

      await userEvent.hover(container);

      const dragEvent = new DragEvent('dragenter', {
        bubbles: true,
        cancelable: true,
      });

      container.dispatchEvent(dragEvent);
    });

    await step('Simulates drag leave', async () => {
      const container = getContainer(canvasElement);
      expect(
        container,
        'It is expected that the container is rendered'
      ).toBeInTheDocument();
      if (!container) return;

      const dragLeaveEvent = new DragEvent('dragleave', {
        bubbles: true,
        cancelable: true,
      });

      container.dispatchEvent(dragLeaveEvent);
    });
  },
};

export const WithLongFileName: Story = {
  args: {
    dropImageUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
    fileName: 'my-very-long-file-name-that-should-be-displayed-properly.png',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Renders long file name', async () => {
      const fileName = canvas.getByText(
        'my-very-long-file-name-that-should-be-displayed-properly.png'
      );
      expect(
        fileName,
        'It is expected that the long file name is rendered'
      ).toBeInTheDocument();
    });

    await step('Verifies text has underline', async () => {
      const fileName = canvas.getByText(
        'my-very-long-file-name-that-should-be-displayed-properly.png'
      );
      expect(
        fileName,
        'It is expected that the file name text has underline decoration'
      ).toHaveStyle({ textDecoration: 'underline' });
    });
  },
};
