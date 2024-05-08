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

export const Top: Story = {
  args: {
    tooltipPosition: 'top',
    tooltipContent: (
      <Typography variant="body" size="medium">
        Tooltip
      </Typography>
    ),
    children: (
      <Typography variant="body" size="medium" color="onSurface">
        Hover Me
      </Typography>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tooltipContainer = canvas.getByTestId(
      'tooltipContainer'
    ) as HTMLElement;

    userEvent.hover(tooltipContainer);

    await waitFor(() => {
      const tooltip = canvas.getByTestId('tooltipTest');
      const computedStyle = getComputedStyle(tooltip);

      const bottomStyle = computedStyle.getPropertyValue('bottom');
      const transformStyle = computedStyle.getPropertyValue('transform');

      expect(tooltip).toBeInTheDocument();
      expect(bottomStyle).toBe('-16px');
      expect(transformStyle).toBe('matrix(1, 0, 0, 1, -29.1914, -41.4)');
    });
  },
};

export const Left: Story = {
  args: {
    tooltipPosition: 'left',
    tooltipContent: (
      <Typography variant="body" size="medium">
        Tooltip
      </Typography>
    ),
    children: (
      <Typography variant="body" size="medium" color="onSurface">
        Hover Me
      </Typography>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tooltipContainer = canvas.getByTestId(
      'tooltipContainer'
    ) as HTMLElement;

    userEvent.hover(tooltipContainer);

    await waitFor(() => {
      const tooltip = canvas.getByTestId('tooltipTest');
      const computedStyle = getComputedStyle(tooltip);

      const rightStyle = computedStyle.getPropertyValue('right');
      const transformStyle = computedStyle.getPropertyValue('transform');

      expect(tooltip).toBeInTheDocument();
      expect(rightStyle).toBe('2.5625px');
      expect(transformStyle).toBe('matrix(1, 0, 0, 1, -67.1402, -18)');
    });
  },
};

export const Right: Story = {
  args: {
    tooltipPosition: 'right',
    tooltipContent: (
      <Typography variant="body" size="medium">
        Tooltip
      </Typography>
    ),
    children: (
      <Typography variant="body" size="medium" color="onSurface">
        Hover Me
      </Typography>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tooltipContainer = canvas.getByTestId(
      'tooltipContainer'
    ) as HTMLElement;

    userEvent.hover(tooltipContainer);

    await waitFor(() => {
      const tooltip = canvas.getByTestId('tooltipTest');
      const computedStyle = getComputedStyle(tooltip);

      const leftStyle = computedStyle.getPropertyValue('left');
      const transformStyle = computedStyle.getPropertyValue('transform');

      expect(tooltip).toBeInTheDocument();
      expect(leftStyle).toBe('2.5625px');
      expect(transformStyle).toBe('matrix(1, 0, 0, 1, 67.1402, -18)');
    });
  },
};

export const Bottom: Story = {
  args: {
    tooltipPosition: 'bottom',
    tooltipContent: (
      <Typography variant="body" size="medium">
        Tooltip
      </Typography>
    ),
    children: (
      <Typography variant="body" size="medium" color="onSurface">
        Hover Me
      </Typography>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tooltipContainer = canvas.getByTestId(
      'tooltipContainer'
    ) as HTMLElement;

    userEvent.hover(tooltipContainer);

    await waitFor(() => {
      const tooltip = canvas.getByTestId('tooltipTest');
      const computedStyle = getComputedStyle(tooltip);

      const topStyle = computedStyle.getPropertyValue('top');
      const transformStyle = computedStyle.getPropertyValue('transform');

      expect(tooltip).toBeInTheDocument();
      expect(topStyle).toBe('-16px');
      expect(transformStyle).toBe('matrix(1, 0, 0, 1, -29.1914, 41.4)');
    });
  },
};
