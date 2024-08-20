import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
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

type Story = StoryObj<typeof TokenField>;

export const FilledWithToken: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
  },
};

export const FilledWithTokenWithoutLabel: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
  },
};

export const FilledWithLabelToTheLeft: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
  },
};

export const FilledWithTokenError: Story = {
  args: {
    status: 'error',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
  },
};

export const FilledWithTokenDisabled: Story = {
  args: {
    disabled: true,
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
  },
};

export const FilledWithoutTokenIcon: Story = {
  args: {
    textAlign: 'right',
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
  },
};

export const FilledWithoutTokenIconError: Story = {
  args: {
    status: 'error',
    textAlign: 'right',
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
  },
};

export const FilledWithoutTokenIconDisabled: Story = {
  args: {
    disabled: true,
    textAlign: 'right',
    placeholder: 'Input',
    tokenName: 'Token Name',
  },
};

export const OutlineWithToken: Story = {
  args: {
    variant: 'outline',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
  },
};

export const OutlineWithLabelToTheLeft: Story = {
  args: {
    variant: 'outline',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',

    tokenName: 'Token Name',

    handleMax: fn(),
  },
};

export const OutlineWithTokenError: Story = {
  args: {
    status: 'error',
    variant: 'outline',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
  },
};

export const OutlineWithTokenDisabled: Story = {
  args: {
    disabled: true,
    variant: 'outline',
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
  },
};

export const OutlineWithoutTokenIcon: Story = {
  args: {
    variant: 'outline',
    textAlign: 'right',
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
  },
};

export const OutlineWithoutTokenIconError: Story = {
  args: {
    status: 'error',
    variant: 'outline',
    textAlign: 'right',
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
  },
};

export const OutlineWithoutTokenIconDisabled: Story = {
  args: {
    disabled: true,
    variant: 'outline',
    textAlign: 'right',
    placeholder: 'Input',
    tokenName: 'Token Name',
  },
};
