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

export const Filled = Template.bind({});

Filled.args = {
  hideLabel: false,
  initialValue: false,
  size: '60px',
  options: ['off', 'on'],
};
