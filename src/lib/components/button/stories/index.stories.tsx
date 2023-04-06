import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SwapIcon } from '../../../../storybook/icons';
import { Button } from '..';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['filled', 'outline', 'text', 'icon'],
      control: { type: 'select' },
    },
    size: {
      options: ['medium', 'large', 'icon'],
      control: { type: 'select' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Filled = Template.bind({});

Filled.args = {
  variant: 'filled',
  size: 'medium',
  children: 'Enabled',
};

export const Outline = Template.bind({});

Outline.args = {
  variant: 'outline',
  size: 'medium',
  children: 'Enabled',
};

export const Text = Template.bind({});

Text.args = {
  variant: 'text',
  size: 'medium',
  children: 'Enabled',
};

export const Icon = Template.bind({});

Icon.args = {
  variant: 'icon',
  size: 'icon',
  children: <SwapIcon />,
};
