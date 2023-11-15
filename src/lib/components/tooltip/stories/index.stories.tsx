import { Meta, StoryObj } from '@storybook/react';
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
    tooltipContent: <Typography variant="bodyMedium">Tooltip</Typography>,
    children: (
      <Typography variant="bodyMedium" color="onSurface">
        Hover Me
      </Typography>
    ),
  },
};

export const Left: Story = {
  args: {
    tooltipPosition: 'left',
    tooltipContent: <Typography variant="bodyMedium">Tooltip</Typography>,
    children: (
      <Typography variant="bodyMedium" color="onSurface">
        Hover Me
      </Typography>
    ),
  },
};

export const Right: Story = {
  args: {
    tooltipPosition: 'right',
    tooltipContent: <Typography variant="bodyMedium">Tooltip</Typography>,
    children: (
      <Typography variant="bodyMedium" color="onSurface">
        Hover Me
      </Typography>
    ),
  },
};

export const Bottom: Story = {
  args: {
    tooltipPosition: 'bottom',
    tooltipContent: <Typography variant="bodyMedium">Tooltip</Typography>,
    children: (
      <Typography variant="bodyMedium" color="onSurface">
        Hover Me
      </Typography>
    ),
  },
};
