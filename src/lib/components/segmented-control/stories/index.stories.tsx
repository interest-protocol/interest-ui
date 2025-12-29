import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, waitFor, userEvent } from '@storybook/test';
import React, { useState } from 'react';
import SegmentedControl from '../';

const meta = {
  title: 'SegmentedControl',
  component: SegmentedControl,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    interval: {
      control: 'text',
      description: 'Currently selected interval value',
    },
    setInterval: {
      description: 'Callback function when interval changes',
    },
    options: {
      control: 'object',
      description: 'Array of available options',
    },
    labels: {
      control: 'object',
      description: 'Optional array of display labels for options',
    },
  },
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to handle state management
const SegmentedControlWrapper = (props: any) => {
  const [interval, setInterval] = useState(props.interval);
  return (
    <SegmentedControl
      {...props}
      interval={interval}
      setInterval={setInterval}
    />
  );
};

export const Default: Story = {
  render: (args) => <SegmentedControlWrapper {...args} />,
  args: {
    interval: '1d',
    options: ['1d', '1w'],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic segmented control with two options. The first option is selected by default and users can click to switch between options.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render the segmented control container', async () => {
      const control = canvas.getByTestId('segmented-control');
      await waitFor(() =>
        expect(
          control,
          'It is expected that the segmented control container is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('should render two options', async () => {
      const option0 = canvas.getByTestId('segmented-control-option-0');
      const option1 = canvas.getByTestId('segmented-control-option-1');

      await waitFor(() => {
        expect(
          option0,
          'It is expected that the first option is rendered'
        ).toBeInTheDocument();
        expect(
          option1,
          'It is expected that the second option is rendered'
        ).toBeInTheDocument();
      });
    });

    await step('should display correct option text', async () => {
      const option0 = canvas.getByTestId('segmented-control-option-0');
      const option1 = canvas.getByTestId('segmented-control-option-1');

      await waitFor(() => {
        expect(
          option0,
          "It is expected that the first option displays '1d'"
        ).toHaveTextContent('1d');
        expect(
          option1,
          "It is expected that the second option displays '1w'"
        ).toHaveTextContent('1w');
      });
    });

    await step('should highlight the selected option', async () => {
      const option0 = canvas.getByTestId('segmented-control-option-0');

      await waitFor(() => {
        expect(
          option0,
          'It is expected that the selected option has background color #9CA3AF33'
        ).toHaveStyle({ backgroundColor: '#9CA3AF33' });
        expect(
          option0,
          'It is expected that the selected option has color #FFFFFF'
        ).toHaveStyle({ color: '#FFFFFF' });
      });
    });

    await step('should show default cursor for selected option', async () => {
      const option0 = canvas.getByTestId('segmented-control-option-0');

      await waitFor(() => {
        expect(
          option0,
          'It is expected that the selected option has cursor default'
        ).toHaveStyle({ cursor: 'default' });
      });
    });

    await step('should show pointer cursor for unselected option', async () => {
      const option1 = canvas.getByTestId('segmented-control-option-1');

      await waitFor(() => {
        expect(
          option1,
          'It is expected that the unselected option has cursor pointer'
        ).toHaveStyle({ cursor: 'pointer' });
      });
    });
  },
};

export const ThreeOptions: Story = {
  render: (args) => <SegmentedControlWrapper {...args} />,
  args: {
    interval: '1w',
    options: ['1d', '1w', '1m'],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Segmented control with three options. The middle option is selected, demonstrating how the control handles multiple selections.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render three options', async () => {
      const option0 = canvas.getByTestId('segmented-control-option-0');
      const option1 = canvas.getByTestId('segmented-control-option-1');
      const option2 = canvas.getByTestId('segmented-control-option-2');

      await waitFor(() => {
        expect(
          option0,
          'It is expected that the first option is rendered'
        ).toBeInTheDocument();
        expect(
          option1,
          'It is expected that the second option is rendered'
        ).toBeInTheDocument();
        expect(
          option2,
          'It is expected that the third option is rendered'
        ).toBeInTheDocument();
      });
    });

    await step('should display all option values', async () => {
      const option0 = canvas.getByTestId('segmented-control-option-0');
      const option1 = canvas.getByTestId('segmented-control-option-1');
      const option2 = canvas.getByTestId('segmented-control-option-2');

      await waitFor(() => {
        expect(
          option0,
          "It is expected that the first option displays '1d'"
        ).toHaveTextContent('1d');
        expect(
          option1,
          "It is expected that the second option displays '1w'"
        ).toHaveTextContent('1w');
        expect(
          option2,
          "It is expected that the third option displays '1m'"
        ).toHaveTextContent('1m');
      });
    });

    await step('should highlight the middle option', async () => {
      const option1 = canvas.getByTestId('segmented-control-option-1');

      await waitFor(() => {
        expect(
          option1,
          'It is expected that the middle option has data-selected attribute as true'
        ).toHaveAttribute('data-selected', 'true');
      });
    });
  },
};

