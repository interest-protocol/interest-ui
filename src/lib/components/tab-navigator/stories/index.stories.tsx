import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box } from '../../../elements';
import { TabsNavigator } from '..';
import { TabNavigator } from '../tabs-navigator.types';

const meta: Meta<typeof TabsNavigator> = {
  title: 'TabsNavigator',
  component: TabsNavigator,
};

export default meta;

const tabs: [TabNavigator, TabNavigator] = [
  {
    label: 'Borrow',
    content: (
      <Box p="3xl" surface="surface5">
        First Tab Content: Borrow
      </Box>
    ),
  },
  {
    label: 'Repay',
    content: (
      <Box p="3xl" surface="surface1">
        Second Tab Content: Repay
      </Box>
    ),
  },
];

type Story = StoryObj<typeof TabsNavigator>;

export const Normal: Story = {
  render: ({ onChange, ...args }) => (
    <Box {...args} bg="background" p="3xl">
      <TabsNavigator tabs={tabs} onChange={onChange} />
    </Box>
  ),
};
