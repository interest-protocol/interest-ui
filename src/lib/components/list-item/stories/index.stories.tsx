import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import React from 'react';

import { ArrowRightIcon } from '../../../../storybook/icons';
import { ArrowRightSVG } from '../../../icons';
import { RadioButton, ToggleButton } from '../../';
import { ListItem } from '..';

const meta: Meta<typeof ListItem> = {
  title: 'ListItem',
  component: ListItem,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    PrefixIcon: {
      control: { type: 'object' },
    },
    SuffixIcon: {
      control: { type: 'object' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ListItem>;

export const Normal: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByTestId('listItem');
    //const arrowRightIcon = canvas.getByTestId('arrow-right-icon');

    await userEvent.hover(canvas.getByTestId('listItem'));
    await userEvent.click(canvas.getByTestId('listItem'));
    expect(args.onClick).toHaveBeenCalledOnce();

    expect(listItem).toBeTruthy();
    //expect(arrowRightIcon).toBeTruthy();
    expect(args.title).toBe('List item');
    expect(args.description).toBe('Supporting Text');
  },
};

export const WithoutDescription: Story = {
  args: {
    title: 'List item',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByTestId('listItem');

    await userEvent.hover(canvas.getByTestId('listItem'));
    await userEvent.click(canvas.getByTestId('listItem'));
    expect(args.onClick).toHaveBeenCalledOnce();

    expect(listItem).toBeTruthy();
    expect(args.title).toBe('List item');
  },
};

export const WithPrefix: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    PrefixIcon: <ArrowRightIcon />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByTestId('listItem');

    await userEvent.hover(canvas.getByTestId('listItem'));
    await userEvent.click(canvas.getByTestId('listItem'));
    expect(args.onClick).toHaveBeenCalledOnce();

    const svgElements = listItem.querySelectorAll('svg');
    expect(svgElements.length).toBe(1);

    expect(listItem).toBeTruthy();
    expect(args.title).toBe('List item');
    expect(args.description).toBe('Supporting Text');
  },
};

export const WithPrefixWithoutDescription: Story = {
  args: {
    title: 'List item',
    PrefixIcon: <ArrowRightIcon />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByTestId('listItem');

    await userEvent.hover(canvas.getByTestId('listItem'));
    await userEvent.click(canvas.getByTestId('listItem'));
    expect(args.onClick).toHaveBeenCalledOnce();

    const svgElements = listItem.querySelectorAll('svg');
    expect(svgElements.length).toBe(1);

    expect(listItem).toBeTruthy();
    expect(args.title).toBe('List item');
  },
};

export const WithSuffix: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    SuffixIcon: <ArrowRightIcon />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByTestId('listItem');

    await userEvent.hover(canvas.getByTestId('listItem'));
    await userEvent.click(canvas.getByTestId('listItem'));
    expect(args.onClick).toHaveBeenCalledOnce();

    const svgElements = listItem.querySelectorAll('svg');
    expect(svgElements.length).toBe(1);

    expect(listItem).toBeTruthy();
    expect(args.title).toBe('List item');
    expect(args.description).toBe('Supporting Text');
  },
};

export const WithSuffixWithoutDescription: Story = {
  args: {
    title: 'List item',
    SuffixIcon: <ArrowRightIcon />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByTestId('listItem');

    await userEvent.hover(canvas.getByTestId('listItem'));
    await userEvent.click(canvas.getByTestId('listItem'));
    expect(args.onClick).toHaveBeenCalledOnce();

    const svgElements = listItem.querySelectorAll('svg');
    expect(svgElements.length).toBe(1);

    expect(listItem).toBeTruthy();
    expect(args.title).toBe('List item');
  },
};

export const WithSuffixToggle: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    SuffixIcon: <ToggleButton name={'toggle'} defaultValue={false} labels="" />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByTestId('listItem');

    await userEvent.hover(canvas.getByTestId('listItem'));
    await userEvent.click(canvas.getByTestId('listItem'));
    expect(args.onClick).toHaveBeenCalledOnce();

    expect(listItem).toBeTruthy();
    expect(args.SuffixIcon).toBeTruthy();
    expect(args.title).toBe('List item');
    expect(args.description).toBe('Supporting Text');
  },
};

export const WithSuffixToggleWithoutDescription: Story = {
  args: {
    title: 'List item',
    SuffixIcon: <ToggleButton name={'toggle'} defaultValue={false} labels="" />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByTestId('listItem');

    await userEvent.hover(canvas.getByTestId('listItem'));
    await userEvent.click(canvas.getByTestId('listItem'));
    expect(args.onClick).toHaveBeenCalledOnce();

    expect(args.SuffixIcon).toBeTruthy();
    expect(listItem).toBeTruthy();
    expect(args.title).toBe('List item');
  },
};

export const WithSuffixRadio: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    metadata: '100+',
    SuffixIcon: <RadioButton name={'radio1'} />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByTestId('listItem');

    await userEvent.hover(canvas.getByTestId('listItem'));
    await userEvent.click(canvas.getByTestId('listItem'));
    expect(args.onClick).toHaveBeenCalledOnce();

    const svgElements = listItem.querySelectorAll('svg');
    expect(svgElements.length).toBe(1);

    expect(listItem).toBeTruthy();
    expect(args.title).toBe('List item');
    expect(args.description).toBe('Supporting Text');
    expect(args.metadata).toBe('100+');
  },
};

export const WithSuffixRadioWithoutDescription: Story = {
  args: {
    title: 'List item',
    SuffixIcon: <RadioButton name={'radio1'} />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByTestId('listItem');

    await userEvent.hover(canvas.getByTestId('listItem'));
    await userEvent.click(canvas.getByTestId('listItem'));
    expect(args.onClick).toHaveBeenCalledOnce();

    const svgElements = listItem.querySelectorAll('svg');
    expect(svgElements.length).toBe(1);

    expect(listItem).toBeTruthy();
    expect(args.title).toBe('List item');
  },
};

export const WithPrefixAndSuffixRadioWithoutDescription: Story = {
  args: {
    title: 'List item',
    PrefixIcon: (
      <ArrowRightSVG
        maxWidth={'0.313rem'}
        maxHeight={'0.625rem'}
        width="100%"
        height="100%"
      />
    ),
    SuffixIcon: <RadioButton name={'radio1'} />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByTestId('listItem');

    await userEvent.hover(canvas.getByTestId('listItem'));
    await userEvent.click(canvas.getByTestId('listItem'));
    expect(args.onClick).toHaveBeenCalledOnce();

    const svgElements = listItem.querySelectorAll('svg');
    expect(svgElements.length).toBe(2);

    expect(listItem).toBeTruthy();
    expect(args.title).toBe('List item');
  },
};

export const WithPrefixAndSuffixToggleWithoutDescription: Story = {
  args: {
    title: 'List item',
    PrefixIcon: <ArrowRightIcon />,
    SuffixIcon: <ToggleButton name={'toggle'} defaultValue={false} labels="" />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByTestId('listItem');

    await userEvent.hover(canvas.getByTestId('listItem'));
    await userEvent.click(canvas.getByTestId('listItem'));
    expect(args.onClick).toHaveBeenCalledOnce();

    const svgElements = listItem.querySelectorAll('svg');
    expect(svgElements.length).toBe(1);

    expect(listItem).toBeTruthy();
    expect(args.title).toBe('List item');
  },
};
