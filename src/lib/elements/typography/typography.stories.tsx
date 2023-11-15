import { Meta, StoryObj } from '@storybook/react';

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
};

export const DisplayMedium: Story = {
  args: {
    as: 'h2',
    size: 'medium',
    color: 'onSurface',
    variant: 'display',
    children: 'Display small',
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
};

export const headlineLarge: Story = {
  args: {
    as: 'p',
    size: 'large',
    color: 'onSurface',
    variant: 'headline',
    children: 'Headline Large',
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
};

export const headlineSmall: Story = {
  args: {
    as: 'p',
    size: 'small',
    color: 'onSurface',
    variant: 'headline',
    children: 'Headline Small',
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
};

export const titleMedium: Story = {
  args: {
    as: 'p',
    size: 'medium',
    color: 'onSurface',
    variant: 'title',
    children: 'Title Medium',
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
};

export const bodyLarge: Story = {
  args: {
    as: 'p',
    size: 'large',
    color: 'onSurface',
    variant: 'body',
    children: 'Body Large',
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
};

export const bodySmall: Story = {
  args: {
    as: 'p',
    size: 'small',
    color: 'onSurface',
    variant: 'body',
    children: 'Body Small',
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
};

export const labelMedium: Story = {
  args: {
    as: 'label',
    size: 'medium',
    color: 'onSurface',
    variant: 'label',
    children: 'Label Medium',
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
};
