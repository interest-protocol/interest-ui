import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Progress } from '..';

export default {
  title: 'Progress',
  component: Progress,
  argTypes: {
    variant: {
      options: ['bar', 'round'],
      control: { type: 'radio' },
    },
    value: {
      options: [0, 25, 50, 75, 100],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

export const ZeroPercent = Template.bind({});

ZeroPercent.args = {
  variant: 'bar',
  value: 0,
};

export const TwentyFivePercent = Template.bind({});

TwentyFivePercent.args = {
  variant: 'bar',
  value: 25,
};

export const FiftyPercent = Template.bind({});

FiftyPercent.args = {
  variant: 'bar',
  value: 50,
};

export const SeventyFivePercent = Template.bind({});

SeventyFivePercent.args = {
  variant: 'bar',
  value: 75,
};

export const OneHundredPercent = Template.bind({});

OneHundredPercent.args = {
  variant: 'bar',
  value: 100,
};
