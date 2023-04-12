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
  const [value, setValue] = useState(50);

  return (
    <Box p="3xl" bg="white">
      <Slider {...args} onChange={setValue} value={value} />
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {
  min: 0,
  max: 100,
};
