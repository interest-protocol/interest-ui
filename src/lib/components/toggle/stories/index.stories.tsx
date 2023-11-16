import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TickSVG, TimesSVG } from '../../../icons';
import { ToggleButton } from '..';

const meta: Meta<typeof ToggleButton> = {
  title: 'Toggle',
  component: ToggleButton,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Normal: Story = {
  args: {
    name: 'toggle',
    defaultValue: false,
  },
};

export const NormalWithOnChangeDemo: Story = {
  args: {
    name: 'toggle',
    defaultValue: false,
    onChange: () => {
      alert('changed');
    },
  },
};

export const WithActiveIcon: Story = {
  args: {
    name: 'toggle',
    defaultValue: true,
    activeIcon: <TickSVG maxWidth=".875rem" maxHeight=".875rem" width="100%" />,
  },
};

export const WithInactiveIcon: Story = {
  args: {
    name: 'toggle',
    defaultValue: false,
    inactiveIcon: (
      <TimesSVG maxWidth=".875rem" maxHeight=".875rem" width="100%" />
    ),
  },
};

export const WithActiveAndInactiveIcon: Story = {
  args: {
    name: 'toggle',
    defaultValue: false,
    activeIcon: <TickSVG maxWidth=".875rem" maxHeight=".875rem" width="100%" />,
    inactiveIcon: (
      <TimesSVG maxWidth=".875rem" maxHeight=".875rem" width="100%" />
    ),
  },
};

export const Selected: Story = {
  args: {
    name: 'toggle',
    defaultValue: true,
  },
};

export const SelectedDisabled: Story = {
  args: {
    name: 'toggle',
    disabled: true,
    defaultValue: true,
  },
};

export const NotSelectedDisabled: Story = {
  args: {
    name: 'toggle',
    disabled: true,
    defaultValue: false,
  },
};

export const SingleLabel: Story = {
  args: {
    name: 'toggle',
    defaultValue: true,
    labels: { label: 'Toggle Label' },
  },
};

export const DoubleLabel: Story = {
  args: {
    name: 'toggle',
    defaultValue: true,
    labels: { label: 'Toggle Label', supportingLabel: 'Supporting text' },
  },
};
