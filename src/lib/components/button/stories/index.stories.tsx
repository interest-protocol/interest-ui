import { Meta, StoryObj } from '@storybook/react';
import { clearAllMocks, expect, fn, userEvent, within } from '@storybook/test';
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
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    let button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);

    const color = computedStyle.getPropertyValue('color');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).toHaveBeenCalledTimes(2);
    });

    clearAllMocks();

    await step('Hover button test', async () => {
      await userEvent.pointer({ target: button, keys: '[MouseLeft>]' });
      await userEvent.pointer({ target: button, offset: 3 });

      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);

      const background = computedStyle.getPropertyValue('background');

      expect(
        background,
        `It expects that the background contains "linear-gradient(0deg, rgba(255, 255, 255, 0.133), rgba(255, 255, 255, 0.133))"`
      ).toContain(
        'linear-gradient(0deg, rgba(255, 255, 255, 0.133), rgba(255, 255, 255, 0.133))'
      );
    });

    clearAllMocks();

    await step('Focus button test', async () => {
      button.focus();

      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);

      const background = computedStyle.getPropertyValue('background');

      expect(
        background,
        `It expects that the background contains "linear-gradient(0deg, rgba(255, 255, 255, 0.133), rgba(255, 255, 255, 0.133))"`
      ).toContain(
        'linear-gradient(0deg, rgba(255, 255, 255, 0.133), rgba(255, 255, 255, 0.133))'
      );
    });

    clearAllMocks();

    await step('Button style test', async () => {
      expect(button, 'It should render the text correctly').toHaveTextContent(
        'Label'
      );

      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(
        backgroundColor,
        'It expects that the background color is "rgb(0, 83, 219)"'
      ).toBe('rgb(0, 83, 219)');
      expect(color, 'The color style should be "rgb(255, 255, 255)"').toBe(
        'rgb(255, 255, 255)'
      );
      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: pointer'
      );
    });

    clearAllMocks();

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant must be "filled"').toBe(
        'filled'
      );
      expect(args.children, 'The argument children must be "Label"').toBe(
        'Label'
      );
      expect(
        args.disabled,
        'The argument disabled must be "false"'
      ).toBeFalsy();
    });
  },
};

export const FilledWithPrefix: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    disabled: false,
    onClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    let button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);

    const color = computedStyle.getPropertyValue('color');

    const svgElements = button.querySelectorAll('svg');
    expect(svgElements).toHaveLength(1);

    const firstChild = button.firstElementChild;
    const elementTag = firstChild && firstChild.tagName.toLowerCase();

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).toHaveBeenCalledTimes(2);
    });

    clearAllMocks();

    await step('Hover button test', async () => {
      await userEvent.pointer({ target: button, keys: '[MouseLeft>]' });
      await userEvent.pointer({ target: button, offset: 3 });

      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);

      const background = computedStyle.getPropertyValue('background');

      expect(
        background,
        `It expects that the background contains "linear-gradient(0deg, rgba(255, 255, 255, 0.133), rgba(255, 255, 255, 0.133))"`
      ).toContain(
        'linear-gradient(0deg, rgba(255, 255, 255, 0.133), rgba(255, 255, 255, 0.133))'
      );
    });

    clearAllMocks();

    await step('Button icon as SVG test', async () => {
      expect(
        firstChild,
        'The first child of the button must be rendered'
      ).toBeInTheDocument();
      expect(
        firstChild,
        'The first element of the button must be visible'
      ).toBeVisible();
      expect(elementTag, 'The tag of the first child should be an svg').toEqual(
        'svg'
      );
    });

    await step('Button style test', async () => {
      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(button, 'It should render the text correctly').toHaveTextContent(
        'Label'
      );

      expect(
        backgroundColor,
        'It expects that the background color is "rgb(0, 83, 219)"'
      ).toBe('rgb(0, 83, 219)');

      expect(color, 'The color style should be "rgb(255, 255, 255)"').toBe(
        'rgb(255, 255, 255)'
      );

      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: pointer'
      );
    });

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant must be "filled"').toBe(
        'filled'
      );
      expect(args.children, 'The argument children must be "Label"').toBe(
        'Label'
      );
      expect(
        args.disabled,
        'The argument disabled must be "false"'
      ).toBeFalsy();
    });
  },
};