export const WithLabels: Story = {
  render: (args) => <SegmentedControlWrapper {...args} />,
  args: {
    interval: '7d',
    options: ['1d', '7d', '30d'],
    labels: ['1 Day', '1 Week', '1 Month'],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Segmented control with custom display labels. While the values remain technical (1d, 7d, 30d), the labels show user-friendly text (1 Day, 1 Week, 1 Month).',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render options with custom labels', async () => {
      const option0 = canvas.getByTestId('segmented-control-option-0');
      const option1 = canvas.getByTestId('segmented-control-option-1');
      const option2 = canvas.getByTestId('segmented-control-option-2');

      await waitFor(() => {
        expect(
          option0,
          "It is expected that the first option displays label '1 Day'"
        ).toHaveTextContent('1 Day');
        expect(
          option1,
          "It is expected that the second option displays label '1 Week'"
        ).toHaveTextContent('1 Week');
        expect(
          option2,
          "It is expected that the third option displays label '1 Month'"
        ).toHaveTextContent('1 Month');
      });
    });

    await step('should maintain data values for custom labels', async () => {
      const option0 = canvas.getByTestId('segmented-control-option-0');
      const option1 = canvas.getByTestId('segmented-control-option-1');

      await waitFor(() => {
        expect(
          option0,
          "It is expected that the first option has data-value attribute '1d'"
        ).toHaveAttribute('data-value', '1d');
        expect(
          option1,
          "It is expected that the second option has data-value attribute '7d'"
        ).toHaveAttribute('data-value', '7d');
      });
    });

    await step('should highlight selected option with label', async () => {
      const option1 = canvas.getByTestId('segmented-control-option-1');

      await waitFor(() => {
        expect(
          option1,
          'It is expected that the selected option has data-selected attribute as true'
        ).toHaveAttribute('data-selected', 'true');
        expect(
          option1,
          'It is expected that the selected option has color #FFFFFF'
        ).toHaveStyle({ color: '#FFFFFF' });
      });
    });
  },
};

export const SelectFirstOption: Story = {
  render: (args) => <SegmentedControlWrapper {...args} />,
  args: {
    interval: '1d',
    options: ['1d', '1w', '1m'],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the segmented control with the first option selected. Shows proper styling and state management for the leftmost option.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should highlight the first option', async () => {
      const option0 = canvas.getByTestId('segmented-control-option-0');

      await waitFor(() => {
        expect(
          option0,
          'It is expected that the first option has data-selected attribute as true'
        ).toHaveAttribute('data-selected', 'true');
      });
    });

    await step('should apply selected styles to first option', async () => {
      const option0 = canvas.getByTestId('segmented-control-option-0');

      await waitFor(() => {
        expect(
          option0,
          'It is expected that the first option has background color #9CA3AF33'
        ).toHaveStyle({ backgroundColor: '#9CA3AF33' });
        expect(
          option0,
          'It is expected that the first option has color #FFFFFF'
        ).toHaveStyle({ color: '#FFFFFF' });
        expect(
          option0,
          'It is expected that the first option has cursor default'
        ).toHaveStyle({ cursor: 'default' });
      });
    });

    await step('should not select other options', async () => {
      const option1 = canvas.getByTestId('segmented-control-option-1');
      const option2 = canvas.getByTestId('segmented-control-option-2');

      await waitFor(() => {
        expect(
          option1,
          'It is expected that the second option has data-selected attribute as false'
        ).toHaveAttribute('data-selected', 'false');
        expect(
          option2,
          'It is expected that the third option has data-selected attribute as false'
        ).toHaveAttribute('data-selected', 'false');
      });
    });
  },
};

