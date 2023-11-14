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

export const PROTO_TITLE_1: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'PROTO_TITLE_1',
    children: 'Proto title 1',
  },
};

export const PROTO_TITLE_2: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'PROTO_TITLE_2',
    children: 'Proto title 2',
  },
};

export const PROTO_TITLE_3: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'PROTO_TITLE_3',
    children: 'Proto title 3',
  },
};

export const PROTO_TITLE_4: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'PROTO_TITLE_4',
    children: 'Proto title 4',
  },
};

export const PROTO_TITLE_5: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'PROTO_TITLE_5',
    children: 'Proto title 5',
  },
};

export const PROTO_TITLE_6: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'PROTO_TITLE_6',
    children: 'Proto title 6',
  },
};

export const PROTO_TITLE_7: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'PROTO_TITLE_7',
    children: 'Proto title 7',
  },
};

export const PROTO_TITLE_8: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'PROTO_TITLE_8',
    children: 'Proto title 8',
  },
};

export const PROTO_TITLE_9: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'PROTO_TITLE_9',
    children: 'Proto title 9',
  },
};

export const PROTO_TITLE_10: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'PROTO_TITLE_10',
    children: 'Proto title 10',
  },
};

export const SATOSHI_TITLE_1: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'SATOSHI_TITLE_1',
    children: 'Satoshi title 1',
  },
};

export const SATOSHI_TITLE_2: Story = {
  args: {
    as: 'p',
    color: 'onSurface',
    variant: 'SATOSHI_TITLE_2',
    children: 'Satoshi title 2',
  },
};

export const SATOSHI_TITLE_3: Story = {
  args: {
    as: 'label',
    color: 'onSurface',
    variant: 'SATOSHI_TITLE_3',
    children: 'Satoshi title 3',
  },
};
