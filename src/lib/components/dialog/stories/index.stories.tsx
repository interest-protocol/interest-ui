import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import React, { FC, useState } from 'react';

import { Button } from '../../button';
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

export const Custom: Story = {
  args: {
    isOpen: true,
    title: 'Custom Dialog',
    message:
      "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
    status: 'success',
    primaryButton: (
      <Button
        variant="tonal"
        width="100%"
        display="flex"
        justifyContent="center"
      >
        Text
      </Button>
    ),
    secondaryButton: {
      label: 'CLOSE',
      onClick: fn(),
    },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog');
    const computedStyle = getComputedStyle(dialog);
    const background = computedStyle.getPropertyValue('background');

    const parentOnlyChild = dialog.ELEMENT_NODE;

    expect(parentOnlyChild).toBe(1);

    userEvent.click(canvas.getByRole('close-button'));

    expect(background.includes('rgba(0, 0, 0, 0)')).toBeFalsy();
    expect(args.isOpen).toBe(true);
    expect(args.title).toBe('Custom Dialog');
    expect(args.status).toBe('success');
    await waitFor(() =>
      expect(args.secondaryButton.onClick).toHaveBeenCalledTimes(0)
    );
  },
};

export const Success: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    message:
      "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
    status: 'success',
    primaryButton: {
      label: 'GOT IT',
      onClick: fn(),
    },
    secondaryButton: {
      label: 'CLOSE',
      onClick: fn(),
    },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog');
    const computedStyle = getComputedStyle(dialog);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');

    userEvent.click(canvas.getByRole('close-button'));
    userEvent.click(canvas.getByRole('got-it-button'));

    expect(color.trim()).toBeTruthy();
    expect(background.includes('rgba(0, 0, 0, 0)')).toBeFalsy();
    expect(args.isOpen).toBe(true);
    expect(args.title).toBe('Title');
    expect(args.status).toBe('success');
    expect(args.primaryButton.label).toBeTruthy(0);
    await waitFor(() =>
      expect(args.primaryButton.onClick).toHaveBeenCalledTimes(0)
    );
    await waitFor(() =>
      expect(args.secondaryButton.onClick).toHaveBeenCalledTimes(0)
    );
    expect(args.primaryButton.label).toBeTruthy(0);
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
      onClick: fn(),
    },
    secondaryButton: {
      label: 'CLOSE',
      onClick: fn(),
    },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog');
    const computedStyle = getComputedStyle(dialog);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');

    userEvent.click(canvas.getByRole('close-button'));
    userEvent.click(canvas.getByRole('got-it-button'));

    expect(color.trim()).toBeTruthy();
    expect(background.includes('rgba(0, 0, 0, 0)')).toBeFalsy();
    expect(args.isOpen).toBe(true);
    expect(args.title).toBe('Title');
    expect(args.status).toBe('warning');
    expect(args.primaryButton.label).toBeTruthy(0);
    await waitFor(() =>
      expect(args.primaryButton.onClick).toHaveBeenCalledTimes(0)
    );
    await waitFor(() =>
      expect(args.secondaryButton.onClick).toHaveBeenCalledTimes(0)
    );
    expect(args.primaryButton.label).toBeTruthy(0);
  },
};

export const Error: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    message:
      "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
    status: 'error',
    secondaryButton: {
      label: 'CLOSE',
      onClick: fn(),
    },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog');
    const computedStyle = getComputedStyle(dialog);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');

    userEvent.click(canvas.getByRole('close-button'));

    expect(color.trim()).toBeTruthy();
    expect(background.includes('rgba(0, 0, 0, 0)')).toBeFalsy();
    expect(args.isOpen).toBe(true);
    expect(args.title).toBe('Title');
    expect(args.status).toBe('error');
    await waitFor(() =>
      expect(args.secondaryButton.onClick).toHaveBeenCalledTimes(0)
    );
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
      onClick: fn(),
    },
    secondaryButton: {
      label: 'CLOSE',
      onClick: fn(),
    },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog');
    const computedStyle = getComputedStyle(dialog);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');

    userEvent.click(canvas.getByRole('close-button'));
    userEvent.click(canvas.getByRole('got-it-button'));

    expect(color.trim()).toBeTruthy();
    expect(background.includes('rgba(0, 0, 0, 0)')).toBeFalsy();
    expect(args.isOpen).toBe(true);
    expect(args.title).toBe('Title');
    expect(args.status).toBe('info');
    expect(args.primaryButton.label).toBeTruthy(0);
    await waitFor(() =>
      expect(args.primaryButton.onClick).toHaveBeenCalledTimes(0)
    );
    await waitFor(() =>
      expect(args.secondaryButton.onClick).toHaveBeenCalledTimes(0)
    );
    expect(args.primaryButton.label).toBeTruthy(0);
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
      onClick: fn(),
    },
    secondaryButton: {
      label: 'CLOSE',
      onClick: fn(),
    },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog');
    const computedStyle = getComputedStyle(dialog);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');

    userEvent.click(canvas.getByRole('close-button'));
    userEvent.click(canvas.getByRole('got-it-button'));

    expect(color.trim()).toBeTruthy();
    expect(background.includes('rgba(0, 0, 0, 0)')).toBeFalsy();
    expect(args.isOpen).toBe(true);
    expect(args.title).toBe('Title');
    expect(args.status).toBe('general');
    expect(args.primaryButton.label).toBeTruthy(0);
    await waitFor(() =>
      expect(args.primaryButton.onClick).toHaveBeenCalledTimes(0)
    );
    await waitFor(() =>
      expect(args.secondaryButton.onClick).toHaveBeenCalledTimes(0)
    );
    expect(args.primaryButton.label).toBeTruthy(0);
  },
};

export const Loading: Story = {
  args: {
    isOpen: true,
    title: 'Title',
    message:
      "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
    status: 'loading',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog');
    const computedStyle = getComputedStyle(dialog);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');

    expect(color.trim()).toBeTruthy();
    expect(background.includes('rgba(0, 0, 0, 0)')).toBeFalsy();
    expect(args.isOpen).toBe(true);
    expect(args.title).toBe('Title');
    expect(args.status).toBe('loading');
  },
};
