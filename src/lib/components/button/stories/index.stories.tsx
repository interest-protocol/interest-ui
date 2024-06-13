import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
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
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);

    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(255, 255, 255)');
      expect(cursor).toBe('pointer');
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('filled');
      expect(args.children).toBe('Label');
      expect(args.disabled).toBeFalsy();
    });
  },
};

export const FilledWithPrefix: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    disabled: false,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);

    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElements = button.querySelectorAll('svg');
    expect(svgElements).toHaveLength(1);

    const firstChild = button.firstElementChild;
    const elementTag = firstChild && firstChild.tagName.toLowerCase();

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    // check if the first child in the button is an svg and if it is in the document
    await step('Button icon as SVG test', async () => {
      expect(firstChild).toBeInTheDocument();
      expect(firstChild).toBeVisible();
      expect(elementTag).toEqual('svg');
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(255, 255, 255)');
      expect(cursor).toBe('pointer');
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('filled');
      expect(args.children).toBe('Label');
      expect(args.disabled).toBeFalsy();
    });
  },
};

export const FilledWithSuffix: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);

    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElements = button.querySelectorAll('svg');
    expect(svgElements).toHaveLength(1);

    const lastChild = button.lastElementChild;
    const elementTag = lastChild && lastChild.tagName.toLowerCase();

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    // check if the last child in the button is an svg and if it is in the document
    await step('Button icon as SVG test', async () => {
      expect(lastChild).toBeInTheDocument();
      expect(lastChild).toBeVisible();
      expect(elementTag).toEqual('svg');
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(255, 255, 255)');
      expect(cursor).toBe('pointer');
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('filled');
      expect(args.children).toBe('Label');
      expect(args.disabled).toBeFalsy();
    });
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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElements = button.querySelectorAll('svg');
    expect(svgElements.length).toBe(2);

    const firstChild = button.firstElementChild as SVGElement;
    const firstChildTag = firstChild && firstChild.tagName.toLowerCase();

    const lastChild = button.lastElementChild as SVGElement;
    const lastChildTag = lastChild && lastChild.tagName.toLowerCase();

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    // check if the last child in the button is an svg and if it is in the document
    await step('Button icon as SVG test', async () => {
      expect(lastChild).toBeInTheDocument();
      expect(lastChild).toBeVisible();
    });

    // check if the last and the first child in the button, are visible
    await step('Button args test', async () => {
      expect(lastChild).toBeInTheDocument();
      expect(lastChild).toBeVisible();
      expect(lastChildTag).toEqual('svg');

      expect(firstChild).toBeInTheDocument();
      expect(firstChild).toBeVisible();
      expect(firstChildTag).toEqual('svg');
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(255, 255, 255)');
      expect(cursor).toBe('pointer');
    });
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    disabled: false,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('outline');
      expect(args.children).toBe('Label');
      expect(args.disabled).toBeFalsy();
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(0, 0, 0)');
      expect(cursor).toBe('pointer');
    });
  },
};

export const OutlineWithPrefix: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    disabled: false,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('outline');
      expect(args.children).toBe('Label');
      expect(args.disabled).toBeFalsy();
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(0, 0, 0)');
      expect(cursor).toBe('pointer');
    });
  },
};

export const OutlineWithSuffix: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('outline');
      expect(args.children).toBe('Label');
      expect(args.disabled).toBeFalsy();
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(0, 0, 0)');
      expect(cursor).toBe('pointer');
    });
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
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('outline');
      expect(args.children).toBe('Label');
      expect(args.disabled).toBeFalsy();
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(0, 0, 0)');
      expect(cursor).toBe('pointer');
    });
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    disabled: false,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('text');
      expect(args.children).toBe('Label');
      expect(args.disabled).toBeFalsy();
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(0, 0, 0)');
      expect(cursor).toBe('pointer');
    });
  },
};

export const TextWithPrefix: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    disabled: false,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('text');
      expect(args.children).toBe('Label');
      expect(args.disabled).toBeFalsy();
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(0, 0, 0)');
      expect(cursor).toBe('pointer');
    });
  },
};

export const TextWithSuffix: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('text');
      expect(args.children).toBe('Label');
      expect(args.disabled).toBeFalsy();
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(0, 0, 0)');
      expect(cursor).toBe('pointer');
    });
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
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('text');
      expect(args.children).toBe('Label');
      expect(args.disabled).toBeFalsy();
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(0, 0, 0)');
      expect(cursor).toBe('pointer');
    });
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
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('text');
      expect(args.children).toBe('Label');
      expect(args.disabled).toBeFalsy();
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(0, 0, 0)');
      expect(cursor).toBe('pointer');
    });
  },
};

export const Tonal: Story = {
  args: {
    variant: 'tonal',
    children: 'Label',
    disabled: false,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('tonal');
      expect(args.children).toBe('Label');
      expect(args.disabled).toBeFalsy();
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(0, 0, 0)');
      expect(cursor).toBe('pointer');
    });
  },
};

export const TonalWithSuffix: Story = {
  args: {
    variant: 'tonal',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    disabled: false,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('tonal');
      expect(args.children).toBe('Label');
      expect(args.disabled).toBeFalsy();
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(0, 0, 0)');
      expect(cursor).toBe('pointer');
    });
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
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('tonal');
      expect(args.children).toBe('Label');
      expect(args.disabled).toBeFalsy();
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(0, 0, 0)');
      expect(cursor).toBe('pointer');
    });
  },
};

export const Icon: Story = {
  args: {
    variant: 'filled',
    children: <SwapIcon />,
    disabled: false,
    isIcon: true,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    const parentChildren = button.childNodes;
    expect(parentChildren).toHaveLength(1);

    const parentOnlyChild = button.firstElementChild;

    expect(parentOnlyChild?.tagName.trim()).toBe('svg');

    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('filled');
    });

    await step('Button style test', async () => {
      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(255, 255, 255)');
      expect(cursor).toBe('pointer');
    });
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
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');
    const cursor = computedStyle.getPropertyValue('cursor');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));
    });

    await step('Hover button test', async () => {
      await userEvent.hover(canvas.getByRole('button'));
    });

    await step('Unhover button test', async () => {
      await userEvent.unhover(canvas.getByRole('button'));
    });

    await step('Button args test', async () => {
      expect(args.variant).toBe('outline');
      expect(args.children).toBe('Press here');
      expect(args.disabled).toBeFalsy();
      expect(args.selected).toBeFalsy();
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Press here');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(0, 0, 0)');
      expect(cursor).toBe('pointer');
    });
  },
};

export const DisabledButton: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    disabled: true,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');

    const computedStyle = getComputedStyle(button);

    const cursor = computedStyle.getPropertyValue('cursor');
    const opacity = Number(computedStyle.getPropertyValue('opacity'));
    const background = computedStyle.getPropertyValue('background');
    const color = computedStyle.getPropertyValue('color');

    await step('Button args test', async () => {
      expect(args.variant).toBe('filled');
      expect(args.children).toBe('Label');
      expect(args.disabled).toBeTruthy();
      expect(args.selected).toBeFalsy();
      //expect the event to not be called, because the button is disabled
      await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(0));
    });

    await step('Button style test', async () => {
      expect(button).toHaveTextContent('Label');

      expect(background.trim()).toBeTruthy();
      expect(color).toBe('rgb(27, 27, 31)');
      expect(cursor).toBe('not-allowed');
      expect(opacity).toBeLessThan(1);
    });

    expect(button).toBeDisabled();
  },
};
