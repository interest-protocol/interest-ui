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
  options: ['male', 'female'],
};

export const WithoutLabel = Template.bind({});

WithoutLabel.args = {
  name: 'radio',
  size: '18px',
  hideLabel: true,
  options: ['male', 'female'],
};
