import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
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
    textAlign: {
      defaultValue: 'right',
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
  },
};

export default meta;

const INPUT_VALUE = '230';

type Story = StoryObj<typeof TokenField>;

export const FilledDefault: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    Suffix: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: '--',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    variant: 'filled',
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('tokenFieldHolder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'To be rendered').toBeInTheDocument();
      expect(
        tokenFieldHolder,
        'Should have cursor pointer default'
      ).toHaveStyle('cursor: default');
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing token field icon', async () => {
      const iconHolder = tokenFieldHolder.children[0].children[0].children[0];
      expect(iconHolder, 'Should have display flex').toHaveStyle(
        'display: flex'
      );

      const svgElement = iconHolder.querySelectorAll('svg');
      expect(svgElement, 'Should have at least 1 svg').toHaveLength(1);

      const svg = iconHolder.children[0].tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[0].children[0].children[0].children[1];
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have color of rgb(27, 27, 31)').toHaveStyle(
        'color: rgb(27, 27, 31)'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenName, 'Should have line-height of 24px').toHaveStyle(
        'line-height: 24px'
      );
      expect(tokenName, 'Should have font-family satoshi').toHaveStyle(
        'font-family: Satoshi'
      );
      expect(tokenName, 'Should have margin-left 20px').toHaveStyle(
        'margin-left: 20px'
      );
    });

    await step('Testing USD value', async () => {
      const usdValue = tokenFieldHolder.children[0].children[1].children[1];
      expect(usdValue, 'Should have font-size of 11.008px').toHaveStyle(
        'font-size: 11.008px'
      );
      expect(usdValue, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(usdValue, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(usdValue, 'Should have line-height of 16px').toHaveStyle(
        'line-height: 16px'
      );
      expect(usdValue, 'Should have font-family proto').toHaveStyle(
        'font-family: Proto'
      );
    });

    await step('Testing token field suffix', async () => {
      const suffix = tokenFieldHolder.children[0].children[2];

      const svg = suffix.tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token field input', async () => {
      const inputField = tokenFieldHolder.children[0].children[1].children[0];
      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        inputField,
        'Should have border of 0px none rgb(0, 0, 0)'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe('--');

      await step('Should insert 230 text in input', async () => {
        await userEvent.type(inputField, INPUT_VALUE, {
          delay: 100,
        });
      });
    });
  },
};

export const FilledDefaultSuccess: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    Suffix: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: '--',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    variant: 'filled',
    status: 'success',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('tokenFieldHolder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'To be rendered').toBeInTheDocument();
      expect(
        tokenFieldHolder,
        'Should have cursor pointer default'
      ).toHaveStyle('cursor: default');
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing token field icon', async () => {
      const iconHolder = tokenFieldHolder.children[0].children[0].children[0];
      expect(iconHolder, 'Should have display flex').toHaveStyle(
        'display: flex'
      );

      const svgElement = iconHolder.querySelectorAll('svg');
      expect(svgElement, 'Should have at least 1 svg').toHaveLength(1);

      const svg = iconHolder.children[0].tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[0].children[0].children[0].children[1];
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have color of rgb(27, 27, 31)').toHaveStyle(
        'color: rgb(27, 27, 31)'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenName, 'Should have line-height of 24px').toHaveStyle(
        'line-height: 24px'
      );
      expect(tokenName, 'Should have font-family satoshi').toHaveStyle(
        'font-family: Satoshi'
      );
      expect(tokenName, 'Should have margin-left 20px').toHaveStyle(
        'margin-left: 20px'
      );
    });

    await step('Testing USD value', async () => {
      const usdValue = tokenFieldHolder.children[0].children[1].children[1];

      expect(usdValue, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(usdValue, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(usdValue, 'Should have line-height of 16px').toHaveStyle(
        'line-height: 16px'
      );
      expect(usdValue, 'Should have font-family proto').toHaveStyle(
        'font-family: Proto'
      );
    });

    await step('Testing token field suffix', async () => {
      const suffix = tokenFieldHolder.children[0].children[2];

      const svg = suffix.tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token field input', async () => {
      const inputField = tokenFieldHolder.children[0].children[1].children[0];
      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        inputField,
        'Should have border of 0px none rgb(0, 0, 0)'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe('--');

      await step('Should insert 123 text in input', async () => {
        await userEvent.type(inputField, INPUT_VALUE, {
          delay: 100,
        });
      });
    });
  },
};

