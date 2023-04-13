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
  labels: 'Switch',
  defaultValue: false,
};

export const Selected = Template.bind({});

Selected.args = {
  name: 'switch',
  labels: 'Switch',
  defaultValue: true,
};

export const SelectedDisabled = Template.bind({});

SelectedDisabled.args = {
  name: 'switch',
  disabled: true,
  labels: 'Switch',
  defaultValue: true,
};

export const DoubleLabel = Template.bind({});

DoubleLabel.args = {
  name: 'switch',
  defaultValue: true,
  labels: ['on', 'off'],
};

export const WithoutLabel = Template.bind({});

WithoutLabel.args = {
  name: 'switch',
  hideLabel: true,
  defaultValue: false,
};
