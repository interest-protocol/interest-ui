import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import React from 'react';
import { v4 } from 'uuid';

import { ArrowRightIcon } from '../../../../storybook/icons';
import { ListItem } from '../../list-item';
import { ToggleButton } from '../../toggle';
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
        SuffixIcon={<ToggleButton name={'toggle'} defaultValue={false} />}
        key={v4()}
      />,
      <ListItem
        title="List Option C"
        SuffixIcon={<ArrowRightIcon />}
        key={v4()}
      />,
    ],
  },

  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const list = canvas.getByTestId('list');

    await userEvent.hover(canvas.getByTestId('list'));
    await userEvent.click(canvas.getByTestId('list'));
    await userEvent.click(canvas.getByTestId('arrow-right-icon'));

    const listItems = args.items;

    expect(list).toBeTruthy();
    expect(args.title).toBe('List Title');
    expect(listItems).toHaveLength(3);
  },
};
