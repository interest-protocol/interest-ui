import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { TokenSVG } from '../../../icons';
import { TokenField } from '..';

const meta: Meta<typeof TokenField> = {
  title: 'TokenField',
  component: TokenField,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    labelPosition: {
      defaultValue: 'right',
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
    textAlign: {
      defaultValue: 'right',
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TokenField>;

export const FilledWithToken: Story = {
  args: {
    Label: 'Label',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tokenField = canvas.getByTestId('token-field');
    const computedStyle = getComputedStyle(tokenField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElement = tokenField.querySelectorAll('svg');
    expect(svgElement).toHaveLength(1);

    const inputElement = tokenField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Get token field max value', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(border).toBeTruthy();
    expect(background).toBeTruthy();
    expect(color).toBe('rgb(0, 0, 0)');
    expect(textAlignment).toBe('start');
    expect(tokenField).toHaveTextContent('Label');
  },
};

export const FilledWithTokenWithoutLabel: Story = {
  args: {
    Label: 'Label',
    isNotDefaultLabel: true,
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tokenField = canvas.getByTestId('token-field');
    const computedStyle = getComputedStyle(tokenField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElement = tokenField.querySelectorAll('svg');
    expect(svgElement).toHaveLength(1);

    const inputElement = tokenField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Get token field max value', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(border).toBeTruthy();
    expect(background).toBeTruthy();
    expect(color).toBe('rgb(0, 0, 0)');
    expect(textAlignment).toBe('start');
    expect(args.isNotDefaultLabel).toBeTruthy();
    expect(tokenField).toHaveTextContent('Label');
  },
};

export const FilledWithLabelToTheLeft: Story = {
  args: {
    Label: 'Label',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'left',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tokenField = canvas.getByTestId('token-field');
    const computedStyle = getComputedStyle(tokenField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElement = tokenField.querySelectorAll('svg');
    expect(svgElement).toHaveLength(1);

    const inputElement = tokenField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Get token field max value', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(border).toBeTruthy();
    expect(background).toBeTruthy();
    expect(color).toBe('rgb(0, 0, 0)');
    expect(textAlignment).toBe('start');
    expect(tokenField).toHaveTextContent('Label');
  },
};

export const FilledWithTokenError: Story = {
  args: {
    Label: 'Label',
    status: 'error',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tokenField = canvas.getByTestId('token-field');
    const computedStyle = getComputedStyle(tokenField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElement = tokenField.querySelectorAll('svg');
    expect(svgElement).toHaveLength(1);

    const inputElement = tokenField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Get token field max value', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(border).toBeTruthy();
    expect(background).toBeTruthy();
    expect(color).toBe('rgb(0, 0, 0)');
    expect(textAlignment).toBe('start');
    expect(tokenField).toHaveTextContent('Label');
    expect(args.status).toBe('error');
  },
};

export const FilledWithTokenDisabled: Story = {
  args: {
    Label: 'Label',
    disabled: true,
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tokenField = canvas.getByTestId('token-field');
    const computedStyle = getComputedStyle(tokenField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElement = tokenField.querySelectorAll('svg');
    expect(svgElement).toHaveLength(1);

    const inputElement = tokenField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Get token field max value', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(border).toBeTruthy();
    expect(background).toBeTruthy();
    expect(color).toBe('rgb(0, 0, 0)');
    expect(textAlignment).toBe('start');
    expect(tokenField).toHaveTextContent('Label');
    expect(args.disabled).toBeTruthy();
  },
};

export const FilledWithoutTokenIcon: Story = {
  args: {
    Label: 'Label',
    textAlign: 'right',
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tokenField = canvas.getByTestId('token-field');
    const computedStyle = getComputedStyle(tokenField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    const inputElement = tokenField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Get token field max value', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(border).toBeTruthy();
    expect(background).toBeTruthy();
    expect(color).toBe('rgb(0, 0, 0)');
    expect(textAlignment).toBe('start');
    expect(tokenField).toHaveTextContent('Label');
  },
};

export const FilledWithoutTokenIconError: Story = {
  args: {
    Label: 'Label',
    status: 'error',
    textAlign: 'right',
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tokenField = canvas.getByTestId('token-field');
    const computedStyle = getComputedStyle(tokenField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    const inputElement = tokenField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Get token field max value', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(border).toBeTruthy();
    expect(background).toBeTruthy();
    expect(args.status).toBe('error');
    expect(color).toBe('rgb(0, 0, 0)');
    expect(textAlignment).toBe('start');
    expect(tokenField).toHaveTextContent('Label');
  },
};

export const FilledWithoutTokenIconDisabled: Story = {
  args: {
    disabled: true,
    Label: 'Label',
    textAlign: 'right',
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tokenField = canvas.getByTestId('token-field');
    const computedStyle = getComputedStyle(tokenField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    const inputElement = tokenField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Get token field max value', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(border).toBeTruthy();
    expect(background).toBeTruthy();
    expect(args.disabled).toBeTruthy();
    expect(color).toBe('rgb(0, 0, 0)');
    expect(textAlignment).toBe('start');
    expect(tokenField).toHaveTextContent('Label');
  },
};

export const OutlineWithToken: Story = {
  args: {
    Label: 'Label',
    variant: 'outline',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tokenField = canvas.getByTestId('token-field');
    const computedStyle = getComputedStyle(tokenField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElement = tokenField.querySelectorAll('svg');
    expect(svgElement).toHaveLength(1);

    const inputElement = tokenField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Get token field max value', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(border).toBeTruthy();
    expect(background).toBeTruthy();
    expect(color).toBe('rgb(0, 0, 0)');
    expect(textAlignment).toBe('start');
    expect(tokenField).toHaveTextContent('Label');
  },
};

export const OutlineWithLabelToTheLeft: Story = {
  args: {
    Label: 'Label',
    variant: 'outline',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'left',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tokenField = canvas.getByTestId('token-field');
    const computedStyle = getComputedStyle(tokenField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElement = tokenField.querySelectorAll('svg');
    expect(svgElement).toHaveLength(1);

    const inputElement = tokenField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Get token field max value', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(border).toBeTruthy();
    expect(background).toBeTruthy();
    expect(color).toBe('rgb(0, 0, 0)');
    expect(textAlignment).toBe('start');
    expect(tokenField).toHaveTextContent('Label');
  },
};

export const OutlineWithTokenError: Story = {
  args: {
    Label: 'Label',
    status: 'error',
    variant: 'outline',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tokenField = canvas.getByTestId('token-field');
    const computedStyle = getComputedStyle(tokenField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElement = tokenField.querySelectorAll('svg');
    expect(svgElement).toHaveLength(1);

    const inputElement = tokenField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Get token field max value', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(border).toBeTruthy();
    expect(background).toBeTruthy();
    expect(args.status).toBe('error');
    expect(color).toBe('rgb(0, 0, 0)');
    expect(textAlignment).toBe('start');
    expect(tokenField).toHaveTextContent('Label');
  },
};

export const OutlineWithTokenDisabled: Story = {
  args: {
    Label: 'Label',
    disabled: true,
    variant: 'outline',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tokenField = canvas.getByTestId('token-field');
    const computedStyle = getComputedStyle(tokenField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElement = tokenField.querySelectorAll('svg');
    expect(svgElement).toHaveLength(1);

    const inputElement = tokenField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Get token field max value', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(border).toBeTruthy();
    expect(background).toBeTruthy();
    expect(color).toBe('rgb(0, 0, 0)');
    expect(textAlignment).toBe('start');
    expect(tokenField).toHaveTextContent('Label');
    expect(args.disabled).toBeTruthy();
  },
};

export const OutlineWithoutTokenIcon: Story = {
  args: {
    Label: 'Label',
    variant: 'outline',
    textAlign: 'right',
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tokenField = canvas.getByTestId('token-field');
    const computedStyle = getComputedStyle(tokenField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    const inputElement = tokenField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Get token field max value', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(border).toBeTruthy();
    expect(background).toBeTruthy();
    expect(color).toBe('rgb(0, 0, 0)');
    expect(textAlignment).toBe('start');
    expect(tokenField).toHaveTextContent('Label');
  },
};

export const OutlineWithoutTokenIconError: Story = {
  args: {
    Label: 'Label',
    status: 'error',
    variant: 'outline',
    textAlign: 'right',
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tokenField = canvas.getByTestId('token-field');
    const computedStyle = getComputedStyle(tokenField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    const inputElement = tokenField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Get token field max value', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(border).toBeTruthy();
    expect(background).toBeTruthy();
    expect(color).toBe('rgb(0, 0, 0)');
    expect(textAlignment).toBe('start');
    expect(tokenField).toHaveTextContent('Label');
    expect(args.status).toBe('error');
  },
};

export const OutlineWithoutTokenIconDisabled: Story = {
  args: {
    Label: 'Label',
    disabled: true,
    variant: 'outline',
    textAlign: 'right',
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tokenField = canvas.getByTestId('token-field');
    const computedStyle = getComputedStyle(tokenField);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');
    const textAlignment = computedStyle.getPropertyValue('text-align');

    const inputElement = tokenField.querySelectorAll('input');
    expect(inputElement).toHaveLength(1);

    await step('Get token field max value', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(border).toBeTruthy();
    expect(background).toBeTruthy();
    expect(color).toBe('rgb(0, 0, 0)');
    expect(textAlignment).toBe('start');
    expect(tokenField).toHaveTextContent('Label');
    expect(args.disabled).toBeTruthy();
  },
};