export const FilledDefaultError: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    Suffix: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: '--',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    variant: 'filled',
    status: 'error',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('tokenFieldHolder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'To be rendered').toBeInTheDocument();
      expect(
        tokenFieldHolder,
        'Should have cursor pointer default'
      ).toHaveStyle('cursor: default');
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing token field icon', async () => {
      const iconHolder = tokenFieldHolder.children[0].children[0].children[0];
      expect(iconHolder, 'Should have display flex').toHaveStyle(
        'display: flex'
      );

      const svgElement = iconHolder.querySelectorAll('svg');
      expect(svgElement, 'Should have at least 1 svg').toHaveLength(1);

      const svg = iconHolder.children[0].tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[0].children[0].children[0].children[1];
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have color of rgb(27, 27, 31)').toHaveStyle(
        'color: rgb(27, 27, 31)'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenName, 'Should have line-height of 24px').toHaveStyle(
        'line-height: 24px'
      );
      expect(tokenName, 'Should have font-family satoshi').toHaveStyle(
        'font-family: Satoshi'
      );
      expect(tokenName, 'Should have margin-left 20px').toHaveStyle(
        'margin-left: 20px'
      );
    });

    await step('Testing USD value', async () => {
      const usdValue = tokenFieldHolder.children[0].children[1].children[1];

      expect(usdValue, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(usdValue, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(usdValue, 'Should have line-height of 16px').toHaveStyle(
        'line-height: 16px'
      );
      expect(usdValue, 'Should have font-family proto').toHaveStyle(
        'font-family: Proto'
      );
    });

    await step('Testing token field suffix', async () => {
      const suffix = tokenFieldHolder.children[0].children[2];

      const svg = suffix.tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token field input', async () => {
      const inputField = tokenFieldHolder.children[0].children[1].children[0];
      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        inputField,
        'Should have border of 0px none rgb(0, 0, 0)'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe('--');

      await step('Should insert 123 text in input', async () => {
        await userEvent.type(inputField, INPUT_VALUE, {
          delay: 100,
        });
      });
    });
  },
};

export const FilledDefaultDisabled: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    Suffix: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: '--',
    tokenName: 'Token Name',
    disabled: true,
    active: true,
    variant: 'filled',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('tokenFieldHolder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'To be rendered').toBeInTheDocument();
      expect(
        tokenFieldHolder,
        'Should have cursor pointer not-allowed'
      ).toHaveStyle('cursor: not-allowed');
      expect(tokenFieldHolder, 'Should have opacity of 0.32').toHaveStyle(
        'opacity: 0.32  '
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing token field icon', async () => {
      const iconHolder = tokenFieldHolder.children[0].children[0].children[0];
      expect(iconHolder, 'Should have display flex').toHaveStyle(
        'display: flex'
      );

      const svgElement = iconHolder.querySelectorAll('svg');
      expect(svgElement, 'Should have at least 1 svg').toHaveLength(1);

      const svg = iconHolder.children[0].tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[0].children[0].children[0].children[1];
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have color of rgb(27, 27, 31)').toHaveStyle(
        'color: rgb(27, 27, 31)'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenName, 'Should have line-height of 24px').toHaveStyle(
        'line-height: 24px'
      );
      expect(tokenName, 'Should have font-family satoshi').toHaveStyle(
        'font-family: Satoshi'
      );
      expect(tokenName, 'Should have margin-left 20px').toHaveStyle(
        'margin-left: 20px'
      );
    });

    await step('Testing USD value', async () => {
      const usdValue = tokenFieldHolder.children[0].children[1].children[1];

      expect(usdValue, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(usdValue, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(usdValue, 'Should have line-height of 16px').toHaveStyle(
        'line-height: 16px'
      );
      expect(usdValue, 'Should have font-family proto').toHaveStyle(
        'font-family: Proto'
      );
    });

    await step('Testing token field suffix', async () => {
      const suffix = tokenFieldHolder.children[0].children[2];

      const svg = suffix.tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token field input', async () => {
      const inputField = tokenFieldHolder.children[0].children[1].children[0];
      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        inputField,
        'Should have border of 0px none rgb(0, 0, 0)'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor not-allowed').toHaveStyle(
        'cursor: not-allowed'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe('--');

      await step('Should insert 123 text in input', async () => {
        await userEvent.type(inputField, INPUT_VALUE, {
          delay: 100,
        });
      });
    });
  },
};