export const FilledWithSuffix: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    SuffixIcon: <PlusIcon />,
    disabled: false,
    onClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    let button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);

    const color = computedStyle.getPropertyValue('color');

    const svgElements = button.querySelectorAll('svg');
    expect(svgElements).toHaveLength(1);

    const lastChild = button.lastElementChild;
    const elementTag = lastChild && lastChild.tagName.toLowerCase();

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).toHaveBeenCalledTimes(2);
    });

    clearAllMocks();

    await step('Hover button test', async () => {
      await userEvent.pointer({ target: button, keys: '[MouseLeft>]' });
      await userEvent.pointer({ target: button, offset: 3 });

      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);

      const background = computedStyle.getPropertyValue('background');

      expect(
        background,
        `It expects that the background contains "linear-gradient(0deg, rgba(255, 255, 255, 0.133), rgba(255, 255, 255, 0.133))"`
      ).toContain(
        'linear-gradient(0deg, rgba(255, 255, 255, 0.133), rgba(255, 255, 255, 0.133))'
      );
    });

    clearAllMocks();

    await step('Button icon as SVG test', async () => {
      expect(
        lastChild,
        'The last child of the button must be rendered'
      ).toBeInTheDocument();
      expect(
        lastChild,
        'The last element of the button must be visible'
      ).toBeVisible();
      expect(elementTag, 'The tag of the last child should be an svg').toEqual(
        'svg'
      );
    });

    await step('Button style test', async () => {
      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(button, 'It should render the text correctly').toHaveTextContent(
        'Label'
      );

      expect(
        backgroundColor,
        'It expects that the background color is "rgb(0, 83, 219)"'
      ).toBe('rgb(0, 83, 219)');

      expect(color, 'The color style should be "rgb(255, 255, 255)"').toBe(
        'rgb(255, 255, 255)'
      );

      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: pointer'
      );
    });

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant must be "filled"').toBe(
        'filled'
      );
      expect(args.children, 'The argument children must be "Label"').toBe(
        'Label'
      );
      expect(
        args.disabled,
        'The argument disabled must be "false"'
      ).toBeFalsy();
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
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    let button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const color = computedStyle.getPropertyValue('color');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElements = button.querySelectorAll('svg');
    expect(svgElements.length).toBe(2);

    const firstChild = button.firstElementChild as SVGElement;
    const firstChildTag = firstChild && firstChild.tagName.toLowerCase();

    const lastChild = button.lastElementChild as SVGElement;
    const lastChildTag = lastChild && lastChild.tagName.toLowerCase();

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).toHaveBeenCalledTimes(2);
    });

    clearAllMocks();

    await step('Hover button test', async () => {
      await userEvent.pointer({ target: button, keys: '[MouseLeft>]' });
      await userEvent.pointer({ target: button, offset: 3 });

      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);

      const background = computedStyle.getPropertyValue('background');

      expect(
        background,
        `It expects that the background contains "linear-gradient(0deg, rgba(255, 255, 255, 0.133), rgba(255, 255, 255, 0.133))"`
      ).toContain(
        'linear-gradient(0deg, rgba(255, 255, 255, 0.133), rgba(255, 255, 255, 0.133))'
      );
    });

    clearAllMocks();

    await step('Button icon as SVG test', async () => {
      expect(
        firstChild,
        'The first child of the button must be rendered'
      ).toBeInTheDocument();
      expect(
        firstChild,
        'The first element of the button must be visible'
      ).toBeVisible();
      expect(
        firstChildTag,
        'The tag of the first child should be an svg'
      ).toEqual('svg');

      expect(
        lastChild,
        'The last child of the button must be rendered'
      ).toBeInTheDocument();

      expect(
        lastChild,
        'The last element of the button must be visible'
      ).toBeVisible();
      expect(
        lastChildTag,
        'The tag of the last child should be an svg'
      ).toEqual('svg');
    });

    await step('Button style test', async () => {
      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(button, 'It should render the text correctly').toHaveTextContent(
        'Label'
      );

      expect(
        backgroundColor,
        'It expects that the background color is "rgb(0, 83, 219)"'
      ).toBe('rgb(0, 83, 219)');

      expect(color, 'The color style should be "rgb(255, 255, 255)"').toBe(
        'rgb(255, 255, 255)'
      );

      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: pointer'
      );
    });

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant must be "filled"').toBe(
        'filled'
      );
      expect(args.children, 'The argument children must be "Label"').toBe(
        'Label'
      );
      expect(
        args.disabled,
        'The argument disabled must be "false"'
      ).toBeFalsy();
    });
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    disabled: false,
    onClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    let button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const color = computedStyle.getPropertyValue('color');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).toHaveBeenCalledTimes(2);
    });

    clearAllMocks();

    await step('Hover button test', async () => {
      await userEvent.pointer({ target: button, keys: '[MouseLeft>]' });
      await userEvent.pointer({ target: button, offset: 3 });

      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);

      const background = computedStyle.getPropertyValue('background');

      expect(
        background,
        `It expects that the background contains "rgba(0, 0, 0, 0)"`
      ).toContain('rgba(0, 0, 0, 0)');

      expect(
        button,
        `It expects that the border color style to be "rgb(0, 83, 219)"`
      ).toHaveStyle('border-color: rgb(0, 83, 219)');

      expect(
        button,
        `It expects that the color style to be "rgb(0, 83, 219)"`
      ).toHaveStyle('color: rgb(0, 83, 219)');
    });

    clearAllMocks();

    await step('Button style test', async () => {
      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(button, 'It should render the text correctly').toHaveTextContent(
        'Label'
      );

      expect(
        backgroundColor,
        'It expects that the background color is "transparent"'
      ).toBe('rgba(0, 0, 0, 0)');

      expect(color, 'The color style should be "rgb(0, 0, 0)"').toBe(
        'rgb(0, 0, 0)'
      );

      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: pointer'
      );

      expect(button, 'The border style should be "1px solid"').toHaveStyle(
        'border: 1px solid rgb(0, 83, 219)'
      );
    });

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant msut be "outline"').toBe(
        'outline'
      );
      expect(args.children, 'The argument children must be "Label"').toBe(
        'Label'
      );
      expect(
        args.disabled,
        'The argument disabled must be "false"'
      ).toBeFalsy();
    });
  },
};

