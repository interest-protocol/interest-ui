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
    as: 'p',
    color: 'onSurface',
    variant: 'displayLarge',
    children: 'Display large',
  },
};

export const DisplayMedium: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'displayMedium',
    children: 'Display small',
  },
};

export const DisplaySmall: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'displaySmall',
    children: 'Display small',
  },
};

export const headlineLarge: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'headlineLarge',
    children: 'Headline Large',
  },
};

export const headlineMedium: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'headlineMedium',
    children: 'Headline Medium',
  },
};

export const headlineSmall: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'headlineSmall',
    children: 'Headline Small',
  },
};

export const titleLarge: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'titleLarge',
    children: 'Title Large',
  },
};

export const titleMedium: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'titleMedium',
    children: 'Title Medium',
  },
};

export const titleSmall: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'titleSmall',
    children: 'Title Small',
  },
};

export const bodyLarge: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'bodyLarge',
    children: 'Body Large',
  },
};

export const bodyMedium: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'bodyMedium',
    children: 'Body Medium',
  },
};

export const bodySmall: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'bodySmall',
    children: 'Body Small',
  },
};

export const labelLarge: Story = {
  args: {
    as: 'label',
    color: 'onSurface',
    variant: 'labelLarge',
    children: 'Label Large',
  },
};

export const labelMedium: Story = {
  args: {
    as: 'label',
    color: 'onSurface',
    variant: 'labelMedium',
    children: 'Label Medium',
  },
};

export const labelSmall: Story = {
  args: {
    as: 'label',
    color: 'onSurface',
    variant: 'labelSmall',
    children: 'Label Small',
  },
};