export const FilledWithBalance: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    Suffix: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: '--',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    balance: '123',
    variant: 'filled',
    handleMax: fn(),
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('tokenFieldHolder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'To be rendered').toBeInTheDocument();
      expect(
        tokenFieldHolder,
        'Should have cursor pointer default'
      ).toHaveStyle('cursor: default');
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing token field icon', async () => {
      const iconHolder = tokenFieldHolder.children[0].children[0].children[0];
      expect(iconHolder, 'Should have display flex').toHaveStyle(
        'display: flex'
      );

      const svgElement = iconHolder.querySelectorAll('svg');
      expect(svgElement, 'Should have at least 1 svg').toHaveLength(1);

      const svg = iconHolder.children[0].tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[0].children[0].children[0].children[1];
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have color of rgb(27, 27, 31)').toHaveStyle(
        'color: rgb(27, 27, 31)'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenName, 'Should have line-height of 24px').toHaveStyle(
        'line-height: 24px'
      );
      expect(tokenName, 'Should have font-family satoshi').toHaveStyle(
        'font-family: Satoshi'
      );
      expect(tokenName, 'Should have margin-left 20px').toHaveStyle(
        'margin-left: 20px'
      );
    });

    await step('Testing USD value', async () => {
      const usdValue = tokenFieldHolder.children[0].children[1].children[1];

      expect(usdValue, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(usdValue, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(usdValue, 'Should have line-height of 16px').toHaveStyle(
        'line-height: 16px'
      );
      expect(usdValue, 'Should have font-family proto').toHaveStyle(
        'font-family: Proto'
      );
    });

    await step('Testing token field suffix', async () => {
      const suffix = tokenFieldHolder.children[0].children[2];

      const svg = suffix.tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing balance label', async () => {
      const balance = tokenFieldHolder.children[1].children[0];
      expect(balance, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(balance, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(balance, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(balance, 'Should have line-height of 20px').toHaveStyle(
        'line-height: 20px'
      );
      expect(balance, 'Should have font-family proto').toHaveStyle(
        'font-family: Proto'
      );
    });

    await step('Testing max button', async () => {
      const balance = tokenFieldHolder.children[1].children[1];
      expect(balance.tagName, 'Should be an button').toBe('BUTTON');
      expect(balance, 'Should be MAX as value').toHaveTextContent('MAX');
      expect(balance, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(balance, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(balance, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(balance, 'Should have line-height of normal').toHaveStyle(
        'line-height: normal'
      );
      expect(balance, 'Should have font-family proto').toHaveStyle(
        'font-family: Proto'
      );
    });

    await step('Testing token field input', async () => {
      const inputField = tokenFieldHolder.children[0].children[1].children[0];
      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        inputField,
        'Should have border of 0px none rgb(0, 0, 0)'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe('--');

      await step('Should insert 123 text in input', async () => {
        await userEvent.type(inputField, INPUT_VALUE, {
          delay: 100,
        });
      });
    });
  },
};

export const FilledWithoutTokenIcon: Story = {
  args: {
    textAlign: 'right',
    placeholder: '--',
    Suffix: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    tokenName: 'Token Name',
    handleMax: fn(),
    active: true,
    variant: 'filled',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('tokenFieldHolder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'To be rendered').toBeInTheDocument();
      expect(
        tokenFieldHolder,
        'Should have cursor pointer default'
      ).toHaveStyle('cursor: default');
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[0].children[0].children[0].children[0];
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have color of rgb(27, 27, 31)').toHaveStyle(
        'color: rgb(27, 27, 31)'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenName, 'Should have line-height of 24px').toHaveStyle(
        'line-height: 24px'
      );
      expect(tokenName, 'Should have font-family satoshi').toHaveStyle(
        'font-family: Satoshi'
      );
      expect(tokenName, 'Should have margin-left 8px').toHaveStyle(
        'margin-left: 8px'
      );
    });

    await step('Testing USD value', async () => {
      const usdValue = tokenFieldHolder.children[0].children[1].children[1];

      expect(usdValue, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(usdValue, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(usdValue, 'Should have line-height of 16px').toHaveStyle(
        'line-height: 16px'
      );
      expect(usdValue, 'Should have font-family proto').toHaveStyle(
        'font-family: Proto'
      );
    });

    await step('Testing token field suffix', async () => {
      const suffix = tokenFieldHolder.children[0].children[2];

      const svg = suffix.tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token field input', async () => {
      const inputField = tokenFieldHolder.children[0].children[1].children[0];
      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        inputField,
        'Should have border of 0px none rgb(0, 0, 0)'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe('--');

      await step('Should insert 123 text in input', async () => {
        await userEvent.type(inputField, INPUT_VALUE, {
          delay: 100,
        });
      });
    });
  },
};

export const OutlinedDefault: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    Suffix: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: '--',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    variant: 'outline',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('tokenFieldHolder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'To be rendered').toBeInTheDocument();
      expect(
        tokenFieldHolder,
        'Should have cursor pointer default'
      ).toHaveStyle('cursor: default');
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing token field icon', async () => {
      const iconHolder = tokenFieldHolder.children[0].children[0].children[0];
      expect(iconHolder, 'Should have display flex').toHaveStyle(
        'display: flex'
      );

      const svgElement = iconHolder.querySelectorAll('svg');
      expect(svgElement, 'Should have at least 1 svg').toHaveLength(1);

      const svg = iconHolder.children[0].tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[0].children[0].children[0].children[1];
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have color of rgb(27, 27, 31)').toHaveStyle(
        'color: rgb(27, 27, 31)'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenName, 'Should have line-height of 24px').toHaveStyle(
        'line-height: 24px'
      );
      expect(tokenName, 'Should have font-family satoshi').toHaveStyle(
        'font-family: Satoshi'
      );
      expect(tokenName, 'Should have margin-left 20px').toHaveStyle(
        'margin-left: 20px'
      );
    });

    await step('Testing USD value', async () => {
      const usdValue = tokenFieldHolder.children[0].children[1].children[1];

      expect(usdValue, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(usdValue, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(usdValue, 'Should have line-height of 16px').toHaveStyle(
        'line-height: 16px'
      );
      expect(usdValue, 'Should have font-family proto').toHaveStyle(
        'font-family: Proto'
      );
    });

    await step('Testing token field suffix', async () => {
      const suffix = tokenFieldHolder.children[0].children[2];

      const svg = suffix.tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token field input', async () => {
      const inputField = tokenFieldHolder.children[0].children[1].children[0];
      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        inputField,
        'Should have border of 0px none rgb(0, 0, 0)'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe('--');

      await step('Should insert 123 text in input', async () => {
        await userEvent.type(inputField, INPUT_VALUE, {
          delay: 100,
        });
      });
    });
  },
};

export const OutlinedDefaultDefaultSuccess: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    Suffix: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,

    placeholder: '--',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    variant: 'outline',
    status: 'success',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('tokenFieldHolder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'To be rendered').toBeInTheDocument();
      expect(
        tokenFieldHolder,
        'Should have cursor pointer default'
      ).toHaveStyle('cursor: default');
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing token field icon', async () => {
      const iconHolder = tokenFieldHolder.children[0].children[0].children[0];
      expect(iconHolder, 'Should have display flex').toHaveStyle(
        'display: flex'
      );

      const svgElement = iconHolder.querySelectorAll('svg');
      expect(svgElement, 'Should have at least 1 svg').toHaveLength(1);

      const svg = iconHolder.children[0].tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[0].children[0].children[0].children[1];
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have color of rgb(27, 27, 31)').toHaveStyle(
        'color: rgb(27, 27, 31)'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenName, 'Should have line-height of 24px').toHaveStyle(
        'line-height: 24px'
      );
      expect(tokenName, 'Should have font-family satoshi').toHaveStyle(
        'font-family: Satoshi'
      );
      expect(tokenName, 'Should have margin-left 20px').toHaveStyle(
        'margin-left: 20px'
      );
    });

    await step('Testing USD value', async () => {
      const usdValue = tokenFieldHolder.children[0].children[1].children[1];

      expect(usdValue, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(usdValue, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(usdValue, 'Should have line-height of 16px').toHaveStyle(
        'line-height: 16px'
      );
      expect(usdValue, 'Should have font-family proto').toHaveStyle(
        'font-family: Proto'
      );
    });

    await step('Testing token field suffix', async () => {
      const suffix = tokenFieldHolder.children[0].children[2];

      const svg = suffix.tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token field input', async () => {
      const inputField = tokenFieldHolder.children[0].children[1].children[0];
      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        inputField,
        'Should have border of 0px none rgb(0, 0, 0)'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe('--');

      await step('Should insert 123 text in input', async () => {
        await userEvent.type(inputField, INPUT_VALUE, {
          delay: 100,
        });
      });
    });
  },
};

export const OutlineDefaultError: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    Suffix: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,

    placeholder: '--',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    variant: 'outline',
    status: 'error',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('tokenFieldHolder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'To be rendered').toBeInTheDocument();
      expect(
        tokenFieldHolder,
        'Should have cursor pointer default'
      ).toHaveStyle('cursor: default');
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing token field icon', async () => {
      const iconHolder = tokenFieldHolder.children[0].children[0].children[0];
      expect(iconHolder, 'Should have display flex').toHaveStyle(
        'display: flex'
      );

      const svgElement = iconHolder.querySelectorAll('svg');
      expect(svgElement, 'Should have at least 1 svg').toHaveLength(1);

      const svg = iconHolder.children[0].tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[0].children[0].children[0].children[1];
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have color of rgb(27, 27, 31)').toHaveStyle(
        'color: rgb(27, 27, 31)'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenName, 'Should have line-height of 24px').toHaveStyle(
        'line-height: 24px'
      );
      expect(tokenName, 'Should have font-family satoshi').toHaveStyle(
        'font-family: Satoshi'
      );
      expect(tokenName, 'Should have margin-left 20px').toHaveStyle(
        'margin-left: 20px'
      );
    });

    await step('Testing USD value', async () => {
      const usdValue = tokenFieldHolder.children[0].children[1].children[1];

      expect(usdValue, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(usdValue, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(usdValue, 'Should have line-height of 16px').toHaveStyle(
        'line-height: 16px'
      );
      expect(usdValue, 'Should have font-family proto').toHaveStyle(
        'font-family: Proto'
      );
    });

    await step('Testing token field suffix', async () => {
      const suffix = tokenFieldHolder.children[0].children[2];

      const svg = suffix.tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token field input', async () => {
      const inputField = tokenFieldHolder.children[0].children[1].children[0];
      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        inputField,
        'Should have border of 0px none rgb(0, 0, 0)'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe('--');

      await step('Should insert 123 text in input', async () => {
        await userEvent.type(inputField, INPUT_VALUE, {
          delay: 100,
        });
      });
    });
  },
};

