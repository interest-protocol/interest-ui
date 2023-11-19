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
    TokenName: 'Token Name',
    supportingText: 'Supporting text',
    topLabel: 'Label',
    topLabelAlignment: 'right',
  },
};

export const FilledWithLabelToTheLeft: Story = {
  args: {
    placeholder: 'Input',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    TokenName: 'Token Name',
    supportingText: 'Supporting text',
    topLabel: 'Label',
    topLabelAlignment: 'left',
  },
};

export const FilledWithTokenError: Story = {
  args: {
    placeholder: 'Input',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    TokenName: 'Token Name',
    error: 'Supporting text',
    topLabel: 'Label',
    topLabelAlignment: 'right',
  },
};

export const FilledWithTokenDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Input',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    TokenName: 'Token Name',
    supportingText: 'Supporting text',
    topLabel: 'Label',
    topLabelAlignment: 'right',
  },
};

export const FilledWithoutTokenIcon: Story = {
  args: {
    supportingText: 'Supporting text',
    placeholder: 'Input',
    textAlign: 'right',
    TokenName: 'Token Name',
    topLabel: 'Label',
    topLabelAlignment: 'right',
  },
};

export const FilledWithoutTokenIconError: Story = {
  args: {
    placeholder: 'Input',
    textAlign: 'right',
    TokenName: 'Token Name',
    error: 'Supporting text',
    topLabel: 'Label',
    topLabelAlignment: 'right',
  },
};

export const FilledWithoutTokenIconDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Input',
    textAlign: 'right',
    TokenName: 'Token Name',
    topLabel: 'Label',
    supportingText: 'Supporting text',
    topLabelAlignment: 'right',
  },
};

export const OutlineWithToken: Story = {
  args: {
    outline: true,
    placeholder: 'Input',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    TokenName: 'Token Name',
    supportingText: 'Supporting text',
    topLabel: 'Label',
    topLabelAlignment: 'right',
  },
};

export const OutlineWithLabelToTheLeft: Story = {
  args: {
    outline: true,
    placeholder: 'Input',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    TokenName: 'Token Name',
    supportingText: 'Supporting text',
    topLabel: 'Label',
    topLabelAlignment: 'left',
  },
};

export const OutlineWithTokenError: Story = {
  args: {
    outline: true,
    placeholder: 'Input',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    TokenName: 'Token Name',
    error: 'Supporting text',
    topLabel: 'Label',
    topLabelAlignment: 'right',
  },
};

export const OutlineWithTokenDisabled: Story = {
  args: {
    outline: true,
    disabled: true,
    placeholder: 'Input',
    textAlign: 'right',
    TokenIcon: TokenSVG,
    TokenName: 'Token Name',
    supportingText: 'Supporting text',
    topLabel: 'Label',
    topLabelAlignment: 'right',
  },
};

export const OutlineWithoutTokenIcon: Story = {
  args: {
    outline: true,
    supportingText: 'Supporting text',
    placeholder: 'Input',
    textAlign: 'right',
    TokenName: 'Token Name',
    topLabel: 'Label',
    topLabelAlignment: 'right',
  },
};

export const OutlineWithoutTokenIconError: Story = {
  args: {
    outline: true,
    placeholder: 'Input',
    textAlign: 'right',
    TokenName: 'Token Name',
    error: 'Supporting text',
    topLabel: 'Label',
    topLabelAlignment: 'right',
  },
};

export const OutlineWithoutTokenIconDisabled: Story = {
  args: {
    outline: true,
    disabled: true,
    placeholder: 'Input',
    textAlign: 'right',
    TokenName: 'Token Name',
    topLabel: 'Label',
    supportingText: 'Supporting text',
    topLabelAlignment: 'right',
  },
};
