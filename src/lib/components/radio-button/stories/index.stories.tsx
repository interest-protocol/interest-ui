import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, waitFor } from '@storybook/test';
import RadioButton from '../index';

const meta = {
  title: 'Old Elements/Radio Button',
  component: RadioButton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    selected: {
      control: 'boolean',
      description: 'Whether the radio button is selected',
    },
    onClick: {
      description: 'Callback function when radio button is clicked',
    },
    size: {
      control: 'text',
      description: 'Size of the radio button (default: 1.25rem)',
    },
    color: {
      control: 'color',
      description: 'Border and background color (default: #B4C5FF)',
    },
    innerSize: {
      control: 'text',
      description: 'Size of the inner dot (default: 10px)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio button is disabled',
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unselected: Story = {
  args: {
    selected: false,
    onClick: () => console.log('Radio button clicked'),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic unselected radio button. Shows the default border style without the inner dot, indicating an inactive state.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render radio button', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() =>
        expect(
          radioButton,
          'It is expected that the radio button is rendered'
        ).toBeInTheDocument()
      );
    });

    await step('should have correct default size', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() => {
        expect(
          radioButton,
          'It is expected that the radio button has width 20px'
        ).toHaveStyle({ width: '20px' });
        expect(
          radioButton,
          'It is expected that the radio button has height 20px'
        ).toHaveStyle({ height: '20px' });
      });
    });

    await step(
      'should have transparent background when unselected',
      async () => {
        const radioButton = canvas.getByTestId('radio-button');
        await waitFor(() => {
          expect(
            radioButton,
            'It is expected that the radio button has transparent background color #00000000 when unselected'
          ).toHaveStyle({ backgroundColor: '#00000000' });
        });
      }
    );

    await step('should have default border color', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() => {
        expect(
          radioButton,
          'It is expected that the radio button has border 2px solid #B4C5FF'
        ).toHaveStyle({ border: '2px solid #B4C5FF' });
      });
    });

    await step('should not render inner dot', async () => {
      const innerDot = canvas.queryByTestId('radio-button-inner');
      await waitFor(() => {
        expect(
          innerDot,
          'It is expected that the inner dot is not rendered when unselected'
        ).not.toBeInTheDocument();
      });
    });

    await step('should have pointer cursor', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() => {
        expect(
          radioButton,
          'It is expected that the radio button has cursor pointer'
        ).toHaveStyle({ cursor: 'pointer' });
      });
    });
  },
};

export const Selected: Story = {
  args: {
    selected: true,
    onClick: () => console.log('Radio button clicked'),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Selected radio button showing the filled state with an inner white dot. The background color fills the entire button to indicate selection.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render selected radio button', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() => {
        expect(
          radioButton,
          'It is expected that the radio button is rendered'
        ).toBeInTheDocument();
        expect(
          radioButton,
          'It is expected that the radio button has data-selected attribute as true'
        ).toHaveAttribute('data-selected', 'true');
      });
    });

    await step('should have colored background when selected', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() => {
        expect(
          radioButton,
          'It is expected that the radio button has background color #B4C5FF when selected'
        ).toHaveStyle({ backgroundColor: '#B4C5FF' });
      });
    });

    await step('should render inner white dot', async () => {
      const innerDot = canvas.getByTestId('radio-button-inner');
      await waitFor(() => {
        expect(
          innerDot,
          'It is expected that the inner dot is rendered when selected'
        ).toBeInTheDocument();
        expect(
          innerDot,
          'It is expected that the inner dot has width 10px'
        ).toHaveStyle({ width: '10px' });
        expect(
          innerDot,
          'It is expected that the inner dot has height 10px'
        ).toHaveStyle({ height: '10px' });
        expect(
          innerDot,
          'It is expected that the inner dot has background color #FFFFFF'
        ).toHaveStyle({ backgroundColor: '#FFFFFF' });
      });
    });

    await step('should have correct border and background color', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() => {
        expect(
          radioButton,
          'It is expected that the radio button has border 2px solid #B4C5FF'
        ).toHaveStyle({ border: '2px solid #B4C5FF' });
        expect(
          radioButton,
          'It is expected that the radio button has background color #B4C5FF'
        ).toHaveStyle({ backgroundColor: '#B4C5FF' });
      });
    });
  },
};

export const Disabled: Story = {
  args: {
    selected: false,
    disabled: true,
    onClick: () => console.log('Radio button clicked'),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Disabled radio button that cannot be interacted with. Shows the not-allowed cursor to indicate the button is non-interactive.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render disabled radio button', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() => {
        expect(
          radioButton,
          'It is expected that the disabled radio button is rendered'
        ).toBeInTheDocument();
      });
    });

    await step('should have not-allowed cursor when disabled', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() => {
        expect(
          radioButton,
          'It is expected that the radio button has cursor not-allowed when disabled'
        ).toHaveStyle({ cursor: 'not-allowed' });
      });
    });

    await step(
      'should not render inner dot when disabled and unselected',
      async () => {
        const innerDot = canvas.queryByTestId('radio-button-inner');
        await waitFor(() => {
          expect(
            innerDot,
            'It is expected that the inner dot is not rendered when disabled and unselected'
          ).not.toBeInTheDocument();
        });
      }
    );

    await step('should have correct styling for disabled state', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() => {
        expect(
          radioButton,
          'It is expected that the radio button has cursor not-allowed'
        ).toHaveStyle({ cursor: 'not-allowed' });
        expect(
          radioButton,
          'It is expected that the radio button has background color 10px'
        ).toHaveStyle({ backgroundColor: '10px' });
      });
    });
  },
};

