import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { ProgressIndicator } from '..';

const meta: Meta<typeof ProgressIndicator> = {
  title: 'Progress Indicator',
  component: ProgressIndicator,
  argTypes: {
    variant: {
      defaultValue: 'bar',
      options: ['bar', 'circle', 'loading'],
      control: { type: 'radio' },
    },
    value: {
      control: { type: 'number' },
    },
    size: {
      control: { type: 'number' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressIndicator>;

export const NormalBar: Story = {
  args: {
    value: 25,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const progressIndicator = canvas.getByRole('progressIndicator');
    const computedStyle = getComputedStyle(progressIndicator);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');

    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByRole('progressIndicator'));
    });

    await step('Check property value and args', () => {
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(args.value).toBe(25);
    });
  },
};

export const WarningBar: Story = {
  args: {
    value: 75,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const progressIndicator = canvas.getByRole('progressIndicator');
    const computedStyle = getComputedStyle(progressIndicator);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByRole('progressIndicator'));
    });

    await step('Check property value and args', () => {
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(args.value).toBe(75);
    });
  },
};

export const DangerousBar: Story = {
  args: {
    value: 95,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const progressIndicator = canvas.getByRole('progressIndicator');
    const computedStyle = getComputedStyle(progressIndicator);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByRole('progressIndicator'));
    });

    await step('Check property value and args', () => {
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(args.value).toBe(95);
    });
  },
};

export const Circle: Story = {
  args: {
    variant: 'circle',
    value: 25,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const progressIndicator = canvas.getByRole('progressIndicator');
    const computedStyle = getComputedStyle(progressIndicator);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByRole('progressIndicator'));
    });

    await step('Check property value and args', () => {
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(args.value).toBe(25);
    });
  },
};

export const BigCircle: Story = {
  args: {
    variant: 'circle',
    value: 50,
    size: 80,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const progressIndicator = canvas.getByRole('progressIndicator');
    const computedStyle = getComputedStyle(progressIndicator);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByRole('progressIndicator'));
    });

    await step('Check property value and args', () => {
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(args.value).toBe(50);
    });
  },
};

export const LoadingCircle: Story = {
  args: {
    variant: 'loading',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const progressIndicator = canvas.getByRole('progressIndicator');
    const computedStyle = getComputedStyle(progressIndicator);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByRole('progressIndicator'));
    });

    await step('Check property value and args', () => {
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
    });
  },
};
