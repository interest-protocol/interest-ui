import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, waitFor } from '@storybook/test';
import CombinedChart from '../index';

const meta = {
  title: 'CombinedChart',
  component: CombinedChart,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of data objects for the chart',
    },
    xDataKey: {
      control: 'text',
      description: 'Key name for X-axis data',
    },
    charts: {
      control: 'object',
      description: 'Configuration for bar and area charts',
    },
  },
} satisfies Meta<typeof CombinedChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData = [
  { month: 'Jan', sales: 4000, revenue: 2400 },
  { month: 'Feb', sales: 3000, revenue: 1398 },
  { month: 'Mar', sales: 2000, revenue: 9800 },
  { month: 'Apr', sales: 2780, revenue: 3908 },
  { month: 'May', sales: 1890, revenue: 4800 },
  { month: 'Jun', sales: 2390, revenue: 3800 },
];

export const Default: Story = {
  args: {
    data: mockData,
    xDataKey: 'month',
    charts: {
      bar: [{ dataKey: 'sales', color: '#2774CA', label: 'Sales' }],
      area: [{ dataKey: 'revenue', color: '#00B989', label: 'Revenue' }],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic combined chart with one bar chart and one area chart. Displays sales as bars and revenue as an area line.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render combined chart container', async () => {
      const chart = canvas.getByTestId('combined-chart');
      await waitFor(() =>
        expect(
          chart,
          'It is expected that the combined chart container is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('should have correct container dimensions', async () => {
      const chart = canvas.getByTestId('combined-chart');
      await waitFor(() => {
        expect(
          chart,
          'It is expected that the chart has width 100%'
        ).toHaveStyle({ size: '100%' });
        expect(
          chart,
          'It is expected that the chart has height 400px'
        ).toHaveStyle({ height: '400px' });
      });
    });

    await step('should render SVG element', async () => {
      const svg = canvasElement.querySelector('svg');
      await waitFor(() =>
        expect(
          svg,
          'It is expected that an SVG element is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('should render bar chart rectangles', async () => {
      const bars = canvasElement.querySelectorAll('.recharts-bar-rectangle');
      await waitFor(() =>
        expect(
          bars.length,
          'It is expected that bar rectangles are rendered'
        ).toBeGreaterThan(0)
      );
    });

    await step('should render area chart path', async () => {
      const area = canvasElement.querySelector('.recharts-area-area');
      await waitFor(() =>
        expect(
          area,
          'It is expected that area chart path is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('should render X-axis with correct data', async () => {
      const xAxis = canvasElement.querySelector('.recharts-xAxis');
      await waitFor(() =>
        expect(
          xAxis,
          'It is expected that X-axis is rendered'
        ).toBeInTheDocument()
      );
    });
  },
};

export const MultipleBarCharts: Story = {
  args: {
    data: mockData,
    xDataKey: 'month',
    charts: {
      bar: [
        { dataKey: 'sales', color: '#2774CA', label: 'Sales' },
        { dataKey: 'revenue', color: '#FF6B6B', label: 'Revenue' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Combined chart with multiple bar charts. Displays both sales and revenue as separate bar series with different colors.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render chart container', async () => {
      const chart = canvas.getByTestId('combined-chart');
      await waitFor(() =>
        expect(
          chart,
          'It is expected that the chart container is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('should render multiple bar series', async () => {
      const barLayers = canvasElement.querySelectorAll('.recharts-bar');
      await waitFor(() =>
        expect(
          barLayers.length,
          'It is expected that two bar series are rendered'
        ).toBe(2)
      );
    });

    await step('should render bars for each data point', async () => {
      const bars = canvasElement.querySelectorAll('.recharts-bar-rectangle');
      await waitFor(() =>
        expect(
          bars.length,
          'It is expected that bars are rendered for all data points'
        ).toBe(mockData.length * 2)
      );
    });
  },
};

export const MultipleAreaCharts: Story = {
  args: {
    data: mockData,
    xDataKey: 'month',
    charts: {
      area: [
        { dataKey: 'sales', color: '#2774CA', label: 'Sales' },
        { dataKey: 'revenue', color: '#00B989', label: 'Revenue' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Combined chart with multiple area charts. Shows sales and revenue trends as overlapping area lines.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render chart container', async () => {
      const chart = canvas.getByTestId('combined-chart');
      await waitFor(() =>
        expect(
          chart,
          'It is expected that the chart container is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('should render multiple area series', async () => {
      const areas = canvasElement.querySelectorAll('.recharts-area');
      await waitFor(() =>
        expect(
          areas.length,
          'It is expected that two area series are rendered'
        ).toBe(2)
      );
    });

    await step('should render area paths', async () => {
      const areaPaths = canvasElement.querySelectorAll('.recharts-area-area');
      await waitFor(() =>
        expect(
          areaPaths.length,
          'It is expected that area paths are rendered'
        ).toBeGreaterThan(0)
      );
    });
  },
};

export const CombinedBarsAndAreas: Story = {
  args: {
    data: mockData,
    xDataKey: 'month',
    charts: {
      bar: [
        { dataKey: 'sales', color: '#2774CA' },
        { dataKey: 'revenue', color: '#FF6B6B' },
      ],
      area: [{ dataKey: 'sales', color: '#FFD93D', label: 'Sales Trend' }],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Combined chart mixing both bar and area charts. Shows sales and revenue as bars with an additional sales trend line overlay.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render both bars and areas together', async () => {
      const bars = canvasElement.querySelectorAll('.recharts-bar');
      const areas = canvasElement.querySelectorAll('.recharts-area');

      await waitFor(() => {
        expect(bars.length, 'It is expected that bar charts are rendered').toBe(
          2
        );
        expect(areas.length, 'It is expected that area chart is rendered').toBe(
          1
        );
      });
    });

    await step(
      'should have correct layout with multiple chart types',
      async () => {
        const chart = canvas.getByTestId('combined-chart');
        await waitFor(() => {
          expect(
            chart,
            'It is expected that the chart container is rendered'
          ).toBeInTheDocument();
          expect(
            chart,
            'It is expected that the chart has width 100%'
          ).toHaveStyle({ size: '100%' });
          expect(
            chart,
            'It is expected that the chart has height 400px'
          ).toHaveStyle({ height: '400px' });
        });
      }
    );

    await step('should render SVG with all elements', async () => {
      const svg = canvasElement.querySelector('svg');
      await waitFor(() =>
        expect(
          svg,
          'It is expected that SVG element contains all chart elements'
        ).toBeInTheDocument()
      );
    });
  },
};

export const SingleBarChart: Story = {
  args: {
    data: mockData,
    xDataKey: 'month',
    charts: {
      bar: [{ dataKey: 'sales', color: '#2774CA', label: 'Sales' }],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Combined chart with only a single bar chart. Demonstrates the simplest configuration with just one data series.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render single bar chart', async () => {
      const bars = canvasElement.querySelectorAll('.recharts-bar');
      await waitFor(() =>
        expect(
          bars.length,
          'It is expected that one bar series is rendered'
        ).toBe(1)
      );
    });

    await step('should render bars for all data points', async () => {
      const barRects = canvasElement.querySelectorAll(
        '.recharts-bar-rectangle'
      );
      await waitFor(() =>
        expect(
          barRects.length,
          'It is expected that bars are rendered for all 6 data points'
        ).toBe(mockData.length)
      );
    });

    await step('should not render any area charts', async () => {
      const areas = canvasElement.querySelectorAll('.recharts-area');
      await waitFor(() =>
        expect(
          areas.length,
          'It is expected that no area charts are rendered'
        ).toBe(0)
      );
    });
  },
};

export const SingleAreaChart: Story = {
  args: {
    data: mockData,
    xDataKey: 'month',
    charts: {
      area: [{ dataKey: 'revenue', color: '#00B989', label: 'Revenue' }],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Combined chart with only a single area chart. Shows revenue trend as a smooth area line.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render single area chart', async () => {
      const areas = canvasElement.querySelectorAll('.recharts-area');
      await waitFor(() =>
        expect(
          areas.length,
          'It is expected that one area series is rendered'
        ).toBe(1)
      );
    });

    await step('should render area path element', async () => {
      const areaPath = canvasElement.querySelector('.recharts-area-area');
      await waitFor(() =>
        expect(
          areaPath,
          'It is expected that area path element is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('should not render any bar charts', async () => {
      const bars = canvasElement.querySelectorAll('.recharts-bar');
      await waitFor(() =>
        expect(
          bars.length,
          'It is expected that no bar charts are rendered'
        ).toBe(0)
      );
    });
  },
};

export const WithoutLabels: Story = {
  args: {
    data: mockData,
    xDataKey: 'month',
    charts: {
      bar: [{ dataKey: 'sales', color: '#2774CA' }],
      area: [{ dataKey: 'revenue', color: '#00B989' }],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Combined chart without custom labels. The component uses dataKey values as fallback labels when labels are not provided.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render charts without custom labels', async () => {
      const bars = canvasElement.querySelectorAll('.recharts-bar');
      const areas = canvasElement.querySelectorAll('.recharts-area');

      await waitFor(() => {
        expect(bars.length, 'It is expected that bar chart is rendered').toBe(
          1
        );
        expect(areas.length, 'It is expected that area chart is rendered').toBe(
          1
        );
      });
    });

    await step('should render chart with correct structure', async () => {
      const chart = canvas.getByTestId('combined-chart');
      const svg = canvasElement.querySelector('svg');

      await waitFor(() => {
        expect(
          chart,
          'It is expected that chart container is rendered'
        ).toBeInTheDocument();
        expect(
          svg,
          'It is expected that SVG element is rendered'
        ).toBeInTheDocument();
      });
    });
  },
};