export const OutlineWithPrefix: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    disabled: false,
    onClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    let button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const color = computedStyle.getPropertyValue('color');
    const svgElements = button.querySelectorAll('svg');
    expect(svgElements).toHaveLength(1);

    const firstChild = button.firstElementChild;
    const elementTag = firstChild && firstChild.tagName.toLowerCase();

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).toHaveBeenCalledTimes(2);
    });

    clearAllMocks();

    await step('Button icon as SVG test', async () => {
      expect(
        firstChild,
        'The first child of the button must be rendered'
      ).toBeInTheDocument();
      expect(
        firstChild,
        'The first element of the button must be visible'
      ).toBeVisible();
      expect(elementTag, 'The tag of the first child should be an svg').toEqual(
        'svg'
      );
    });

    await step('Button style test', async () => {
      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(button, 'It should render the text correctly').toHaveTextContent(
        'Label'
      );

      expect(
        backgroundColor,
        'It expects that the background color is "transparent"'
      ).toBe('rgba(0, 0, 0, 0)');

      expect(color, 'The color style should be "rgb(0, 0, 0)"').toBe(
        'rgb(0, 0, 0)'
      );

      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: pointer'
      );

      expect(button, 'The border style should be "1px solid"').toHaveStyle(
        'border: 1px solid rgb(0, 83, 219)'
      );
    });

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant msut be "outline"').toBe(
        'outline'
      );
      expect(args.children, 'The argument children must be "Label"').toBe(
        'Label'
      );
      expect(
        args.disabled,
        'The argument disabled must be "false"'
      ).toBeFalsy();
    });
  },
};

