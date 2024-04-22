import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { Checkbox } from '..';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Normal: Story = {
  args: {
    disabled: false,
    defaultValue: false,
    label: 'Checkbox Label',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByTestId('checkbox');
    const computedStyle = getComputedStyle(checkbox);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');

    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByTestId('checkbox'));
    });

    await step('Check if exist svg icon', async () => {
      const svgElements = checkbox.querySelectorAll('svg');
      expect(svgElements).toHaveLength(1);
    });

    await step('Check property value and args', () => {
      expect(args.disabled).toBeFalsy();
      expect(args.defaultValue).toBeFalsy();
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(args.label).toBe('Checkbox Label');
      expect(checkbox).toHaveTextContent('Label');
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
    });
  },
};

export const NormalWithIndeterminate: Story = {
  args: {
    disabled: false,
    defaultValue: false,
    label: 'Checkbox Label',
    allowIndeterminateValue: true,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByTestId('checkbox');
    const computedStyle = getComputedStyle(checkbox);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');

    await step('Checkbox onClick', async () => {
      await userEvent.click(canvas.getByTestId('checkbox'));
    });

    await step('Check if exist svg icon', async () => {
      const svgElements = checkbox.querySelectorAll('svg');
      expect(svgElements).toHaveLength(1);
    });

    await step('Check property value and args', () => {
      expect(args.disabled).toBeFalsy();
      expect(args.defaultValue).toBeFalsy();
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(args.label).toBe('Checkbox Label');
      expect(checkbox).toHaveTextContent('Label');
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(args.allowIndeterminateValue).toBeTruthy();
    });
  },
};

export const NormalWithIndeterminateAndSupportText: Story = {
  args: {
    disabled: false,
    defaultValue: false,
    label: 'Checkbox Label',
    allowIndeterminateValue: false,
    supportingText: 'Supporting Text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByTestId('checkbox');
    const computedStyle = getComputedStyle(checkbox);
    const color = computedStyle.getPropertyValue('color');
    const border = computedStyle.getPropertyValue('border');
    const background = computedStyle.getPropertyValue('background');

    await step('Checkbox onClick', async () => {
      await userEvent.click(canvas.getByTestId('checkbox'));
    });

    await step('Check if exist svg icon', async () => {
      const svgElements = checkbox.querySelectorAll('svg');
      expect(svgElements).toHaveLength(1);
    });

    await step('Check property value and args', () => {
      expect(args.disabled).toBeFalsy();
      expect(args.defaultValue).toBeFalsy();
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(args.label).toBe('Checkbox Label');
      expect(checkbox).toHaveTextContent('Label');
      expect(args.allowIndeterminateValue).toBeFalsy();
      expect(args.supportingText).toBe('Supporting Text');
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
    });
  },
};

export const NormalDisabled: Story = {
  args: {
    disabled: true,
    defaultValue: true,
    label: 'Checkbox Label',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByTestId('checkbox');
    const computedStyle = getComputedStyle(checkbox);
    const color = computedStyle.getPropertyValue('color');
    const border = computedStyle.getPropertyValue('border');
    const background = computedStyle.getPropertyValue('background');

    await step('Checkbox onClick', async () => {
      await userEvent.click(canvas.getByTestId('checkbox'));
    });

    await step('Check if exist svg icon', async () => {
      const svgElements = checkbox.querySelectorAll('svg');
      expect(svgElements).toHaveLength(1);
    });

    await step('Check property value and args', () => {
      expect(args.disabled).toBeTruthy();
      expect(args.defaultValue).toBeTruthy();
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(args.label).toBe('Checkbox Label');
      expect(checkbox).toHaveTextContent('Label');
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
    });
  },
};
