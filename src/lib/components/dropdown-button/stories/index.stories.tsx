import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, waitFor, userEvent } from '@storybook/test';
import Dropdown from '../index';

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const meta = {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of dropdown options with value and label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    defaultIndex: {
      control: 'number',
      description: 'Index of the default selected option',
    },
    isRounded: {
      control: 'boolean',
      description: 'Whether the dropdown has rounded borders',
    },
    onClick: {
      description: 'Callback function when an option is selected',
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: mockOptions,
    placeholder: 'Select an option',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic dropdown component with placeholder text. The menu is closed by default and shows the placeholder until a selection is made.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render dropdown container', async () => {
      const dropdown = canvas.getByTestId('dropdown');
      await waitFor(() =>
        expect(
          dropdown,
          'It is expected that the dropdown container is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('should display placeholder text', async () => {
      const label = canvas.getByTestId('dropdown-label');
      await waitFor(() =>
        expect(
          label,
          "It is expected that the label displays placeholder text 'Select an option'"
        ).toHaveTextContent('Select an option')
      );
    });

    await step('should have correct initial styling', async () => {
      const toggle = canvas.getByTestId('dropdown-toggle');
      await waitFor(() => {
        expect(
          toggle,
          'It is expected that the toggle has display flex'
        ).toHaveStyle({ display: 'flex' });
        expect(
          toggle,
          'It is expected that the toggle has cursor pointer'
        ).toHaveStyle({ cursor: 'pointer' });
      });
    });

    await step('should not show menu initially', async () => {
      const menu = canvas.queryByTestId('dropdown-menu');
      await waitFor(() =>
        expect(
          menu,
          'It is expected that the menu is not visible initially'
        ).not.toBeInTheDocument()
      );
    });
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: mockOptions,
    defaultIndex: 1,
    placeholder: 'Select an option',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Dropdown with a pre-selected default value. The second option is selected by default, demonstrating controlled selection state.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render dropdown with default value', async () => {
      const label = canvas.getByTestId('dropdown-label');
      await waitFor(() =>
        expect(
          label,
          "It is expected that the label displays default value 'Option 2'"
        ).toHaveTextContent('Option 2')
      );
    });

    await step('should apply correct styling to label with value', async () => {
      const label = canvas.getByTestId('dropdown-label');
      await waitFor(() =>
        expect(
          label,
          'It is expected that the label has color #fff when a value is selected'
        ).toHaveStyle({ color: '#fff' })
      );
    });
  },
};

export const OpenedMenu: Story = {
  args: {
    options: mockOptions,
    placeholder: 'Select an option',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the opened dropdown menu. Shows all available options, rotated caret icon, and proper menu positioning.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should open menu on click', async () => {
      const toggle = canvas.getByTestId('dropdown-toggle');
      await userEvent.click(toggle);

      const menu = canvas.getByTestId('dropdown-menu');
      await waitFor(() =>
        expect(
          menu,
          'It is expected that the menu opens when the toggle is clicked'
        ).toBeInTheDocument()
      );
    });

    await step('should display all options in menu', async () => {
      const option0 = canvas.getByTestId('dropdown-option-0');
      const option1 = canvas.getByTestId('dropdown-option-1');
      const option2 = canvas.getByTestId('dropdown-option-2');

      await waitFor(() => {
        expect(
          option0,
          'It is expected that the first option is rendered in the menu'
        ).toBeInTheDocument();
        expect(
          option1,
          'It is expected that the second option is rendered in the menu'
        ).toBeInTheDocument();
        expect(
          option2,
          'It is expected that the third option is rendered in the menu'
        ).toBeInTheDocument();
      });
    });

    await step('should display correct option labels', async () => {
      const option0 = canvas.getByTestId('dropdown-option-0');
      const option1 = canvas.getByTestId('dropdown-option-1');
      const option2 = canvas.getByTestId('dropdown-option-2');

      await waitFor(() => {
        expect(
          option0,
          "It is expected that the first option displays label 'Option 1'"
        ).toHaveTextContent('Option 1');
        expect(
          option1,
          "It is expected that the second option displays label 'Option 2'"
        ).toHaveTextContent('Option 2');
        expect(
          option2,
          "It is expected that the third option displays label 'Option 3'"
        ).toHaveTextContent('Option 3');
      });
    });

    await step('should have correct data-value attributes', async () => {
      const option0 = canvas.getByTestId('dropdown-option-0');
      const option1 = canvas.getByTestId('dropdown-option-1');
      const option2 = canvas.getByTestId('dropdown-option-2');

      await waitFor(() => {
        expect(
          option0,
          "It is expected that the first option has data-value attribute 'option1'"
        ).toHaveAttribute('data-value', 'option1');
        expect(
          option1,
          "It is expected that the second option has data-value attribute 'option2'"
        ).toHaveAttribute('data-value', 'option2');
        expect(
          option2,
          "It is expected that the third option has data-value attribute 'option3'"
        ).toHaveAttribute('data-value', 'option3');
      });
    });

    await step('should rotate caret icon', async () => {
      const caret = canvas.getByTestId('dropdown-caret');
      await waitFor(() =>
        expect(
          caret,
          'It is expected that the caret icon rotates 180 degrees when menu is open'
        ).toHaveStyle({ transform: 'matrix(-1, 0, 0, -1, 0, 0)' })
      );
    });
  },
};

