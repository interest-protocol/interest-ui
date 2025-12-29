import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, waitFor } from '@storybook/test';
import React, { useState } from 'react';
import Tabs from '../index';
import { Div } from '@stylin.js/elements';

const meta = {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    tab: {
      control: 'number',
      description: 'Currently selected tab index',
    },
    tabs: {
      control: 'object',
      description: 'Array of tab labels',
    },
    color: {
      control: 'text',
      description: 'Background color for active tab',
    },
    total: {
      control: 'object',
      description: 'Array of totals/badges for each tab',
    },
    setTab: {
      description: 'Callback function when tab changes',
    },
    isShortSize: {
      control: 'boolean',
      description: 'Enable short size mode (max-content width)',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const TabsWrapper = (args: any) => {
  const [tab, setTab] = useState(args.tab || 0);
  return (
    <Div display="flex">
      <Tabs {...args} tab={tab} setTab={setTab} />
    </Div>
  );
};

export const Default: Story = {
  render: (args) => <TabsWrapper {...args} />,
  args: {
    tab: 0,
    tabs: ['Overview', 'Details', 'Settings'],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic tabs component with three tabs. The first tab is active by default, showing the standard styling for active and inactive states.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render three tabs', async () => {
      const tab0 = canvas.getByTestId('tab-button-0');
      const tab1 = canvas.getByTestId('tab-button-1');
      const tab2 = canvas.getByTestId('tab-button-2');

      await waitFor(() => {
        expect(
          tab0,
          'It is expected that the first tab is rendered'
        ).toBeInTheDocument();
        expect(
          tab1,
          'It is expected that the second tab is rendered'
        ).toBeInTheDocument();
        expect(
          tab2,
          'It is expected that the third tab is rendered'
        ).toBeInTheDocument();
      });
    });

    await step('should display correct tab labels', async () => {
      const tab0 = canvas.getByTestId('tab-button-0');
      const tab1 = canvas.getByTestId('tab-button-1');
      const tab2 = canvas.getByTestId('tab-button-2');

      await waitFor(() => {
        expect(
          tab0,
          "It is expected that the first tab displays label 'Overview'"
        ).toHaveTextContent('Overview');
        expect(
          tab1,
          "It is expected that the second tab displays label 'Details'"
        ).toHaveTextContent('Details');
        expect(
          tab2,
          "It is expected that the third tab displays label 'Settings'"
        ).toHaveTextContent('Settings');
      });
    });

    await step('should mark first tab as active', async () => {
      const tab0 = canvas.getByTestId('tab-button-0');

      await waitFor(() => {
        expect(
          tab0,
          'It is expected that the first tab has data-active attribute as true'
        ).toHaveAttribute('data-active', 'true');
      });
    });

    await step('should apply active styles to first tab', async () => {
      const tab0 = canvas.getByTestId('tab-button-0');

      await waitFor(() => {
        expect(
          tab0,
          'It is expected that the active tab has color #FFFFFF'
        ).toHaveStyle({ color: '#FFFFFF' });
      });
    });

    await step('should apply inactive styles to other tabs', async () => {
      const tab1 = canvas.getByTestId('tab-button-1');
      const tab2 = canvas.getByTestId('tab-button-2');

      await waitFor(() => {
        expect(
          tab1,
          'It is expected that the second inactive tab has color #9CA3AF'
        ).toHaveStyle({ color: '#9CA3AF' });
        expect(
          tab2,
          'It is expected that the third inactive tab has color #9CA3AF'
        ).toHaveStyle({ color: '#9CA3AF' });
      });
    });
  },
};

export const WithTotals: Story = {
  render: (args) => <TabsWrapper {...args} />,
  args: {
    tab: 0,
    tabs: ['Users', 'Posts', 'Comments'],
    total: [120, 45, 230],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tabs with badge counters showing totals for each tab. Useful for displaying counts like number of users, posts, or notifications.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render tabs with total badges', async () => {
      const total0 = canvas.getByTestId('tab-total-0');
      const total1 = canvas.getByTestId('tab-total-1');
      const total2 = canvas.getByTestId('tab-total-2');

      await waitFor(() => {
        expect(
          total0,
          'It is expected that the first tab total badge is rendered'
        ).toBeInTheDocument();
        expect(
          total1,
          'It is expected that the second tab total badge is rendered'
        ).toBeInTheDocument();
        expect(
          total2,
          'It is expected that the third tab total badge is rendered'
        ).toBeInTheDocument();
      });
    });

    await step('should display correct total values', async () => {
      const total0 = canvas.getByTestId('tab-total-0');
      const total1 = canvas.getByTestId('tab-total-1');
      const total2 = canvas.getByTestId('tab-total-2');

      await waitFor(() => {
        expect(
          total0,
          "It is expected that the first tab total displays '120'"
        ).toHaveTextContent('120');
        expect(
          total1,
          "It is expected that the second tab total displays '45'"
        ).toHaveTextContent('45');
        expect(
          total2,
          "It is expected that the third tab total displays '230'"
        ).toHaveTextContent('230');
      });
    });

    await step('should have data-total attributes', async () => {
      const total0 = canvas.getByTestId('tab-total-0');
      const total1 = canvas.getByTestId('tab-total-1');
      const total2 = canvas.getByTestId('tab-total-2');

      await waitFor(() => {
        expect(
          total0,
          "It is expected that the first tab total has data-total attribute '120'"
        ).toHaveAttribute('data-total', '120');
        expect(
          total1,
          "It is expected that the second tab total has data-total attribute '45'"
        ).toHaveAttribute('data-total', '45');
        expect(
          total2,
          "It is expected that the third tab total has data-total attribute '230'"
        ).toHaveAttribute('data-total', '230');
      });
    });
  },
};

