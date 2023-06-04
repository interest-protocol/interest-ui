import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { v4 } from 'uuid';

import { ArrowRightIcon } from '../../../../storybook/icons';
import { ListItem } from '../../list-item';
import { SwitchButton } from '../../switch';
import { List } from '..';

const meta: Meta<typeof List> = {
  title: 'List',
  component: List,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    items: {
      control: { type: 'object' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof List>;

export const Normal: Story = {
  args: {
    title: 'List Title',
    items: [
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
  },
};
