import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Slider } from '..';
import { Box } from '../../../elements';

export default {
  title: 'Slider',
  component: Slider,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    initial: {
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
  return (
    <Box p="3xl" backgroundColor="#fff">
      <Slider {...args} />
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {
  min: 0,
  max: 100,
};

export const InTheMiddle = Template.bind({});

InTheMiddle.args = {
  min: 0,
  max: 100,
  initial: 50,
};

export const InTheEnd = Template.bind({});

InTheEnd.args = {
  min: 0,
  max: 100,
  initial: 100,
};
