import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, waitFor, within } from '@storybook/test';
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

export const Filled: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'filled',
    onClose: undefined,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tag = canvas.getByTestId('testTag');

    const computedStyle = getComputedStyle(tag);

    const border = computedStyle.getPropertyValue('border');
    const background = computedStyle.getPropertyValue('background');

    expect(border.includes('none')).toBeTruthy();
    expect(background.includes('rgba(0, 0, 0, 0)')).toBeFalsy();
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
    onClose: undefined,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tag = canvas.getByTestId('testTag');

    const svgElements = tag.querySelectorAll('svg');
    expect(svgElements).toHaveLength(1);

    const firstChild = tag.firstElementChild;

    expect(firstChild).toBeInTheDocument();
    expect(firstChild).toBeVisible();

    if (firstChild?.tagName.toLowerCase() === 'div') {
      const childElement = firstChild.firstElementChild;

      expect(childElement?.tagName.toLocaleLowerCase()).toBe('svg');
    } else {
      expect(firstChild?.tagName.toLocaleLowerCase()).toBe('svg');
    }
  },
};

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
    onClose: () => null,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tag = canvas.getByTestId('testTag');

    const svgElements = tag.querySelectorAll('svg');
    expect(svgElements).toHaveLength(2);

    const firstChild = tag.firstElementChild;
    const lastChild = tag.firstElementChild;

    expect(firstChild).toBeInTheDocument();
    expect(firstChild).toBeVisible();

    if (firstChild && firstChild?.tagName.toLowerCase() === 'div') {
      const childElement = firstChild.firstElementChild;

      expect(childElement?.tagName.toLocaleLowerCase()).toBe('svg');
    } else {
      expect(firstChild?.tagName.toLocaleLowerCase()).toBe('svg');
    }

    expect(lastChild).toBeInTheDocument();
    expect(lastChild).toBeVisible();

    if (lastChild && lastChild?.tagName.toLowerCase() === 'div') {
      const childElement = lastChild.firstElementChild;

      expect(childElement?.tagName.toLocaleLowerCase()).toBe('svg');
    } else {
      expect(firstChild?.tagName.toLocaleLowerCase()).toBe('svg');
    }
  },
};

export const Outlined: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'outline',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tag = canvas.getByTestId('testTag');

    const computedStyle = getComputedStyle(tag);

    const border = computedStyle.getPropertyValue('border');
    const background = computedStyle.getPropertyValue('background');

    expect(border.includes('none')).toBeFalsy();
    expect(background.includes('rgba(0, 0, 0, 0)')).toBeTruthy();
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tag = canvas.getByTestId('testTag');

    const svgElements = tag.querySelectorAll('svg');
    expect(svgElements).toHaveLength(2);

    const firstChild = tag.firstElementChild;
    const lastChild = tag.firstElementChild;

    expect(firstChild).toBeInTheDocument();
    expect(firstChild).toBeVisible();

    if (firstChild && firstChild?.tagName.toLowerCase() === 'div') {
      const childElement = firstChild.firstElementChild;

      expect(childElement?.tagName.toLocaleLowerCase()).toBe('svg');
    } else {
      expect(firstChild?.tagName.toLocaleLowerCase()).toBe('svg');
    }

    expect(lastChild).toBeInTheDocument();
    expect(lastChild).toBeVisible();

    if (lastChild && lastChild?.tagName.toLowerCase() === 'div') {
      const childElement = lastChild.firstElementChild;

      expect(childElement?.tagName.toLocaleLowerCase()).toBe('svg');
    } else {
      expect(firstChild?.tagName.toLocaleLowerCase()).toBe('svg');
    }
  },
};

export const OutlinedWithPrefix: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'outline',
    onClose: undefined,
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tag = canvas.getByTestId('testTag');

    const svgElements = tag.querySelectorAll('svg');
    expect(svgElements).toHaveLength(1);

    const firstChild = tag.firstElementChild;

    expect(firstChild).toBeInTheDocument();
    expect(firstChild).toBeVisible();

    if (firstChild?.tagName.toLowerCase() === 'div') {
      const childElement = firstChild.firstElementChild;

      expect(childElement?.tagName.toLocaleLowerCase()).toBe('svg');
    } else {
      expect(firstChild?.tagName.toLocaleLowerCase()).toBe('svg');
    }
  },
};

export const WithCloseAction: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'outline',
    onClose: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const tag = canvas.getByTestId('testTag');

    const svgElements = tag.querySelectorAll('svg');
    expect(svgElements).toHaveLength(1);

    const lastChild = tag.lastElementChild as HTMLElement;

    expect(lastChild).toBeInTheDocument();
    expect(lastChild).toBeVisible();

    if (lastChild && lastChild?.tagName.toLowerCase() === 'div') {
      const childElement = lastChild.firstElementChild;

      expect(childElement?.tagName.toLocaleLowerCase()).toBe('svg');
    } else {
      expect(lastChild?.tagName.toLocaleLowerCase()).toBe('svg');
    }

    lastChild.click();

    await waitFor(() => expect(args.onClose).toHaveBeenCalledOnce());
  },
};
