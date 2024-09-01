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

export const FilledDefault: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    variant: 'filled',
  },
};

export const FilledDefaultSuccess: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    variant: 'filled',
    status: 'success',
  },
};

export const FilledDefaultError: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    variant: 'filled',
    status: 'error',
  },
};

export const FilledDefaultDisabled: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    disabled: true,
    active: true,
    variant: 'filled',
  },
};

export const FilledWithBalance: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    balance: '123',
    variant: 'filled',
    handleMax: fn(),
  },
};

export const FilledWithBalanceSuccess: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    balance: '123',
    variant: 'filled',
    status: 'success',
    handleMax: fn(),
  },
};

export const FilledWithBalanceError: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    balance: '123',
    variant: 'filled',
    status: 'error',
    handleMax: fn(),
  },
};

export const FilledWithBalanceDisabled: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    disabled: true,
    active: true,
    balance: '123',
    variant: 'filled',
    handleMax: fn(),
  },
};

export const FilledWithoutTokenIcon: Story = {
  args: {
    textAlign: 'right',
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
    active: true,
    variant: 'filled',
  },
};

export const FilledWithoutTokenIconSuccess: Story = {
  args: {
    textAlign: 'right',
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
    variant: 'filled',
    active: true,
    status: 'success',
  },
};

export const FilledWithoutTokenIconError: Story = {
  args: {
    textAlign: 'right',
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
    variant: 'filled',
    active: true,
    status: 'error',
  },
};

export const FilledWithoutTokenIconDisabled: Story = {
  args: {
    textAlign: 'right',
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
    disabled: true,
    variant: 'filled',
  },
};

export const OutlinedDefault: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    variant: 'outline',
  },
};

export const OutlinedDefaultDefaultSuccess: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    variant: 'outline',
    status: 'success',
  },
};

export const OutlineDefaultError: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    variant: 'outline',
    status: 'error',
  },
};

export const OutlineDefaultDisabled: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    disabled: true,
    active: true,
    variant: 'outline',
  },
};

export const OutlineWithBalance: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    balance: '123',
    variant: 'outline',
    handleMax: fn(),
  },
};

export const OutlineWithBalanceSuccess: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    balance: '123',
    variant: 'outline',
    status: 'success',
    handleMax: fn(),
  },
};

export const OutlineWithBalanceError: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    balance: '123',
    variant: 'outline',
    status: 'error',
    handleMax: fn(),
  },
};

export const OutlineWithBalanceDisabled: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: 'Input',
    tokenName: 'Token Name',
    disabled: true,
    active: true,
    balance: '123',
    variant: 'outline',
    handleMax: fn(),
  },
};

export const OutlineWithoutTokenIcon: Story = {
  args: {
    textAlign: 'right',
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
    active: true,
    variant: 'outline',
  },
};

export const OutlineWithoutTokenIconSuccess: Story = {
  args: {
    textAlign: 'right',
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
    variant: 'outline',
    active: true,
    status: 'success',
  },
};

export const OutlineWithoutTokenIconError: Story = {
  args: {
    textAlign: 'right',
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
    variant: 'outline',
    active: true,
    status: 'error',
  },
};

export const OutlineWithoutTokenIconDisabled: Story = {
  args: {
    textAlign: 'right',
    placeholder: 'Input',
    tokenName: 'Token Name',
    handleMax: fn(),
    disabled: true,
    variant: 'outline',
  },
};
