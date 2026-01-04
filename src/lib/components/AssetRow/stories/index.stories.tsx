import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, waitFor } from '@storybook/test';
import AssetRow from '../index';
import { TokenStandard } from '../asset-row.types';
import React from 'react';
import { formatDollars, formatMoney } from '../../../../utils';

const mockTokenIcon = (
  <div
    data-testid="token-icon"
    style={{
      width: '2rem',
      height: '2rem',
      background: '#2774CA',
      borderRadius: '50%',
    }}
  />
);

const meta = {
  title: 'AssetRow',
  component: AssetRow,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    token: {
      control: 'object',
      description: 'Token metadata containing name, symbol, type, etc',
    },
    price: {
      control: 'number',
      description: 'Current token price in USD',
    },
    priceChange24HoursPercentage: {
      control: 'number',
      description: '24-hour price change percentage',
    },
    isConvertible: {
      control: 'boolean',
      description: 'Whether token can be converted to FA',
    },
    balance: {
      control: 'number',
      description: 'User balance of this token',
    },
  },
} satisfies Meta<typeof AssetRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    token: {
      name: 'Bitcoin',
      symbol: 'BTC',
      type: 'COIN',
      decimals: 8,
      standard: TokenStandard.COIN,
    },
    price: 43500,
    priceChange24HoursPercentage: 2.5,
    balance: 0.5,
    isConvertible: false,
    TokenIcon: mockTokenIcon,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic asset row displaying Bitcoin with positive price change. Shows token symbol, formatted price, balance, and price change percentage in green.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render asset row wrapper', async () => {
      const wrapper = canvas.getByTestId('asset-row-wrapper');
      await waitFor(() =>
        expect(
          wrapper,
          'It is expected that the asset row wrapper is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('should display token symbol', async () => {
      const symbol = canvas.getByTestId('asset-symbol');
      await waitFor(() =>
        expect(
          symbol,
          "It is expected that the token symbol displays 'BTC'"
        ).toHaveTextContent('BTC')
      );
    });

    await step('should display formatted price', async () => {
      const price = canvas.getByTestId('asset-price');
      await waitFor(() =>
        expect(
          price,
          "It is expected that the price displays '$43,500.00' formatted in USD"
        ).toHaveTextContent(formatDollars(43500, 2))
      );
    });

    await step('should display balance amount', async () => {
      const balance = canvas.getByTestId('balance-amount');
      await waitFor(() =>
        expect(
          balance,
          "It is expected that the balance displays '0.5' with 4 decimals"
        ).toHaveTextContent('0.5')
      );
    });

    await step('should show positive price change in green', async () => {
      const priceChange = canvas.getByTestId('price-change');
      await waitFor(() => {
        expect(
          priceChange,
          "It is expected that the price change has data-change attribute '2.5'"
        ).toHaveAttribute('data-change', '+2.5%');
        expect(
          priceChange,
          'It is expected that the positive price change has color #5CD187'
        ).toHaveStyle({ color: '#5CD187' });
      });
    });

    await step(
      'should not render convert button for non-convertible token',
      async () => {
        const convertBtn = canvas.queryByTestId('convert-button');
        await waitFor(() =>
          expect(
            convertBtn,
            'It is expected that the convert button is not rendered for non-convertible token'
          ).not.toBeInTheDocument()
        );
      }
    );
  },
};

export const NegativePriceChange: Story = {
  args: {
    token: {
      name: 'Ethereum',
      symbol: 'ETH',
      type: 'COIN',
      decimals: 18,
      standard: TokenStandard.COIN,
    },
    price: 2250,
    priceChange24HoursPercentage: -3.8,
    balance: 2.5,
    isConvertible: false,
    TokenIcon: mockTokenIcon,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Asset row displaying Ethereum with negative price change. The negative percentage is shown in red to indicate a price decrease.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should display token symbol', async () => {
      const symbol = canvas.getByTestId('asset-symbol');
      await waitFor(() =>
        expect(
          symbol,
          "It is expected that the token symbol displays 'ETH'"
        ).toHaveTextContent('ETH')
      );
    });

    await step('should show negative price change in red', async () => {
      const priceChange = canvas.getByTestId('price-change');
      await waitFor(() => {
        expect(
          priceChange,
          "It is expected that the price change has data-change attribute '-3.8'"
        ).toHaveAttribute('data-change', '-3.8%');
        expect(
          priceChange,
          'It is expected that the negative price change has color #FF8181'
        ).toHaveStyle({ color: '#FF8181' });
      });
    });

    await step('should display correct price change text', async () => {
      const priceChange = canvas.getByTestId('price-change');
      await waitFor(() =>
        expect(
          priceChange,
          "It is expected that the price change displays '-3.80%' with minus sign"
        ).toHaveTextContent('-3.8%')
      );
    });
  },
};

