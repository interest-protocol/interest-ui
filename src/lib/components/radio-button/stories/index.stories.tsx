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
  label: 'Escolha o sexo',
  name: 'radio',
  size: '30px',
  hideLabel: false,
};
