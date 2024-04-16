import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { Slider } from '..';

const meta: Meta<typeof Slider> = {
  title: 'Slider',
  component: Slider,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    initial: {
      control: { type: 'number' },
    },
    bottomValue: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    showZeroValue: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    max: 100,
    initial: 0,
    disabled: false,
    withTooltip: false,
    bottomValue: false,
    showZeroValue: false,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const slider = canvas.getByTestId('slider');
    const computedStyle = getComputedStyle(slider);

    const background = computedStyle.getPropertyValue('background');
    const max = args.max;

    await userEvent.type(canvas.getByTestId('slider'), '100');

    const availableOptions = await canvas.findAllByTestId('slider');
    await expect(availableOptions.length).toBe(1);
    await expect(max).toBe(100);
    expect(background.trim()).toBeTruthy();
  },
};

export const DefaultInterval: Story = {
  args: {
    max: 100,
    initial: [0, 20],
    disabled: false,
    withTooltip: false,
    bottomValue: false,
    showZeroValue: false,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const slider = canvas.getByTestId('slider');
    const computedStyle = getComputedStyle(slider);

    const background = computedStyle.getPropertyValue('background');
    const max = args.max;
    const initialInterval = args.initial[1] - args.initial[0];

    await userEvent.type(canvas.getByTestId('slider'), '100');

    const availableOptions = await canvas.findAllByTestId('slider');
    await expect(availableOptions.length).toBe(1);
    await expect(max).toBe(100);
    await expect(initialInterval).toBe(20);
    expect(background.trim()).toBeTruthy();
  },
};

export const InTheMiddleWithoutTooltip: Story = {
  args: {
    max: 100,
    initial: 50,
    disabled: false,
    withTooltip: false,
    bottomValue: false,
    showZeroValue: false,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const slider = canvas.getByTestId('slider');
    const computedStyle = getComputedStyle(slider);

    const background = computedStyle.getPropertyValue('background');
    const max = args.max;
    const initial = args.initial;

    await userEvent.type(canvas.getByTestId('slider'), '100');

    const availableOptions = await canvas.findAllByTestId('slider');
    await expect(availableOptions.length).toBe(1);
    await expect(max).toBe(100);
    await expect(initial).toBe(50);
    expect(background.trim()).toBeTruthy();
  },
};

export const InTheEndWithoutTooltip: Story = {
  args: {
    max: 100,
    initial: 100,
    disabled: false,
    withTooltip: false,
    bottomValue: false,
    showZeroValue: false,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const slider = canvas.getByTestId('slider');
    const computedStyle = getComputedStyle(slider);

    const background = computedStyle.getPropertyValue('background');
    const max = args.max;
    const initial = args.initial;

    await userEvent.type(canvas.getByTestId('slider'), '100');

    const availableOptions = await canvas.findAllByTestId('slider');
    await expect(availableOptions.length).toBe(1);
    await expect(max).toBe(100);
    await expect(initial).toBe(100);
    expect(background.trim()).toBeTruthy();
  },
};

export const InTheMiddleWithTooltip: Story = {
  args: {
    max: 100,
    initial: 50,
    disabled: false,
    withTooltip: true,
    bottomValue: true,
    showZeroValue: false,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const slider = canvas.getByTestId('slider');
    const computedStyle = getComputedStyle(slider);

    const background = computedStyle.getPropertyValue('background');
    const max = args.max;
    const initial = args.initial;

    await userEvent.type(canvas.getByTestId('slider'), '100');

    const availableOptions = await canvas.findAllByTestId('slider');
    expect(availableOptions.length).toBe(1);
    expect(max).toBe(100);
    expect(initial).toBe(50);
    expect(background.trim()).toBeTruthy();
    expect(args.withTooltip).toBeTruthy();
    expect(args.bottomValue).toBeTruthy();
  },
};

export const InTheEndWithTooltip: Story = {
  args: {
    max: 100,
    initial: 100,
    disabled: false,
    withTooltip: true,
    bottomValue: false,
    showZeroValue: false,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const slider = canvas.getByTestId('slider');
    const computedStyle = getComputedStyle(slider);

    const background = computedStyle.getPropertyValue('background');
    const max = args.max;
    const initial = args.initial;

    await userEvent.type(canvas.getByTestId('slider'), '100');

    const availableOptions = await canvas.findAllByTestId('slider');
    expect(availableOptions.length).toBe(1);
    expect(max).toBe(100);
    expect(initial).toBe(100);
    expect(background.trim()).toBeTruthy();
    expect(args.withTooltip).toBeTruthy();
  },
};
