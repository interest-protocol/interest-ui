import { Meta, StoryObj } from '@storybook/react';
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
};

export const FilledWithoutTokenIcon: Story = {
  args: {
    Label: 'Label',
    textAlign: 'right',
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
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
};
