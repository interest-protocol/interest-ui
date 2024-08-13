import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import React from 'react';

import { TokenSVG } from '../../../icons';
import { TokenField } from '..';

const meta: Meta<typeof TokenField> = {
  title: 'TokenField',
  component: TokenField,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    labelPosition: {
      defaultValue: 'right',
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
    textAlign: {
      defaultValue: 'right',
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TokenField>;

export const FilledWithToken: Story = {
  args: {
    Label: 'Label',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
    handleMax: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('token-field-holder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(tokenFieldHolder, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(tokenFieldHolder, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
    });

    await step('Testing token field label', async () => {
      const label = tokenFieldHolder.children[0];
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(label, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
      expect(label, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(label, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(label, 'Should have border of 0px none rgb(0, 0, 0)').toHaveStyle(
        'border: 0px none rgb(0, 0, 0)'
      );
      expect(label, 'Should have text-align start').toHaveStyle(
        'text-align: start'
      );
    });

    // check how many svg are in the token field. In this case, can only be one in it
    await step('Testing token field icon', async () => {
      const svgElement = tokenFieldHolder.querySelectorAll('svg');
      const svg =
        tokenFieldHolder.children[1].children[0].children[0].children[0];
      expect(svgElement, 'Should have 1 SVG as icon').toHaveLength(1);
      expect(svg, 'Should have width of 40px').toHaveStyle('width: 40px');
      expect(svg, 'Should have max-width of 40px').toHaveStyle(
        'max-width: 40px'
      );
      expect(svg, 'Should have max-height of 40px').toHaveStyle(
        'max-height: 40px'
      );
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[1].children[0].children[0].children[1];
      expect(tokenName, 'Should have color of rgb(27, 27 ,31)').toHaveStyle(
        'color: rgb(27, 27 ,31)'
      );
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        tokenName,
        'Should have text content of Token Name'
      ).toHaveTextContent('Token Name');
    });

    await step('Testing token field max button', async () => {
      const maxButton = tokenFieldHolder.children[1].children[2].children[0];
      await userEvent.click(canvas.getByRole('button'));
      expect(maxButton, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        maxButton,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(maxButton, 'Should have color of rgb(0, 83, 219)').toHaveStyle(
        'color: rgb(0, 83, 219)'
      );

      await userEvent.click(maxButton);

      expect(args.handleMax, 'Should have been called').toHaveBeenCalled();
    });

    await step('Testing supporting text', async () => {
      const supportingText = tokenFieldHolder.children[2];
      expect(supportingText, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should have text content of Supporting text'
      ).toHaveTextContent('Supporting text');
    });

    await step('Testing token field input', async () => {
      const tokenFieldInput =
        tokenFieldHolder.children[1].children[1].children[0];
      let inputValue = tokenFieldInput.getAttribute('value');
      inputValue = 'SUI';
      expect(tokenFieldInput, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(tokenFieldInput, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenFieldInput, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(tokenFieldInput, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = tokenFieldInput.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        'Input'
      );
      await step("Should insert 'SUI' text in input", async () => {
        await userEvent.type(tokenFieldInput, inputValue, {
          delay: 100,
        });

        await waitFor(() =>
          expect(inputValue, 'Should insert SUI in input').toBe('SUI')
        );
      });
    });
  },
};

export const FilledWithTokenWithoutLabel: Story = {
  args: {
    Label: 'Label',
    isNotDefaultLabel: true,
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
    handleMax: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('token-field-holder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(tokenFieldHolder, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(tokenFieldHolder, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
    });

    await step('Testing token field label', async () => {
      const label = tokenFieldHolder.children[0];
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(label, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
      expect(label, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(label, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(label, 'Should have border of 0px none rgb(0, 0, 0)').toHaveStyle(
        'border: 0px none rgb(0, 0, 0)'
      );
      expect(label, 'Should have text-align start').toHaveStyle(
        'text-align: start'
      );
    });

    // check how many svg are in the token field. In this case, can only be one in it
    await step('Testing token field icon', async () => {
      const svgElement = tokenFieldHolder.querySelectorAll('svg');
      const svg =
        tokenFieldHolder.children[1].children[0].children[0].children[0];
      expect(svgElement, 'Should have 1 SVG as icon').toHaveLength(1);
      expect(svg, 'Should have width of 40px').toHaveStyle('width: 40px');
      expect(svg, 'Should have max-width of 40px').toHaveStyle(
        'max-width: 40px'
      );
      expect(svg, 'Should have max-height of 40px').toHaveStyle(
        'max-height: 40px'
      );
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[1].children[0].children[0].children[1];
      expect(tokenName, 'Should have color of rgb(27, 27 ,31)').toHaveStyle(
        'color: rgb(27, 27 ,31)'
      );
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        tokenName,
        'Should have text content of Token Name'
      ).toHaveTextContent('Token Name');
    });

    await step('Testing token field max button', async () => {
      const maxButton = tokenFieldHolder.children[1].children[2].children[0];
      await userEvent.click(canvas.getByRole('button'));
      expect(maxButton, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        maxButton,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(maxButton, 'Should have color of rgb(0, 83, 219)').toHaveStyle(
        'color: rgb(0, 83, 219)'
      );
      await userEvent.click(maxButton);
      expect(args.handleMax, 'Should have been called').toHaveBeenCalled();
    });

    await step('Testing supporting text', async () => {
      const supportingText = tokenFieldHolder.children[2];
      expect(supportingText, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should have text content of Supporting text'
      ).toHaveTextContent('Supporting text');
    });
    await step('Testing token field input', async () => {
      const tokenFieldInput =
        tokenFieldHolder.children[1].children[1].children[0];
      let inputValue = tokenFieldInput.getAttribute('value');
      inputValue = 'SUI';
      expect(tokenFieldInput, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(tokenFieldInput, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenFieldInput, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(tokenFieldInput, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = tokenFieldInput.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        'Input'
      );
      await step("Should insert 'SUI' text in input", async () => {
        await userEvent.type(tokenFieldInput, inputValue, {
          delay: 100,
        });

        await waitFor(() =>
          expect(inputValue, 'Should insert SUI in input').toBe('SUI')
        );
      });
    });
  },
};

export const FilledWithLabelToTheLeft: Story = {
  args: {
    Label: 'Label',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'left',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
    handleMax: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('token-field-holder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(tokenFieldHolder, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(tokenFieldHolder, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
    });

    await step('Testing token field label', async () => {
      const label = tokenFieldHolder.children[0];
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(label, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
      expect(label, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(label, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(label, 'Should have border of 0px none rgb(0, 0, 0)').toHaveStyle(
        'border: 0px none rgb(0, 0, 0)'
      );
      expect(label, 'Should have text-align start').toHaveStyle(
        'text-align: start'
      );
    });

    // check how many svg are in the token field. In this case, can only be one in it
    await step('Testing token field icon', async () => {
      const svgElement = tokenFieldHolder.querySelectorAll('svg');
      const svg =
        tokenFieldHolder.children[1].children[0].children[0].children[0];
      expect(svgElement, 'Should have 1 SVG as icon').toHaveLength(1);
      expect(svg, 'Should have width of 40px').toHaveStyle('width: 40px');
      expect(svg, 'Should have max-width of 40px').toHaveStyle(
        'max-width: 40px'
      );
      expect(svg, 'Should have max-height of 40px').toHaveStyle(
        'max-height: 40px'
      );
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[1].children[0].children[0].children[1];
      expect(tokenName, 'Should have color of rgb(27, 27 ,31)').toHaveStyle(
        'color: rgb(27, 27 ,31)'
      );
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        tokenName,
        'Should have text content of Token Name'
      ).toHaveTextContent('Token Name');
    });

    await step('Testing token field max button', async () => {
      const maxButton = tokenFieldHolder.children[1].children[2].children[0];
      await userEvent.click(canvas.getByRole('button'));
      expect(maxButton, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        maxButton,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(maxButton, 'Should have color of rgb(0, 83, 219)').toHaveStyle(
        'color: rgb(0, 83, 219)'
      );
      await userEvent.click(maxButton);
      expect(args.handleMax, 'Should have been called').toHaveBeenCalled();
    });

    await step('Testing supporting text', async () => {
      const supportingText = tokenFieldHolder.children[2];
      expect(supportingText, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should have text content of Supporting text'
      ).toHaveTextContent('Supporting text');
    });

    await step('Testing token field input', async () => {
      const tokenFieldInput =
        tokenFieldHolder.children[1].children[1].children[0];
      let inputValue = tokenFieldInput.getAttribute('value');
      inputValue = 'SUI';
      expect(tokenFieldInput, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(tokenFieldInput, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenFieldInput, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(tokenFieldInput, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = tokenFieldInput.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        'Input'
      );
      await step("Should insert 'SUI COINS' text in input", async () => {
        await userEvent.type(tokenFieldInput, inputValue, {
          delay: 100,
        });

        await waitFor(() =>
          expect(inputValue, 'Should insert SUI in input').toBe('SUI')
        );
      });
    });
  },
};

export const FilledWithTokenError: Story = {
  args: {
    Label: 'Label',
    status: 'error',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    handleMax: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('token-field-holder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(tokenFieldHolder, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(tokenFieldHolder, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
    });

    await step('Testing token field label', async () => {
      const label = tokenFieldHolder.children[0];
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(label, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
      expect(label, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(label, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(label, 'Should have border of 0px none rgb(0, 0, 0)').toHaveStyle(
        'border: 0px none rgb(0, 0, 0)'
      );
      expect(label, 'Should have text-align start').toHaveStyle(
        'text-align: start'
      );
    });

    // check how many svg are in the token field. In this case, can only be one in it
    await step('Testing token field icon', async () => {
      const svgElement = tokenFieldHolder.querySelectorAll('svg');
      const svg =
        tokenFieldHolder.children[1].children[0].children[0].children[0];
      expect(svgElement, 'Should have 1 SVG as icon').toHaveLength(1);
      expect(svg, 'Should have width of 40px').toHaveStyle('width: 40px');
      expect(svg, 'Should have max-width of 40px').toHaveStyle(
        'max-width: 40px'
      );
      expect(svg, 'Should have max-height of 40px').toHaveStyle(
        'max-height: 40px'
      );
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[1].children[0].children[0].children[1];
      expect(tokenName, 'Should have color of rgb(27, 27 ,31)').toHaveStyle(
        'color: rgb(27, 27 ,31)'
      );
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        tokenName,
        'Should have text content of Token Name'
      ).toHaveTextContent('Token Name');
    });

    await step('Testing token field max button', async () => {
      const maxButton = tokenFieldHolder.children[1].children[2].children[0];
      await userEvent.click(canvas.getByRole('button'));
      expect(maxButton, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        maxButton,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(maxButton, 'Should have color of rgb(0, 83, 219)').toHaveStyle(
        'color: rgb(0, 83, 219)'
      );
      await userEvent.click(maxButton);
      expect(args.handleMax, 'Should have been called').toHaveBeenCalled();
    });

    await step('Testing token field input', async () => {
      const tokenFieldInput =
        tokenFieldHolder.children[1].children[1].children[0];
      let inputValue = tokenFieldInput.getAttribute('value');
      inputValue = 'SUI';
      expect(tokenFieldInput, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(tokenFieldInput, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenFieldInput, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(tokenFieldInput, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = tokenFieldInput.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        'Input'
      );
      await step("Should insert 'SUI COINS' text in input", async () => {
        await userEvent.type(tokenFieldInput, inputValue, {
          delay: 100,
        });
        await waitFor(() =>
          expect(inputValue, 'Should insert SUI in input').toBe('SUI')
        );
      });
    });
  },
};

export const FilledWithTokenDisabled: Story = {
  args: {
    Label: 'Label',
    disabled: true,
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('token-field-holder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'Should have opacity of 0.32').toHaveStyle(
        'opacity: 0.32'
      );
      expect(tokenFieldHolder, 'Should have cursor not-allowed').toHaveStyle(
        'cursor: not-allowed'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(tokenFieldHolder, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
    });

    await step('Testing token field label', async () => {
      const label = tokenFieldHolder.children[0];
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(label, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
      expect(label, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(label, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(label, 'Should have border of 0px none rgb(0, 0, 0)').toHaveStyle(
        'border: 0px none rgb(0, 0, 0)'
      );
    });

    // check how many svg are in the token field. In this case, can only be one in it
    await step('Testing token field icon', async () => {
      const svgElement = tokenFieldHolder.querySelectorAll('svg');
      const svg =
        tokenFieldHolder.children[1].children[0].children[0].children[0];
      expect(svgElement, 'Should have 1 SVG as icon').toHaveLength(1);
      expect(svg, 'Should have width of 40px').toHaveStyle('width: 40px');
      expect(svg, 'Should have max-width of 40px').toHaveStyle(
        'max-width: 40px'
      );
      expect(svg, 'Should have max-height of 40px').toHaveStyle(
        'max-height: 40px'
      );
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[1].children[0].children[0].children[1];
      expect(tokenName, 'Should have color of rgb(27, 27 ,31)').toHaveStyle(
        'color: rgb(27, 27 ,31)'
      );
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        tokenName,
        'Should have text content of Token Name'
      ).toHaveTextContent('Token Name');
    });

    await step('Testing token field input', async () => {
      const tokenFieldInput =
        tokenFieldHolder.children[1].children[1].children[0];
      expect(tokenFieldInput, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(tokenFieldInput, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenFieldInput, 'Should have cursor not-allowed').toHaveStyle(
        'cursor: not-allowed'
      );
      expect(tokenFieldInput, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = tokenFieldInput.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        'Input'
      );
    });

    await step('Testing token field max button', async () => {
      const maxButton = tokenFieldHolder.children[1].children[2].children[0];
      await userEvent.click(canvas.getByRole('button'));
      expect(maxButton, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        maxButton,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(maxButton, 'Should have color of rgb(118, 118, 122)').toHaveStyle(
        'color: rgb(118, 118, 122)'
      );
    });

    await step('Testing supporting text', async () => {
      const supportingText = tokenFieldHolder.children[2];
      expect(
        supportingText,
        'Should have color of rgb(27, 27, 31)'
      ).toHaveStyle('color: rgb(27, 27, 31)');
      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should have text content of Supporting text'
      ).toHaveTextContent('Supporting text');
    });
  },
};

export const FilledWithoutTokenIcon: Story = {
  args: {
    Label: 'Label',
    textAlign: 'right',
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
    handleMax: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('token-field-holder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(tokenFieldHolder, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(tokenFieldHolder, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
    });

    await step('Testing token field label', async () => {
      const label = tokenFieldHolder.children[0];
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(label, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
      expect(label, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(label, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(label, 'Should have border of 0px none rgb(0, 0, 0)').toHaveStyle(
        'border: 0px none rgb(0, 0, 0)'
      );
      expect(label, 'Should have text-align start').toHaveStyle(
        'text-align: start'
      );
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[1].children[0].children[0].children[0];
      expect(tokenName, 'Should have color of rgb(27, 27 ,31)').toHaveStyle(
        'color: rgb(27, 27 ,31)'
      );
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        tokenName,
        'Should have text content of Token Name'
      ).toHaveTextContent('Token Name');
    });

    await step('Testing token field max button', async () => {
      const maxButton = tokenFieldHolder.children[1].children[2].children[0];
      await userEvent.click(canvas.getByRole('button'));
      expect(maxButton, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        maxButton,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(maxButton, 'Should have color of rgb(0, 83, 219)').toHaveStyle(
        'color: rgb(0, 83, 219)'
      );
      await userEvent.click(maxButton);
      expect(args.handleMax, 'Should have been called').toHaveBeenCalled();
    });

    await step('Testing supporting text', async () => {
      const supportingText = tokenFieldHolder.children[2];
      expect(supportingText, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should have text content of Supporting text'
      ).toHaveTextContent('Supporting text');
    });

    await step('Testing token field input', async () => {
      const tokenFieldInput =
        tokenFieldHolder.children[1].children[1].children[0];
      let inputValue = tokenFieldInput.getAttribute('value');
      inputValue = 'SUI';
      expect(tokenFieldInput, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(tokenFieldInput, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenFieldInput, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(tokenFieldInput, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = tokenFieldInput.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        'Input'
      );
      await step("Should insert 'SUI COINS' text in input", async () => {
        await userEvent.type(tokenFieldInput, inputValue, {
          delay: 100,
        });
        await waitFor(() =>
          expect(inputValue, 'Should insert SUI in into').toBe('SUI')
        );
      });
    });
  },
};

export const FilledWithoutTokenIconError: Story = {
  args: {
    Label: 'Label',
    status: 'error',
    textAlign: 'right',
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    handleMax: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('token-field-holder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(tokenFieldHolder, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(tokenFieldHolder, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
    });

    await step('Testing token field label', async () => {
      const label = tokenFieldHolder.children[0];
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(label, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
      expect(label, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(label, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
    });

    await step('Testing token name', async () => {
      const tokenName = tokenFieldHolder.children[1].children[0].children[0];
      expect(tokenName, 'Should have color of rgb(27, 27 ,31)').toHaveStyle(
        'color: rgb(27, 27 ,31)'
      );
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        tokenName,
        'Should have text content of Token Name'
      ).toHaveTextContent('Token Name');
    });

    await step('Testing token field max button', async () => {
      const maxButton = tokenFieldHolder.children[1].children[2].children[0];
      await userEvent.click(canvas.getByRole('button'));
      expect(maxButton, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        maxButton,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(maxButton, 'Should have color of rgb(0, 83, 219)').toHaveStyle(
        'color: rgb(0, 83, 219)'
      );
      await userEvent.click(maxButton);
      expect(args.handleMax, 'Should have been called').toHaveBeenCalled();
    });

    await step('Testing token field input', async () => {
      const tokenFieldInput =
        tokenFieldHolder.children[1].children[1].children[0];
      let inputValue = tokenFieldInput.getAttribute('value');
      inputValue = 'SUI';
      expect(tokenFieldInput, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(tokenFieldInput, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenFieldInput, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(tokenFieldInput, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = tokenFieldInput.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        'Input'
      );
      await step("Should insert 'SUI COINS' text in input", async () => {
        await userEvent.type(tokenFieldInput, inputValue, {
          delay: 100,
        });

        await waitFor(() =>
          expect(inputValue, 'Should insert SUI in input').toBe('SUI')
        );
      });
    });
  },
};

export const FilledWithoutTokenIconDisabled: Story = {
  args: {
    disabled: true,
    Label: 'Label',
    textAlign: 'right',
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('token-field-holder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'Should have opacity of 0.32').toHaveStyle(
        'opacity: 0.32'
      );
      expect(tokenFieldHolder, 'Should have cursor not-allowed').toHaveStyle(
        'cursor: not-allowed'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(tokenFieldHolder, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
    });

    await step('Testing token field label', async () => {
      const label = tokenFieldHolder.children[0];
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(label, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
      expect(label, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(label, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(label, 'Should have border of 0px none rgb(0, 0, 0)').toHaveStyle(
        'border: 0px none rgb(0, 0, 0)'
      );
      expect(label, 'Should have text-align start').toHaveStyle(
        'text-align: start'
      );
    });

    await step('Testing token name', async () => {
      const tokenName = tokenFieldHolder.children[1].children[0].children[0];
      expect(tokenName, 'Should have color of rgb(27, 27 ,31)').toHaveStyle(
        'color: rgb(27, 27 ,31)'
      );
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        tokenName,
        'Should have text content of Token Name'
      ).toHaveTextContent('Token Name');
    });

    await step('Testing token field input', async () => {
      const tokenFieldInput =
        tokenFieldHolder.children[1].children[1].children[0];
      expect(tokenFieldInput, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(tokenFieldInput, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenFieldInput, 'Should have cursor not-allowed').toHaveStyle(
        'cursor: not-allowed'
      );
      expect(tokenFieldInput, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = tokenFieldInput.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        'Input'
      );
    });

    await step('Testing token field max button', async () => {
      const maxButton = tokenFieldHolder.children[1].children[2].children[0];
      await userEvent.click(canvas.getByRole('button'));
      expect(maxButton, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        maxButton,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(maxButton, 'Should have color of rgb(118, 118, 122)').toHaveStyle(
        'color: rgb(118, 118, 122)'
      );
    });

    await step('Testing supporting text', async () => {
      const supportingText = tokenFieldHolder.children[2];
      expect(
        supportingText,
        'Should have color of rgb(27, 27, 31)'
      ).toHaveStyle('color: rgb(27, 27, 31)');
      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should have text content of Supporting text'
      ).toHaveTextContent('Supporting text');
    });
  },
};

export const OutlineWithToken: Story = {
  args: {
    Label: 'Label',
    variant: 'outline',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
    handleMax: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('token-field-holder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(tokenFieldHolder, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(tokenFieldHolder, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
    });

    await step('Testing token field label', async () => {
      const label = tokenFieldHolder.children[0];
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(label, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
      expect(label, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(label, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(label, 'Should have border of 0px none rgb(0, 0, 0)').toHaveStyle(
        'border: 0px none rgb(0, 0, 0)'
      );
      expect(label, 'Should have text-align start').toHaveStyle(
        'text-align: start'
      );
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[1].children[0].children[0].children[1];
      expect(tokenName, 'Should have color of rgb(27, 27 ,31)').toHaveStyle(
        'color: rgb(27, 27 ,31)'
      );
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        tokenName,
        'Should have text content of Token Name'
      ).toHaveTextContent('Token Name');
    });

    await step('Testing token field max button', async () => {
      const maxButton = tokenFieldHolder.children[1].children[2].children[0];
      await userEvent.click(canvas.getByRole('button'));
      expect(maxButton, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        maxButton,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(maxButton, 'Should have color of rgb(0, 83, 219)').toHaveStyle(
        'color: rgb(0, 83, 219)'
      );
      await userEvent.click(maxButton);
      expect(args.handleMax, 'Should have been called').toHaveBeenCalled();
    });

    await step('Testing supporting text', async () => {
      const supportingText = tokenFieldHolder.children[2];
      expect(supportingText, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should have text content of Supporting text'
      ).toHaveTextContent('Supporting text');
    });

    await step('Testing token field input', async () => {
      const tokenFieldInput =
        tokenFieldHolder.children[1].children[1].children[0];
      let inputValue = tokenFieldInput.getAttribute('value');
      inputValue = 'SUI';
      expect(tokenFieldInput, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(tokenFieldInput, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenFieldInput, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(tokenFieldInput, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = tokenFieldInput.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        'Input'
      );
      await step("Should insert 'SUI COINS' text in input", async () => {
        await userEvent.type(tokenFieldInput, inputValue, {
          delay: 100,
        });

        await waitFor(() =>
          expect(inputValue, 'Should insert SUI in input').toBe('SUI')
        );
      });
    });
  },
};

export const OutlineWithLabelToTheLeft: Story = {
  args: {
    Label: 'Label',
    variant: 'outline',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'left',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
    handleMax: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('token-field-holder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(tokenFieldHolder, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(tokenFieldHolder, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
    });

    await step('Testing token field label', async () => {
      const label = tokenFieldHolder.children[0];
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(label, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
      expect(label, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(label, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(label, 'Should have border of 0px none rgb(0, 0, 0)').toHaveStyle(
        'border: 0px none rgb(0, 0, 0)'
      );
      expect(label, 'Should have text-align start').toHaveStyle(
        'text-align: start'
      );
    });

    // check how many svg are in the token field. In this case, can only be one in it
    await step('Testing token field icon', async () => {
      const svgElement = tokenFieldHolder.querySelectorAll('svg');
      const svg =
        tokenFieldHolder.children[1].children[0].children[0].children[0];
      expect(svgElement, 'Should have 1 SVG as icon').toHaveLength(1);
      expect(svg, 'Should have width of 40px').toHaveStyle('width: 40px');
      expect(svg, 'Should have max-width of 40px').toHaveStyle(
        'max-width: 40px'
      );
      expect(svg, 'Should have max-height of 40px').toHaveStyle(
        'max-height: 40px'
      );
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[1].children[0].children[0].children[1];
      expect(tokenName, 'Should have color of rgb(27, 27 ,31)').toHaveStyle(
        'color: rgb(27, 27 ,31)'
      );
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        tokenName,
        'Should have text content of Token Name'
      ).toHaveTextContent('Token Name');
    });

    await step('Testing token field max button', async () => {
      const maxButton = tokenFieldHolder.children[1].children[2].children[0];
      await userEvent.click(canvas.getByRole('button'));
      expect(maxButton, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        maxButton,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(maxButton, 'Should have color of rgb(0, 83, 219)').toHaveStyle(
        'color: rgb(0, 83, 219)'
      );
      await userEvent.click(maxButton);
      expect(args.handleMax, 'Should have been called').toHaveBeenCalled();
    });

    await step('Testing supporting text', async () => {
      const supportingText = tokenFieldHolder.children[2];
      expect(supportingText, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should have text content of Supporting text'
      ).toHaveTextContent('Supporting text');
    });

    await step('Testing token field input', async () => {
      const tokenFieldInput =
        tokenFieldHolder.children[1].children[1].children[0];
      let inputValue = tokenFieldInput.getAttribute('value');
      inputValue = 'SUI';
      expect(tokenFieldInput, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(tokenFieldInput, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenFieldInput, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(tokenFieldInput, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = tokenFieldInput.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        'Input'
      );
      await step("Should insert 'SUI COINS' text in input", async () => {
        await userEvent.type(tokenFieldInput, inputValue, {
          delay: 100,
        });
        await waitFor(() =>
          expect(inputValue, 'Should insert SUI in input').toBe('SUI')
        );
      });
    });
  },
};

export const OutlineWithTokenError: Story = {
  args: {
    Label: 'Label',
    status: 'error',
    variant: 'outline',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
    handleMax: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('token-field-holder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(tokenFieldHolder, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(tokenFieldHolder, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
    });

    await step('Testing token field label', async () => {
      const label = tokenFieldHolder.children[0];
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(label, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
      expect(label, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(label, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(label, 'Should have border of 0px none rgb(0, 0, 0)').toHaveStyle(
        'border: 0px none rgb(0, 0, 0)'
      );
      expect(label, 'Should have text-align start').toHaveStyle(
        'text-align: start'
      );
    });

    // check how many svg are in the token field. In this case, can only be one in it
    await step('Testing token field icon', async () => {
      const svgElement = tokenFieldHolder.querySelectorAll('svg');
      const svg =
        tokenFieldHolder.children[1].children[0].children[0].children[0];
      expect(svgElement, 'Should have 1 SVG as icon').toHaveLength(1);
      expect(svg, 'Should have width of 40px').toHaveStyle('width: 40px');
      expect(svg, 'Should have max-width of 40px').toHaveStyle(
        'max-width: 40px'
      );
      expect(svg, 'Should have max-height of 40px').toHaveStyle(
        'max-height: 40px'
      );
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[1].children[0].children[0].children[1];
      expect(tokenName, 'Should have color of rgb(27, 27 ,31)').toHaveStyle(
        'color: rgb(27, 27 ,31)'
      );
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        tokenName,
        'Should have text content of Token Name'
      ).toHaveTextContent('Token Name');
    });

    await step('Testing token field max button', async () => {
      const maxButton = tokenFieldHolder.children[1].children[2].children[0];
      await userEvent.click(canvas.getByRole('button'));
      expect(maxButton, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        maxButton,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(maxButton, 'Should have color of rgb(0, 83, 219)').toHaveStyle(
        'color: rgb(0, 83, 219)'
      );
      await userEvent.click(maxButton);
      expect(args.handleMax, 'Should have been called').toHaveBeenCalled();
    });

    await step('Testing supporting text', async () => {
      const supportingText = tokenFieldHolder.children[2];

      expect(
        supportingText,
        'Should have color of rgb(229, 62, 62)'
      ).toHaveStyle('color: rgb(229, 62, 62)');
      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should have text content of Supporting text'
      ).toHaveTextContent('Supporting text');
    });

    await step('Testing token field input', async () => {
      const tokenFieldInput =
        tokenFieldHolder.children[1].children[1].children[0];
      let inputValue = tokenFieldInput.getAttribute('value');
      inputValue = 'SUI';
      expect(tokenFieldInput, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(tokenFieldInput, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenFieldInput, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(tokenFieldInput, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = tokenFieldInput.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        'Input'
      );
      await step("Should insert 'SUI COINS' text in input", async () => {
        await userEvent.type(tokenFieldInput, inputValue, {
          delay: 100,
        });
        await waitFor(() =>
          expect(inputValue, 'Should insert SUI in input').toBe('SUI')
        );
      });
    });
  },
};

export const OutlineWithTokenDisabled: Story = {
  args: {
    Label: 'Label',
    disabled: true,
    variant: 'outline',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('token-field-holder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'Should have opacity of 0.32').toHaveStyle(
        'opacity: 0.32'
      );
      expect(tokenFieldHolder, 'Should have cursor not-allowed').toHaveStyle(
        'cursor: not-allowed'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(tokenFieldHolder, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
    });

    await step('Testing token field label', async () => {
      const label = tokenFieldHolder.children[0];
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(label, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
      expect(label, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(label, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(label, 'Should have border of 0px none rgb(0, 0, 0)').toHaveStyle(
        'border: 0px none rgb(0, 0, 0)'
      );
      expect(label, 'Should have text-align start').toHaveStyle(
        'text-align: start'
      );
    });

    await step('Testing token name', async () => {
      const tokenName = tokenFieldHolder.children[1].children[0].children[0];
      expect(tokenName, 'Should have color of rgb(27, 27 ,31)').toHaveStyle(
        'color: rgb(27, 27 ,31)'
      );
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        tokenName,
        'Should have text content of Token Name'
      ).toHaveTextContent('Token Name');
    });

    await step('Testing token field input', async () => {
      const tokenFieldInput =
        tokenFieldHolder.children[1].children[1].children[0];
      expect(tokenFieldInput, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(tokenFieldInput, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenFieldInput, 'Should have cursor not-allowed').toHaveStyle(
        'cursor: not-allowed'
      );
      expect(tokenFieldInput, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = tokenFieldInput.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        'Input'
      );
    });

    await step('Testing token field max button', async () => {
      const maxButton = tokenFieldHolder.children[1].children[2].children[0];
      await userEvent.click(canvas.getByRole('button'));
      expect(maxButton, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        maxButton,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(maxButton, 'Should have color of rgb(118, 118, 122)').toHaveStyle(
        'color: rgb(118, 118, 122)'
      );
    });

    await step('Testing supporting text', async () => {
      const supportingText = tokenFieldHolder.children[2];
      expect(
        supportingText,
        'Should have color of rgb(27, 27, 31)'
      ).toHaveStyle('color: rgb(27, 27, 31)');
      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should have text content of Supporting text'
      ).toHaveTextContent('Supporting text');
    });
  },
};

export const OutlineWithoutTokenIcon: Story = {
  args: {
    Label: 'Label',
    variant: 'outline',
    textAlign: 'right',
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
    handleMax: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('token-field-holder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(tokenFieldHolder, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(tokenFieldHolder, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
    });

    await step('Testing token field label', async () => {
      const label = tokenFieldHolder.children[0];
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(label, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
      expect(label, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(label, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(label, 'Should have border of 0px none rgb(0, 0, 0)').toHaveStyle(
        'border: 0px none rgb(0, 0, 0)'
      );
      expect(label, 'Should have text-align start').toHaveStyle(
        'text-align: start'
      );
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[1].children[0].children[0].children[0];
      expect(tokenName, 'Should have color of rgb(27, 27 ,31)').toHaveStyle(
        'color: rgb(27, 27 ,31)'
      );
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        tokenName,
        'Should have text content of Token Name'
      ).toHaveTextContent('Token Name');
    });

    await step('Testing token field max button', async () => {
      const maxButton = tokenFieldHolder.children[1].children[2].children[0];
      await userEvent.click(canvas.getByRole('button'));
      expect(
        maxButton,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(maxButton, 'Should have color of rgb(0, 83, 219)').toHaveStyle(
        'color: rgb(0, 83, 219)'
      );
      await userEvent.click(maxButton);
      expect(args.handleMax, 'Should have been called').toHaveBeenCalled();
    });

    await step('Testing supporting text', async () => {
      const supportingText = tokenFieldHolder.children[2];
      expect(supportingText, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should have text content of Supporting text'
      ).toHaveTextContent('Supporting text');
    });

    await step('Testing token field input', async () => {
      const tokenFieldInput =
        tokenFieldHolder.children[1].children[1].children[0];
      let inputValue = tokenFieldInput.getAttribute('value');
      inputValue = 'SUI';
      expect(tokenFieldInput, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(tokenFieldInput, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenFieldInput, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(tokenFieldInput, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = tokenFieldInput.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        'Input'
      );
      await step("Should insert 'SUI COINS' text in input", async () => {
        await userEvent.type(tokenFieldInput, inputValue, {
          delay: 100,
        });
        await waitFor(() =>
          expect(inputValue, 'Should insert SUI in input').toBe('SUI')
        );
      });
    });
  },
};

export const OutlineWithoutTokenIconError: Story = {
  args: {
    Label: 'Label',
    status: 'error',
    variant: 'outline',
    textAlign: 'right',
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
    handleMax: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('token-field-holder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(tokenFieldHolder, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(tokenFieldHolder, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
    });

    await step('Testing token field label', async () => {
      const label = tokenFieldHolder.children[0];
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(label, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
      expect(label, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(label, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(label, 'Should have border of 0px none rgb(0, 0, 0)').toHaveStyle(
        'border: 0px none rgb(0, 0, 0)'
      );
      expect(label, 'Should have text-align start').toHaveStyle(
        'text-align: start'
      );
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[1].children[0].children[0].children[0];
      expect(tokenName, 'Should have color of rgb(27, 27 ,31)').toHaveStyle(
        'color: rgb(27, 27 ,31)'
      );
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        tokenName,
        'Should have text content of Token Name'
      ).toHaveTextContent('Token Name');
    });

    await step('Testing token field max button', async () => {
      const maxButton = tokenFieldHolder.children[1].children[2].children[0];
      await userEvent.click(canvas.getByRole('button'));
      expect(
        maxButton,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(maxButton, 'Should have color of rgb(0, 83, 219)').toHaveStyle(
        'color: rgb(0, 83, 219)'
      );
      await userEvent.click(maxButton);
      expect(args.handleMax, 'Should have been called').toHaveBeenCalled();
    });

    await step('Testing supporting text', async () => {
      const supportingText = tokenFieldHolder.children[2];
      expect(
        supportingText,
        'Should have color of rgb(229, 62, 62)'
      ).toHaveStyle('color: rgb(229, 62, 62)');
      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should have text content of Supporting text'
      ).toHaveTextContent('Supporting text');
    });

    await step('Testing token field input', async () => {
      const tokenFieldInput =
        tokenFieldHolder.children[1].children[1].children[0];
      let inputValue = tokenFieldInput.getAttribute('value');
      inputValue = 'SUI';
      expect(tokenFieldInput, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(tokenFieldInput, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenFieldInput, 'Should have cursor auto').toHaveStyle(
        'cursor: auto'
      );
      expect(tokenFieldInput, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = tokenFieldInput.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        'Input'
      );
      await step("Should insert 'SUI COINS' text in input", async () => {
        await userEvent.type(tokenFieldInput, inputValue, {
          delay: 100,
        });
        await waitFor(() =>
          expect(inputValue, 'Should insert SUI in input').toBe('SUI')
        );
      });
    });
  },
};

export const OutlineWithoutTokenIconDisabled: Story = {
  args: {
    Label: 'Label',
    disabled: true,
    variant: 'outline',
    textAlign: 'right',
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('token-field-holder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'Should have opacity of 0.32').toHaveStyle(
        'opacity: 0.32'
      );
      expect(tokenFieldHolder, 'Should have cursor not-allowed').toHaveStyle(
        'cursor: not-allowed'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(tokenFieldHolder, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
    });

    await step('Testing token field label', async () => {
      const label = tokenFieldHolder.children[0];
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(label, 'Should have color of #000000').toHaveStyle(
        'color: #000000'
      );
      expect(label, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(label, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(label, 'Should have border of 0px none rgb(0, 0, 0)').toHaveStyle(
        'border: 0px none rgb(0, 0, 0)'
      );
      expect(label, 'Should have text-align start').toHaveStyle(
        'text-align: start'
      );
    });

    await step('Testing token name', async () => {
      const tokenName = tokenFieldHolder.children[1].children[0].children[0];
      expect(tokenName, 'Should have color of rgb(27, 27 ,31)').toHaveStyle(
        'color: rgb(27, 27 ,31)'
      );
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        tokenName,
        'Should have text content of Token Name'
      ).toHaveTextContent('Token Name');
    });

    await step('Testing token field input', async () => {
      const tokenFieldInput =
        tokenFieldHolder.children[1].children[1].children[0];
      expect(tokenFieldInput, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(tokenFieldInput, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenFieldInput, 'Should have cursor not-allowed').toHaveStyle(
        'cursor: not-allowed'
      );
      expect(tokenFieldInput, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = tokenFieldInput.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        'Input'
      );
    });

    await step('Testing token field max button', async () => {
      const maxButton = tokenFieldHolder.children[1].children[2].children[0];
      await userEvent.click(canvas.getByRole('button'));
      expect(maxButton, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        maxButton,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
      expect(maxButton, 'Should have color of rgb(118, 118, 122)').toHaveStyle(
        'color: rgb(118, 118, 122)'
      );
    });

    await step('Testing supporting text', async () => {
      const supportingText = tokenFieldHolder.children[2];
      expect(
        supportingText,
        'Should have color of rgb(27, 27, 31)'
      ).toHaveStyle('color: rgb(27, 27, 31)');
      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should have text content of Supporting text'
      ).toHaveTextContent('Supporting text');
    });
  },
};
