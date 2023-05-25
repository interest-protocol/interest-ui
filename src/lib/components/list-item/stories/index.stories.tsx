import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ArrowRightIcon } from '../../../../storybook/icons';
import { ArrowRightSVG } from '../../../icons';
import { RadioButton, SwitchButton } from '../../';
import { ListItem } from '..';

const meta: Meta<typeof ListItem> = {
  title: 'ListItem',
  component: ListItem,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    PrefixIcon: {
      control: { type: 'object' },
    },
    SuffixIcon: {
      control: { type: 'object' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ListItem>;

export const Normal: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    onClick: () => alert('clicked'),
  },
};

export const WithoutDescription: Story = {
  args: {
    title: 'List item',
  },
};

export const WithPrefix: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    PrefixIcon: <ArrowRightIcon />,
  },
};

export const WithPrefixWithoutDescription: Story = {
  args: {
    title: 'List item',
    PrefixIcon: <ArrowRightIcon />,
  },
};

export const WithSuffix: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    SuffixIcon: <ArrowRightIcon />,
  },
};

export const WithSuffixWithoutDescription: Story = {
  args: {
    title: 'List item',
    SuffixIcon: <ArrowRightIcon />,
  },
};

export const WithSuffixSwitch: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    SuffixIcon: <SwitchButton name={'switch'} defaultValue={false} labels="" />,
  },
};

export const WithSuffixSwitchWithoutDescription: Story = {
  args: {
    title: 'List item',
    SuffixIcon: <SwitchButton name={'switch'} defaultValue={false} labels="" />,
  },
};

export const WithSuffixRadio: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    metadata: '100+',
    SuffixIcon: <RadioButton name={'radio1'} />,
  },
};

export const WithSuffixRadioWithoutDescription: Story = {
  args: {
    title: 'List item',
    SuffixIcon: <RadioButton name={'radio1'} />,
  },
};

export const WithPrefixAndSuffixRadioWithoutDescription: Story = {
  args: {
    title: 'List item',
    PrefixIcon: (
      <ArrowRightSVG
        maxWidth={'0.313rem'}
        maxHeight={'0.625rem'}
        width="100%"
        height="100%"
      />
    ),
    SuffixIcon: <RadioButton name={'radio1'} />,
  },
};

export const WithPrefixAndSuffixSwitchWithoutDescription: Story = {
  args: {
    title: 'List item',
    PrefixIcon: <ArrowRightIcon />,
    SuffixIcon: <SwitchButton name={'switch'} defaultValue={false} labels="" />,
  },
};
