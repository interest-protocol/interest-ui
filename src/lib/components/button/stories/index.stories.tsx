import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PlusIcon, SwapIcon } from '../../../../storybook/icons';
import { Button } from '..';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['filled', 'outline', 'text', 'icon'],
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
  children: 'Enabled',
};

export const FilledWithPrefix = Template.bind({});

FilledWithPrefix.args = {
  variant: 'filled',
  children: 'Enabled',
  PrefixIcon: <PlusIcon />,
};

export const FilledWithSuffix = Template.bind({});

FilledWithSuffix.args = {
  variant: 'filled',
  children: 'Enabled',
  SuffixIcon: <PlusIcon />,
};

export const FilledWithCombined = Template.bind({});

FilledWithCombined.args = {
  variant: 'filled',
  children: 'Enabled',
  PrefixIcon: <PlusIcon />,
  SuffixIcon: <PlusIcon />,
};

export const Outline = Template.bind({});

Outline.args = {
  variant: 'outline',
  children: 'Enabled',
};

export const OutlineWithPrefix = Template.bind({});

OutlineWithPrefix.args = {
  variant: 'outline',
  children: 'Enabled',
  PrefixIcon: <PlusIcon />,
};

export const OutlineWithSuffix = Template.bind({});

OutlineWithSuffix.args = {
  variant: 'outline',
  children: 'Enabled',
  SuffixIcon: <PlusIcon />,
};

export const OutlineWithCombined = Template.bind({});

OutlineWithCombined.args = {
  variant: 'outline',
  children: 'Enabled',
  PrefixIcon: <PlusIcon />,
  SuffixIcon: <PlusIcon />,
};

export const Text = Template.bind({});

Text.args = {
  variant: 'text',
  children: 'Enabled',
};

export const TextWithPrefix = Template.bind({});

TextWithPrefix.args = {
  variant: 'text',
  children: 'Enabled',
  PrefixIcon: <PlusIcon />,
};

export const TextWithSuffix = Template.bind({});

TextWithSuffix.args = {
  variant: 'text',
  children: 'Enabled',
  SuffixIcon: <PlusIcon />,
};

export const TextWithCombined = Template.bind({});

TextWithCombined.args = {
  variant: 'text',
  children: 'Enabled',
  PrefixIcon: <PlusIcon />,
  SuffixIcon: <PlusIcon />,
};

export const Icon = Template.bind({});

Icon.args = {
  variant: 'icon',
  children: <SwapIcon />,
};
