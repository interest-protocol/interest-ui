import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByTestId('radioTestContainer');
    const svgElements = radio.querySelectorAll('svg');
    const computedStyle = getComputedStyle(radio);
    const cursor = computedStyle.getPropertyValue('cursor');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const firstChild = radio.firstElementChild;
    const elementTag = firstChild && firstChild.tagName.toLowerCase();
    const shortBackgroundValue = background.slice(0, 16);
    const opacity = computedStyle.getPropertyValue('opacity');

    await step('Radio button style test', async () => {
      expect(cursor).toBe('pointer');
      expect(elementTag).toBe('div');
      expect(firstChild).toBeVisible();
      expect(color).toBe('rgb(0, 0, 0)');
      expect(svgElements).toHaveLength(1);
      expect(firstChild).toBeInTheDocument();
      expect(Number(opacity)).toBeGreaterThanOrEqual(1);
      expect(shortBackgroundValue).toBe('rgba(0, 0, 0, 0)');
    });

    await step('Radio button userEvent test', async () => {
      await userEvent.click(canvas.getByTestId('radioTestContainer'));
      await userEvent.hover(canvas.getByTestId('radioTestContainer'));
      await userEvent.dblClick(canvas.getByTestId('radioTestContainer'));
      await userEvent.unhover(canvas.getByTestId('radioTestContainer'));
    });
  },
};

export const NormalDisabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByTestId('radioTestContainer');
    const computedStyle = getComputedStyle(radio);
    const cursor = computedStyle.getPropertyValue('cursor');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const svgElements = radio.querySelectorAll('svg');
    const firstChild = radio.firstElementChild;
    const elementTag = firstChild && firstChild.tagName.toLowerCase();
    const shortBackgroudValue = background.slice(0, 16);

    await step('Radio button style test', async () => {
      expect(color).toBe('rgb(0, 0, 0)');
      expect(shortBackgroudValue).toBe('rgba(0, 0, 0, 0)');
      expect(firstChild).toBeInTheDocument();
      expect(firstChild).toBeVisible();
      expect(elementTag).toBe('div');
      expect(svgElements).toHaveLength(1);
      expect(cursor).toBe('not-allowed');
    });

    await step('Radio button userEvent test', async () => {
      await userEvent.click(canvas.getByTestId('radioTestContainer'));
      await userEvent.hover(canvas.getByTestId('radioTestContainer'));
      await userEvent.dblClick(canvas.getByTestId('radioTestContainer'));
      await userEvent.unhover(canvas.getByTestId('radioTestContainer'));
    });

    await step('Radio button args test', async () => {
      expect(args.disabled).toBeTruthy();
    });
  },
};

export const Checked: Story = {
  args: {
    defaultValue: true,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByTestId('radioTestContainer');
    const radioChecked = canvas.getByTestId('radioTest');
    const computedStyle = getComputedStyle(radio);
    const checkedComputedStyle = getComputedStyle(radioChecked);
    const cursor = computedStyle.getPropertyValue('cursor');
    const color = computedStyle.getPropertyValue('color');
    const checkedColor = checkedComputedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const svgElements = radio.querySelectorAll('svg');
    const firstChild = radio.firstElementChild;
    const elementTag = firstChild && firstChild.tagName.toLowerCase();
    const shortBackgroundValue = background.slice(0, 16);

    await step('Radio button style test', async () => {
      expect(elementTag).toBe('div');
      expect(firstChild).toBeVisible();
      expect(color).toBe('rgb(0, 0, 0)');
      expect(cursor).toBe('pointer');
      expect(svgElements).toHaveLength(1);
      expect(firstChild).toBeInTheDocument();
      expect(checkedColor).toBe('rgb(0, 83, 219)');
      expect(shortBackgroundValue).toBe('rgba(0, 0, 0, 0)');
    });

    await step('Radio button userEvent test', async () => {
      await userEvent.click(canvas.getByTestId('radioTestContainer'));
      await userEvent.hover(canvas.getByTestId('radioTestContainer'));
      await userEvent.unhover(canvas.getByTestId('radioTestContainer'));
      await userEvent.dblClick(canvas.getByTestId('radioTestContainer'));
    });

    await step('Radio button args test', async () => {
      expect(args.defaultValue).toBeTruthy();
    });
  },
};

export const CheckedDisabled: Story = {
  args: {
    defaultValue: true,
    disabled: true,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    const radioContainer = canvas.getByTestId('radioTestContainer');
    const containerComputedStyle = getComputedStyle(radioContainer);
    const cursor = containerComputedStyle.getPropertyValue('cursor');
    const radio = canvas.getByTestId('radioTest');
    const computedStyle = getComputedStyle(radio);
    const color = computedStyle.getPropertyValue('color');
    const opacity = computedStyle.getPropertyValue('opacity');
    const background = computedStyle.getPropertyValue('background');
    const svgElements = radio.querySelectorAll('svg');
    const firstChild = radio.firstElementChild;
    const elementTag = firstChild && firstChild.tagName.toLowerCase();
    const shortBackgroundValue = background.slice(0, 16);

    await step('Radio button style test', async () => {
      expect(elementTag).toBe('svg');
      expect(firstChild).toBeVisible();
      expect(color).toBe('rgb(27, 27, 31)');
      expect(cursor).toBe('not-allowed');
      expect(svgElements).toHaveLength(1);
      expect(firstChild).toBeInTheDocument();
      expect(Number(opacity)).toBeLessThan(1);
      expect(shortBackgroundValue).toBe('rgba(0, 0, 0, 0)');
    });

    await step('Radio button userEvent test', async () => {
      await userEvent.click(canvas.getByTestId('radioTestContainer'));
      await userEvent.hover(canvas.getByTestId('radioTestContainer'));
      await userEvent.unhover(canvas.getByTestId('radioTestContainer'));
      await userEvent.dblClick(canvas.getByTestId('radioTestContainer'));
    });

    await step('Radio button args test', async () => {
      expect(args.defaultValue).toBeTruthy();
      expect(args.disabled).toBeTruthy();
    });
  },
};
