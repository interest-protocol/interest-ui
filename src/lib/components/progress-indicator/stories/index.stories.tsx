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
      options: [0, 25, 50, 75, 100],
      control: { type: 'select' },
    },
    size: {
      type: 'number',
      defaultValue: 50,
    },
  },
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

export const BarZeroPercent = Template.bind({});

BarZeroPercent.args = {
  variant: 'bar',
  value: 0,
};

export const BarTwentyFivePercent = Template.bind({});

BarTwentyFivePercent.args = {
  variant: 'bar',
  value: 25,
};

export const BarFiftyPercent = Template.bind({});

BarFiftyPercent.args = {
  variant: 'bar',
  value: 50,
};

export const BarSeventyFivePercent = Template.bind({});

BarSeventyFivePercent.args = {
  variant: 'bar',
  value: 75,
};

export const BarOneHundredPercent = Template.bind({});

BarOneHundredPercent.args = {
  variant: 'bar',
  value: 100,
};

export const CirlceZeroPercent = Template.bind({});

CirlceZeroPercent.args = {
  variant: 'circle',
  value: 0,
};

export const CirlceTwentyFivePercent = Template.bind({});

CirlceTwentyFivePercent.args = {
  variant: 'circle',
  value: 25,
};

export const CirlceFiftyPercent = Template.bind({});

CirlceFiftyPercent.args = {
  variant: 'circle',
  value: 50,
};

export const CirlceSeventyFivePercent = Template.bind({});

CirlceSeventyFivePercent.args = {
  variant: 'circle',
  value: 75,
};

export const CirlceOneHundredPercent = Template.bind({});

CirlceOneHundredPercent.args = {
  variant: 'circle',
  value: 100,
};