export const OutlineWithSuffix: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    SuffixIcon: <PlusIcon />,
    disabled: false,
    onClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    let button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const color = computedStyle.getPropertyValue('color');
    const svgElements = button.querySelectorAll('svg');
    expect(svgElements).toHaveLength(1);

    const lastChild = button.lastElementChild;
    const elementTag = lastChild && lastChild.tagName.toLowerCase();

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).toHaveBeenCalledTimes(2);
    });

    clearAllMocks();

    await step('Button icon as SVG test', async () => {
      expect(
        lastChild,
        'The last child of the button must be rendered'
      ).toBeInTheDocument();
      expect(
        lastChild,
        'The last element of the button must be visible'
      ).toBeVisible();
      expect(elementTag, 'The tag of the first child should be an svg').toEqual(
        'svg'
      );
    });

    await step('Button style test', async () => {
      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(button, 'It should render the text correctly').toHaveTextContent(
        'Label'
      );

      expect(
        backgroundColor,
        'It expects that the background color is "transparent"'
      ).toBe('rgba(0, 0, 0, 0)');

      expect(color, 'The color style should be "rgb(0, 0, 0)"').toBe(
        'rgb(0, 0, 0)'
      );

      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: pointer'
      );

      expect(button, 'The border style should be "1px solid"').toHaveStyle(
        'border: 1px solid rgb(0, 83, 219)'
      );
    });

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant msut be "outline"').toBe(
        'outline'
      );
      expect(args.children, 'The argument children must be "Label"').toBe(
        'Label'
      );
      expect(
        args.disabled,
        'The argument disabled must be "false"'
      ).toBeFalsy();
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
    onClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    let button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const color = computedStyle.getPropertyValue('color');

    const svgElements = button.querySelectorAll('svg');
    expect(svgElements.length).toBe(2);

    const firstChild = button.firstElementChild as SVGElement;
    const firstChildTag = firstChild && firstChild.tagName.toLowerCase();

    const lastChild = button.lastElementChild as SVGElement;
    const lastChildTag = lastChild && lastChild.tagName.toLowerCase();

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).toHaveBeenCalledTimes(2);
    });

    clearAllMocks();

    await step('Button icon as SVG test', async () => {
      expect(
        firstChild,
        'The first child of the button must be rendered'
      ).toBeInTheDocument();

      expect(
        firstChild,
        'The first element of the button must be visible'
      ).toBeVisible();

      expect(
        firstChildTag,
        'The tag of the first child should be an svg'
      ).toEqual('svg');

      expect(
        lastChild,
        'The last child of the button must be rendered'
      ).toBeInTheDocument();

      expect(
        lastChild,
        'The last element of the button must be visible'
      ).toBeVisible();

      expect(
        lastChildTag,
        'The tag of the last child should be an svg'
      ).toEqual('svg');
    });

    await step('Button style test', async () => {
      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(button, 'It should render the text correctly').toHaveTextContent(
        'Label'
      );

      expect(
        backgroundColor,
        'It expects that the background color is "transparent"'
      ).toBe('rgba(0, 0, 0, 0)');

      expect(color, 'The color style should be "rgb(0, 0, 0)"').toBe(
        'rgb(0, 0, 0)'
      );

      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: pointer'
      );

      expect(button, 'The border style should be "1px solid"').toHaveStyle(
        'border: 1px solid rgb(0, 83, 219)'
      );
    });

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant msut be "outline"').toBe(
        'outline'
      );
      expect(args.children, 'The argument children must be "Label"').toBe(
        'Label'
      );
      expect(
        args.disabled,
        'The argument disabled must be "false"'
      ).toBeFalsy();
    });
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    disabled: false,
    onClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    let button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const color = computedStyle.getPropertyValue('color');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).toHaveBeenCalledTimes(2);
    });

    clearAllMocks();

    await step('Hover button test', async () => {
      await userEvent.pointer({ target: button, keys: '[MouseLeft>]' });
      await userEvent.pointer({ target: button, offset: 3 });

      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);

      const background = computedStyle.getPropertyValue('background');

      expect(
        background,
        `It expects that the background contains "rgba(0, 0, 0, 0)"`
      ).toContain('rgba(0, 0, 0, 0)');

      expect(
        button,
        `It expects that the color style to be "rgb(0, 0, 0)"`
      ).toHaveStyle('color: rgb(0, 0, 0)');
    });

    clearAllMocks();

    await step('Button style test', async () => {
      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(button, 'It should render the text correctly').toHaveTextContent(
        'Label'
      );

      expect(
        backgroundColor,
        'It expects that the background color to be "rgba(0, 0, 0, 0)"'
      ).toBe('rgba(0, 0, 0, 0)');

      expect(color, 'The color style should be "rgb(0, 0, 0)"').toBe(
        'rgb(0, 0, 0)'
      );

      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: pointer'
      );

      expect(
        button,
        'The border style should be "0px none rgb(0, 0, 0)"'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
    });

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant must be "text"').toBe('text');
      expect(args.children, 'The argument children must be "Label"').toBe(
        'Label'
      );
      expect(
        args.disabled,
        'The argument disabled must be "false"'
      ).toBeFalsy();
    });
  },
};

