import { Meta, StoryObj } from '@storybook/react';
import { expect, waitFor, within } from '@storybook/test';
import userEvent from '@testing-library/user-event';
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
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole('list');

    await step('Initial validations in the list', async () => {
      expect(
        list,
        'It is expected that the element will be rendered'
      ).toBeInTheDocument();
      expect(
        list.children[0].textContent,
        `it is expected that the list has the title ${args.title}`
      ).toBe(args.title);
      expect(
        list.children,
        'it is expected that the list has two elements inside'
      ).toHaveLength(2);
      const listbox = list.children[1];
      expect(
        listbox,
        'It is expected that the list options are not visible'
      ).toHaveStyle('display: none');
    });

    await step('List option validations', async () => {
      await userEvent.click(list);
      await waitFor(() => {
        const listbox = canvas.getByRole('listbox');
        expect(
          listbox,
          'it is expected that the options will be rendered'
        ).toBeInTheDocument();
        expect(
          listbox.children,
          'it is expected that the options have the same amount available'
        ).toHaveLength(args.items.length);
      });
    });
  },
};
