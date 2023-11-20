import { Meta, StoryObj } from '@storybook/react';

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
  },
};

export default meta;

type Story = StoryObj<typeof TokenField>;

export const FilledWithToken: Story = {
  args: {
    placeholder: 'Input',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
    label: 'Label',
    labelPosition: 'right',
  },
};

export const FilledWithLabelToTheLeft: Story = {
  args: {
    placeholder: 'Input',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
    label: 'Label',
    labelPosition: 'left',
  },
};

export const FilledWithTokenError: Story = {
  args: {
    placeholder: 'Input',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    tokenName: 'Token Name',
    error: 'Supporting text',
    label: 'Label',
    labelPosition: 'right',
  },
};

export const FilledWithTokenDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Input',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
    label: 'Label',
    labelPosition: 'right',
  },
};

export const FilledWithoutTokenIcon: Story = {
  args: {
    supportingText: 'Supporting text',
    placeholder: 'Input',
    textAlign: 'right',
    tokenName: 'Token Name',
    label: 'Label',
    labelPosition: 'right',
  },
};

export const FilledWithoutTokenIconError: Story = {
  args: {
    placeholder: 'Input',
    textAlign: 'right',
    tokenName: 'Token Name',
    error: 'Supporting text',
    label: 'Label',
    labelPosition: 'right',
  },
};

export const FilledWithoutTokenIconDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Input',
    textAlign: 'right',
    tokenName: 'Token Name',
    label: 'Label',
    supportingText: 'Supporting text',
    labelPosition: 'right',
  },
};

export const OutlineWithToken: Story = {
  args: {
    outlined: true,
    placeholder: 'Input',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
    label: 'Label',
    labelPosition: 'right',
  },
};

export const OutlineWithLabelToTheLeft: Story = {
  args: {
    outlined: true,
    placeholder: 'Input',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
    label: 'Label',
    labelPosition: 'left',
  },
};

export const OutlineWithTokenError: Story = {
  args: {
    outlined: true,
    placeholder: 'Input',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    tokenName: 'Token Name',
    error: 'Supporting text',
    label: 'Label',
    labelPosition: 'right',
  },
};

export const OutlineWithTokenDisabled: Story = {
  args: {
    outlined: true,
    disabled: true,
    placeholder: 'Input',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
    label: 'Label',
    labelPosition: 'right',
  },
};

export const OutlineWithoutTokenIcon: Story = {
  args: {
    outlined: true,
    supportingText: 'Supporting text',
    placeholder: 'Input',
    textAlign: 'right',
    tokenName: 'Token Name',
    label: 'Label',
    labelPosition: 'right',
  },
};

export const OutlineWithoutTokenIconError: Story = {
  args: {
    outlined: true,
    placeholder: 'Input',
    textAlign: 'right',
    tokenName: 'Token Name',
    error: 'Supporting text',
    label: 'Label',
    labelPosition: 'right',
  },
};

export const OutlineWithoutTokenIconDisabled: Story = {
  args: {
    outlined: true,
    disabled: true,
    placeholder: 'Input',
    textAlign: 'right',
    tokenName: 'Token Name',
    label: 'Label',
    supportingText: 'Supporting text',
    labelPosition: 'right',
  },
};
