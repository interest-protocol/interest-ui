import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import React from 'react';

import { CircleSVG } from '../../../icons';
import { RadioButton } from '../../radio-button';
import { ToggleButton } from '../../toggle';
import { DropdownButton } from '..';

const meta: Meta<typeof DropdownButton> = {
  title: 'DropdownButton',
  component: DropdownButton,
  argTypes: {
    label: {
      defaultValue: 'Label',
      control: { type: 'text' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownButton>;

export const WithLabel: Story = {
  args: {
    label: 'Label',
    disabled: false,
    items: [
      {
        SuffixIcon: <RadioButton defaultValue={false} />,
        title: 'Option 1',
      },
      {
        SuffixIcon: <RadioButton defaultValue={false} />,
        title: 'Option 2',
      },
    ],
    borderRadius: 'xs',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const dropdown = canvas.getByRole('button');
    const computedStyle = getComputedStyle(dropdown);
    const borderRadius = computedStyle.getPropertyValue('border-radius');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElements = dropdown.querySelectorAll('svg');
    expect(svgElements).toHaveLength(1);

    const firstChild = dropdown.firstElementChild as SVGElement;
    const firstChildTag = firstChild && firstChild.tagName.toLowerCase();

    const lastChild = dropdown.lastElementChild as SVGElement;
    const lastChildTag = lastChild && lastChild.tagName.toLowerCase();

    // check if the last and the first child in the button, are visible
    expect(lastChild).toBeInTheDocument();
    expect(lastChild).toBeVisible();
    expect(lastChildTag).toEqual('div');

    expect(firstChild).toBeVisible();
    expect(args.label).toBe('Label');
    expect(firstChildTag).toEqual('p');
    expect(args.disabled).toBeFalsy();
    expect(args.items).toHaveLength(2);
    expect(borderRadius).toBe('8px');
    expect(firstChild).toBeInTheDocument();
  },
};

export const WithLabelRounded: Story = {
  args: {
    label: 'Label',
    disabled: false,
    title: 'Title',
    Icon: <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />,
    items: [
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={false} />,
        title: 'List item',
      },
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={true} />,
        title: 'List item',
      },
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={false} />,
        title: 'List item',
      },
    ],
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const dropdown = canvas.getByRole('button');
    const computedStyle = getComputedStyle(dropdown);
    const borderRadius = computedStyle.getPropertyValue('border-radius');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElements = dropdown.querySelectorAll('svg');
    expect(svgElements).toHaveLength(2);

    const firstChild = dropdown.firstElementChild as SVGElement;
    const firstChildTag = firstChild && firstChild.tagName.toLowerCase();

    const lastChild = dropdown.lastElementChild as SVGElement;
    const lastChildTag = lastChild && lastChild.tagName.toLowerCase();

    // check if the last and the first child in the button, are visible
    expect(lastChild).toBeInTheDocument();
    expect(lastChild).toBeVisible();
    expect(lastChildTag).toEqual('div');

    expect(firstChild).toBeVisible();
    expect(args.label).toBe('Label');
    expect(args.title).toBe('Title');
    expect(firstChildTag).toEqual('div');
    expect(args.disabled).toBeFalsy();
    expect(args.items).toHaveLength(3);
    expect(borderRadius).toBe('159984px');
    expect(firstChild).toBeInTheDocument();
  },
};

export const WithLabelAndDisableds: Story = {
  args: {
    label: 'Label',
    disabled: false,
    title: 'Title',
    Icon: <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />,
    items: [
      {
        disabled: true,
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: (
          <ToggleButton name="toggle" disabled defaultValue={false} />
        ),
        title: 'List item',
      },
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={true} />,
        title: 'List item',
      },
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={false} />,
        title: 'List item',
      },
    ],
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const dropdown = canvas.getByRole('button');
    const computedStyle = getComputedStyle(dropdown);
    const borderRadius = computedStyle.getPropertyValue('border-radius');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElements = dropdown.querySelectorAll('svg');
    expect(svgElements).toHaveLength(2);

    const firstChild = dropdown.firstElementChild as SVGElement;
    const firstChildTag = firstChild && firstChild.tagName.toLowerCase();

    const lastChild = dropdown.lastElementChild as SVGElement;
    const lastChildTag = lastChild && lastChild.tagName.toLowerCase();

    // check if the last and the first child in the button, are visible
    expect(lastChild).toBeInTheDocument();
    expect(lastChild).toBeVisible();
    expect(lastChildTag).toEqual('div');

    expect(firstChild).toBeVisible();
    expect(args.label).toBe('Label');
    expect(args.title).toBe('Title');
    expect(firstChildTag).toEqual('div');
    expect(args.disabled).toBeFalsy();
    expect(args.items).toHaveLength(3);
    expect(borderRadius).toBe('159984px');
    expect(firstChild).toBeInTheDocument();
  },
};

export const WithoutLabelAndDisableds: Story = {
  args: {
    Icon: <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />,
    items: [
      {
        disabled: true,
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: (
          <ToggleButton name="toggle" disabled defaultValue={false} />
        ),
        title: 'List item',
      },
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={true} />,
        title: 'List item',
      },
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={false} />,
        title: 'List item',
      },
    ],
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const dropdown = canvas.getByRole('button');
    const computedStyle = getComputedStyle(dropdown);
    const borderRadius = computedStyle.getPropertyValue('border-radius');

    // check how many svg are in the button. In this case, can only be one in it
    const svgElements = dropdown.querySelectorAll('svg');
    expect(svgElements).toHaveLength(1);

    const firstChild = dropdown.firstElementChild as SVGElement;
    const firstChildTag = firstChild && firstChild.tagName.toLowerCase();

    const lastChild = dropdown.lastElementChild as SVGElement;
    const lastChildTag = lastChild && lastChild.tagName.toLowerCase();

    // check if the last and the first child in the button, are visible
    expect(lastChild).toBeInTheDocument();
    expect(lastChild).toBeVisible();
    expect(lastChildTag).toEqual('div');

    expect(firstChild).toBeVisible();
    expect(firstChildTag).toEqual('div');
    expect(args.disabled).toBeFalsy();
    expect(args.items).toHaveLength(3);
    expect(borderRadius).toBe('8px');
    expect(firstChild).toBeInTheDocument();
  },
};