export const TextWithPrefix: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    disabled: false,
    onClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    let button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const color = computedStyle.getPropertyValue('color');

    const svgElements = button.querySelectorAll('svg');
    expect(
      svgElements,
      'It expects that the button only have one svg'
    ).toHaveLength(1);

    const firstChild = button.firstElementChild;
    const elementTag = firstChild && firstChild.tagName.toLowerCase();

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).toHaveBeenCalledTimes(2);
    });

    clearAllMocks();

    await step('Hover button test', async () => {
      await userEvent.pointer({ target: button, keys: '[MouseLeft>]' });
      await userEvent.pointer({ target: button, offset: 3 });

      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);

      const background = computedStyle.getPropertyValue('background');

      expect(
        background,
        `It expects that the background contains "rgba(0, 0, 0, 0)"`
      ).toContain('rgba(0, 0, 0, 0)');

      expect(
        button,
        `It expects that the color style to be "rgb(0, 0, 0)"`
      ).toHaveStyle('color: rgb(0, 0, 0)');
    });

    clearAllMocks();

    await step('Button icon as SVG test', async () => {
      expect(
        firstChild,
        'The first child of the button must be rendered'
      ).toBeInTheDocument();
      expect(
        firstChild,
        'The first element of the button must be visible'
      ).toBeVisible();
      expect(elementTag, 'The tag of the first child should be an svg').toEqual(
        'svg'
      );
    });

    await step('Button style test', async () => {
      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(button, 'It should render the text correctly').toHaveTextContent(
        'Label'
      );

      expect(
        backgroundColor,
        'It expects that the background color to be "rgba(0, 0, 0, 0)"'
      ).toBe('rgba(0, 0, 0, 0)');

      expect(color, 'The color style should be "rgb(0, 0, 0)"').toBe(
        'rgb(0, 0, 0)'
      );

      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: pointer'
      );

      expect(
        button,
        'The border style should be "0px none rgb(0, 0, 0)"'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
    });

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant must be "text"').toBe('text');
      expect(args.children, 'The argument children must be "Label"').toBe(
        'Label'
      );
      expect(
        args.disabled,
        'The argument disabled must be "false"'
      ).toBeFalsy();
    });
  },
};

