import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { Box } from '../../../elements';
import { Slider } from '..';

export default {
  title: 'Slider',
  component: Slider,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
  return (
    <Box
      p="3xl"
      bg="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Slider {...args} />
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {
  min: 0,
  max: 100,
};
