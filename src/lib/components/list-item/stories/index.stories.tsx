import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArrowRightIcon, RadioIcon } from '../../../../storybook/icons';
import { ArrowRightSVG } from '../../../icons';
import { SwitchButton } from '../../';
import { ListItem } from '..';

export default {
  title: 'List item',
  component: ListItem,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => (
  <ListItem {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
  title: 'List item',
  description: 'Supporting Text',
};

export const WithoutDescription = Template.bind({});

WithoutDescription.args = {
  title: 'List item',
};

export const WithPrefix = Template.bind({});

WithPrefix.args = {
  title: 'List item',
  description: 'Supporting Text',
  PrefixIcon: (
    <ArrowRightSVG
      maxWidth={'0.313rem'}
      maxHeight={'0.625rem'}
      width="100%"
      height="100%"
    />
  ),
};

export const WithPrefixWithoutDescription = Template.bind({});

WithPrefixWithoutDescription.args = {
  title: 'List item',
  PrefixIcon: <ArrowRightSVG maxWidth={'0.313rem'} maxHeight={'0.625rem'} />,
};

export const WithSuffix = Template.bind({});

WithSuffix.args = {
  title: 'List item',
  description: 'Supporting Text',
  SuffixIcon: <ArrowRightIcon />,
};

export const WithSuffixWithoutDescription = Template.bind({});

WithSuffixWithoutDescription.args = {
  title: 'List item',
  SuffixIcon: <ArrowRightIcon />,
};

export const WithSuffixSwitch = Template.bind({});

WithSuffixSwitch.args = {
  title: 'List item',
  description: 'Supporting Text',
  SuffixIcon: <SwitchButton name={'switch'} defaultValue={false} labels="" />,
};

export const WithSuffixSwitchWithoutDescription = Template.bind({});

WithSuffixSwitchWithoutDescription.args = {
  title: 'List item',
  SuffixIcon: <SwitchButton name={'switch'} defaultValue={false} labels="" />,
};

export const WithSuffixRadio = Template.bind({});

WithSuffixRadio.args = {
  title: 'List item',
  description: 'Supporting Text',
  metadata: '100+',
  SuffixIcon: <RadioIcon />,
};

export const WithSuffixRadioWithoutDescription = Template.bind({});

WithSuffixRadioWithoutDescription.args = {
  title: 'List item',
  SuffixIcon: <RadioIcon />,
};

export const WithPrefixAndSuffixRadioWithoutDescription = Template.bind({});

WithPrefixAndSuffixRadioWithoutDescription.args = {
  title: 'List item',
  PrefixIcon: (
    <ArrowRightSVG
      maxWidth={'0.313rem'}
      maxHeight={'0.625rem'}
      width="100%"
      height="100%"
    />
  ),
  SuffixIcon: <RadioIcon />,
};

export const WithPrefixAndSuffixSwitchWithoutDescription = Template.bind({});

WithPrefixAndSuffixSwitchWithoutDescription.args = {
  title: 'List item',
  PrefixIcon: (
    <ArrowRightSVG
      maxWidth={'0.313rem'}
      maxHeight={'0.625rem'}
      width="100%"
      height="100%"
    />
  ),
  SuffixIcon: <SwitchButton name={'switch'} defaultValue={false} labels="" />,
};
