import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import React, { FC, PropsWithChildren } from 'react';

import { Box, Typography } from '../../../elements';
import { TooltipProps, TooltipWrapper } from '..';
import { isDarkTheme } from '../tooltip.utils';

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

const tooltipContentText = (
  <Typography variant="body" size="medium">
    Tooltip
  </Typography>
);

const tooltipChildren = (
  <Typography variant="body" size="medium" color="onSurface">
    Hover Me
  </Typography>
);

export const Top: Story = {
  args: {
    tooltipPosition: 'top',
    tooltipContent: tooltipContentText,
    children: tooltipChildren,
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

        const isDarkMode = isDarkTheme();

        await step('Validating the tooltip structure', () => {
          expect(
            tooltip,
            'It should be render in document'
          ).toBeInTheDocument();

          if (!isDarkMode) {
            expect(
              tooltip,
              'It is expected that the tooltip has a background rgb(27, 27, 31)'
            ).toHaveStyle('background-color: rgb(27, 27, 31)');
          } else {
            expect(
              tooltip,
              'It is expected that the tooltip has a background rgb(226, 226, 230)'
            ).toHaveStyle('background-color: rgb(226, 226, 230)');
          }

          expect(
            tooltip,
            'It is expected that the tooltip has a top 0px'
          ).toHaveStyle('top: 0px');

          expect(
            tooltip,
            'It is expected that the tooltip has a right -27.9062px'
          ).toHaveStyle('right: -29.9062px');

          expect(
            tooltip,
            'It is expected that the tooltip has a right 30.4688px'
          ).toHaveStyle('left: 30.4688px');

          expect(
            tooltip,
            'It is expected that the tooltip has a bottom -16px'
          ).toHaveStyle('bottom: -18px');

          expect(
            borderStyle,
            'It is expected that the tooltip has a border of 1px solid'
          ).toContain('1px solid');

          if (!isDarkMode) {
            expect(
              tooltip,
              'It is expected that the tooltip has a border color of rgb(27, 27, 31)'
            ).toHaveStyle('border-color: rgb(27, 27, 31)');
          } else {
            expect(
              tooltip,
              'It is expected that the tooltip has a border color of rgb(226, 226, 230)'
            ).toHaveStyle('border-color: rgb(226, 226, 230)');
          }
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

export const Left: Story = {
  args: {
    tooltipPosition: 'left',
    tooltipContent: tooltipContentText,
    children: tooltipChildren,
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

        const isDarkMode = isDarkTheme();

        await step('Validating the tooltip structure', () => {
          expect(
            tooltip,
            'It should be render in document'
          ).toBeInTheDocument();

          if (!isDarkMode) {
            expect(
              tooltip,
              'It is expected that the tooltip has a background rgb(27, 27, 31)'
            ).toHaveStyle('background-color: rgb(27, 27, 31)');
          } else {
            expect(
              tooltip,
              'It is expected that the tooltip has a background rgb(226, 226, 230)'
            ).toHaveStyle('background-color: rgb(226, 226, 230)');
          }

          expect(
            tooltip,
            'It is expected that the tooltip has a top 0px'
          ).toHaveStyle('top: 10px');

          expect(
            tooltip,
            'It is expected that the tooltip has a right -27.9062px'
          ).toHaveStyle('right: 0.5625px');

          expect(
            tooltip,
            'It is expected that the tooltip has a right 30.4688px'
          ).toHaveStyle('left: 0px');

          expect(
            tooltip,
            'It is expected that the tooltip has a bottom -16px'
          ).toHaveStyle('bottom: -28px');

          expect(
            borderStyle,
            'It is expected that the tooltip has a border of 1px solid'
          ).toContain('1px solid');

          if (!isDarkMode) {
            expect(
              tooltip,
              'It is expected that the tooltip has a border color of rgb(27, 27, 31)'
            ).toHaveStyle('border-color: rgb(27, 27, 31)');
          } else {
            expect(
              tooltip,
              'It is expected that the tooltip has a border color of rgb(226, 226, 230)'
            ).toHaveStyle('border-color: rgb(226, 226, 230)');
          }
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

export const Right: Story = {
  args: {
    tooltipPosition: 'right',
    tooltipContent: tooltipContentText,
    children: tooltipChildren,
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

        const isDarkMode = isDarkTheme();

        await step('Validating the tooltip structure', () => {
          expect(
            tooltip,
            'It should be render in document'
          ).toBeInTheDocument();

          if (!isDarkMode) {
            expect(
              tooltip,
              'It is expected that the tooltip has a background rgb(27, 27, 31)'
            ).toHaveStyle('background-color: rgb(27, 27, 31)');
          } else {
            expect(
              tooltip,
              'It is expected that the tooltip has a background rgb(226, 226, 230)'
            ).toHaveStyle('background-color: rgb(226, 226, 230)');
          }

          expect(
            tooltip,
            'It is expected that the tooltip has a top 0px'
          ).toHaveStyle('top: 10px');

          expect(
            tooltip,
            'It is expected that the tooltip has a right -27.9062px'
          ).toHaveStyle('right: 0px');

          expect(
            tooltip,
            'It is expected that the tooltip has a right 30.4688px'
          ).toHaveStyle('left: 0.5625px');

          expect(
            tooltip,
            'It is expected that the tooltip has a bottom -16px'
          ).toHaveStyle('bottom: -28px');

          expect(
            borderStyle,
            'It is expected that the tooltip has a border of 1px solid'
          ).toContain('1px solid');

          if (!isDarkMode) {
            expect(
              tooltip,
              'It is expected that the tooltip has a border color of rgb(27, 27, 31)'
            ).toHaveStyle('border-color: rgb(27, 27, 31)');
          } else {
            expect(
              tooltip,
              'It is expected that the tooltip has a border color of rgb(226, 226, 230)'
            ).toHaveStyle('border-color: rgb(226, 226, 230)');
          }
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

export const Bottom: Story = {
  args: {
    tooltipPosition: 'bottom',
    tooltipContent: tooltipContentText,
    children: tooltipChildren,
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

        const isDarkMode = isDarkTheme();

        await step('Validating the tooltip structure', () => {
          expect(
            tooltip,
            'It should be render in document'
          ).toBeInTheDocument();

          if (!isDarkMode) {
            expect(
              tooltip,
              'It is expected that the tooltip has a background rgb(27, 27, 31)'
            ).toHaveStyle('background-color: rgb(27, 27, 31)');
          } else {
            expect(
              tooltip,
              'It is expected that the tooltip has a background rgb(226, 226, 230)'
            ).toHaveStyle('background-color: rgb(226, 226, 230)');
          }

          expect(
            tooltip,
            'It is expected that the tooltip has a top 0px'
          ).toHaveStyle('top: -18px');

          expect(
            tooltip,
            'It is expected that the tooltip has a right -27.9062px'
          ).toHaveStyle('right: -29.9062px;');

          expect(
            tooltip,
            'It is expected that the tooltip has a right 30.4688px'
          ).toHaveStyle('left: 30.4688px');

          expect(
            tooltip,
            'It is expected that the tooltip has a bottom -16px'
          ).toHaveStyle('bottom: 0px');

          expect(
            borderStyle,
            'It is expected that the tooltip has a border of 1px solid'
          ).toContain('1px solid');

          if (!isDarkMode) {
            expect(
              tooltip,
              'It is expected that the tooltip has a border color of rgb(27, 27, 31)'
            ).toHaveStyle('border-color: rgb(27, 27, 31)');
          } else {
            expect(
              tooltip,
              'It is expected that the tooltip has a border color of rgb(226, 226, 230)'
            ).toHaveStyle('border-color: rgb(226, 226, 230)');
          }
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