export const TextWithSuffix: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    SuffixIcon: <PlusIcon />,
    disabled: false,
    onClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    let button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const color = computedStyle.getPropertyValue('color');

    const svgElements = button.querySelectorAll('svg');
    expect(
      svgElements,
      'It expects that the button only have one svg'
    ).toHaveLength(1);

    const lastChild = button.lastElementChild;
    const elementTag = lastChild && lastChild.tagName.toLowerCase();

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).toHaveBeenCalledTimes(2);
    });
    clearAllMocks();

    await step('Hover button test', async () => {
      await userEvent.pointer({ target: button, keys: '[MouseLeft>]' });
      await userEvent.pointer({ target: button, offset: 3 });

      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);

      const background = computedStyle.getPropertyValue('background');

      expect(
        background,
        `It expects that the background contains "rgba(0, 0, 0, 0)"`
      ).toContain('rgba(0, 0, 0, 0)');

      expect(
        button,
        `It expects that the color style to be "rgb(0, 0, 0)"`
      ).toHaveStyle('color: rgb(0, 0, 0)');
    });

    clearAllMocks();

    await step('Button icon as SVG test', async () => {
      expect(
        lastChild,
        'The last child of the button must be rendered'
      ).toBeInTheDocument();
      expect(
        lastChild,
        'The last element of the button must be visible'
      ).toBeVisible();
      expect(elementTag, 'The tag of the last child should be an svg').toEqual(
        'svg'
      );
    });

    await step('Button style test', async () => {
      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(button, 'It should render the text correctly').toHaveTextContent(
        'Label'
      );

      expect(
        backgroundColor,
        'It expects that the background color to be "rgba(0, 0, 0, 0)"'
      ).toBe('rgba(0, 0, 0, 0)');

      expect(color, 'The color style should be "rgb(0, 0, 0)"').toBe(
        'rgb(0, 0, 0)'
      );

      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: pointer'
      );

      expect(
        button,
        'The border style should be "0px none rgb(0, 0, 0)"'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
    });

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant must be "text"').toBe('text');
      expect(args.children, 'The argument children must be "Label"').toBe(
        'Label'
      );
      expect(
        args.disabled,
        'The argument disabled must be "false"'
      ).toBeFalsy();
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
    onClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    let button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const color = computedStyle.getPropertyValue('color');
    const svgElements = button.querySelectorAll('svg');
    expect(svgElements.length).toBe(2);

    const firstChild = button.firstElementChild as SVGElement;
    const firstChildTag = firstChild && firstChild.tagName.toLowerCase();

    const lastChild = button.lastElementChild as SVGElement;
    const lastChildTag = lastChild && lastChild.tagName.toLowerCase();

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).toHaveBeenCalledTimes(2);
    });
    clearAllMocks();

    await step('Hover button test', async () => {
      await userEvent.pointer({ target: button, keys: '[MouseLeft>]' });
      await userEvent.pointer({ target: button, offset: 3 });

      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);

      const background = computedStyle.getPropertyValue('background');

      expect(
        background,
        `It expects that the background contains "rgba(0, 0, 0, 0)"`
      ).toContain('rgba(0, 0, 0, 0)');

      expect(
        button,
        `It expects that the color style to be "rgb(0, 0, 0)"`
      ).toHaveStyle('color: rgb(0, 0, 0)');
    });

    clearAllMocks();

    await step('Button icon as SVG test', async () => {
      expect(
        firstChild,
        'The first child of the button must be rendered'
      ).toBeInTheDocument();
      expect(
        firstChild,
        'The first element of the button must be visible'
      ).toBeVisible();
      expect(
        firstChildTag,
        'The tag of the first child should be an svg'
      ).toEqual('svg');

      expect(
        lastChild,
        'The last child of the button must be rendered'
      ).toBeInTheDocument();

      expect(
        lastChild,
        'The last element of the button must be visible'
      ).toBeVisible();
      expect(
        lastChildTag,
        'The tag of the last child should be an svg'
      ).toEqual('svg');
    });

    await step('Button style test', async () => {
      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(button, 'It should render the text correctly').toHaveTextContent(
        'Label'
      );

      expect(
        backgroundColor,
        'It expects that the background color to be "rgba(0, 0, 0, 0)"'
      ).toBe('rgba(0, 0, 0, 0)');

      expect(color, 'The color style should be "rgb(0, 0, 0)"').toBe(
        'rgb(0, 0, 0)'
      );

      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: pointer'
      );

      expect(
        button,
        'The border style should be "0px none rgb(0, 0, 0)"'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
    });

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant must be "text"').toBe('text');
      expect(args.children, 'The argument children must be "Label"').toBe(
        'Label'
      );
      expect(
        args.disabled,
        'The argument disabled must be "false"'
      ).toBeFalsy();
    });
  },
};

export const Tonal: Story = {
  args: {
    variant: 'tonal',
    children: 'Label',
    disabled: false,
    onClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    let button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const color = computedStyle.getPropertyValue('color');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).toHaveBeenCalledTimes(2);
    });

    clearAllMocks();

    await step('Hover button test', async () => {
      await userEvent.hover(button);
      await userEvent.pointer({ target: button, keys: '[MouseLeft>]' });

      const computedStyle = getComputedStyle(button);

      const background = computedStyle.getPropertyValue('background');

      console.log('background', background);

      expect(
        background,
        `It expects that the background contains "rgba(0, 83, 219, 0.08)"`
      ).toContain('rgba(0, 83, 219, 0.08)');
    });

    clearAllMocks();

    await step('Button style test', async () => {
      expect(button, 'It should render the text correctly').toHaveTextContent(
        'Label'
      );

      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(
        backgroundColor,
        'It expects that the background color to be "rgba(0, 83, 219, 0.08)"'
      ).toBe('rgba(0, 83, 219, 0.08)');
      expect(color, 'The color style should be "rgb(0, 0, 0)"').toBe(
        'rgb(0, 0, 0)'
      );
      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: pointer'
      );
    });

    clearAllMocks();

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant must be "tonal"').toBe(
        'tonal'
      );
      expect(args.children, 'The argument children must be "Label"').toBe(
        'Label'
      );
      expect(
        args.disabled,
        'The argument disabled must be "false"'
      ).toBeFalsy();
    });
  },
};

