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
  hideLabel: false,
  initialValue: false,
  size: '30px',
  options: ['off', 'on'],
};

export const Selected = Template.bind({});

Selected.args = {
  hideLabel: false,
  initialValue: true,
  size: '30px',
  options: ['off', 'on'],
};

export const SelectedDisabled = Template.bind({});

SelectedDisabled.args = {
  hideLabel: false,
  initialValue: true,
  size: '30px',
  options: ['off', 'on'],
  disabled: true,
};

export const WithoutLabel = Template.bind({});

WithoutLabel.args = {
  hideLabel: true,
  initialValue: false,
  size: '30px',
  options: ['off', 'on'],
};
