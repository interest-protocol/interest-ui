import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, waitFor, within } from '@storybook/test';
import React from 'react';

import { PlusIcon, SwapIcon } from '../../../../storybook/icons';
import { Button } from '..';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['filled', 'outline', 'text', 'tonal'],
      control: { type: 'select' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    isIcon: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);

    const background = computedStyle.getPropertyValue('background');

    // check if the label is being render
    expect(button).toHaveTextContent('Label');

    //check if has a valid background
    expect(background.trim()).toBeTruthy();
  },
};

export const FilledWithPrefix: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElements = button.querySelectorAll('svg');
    expect(svgElements).toHaveLength(1);

    const firstChild = button.firstElementChild;
    const elementTag = firstChild && firstChild.tagName.toLowerCase();

    // check if the first child in the button is an svg and if it is in the document
    expect(firstChild).toBeInTheDocument();
    expect(firstChild).toBeVisible();
    expect(elementTag).toEqual('svg');
  },
};

export const FilledWithSuffix: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElements = button.querySelectorAll('svg');
    expect(svgElements).toHaveLength(1);

    const lastChild = button.lastElementChild;
    const elementTag = lastChild && lastChild.tagName.toLowerCase();

    // check if the last child in the button is an svg and if it is in the document
    expect(lastChild).toBeInTheDocument();
    expect(lastChild).toBeVisible();
    expect(elementTag).toEqual('svg');
  },
};

export const FilledWithCombined: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElements = button.querySelectorAll('svg');
    expect(svgElements.length).toBe(2);

    const firstChild = button.firstElementChild as SVGElement;
    const firstChildTag = firstChild && firstChild.tagName.toLowerCase();

    const lastChild = button.lastElementChild as SVGElement;
    const lastChildTag = lastChild && lastChild.tagName.toLowerCase();

    // check if the last and the first chiold in the button, are visibles
    expect(lastChild).toBeInTheDocument();
    expect(lastChild).toBeVisible();
    expect(lastChildTag).toEqual('svg');

    expect(firstChild).toBeInTheDocument();
    expect(firstChild).toBeVisible();
    expect(firstChildTag).toEqual('svg');
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    disabled: false,
  },
};

export const OutlineWithPrefix: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const OutlineWithSuffix: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const OutlineWithCombined: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    disabled: false,
  },
};

export const TextWithPrefix: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const TextWithSuffix: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const TextWithCombined: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const SmallTextWithCombined: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const Tonal: Story = {
  args: {
    variant: 'tonal',
    children: 'Label',
    disabled: false,
  },
};

export const TonalWithSuffix: Story = {
  args: {
    variant: 'tonal',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const TonalWithCombined: Story = {
  args: {
    variant: 'tonal',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const Icon: Story = {
  args: {
    variant: 'filled',
    children: <SwapIcon />,
    disabled: false,
    isIcon: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    const parentChildrens = button.childNodes;
    expect(parentChildrens).toHaveLength(1);

    const parentOnlyChild = button.firstElementChild;

    expect(parentOnlyChild?.tagName.trim()).toBe('svg');
  },
};

export const ButtonWithAction: Story = {
  args: {
    variant: 'outline',
    children: 'Press here',
    disabled: false,
    selected: false,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    //click on button
    await step('click on button', () => {
      button.click();
    });

    //expect the event to be called only once, because the button was click only one time
    await waitFor(() => expect(args.onClick).toHaveBeenCalledOnce());
  },
};

export const DisabledButton: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    disabled: true,
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');

    const computedStyle = getComputedStyle(button);

    const cursor = computedStyle.getPropertyValue('cursor');
    const opacity = Number(computedStyle.getPropertyValue('opacity'));

    button.click();

    expect(button).toBeDisabled();
    expect(cursor).toBe('not-allowed');
    expect(opacity).toBeLessThan(1);

    //expect the event to not be called, because the button is disabled
    await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(0));
  },
};