export const ConvertibleToken: Story = {
  args: {
    token: {
      name: 'Algo Token',
      symbol: 'ALGO',
      type: 'TOKEN',
      decimals: 6,
      standard: TokenStandard.COIN,
    },
    price: 0.25,
    balance: 1000,
    isConvertible: true,
    TokenIcon: mockTokenIcon,
    priceChange24HoursPercentage: 1.2,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Asset row with a convertible token. Shows the CONVERT button that appears only when the token can be converted to FA standard.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step(
      'should render convert button for convertible token',
      async () => {
        const convertBtn = canvas.getByTestId('convert-button');
        await waitFor(() =>
          expect(
            convertBtn,
            'It is expected that the convert button is rendered for convertible token'
          ).toBeInTheDocument()
        );
      }
    );

    await step('should display large balance amount', async () => {
      const balance = canvas.getByTestId('balance-amount');
      await waitFor(() =>
        expect(
          balance,
          "It is expected that the large balance displays '1,000' formatted with comma"
        ).toHaveTextContent('1,000')
      );
    });
  },
};

export const ZeroPriceChange: Story = {
  args: {
    token: {
      name: 'Stablecoin',
      symbol: 'USDT',
      type: 'TOKEN',
      decimals: 6,
      standard: TokenStandard.FA,
    },
    price: 1.0,
    priceChange24HoursPercentage: 0,
    balance: 5000,
    isConvertible: false,
    TokenIcon: mockTokenIcon,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Asset row displaying a stablecoin with zero price change. Demonstrates how the component handles neutral price movement.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should display zero price change', async () => {
      const priceChange = canvas.getByTestId('price-change');
      await waitFor(() =>
        expect(
          priceChange,
          "It is expected that the price change displays '0.00%' for zero change"
        ).toHaveTextContent('0%')
      );
    });

    await step(
      'should display price change in green for neutral value',
      async () => {
        const priceChange = canvas.getByTestId('price-change');
        await waitFor(() =>
          expect(
            priceChange,
            'It is expected that the zero price change has color #5CD187 (green for neutral/positive)'
          ).toHaveStyle({ color: '#5CD187' })
        );
      }
    );
  },
};

export const NullPriceChange: Story = {
  args: {
    token: {
      name: 'New Token',
      symbol: 'NEW',
      type: 'TOKEN',
      decimals: 8,
      standard: TokenStandard.COIN,
    },
    price: 0.5,
    priceChange24HoursPercentage: undefined,
    balance: 100,
    isConvertible: false,
    TokenIcon: mockTokenIcon,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Asset row with undefined price change. Shows how the component handles missing price change data by defaulting to 0.00%.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should handle undefined price change', async () => {
      const priceChange = canvas.getByTestId('price-change');
      await waitFor(() =>
        expect(
          priceChange,
          "It is expected that the price change displays '0.00%' when value is undefined"
        ).toHaveTextContent('0%')
      );
    });
  },
};

export const HighBalance: Story = {
  args: {
    token: {
      name: 'High Supply Token',
      symbol: 'HST',
      type: 'TOKEN',
      decimals: 2,
      standard: TokenStandard.FA,
    },
    price: 0.001,
    priceChange24HoursPercentage: 5.25,
    balance: 999999.99,
    isConvertible: true,
    TokenIcon: mockTokenIcon,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Asset row with very high balance and low price. Demonstrates proper formatting of large numbers and small decimal values.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should format very large balance', async () => {
      const balance = canvas.getByTestId('balance-amount');
      await waitFor(() =>
        expect(
          balance,
          "It is expected that the large balance displays '999,999.99' formatted with commas"
        ).toHaveTextContent(formatMoney(999999.99, 4))
      );
    });

    await step('should display low price with correct decimals', async () => {
      const price = canvas.getByTestId('asset-price');
      await waitFor(() =>
        expect(
          price,
          "It is expected that the low price displays '$0.00' with 2 decimal places"
        ).toHaveTextContent('$0.00')
      );
    });

    await step('should render both convert button and balance', async () => {
      const convertBtn = canvas.getByTestId('convert-button');
      const balance = canvas.getByTestId('balance-amount');
      await waitFor(() => {
        expect(
          convertBtn,
          'It is expected that the convert button is rendered'
        ).toBeInTheDocument();
        expect(
          balance,
          'It is expected that the balance is rendered'
        ).toBeInTheDocument();
      });
    });
  },
};

export const SmallBalance: Story = {
  args: {
    token: {
      name: 'Expensive Coin',
      symbol: 'EXP',
      type: 'COIN',
      decimals: 8,
      standard: TokenStandard.COIN,
    },
    price: 65000,
    priceChange24HoursPercentage: -1.5,
    balance: 0.00001234,
    isConvertible: false,
    TokenIcon: mockTokenIcon,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Asset row with very small balance and high price. Shows proper handling of fractional balances with appropriate decimal precision.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should format very small balance with decimals', async () => {
      const balance = canvas.getByTestId('balance-amount');
      await waitFor(() =>
        expect(
          balance,
          "It is expected that the small balance displays '0.0000' with 4 decimals"
        ).toHaveTextContent('0.0000')
      );
    });

    await step(
      'should maintain price change style with negative value',
      async () => {
        const priceChange = canvas.getByTestId('price-change');
        await waitFor(() => {
          expect(
            priceChange,
            'It is expected that the negative price change has color #FF8181'
          ).toHaveStyle({ color: '#FF8181' });
          expect(
            priceChange,
            "It is expected that the price change displays '-1.50%'"
          ).toHaveTextContent('-1.5%');
        });
      }
    );
  },
};