export const SelectLastOption: Story = {
  render: (args) => <SegmentedControlWrapper {...args} />,
  args: {
    interval: '1m',
    options: ['1d', '1w', '1m'],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the segmented control with the last option selected. Shows how unselected options maintain their default styling.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should highlight the last option', async () => {
      const option2 = canvas.getByTestId('segmented-control-option-2');

      await waitFor(() => {
        expect(
          option2,
          'It is expected that the last option has data-selected attribute as true'
        ).toHaveAttribute('data-selected', 'true');
      });
    });

    await step('should apply selected styles to last option', async () => {
      const option2 = canvas.getByTestId('segmented-control-option-2');

      await waitFor(() => {
        expect(
          option2,
          'It is expected that the last option has background color #9CA3AF33'
        ).toHaveStyle({ backgroundColor: '#9CA3AF33' });
        expect(
          option2,
          'It is expected that the last option has color #FFFFFF'
        ).toHaveStyle({ color: '#FFFFFF' });
      });
    });

    await step('should deselect other options', async () => {
      const option0 = canvas.getByTestId('segmented-control-option-0');
      const option1 = canvas.getByTestId('segmented-control-option-1');

      await waitFor(() => {
        expect(
          option0,
          'It is expected that the first option has color #9CA3AF'
        ).toHaveStyle({ color: '#9CA3AF' });
        expect(
          option1,
          'It is expected that the second option has color #9CA3AF'
        ).toHaveStyle({ color: '#9CA3AF' });
      });
    });
  },
};

export const ClickToChange: Story = {
  render: (args) => <SegmentedControlWrapper {...args} />,
  args: {
    interval: '1d',
    options: ['1d', '1w'],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive example demonstrating click behavior. The selection changes when clicking on unselected options, with proper state updates and visual feedback.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should initially select first option', async () => {
      const option0 = canvas.getByTestId('segmented-control-option-0');

      await waitFor(() => {
        expect(
          option0,
          'It is expected that the first option is initially selected with data-selected attribute as true'
        ).toHaveAttribute('data-selected', 'true');
      });
    });

    await step(
      'should change selection when clicking second option',
      async () => {
        const option1 = canvas.getByTestId('segmented-control-option-1');
        await userEvent.click(option1);

        await waitFor(() => {
          expect(
            option1,
            'It is expected that the second option has data-selected attribute as true after clicking'
          ).toHaveAttribute('data-selected', 'true');
        });
      }
    );

    await step('should deselect first option after click', async () => {
      const option0 = canvas.getByTestId('segmented-control-option-0');

      await waitFor(() => {
        expect(
          option0,
          'It is expected that the first option has data-selected attribute as false after clicking the second option'
        ).toHaveAttribute('data-selected', 'false');
      });
    });
  },
};

export const SingleOption: Story = {
  render: (args) => <SegmentedControlWrapper {...args} />,
  args: {
    interval: 'all',
    options: ['all'],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Edge case with only one option. The option is always selected and clicking is disabled since there are no alternatives to switch to.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render single option', async () => {
      const option0 = canvas.getByTestId('segmented-control-option-0');

      await waitFor(() => {
        expect(
          option0,
          'It is expected that the single option is rendered'
        ).toBeInTheDocument();
      });
    });

    await step('should always select the single option', async () => {
      const option0 = canvas.getByTestId('segmented-control-option-0');

      await waitFor(() => {
        expect(
          option0,
          'It is expected that the single option has data-selected attribute as true'
        ).toHaveAttribute('data-selected', 'true');
      });
    });

    await step('should prevent clicking on the only option', async () => {
      const option0 = canvas.getByTestId('segmented-control-option-0');

      await waitFor(() => {
        expect(
          option0,
          'It is expected that the single option has pointer-events none to prevent clicking'
        ).toHaveStyle({ pointerEvents: 'none' });
      });
    });
  },
};
