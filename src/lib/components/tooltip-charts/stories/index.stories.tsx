import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, waitFor } from '@storybook/test';
import TooltipChart from '../index';
import { formatMoney } from '../../../../utils';

const meta = {
  title: 'TooltipChart',
  component: TooltipChart,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Whether the tooltip is active',
    },
    label: {
      control: 'text',
      description: 'Label text for the tooltip',
    },
    title: {
      control: 'text',
      description: 'Title text for the tooltip',
    },
    payload: {
      control: 'object',
      description: 'Payload data to display',
    },
    labelMap: {
      control: 'object',
      description: 'Map to translate payload names',
    },
  },
} satisfies Meta<typeof TooltipChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    active: true,
    label: '2024-01-15',
    payload: [
      { name: 'revenue', value: 5000, color: '#2774CA' },
      { name: 'expenses', value: 3000, color: '#00B989' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic tooltip chart displaying two data items with color indicators. Shows revenue and expenses with their respective values and colors.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Should render tooltip container', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() =>
        expect(
          tooltip,
          'It is expected that the tooltip chart container is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('Should display label text', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() =>
        expect(
          tooltip,
          "It is expected that the tooltip displays label text '2024-01-15'"
        ).toHaveTextContent('2024-01-15')
      );
    });

    await step('Should render both payload items', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          "It is expected that the tooltip displays 'revenue' payload item"
        ).toHaveTextContent('revenue');
        expect(
          tooltip,
          "It is expected that the tooltip displays 'expenses' payload item"
        ).toHaveTextContent('expenses');
      });
    });

    await step('Should apply correct background style', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          'It is expected that the tooltip has background color #ffffff1a'
        ).toHaveStyle({ backgroundColor: '#ffffff1a' });
      });
    });

    await step('Should apply blur effect', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          'It is expected that the tooltip has backdrop filter blur(12px)'
        ).toHaveStyle({ backdropFilter: 'blur(12px)' });
      });
    });

    await step('Should apply border style', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          'It is expected that the tooltip has border 1px solid #ffffff33'
        ).toHaveStyle({ border: '1px solid #ffffff33' });
      });
    });

    await step('Should display color indicators for each item', async () => {
      const colorIndicator0 = canvas.getByTestId('color-indicator-0');
      const colorIndicator1 = canvas.getByTestId('color-indicator-1');
      await waitFor(() => {
        expect(
          colorIndicator0,
          'It is expected that the first color indicator is rendered'
        ).toBeInTheDocument();
        expect(
          colorIndicator1,
          'It is expected that the second color indicator is rendered'
        ).toBeInTheDocument();
      });
    });
  },
};

export const WithTitle: Story = {
  args: {
    active: true,
    title: 'Monthly Stats',
    label: 'January 2024',
    payload: [
      { name: 'sales', value: 12000, color: '#2774CA' },
      { name: 'profit', value: 4000, color: '#00B989' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tooltip with a title combined with the label. The title appears in bold before the label, providing additional context for the data.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Should display title with label', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          "It is expected that the tooltip displays title 'Monthly Stats: January 2024'"
        ).toHaveTextContent('Monthly Stats: January 2024');
      });
    });

    await step('Should render title in bold', async () => {
      const title = canvas.getByTestId('tooltip-title');
      await waitFor(() => {
        expect(
          title,
          'It is expected that the title has font weight 700'
        ).toHaveStyle({ fontWeight: '700' });
      });
    });

    await step('Should display all payload items', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          "It is expected that the tooltip displays 'sales' payload item"
        ).toHaveTextContent('sales');
        expect(
          tooltip,
          "It is expected that the tooltip displays 'profit' payload item"
        ).toHaveTextContent('profit');
      });
    });

    await step('Should have correct padding', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          'It is expected that the tooltip has padding 16px'
        ).toHaveStyle({ padding: '16px' });
      });
    });
  },
};

export const WithLabelMap: Story = {
  args: {
    active: true,
    label: 'Q1 2024',
    payload: [
      { name: 'srv', value: 8000, color: '#2774CA' },
      { name: 'exp', value: 2000, color: '#00B989' },
    ],
    labelMap: {
      srv: 'Service Revenue',
      exp: 'Expenses',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tooltip using labelMap to translate technical payload names into user-friendly labels. Shows 'Service Revenue' instead of 'srv' and 'Expenses' instead of 'exp'.",
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Should display mapped label names', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          "It is expected that the tooltip displays mapped label 'Service Revenue'"
        ).toHaveTextContent('Service Revenue');
        expect(
          tooltip,
          "It is expected that the tooltip displays mapped label 'Expenses'"
        ).toHaveTextContent('Expenses');
      });
    });

    await step('Should not show original unmapped names', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          "It is expected that the tooltip does not display original name 'srv'"
        ).not.toHaveTextContent('srv');
        expect(
          tooltip,
          "It is expected that the tooltip does not display original name 'exp'"
        ).not.toHaveTextContent('exp');
      });
    });

    await step('Should display label text', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          "It is expected that the tooltip displays label 'Q1 2024'"
        ).toHaveTextContent('Q1 2024');
      });
    });
  },
};

