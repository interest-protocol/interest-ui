import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within } from '@storybook/test';
import userEvent from '@testing-library/user-event';
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
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const infoCard = canvas.getByLabelText('info-card');
    const numberOfTexts = infoCard.querySelectorAll('p').length;
    const infoCardHeader = infoCard.firstChild && infoCard.firstChild;

    const svgElements = (infoCardHeader as HTMLElement).querySelectorAll('svg');

    await step('Checking the info card structure', () => {
      expect(
        infoCard,
        'It expects that the info card is being rendered'
      ).toBeInTheDocument();
      expect(
        infoCard,
        'It expects that the info card have a min-width of 96px'
      ).toHaveStyle('min-width: 96px');

      expect(
        infoCard,
        'It expects that the info card has a min-width of 428px'
      ).toHaveStyle('max-width: 428px');

      expect(
        infoCard,
        'It expects that the info card has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');

      expect(
        infoCard,
        'It expects that the info card has a display inline-flex'
      ).toHaveStyle('display: inline-flex');

      expect(
        infoCard,
        'It expects that the info card has a flex-direction column'
      ).toHaveStyle('flex-direction: column');

      expect(
        infoCard,
        'It expects that the info card has a padding-left of 16px'
      ).toHaveStyle('padding-left: 16px');

      expect(
        infoCard,
        'It expects that the info card has a padding-right of 16px'
      ).toHaveStyle('padding-right: 16px');

      expect(
        infoCard,
        'It expects that the info card has a padding-top of 24px'
      ).toHaveStyle('padding-top: 24px');

      expect(
        infoCard,
        'It expects that the info card has a padding-bottom of 24px'
      ).toHaveStyle('padding-bottom: 24px');

      expect(
        infoCard,
        'It expects that the info card has a cursor pointer'
      ).toHaveStyle('cursor: pointer');

      expect(
        infoCard,
        'It expects that the info card has a rgb(27, 27, 31) color'
      ).toHaveStyle('color: rgb(27, 27, 31)');

      expect(
        infoCard,
        'It expects that the info card has a white background'
      ).toHaveStyle('background-color: rgb(255, 255, 255)');
    });

    await step('Checking the info card content', () => {
      expect(
        infoCard,
        `It expects that the info card title is ${args.title}`
      ).toHaveTextContent('' + args.title);

      expect(
        infoCard,
        `It expects that the info card has the value ${args.children}`
      ).toHaveTextContent('' + args.children);

      expect(
        numberOfTexts,
        'It expects that the info card has 2 texts elements'
      ).toBe(2);

      expect(
        svgElements,
        `It expects that the info card header has 1 svg`
      ).toHaveLength(1);
    });

    await step('Checking the info card onClick event', async () => {
      await userEvent.click(infoCard);

      expect(
        args.onClick,
        `It expects that the info card on click event is called`
      ).toHaveBeenCalled();
    });
  },
};

export const NormalWithoutIcon: Story = {
  args: {
    title: 'TVL',
    children: '$52,294.12',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const infoCard = canvas.getByLabelText('info-card');
    const numberOfTexts = infoCard.querySelectorAll('p').length;
    const infoCardHeader = infoCard.firstChild && infoCard.firstChild;

    const svgElements = (infoCardHeader as HTMLElement).querySelectorAll('svg');

    await step('Checking the info card structure', () => {
      expect(
        infoCard,
        'It expects that the info card is being rendered'
      ).toBeInTheDocument();

      expect(
        infoCard,
        'It expects that the info card have a min-width of 96px'
      ).toHaveStyle('min-width: 96px');

      expect(
        infoCard,
        'It expects that the info card has a min-width of 428px'
      ).toHaveStyle('max-width: 428px');

      expect(
        infoCard,
        'It expects that the info card has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');

      expect(
        infoCard,
        'It expects that the info card has a display inline-flex'
      ).toHaveStyle('display: inline-flex');

      expect(
        infoCard,
        'It expects that the info card has a flex-direction column'
      ).toHaveStyle('flex-direction: column');

      expect(
        infoCard,
        'It expects that the info card has a padding-left of 16px'
      ).toHaveStyle('padding-left: 16px');

      expect(
        infoCard,
        'It expects that the info card has a padding-right of 16px'
      ).toHaveStyle('padding-right: 16px');

      expect(
        infoCard,
        'It expects that the info card has a padding-top of 24px'
      ).toHaveStyle('padding-top: 24px');

      expect(
        infoCard,
        'It expects that the info card has a padding-bottom of 24px'
      ).toHaveStyle('padding-bottom: 24px');

      expect(
        infoCard,
        'It expects that the info card has a cursor pointer'
      ).toHaveStyle('cursor: pointer');

      expect(
        infoCard,
        'It expects that the info card has a #000000 color'
      ).toHaveStyle('color: rgb(27, 27, 31)');

      expect(
        infoCard,
        'It expects that the info card has a white background'
      ).toHaveStyle('background-color:rgb(255, 255, 255)');
    });

    await step('Checking the info card content', () => {
      expect(
        infoCard,
        `It expects that the info card title is ${args.title}`
      ).toHaveTextContent('' + args.title);

      expect(
        infoCard,
        `It expects that the info card has the value ${args.children}`
      ).toHaveTextContent('' + args.children);

      expect(
        numberOfTexts,
        'It expects that the info card has 2 texts elements'
      ).toBe(2);

      expect(
        svgElements,
        `It expects that the info card header don't have any svg`
      ).toHaveLength(0);
    });

    await step('Checking the info card onClick event', async () => {
      await userEvent.click(infoCard);

      expect(
        args.onClick,
        `It expects that the info card on click event is called`
      ).toHaveBeenCalled();
    });
  },
};
