import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import React, { FC, PropsWithChildren } from 'react';

import { Box, Typography } from '../../../elements';
import { TooltipProps, TooltipWrapper } from '..';

const Tooltip: FC<PropsWithChildren<TooltipProps>> = (args) => {
  return (
    <Box width="fit-content" p="6.25rem" bg="surface">
      <TooltipWrapper bg="onSurface" color="surface" {...args}></TooltipWrapper>
    </Box>
  );
};

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

const tooltipChildren = (
  <Typography variant="body" size="medium" color="onSurface">
    Hover Me
  </Typography>
);

const tooltipChildrenWithImage = (
  <img
    alt="Placeholder"
    src="/tooltipImage.webp"
    style={{ borderRadius: '0.5rem', maxWidth: '100%', height: 'auto' }}
  />
);

const customTooltipContentText = (
  <Typography variant="body" color="#444" size="medium">
    Tooltip
  </Typography>
);

export const withImage: Story = {
  args: {
    bg: 'rgb(255, 255, 255)',
    children: tooltipChildrenWithImage,
    tooltipContent: customTooltipContentText,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tooltipContainer = canvas.getByLabelText(
      'tooltipContainer'
    ) as HTMLElement;

    await step('Check the structure of the Tooltip', async () => {
      expect(
        tooltipContainer,
        'It should be render in document'
      ).toBeInTheDocument();

      expect(
        tooltipContainer,
        'It is expected that the tooltipContainer has a cursor pointer'
      ).toHaveStyle('cursor: pointer');

      expect(
        tooltipContainer,
        'It is expected that the tooltipContainer has a background rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');

      expect(
        tooltipContainer.children.length,
        "It's expected that the tag has two child elements"
      ).toBe(2);
    });

    await step('Validating the Tag content', () => {
      const firstChild = tooltipContainer.children[0] as HTMLElement;

      expect(
        firstChild.tagName,
        "It's expected that the tooltipContainer content has a tag-name IMG"
      ).toBe('IMG');

      expect(
        firstChild.getAttribute('src'),
        "It's expected that the image source is correct"
      ).toBe('/tooltipImage.webp');

      expect(
        firstChild.getAttribute('alt'),
        "It's expected that the image alt text is correct"
      ).toBe('Placeholder');

      expect(
        firstChild,
        "It's expected that the image has a border radius of 8px"
      ).toHaveStyle('border-radius: 8px');

      expect(
        firstChild,
        "It's expected that the image has a max width of 100%"
      ).toHaveStyle('max-width: 100%');

      expect(
        firstChild,
        "It's expected that the image height is auto"
      ).toHaveStyle('height: 0px');
    });

    await step('Validating the hover event', async () => {
      await waitFor(async () => {
        await userEvent.hover(tooltipContainer);
        const tooltip = canvas.getByRole('tooltip');
        const computedStyle = getComputedStyle(tooltip);
        const borderStyle = computedStyle.getPropertyValue('border');

        await step('Validating the tooltip structure', () => {
          expect(
            tooltip,
            'It should be render in document'
          ).toBeInTheDocument();

          expect(
            tooltip,
            'It is expected that the tooltip has a background rgb(255, 255, 255)'
          ).toHaveStyle('background-color: rgb(255, 255, 255)');

          expect(
            borderStyle,
            'It is expected that the tooltip has a border of 1px solid'
          ).toContain('0px none rgb(248, 249, 253)');
        });

        await step('Validating the Tooltip content', () => {
          const firstChild = tooltip.children[0].children[0] as HTMLElement;

          expect(
            firstChild.tagName,
            "It's expected that the tooltip text has a tag-name P"
          ).toBe('P');

          expect(
            tooltip.textContent,
            `It's expected that the tooltip text is ${args.tooltipContent}`
          ).toBe('Tooltip');

          expect(
            firstChild,
            "it's expected that the tooltip text font-weight will be 500"
          ).toHaveStyle('font-weight: 500');

          expect(
            firstChild,
            "it's expected that the tooltip text font-size will be 14px"
          ).toHaveStyle('font-size: 14px');

          expect(
            firstChild,
            "it's expected that the tooltip text font-family will be Satoshi"
          ).toHaveStyle('font-family: Satoshi');
        });
      });
    });
  },
};

export const WithText: Story = {
  args: {
    children: tooltipChildren,
    bg: 'rgb(255, 255, 255)',
    tooltipContent: customTooltipContentText,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tooltipContainer = canvas.getByLabelText(
      'tooltipContainer'
    ) as HTMLElement;

    await step('Check the structure of the Tooltip', async () => {
      expect(
        tooltipContainer,
        'It should be render in document'
      ).toBeInTheDocument();

      expect(
        tooltipContainer,
        'It is expected that the tooltipContainer has a cursor pointer'
      ).toHaveStyle('cursor: pointer');

      expect(
        tooltipContainer,
        'It is expected that the tooltipContainer has a background rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');

      expect(
        tooltipContainer.children.length,
        "It's expected that the tag has two child elements"
      ).toBe(2);
    });

    await step('Validating the Tag content', () => {
      const firstChild = tooltipContainer.children[0] as HTMLElement;

      expect(
        firstChild.tagName,
        "It's expected that the tooltipContainer text has a tag-name P"
      ).toBe('P');

      expect(
        tooltipContainer.textContent,
        `It's expected that the tag text is Hover Me`
      ).toBe(`${tooltipContainer.textContent}`);

      expect(
        firstChild,
        "it's expected that the tag text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        firstChild,
        "it's expected that the tag text font-size will be 14px"
      ).toHaveStyle('font-size: 14px');

      expect(
        firstChild,
        "it's expected that the tag text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
    });

    await step('Validating the hover event', async () => {
      await waitFor(async () => {
        await userEvent.hover(tooltipContainer);
        const tooltip = canvas.getByRole('tooltip');
        const computedStyle = getComputedStyle(tooltip);
        const borderStyle = computedStyle.getPropertyValue('border');

        await step('Validating the tooltip structure', () => {
          expect(
            tooltip,
            'It should be render in document'
          ).toBeInTheDocument();

          expect(
            tooltip,
            'It is expected that the tooltip has a background rgb(255, 255, 255)'
          ).toHaveStyle('background-color: rgb(255, 255, 255)');

          expect(
            borderStyle,
            'It is expected that the tooltip has a border of 0px none rgb(248, 249, 253)'
          ).toContain('0px none rgb(248, 249, 253)');
        });

        await step('Validating the Tooltip content', () => {
          const firstChild = tooltip.children[0].children[0] as HTMLElement;

          expect(
            firstChild.tagName,
            "It's expected that the tooltip text has a tag-name P"
          ).toBe('P');

          expect(
            tooltip.textContent,
            `It's expected that the tooltip text is ${args.tooltipContent}`
          ).toBe('Tooltip');

          expect(
            firstChild,
            "it's expected that the tooltip text font-weight will be 500"
          ).toHaveStyle('font-weight: 500');

          expect(
            firstChild,
            "it's expected that the tooltip text font-size will be 14px"
          ).toHaveStyle('font-size: 14px');

          expect(
            firstChild,
            "it's expected that the tooltip text font-family will be Satoshi"
          ).toHaveStyle('font-family: Satoshi');
        });
      });
    });
  },
};
