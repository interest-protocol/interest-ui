import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { CircleSVG } from '../../../icons';
import { ToggleButton } from '../../toggle';
import { DropdownButton } from '..';

const meta: Meta<typeof DropdownButton> = {
  title: 'DropdownButton',
  component: DropdownButton,
  argTypes: {
    label: {
      defaultValue: 'Label',
      control: { type: 'text' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownButton>;

export const WithLabel: Story = {
  args: {
    label: 'Label',
    disabled: false,
    title: 'Title',
    icon: <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />,
    items: [
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={false} />,
        title: 'List item',
      },
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={true} />,
        title: 'List item',
      },
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={false} />,
        title: 'List item',
      },
    ],
  },
};

export const WithLabelAndDisableds: Story = {
  args: {
    label: 'Label',
    disabled: false,
    title: 'Title',
    icon: <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />,
    items: [
      {
        disabled: true,
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: (
          <ToggleButton name="toggle" disabled defaultValue={false} />
        ),
        title: 'List item',
      },
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={true} />,
        title: 'List item',
      },
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={false} />,
        title: 'List item',
      },
    ],
  },
};

export const WithoutLabelAndDisableds: Story = {
  args: {
    icon: <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />,
    items: [
      {
        disabled: true,
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: (
          <ToggleButton name="toggle" disabled defaultValue={false} />
        ),
        title: 'List item',
      },
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={true} />,
        title: 'List item',
      },
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={false} />,
        title: 'List item',
      },
    ],
  },
};
