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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tooltipContainer = canvas.getByLabelText(
      'tooltipContent'
    ) as HTMLElement;

    userEvent.hover(tooltipContainer);

    await waitFor(() => {
      const tooltip = canvas.getByRole('tooltip');
      const computedStyle = getComputedStyle(tooltip);

      const bottomStyle = computedStyle.getPropertyValue('bottom');
      const topStyle = computedStyle.getPropertyValue('top');

      const transformStyle = computedStyle.getPropertyValue('transform');

      expect(tooltip, 'It should be render in document').toBeInTheDocument();

      expect(
        tooltip,
        'The tooltip content should be rendered correctly'
      ).toHaveTextContent('Tooltip');

      expect(
        tooltipContainer,
        'The tooltip trigger should be rendered correctly'
      ).toHaveTextContent('Hover Me');

      expect(
        bottomStyle,
        'The bottom style should be -16px when tooltip is on top'
      ).toBe('-16px');

      expect(
        topStyle,
        'The top style should be empty when tooltip is on top'
      ).toBe('' || '0px');

      expect(
        transformStyle,
        'The transform style should correctly position the tooltip relative to the trigger element'
      ).toBe('matrix(1, 0, 0, 1, -29.1914, -41.4)');
    });
  },
};

export const Left: Story = {
  args: {
    tooltipPosition: 'left',
    tooltipContent: tooltipContentText,
    children: tooltipChildren,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tooltipContainer = canvas.getByLabelText(
      'tooltipContent'
    ) as HTMLElement;

    userEvent.hover(tooltipContainer);

    await waitFor(() => {
      const tooltip = canvas.getByRole('tooltip');
      const computedStyle = getComputedStyle(tooltip);

      const leftStyle = computedStyle.getPropertyValue('left');
      const rightStyle = computedStyle.getPropertyValue('right');

      const transformStyle = computedStyle.getPropertyValue('transform');

      expect(tooltip, 'It should be render in document').toBeInTheDocument();

      expect(
        tooltip,
        'The tooltip content should be rendered correctly'
      ).toHaveTextContent('Tooltip');

      expect(
        tooltipContainer,
        'The tooltip trigger should be rendered correctly'
      ).toHaveTextContent('Hover Me');

      expect(
        rightStyle,
        'The right style should be 2.5625px when tooltip is on left'
      ).toBe('2.5625px');

      expect(
        leftStyle,
        'The right style should be empty when tooltip is on left'
      ).toBe('' || '0px');

      expect(
        transformStyle,
        'The transform style should correctly position the tooltip relative to the trigger element'
      ).toBe('matrix(1, 0, 0, 1, -67.1402, -18)');
    });
  },
};

export const Right: Story = {
  args: {
    tooltipPosition: 'right',
    tooltipContent: tooltipContentText,
    children: tooltipChildren,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tooltipContainer = canvas.getByLabelText(
      'tooltipContent'
    ) as HTMLElement;

    userEvent.hover(tooltipContainer);

    await waitFor(() => {
      const tooltip = canvas.getByRole('tooltip');
      const computedStyle = getComputedStyle(tooltip);

      const leftStyle = computedStyle.getPropertyValue('left');
      const rightStyle = computedStyle.getPropertyValue('right');

      const transformStyle = computedStyle.getPropertyValue('transform');

      expect(tooltip, 'It should be render in document').toBeInTheDocument();

      expect(
        tooltip,
        'The tooltip content should be rendered correctly'
      ).toHaveTextContent('Tooltip');

      expect(
        tooltipContainer,
        'The tooltip trigger should be rendered correctly'
      ).toHaveTextContent('Hover Me');

      expect(
        leftStyle,
        'The right style should be 2.5625px when tooltip is on right'
      ).toBe('2.5625px');

      expect(
        rightStyle,
        'The right style should be empty when tooltip is on right'
      ).toBe('' || '0px');

      expect(
        transformStyle,
        'The transform style should correctly position the tooltip relative to the trigger element'
      ).toBe('matrix(1, 0, 0, 1, 67.1402, -18)');
    });
  },
};

export const Bottom: Story = {
  args: {
    tooltipPosition: 'bottom',
    tooltipContent: tooltipContentText,
    children: tooltipChildren,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tooltipContainer = canvas.getByLabelText(
      'tooltipContent'
    ) as HTMLElement;

    userEvent.hover(tooltipContainer);

    await waitFor(() => {
      const tooltip = canvas.getByRole('tooltip');
      const computedStyle = getComputedStyle(tooltip);

      const bottomStyle = computedStyle.getPropertyValue('bottom');
      const topStyle = computedStyle.getPropertyValue('top');

      const transformStyle = computedStyle.getPropertyValue('transform');

      expect(tooltip, 'It should be render in document').toBeInTheDocument();

      expect(
        tooltip,
        'The tooltip content should be rendered correctly'
      ).toHaveTextContent('Tooltip');

      expect(
        tooltipContainer,
        'The tooltip trigger should be rendered correctly'
      ).toHaveTextContent('Hover Me');

      expect(
        topStyle,
        'The top style should be -16px when tooltip is on bottom'
      ).toBe('-16px');

      expect(
        bottomStyle,
        'The bottom style should be empty when tooltip is on bottom'
      ).toBe('' || '0px');

      expect(
        transformStyle,
        'The transform style should correctly position the tooltip relative to the trigger element'
      ).toBe('matrix(1, 0, 0, 1, -29.1914, 41.4)');
    });
  },
};

export const UnHovered: Story = {
  args: {
    tooltipPosition: 'bottom',
    tooltipContent: tooltipContentText,
    children: tooltipChildren,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tooltipContainer = canvas.getByLabelText(
      'tooltipContent'
    ) as HTMLElement;

    expect(
      tooltipContainer,
      'Tooltip content should be rendered in the document'
    ).toBeInTheDocument();

    expect(
      canvas.queryByRole('tooltip'),
      'The tooltip should not be rendered in the document before hover'
    ).not.toBeInTheDocument();

    await waitFor(() => {
      const tooltip = canvas.queryByRole('tooltip');

      expect(
        tooltip,
        'The tooltip should not be rendered in the document before hover'
      ).not.toBeInTheDocument();
    });
  },
};
