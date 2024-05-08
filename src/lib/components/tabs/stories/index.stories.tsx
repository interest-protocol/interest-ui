import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, waitFor, within } from '@storybook/test';

import { Tabs } from '..';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Circle: Story = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    type: 'circle',
    width: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tabs = canvas.getByTestId('tabsTest');

    await waitFor(() => {
      const computedStyle = getComputedStyle(tabs);
      const borderRadius = computedStyle.getPropertyValue('border-radius');

      expect(borderRadius).toBe('159984px');
    });
  },
};

export const Square: Story = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    type: 'square',
    width: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tabs = canvas.getByTestId('tabsTest');

    await waitFor(() => {
      const computedStyle = getComputedStyle(tabs);
      const borderRadius = computedStyle.getPropertyValue('border-radius');

      expect(borderRadius).toBe('10px');
    });
  },
};

export const ChangeTabAction: Story = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    type: 'circle',
    onChangeTab: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const tabs = canvas.getByTestId('tabsTest');
    const tabItems = tabs.childNodes;
    expect(tabItems).toHaveLength(4);

    const lastChild = tabs.lastElementChild as HTMLElement;

    lastChild.click();

    expect(args.onChangeTab).toHaveBeenCalledOnce();
    expect(args.onChangeTab).toHaveBeenLastCalledWith(tabItems.length - 1);
  },
};
