import { Meta, StoryObj } from '@storybook/react';

import { Chart } from '..';

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
    data: [
      {
        amount: 93,
        description: '01',
        date: '13/12',
      },
      {
        amount: 23,
        description: '01',
        date: '14/12',
      },
      {
        amount: 2,
        description: '01',
        date: '15/12',
      },
      {
        amount: 9,
        description: '01',
        date: '16/12',
      },
      {
        amount: 10,
        description: '01',
        date: '17/12',
      },
      {
        amount: 32,
        description: '01',
        date: '18/12',
      },
      {
        amount: 42,
        description: '01',
        date: '19/12',
      },
    ],
  },
};

export const AreaChart: Story = {
  args: {
    variant: 'area',
    data: [
      {
        amount: 93,
        description: '01',
        date: '15/11',
      },
      {
        amount: 4,
        description: '01',
        date: '16/11',
      },
      {
        amount: 67,
        description: '01',
        date: '17/11',
      },
      {
        amount: 34,
        description: '01',
        date: '18/11',
      },
      {
        amount: 82,
        description: '01',
        date: '19/11',
      },
      {
        amount: 89,
        description: '01',
        date: '20/11',
      },
    ],
  },
};

export const StepsChart: Story = {
  args: {
    variant: 'steps',
    data: [
      {
        amount: 93,
        description: '01',
        date: '15/11',
      },
      {
        amount: 4,
        description: '01',
        date: '16/11',
      },
      {
        amount: 67,
        description: '01',
        date: '17/11',
      },
      {
        amount: 34,
        description: '01',
        date: '18/11',
      },
      {
        amount: 82,
        description: '01',
        date: '19/11',
      },
      {
        amount: 89,
        description: '01',
        date: '20/11',
      },
    ],
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
    data: [
      {
        amount: 93,
        description: '01',
        date: '15/11',
      },
      {
        amount: 4,
        description: '01',
        date: '16/11',
      },
      {
        amount: 67,
        description: '01',
        date: '17/11',
      },
      {
        amount: 34,
        description: '01',
        date: '18/11',
      },
      {
        amount: 82,
        description: '01',
        date: '19/11',
      },
      {
        amount: 89,
        description: '01',
        date: '20/11',
      },
    ],
  },
};
