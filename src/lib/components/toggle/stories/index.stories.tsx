import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, waitFor, userEvent } from '@storybook/test';
import ToggleButton from '../';

const meta = {
  title: 'Toggle',
  component: ToggleButton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Input name attribute',
    },
    defaultValue: {
      control: 'boolean',
      description: 'Initial toggle state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    labels: {
      control: 'object',
      description: 'Label and supporting label text',
    },
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'default-toggle',
    defaultValue: false,
    labels: {
      label: 'Enable notifications',
      supportingLabel: 'Receive updates about your account',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic toggle button in its default inactive state. Displays a label and supporting text to provide context about what the toggle controls.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render toggle button', async () => {
      const toggle = canvas.getByTestId('toggle-button');
      await waitFor(() =>
        expect(
          toggle,
          'It is expected that the toggle button is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('should render toggle track', async () => {
      const track = canvas.getByTestId('toggle-track');
      await waitFor(() =>
        expect(
          track,
          'It is expected that the toggle track is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('should render toggle thumb', async () => {
      const thumb = canvas.getByTestId('toggle-thumb');
      await waitFor(() =>
        expect(
          thumb,
          'It is expected that the toggle thumb is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('should render label text', async () => {
      const label = canvas.getByTestId('toggle-label');
      await waitFor(() =>
        expect(
          label,
          "It is expected that the label displays 'Enable notifications'"
        ).toHaveTextContent('Enable notifications')
      );
    });

    await step('should render supporting label text', async () => {
      const supportingLabel = canvas.getByTestId('toggle-supporting-label');
      await waitFor(() =>
        expect(
          supportingLabel,
          "It is expected that the supporting label displays 'Receive updates about your account'"
        ).toHaveTextContent('Receive updates about your account')
      );
    });

    await step('should have inactive state by default', async () => {
      const track = canvas.getByTestId('toggle-track');
      await waitFor(() =>
        expect(
          track,
          'It is expected that the track has data-active attribute as false'
        ).toHaveAttribute('data-active', 'false')
      );
    });

    await step(
      'should apply correct background color when inactive',
      async () => {
        const track = canvas.getByTestId('toggle-track');
        await waitFor(() =>
          expect(
            track,
            'It is expected that the track has background color #E2E2E63D when inactive'
          ).toHaveStyle({ backgroundColor: '#E2E2E63D' })
        );
      }
    );
  },
};

export const Active: Story = {
  args: {
    name: 'active-toggle',
    defaultValue: true,
    labels: {
      label: 'Dark mode',
      supportingLabel: 'Use dark theme',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Toggle button in its active state. Shows the different styling and color applied when the toggle is turned on.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render toggle in active state', async () => {
      const toggle = canvas.getByTestId('toggle-button');
      await waitFor(() =>
        expect(
          toggle,
          'It is expected that the toggle is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('should have active state', async () => {
      const track = canvas.getByTestId('toggle-track');
      await waitFor(() =>
        expect(
          track,
          'It is expected that the track has data-active attribute as true'
        ).toHaveAttribute('data-active', 'true')
      );
    });

    await step(
      'should apply correct background color when active',
      async () => {
        const track = canvas.getByTestId('toggle-track');
        await waitFor(() =>
          expect(
            track,
            'It is expected that the track has background color #B4C5FF when active'
          ).toHaveStyle({ backgroundColor: '#B4C5FF' })
        );
      }
    );

    await step('should display dark mode label', async () => {
      const label = canvas.getByTestId('toggle-label');
      await waitFor(() =>
        expect(
          label,
          "It is expected that the label displays 'Dark mode'"
        ).toHaveTextContent('Dark mode')
      );
    });
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled-toggle',
    defaultValue: false,
    disabled: true,
    labels: {
      label: 'Disabled toggle',
      supportingLabel: 'This toggle cannot be changed',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Toggle button in disabled state. The toggle has reduced opacity and cannot be interacted with, preventing state changes.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render disabled toggle', async () => {
      const toggle = canvas.getByTestId('toggle-button');
      await waitFor(() =>
        expect(
          toggle,
          'It is expected that the disabled toggle is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('should have disabled attribute', async () => {
      const input = canvas.getByTestId('toggle-input');
      await waitFor(() =>
        expect(
          input,
          'It is expected that the input is disabled'
        ).toBeDisabled()
      );
    });

    await step('should have reduced opacity', async () => {
      const track = canvas.getByTestId('toggle-track');
      await waitFor(() =>
        expect(
          track,
          'It is expected that the track has opacity 0.32 when disabled'
        ).toHaveStyle({ opacity: '0.32' })
      );
    });

    await step('should not change state when clicked', async () => {
      const track = canvas.getByTestId('toggle-track');
      await userEvent.click(track);

      await waitFor(() =>
        expect(
          track,
          'It is expected that the toggle remains inactive when clicked while disabled'
        ).toHaveAttribute('data-active', 'false')
      );
    });
  },
};

export const Interactive: Story = {
  args: {
    name: 'interactive-toggle',
    defaultValue: false,
    labels: {
      label: 'Email notifications',
      supportingLabel: 'Get email updates',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive example demonstrating toggle behavior. The toggle can be clicked multiple times to switch between states with proper visual feedback.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render toggle in initial state', async () => {
      const track = canvas.getByTestId('toggle-track');
      await waitFor(() =>
        expect(
          track,
          'It is expected that the toggle starts with data-active attribute as false'
        ).toHaveAttribute('data-active', 'false')
      );
    });

    await step('should toggle state when clicked', async () => {
      const track = canvas.getByTestId('toggle-track');
      await userEvent.click(track);

      await waitFor(() =>
        expect(
          track,
          'It is expected that the toggle has data-active attribute as true after first click'
        ).toHaveAttribute('data-active', 'true')
      );
    });

    await step('should toggle back to inactive state', async () => {
      const track = canvas.getByTestId('toggle-track');
      await userEvent.click(track);

      await waitFor(() =>
        expect(
          track,
          'It is expected that the toggle has data-active attribute as false after second click'
        ).toHaveAttribute('data-active', 'false')
      );
    });

    await step('should apply correct colors during toggle', async () => {
      const track = canvas.getByTestId('toggle-track');

      await userEvent.click(track);
      await waitFor(() =>
        expect(
          track,
          'It is expected that the track has background color #B4C5FF when toggled on'
        ).toHaveStyle({ backgroundColor: '#B4C5FF' })
      );
    });
  },
};

export const NoLabels: Story = {
  args: {
    name: 'no-labels-toggle',
    defaultValue: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Toggle without any labels. Useful when the toggle is used in contexts where the purpose is clear from surrounding content.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render toggle without labels', async () => {
      const toggle = canvas.getByTestId('toggle-button');
      await waitFor(() =>
        expect(
          toggle,
          'It is expected that the toggle is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('should render empty label element', async () => {
      const label = canvas.getByTestId('toggle-label');
      await waitFor(() =>
        expect(
          label,
          'It is expected that the label element is empty'
        ).toBeEmptyDOMElement()
      );
    });

    await step('should render empty supporting label element', async () => {
      const supportingLabel = canvas.getByTestId('toggle-supporting-label');
      await waitFor(() =>
        expect(
          supportingLabel,
          'It is expected that the supporting label element is empty'
        ).toBeEmptyDOMElement()
      );
    });
  },
};
