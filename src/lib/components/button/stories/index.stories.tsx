import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library/dist';
import React from 'react';

import { PlusIcon, SwapIcon } from '../../../../storybook/icons';
import { Button } from '..';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['filled', 'outline', 'text', 'tonal'],
      control: { type: 'select' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    isIcon: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    disabled: false,
  },
};

export const FilledWithPrefix: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const FilledWithSuffix: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const FilledWithCombined: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    disabled: false,
  },
};

export const OutlineWithPrefix: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const OutlineWithSuffix: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const OutlineWithCombined: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    disabled: false,
  },
};

export const TextWithPrefix: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const TextWithSuffix: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const TextWithCombined: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const SmallTextWithCombined: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const Tonal: Story = {
  args: {
    variant: 'tonal',
    children: 'Label',
    disabled: false,
  },
};

export const TonalWithSuffix: Story = {
  args: {
    variant: 'tonal',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const TonalWithCombined: Story = {
  args: {
    variant: 'tonal',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
    disabled: false,
  },
};

export const Icon: Story = {
  args: {
    variant: 'filled',
    children: <SwapIcon />,
    disabled: false,
    isIcon: true,
  },
};

export const ButtonWithAction: Story = {
  args: {
    variant: 'outline',
    children: 'Press here',
    disabled: false,
    selected: false,
  },
};

export const TestButton: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));
  },
};
