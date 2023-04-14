import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ProgressIndicator } from '..';

export default {
  title: 'Progress Indicator',
  component: ProgressIndicator,
  argTypes: {
    variant: {
      defaultValue: 'bar',
      options: ['bar', 'circle', 'loading'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof ProgressIndicator>;

const Template: ComponentStory<typeof ProgressIndicator> = (args) => (
  <ProgressIndicator {...args} />
);

export const NormalBar = Template.bind({});

NormalBar.args = {
  value: 25,
};

export const WarningBar = Template.bind({});

WarningBar.args = {
  value: 75,
};

export const DangerousBar = Template.bind({});

DangerousBar.args = {
  value: 95,
};

export const Circle = Template.bind({});

Circle.args = {
  variant: 'circle',
  value: 25,
};

export const BigCircle = Template.bind({});

BigCircle.args = {
  variant: 'circle',
  value: 50,
  size: 80,
};

export const LoadingCircle = Template.bind({});

LoadingCircle.args = {
  variant: 'loading',
};
