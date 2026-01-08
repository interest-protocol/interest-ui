import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent, fn } from '@storybook/test';

import React from 'react';
import { Div } from '@stylin.js/elements';

import Tag from '../index';

const meta: Meta<typeof Tag> = {
  title: 'Interest Protocol/Tag',
  component: Tag,
  argTypes: {
    type: {
      options: ['curve', 'stable', 'earn', 'success', 'staked', 'volatile'],
      control: { type: 'select' },
      description: 'The visual style and color of the tag',
    },
    label: {
      control: 'text',
      description: 'Optional label override (defaults to type name)',
    },
    small: {
      control: 'boolean',
      description: 'Whether to use a smaller vertical padding',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    type: 'success',
    label: 'Success Tag',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tag = canvas.getByRole('button');

    await step('Checking the tag rendering and content', async () => {
      expect(
        tag,
        'It is expected that the tag is rendered'
      ).toBeInTheDocument();
      expect(
        tag,
        'It is expected that the tag displays the correct label'
      ).toHaveTextContent(args.label as string);
    });

    await step('Checking the tag base styling', async () => {
      expect(
        tag,
        'It is expected that the tag has display flex (from stylin Button)'
      ).toHaveStyle('display: flex');
      expect(tag, 'It is expected that the font-size is 0.75rem').toHaveStyle(
        'font-size: 12px'
      );
      expect(tag, 'It is expected that the font-weight is 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        tag,
        'It is expected that the text-transform is capitalize'
      ).toHaveStyle('text-transform: capitalize');
    });

    await step('Checking tag interaction', async () => {
      await userEvent.click(tag);
      expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export const Small: Story = {
  args: {
    type: 'earn',
    small: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tag = canvas.getByRole('button');

    await step('Checking the small tag padding', async () => {
      expect(
        tag,
        'It is expected that the small tag has 0.05rem vertical padding'
      ).toHaveStyle('padding-top: 0.8px');
      expect(
        tag,
        'It is expected that the small tag has 0.05rem bottom padding'
      ).toHaveStyle('padding-bottom: 0.8px');
    });
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <Div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Tag {...args} type="curve" label="Curve" />
      <Tag {...args} type="stable" label="Stable" />
      <Tag {...args} type="earn" label="Earn" />
      <Tag {...args} type="success" label="Success" />
      <Tag {...args} type="staked" label="Staked" />
      <Tag {...args} type="volatile" label="Volatile" />
    </Div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking that all variants are rendered', async () => {
      const tags = canvas.getAllByRole('button');
      expect(tags, 'It is expected that 6 tags are rendered').toHaveLength(6);
    });
  },
};
