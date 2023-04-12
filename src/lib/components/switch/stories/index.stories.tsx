import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SwitchButton } from '..';

export default {
  title: 'Switch',
  component: SwitchButton,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof SwitchButton>;

const Template: ComponentStory<typeof SwitchButton> = (args) => (
  <SwitchButton {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
  name: 'switch',
  hideLabel: false,
  initialValue: false,
  options: ['off', 'on'],
};

export const Selected = Template.bind({});

Selected.args = {
  name: 'switch',
  hideLabel: false,
  initialValue: true,
  options: ['off', 'on'],
};

export const SelectedDisabled = Template.bind({});

SelectedDisabled.args = {
  name: 'switch',
  hideLabel: false,
  initialValue: true,
  options: ['off', 'on'],
  disabled: true,
};

export const WithoutLabel = Template.bind({});

WithoutLabel.args = {
  name: 'switch',
  hideLabel: true,
  initialValue: false,
  options: ['off', 'on'],
};
