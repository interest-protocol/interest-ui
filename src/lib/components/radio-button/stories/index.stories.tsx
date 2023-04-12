import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RadioButton } from '..';

export default {
  title: 'Radio',
  component: RadioButton,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
  name: 'radio',
};

export const NormalDisabled = Template.bind({});

NormalDisabled.args = {
  name: 'radio',
  disabled: true,
};

export const Checked = Template.bind({});

Checked.args = {
  name: 'radio',
  checked: true,
};

export const CheckedDisabled = Template.bind({});

CheckedDisabled.args = {
  name: 'radio',
  checked: true,
  disabled: true,
};
