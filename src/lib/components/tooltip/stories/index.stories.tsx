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
  argTypes: {
    tooltipPosition: {
      options: ['top', 'left', 'right', 'bottom'],
      control: { type: 'select' },
    },
  },
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
    border: '1px solid',
    borderColor: 'outline',
    tooltipPosition: 'left',
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
        "It's expected that the tag has only one child element"
      ).toBe(1);
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
      ).toHaveStyle('height: auto');
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

          if (args.tooltipPosition === 'top') {
            expect(
              tooltip,
              'It is expected that the tooltip has a right -41.6328px'
            ).toHaveStyle('right: -41.6328px');

            expect(
              tooltip,
              'It is expected that the tooltip has a top 0px'
            ).toHaveStyle('top: 0px');

            expect(
              tooltip,
              'It is expected that the tooltip has a right 18.7422px'
            ).toHaveStyle('left: 18.7422px');

            expect(
              tooltip,
              'It is expected that the tooltip has a bottom 2px'
            ).toHaveStyle('bottom: 2px');
          } else if (args.tooltipPosition === 'bottom') {
            expect(
              tooltip,
              'It is expected that the tooltip has a right -41.6328px'
            ).toHaveStyle('right: -41.6328px');

            expect(
              tooltip,
              'It is expected that the tooltip has a top 2px'
            ).toHaveStyle('top: 2px');

            expect(
              tooltip,
              'It is expected that the tooltip has a right 18.7422px'
            ).toHaveStyle('left: 18.7422px');

            expect(
              tooltip,
              'It is expected that the tooltip has a bottom 0px'
            ).toHaveStyle('bottom: 0px');
          } else if (args.tooltipPosition === 'right') {
            expect(
              tooltip,
              'It is expected that the tooltip has a right 0px'
            ).toHaveStyle('right: 0px');

            expect(
              tooltip,
              'It is expected that the tooltip has a top 20px'
            ).toHaveStyle('top: 20px');

            expect(
              tooltip,
              'It is expected that the tooltip has a right -22.8906px'
            ).toHaveStyle('left: -22.8906px');

            expect(
              tooltip,
              'It is expected that the tooltip has a bottom -18px'
            ).toHaveStyle('bottom: -18px');
          } else if (args.tooltipPosition === 'left') {
            expect(
              tooltip,
              'It is expected that the tooltip has a right -22.8906px'
            ).toHaveStyle('right: -22.8906px');

            expect(
              tooltip,
              'It is expected that the tooltip has a top 20px'
            ).toHaveStyle('top: 20px');

            expect(
              tooltip,
              'It is expected that the tooltip has a right 0px'
            ).toHaveStyle('left: 0px');

            expect(
              tooltip,
              'It is expected that the tooltip has a bottom -18px'
            ).toHaveStyle('bottom: -18px');
          }
          expect(
            borderStyle,
            'It is expected that the tooltip has a border of 1px solid'
          ).toContain('1px solid');

          expect(
            tooltip,
            'It is expected that the tooltip has a colorof rgb(118, 118, 122)'
          ).toHaveStyle('border-color: rgb(118, 118, 122)');
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
    border: '1px solid',
    borderColor: 'outline',
    tooltipPosition: 'left',
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
        "It's expected that the tag has only one child element"
      ).toBe(1);
    });

    await step('Validating the Tag content', () => {
      const firstChild = tooltipContainer.children[0] as HTMLElement;

      expect(
        firstChild.tagName,
        "It's expected that the tooltipContainer text has a tag-name P"
      ).toBe('P');

      expect(
        tooltipContainer.textContent,
        `It's expected that the tag text is ${args.children}`
      ).toBe('Hover Me');

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

          if (args.tooltipPosition === 'top') {
            expect(
              tooltip,
              'It is expected that the tooltip has a right -41.6328px'
            ).toHaveStyle('right: -41.6328px');

            expect(
              tooltip,
              'It is expected that the tooltip has a top 0px'
            ).toHaveStyle('top: 0px');

            expect(
              tooltip,
              'It is expected that the tooltip has a right 18.7422px'
            ).toHaveStyle('left: 18.7422px');

            expect(
              tooltip,
              'It is expected that the tooltip has a bottom 2px'
            ).toHaveStyle('bottom: 2px');
          } else if (args.tooltipPosition === 'bottom') {
            expect(
              tooltip,
              'It is expected that the tooltip has a right -41.6328px'
            ).toHaveStyle('right: -41.6328px');

            expect(
              tooltip,
              'It is expected that the tooltip has a top 2px'
            ).toHaveStyle('top: 2px');

            expect(
              tooltip,
              'It is expected that the tooltip has a right 18.7422px'
            ).toHaveStyle('left: 18.7422px');

            expect(
              tooltip,
              'It is expected that the tooltip has a bottom 0px'
            ).toHaveStyle('bottom: 0px');
          } else if (args.tooltipPosition === 'right') {
            expect(
              tooltip,
              'It is expected that the tooltip has a right 0px'
            ).toHaveStyle('right: 0px');

            expect(
              tooltip,
              'It is expected that the tooltip has a top 20px'
            ).toHaveStyle('top: 20px');

            expect(
              tooltip,
              'It is expected that the tooltip has a right -22.8906px'
            ).toHaveStyle('left: -22.8906px');

            expect(
              tooltip,
              'It is expected that the tooltip has a bottom -18px'
            ).toHaveStyle('bottom: -18px');
          } else if (args.tooltipPosition === 'left') {
            expect(
              tooltip,
              'It is expected that the tooltip has a right -22.8906px'
            ).toHaveStyle('right: -22.8906px');

            expect(
              tooltip,
              'It is expected that the tooltip has a top 20px'
            ).toHaveStyle('top: 20px');

            expect(
              tooltip,
              'It is expected that the tooltip has a right 0px'
            ).toHaveStyle('left: 0px');

            expect(
              tooltip,
              'It is expected that the tooltip has a bottom -18px'
            ).toHaveStyle('bottom: -18px');
          }
          expect(
            borderStyle,
            'It is expected that the tooltip has a border of 1px solid'
          ).toContain('1px solid');

          expect(
            tooltip,
            'It is expected that the tooltip has a colorof rgb(118, 118, 122)'
          ).toHaveStyle('border-color: rgb(118, 118, 122)');
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
