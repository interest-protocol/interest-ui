import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PlusIcon, SwapIcon } from '../../../../storybook/icons';
import { TextField } from '..';

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});

Default.args = {
  placeholder: '0.123',
};

export const WithPrefix = Template.bind({});

WithPrefix.args = {
  placeholder: '0.123',
  PrefixIcon: <SwapIcon />,
};

export const WithSuffix = Template.bind({});

WithSuffix.args = {
  placeholder: '0.123',
  SuffixIcon: <PlusIcon />,
};

export const Error = Template.bind({});

Error.args = {
  error: 'Supporting text',
  placeholder: '0.123',
};

export const ErrorWithPrefix = Template.bind({});

ErrorWithPrefix.args = {
  error: 'Supporting text',
  placeholder: '0.123',
  PrefixIcon: <SwapIcon />,
};

export const ErrorWithSuffix = Template.bind({});

ErrorWithSuffix.args = {
  error: 'Supporting text',
  placeholder: '0.123',
  SuffixIcon: <PlusIcon />,
};

export const Success = Template.bind({});

Success.args = {
  valid: 'Supporting text',
  placeholder: '0.123',
};

export const SuccessWithPrefix = Template.bind({});

SuccessWithPrefix.args = {
  valid: 'Supporting text',
  placeholder: '0.123',
  PrefixIcon: <SwapIcon />,
};

export const SuccessWithSuffix = Template.bind({});

SuccessWithSuffix.args = {
  valid: 'Supporting text',
  placeholder: '0.123',
  SuffixIcon: <PlusIcon />,
};
