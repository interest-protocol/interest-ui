import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within } from '@storybook/test';

import { RadioButton } from '..';

const meta: Meta<typeof RadioButton> = {
  title: 'Radio',
  component: RadioButton,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Normal: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const radio = canvas.getByTestId('radioTestContainer');

    const svgs = radio.querySelectorAll('svg');
    expect(svgs).toHaveLength(1);

    const computedStyle = getComputedStyle(radio);
    const cursor = computedStyle.getPropertyValue('cursor');
    const color = computedStyle.getPropertyValue('color');
    const opacity = computedStyle.getPropertyValue('opacity');

    expect(cursor).toBe('pointer');
    expect(Number(opacity)).toBeGreaterThanOrEqual(1);
    expect(color).toBe('rgb(0, 0, 0)');
  },
};

export const NormalDisabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const radio = canvas.getByTestId('radioTestContainer');

    const computedStyle = getComputedStyle(radio);
    const cursor = computedStyle.getPropertyValue('cursor');

    expect(cursor).toBe('not-allowed');
  },
};

export const Checked: Story = {
  args: {
    defaultValue: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const radio = canvas.getByTestId('radioTest');

    const computedStyle = getComputedStyle(radio);
    const color = computedStyle.getPropertyValue('color');

    expect(color).toBe('rgb(0, 83, 219)');
  },
};

export const CheckedDisabled: Story = {
  args: {
    defaultValue: true,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const radioContainer = canvas.getByTestId('radioTestContainer');
    const containerComputedStyle = getComputedStyle(radioContainer);
    const cursor = containerComputedStyle.getPropertyValue('cursor');
    expect(cursor).toBe('not-allowed');

    const radio = canvas.getByTestId('radioTest');

    const computedStyle = getComputedStyle(radio);
    const color = computedStyle.getPropertyValue('color');
    const opacity = computedStyle.getPropertyValue('opacity');

    expect(color).toBe('rgb(27, 27, 31)');
    expect(Number(opacity)).toBeLessThan(1);
  },
};

export const OnClickEvent: Story = {
  args: {
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const radio = canvas.getByTestId('radioTestContainer');

    radio.click();

    expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const OnClickEventDisabled: Story = {
  args: {
    onClick: fn(),
    disabled: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const radio = canvas.getByTestId('radioTestContainer');

    radio.click();

    expect(args.onClick).toHaveBeenCalledTimes(0);
  },
};
