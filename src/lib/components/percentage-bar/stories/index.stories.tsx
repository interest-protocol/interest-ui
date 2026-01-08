import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, waitFor } from '@storybook/test';
import PercentageBar from '../index';

const meta = {
  title: 'Interest Protocol/Percentage Bar',
  component: PercentageBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    total: {
      control: 'number',
      description: 'Total sum used to calculate percentages',
    },
    balanceData: {
      control: 'object',
      description: 'Array of balance items to display',
    },
  },
} satisfies Meta<typeof PercentageBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    total: 10000,
    balanceData: [{ balance: 7500 }, { balance: 2500 }],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render the balance bar container', async () => {
      const PercentageBar = canvas.getByTestId('balance-bar');
      await waitFor(() => expect(PercentageBar).toBeInTheDocument());
    });

    await step('should render two segments', async () => {
      const segment0 = canvas.getByTestId('balance-segment-0');
      const segment1 = canvas.getByTestId('balance-segment-1');

      await waitFor(() => {
        expect(segment0).toBeInTheDocument();
        expect(segment1).toBeInTheDocument();
      });
    });

    await step('should display correct percentages', async () => {
      const segment0 = canvas.getByTestId('balance-segment-0');
      const segment1 = canvas.getByTestId('balance-segment-1');

      await waitFor(() => {
        expect(segment0).toHaveAttribute('data-percentage', '75');
        expect(segment1).toHaveAttribute('data-percentage', '25');
      });
    });

    await step('should show percentage text in segments', async () => {
      const segment0 = canvas.getByTestId('balance-segment-0');
      const segment1 = canvas.getByTestId('balance-segment-1');

      await waitFor(() => {
        // 7500 / 10000 = 75%
        expect(segment0).toHaveTextContent('75.00%');
        // 2500 / 10000 = 25%
        expect(segment1).toHaveTextContent('25.00%');
      });
    });

    await step('should render container with correct styles', async () => {
      const container = canvas.getByTestId('balance-bar');

      await waitFor(() => {
        expect(container).toBeInTheDocument();
        expect(container).toHaveStyle({
          display: 'flex',
          height: '14px',
        });
      });
    });

    await step('should apply default colors', async () => {
      const segment0 = canvas.getByTestId('balance-segment-0');
      const segment1 = canvas.getByTestId('balance-segment-1');

      await waitFor(() => {
        expect(segment0).toHaveStyle('background-color: rgb(39, 116, 202)');
        expect(segment1).toHaveStyle({ backgroundColor: '#00B989' });
      });
    });

    await step('should apply default text colors', async () => {
      const segment0 = canvas.getByTestId('balance-segment-0');
      const segment1 = canvas.getByTestId('balance-segment-1');

      await waitFor(() => {
        expect(segment0).toHaveStyle({ color: '#FFFFFF' });
        expect(segment1).toHaveStyle({ color: '#000000' });
      });
    });
  },
};

export const EqualDistribution: Story = {
  args: {
    total: 6000,
    balanceData: [{ balance: 3000 }, { balance: 3000 }],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render two equal segments', async () => {
      const segment0 = canvas.getByTestId('balance-segment-0');
      const segment1 = canvas.getByTestId('balance-segment-1');

      await waitFor(() => {
        expect(segment0).toBeInTheDocument();
        expect(segment1).toBeInTheDocument();
      });
    });

    await step('should show 50.00% for each segment', async () => {
      const segment0 = canvas.getByTestId('balance-segment-0');
      const segment1 = canvas.getByTestId('balance-segment-1');

      await waitFor(() => {
        expect(segment0).toHaveTextContent('50.00%');
        expect(segment1).toHaveTextContent('50.00%');
      });
    });

    await step('should have equal widths', async () => {
      const segment0 = canvas.getByTestId('balance-segment-0');
      const segment1 = canvas.getByTestId('balance-segment-1');

      await waitFor(() => {
        expect(segment0).toHaveStyle({ size: '50%' });
        expect(segment1).toHaveStyle({ size: '50%' });
      });
    });

    await step('should have correct data-percentage attributes', async () => {
      const segment0 = canvas.getByTestId('balance-segment-0');
      const segment1 = canvas.getByTestId('balance-segment-1');

      await waitFor(() => {
        expect(segment0).toHaveAttribute('data-percentage', '50');
        expect(segment1).toHaveAttribute('data-percentage', '50');
      });
    });

    await step('should apply correct colors for equal segments', async () => {
      const segment0 = canvas.getByTestId('balance-segment-0');
      const segment1 = canvas.getByTestId('balance-segment-1');

      await waitFor(() => {
        expect(segment0).toHaveStyle({
          backgroundColor: '#2774CA',
          color: '#FFFFFF',
        });
        expect(segment1).toHaveStyle({
          backgroundColor: '#00B989',
          color: '#000000',
        });
      });
    });
  },
};

export const SingleSegment: Story = {
  args: {
    total: 10000,
    balanceData: [{ balance: 10000 }],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render single segment at 100%', async () => {
      const segment0 = canvas.getByTestId('balance-segment-0');

      await waitFor(() => {
        expect(segment0).toBeInTheDocument();
        expect(segment0).toHaveAttribute('data-percentage', '100');
        expect(segment0).toHaveTextContent('100.00%');
      });
    });

    await step('should apply primary color to single segment', async () => {
      const segment0 = canvas.getByTestId('balance-segment-0');

      await waitFor(() => {
        expect(segment0).toHaveStyle({ backgroundColor: '#2774CA' });
      });
    });

    await step('should fill entire width', async () => {
      const segment0 = canvas.getByTestId('balance-segment-0');

      await waitFor(() => {
        expect(segment0).toHaveStyle({ size: '100%' });
      });
    });

    await step('should display 100% text content', async () => {
      const segment0 = canvas.getByTestId('balance-segment-0');

      await waitFor(() => {
        expect(segment0).toHaveTextContent('100.00%');
      });
    });

    await step('should have correct styling for single segment', async () => {
      const segment0 = canvas.getByTestId('balance-segment-0');

      await waitFor(() => {
        expect(segment0).toHaveStyle({
          backgroundColor: '#2774CA',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        });
      });
    });
  },
};

export const EmptyData: Story = {
  args: {
    total: 10000,
    balanceData: [],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should not render when data is empty', async () => {
      const percentageBar = canvas.queryByTestId('balance-bar');

      await waitFor(() => {
        expect(percentageBar).not.toBeInTheDocument();
      });
    });

    await step('should not render any segments', async () => {
      const segment0 = canvas.queryByTestId('balance-segment-0');

      await waitFor(() => {
        expect(segment0).not.toBeInTheDocument();
      });
    });
  },
};

export const ZeroTotal: Story = {
  args: {
    total: 0,
    balanceData: [{ balance: 1000 }, { balance: 2000 }],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should not render when total is zero', async () => {
      const percentageBar = canvas.queryByTestId('balance-bar');

      await waitFor(() => {
        expect(percentageBar).not.toBeInTheDocument();
      });
    });
  },
};
