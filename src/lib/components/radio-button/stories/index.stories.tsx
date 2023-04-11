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
  size: '18px',
  hideLabel: false,
  options: [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },
  ],
};

export const Checked = Template.bind({});

Checked.args = {
  name: 'radio',
  size: '18px',
  options: [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },
  ],
  initialValue: 'male',
  hideLabel: false,
};

export const CheckedDisabled = Template.bind({});

CheckedDisabled.args = {
  name: 'radio',
  size: '18px',
  options: [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },
  ],
  initialValue: 'female',
  disabled: true,
  hideLabel: false,
};

export const WithoutLabel = Template.bind({});

WithoutLabel.args = {
  name: 'radio',
  size: '18px',
  options: [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },
  ],
  hideLabel: true,
};