export const SelectOption: Story = {
  args: {
    options: mockOptions,
    placeholder: 'Select an option',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive example showing option selection. Clicking an option updates the dropdown label, closes the menu, and highlights the selected option on reopen.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should open menu on toggle click', async () => {
      const toggle = canvas.getByTestId('dropdown-toggle');
      await userEvent.click(toggle);

      const menu = canvas.getByTestId('dropdown-menu');
      await waitFor(() =>
        expect(
          menu,
          'It is expected that the menu is visible after clicking toggle'
        ).toBeInTheDocument()
      );
    });

    await step('should select option on click', async () => {
      const option2 = canvas.getByTestId('dropdown-option-2');
      await userEvent.click(option2);

      const label = canvas.getByTestId('dropdown-label');
      await waitFor(() =>
        expect(
          label,
          "It is expected that the label displays 'Option 3' after selecting the third option"
        ).toHaveTextContent('Option 3')
      );
    });

    await step('should close menu after selection', async () => {
      const menu = canvas.queryByTestId('dropdown-menu');
      await waitFor(() =>
        expect(
          menu,
          'It is expected that the menu closes after an option is selected'
        ).not.toBeInTheDocument()
      );
    });

    await step('should highlight selected option on reopen', async () => {
      const toggle = canvas.getByTestId('dropdown-toggle');
      await userEvent.click(toggle);

      const option2 = canvas.getByTestId('dropdown-option-2');
      await waitFor(() =>
        expect(
          option2,
          'It is expected that the selected option has background color #374151 when menu reopens'
        ).toHaveStyle({ backgroundColor: '#374151' })
      );
    });
  },
};

export const RoundedStyle: Story = {
  args: {
    options: mockOptions,
    placeholder: 'Select an option',
    isRounded: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Dropdown with fully rounded borders. The isRounded prop creates a pill-shaped appearance for the toggle button.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render with rounded border', async () => {
      const toggle = canvas.getByTestId('dropdown-toggle');
      await waitFor(() =>
        expect(
          toggle,
          'It is expected that the toggle has border radius 9999rem for fully rounded style'
        ).toHaveStyle({ borderRadius: '9999rem' })
      );
    });
  },
};

export const MultipleOptions: Story = {
  args: {
    options: [
      { value: 'opt1', label: 'First Option' },
      { value: 'opt2', label: 'Second Option' },
      { value: 'opt3', label: 'Third Option' },
      { value: 'opt4', label: 'Fourth Option' },
      { value: 'opt5', label: 'Fifth Option' },
    ],
    placeholder: 'Choose one',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Dropdown with multiple options. Demonstrates how the component handles a larger list of choices while maintaining consistent styling.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should open menu with all options', async () => {
      const toggle = canvas.getByTestId('dropdown-toggle');
      await userEvent.click(toggle);

      const menu = canvas.getByTestId('dropdown-menu');
      await waitFor(() =>
        expect(
          menu,
          'It is expected that the menu opens with all options visible'
        ).toBeInTheDocument()
      );
    });

    await step('should display all five options', async () => {
      for (let i = 0; i < 5; i++) {
        const option = canvas.getByTestId(`dropdown-option-${i}`);
        await waitFor(() =>
          expect(
            option,
            `It is expected that option ${i + 1} is rendered in the menu`
          ).toBeInTheDocument()
        );
      }
    });
  },
};

export const CustomPlaceholder: Story = {
  args: {
    options: mockOptions,
    placeholder: 'Choose a value...',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Dropdown with custom placeholder text. The placeholder prop allows customization of the default message shown when no option is selected.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should display custom placeholder', async () => {
      const label = canvas.getByTestId('dropdown-label');
      await waitFor(() =>
        expect(
          label,
          "It is expected that the label displays custom placeholder 'Choose a value...'"
        ).toHaveTextContent('Choose a value...')
      );
    });

    await step('should have correct placeholder styling', async () => {
      const label = canvas.getByTestId('dropdown-label');
      await waitFor(() =>
        expect(
          label,
          'It is expected that the placeholder text has color #6B7280'
        ).toHaveStyle({ color: '#6B7280' })
      );
    });
  },
};