export const TonalWithSuffix: Story = {
  args: {
    variant: 'tonal',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    disabled: false,
    onClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    let button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const color = computedStyle.getPropertyValue('color');

    const svgElements = button.querySelectorAll('svg');
    expect(
      svgElements,
      'It expects that the button only have one svg'
    ).toHaveLength(1);

    const lastChild = button.lastElementChild;
    const elementTag = lastChild && lastChild.tagName.toLowerCase();

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).toHaveBeenCalledTimes(2);
    });

    clearAllMocks();

    await step('Hover button test', async () => {
      await userEvent.hover(button);
      await userEvent.pointer({ target: button, keys: '[MouseLeft>]' });

      const computedStyle = getComputedStyle(button);

      const background = computedStyle.getPropertyValue('background');

      console.log('background', background);

      expect(
        background,
        `It expects that the background contains "rgba(0, 83, 219, 0.08)"`
      ).toContain('rgba(0, 83, 219, 0.08)');
    });

    clearAllMocks();

    await step('Button icon as SVG test', async () => {
      expect(
        lastChild,
        'The last child of the button must be rendered'
      ).toBeInTheDocument();
      expect(
        lastChild,
        'The last element of the button must be visible'
      ).toBeVisible();
      expect(elementTag, 'The tag of the last child should be an svg').toEqual(
        'svg'
      );
    });

    await step('Button style test', async () => {
      expect(button, 'It should render the text correctly').toHaveTextContent(
        'Label'
      );

      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(
        backgroundColor,
        'It expects that the background color to be "rgba(0, 83, 219, 0.08)"'
      ).toBe('rgba(0, 83, 219, 0.08)');
      expect(color, 'The color style should be "rgb(0, 0, 0)"').toBe(
        'rgb(0, 0, 0)'
      );
      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: pointer'
      );
    });

    clearAllMocks();

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant must be "tonal"').toBe(
        'tonal'
      );
      expect(args.children, 'The argument children must be "Label"').toBe(
        'Label'
      );
      expect(
        args.disabled,
        'The argument disabled must be "false"'
      ).toBeFalsy();
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
    onClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    let button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const color = computedStyle.getPropertyValue('color');

    const svgElements = button.querySelectorAll('svg');
    expect(svgElements.length).toBe(2);

    const firstChild = button.firstElementChild as SVGElement;
    const firstChildTag = firstChild && firstChild.tagName.toLowerCase();

    const lastChild = button.lastElementChild as SVGElement;
    const lastChildTag = lastChild && lastChild.tagName.toLowerCase();

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).toHaveBeenCalledTimes(2);
    });

    clearAllMocks();

    await step('Hover button test', async () => {
      await userEvent.hover(button);
      await userEvent.pointer({ target: button, keys: '[MouseLeft>]' });

      const computedStyle = getComputedStyle(button);

      const background = computedStyle.getPropertyValue('background');

      console.log('background', background);

      expect(
        background,
        `It expects that the background contains "rgba(0, 83, 219, 0.08)"`
      ).toContain('rgba(0, 83, 219, 0.08)');
    });

    await step('Button icon as SVG test', async () => {
      expect(
        firstChild,
        'The first child of the button must be rendered'
      ).toBeInTheDocument();

      expect(
        firstChild,
        'The first element of the button must be visible'
      ).toBeVisible();

      expect(
        firstChildTag,
        'The tag of the first child should be an svg'
      ).toEqual('svg');

      expect(
        lastChild,
        'The last child of the button must be rendered'
      ).toBeInTheDocument();

      expect(
        lastChild,
        'The last element of the button must be visible'
      ).toBeVisible();

      expect(
        lastChildTag,
        'The tag of the last child should be an svg'
      ).toEqual('svg');
    });

    await step('Button style test', async () => {
      expect(button, 'It should render the text correctly').toHaveTextContent(
        'Label'
      );

      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(
        backgroundColor,
        'It expects that the background color to be "rgba(0, 83, 219, 0.08)"'
      ).toBe('rgba(0, 83, 219, 0.08)');
      expect(color, 'The color style should be "rgb(0, 0, 0)"').toBe(
        'rgb(0, 0, 0)'
      );
      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: pointer'
      );
    });

    clearAllMocks();

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant must be "tonal"').toBe(
        'tonal'
      );
      expect(args.children, 'The argument children must be "Label"').toBe(
        'Label'
      );
      expect(
        args.disabled,
        'The argument disabled must be "false"'
      ).toBeFalsy();
    });
  },
};

