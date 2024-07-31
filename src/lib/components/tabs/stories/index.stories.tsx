import { Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, fn, within } from '@storybook/test';

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
    onChangeTab: fn(),
    width: '',
  },
  play: async ({ canvasElement, step, args }) => {
    let currentOption = 0;
    const canvas = within(canvasElement);
    const tabs = canvas.getByRole('tablist');

    await step('Check the structure of the Tab Circular', async () => {
      expect(
        tabs,
        'It is expected that the tab has a full border-radius'
      ).toHaveStyle('border-radius: 159984px');
      expect(
        tabs,
        'It is expected that the tab has a background #00000014'
      ).toHaveStyle('background-color: #00000014');
      expect(
        tabs.childNodes.length,
        `It is expected that the tab has ${args.items.length} tabItems`
      ).toBe(args.items.length);
    });

    await step(
      'Check that the selected option is correctly applied ',
      async () => {
        expect(
          tabs.childNodes[currentOption].textContent,
          `It is expected that the selected option will be option "${args.items[currentOption]}"`
        ).toBe(args.items[currentOption]);
        const tabItemWrapperSelected =
          tabs.children[currentOption].children[0].childNodes[1];
        expect(
          tabItemWrapperSelected,
          'It is expected that the selected option has a wrapper with "background-color #fff" over it'
        ).toHaveStyle('background-color: #fff');
        expect(
          tabItemWrapperSelected,
          'It is expected that the selected option has a wrapper with "border-radius: full" over it'
        ).toHaveStyle('border-radius: 159984px');
      }
    );

    await step('Check navigation between options', async () => {
      currentOption++;
      await fireEvent.click(tabs.children[currentOption]);

      const newTabs = canvas.getByRole('tablist');
      expect(
        newTabs.children[currentOption].children[0].children.length,
        'It is expected that the selected option has two nodes'
      ).toBe(2);
      expect(
        args.onChangeTab,
        'It is expected that the onChange function has been executed at least once'
      ).toHaveBeenCalledOnce();
    });
  },
};

export const Square: Story = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    type: 'square',
    onChangeTab: fn(),
    width: '',
  },
  play: async ({ canvasElement, step, args }) => {
    let currentOption = 0;
    const canvas = within(canvasElement);
    const tabs = canvas.getByRole('tablist');

    await step('Check the structure of the Tab Square', async () => {
      expect(
        tabs,
        'It is expected that the tab has a full border-radius'
      ).toHaveStyle('border-radius: 10px');
      expect(
        tabs,
        'It is expected that the tab has a background #00000014'
      ).toHaveStyle('background-color: #00000014');
      expect(
        tabs.childNodes.length,
        `It is expected that the tab has ${args.items.length} tabItems`
      ).toBe(args.items.length);
    });

    await step(
      'Check that the selected option is correctly applied ',
      async () => {
        expect(
          tabs.childNodes[currentOption].textContent,
          `It is expected that the selected option will be option "${args.items[currentOption]}"`
        ).toBe(args.items[currentOption]);
        const tabItemWrapperSelected =
          tabs.children[currentOption].children[0].childNodes[1];
        expect(
          tabItemWrapperSelected,
          'It is expected that the selected option has a wrapper with "background-colour #fff" over it'
        ).toHaveStyle('background-color: #fff');
        expect(
          tabItemWrapperSelected,
          'It is expected that the selected option has a wrapper with "border-radius: full" over it'
        ).toHaveStyle('border-radius: 8px');
      }
    );

    await step('Check navigation between options', async () => {
      currentOption++;
      await fireEvent.click(tabs.children[currentOption]);

      const newTabs = canvas.getByRole('tablist');
      expect(
        args.onChangeTab,
        'It is expected that the onChange function has been executed at least once'
      ).toHaveBeenCalledOnce();
      expect(
        newTabs.children[currentOption].children[0].children.length,
        'It is expected that the selected option has two nodes'
      ).toBe(2);
    });
  },
};
