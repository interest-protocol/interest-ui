import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Progress } from '..';

export default {
  title: 'Progress',
  component: Progress,
  argTypes: {
    variant: {
      options: ['bar', 'circle'],
      control: { type: 'radio' },
    },
    value: {
      type: 'number',
      defaultValue: 50,
    },
  },
  size: {
    type: 'number',
    defaultValue: 50,
  },
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

export const BarZeroPercent = Template.bind({});

BarZeroPercent.args = {
  value: 0,
};

export const BarTwentyFivePercent = Template.bind({});

BarTwentyFivePercent.args = {
  value: 25,
};

export const BarFiftyPercent = Template.bind({});

BarFiftyPercent.args = {
  value: 50,
};

export const BarSeventyFivePercent = Template.bind({});

BarSeventyFivePercent.args = {
  value: 75,
};

export const BarOneHundredPercent = Template.bind({});

BarOneHundredPercent.args = {
  value: 100,
};

export const CircleZeroPercent = Template.bind({});

CircleZeroPercent.args = {
  variant: 'circle',
  value: 0,
  size: 50,
};

export const CircleTwentyFivePercent = Template.bind({});

CircleTwentyFivePercent.args = {
  variant: 'circle',
  value: 25,
  size: 50,
};

export const CircleFiftyPercent = Template.bind({});

CircleFiftyPercent.args = {
  variant: 'circle',
  value: 50,
  size: 50,
};

export const CircleSeventyFivePercent = Template.bind({});

CircleSeventyFivePercent.args = {
  variant: 'circle',
  value: 75,
  size: 50,
};

export const CircleOneHundredPercent = Template.bind({});

CircleOneHundredPercent.args = {
  variant: 'circle',
  value: 100,
  size: 50,
};
