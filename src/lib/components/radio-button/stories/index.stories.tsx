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
  label: 'Gender',
  name: 'radio',
  size: '18px',
  hideLabel: false,
};

export const Checked = Template.bind({});

Checked.args = {
  label: 'Gender',
  name: 'radio',
  size: '18px',
  checked: true,
};

export const CheckedDisabled = Template.bind({});

CheckedDisabled.args = {
  label: 'Gender',
  name: 'radio',
  size: '18px',
  checked: true,
  disabled: true,
};

export const WithoutLabel = Template.bind({});

WithoutLabel.args = {
  label: 'Gender',
  name: 'radio',
  size: '18px',
  hideLabel: true,
};
