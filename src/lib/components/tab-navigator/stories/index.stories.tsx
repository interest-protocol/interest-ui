import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Box } from '../../../elements';
import TabsNavigator from '..';

export default {
  title: 'TabsNavigator',
  component: TabsNavigator,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof TabsNavigator>;

const tabs = [
  { label: 'Borrow', content: <Box>First Tab Content: Borrow</Box> },
  { label: 'Repay', content: <Box>Second Tab Content: Repay</Box> },
];

const Template: ComponentStory<typeof TabsNavigator> = (args) => (
  <Box width={['unset', 'unset', '56.25rem', '56.25rem']}>
    <TabsNavigator {...args} tabs={tabs} />
  </Box>
);
export const Default = Template.bind({});
