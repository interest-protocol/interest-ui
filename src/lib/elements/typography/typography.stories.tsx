import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { Typography } from '.';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  argTypes: {
    fontWeight: {
      options: ['300', '400', '500', '600', '700'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const DisplayLarge: Story = {
  args: {
    as: 'h1',
    size: 'large',
    color: 'onSurface',
    variant: 'display',
    children: 'Display large',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const typography = canvas.getByTestId('typography');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography).toHaveTextContent('p');
    await userEvent.hover(canvas.getByTestId('typography'));

    expect(color.trim()).toBeTruthy();
    expect(fontFamily).toBe('Proto');
    expect(fontSize).toBe('57.008px');
  },
};

export const DisplayMedium: Story = {
  args: {
    as: 'h2',
    size: 'medium',
    color: 'onSurface',
    variant: 'display',
    children: 'Display small',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const typography = canvas.getByTestId('typography');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography).toHaveTextContent('p');
    await userEvent.hover(canvas.getByTestId('typography'));

    expect(color.trim()).toBeTruthy();
    expect(fontFamily).toBe('Proto');
    expect(fontSize).toBe('45.008px');
  },
};

export const DisplaySmall: Story = {
  args: {
    as: 'p',
    size: 'small',
    color: 'onSurface',
    variant: 'display',
    children: 'Display small',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const typography = canvas.getByTestId('typography');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography).toHaveTextContent('p');
    await userEvent.hover(canvas.getByTestId('typography'));

    expect(color.trim()).toBeTruthy();
    expect(fontFamily).toBe('Proto');
    expect(fontSize).toBe('36px');
  },
};

export const headlineLarge: Story = {
  args: {
    as: 'p',
    size: 'large',
    color: 'onSurface',
    variant: 'headline',
    children: 'Headline Large',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const typography = canvas.getByTestId('typography');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography).toHaveTextContent('Headline Large');
    await userEvent.hover(canvas.getByTestId('typography'));

    expect(color.trim()).toBeTruthy();
    expect(fontFamily).toBe('Proto');
    expect(fontSize).toBe('32px');
  },
};

export const headlineMedium: Story = {
  args: {
    as: 'p',
    size: 'medium',
    color: 'onSurface',
    variant: 'headline',
    children: 'Headline Medium',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const typography = canvas.getByTestId('typography');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography).toHaveTextContent('Headline Medium');
    await userEvent.hover(canvas.getByTestId('typography'));

    expect(color.trim()).toBeTruthy();
    expect(fontFamily).toBe('Proto');
    expect(fontSize).toBe('28px');
  },
};

export const headlineSmall: Story = {
  args: {
    as: 'p',
    size: 'small',
    color: 'onSurface',
    variant: 'headline',
    children: 'Headline Small',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const typography = canvas.getByTestId('typography');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography).toHaveTextContent('Headline Small');
    await userEvent.hover(canvas.getByTestId('typography'));

    expect(color.trim()).toBeTruthy();
    expect(fontFamily).toBe('Proto');
    expect(fontSize).toBe('24px');
  },
};

export const titleLarge: Story = {
  args: {
    as: 'p',
    size: 'large',
    color: 'onSurface',
    variant: 'title',
    children: 'Title Large',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const typography = canvas.getByTestId('typography');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography).toHaveTextContent('Title Large');
    await userEvent.hover(canvas.getByTestId('typography'));

    expect(color.trim()).toBeTruthy();
    expect(fontFamily).toBe('Satoshi');
    expect(fontSize).toBe('22px');
  },
};

export const titleMedium: Story = {
  args: {
    as: 'p',
    size: 'medium',
    color: 'onSurface',
    variant: 'title',
    children: 'Title Medium',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const typography = canvas.getByTestId('typography');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    // check if the label is being render
    expect(typography).toHaveTextContent('Title Medium');
    await userEvent.hover(canvas.getByTestId('typography'));

    expect(color.trim()).toBeTruthy();
    expect(fontFamily).toBe('Satoshi');
    expect(fontSize).toBe('16px');
  },
};

export const titleSmall: Story = {
  args: {
    as: 'p',
    size: 'small',
    color: 'onSurface',
    variant: 'title',
    children: 'Title Small',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const typography = canvas.getByTestId('typography');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography).toHaveTextContent('Title Small');
    await userEvent.hover(canvas.getByTestId('typography'));

    expect(color.trim()).toBeTruthy();
    expect(fontFamily).toBe('Satoshi');
    expect(fontSize).toBe('14px');
  },
};

export const bodyLarge: Story = {
  args: {
    as: 'p',
    size: 'large',
    color: 'onSurface',
    variant: 'body',
    children: 'Body Large',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const typography = canvas.getByTestId('typography');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography).toHaveTextContent('Body Large');
    await userEvent.hover(canvas.getByTestId('typography'));

    expect(color.trim()).toBeTruthy();
    expect(fontFamily).toBe('Satoshi');
    expect(fontSize).toBe('16px');
  },
};

export const bodyMedium: Story = {
  args: {
    as: 'p',
    size: 'medium',
    color: 'onSurface',
    variant: 'body',
    children: 'Body Medium',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const typography = canvas.getByTestId('typography');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography).toHaveTextContent('Body Medium');
    await userEvent.hover(canvas.getByTestId('typography'));

    expect(color.trim()).toBeTruthy();
    expect(fontFamily).toBe('Satoshi');
    expect(fontSize).toBe('14px');
  },
};

export const bodySmall: Story = {
  args: {
    as: 'p',
    size: 'small',
    color: 'onSurface',
    variant: 'body',
    children: 'Body Small',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const typography = canvas.getByTestId('typography');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography).toHaveTextContent('Body Small');
    await userEvent.hover(canvas.getByTestId('typography'));

    expect(color.trim()).toBeTruthy();
    expect(fontFamily).toBe('Satoshi');
    expect(fontSize).toBe('12px');
  },
};

export const labelLarge: Story = {
  args: {
    as: 'label',
    size: 'large',
    color: 'onSurface',
    variant: 'label',
    children: 'Label Large',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const typography = canvas.getByTestId('typography');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography).toHaveTextContent('Label Large');
    await userEvent.hover(canvas.getByTestId('typography'));

    expect(color.trim()).toBeTruthy();
    expect(fontFamily).toBe('Proto');
    expect(fontSize).toBe('14px');
  },
};

export const labelMedium: Story = {
  args: {
    as: 'label',
    size: 'medium',
    color: 'onSurface',
    variant: 'label',
    children: 'Label Medium',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const typography = canvas.getByTestId('typography');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography).toHaveTextContent('Label Medium');
    await userEvent.hover(canvas.getByTestId('typography'));

    expect(color.trim()).toBeTruthy();
    expect(fontFamily).toBe('Proto');
    expect(fontSize).toBe('12px');
  },
};

export const labelSmall: Story = {
  args: {
    as: 'label',
    size: 'small',
    color: 'onSurface',
    variant: 'label',
    children: 'Label Small',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const typography = canvas.getByTestId('typography');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');
    const convertedFontSize = parseInt(fontSize);
    const remFontSize = convertedFontSize / 16 / 10;

    expect(typography).toHaveTextContent('Label Small');
    await userEvent.hover(canvas.getByTestId('typography'));

    expect(color.trim()).toBeTruthy();
    expect(fontFamily).toBe('Proto');
    expect(remFontSize).toBe(0.06875);
  },
};
