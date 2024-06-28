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
    const checkbox = canvas.getByRole('checkbox');
    const computedStyle = getComputedStyle(checkbox);
    const color = computedStyle.getPropertyValue('color');
    const border = computedStyle.getPropertyValue('border');
    const background = computedStyle.getPropertyValue('background');
    const transition = computedStyle.getPropertyValue('transition');
    const borderRadius = computedStyle.getPropertyValue('border-radius');

    await step('Checkbox style test', async () => {
      expect(borderRadius).toBe('4px');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(transition).toBe('all 0s ease 0s');
      expect(border.trim()).toBe('2px solid rgb(27, 27, 31)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
    });

    await step('Checkbox useEvent test', async () => {
      await userEvent.click(canvas.getByRole('checkbox'));
      await userEvent.hover(canvas.getByRole('checkbox'));
      await userEvent.unhover(canvas.getByRole('checkbox'));
      await userEvent.dblClick(canvas.getByRole('checkbox'));
    });

    await step('Checkbox args test', async () => {
      expect(args.disabled).toBeFalsy();
      expect(args.defaultValue).toBeFalsy();
      expect(args.label).toBe('Checkbox Label');
    });
  },
};
export const NormalWithoutLabel: Story = {
  args: {
    disabled: false,
    defaultValue: true,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    const computedStyle = getComputedStyle(checkbox);
    const color = computedStyle.getPropertyValue('color');
    const border = computedStyle.getPropertyValue('border');
    const background = computedStyle.getPropertyValue('background');
    const transition = computedStyle.getPropertyValue('transition');
    const borderRadius = computedStyle.getPropertyValue('border-radius');

    await step('Checkbox style test', async () => {
      expect(borderRadius).toBe('4px');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(transition).toBe('all 0s ease 0s');
      expect(border.trim()).toBe('2px solid rgb(0, 83, 219)');
      expect(background.substring(0, 16)).toBe('rgb(0, 83, 219) ');
    });

    await step('Checkbox useEvent test', async () => {
      await userEvent.click(canvas.getByRole('checkbox'));
      await userEvent.hover(canvas.getByRole('checkbox'));
      await userEvent.unhover(canvas.getByRole('checkbox'));
      await userEvent.dblClick(canvas.getByRole('checkbox'));
    });

    await step('Checkbox args test', async () => {
      expect(args.disabled).toBeFalsy();
      expect(args.defaultValue).toBeTruthy();
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
    const checkbox = canvas.getByRole('checkbox');
    const computedStyle = getComputedStyle(checkbox);
    const color = computedStyle.getPropertyValue('color');
    const border = computedStyle.getPropertyValue('border');
    const background = computedStyle.getPropertyValue('background');
    const transition = computedStyle.getPropertyValue('transition');
    const borderRadius = computedStyle.getPropertyValue('border-radius');

    await step('Checkbox style test', async () => {
      expect(borderRadius).toBe('4px');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(transition).toBe('all 0s ease 0s');
      expect(border.trim()).toBe('2px solid rgb(27, 27, 31)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
    });

    await step('Checkbox useEvent test', async () => {
      await userEvent.click(canvas.getByRole('checkbox'));
      await userEvent.hover(canvas.getByRole('checkbox'));
      await userEvent.unhover(canvas.getByRole('checkbox'));
      await userEvent.dblClick(canvas.getByRole('checkbox'));
    });

    await step('Checkbox args test', async () => {
      expect(args.disabled).toBeFalsy();
      expect(args.defaultValue).toBeFalsy();
      expect(args.label).toBe('Checkbox Label');
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
    const checkbox = canvas.getByRole('checkbox');
    const computedStyle = getComputedStyle(checkbox);
    const color = computedStyle.getPropertyValue('color');
    const border = computedStyle.getPropertyValue('border');
    const background = computedStyle.getPropertyValue('background');
    const transition = computedStyle.getPropertyValue('transition');
    const borderRadius = computedStyle.getPropertyValue('border-radius');

    await step('Checkbox style test', async () => {
      expect(borderRadius).toBe('4px');
      expect(transition).toBe('all 0s ease 0s');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(border.trim()).toBe('2px solid rgb(27, 27, 31)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
    });

    await step('Checkbox useEvent test', async () => {
      await userEvent.click(canvas.getByRole('checkbox'));
      await userEvent.hover(canvas.getByRole('checkbox'));
      await userEvent.unhover(canvas.getByRole('checkbox'));
      await userEvent.dblClick(canvas.getByRole('checkbox'));
    });

    await step('Checkbox args test', async () => {
      expect(args.disabled).toBeFalsy();
      expect(args.defaultValue).toBeFalsy();
      expect(args.label).toBe('Checkbox Label');
      expect(args.allowIndeterminateValue).toBeFalsy();
      expect(args.supportingText).toBe('Supporting Text');
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
    const checkbox = canvas.getByRole('checkbox');
    const computedStyle = getComputedStyle(checkbox);
    const color = computedStyle.getPropertyValue('color');
    const border = computedStyle.getPropertyValue('border');
    const background = computedStyle.getPropertyValue('background');
    const transition = computedStyle.getPropertyValue('transition');
    const borderRadius = computedStyle.getPropertyValue('border-radius');

    await step('Checkbox style test', async () => {
      expect(borderRadius).toBe('4px');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(transition).toBe('all 0s ease 0s');
      expect(border.trim()).toBe('2px solid rgba(0, 0, 0, 0)');
      expect(background.substring(0, 19)).toBe('rgba(0, 0, 0, 0.24)');
    });

    await step('Checkbox useEvent test', async () => {
      await userEvent.click(canvas.getByRole('checkbox'));
      await userEvent.hover(canvas.getByRole('checkbox'));
      await userEvent.unhover(canvas.getByRole('checkbox'));
      await userEvent.dblClick(canvas.getByRole('checkbox'));
    });

    await step('Checkbox args test', async () => {
      expect(args.disabled).toBeTruthy();
      expect(args.defaultValue).toBeTruthy();
      expect(args.label).toBe('Checkbox Label');
    });
  },
};
