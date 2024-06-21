import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, waitFor, within } from '@storybook/test';
import React from 'react';

import { Box } from '../../../elements';
import { ErrorSVG } from '../../../icons';
import { Tag } from '..';

const rgbToHex = (rgb: string) => {
  const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(rgb);
  return result
    ? `#${((1 << 24) + (+result[1] << 16) + (+result[2] << 8) + +result[3])
        .toString(16)
        .slice(1)}`.toUpperCase()
    : rgb;
};

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

    const tag = canvas.getByRole('button');

    const computedStyle = getComputedStyle(tag);

    const backgroundColor = computedStyle.getPropertyValue('background-color');

    const hexColor = rgbToHex(backgroundColor);

    expect(tag, 'Tag should be rendered in the document').toBeInTheDocument();

    expect(tag, 'The tag should contain the label "Label"').toHaveTextContent(
      'Label'
    );

    expect(hexColor, 'The background color should be white (#FFFFFF)').toBe(
      '#FFFFFF'
    );
  },
};

const ErrorSvg = (
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
);

export const FilledWithPrefix: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'filled',
    PrefixIcon: ErrorSvg,
    onClose: undefined,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tag = canvas.getByRole('button');

    const svgElements = tag.querySelectorAll('svg');
    const firstChild = tag.firstElementChild;

    const computedStyle = getComputedStyle(tag);

    const backgroundColor = computedStyle.getPropertyValue('background-color');

    const hexColor = rgbToHex(backgroundColor);

    expect(tag, 'Tag should be rendered in the document').toBeInTheDocument();

    expect(tag, 'The tag should contain the label "Label"').toHaveTextContent(
      'Label'
    );

    expect(hexColor, 'The background color should be white (#FFFFFF)').toBe(
      '#FFFFFF'
    );

    expect(svgElements, 'It should contain only one SVG').toHaveLength(1);

    expect(
      firstChild?.firstElementChild?.tagName,
      'The first element of the tag should be an svg'
    ).toBe('svg');
  },
};

export const FilledWithCombined: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'filled',
    PrefixIcon: ErrorSvg,
    onClose: () => ({}),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tag = canvas.getByRole('button');

    const svgElements = tag.querySelectorAll('svg');
    const svgElementsSize = svgElements.length;
    const firstChild = tag.firstElementChild;
    const lastChild = tag.lastElementChild;

    const childrenArray = Array.from(tag.children);
    const middleChildIndex = Math.floor(childrenArray.length / 2);
    const middleChild = childrenArray[middleChildIndex];

    const computedStyle = getComputedStyle(tag);

    const backgroundColor = computedStyle.getPropertyValue('background-color');

    const hexColor = rgbToHex(backgroundColor);

    expect(tag, 'Tag should be rendered in the document').toBeInTheDocument();

    expect(tag, 'The tag should contain the label "Label"').toHaveTextContent(
      'Label'
    );

    expect(hexColor, 'The background color should be white (#FFFFFF)').toBe(
      '#FFFFFF'
    );

    expect(svgElements, 'It should contain 2 SVGs').toHaveLength(
      svgElementsSize
    );

    expect(
      firstChild?.firstElementChild?.tagName,
      'The first element of the tag should be an svg'
    ).toBe('svg');

    expect(
      middleChild.tagName,
      'The middle element of the tag should be an svg'
    ).not.toBe('svg');

    expect(
      lastChild?.lastElementChild?.tagName,
      'The last element of the tag should be an svg when onClose props in passed'
    ).toBe('svg');
  },
};

export const Outlined: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'outline',
    onClose: undefined,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tag = canvas.getByRole('button');

    const computedStyle = getComputedStyle(tag);

    const backgroundColor = computedStyle.getPropertyValue('background-color');
    const borderStyle = computedStyle.getPropertyValue('border');

    const hexColor = rgbToHex(backgroundColor);

    expect(tag, 'Tag should be rendered in the document').toBeInTheDocument();

    expect(tag, 'The tag should contain the label "Label"').toHaveTextContent(
      'Label'
    );

    expect(hexColor, 'The background color should be empty').toBe(
      'rgba(0, 0, 0, 0)'
    );

    expect(borderStyle, 'The tag should contain a border').toContain(
      '1px solid'
    );
  },
};

