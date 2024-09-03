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
    Suffix: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: '--',
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
    placeholder: '--',
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
    placeholder: '--',
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
    placeholder: '--',
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
    placeholder: '--',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    balance: '123',
    variant: 'filled',
    handleMax: fn(),
  },
};

export const FilledWithoutTokenIcon: Story = {
  args: {
    textAlign: 'right',
    placeholder: '--',
    tokenName: 'Token Name',
    handleMax: fn(),
    active: true,
    variant: 'filled',
  },
};

export const OutlinedDefault: Story = {
  args: {
    textAlign: 'right',
    TokenIcon: <TokenSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />,
    placeholder: '--',
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
    placeholder: '--',
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
    placeholder: '--',
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
    placeholder: '--',
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
    placeholder: '--',
    tokenName: 'Token Name',
    disabled: false,
    active: true,
    balance: '123',
    variant: 'outline',
    handleMax: fn(),
  },
};

export const OutlineWithoutTokenIcon: Story = {
  args: {
    textAlign: 'right',
    placeholder: '--',
    tokenName: 'Token Name',
    handleMax: fn(),
    active: true,
    variant: 'outline',
  },
};
