import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Typography } from '../../../elements';
import { PercentageSVG, TrendUpSVG } from '../../../icons';
import { InfoCard } from '..';

const meta: Meta<typeof InfoCard> = {
  title: 'InfoCard',
  component: InfoCard,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    info: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InfoCard>;

export const Normal: Story = {
  args: {
    IconTitle: (
      <PercentageSVG
        maxHeight="0.703rem"
        maxWidth="0.703rem"
        width="100%"
        height="100%"
      />
    ),
    IconInfo: (
      <TrendUpSVG
        maxHeight="0.719rem"
        maxWidth="1.11rem"
        width="100%"
        height="100%"
      />
    ),
    infoColor: 'normal',
    iconInfoColor: 'success',
    info: '0 %',
    title: 'Net APY',
    children: (
      <Typography
        variant="title6"
        fontWeight="400"
        color="onSurface"
        fontSize={['s', 's', 's', 'xl']}
      >
        USD 6,786.99
      </Typography>
    ),
    onClick: () => alert('clicked'),
  },
};