export const OutlineDefaultDisabled: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    Suffix: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,

    placeholder: '--',
    tokenName: 'Token Name',
    disabled: true,
    active: true,
    variant: 'outline',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('tokenFieldHolder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'To be rendered').toBeInTheDocument();
      expect(
        tokenFieldHolder,
        'Should have cursor pointer not-allowed'
      ).toHaveStyle('cursor: not-allowed');
      expect(tokenFieldHolder, 'Should have opacity of 0.32').toHaveStyle(
        'opacity: 0.32'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing token field icon', async () => {
      const iconHolder = tokenFieldHolder.children[0].children[0].children[0];
      expect(iconHolder, 'Should have display flex').toHaveStyle(
        'display: flex'
      );

      const svgElement = iconHolder.querySelectorAll('svg');
      expect(svgElement, 'Should have at least 1 svg').toHaveLength(1);

      const svg = iconHolder.children[0].tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[0].children[0].children[0].children[1];
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have color of rgb(27, 27, 31)').toHaveStyle(
        'color: rgb(27, 27, 31)'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenName, 'Should have line-height of 24px').toHaveStyle(
        'line-height: 24px'
      );
      expect(tokenName, 'Should have font-family satoshi').toHaveStyle(
        'font-family: Satoshi'
      );
      expect(tokenName, 'Should have margin-left 20px').toHaveStyle(
        'margin-left: 20px'
      );
    });

    await step('Testing USD value', async () => {
      const usdValue = tokenFieldHolder.children[0].children[1].children[1];

      expect(usdValue, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(usdValue, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(usdValue, 'Should have line-height of 16px').toHaveStyle(
        'line-height: 16px'
      );
      expect(usdValue, 'Should have font-family proto').toHaveStyle(
        'font-family: Proto'
      );
    });

    await step('Testing token field suffix', async () => {
      const suffix = tokenFieldHolder.children[0].children[2];

      const svg = suffix.tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token field input', async () => {
      const inputField = tokenFieldHolder.children[0].children[1].children[0];
      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        inputField,
        'Should have border of 0px none rgb(0, 0, 0)'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor not-allowed').toHaveStyle(
        'cursor: not-allowed'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe('--');

      await step('Should insert 123 text in input', async () => {
        await userEvent.type(inputField, INPUT_VALUE, {
          delay: 100,
        });
      });
    });
  },
};

