import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import React from 'react';

import { PlusIcon } from '../../../../storybook/icons';
import { Box } from '../../../elements';
import { TextField } from '..';

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    placeholder: '0.123',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const textField = canvas.getByRole('input');
    const computedStyle = getComputedStyle(textField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    const inputElement = textField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByRole('input'));
    });

    await step('Check property value and args', () => {
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(textAlignment).toBe('start');
      expect(args.placeholder).toBe('0.123');
    });
  },
};

export const WithPrefix: Story = {
  args: {
    label: 'Label',
    Prefix: <PlusIcon />,
    placeholder: '0.123',
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const textField = canvas.getByRole('input');
    const computedStyle = getComputedStyle(textField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElement = textField.querySelectorAll('svg');
    expect(svgElement).toHaveLength(1);

    const inputElement = textField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByRole('input'));
    });

    await step('Check Property value and args', () => {
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(textAlignment).toBe('start');
      expect(args.placeholder).toBe('0.123');
      expect(textField).toHaveTextContent('Label');
    });
  },
};

export const WithPrefixSucess: Story = {
  args: {
    label: 'Label',
    status: 'success',
    Prefix: <PlusIcon />,
    placeholder: '0.123',
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const textField = canvas.getByRole('input');
    const computedStyle = getComputedStyle(textField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElement = textField.querySelectorAll('svg');
    expect(svgElement).toHaveLength(1);

    const inputElement = textField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByRole('input'));
    });

    await step('Check Property value and args', () => {
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(textAlignment).toBe('start');
      expect(args.placeholder).toBe('0.123');
      expect(textField).toHaveTextContent('Label');
      expect(args.status).toBe('success');
    });
  },
};

export const WithSuffix: Story = {
  args: {
    label: 'Label',
    placeholder: '0.123',
    Suffix: <PlusIcon />,
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const textField = canvas.getByRole('input');
    const computedStyle = getComputedStyle(textField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElement = textField.querySelectorAll('svg');
    expect(svgElement).toHaveLength(1);

    const inputElement = textField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByRole('input'));
    });

    await step('Check Property value and args', () => {
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(textAlignment).toBe('start');
      expect(args.placeholder).toBe('0.123');
      expect(textField).toHaveTextContent('Label');
    });
  },
};

export const WithTopLabel: Story = {
  args: {
    placeholder: '0.123',
    label: 'Label',
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const textField = canvas.getByRole('input');
    const computedStyle = getComputedStyle(textField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    const inputElement = textField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByRole('input'));
    });

    await step('Check property value and args', () => {
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(textAlignment).toBe('start');
      expect(args.placeholder).toBe('0.123');
      expect(textField).toHaveTextContent('Label');
    });
  },
};

export const Combined: Story = {
  args: {
    placeholder: '0.123',
    label: 'Label',
    Prefix: <PlusIcon />,
    Suffix: <PlusIcon />,
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const textField = canvas.getByRole('input');
    const computedStyle = getComputedStyle(textField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElement = textField.querySelectorAll('svg');
    expect(svgElement).toHaveLength(2);

    const inputElement = textField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByRole('input'));
    });

    await step('Check property value and args', () => {
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(textAlignment).toBe('start');
      expect(args.placeholder).toBe('0.123');
      expect(textField).toHaveTextContent('Label');
    });
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    Suffix: <PlusIcon />,
    placeholder: '0.123',
    supportingText: 'Enter a valid amount',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const textField = canvas.getByRole('input');
    const computedStyle = getComputedStyle(textField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElement = textField.querySelectorAll('svg');
    expect(svgElement).toHaveLength(1);

    const inputElement = textField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByRole('input'));
    });

    await step('Check property value and args', () => {
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(textAlignment).toBe('start');
      expect(args.placeholder).toBe('0.123');
      expect(args.status).toBe('error');
    });
  },
};

export const ErrorCombined: Story = {
  args: {
    status: 'error',
    placeholder: '0.123',
    label: 'Label',
    Prefix: <PlusIcon />,
    Suffix: <PlusIcon />,
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const textField = canvas.getByRole('input');
    const computedStyle = getComputedStyle(textField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElement = textField.querySelectorAll('svg');
    expect(svgElement).toHaveLength(2);

    const inputElement = textField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByRole('input'));
    });

    await step('Check property value and args', () => {
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(textAlignment).toBe('start');
      expect(args.placeholder).toBe('0.123');
      expect(textField).toHaveTextContent('Label');
      expect(args.status).toBe('error');
    });
  },
};

export const ErrorCombinedWithWrapper: Story = {
  args: {
    status: 'error',
    placeholder: '0.123',
    label: 'Label',
    Prefix: <PlusIcon />,
    Suffix: <PlusIcon />,
    supportingText: 'Supporting text',
  },
  render: (args) => (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <TextField {...args} />
    </Box>
  ),
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const textField = canvas.getByRole('input');
    const computedStyle = getComputedStyle(textField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElement = textField.querySelectorAll('svg');
    expect(svgElement).toHaveLength(2);

    const inputElement = textField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByRole('input'));
    });

    await step('Check property value and args', () => {
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(textAlignment).toBe('start');
      expect(args.placeholder).toBe('0.123');
      expect(textField).toHaveTextContent('Label');
      expect(args.status).toBe('error');
    });
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '0.123',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const textField = canvas.getByRole('input');
    const computedStyle = getComputedStyle(textField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    const inputElement = textField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Text field onClick', async () => {
      await userEvent.click(canvas.getByRole('input'));
    });

    await step('Check property value and args', () => {
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(textAlignment).toBe('start');
      expect(args.placeholder).toBe('0.123');
      expect(args.disabled).toBeTruthy();
    });
  },
};
