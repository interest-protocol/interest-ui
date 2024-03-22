import { Meta, StoryObj } from '@storybook/react';

import { Chart } from '..';
import { CHARTS_DATA } from './charts.data';

const meta: Meta<typeof Chart> = {
  title: 'Chart',
  component: Chart,
  argTypes: {
    variant: {
      control: { type: 'text' },
    },
    data: {
      defaultValue: [],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chart>;

export const BarChart: Story = {
  args: {
    variant: 'bar',
    data: CHARTS_DATA,
  },
};

export const AreaChart: Story = {
  args: {
    variant: 'area',
    data: CHARTS_DATA,
  },
};

export const StepsChart: Story = {
  args: {
    variant: 'steps',
    data: CHARTS_DATA,
  },
};

export const PieChart: Story = {
  args: {
    label: 'Pool',
    variant: 'pie',
    semanticColors: [
      { dark: '#BEF264', light: '#84CC16' },
      { dark: '#FCA5A5', light: '#EF4444' },
      { dark: '#FDBA74', light: '#F97316' },
      { dark: '#67E8F9', light: '#06B6D4' },
      { dark: '#FDBA74', light: '#F59E0B' },
      { dark: '#D8B4FE', light: '#A855F7' },
      { dark: '#F9A8D4', light: '#EC4899' },
    ],
    data: CHARTS_DATA,
  },
};