export const SinglePayloadItem: Story = {
  args: {
    active: true,
    label: '2024-01-20',
    payload: [{ name: 'total', value: 15000, color: '#2774CA' }],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tooltip displaying a single payload item. Demonstrates the minimal configuration with just one data point and its color indicator.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Should render single payload item', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          "It is expected that the tooltip displays single payload item 'total'"
        ).toHaveTextContent('total');
      });
    });

    await step('Should display value correctly', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          'It is expected that the tooltip displays formatted value of 15000'
        ).toHaveTextContent(formatMoney(+'15000'));
      });
    });

    await step('Should render one color indicator', async () => {
      const colorIndicator = canvas.getByTestId('color-indicator-0');
      await waitFor(() => {
        expect(
          colorIndicator,
          'It is expected that one color indicator is rendered'
        ).toBeInTheDocument();
      });
    });

    await step('Should have correct styling', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          'It is expected that the tooltip has border radius 16px'
        ).toHaveStyle({ borderRadius: '16px' });
      });
    });
  },
};

export const InactiveTooltip: Story = {
  args: {
    active: false,
    label: '2024-01-15',
    payload: [{ name: 'revenue', value: 5000, color: '#2774CA' }],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tooltip in inactive state. When active is false, the tooltip is not rendered, typically used when the mouse is not hovering over chart data.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Should not render when inactive', async () => {
      const tooltip = canvas.queryByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          'It is expected that the tooltip is not rendered when inactive'
        ).not.toBeInTheDocument();
      });
    });
  },
};

export const WithDuplicatePayload: Story = {
  args: {
    active: true,
    label: '2024-01-15',
    payload: [
      { name: 'revenue', value: 5000, color: '#2774CA' },
      { name: 'expenses', value: 3000, color: '#00B989' },
      { name: 'revenue', value: 5000, color: '#2774CA' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tooltip handling duplicate payload items. The component filters out duplicates to show only unique data points, preventing redundant information.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Should filter duplicate payload items', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      const revenueItems = tooltip.querySelectorAll(
        '[data-payload-name="revenue"]'
      );
      await waitFor(() => {
        expect(
          revenueItems,
          "It is expected that only one 'revenue' item is displayed after filtering duplicates"
        ).toHaveLength(1);
      });
    });

    await step('Should display unique items only', async () => {
      const items = canvas.getAllByTestId(/payload-item-/);
      await waitFor(() => {
        expect(
          items,
          'It is expected that only 2 unique payload items are displayed'
        ).toHaveLength(2);
      });
    });

    await step('Should show revenue and expenses labels', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          "It is expected that the tooltip displays 'revenue' label"
        ).toHaveTextContent('revenue');
        expect(
          tooltip,
          "It is expected that the tooltip displays 'expenses' label"
        ).toHaveTextContent('expenses');
      });
    });
  },
};

export const MultiplePayloadItems: Story = {
  args: {
    active: true,
    title: 'Dashboard Metrics',
    label: '2024-01-15',
    payload: [
      { name: 'sales', value: 12000, color: '#2774CA' },
      { name: 'profit', value: 4500, color: '#00B989' },
      { name: 'returns', value: 800, color: '#FF6B6B' },
      { name: 'pending', value: 1200, color: '#FFD93D' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tooltip with multiple payload items and title. Demonstrates how the component handles multiple data points with different colors while maintaining readability.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Should render all payload items', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          "It is expected that the tooltip displays 'sales' payload item"
        ).toHaveTextContent('sales');
        expect(
          tooltip,
          "It is expected that the tooltip displays 'profit' payload item"
        ).toHaveTextContent('profit');
        expect(
          tooltip,
          "It is expected that the tooltip displays 'returns' payload item"
        ).toHaveTextContent('returns');
        expect(
          tooltip,
          "It is expected that the tooltip displays 'pending' payload item"
        ).toHaveTextContent('pending');
      });
    });

    await step('Should display title with label', async () => {
      const tooltip = canvas.getByTestId('tooltip-chart');
      await waitFor(() => {
        expect(
          tooltip,
          "It is expected that the tooltip displays title 'Dashboard Metrics: 2024-01-15'"
        ).toHaveTextContent('Dashboard Metrics: 2024-01-15');
      });
    });

    await step('Should render four color indicators', async () => {
      const indicators = canvas.getAllByTestId(/color-indicator-/);
      await waitFor(() => {
        expect(
          indicators,
          'It is expected that four color indicators are rendered'
        ).toHaveLength(4);
      });
    });

    await step('Should apply correct colors to indicators', async () => {
      const indicator0 = canvas.getByTestId('color-indicator-0');
      const indicator1 = canvas.getByTestId('color-indicator-1');
      await waitFor(() => {
        expect(
          indicator0,
          'It is expected that the first color indicator has background color #2774CA'
        ).toHaveStyle({ backgroundColor: '#2774CA' });
        expect(
          indicator1,
          'It is expected that the second color indicator has background color #00B989'
        ).toHaveStyle({ backgroundColor: '#00B989' });
      });
    });
  },
};
