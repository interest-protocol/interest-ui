import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

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
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const chart = canvas.getByTestId('chart');
    const computedStyle = getComputedStyle(chart);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');

    await step('Char hover event', async () => {
      await userEvent.hover(canvas.getByTestId('chart'));
    });

    await step('Check if exist svg icon', async () => {
      const svgElements = chart.querySelectorAll('svg');
      expect(svgElements).toHaveLength(1);
    });

    await step('Check property value and args', () => {
      expect(args.variant).toBe('bar');
      expect(args.data).toBeTruthy();
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
    });
  },
};

export const AreaChart: Story = {
  args: {
    variant: 'area',
    data: CHARTS_DATA,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const chart = canvas.getByTestId('chart');
    const computedStyle = getComputedStyle(chart);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');

    await step('Char hover event', async () => {
      await userEvent.hover(canvas.getByTestId('chart'));
    });

    await step('Check if exist svg icon', async () => {
      const svgElements = chart.querySelectorAll('svg');
      expect(svgElements).toHaveLength(1);
    });

    await step('Check property value and args', () => {
      expect(args.variant).toBe('area');
      expect(args.data).toBeTruthy();
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
    });
  },
};

export const StepsChart: Story = {
  args: {
    variant: 'steps',
    data: CHARTS_DATA,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const chart = canvas.getByTestId('chart');
    const computedStyle = getComputedStyle(chart);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');

    await step('Char hover event', async () => {
      await userEvent.hover(canvas.getByTestId('chart'));
    });

    await step('Check if exist svg icon', async () => {
      const svgElements = chart.querySelectorAll('svg');
      expect(svgElements).toHaveLength(1);
    });

    await step('Check property value and args', () => {
      expect(args.variant).toBe('steps');
      expect(args.data).toBeTruthy();
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
    });
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
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const chart = canvas.getByTestId('pieChart');
    const computedStyle = getComputedStyle(chart);
    const border = computedStyle.getPropertyValue('border');
    const color = computedStyle.getPropertyValue('color');
    const background = computedStyle.getPropertyValue('background');

    await step('Char hover event', async () => {
      await userEvent.hover(canvas.getByTestId('pieChart'));
    });

    await step('Check if exist svg icon', async () => {
      const svgElements = chart.querySelectorAll('svg');
      expect(svgElements).toHaveLength(7);
    });

    await step('Check property value and args', () => {
      expect(args.data).toBeTruthy();
      expect(args.variant).toBe('pie');
      expect(color.trim()).toBe('rgb(0, 0, 0)');
      expect(border.trim()).toBe('0px none rgb(0, 0, 0)');
      expect(background.substring(0, 16)).toBe('rgba(0, 0, 0, 0)');
    });
  },
};
