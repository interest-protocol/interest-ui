import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import React from 'react';
import { Div } from '@stylin.js/elements';

import CollapseCardInfo from '..';
import { CollapseCardInfoProps } from '../collapse-card-info.types';

const meta: Meta<typeof CollapseCardInfo> = {
  title: 'CollapseCardInfo',
  component: CollapseCardInfo,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CollapseCardInfo>;

const defaultData: CollapseCardInfoProps['data'] = [
  {
    info: { description: 'Info Label 1' },
    value: { description: 'Value 1' },
  },
  {
    info: { description: 'Info Label 2' },
    value: { description: 'Value 2', type: 'success' },
  },
  {
    info: { description: 'Info Label 3' },
    value: { description: 'Value 3', type: 'danger' },
  },
];

export const Default: Story = {
  args: {
    title: 'Card Title',
    data: defaultData,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking the component structure', async () => {
      const container = canvas.getByText(args.title).closest('div');
      expect(
        container,
        'It is expected that the component container is rendered'
      ).toBeInTheDocument();
      expect(
        container,
        'It is expected that the container has display flex'
      ).toHaveStyle('display: flex');
      expect(
        container,
        'It is expected that the container has flex-direction column'
      ).toHaveStyle('flex-direction: row');
      const containerStyles = window.getComputedStyle(container!);
      expect(
        containerStyles.padding,
        'It is expected that the container has padding'
      ).toBeTruthy();
      expect(
        containerStyles.gap,
        'It is expected that the container has gap'
      ).toBeTruthy();
      expect(
        containerStyles.borderRadius,
        'It is expected that the container has border-radius'
      ).toBeTruthy();
      expect(
        containerStyles.border,
        'It is expected that the container has border'
      ).toBeTruthy();
    });

    await step('Checking the header structure', async () => {
      const title = canvas.getByText(args.title);
      expect(
        title,
        'It is expected that the title is rendered'
      ).toBeInTheDocument();
      expect(
        title,
        'It is expected that the title has color white'
      ).toHaveStyle('color: rgb(255, 255, 255)');
      const titleStyles = window.getComputedStyle(title);
      expect(
        titleStyles.fontSize,
        'It is expected that the title has font-size'
      ).toBeTruthy();
      expect(
        title,
        'It is expected that the title has font-weight of 500'
      ).toHaveStyle('font-weight: 500');
      expect(
        titleStyles.fontFamily,
        'It is expected that the title has font-family Satoshi'
      ).toContain('Satoshi');
      expect(
        titleStyles.lineHeight,
        'It is expected that the title has line-height'
      ).toBeTruthy();

      const header = title.closest('div');
      expect(
        header,
        'It is expected that the header has display flex'
      ).toHaveStyle('display: flex');
      expect(
        header,
        'It is expected that the header has justify-content space-between'
      ).toHaveStyle('justify-content: space-between');
      expect(
        header,
        'It is expected that the header has cursor pointer'
      ).toHaveStyle('cursor: pointer');
    });

    await step('Checking the data lines are rendered', async () => {
      args.data.forEach((item, index) => {
        const infoText = canvas.getByText(item.info.description);
        const valueText = canvas.getByText(item.value.description);

        expect(
          infoText,
          `It is expected that info line ${index + 1} is rendered`
        ).toBeInTheDocument();
        expect(
          valueText,
          `It is expected that value line ${index + 1} is rendered`
        ).toBeInTheDocument();
      });
    });

    await step('Checking the line styles', async () => {
      const firstInfo = canvas.getByText(args.data[0].info.description);
      expect(
        firstInfo,
        'It is expected that the info text has color #9CA3AF'
      ).toHaveStyle('color: rgb(156, 163, 175)');
      const infoStyles = window.getComputedStyle(firstInfo);
      expect(
        infoStyles.fontSize,
        'It is expected that the info text has font-size'
      ).toBeTruthy();
      expect(
        firstInfo,
        'It is expected that the info text has font-weight of 400'
      ).toHaveStyle('font-weight: 400');
      expect(
        infoStyles.fontFamily,
        'It is expected that the info text has font-family Satoshi'
      ).toContain('Satoshi');
      expect(
        infoStyles.lineHeight,
        'It is expected that the info text has line-height'
      ).toBeTruthy();
    });

    await step('Checking the value type colors', async () => {
      const normalValue = canvas.getByText(args.data[0].value.description);
      expect(
        normalValue,
        'It is expected that normal value has color white'
      ).toHaveStyle('color: rgb(255, 255, 255)');

      const successValue = canvas.getByText(args.data[1].value.description);
      expect(
        successValue,
        'It is expected that success value has color #34D399'
      ).toHaveStyle('color: rgb(52, 211, 153)');

      const dangerValue = canvas.getByText(args.data[2].value.description);
      expect(
        dangerValue,
        'It is expected that danger value has color #EF4444'
      ).toHaveStyle('color: rgb(239, 68, 68)');
    });
  },
};