export const WithCustomColor: Story = {
  render: (args) => <TabsWrapper {...args} />,
  args: {
    tab: 0,
    tabs: ['Tab One', 'Tab Two'],
    color: '#FF6B6B',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tabs with a custom background color for the active tab. The color prop allows customization to match your brand or design system.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render two tabs with custom color', async () => {
      const tab0 = canvas.getByTestId('tab-button-0');
      const tab1 = canvas.getByTestId('tab-button-1');

      await waitFor(() => {
        expect(
          tab0,
          'It is expected that the first tab is rendered'
        ).toBeInTheDocument();
        expect(
          tab1,
          'It is expected that the second tab is rendered'
        ).toBeInTheDocument();
      });
    });

    await step('should apply custom color to active tab', async () => {
      const tab0 = canvas.getByTestId('tab-button-0');

      await waitFor(() => {
        expect(
          tab0,
          'It is expected that the active tab has custom background color #FF6B6B'
        ).toHaveStyle({ backgroundColor: '#FF6B6B' });
      });
    });
  },
};

export const ShortSize: Story = {
  render: (args) => <TabsWrapper {...args} />,
  args: {
    tab: 0,
    tabs: ['Short', 'Mode'],
    isShortSize: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tabs in short size mode with max-content width. This mode makes tabs only as wide as their content, useful for compact layouts.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render tabs in short size mode', async () => {
      const tab0 = canvas.getByTestId('tab-button-0');
      const tab1 = canvas.getByTestId('tab-button-1');

      await waitFor(() => {
        expect(
          tab0,
          'It is expected that the first tab is rendered'
        ).toBeInTheDocument();
        expect(
          tab1,
          'It is expected that the second tab is rendered'
        ).toBeInTheDocument();
      });
    });

    await step(
      'should apply max-content width in short size mode',
      async () => {
        const tab0 = canvas.getByTestId('tab-button-0');

        await waitFor(() => {
          expect(
            tab0,
            'It is expected that the tab has size max-content in short mode'
          ).toHaveStyle({ size: 'max-content' });
        });
      }
    );
  },
};

export const SecondTabActive: Story = {
  render: (args) => <TabsWrapper {...args} />,
  args: {
    tab: 1,
    tabs: ['First', 'Second', 'Third'],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates tabs with the second tab active. Shows how the active state can be controlled programmatically.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render three tabs', async () => {
      const tab0 = canvas.getByTestId('tab-button-0');
      const tab1 = canvas.getByTestId('tab-button-1');
      const tab2 = canvas.getByTestId('tab-button-2');

      await waitFor(() => {
        expect(
          tab0,
          'It is expected that the first tab is rendered'
        ).toBeInTheDocument();
        expect(
          tab1,
          'It is expected that the second tab is rendered'
        ).toBeInTheDocument();
        expect(
          tab2,
          'It is expected that the third tab is rendered'
        ).toBeInTheDocument();
      });
    });

    await step('should mark second tab as active', async () => {
      const tab1 = canvas.getByTestId('tab-button-1');

      await waitFor(() => {
        expect(
          tab1,
          'It is expected that the second tab has data-active attribute as true'
        ).toHaveAttribute('data-active', 'true');
      });
    });

    await step('should apply active color to second tab only', async () => {
      const tab0 = canvas.getByTestId('tab-button-0');
      const tab1 = canvas.getByTestId('tab-button-1');
      const tab2 = canvas.getByTestId('tab-button-2');

      await waitFor(() => {
        expect(
          tab0,
          'It is expected that the first inactive tab has color #9CA3AF'
        ).toHaveStyle({ color: '#9CA3AF' });
        expect(
          tab1,
          'It is expected that the second active tab has color #FFFFFF'
        ).toHaveStyle({ color: '#FFFFFF' });
        expect(
          tab2,
          'It is expected that the third inactive tab has color #9CA3AF'
        ).toHaveStyle({ color: '#9CA3AF' });
      });
    });
  },
};