export const CustomColor: Story = {
  args: {
    selected: true,
    color: '#FF6B6B',
    onClick: () => console.log('Radio button clicked'),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Radio button with a custom color. Both the border and background use the custom color when selected, allowing brand customization.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render with custom color', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() => {
        expect(
          radioButton,
          'It is expected that the radio button with custom color is rendered'
        ).toBeInTheDocument();
      });
    });

    await step(
      'should apply custom color to border and background',
      async () => {
        const radioButton = canvas.getByTestId('radio-button');
        await waitFor(() => {
          expect(
            radioButton,
            'It is expected that the radio button has border 2px solid #FF6B6B with custom color'
          ).toHaveStyle({ border: '2px solid #FF6B6B' });
          expect(
            radioButton,
            'It is expected that the radio button has background color #FF6B6B with custom color'
          ).toHaveStyle({ backgroundColor: '#FF6B6B' });
        });
      }
    );

    await step(
      'should render inner dot with custom color background',
      async () => {
        const innerDot = canvas.getByTestId('radio-button-inner');
        await waitFor(() => {
          expect(
            innerDot,
            'It is expected that the inner dot has white background color #FFFFFF'
          ).toHaveStyle({ backgroundColor: '#FFFFFF' });
        });
      }
    );
  },
};

export const CustomSize: Story = {
  args: {
    selected: false,
    size: '2rem',
    innerSize: '1rem',
    onClick: () => console.log('Radio button clicked'),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Radio button with custom size dimensions. Both the outer button and inner dot can be scaled to fit different design requirements.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render with custom size', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() => {
        expect(
          radioButton,
          'It is expected that the radio button has custom width 32px'
        ).toHaveStyle({ width: '32px' });
        expect(
          radioButton,
          'It is expected that the radio button has custom height 32px'
        ).toHaveStyle({ height: '32px' });
      });
    });

    await step('should have correct custom size styling', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() => {
        expect(
          radioButton,
          'It is expected that the radio button has width 32px'
        ).toHaveStyle({ width: '32px' });
        expect(
          radioButton,
          'It is expected that the radio button has height 32px'
        ).toHaveStyle({ height: '32px' });
        expect(
          radioButton,
          'It is expected that the radio button has display flex'
        ).toHaveStyle({ display: 'flex' });
        expect(
          radioButton,
          'It is expected that the radio button has border radius 50%'
        ).toHaveStyle({ borderRadius: '50%' });
      });
    });
  },
};

export const DisabledSelected: Story = {
  args: {
    selected: true,
    disabled: true,
    onClick: () => console.log('Radio button clicked'),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Disabled radio button in selected state. The inner dot is visible but the button cannot be interacted with, shown by the not-allowed cursor.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render disabled and selected radio button', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() => {
        expect(
          radioButton,
          'It is expected that the disabled and selected radio button is rendered'
        ).toBeInTheDocument();
        expect(
          radioButton,
          'It is expected that the radio button has data-selected attribute as true'
        ).toHaveAttribute('data-selected', 'true');
      });
    });

    await step('should display inner dot even when disabled', async () => {
      const innerDot = canvas.getByTestId('radio-button-inner');
      await waitFor(() => {
        expect(
          innerDot,
          'It is expected that the inner dot is rendered even when disabled and selected'
        ).toBeInTheDocument();
      });
    });

    await step('should have not-allowed cursor when disabled', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() => {
        expect(
          radioButton,
          'It is expected that the radio button has cursor not-allowed when disabled'
        ).toHaveStyle({ cursor: 'not-allowed' });
      });
    });

    await step(
      'should have correct styling for disabled selected state',
      async () => {
        const radioButton = canvas.getByTestId('radio-button');
        await waitFor(() => {
          expect(
            radioButton,
            'It is expected that the radio button has background color #E2E2E63D when disabled and selected'
          ).toHaveStyle({ backgroundColor: '#E2E2E63D' });
          expect(
            radioButton,
            'It is expected that the radio button has cursor not-allowed'
          ).toHaveStyle({ cursor: 'not-allowed' });
        });
      }
    );
  },
};

export const ColoredAndDisabled: Story = {
  args: {
    selected: true,
    color: '#00B989',
    disabled: true,
    onClick: () => console.log('Radio button clicked'),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Disabled radio button with custom color. Shows how disabled state overrides the custom color with the standard disabled styling.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step(
      'should render with custom color and disabled state',
      async () => {
        const radioButton = canvas.getByTestId('radio-button');
        await waitFor(() => {
          expect(
            radioButton,
            'It is expected that the radio button with custom color and disabled state is rendered'
          ).toBeInTheDocument();
        });
      }
    );

    await step('should apply custom color even when disabled', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() => {
        expect(
          radioButton,
          'It is expected that the radio button has border 2px solid #E2E2E63D when disabled'
        ).toHaveStyle({ border: '2px solid #E2E2E63D' });
        expect(
          radioButton,
          'It is expected that the radio button has background color #E2E2E63D when disabled'
        ).toHaveStyle({ backgroundColor: '#E2E2E63D' });
      });
    });

    await step('should maintain not-allowed cursor when disabled', async () => {
      const radioButton = canvas.getByTestId('radio-button');
      await waitFor(() => {
        expect(
          radioButton,
          'It is expected that the radio button has cursor not-allowed when disabled'
        ).toHaveStyle({ cursor: 'not-allowed' });
      });
    });
  },
};