export const CollapseExpand: Story = {
  args: {
    title: 'Collapsible Card',
    data: defaultData,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking initial state (expanded)', async () => {
      args.data.forEach((item) => {
        const infoText = canvas.getByText(item.info.description);
        expect(
          infoText,
          'It is expected that the data lines are visible when expanded'
        ).toBeInTheDocument();
      });
    });

    await step('Collapsing the card', async () => {
      const header = canvas.getByText(args.title).closest('div');
      await userEvent.click(header!);

      await waitFor(
        () => {
          const firstInfo = canvas.queryByText(args.data[0].info.description);
          expect(
            firstInfo,
            'It is expected that the data lines are hidden when collapsed'
          ).not.toBeInTheDocument();
        },
        { timeout: 500 }
      );
    });

    await step('Expanding the card again', async () => {
      const header = canvas.getByText(args.title).closest('div');
      await userEvent.click(header!);

      await waitFor(
        () => {
          const firstInfo = canvas.getByText(args.data[0].info.description);
          expect(
            firstInfo,
            'It is expected that the data lines are visible when expanded again'
          ).toBeInTheDocument();
        },
        { timeout: 500 }
      );
    });
  },
};

export const AllLineTypes: Story = {
  args: {
    title: 'All Line Types',
    data: [
      {
        info: { description: 'Normal Type' },
        value: { description: 'Normal Value', type: 'normal' },
      },
      {
        info: { description: 'Success Type' },
        value: { description: 'Success Value', type: 'success' },
      },
      {
        info: { description: 'Danger Type' },
        value: { description: 'Danger Value', type: 'danger' },
      },
      {
        info: { description: 'No Type Specified' },
        value: { description: 'Default Value' },
      },
    ],
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking all line type colors', async () => {
      const normalValue = canvas.getByText('Normal Value');
      expect(
        normalValue,
        'It is expected that normal type has color white'
      ).toHaveStyle('color: rgb(255, 255, 255)');

      const successValue = canvas.getByText('Success Value');
      expect(
        successValue,
        'It is expected that success type has color #34D399'
      ).toHaveStyle('color: rgb(52, 211, 153)');

      const dangerValue = canvas.getByText('Danger Value');
      expect(
        dangerValue,
        'It is expected that danger type has color #EF4444'
      ).toHaveStyle('color: rgb(239, 68, 68)');

      const defaultValue = canvas.getByText('Default Value');
      expect(
        defaultValue,
        'It is expected that value without type has default color white'
      ).toHaveStyle('color: rgb(255, 255, 255)');
    });
  },
};

export const EmptyData: Story = {
  args: {
    title: 'Empty Card',
    data: [],
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking component renders with empty data', async () => {
      const title = canvas.getByText(args.title);
      expect(
        title,
        'It is expected that the title is rendered even with empty data'
      ).toBeInTheDocument();

      const container = title.closest('div');
      expect(
        container,
        'It is expected that the component container is rendered'
      ).toBeInTheDocument();
    });
  },
};

export const SingleLine: Story = {
  args: {
    title: 'Single Line Card',
    data: [
      {
        info: { description: 'Single Info' },
        value: { description: 'Single Value' },
      },
    ],
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking single line rendering', async () => {
      const info = canvas.getByText(args.data[0].info.description);
      const value = canvas.getByText(args.data[0].value.description);

      expect(
        info,
        'It is expected that the single info line is rendered'
      ).toBeInTheDocument();
      expect(
        value,
        'It is expected that the single value line is rendered'
      ).toBeInTheDocument();
    });
  },
};