export const OutlineWithBalance: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    Suffix: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,

    placeholder: '--',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    balance: '123',
    variant: 'outline',
    handleMax: fn(),
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('tokenFieldHolder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'To be rendered').toBeInTheDocument();
      expect(
        tokenFieldHolder,
        'Should have cursor pointer default'
      ).toHaveStyle('cursor: default');
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing token field icon', async () => {
      const iconHolder = tokenFieldHolder.children[0].children[0].children[0];
      expect(iconHolder, 'Should have display flex').toHaveStyle(
        'display: flex'
      );

      const svgElement = iconHolder.querySelectorAll('svg');
      expect(svgElement, 'Should have at least 1 svg').toHaveLength(1);

      const svg = iconHolder.children[0].tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[0].children[0].children[0].children[1];
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have color of rgb(27, 27, 31)').toHaveStyle(
        'color: rgb(27, 27, 31)'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenName, 'Should have line-height of 24px').toHaveStyle(
        'line-height: 24px'
      );
      expect(tokenName, 'Should have font-family satoshi').toHaveStyle(
        'font-family: Satoshi'
      );
      expect(tokenName, 'Should have margin-left 20px').toHaveStyle(
        'margin-left: 20px'
      );
    });

    await step('Testing USD value', async () => {
      const usdValue = tokenFieldHolder.children[0].children[1].children[1];

      expect(usdValue, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(usdValue, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(usdValue, 'Should have line-height of 16px').toHaveStyle(
        'line-height: 16px'
      );
      expect(usdValue, 'Should have font-family proto').toHaveStyle(
        'font-family: Proto'
      );
    });

    await step('Testing token field suffix', async () => {
      const suffix = tokenFieldHolder.children[0].children[2];

      const svg = suffix.tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing balance label', async () => {
      const balance = tokenFieldHolder.children[1].children[0];
      expect(balance, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(balance, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(balance, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(balance, 'Should have line-height of 20px').toHaveStyle(
        'line-height: 20px'
      );
      expect(balance, 'Should have font-family proto').toHaveStyle(
        'font-family: Proto'
      );
    });

    await step('Testing max button', async () => {
      const balance = tokenFieldHolder.children[1].children[1];
      expect(balance.tagName, 'Should be an button').toBe('BUTTON');
      expect(balance, 'Should be MAX as value').toHaveTextContent('MAX');
      expect(balance, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(balance, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(balance, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(balance, 'Should have line-height of normal').toHaveStyle(
        'line-height: normal'
      );
      expect(balance, 'Should have font-family proto').toHaveStyle(
        'font-family: Proto'
      );
    });

    await step('Testing token field input', async () => {
      const inputField = tokenFieldHolder.children[0].children[1].children[0];
      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        inputField,
        'Should have border of 0px none rgb(0, 0, 0)'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe('--');

      await step('Should insert 123 text in input', async () => {
        await userEvent.type(inputField, INPUT_VALUE, {
          delay: 100,
        });
      });
    });
  },
};

export const OutlineWithoutTokenIcon: Story = {
  args: {
    textAlign: 'right',
    placeholder: '--',
    Suffix: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    tokenName: 'Token Name',
    handleMax: fn(),
    active: true,
    variant: 'outline',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tokenFieldHolder = canvas.getByLabelText('tokenFieldHolder');

    await step('Testing token field holder', async () => {
      expect(tokenFieldHolder, 'To be rendered').toBeInTheDocument();
      expect(
        tokenFieldHolder,
        'Should have cursor pointer default'
      ).toHaveStyle('cursor: default');
      expect(tokenFieldHolder, 'Should have opacity of 1').toHaveStyle(
        'opacity: 1'
      );
      expect(
        tokenFieldHolder,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing token name', async () => {
      const tokenName =
        tokenFieldHolder.children[0].children[0].children[0].children[0];
      expect(tokenName, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(tokenName, 'Should have color of rgb(27, 27, 31)').toHaveStyle(
        'color: rgb(27, 27, 31)'
      );
      expect(tokenName, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(tokenName, 'Should have line-height of 24px').toHaveStyle(
        'line-height: 24px'
      );
      expect(tokenName, 'Should have font-family satoshi').toHaveStyle(
        'font-family: Satoshi'
      );
      expect(tokenName, 'Should have margin-left 8px').toHaveStyle(
        'margin-left: 8px'
      );
    });

    await step('Testing USD value', async () => {
      const usdValue = tokenFieldHolder.children[0].children[1].children[1];

      expect(usdValue, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(usdValue, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(usdValue, 'Should have line-height of 16px').toHaveStyle(
        'line-height: 16px'
      );
      expect(usdValue, 'Should have font-family proto').toHaveStyle(
        'font-family: Proto'
      );
    });

    await step('Testing token field suffix', async () => {
      const suffix = tokenFieldHolder.children[0].children[2];

      const svg = suffix.tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing token field input', async () => {
      const inputField = tokenFieldHolder.children[0].children[1].children[0];
      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        inputField,
        'Should have border of 0px none rgb(0, 0, 0)'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
      expect(inputField, 'Should have font-size of 22px').toHaveStyle(
        'font-size: 22px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe('--');

      await step('Should insert 123 text in input', async () => {
        await userEvent.type(inputField, INPUT_VALUE, {
          delay: 100,
        });
      });
    });
  },
};
