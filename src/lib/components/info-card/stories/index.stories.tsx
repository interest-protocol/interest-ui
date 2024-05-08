import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within } from '@storybook/test';
import React from 'react';

import { MoneySignSVG } from '../../../icons';
import { InfoCard } from '..';

const meta: Meta<typeof InfoCard> = {
  title: 'InfoCard',
  component: InfoCard,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InfoCard>;

export const Normal: Story = {
  args: {
    title: 'TVL',
    children: '$52,294.12',
    Icon: <MoneySignSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const infoCard = canvas.getByTestId('infoCardTest');
    const computedStyle = getComputedStyle(infoCard);
    const backgroundColor = computedStyle.getPropertyValue('background-color');

    const svgElements = infoCard.querySelectorAll('svg');

    expect(svgElements).toHaveLength(1);
    expect(infoCard).toHaveTextContent('TVL');
    expect(infoCard).toHaveTextContent('$52,294.12');
    expect(backgroundColor).toBe('rgb(255, 255, 255)');
  },
};

export const NormalWithoutIcon: Story = {
  args: {
    title: 'TVL',
    children: '$52,294.12',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const infoCard = canvas.getByTestId('infoCardTest');
    const computedStyle = getComputedStyle(infoCard);
    const backgroundColor = computedStyle.getPropertyValue('background-color');
    const svgElements = infoCard.querySelectorAll('svg');

    expect(svgElements).toHaveLength(0);
    expect(backgroundColor).toBe('rgb(255, 255, 255)');
  },
};

export const WithClickEvent: Story = {
  args: {
    width: '10rem',
    title: 'TVL',
    children: '$52,294.12',
    onClick: fn(),
    Icon: <MoneySignSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const infoCard = canvas.getByTestId('infoCardTest');
    const computedStyle = getComputedStyle(infoCard);
    const backgroundColor = computedStyle.getPropertyValue('background-color');

    infoCard.click();
    const svgElements = infoCard.querySelectorAll('svg');

    expect(svgElements).toHaveLength(1);
    expect(args.onClick).toHaveBeenCalledOnce();
    expect(backgroundColor).toBe('rgb(255, 255, 255)');
  },
};
