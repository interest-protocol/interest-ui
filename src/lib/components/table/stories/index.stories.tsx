import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import React from 'react';
import { Div } from '@stylin.js/elements';

import Table from '../index';
import { TableHeaderProps } from '../table.types';

const meta: Meta<typeof Table> = {
  title: 'Interest Protocol/Table',
  component: Table,
  argTypes: {
    isLoading: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

const mockData: TableHeaderProps = {
  title: [
    { description: 'Name', isSortable: true, position: 'left' },
    { description: 'Value', isSortable: true, position: 'right' },
    { description: 'Status', isSortable: false, position: 'center' },
  ],
  rows: [
    {
      cells: [
        { Title: 'Product A', position: 'left' },
        { Title: '$1.5M', position: 'right' },
        { Title: 'Active', position: 'center', color: '#10B981' },
      ],
    },
    {
      cells: [
        { Title: 'Product B', position: 'left' },
        { Title: '$850K', position: 'right' },
        { Title: 'Pending', position: 'center', color: '#F59E0B' },
      ],
    },
    {
      cells: [
        { Title: 'Product C', position: 'left' },
        { Title: '$2.3M', position: 'right' },
        { Title: 'Active', position: 'center', color: '#10B981' },
      ],
    },
  ],
  gridTemplateColumns: '1fr 1fr 1fr',
};

export const Default: Story = {
  args: mockData,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking the table structure', async () => {
      const table = canvas.getByRole('custom-table');

      expect(
        table,
        'It is expected that the table is rendered'
      ).toBeInTheDocument();

      expect(
        table,
        'It is expected that the table has a border-radius of 0.5rem'
      ).toHaveStyle('border-radius: 8px');

      expect(
        table,
        'It is expected that the table has border-color #1F2937'
      ).toHaveStyle('border-color: #1F2937');

      expect(table, 'It is expected that the table has width 100%').toHaveStyle(
        'size: 100%'
      );
    });

    await step('Checking the table headers', async () => {
      const headers = canvas.getAllByText(/Name|Value|Status/);

      expect(
        headers.length,
        'It is expected that the table has 3 header columns'
      ).toBe(3);

      expect(
        headers[0].textContent,
        'It is expected that the first header is "Name"'
      ).toBe('Name');

      expect(
        headers[1].textContent,
        'It is expected that the second header is "Value"'
      ).toBe('Value');

      expect(
        headers[2].textContent,
        'It is expected that the third header is "Status"'
      ).toBe('Status');
    });

    await step('Checking the table rows', async () => {
      const productA = canvas.getByText('Product A');
      const productB = canvas.getByText('Product B');
      const productC = canvas.getByText('Product C');

      expect(
        productA,
        'It is expected that Product A is rendered'
      ).toBeInTheDocument();

      expect(
        productB,
        'It is expected that Product B is rendered'
      ).toBeInTheDocument();

      expect(
        productC,
        'It is expected that Product C is rendered'
      ).toBeInTheDocument();
    });
  },
};

export const WithSorting: Story = {
  args: mockData,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking initial order', async () => {
      const rows = canvas.getAllByText(/Product/);

      expect(
        rows[0].textContent,
        'It is expected that the first row is Product A'
      ).toBe('Product A');
    });

    await step('Testing sort functionality', async () => {
      const valueHeader = canvas.getByText('Value');

      expect(
        valueHeader,
        'It is expected that the Value header is clickable'
      ).toBeInTheDocument();

      await userEvent.click(valueHeader);

      await waitFor(() => {
        const rows = canvas.getAllByText(/Product/);
        expect(
          rows[0].textContent,
          'It is expected that after sorting, Product B appears first (lowest value)'
        ).toBe('Product B');
      });
    });

    await step('Testing reverse sort', async () => {
      const valueHeader = canvas.getByText('Value');

      await userEvent.click(valueHeader);

      await waitFor(() => {
        const rows = canvas.getAllByText(/Product/);
        expect(
          rows[0].textContent,
          'It is expected that after reverse sorting, Product C appears first (highest value)'
        ).toBe('Product C');
      });
    });
  },
};

export const WithLinks: Story = {
  args: {
    ...mockData,
    rows: [
      {
        link: '/product-a',
        target: '_blank',
        cells: [
          { Title: 'Product A', position: 'left' },
          { Title: '$1.5M', position: 'right' },
          { Title: 'Active', position: 'center', color: '#10B981' },
        ],
      },
      {
        link: '/product-b',
        cells: [
          { Title: 'Product B', position: 'left' },
          { Title: '$850K', position: 'right' },
          { Title: 'Pending', position: 'center', color: '#F59E0B' },
        ],
      },
    ],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking clickable rows', async () => {
      const productA = canvas.getByText('Product A');
      const row = productA.closest('a');

      expect(
        row,
        'It is expected that the row with Product A is wrapped in a link'
      ).toBeInTheDocument();

      expect(
        row,
        'It is expected that the link has href="/product-a"'
      ).toHaveAttribute('href', '/product-a');

      expect(
        row,
        'It is expected that the link has target="_blank"'
      ).toHaveAttribute('target', '_blank');
    });
  },
};

export const LoadingState: Story = {
  args: {
    ...mockData,
    isLoading: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking loading state', async () => {
      const table = canvas.getByRole('custom-table');

      expect(
        table,
        'It is expected that the table is rendered in loading state'
      ).toBeInTheDocument();
    });
  },
};

export const EmptyTable: Story = {
  args: {
    title: [
      { description: 'Name', isSortable: true, position: 'left' },
      { description: 'Value', isSortable: true, position: 'right' },
    ],
    rows: [],
    gridTemplateColumns: '1fr 1fr',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking empty table', async () => {
      const headers = canvas.getAllByText(/Name|Value/);

      expect(
        headers.length,
        'It is expected that headers are still rendered'
      ).toBe(2);

      const products = canvas.queryAllByText(/Product/);

      expect(products.length, 'It is expected that no rows are rendered').toBe(
        0
      );
    });
  },
};

export const CustomGridColumns: Story = {
  args: {
    ...mockData,
    gridTemplateColumns: '2fr 1fr 1fr',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking custom grid columns', async () => {
      const table = canvas.getByRole('custom-table');

      expect(
        table,
        'It is expected that the table is rendered with custom grid columns'
      ).toBeInTheDocument();
    });
  },
};

export const AllVariants: Story = {
  render: () => (
    <Div display="flex" flexDirection="column" gap="2rem">
      <Div>
        <h3 style={{ color: '#E2E2E6', marginBottom: '1rem' }}>
          Default Table
        </h3>
        <Table {...mockData} />
      </Div>

      <Div>
        <h3 style={{ color: '#E2E2E6', marginBottom: '1rem' }}>
          With Custom Colors
        </h3>
        <Table
          title={mockData.title}
          rows={[
            {
              cells: [
                { Title: 'Item 1', position: 'left', color: '#10B981' },
                { Title: '$1000', position: 'right', color: '#3B82F6' },
                { Title: 'Complete', position: 'center', color: '#10B981' },
              ],
            },
          ]}
          gridTemplateColumns="1fr 1fr 1fr"
        />
      </Div>

      <Div>
        <h3 style={{ color: '#E2E2E6', marginBottom: '1rem' }}>
          Loading State
        </h3>
        <Table {...mockData} isLoading={true} />
      </Div>
    </Div>
  ),
};