export const OutlinedWithCombined: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'outline',
    PrefixIcon: ErrorSvg,
    onClose: () => ({}),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tag = canvas.getByRole('button');
    const svgElements = tag.querySelectorAll('svg');
    const svgElementsSize = svgElements.length;
    const firstChild = tag.firstElementChild;
    const lastChild = tag.lastElementChild;

    const childrenArray = Array.from(tag.children);
    const middleChildIndex = Math.floor(childrenArray.length / 2);
    const middleChild = childrenArray[middleChildIndex];

    const computedStyle = getComputedStyle(tag);

    const backgroundColor = computedStyle.getPropertyValue('background-color');
    const borderStyle = computedStyle.getPropertyValue('border');

    const hexColor = rgbToHex(backgroundColor);

    expect(tag, 'Tag should be rendered in the document').toBeInTheDocument();

    expect(tag, 'The tag should contain the label "Label"').toHaveTextContent(
      'Label'
    );

    expect(hexColor, 'The background color should be empty').toBe(
      'rgba(0, 0, 0, 0)'
    );

    expect(borderStyle, 'The tag should contain a border').toContain(
      '1px solid'
    );

    expect(svgElements, 'It should contain 2 SVGs').toHaveLength(
      svgElementsSize
    );

    expect(
      firstChild?.firstElementChild?.tagName,
      'The first element of the tag should be an svg'
    ).toBe('svg');

    expect(
      middleChild.tagName,
      'The middle element of the tag should be an svg'
    ).not.toBe('svg');

    expect(
      lastChild?.lastElementChild?.tagName,
      'The last element of the tag should be an svg when onClose props in passed'
    ).toBe('svg');
  },
};

export const OutlinedWithPrefix: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'outline',
    onClose: undefined,
    PrefixIcon: ErrorSvg,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tag = canvas.getByRole('button') as HTMLButtonElement;

    const svgElements = tag.querySelectorAll('svg');
    const firstChild = tag.firstElementChild;

    const computedStyle = getComputedStyle(tag);

    const backgroundColor = computedStyle.getPropertyValue('background-color');
    const borderStyle = computedStyle.getPropertyValue('border');

    const hexColor = rgbToHex(backgroundColor);

    expect(tag, 'Tag should be rendered in the document').toBeInTheDocument();

    expect(tag, 'The tag should contain the label "Label"').toHaveTextContent(
      'Label'
    );

    expect(hexColor, 'The background color should be empty').toBe(
      'rgba(0, 0, 0, 0)'
    );

    expect(borderStyle, 'The tag should contain a border').toContain(
      '1px solid'
    );

    expect(svgElements, 'It should contain only one SVG').toHaveLength(1);

    expect(
      firstChild?.firstElementChild?.tagName,
      'The first element of the tag should be an svg'
    ).toBe('svg');
  },
};

export const WithCloseAction: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'filled',
    onClose: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tag = canvas.getByRole('button');

    const svgElements = tag.querySelectorAll('svg');
    const lastChild = tag.lastElementChild as HTMLElement;

    const computedStyle = getComputedStyle(tag);

    const backgroundColor = computedStyle.getPropertyValue('background-color');

    const hexColor = rgbToHex(backgroundColor);

    expect(tag, 'Tag should be rendered in the document').toBeInTheDocument();

    expect(tag, 'The tag should contain the label "Label"').toHaveTextContent(
      'Label'
    );
    expect(svgElements, 'It should contain only one SVG').toHaveLength(1);

    expect(hexColor, 'The background color should be white (#FFFFFF)').toBe(
      '#FFFFFF'
    );

    await step('Click tag test', async () => {
      lastChild.click();
    });

    await waitFor(() =>
      expect(
        args.onClose,
        'When click on the close icon, onClose event should be called at least once'
      ).toHaveBeenCalledOnce()
    );
  },
};

export const withFocusAction: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'filled',
    onClose: undefined,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tag = canvas.getByRole('button') as HTMLElement;

    const computedStyle = getComputedStyle(tag);

    const backgroundColor = computedStyle.getPropertyValue('background-color');

    const hexColor = rgbToHex(backgroundColor);

    expect(tag, 'Tag should be rendered in the document').toBeInTheDocument();

    expect(tag, 'The tag should contain the label "Label"').toHaveTextContent(
      'Label'
    );

    expect(hexColor, 'The background color should be white (#FFFFFF)').toBe(
      '#FFFFFF'
    );

    await step('Focus tag test', async () => {
      await waitFor(async () => {
        tag.focus();
      });

      await waitFor(() => {
        tag.focus();
        const computedStyle = getComputedStyle(tag);
        const backgroundColor =
          computedStyle.getPropertyValue('background-color');

        const hexColor = rgbToHex(backgroundColor);

        expect(
          hexColor,
          'When tag is focused the background color should be "#0053DB"'
        ).toBe('#0053DB');
      });
    });
  },
};
