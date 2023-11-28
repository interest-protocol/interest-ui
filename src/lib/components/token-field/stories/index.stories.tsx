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
    label: 'Label',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
};

export const FilledWithLabelToTheLeft: Story = {
  args: {
    label: 'Label',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    placeholder: 'Input',
    labelPosition: 'left',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
};

export const FilledWithTokenError: Story = {
  args: {
    label: 'Label',
    status: 'error',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
  },
};

export const FilledWithTokenDisabled: Story = {
  args: {
    label: 'Label',
    disabled: true,
    textAlign: 'right',
    TokenIcon: TokenSVG,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
};

export const FilledWithoutTokenIcon: Story = {
  args: {
    label: 'Label',
    textAlign: 'right',
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
};

export const FilledWithoutTokenIconError: Story = {
  args: {
    label: 'Label',
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
    label: 'Label',
    textAlign: 'right',
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
};

export const OutlineWithToken: Story = {
  args: {
    label: 'Label',
    variant: 'outline',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
};

export const OutlineWithLabelToTheLeft: Story = {
  args: {
    label: 'Label',
    variant: 'outline',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    placeholder: 'Input',
    labelPosition: 'left',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
};

export const OutlineWithTokenError: Story = {
  args: {
    label: 'Label',
    status: 'error',
    variant: 'outline',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
};

export const OutlineWithTokenDisabled: Story = {
  args: {
    label: 'Label',
    disabled: true,
    variant: 'outline',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
};

export const OutlineWithoutTokenIcon: Story = {
  args: {
    label: 'Label',
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
    label: 'Label',
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
    label: 'Label',
    disabled: true,
    variant: 'outline',
    textAlign: 'right',
    placeholder: 'Input',
    labelPosition: 'right',
    tokenName: 'Token Name',
    supportingText: 'Supporting text',
  },
};
