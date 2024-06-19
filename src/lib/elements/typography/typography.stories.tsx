import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

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

    const typography = canvas.getByRole('text');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography.tagName, 'It should render in the h1 tag').toBe('H1');
    expect(typography.textContent, 'It should render the text correctly').toBe(
      'Display large'
    );
    expect(fontSize, 'It should render the text at 57px').toBe('57.008px');
    expect(
      fontFamily,
      'It should render the text with the font-family Proto'
    ).toBe('Proto');
    expect(color, 'It should render the text has the right color').toBe(
      'rgb(27, 27, 31)'
    );
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

    const typography = canvas.getByRole('text');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography.tagName, 'It should render in the h2 tag').toBe('H2');
    expect(typography.textContent, 'It should render the text correctly').toBe(
      'Display small'
    );
    expect(fontSize, 'It should render the text at 45px').toBe('45.008px');
    expect(
      fontFamily,
      'It should render the text with the font-family Proto'
    ).toBe('Proto');
    expect(color, 'It should render the text has the right color').toBe(
      'rgb(27, 27, 31)'
    );
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

    const typography = canvas.getByRole('text');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography.tagName, 'It should render in the P tag').toBe('P');
    expect(typography.textContent, 'It should render the text correctly').toBe(
      'Display small'
    );
    expect(fontSize, 'It should render the text at 36px').toBe('36px');
    expect(
      fontFamily,
      'It should render the text with the font-family Proto'
    ).toBe('Proto');
    expect(color, 'It should render the text has the right color').toBe(
      'rgb(27, 27, 31)'
    );
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

    const typography = canvas.getByRole('text');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography.tagName, 'It should render in the P tag').toBe('P');
    expect(typography.textContent, 'It should render the text correctly').toBe(
      'Headline Large'
    );
    expect(fontSize, 'It should render the text at 32px').toBe('32px');
    expect(
      fontFamily,
      'It should render the text with the font-family Proto'
    ).toBe('Proto');
    expect(color, 'It should render the text has the right color').toBe(
      'rgb(27, 27, 31)'
    );
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

    const typography = canvas.getByRole('text');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography.tagName, 'It should render in the P tag').toBe('P');
    expect(typography.textContent, 'It should render the text correctly').toBe(
      'Headline Medium'
    );
    expect(fontSize, 'It should render the text at 28px').toBe('28px');
    expect(
      fontFamily,
      'It should render the text with the font-family Proto'
    ).toBe('Proto');
    expect(color, 'It should render the text has the right color').toBe(
      'rgb(27, 27, 31)'
    );
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

    const typography = canvas.getByRole('text');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography.tagName, 'It should render in the P tag').toBe('P');
    expect(typography.textContent, 'It should render the text correctly').toBe(
      'Headline Small'
    );
    expect(fontSize, 'It should render the text at 24px').toBe('24px');
    expect(
      fontFamily,
      'It should render the text with the font-family Proto'
    ).toBe('Proto');
    expect(color, 'It should render the text has the right color').toBe(
      'rgb(27, 27, 31)'
    );
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

    const typography = canvas.getByRole('text');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography.tagName, 'It should render in the P tag').toBe('P');
    expect(typography.textContent, 'It should render the text correctly').toBe(
      'Title Large'
    );
    expect(fontSize, 'It should render the text at 22px').toBe('22px');
    expect(
      fontFamily,
      'It should render the text with the font-family Satoshi'
    ).toBe('Satoshi');
    expect(color, 'It should render the text has the right color').toBe(
      'rgb(27, 27, 31)'
    );
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

    const typography = canvas.getByRole('text');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography.tagName, 'It should render in the P tag').toBe('P');
    expect(typography.textContent, 'It should render the text correctly').toBe(
      'Title Medium'
    );
    expect(fontSize, 'It should render the text at 16px').toBe('16px');
    expect(
      fontFamily,
      'It should render the text with the font-family Satoshi'
    ).toBe('Satoshi');
    expect(color, 'It should render the text has the right color').toBe(
      'rgb(27, 27, 31)'
    );
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

    const typography = canvas.getByRole('text');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography.tagName, 'It should render in the P tag').toBe('P');
    expect(typography.textContent, 'It should render the text correctly').toBe(
      'Title Small'
    );
    expect(fontSize, 'It should render the text at 14px').toBe('14px');
    expect(
      fontFamily,
      'It should render the text with the font-family Satoshi'
    ).toBe('Satoshi');
    expect(color, 'It should render the text has the right color').toBe(
      'rgb(27, 27, 31)'
    );
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

    const typography = canvas.getByRole('text');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography.tagName, 'It should render in the P tag').toBe('P');
    expect(typography.textContent, 'It should render the text correctly').toBe(
      'Body Large'
    );
    expect(fontSize, 'It should render the text at 16px').toBe('16px');
    expect(
      fontFamily,
      'It should render the text with the font-family Satoshi'
    ).toBe('Satoshi');
    expect(color, 'It should render the text has the right color').toBe(
      'rgb(27, 27, 31)'
    );
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

    const typography = canvas.getByRole('text');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography.tagName, 'It should render in the P tag').toBe('P');
    expect(typography.textContent, 'It should render the text correctly').toBe(
      'Body Medium'
    );
    expect(fontSize, 'It should render the text at 14px').toBe('14px');
    expect(
      fontFamily,
      'It should render the text with the font-family Satoshi'
    ).toBe('Satoshi');
    expect(color, 'It should render the text with right color').toBe(
      'rgb(27, 27, 31)'
    );
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

    const typography = canvas.getByRole('text');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography.tagName, 'It should render in the P tag').toBe('P');
    expect(typography.textContent, 'It should render the text correctly').toBe(
      'Body Small'
    );
    expect(fontSize, 'It should render the text at 12px').toBe('12px');
    expect(
      fontFamily,
      'It should render the text with the font-family Satoshi'
    ).toBe('Satoshi');
    expect(color, 'It should render the text with right color').toBe(
      'rgb(27, 27, 31)'
    );
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

    const typography = canvas.getByRole('text');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography.tagName, 'It should render in the LABEL tag').toBe(
      'LABEL'
    );
    expect(typography.textContent, 'It should render the text correctly').toBe(
      'Label Large'
    );
    expect(fontSize, 'It should render the text at 14px').toBe('14px');
    expect(
      fontFamily,
      'It should render the text with the font-family Proto'
    ).toBe('Proto');
    expect(color, 'It should render the text with right color').toBe(
      'rgb(27, 27, 31)'
    );
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

    const typography = canvas.getByRole('text');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography.tagName, 'It should render in the LABEL tag').toBe(
      'LABEL'
    );
    expect(typography.textContent, 'It should render the text correctly').toBe(
      'Label Medium'
    );
    expect(fontSize, 'It should render the text at 12px').toBe('12px');
    expect(
      fontFamily,
      'It should render the text with the font-family Proto'
    ).toBe('Proto');
    expect(color, 'It should render the text with right color').toBe(
      'rgb(27, 27, 31)'
    );
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

    const typography = canvas.getByRole('text');
    const computedStyle = getComputedStyle(typography);

    const color = computedStyle.getPropertyValue('color');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    expect(typography.tagName, 'It should render in the LABEL tag').toBe(
      'LABEL'
    );
    expect(typography.textContent, 'It should render the text correctly').toBe(
      'Label Small'
    );
    expect(fontSize, 'It should render the text at 11px').toBe('11.008px');
    expect(
      fontFamily,
      'It should render the text with the font-family Proto'
    ).toBe('Proto');
    expect(color, 'It should render the text with right color').toBe(
      'rgb(27, 27, 31)'
    );
  },
};