export const Icon: Story = {
  args: {
    variant: 'filled',
    children: <SwapIcon />,
    disabled: false,
    isIcon: true,
    onClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    let button = canvas.getByRole('button');

    const parentChildren = button.childNodes;
    expect(parentChildren).toHaveLength(1);

    const parentOnlyChild = button.firstElementChild;

    const computedStyle = getComputedStyle(button);
    const color = computedStyle.getPropertyValue('color');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).toHaveBeenCalledTimes(2);
    });

    clearAllMocks();

    await step('Hover button test', async () => {
      await userEvent.pointer({ target: button, keys: '[MouseLeft>]' });
      await userEvent.pointer({ target: button, offset: 3 });

      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);

      const background = computedStyle.getPropertyValue('background');

      expect(
        background,
        `It expects that the background contains "linear-gradient(0deg, rgba(255, 255, 255, 0.133), rgba(255, 255, 255, 0.133))"`
      ).toContain(
        'linear-gradient(0deg, rgba(255, 255, 255, 0.133), rgba(255, 255, 255, 0.133))'
      );
    });

    clearAllMocks();

    await step('Button icon as SVG test', async () => {
      expect(
        parentOnlyChild,
        'The only child of the button must be rendered'
      ).toBeInTheDocument();
      expect(
        parentOnlyChild,
        'The only child of the  the button must be visible'
      ).toBeVisible();

      expect(
        parentOnlyChild?.tagName.trim(),
        'The tag of the first child should be an svg'
      ).toBe('svg');
    });

    await step('Button style test', async () => {
      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(
        backgroundColor,
        'It expects that the background color is "rgb(0, 83, 219)"'
      ).toBe('rgb(0, 83, 219)');
      expect(color, 'The color style should be "rgb(255, 255, 255)"').toBe(
        'rgb(255, 255, 255)'
      );
      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: pointer'
      );
    });

    clearAllMocks();

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant must be "filled"').toBe(
        'filled'
      );
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

    let button = canvas.getByRole('button');

    const computedStyle = getComputedStyle(button);

    const opacity = Number(computedStyle.getPropertyValue('opacity'));
    const color = computedStyle.getPropertyValue('color');

    await step('onClick button test', async () => {
      await userEvent.click(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called once'
      ).not.toHaveBeenCalledOnce();
    });

    clearAllMocks();

    await step('Double click button test', async () => {
      await userEvent.dblClick(canvas.getByRole('button'));

      expect(
        args.onClick,
        'It expect that the click event is called twice'
      ).not.toHaveBeenCalledTimes(2);
    });

    clearAllMocks();

    await step('Hover button test', async () => {
      await userEvent.pointer({ target: button, keys: '[MouseLeft>]' });
      await userEvent.pointer({ target: button, offset: 3 });

      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);

      const background = computedStyle.getPropertyValue('background');

      expect(
        background,
        `It expects that the background contains "rgba(0, 0, 0, 0.16)"`
      ).toContain('rgba(0, 0, 0, 0.16)');

      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: not-allowed'
      );
    });

    clearAllMocks();

    await step('Button style test', async () => {
      button = canvas.getByRole('button');
      const computedStyle = getComputedStyle(button);
      const backgroundColor =
        computedStyle.getPropertyValue('background-color');

      expect(button, 'It should render the text correctly').toHaveTextContent(
        'Label'
      );

      expect(
        backgroundColor,
        'It expects that the background color is "rgba(0, 0, 0, 0.16)"'
      ).toBe('rgba(0, 0, 0, 0.16)');

      expect(color, 'The color style should be "rgb(27, 27, 31)"').toBe(
        'rgb(27, 27, 31)'
      );

      expect(
        opacity,
        'The opacity of the button should be less than 1'
      ).toBeLessThan(1);

      expect(button, 'The cursor style should be pointer').toHaveStyle(
        'cursor: not-allowed'
      );
    });

    await step('Button args test', async () => {
      expect(args.variant, 'The argument variant must be "filled"').toBe(
        'filled'
      );
      expect(args.children, 'The argument children must be "Label"').toBe(
        'Label'
      );
      expect(
        args.disabled,
        'The argument disabled must be "true"'
      ).toBeTruthy();

      expect(args.selected, 'The argument selected must be "true"').toBeFalsy();
    });

    expect(button, 'It expects that the button is disbled').toBeDisabled();
  },
};