export const ManyTabs: Story = {
  render: (args) => <TabsWrapper {...args} />,
  args: {
    tab: 0,
    tabs: ['Tab1', 'Tab2', 'Tab3', 'Tab4', 'Tab5'],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Example with multiple tabs to demonstrate how the component handles a larger number of options. All tabs maintain consistent styling and behavior.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render five tabs', async () => {
      const tabs = [];
      for (let i = 0; i < 5; i++) {
        tabs.push(canvas.getByTestId(`tab-button-${i}`));
      }

      await waitFor(() => {
        tabs.forEach((tab, index) => {
          expect(
            tab,
            `It is expected that tab ${index + 1} is rendered`
          ).toBeInTheDocument();
        });
      });
    });

    await step('should display all tab labels correctly', async () => {
      for (let i = 1; i <= 5; i++) {
        const tab = canvas.getByTestId(`tab-button-${i - 1}`);

        await waitFor(() => {
          expect(
            tab,
            `It is expected that tab ${i} displays label 'Tab${i}'`
          ).toHaveTextContent(`Tab${i}`);
        });
      }
    });

    await step('should have first tab active', async () => {
      const tab0 = canvas.getByTestId('tab-button-0');

      await waitFor(() => {
        expect(
          tab0,
          'It is expected that the first tab has data-active attribute as true'
        ).toHaveAttribute('data-active', 'true');
      });
    });
  },
};

export const WithTotalsAndColor: Story = {
  render: (args) => <TabsWrapper {...args} />,
  args: {
    tab: 0,
    tabs: ['Active', 'Inactive', 'Pending'],
    total: [50, 30, 20],
    color: '#4F46E5',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Combines badge counters with custom color. Shows how multiple props work together to create a fully customized tab component.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render tabs with totals and custom color', async () => {
      const tab0 = canvas.getByTestId('tab-button-0');
      const total0 = canvas.getByTestId('tab-total-0');

      await waitFor(() => {
        expect(
          tab0,
          'It is expected that the first tab is rendered'
        ).toBeInTheDocument();
        expect(
          total0,
          'It is expected that the first tab total badge is rendered'
        ).toBeInTheDocument();
      });
    });

    await step('should apply custom color to active tab', async () => {
      const tab0 = canvas.getByTestId('tab-button-0');

      await waitFor(() => {
        expect(
          tab0,
          'It is expected that the active tab has custom background color #4F46E5'
        ).toHaveStyle({ backgroundColor: '#4F46E5' });
      });
    });

    await step('should display all total values', async () => {
      const total0 = canvas.getByTestId('tab-total-0');
      const total1 = canvas.getByTestId('tab-total-1');
      const total2 = canvas.getByTestId('tab-total-2');

      await waitFor(() => {
        expect(
          total0,
          "It is expected that the first tab total displays '50'"
        ).toHaveTextContent('50');
        expect(
          total1,
          "It is expected that the second tab total displays '30'"
        ).toHaveTextContent('30');
        expect(
          total2,
          "It is expected that the third tab total displays '20'"
        ).toHaveTextContent('20');
      });
    });
  },
};

export const WithNullTotal: Story = {
  render: (args) => <TabsWrapper {...args} />,
  args: {
    tab: 0,
    tabs: ['With Badge', 'Without Badge', 'With Badge Again'],
    total: [100, null, 50],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates how tabs handle mixed total values with null entries. Null values will not display a badge, allowing flexible badge visibility.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render tabs with mixed null totals', async () => {
      const tab0 = canvas.getByTestId('tab-button-0');
      const tab1 = canvas.getByTestId('tab-button-1');
      const tab2 = canvas.getByTestId('tab-button-2');

      await waitFor(() => {
        expect(
          tab0,
          'It is expected that the first tab is rendered'
        ).toBeInTheDocument();
        expect(
          tab1,
          'It is expected that the second tab is rendered'
        ).toBeInTheDocument();
        expect(
          tab2,
          'It is expected that the third tab is rendered'
        ).toBeInTheDocument();
      });
    });

    await step('should not render total badge for null values', async () => {
      const total1 = canvas.queryByTestId('tab-total-1');

      await waitFor(() => {
        expect(
          total1,
          'It is expected that the tab with null total does not render a badge'
        ).not.toBeInTheDocument();
      });
    });

    await step('should render badges for non-null totals', async () => {
      const total0 = canvas.getByTestId('tab-total-0');
      const total2 = canvas.getByTestId('tab-total-2');

      await waitFor(() => {
        expect(
          total0,
          'It is expected that the first tab with non-null total renders a badge'
        ).toBeInTheDocument();
        expect(
          total2,
          'It is expected that the third tab with non-null total renders a badge'
        ).toBeInTheDocument();
      });
    });

    await step('should display correct badge values', async () => {
      const total0 = canvas.getByTestId('tab-total-0');
      const total2 = canvas.getByTestId('tab-total-2');

      await waitFor(() => {
        expect(
          total0,
          "It is expected that the first tab total displays '100'"
        ).toHaveTextContent('100');
        expect(
          total2,
          "It is expected that the third tab total displays '50'"
        ).toHaveTextContent('50');
      });
    });
  },
};
