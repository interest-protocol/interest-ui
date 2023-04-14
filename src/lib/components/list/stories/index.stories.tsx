import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { v4 } from 'uuid';

import { ArrowRightIcon } from '../../../../storybook/icons';
import { ListItem } from '../../list-item';
import { SwitchButton } from '../../switch';
import { List } from '..';

export default {
  title: 'List',
  component: List,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  title: 'List Title',
  Items: [
    <ListItem title="List Option A" metadata="100+" key={v4()} />,
    <ListItem
      title="List Option B"
      description="Supporting Text"
      SuffixIcon={
        <SwitchButton name={'switch'} defaultValue={false} labels="" />
      }
      key={v4()}
    />,
    <ListItem
      title="List Option C"
      SuffixIcon={<ArrowRightIcon />}
      key={v4()}
    />,
  ],
};
