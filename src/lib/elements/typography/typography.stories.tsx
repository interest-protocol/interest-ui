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
    color: 'text',
    variant: 'displayLarge',
    children: 'Display large',
  },
};

export const DisplaySmall: Story = {
  args: {
    as: 'h1',
    color: 'text',
    variant: 'displaySmall',
    children: 'Display small',
  },
};

export const Title1: Story = {
  args: {
    as: 'h1',
    color: 'text',
    variant: 'title1',
    children: 'Heading 1',
  },
};

export const Title2: Story = {
  args: {
    as: 'h2',
    color: 'text',
    variant: 'title2',
    children: 'Heading 2',
  },
};

export const Title3: Story = {
  args: {
    as: 'h3',
    color: 'text',
    variant: 'title3',
    children: 'Heading 3',
  },
};

export const Title4: Story = {
  args: {
    as: 'h4',
    color: 'text',
    variant: 'title4',
    children: 'Heading 4',
  },
};

export const Title5: Story = {
  args: {
    as: 'h5',
    color: 'text',
    variant: 'title5',
    children: 'Heading 5',
  },
};

export const Title6: Story = {
  args: {
    as: 'h6',
    color: 'text',
    variant: 'title6',
    children: 'Heading 6',
  },
};

export const Large: Story = {
  args: {
    as: 'p',
    color: 'text',
    variant: 'large',
    children: 'Text L',
  },
};

export const Medium: Story = {
  args: {
    as: 'p',
    color: 'text',
    variant: 'medium',
    children: 'Text M',
  },
};

export const Small: Story = {
  args: {
    as: 'p',
    color: 'text',
    variant: 'small',
    children: 'Text S',
  },
};

export const ExtraSmall: Story = {
  args: {
    as: 'p',
    color: 'text',
    variant: 'extraSmall',
    children: 'Text XS',
  },
};
