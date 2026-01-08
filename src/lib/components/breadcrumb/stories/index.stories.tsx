import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import React from 'react';
import { Div } from '@stylin.js/elements';

import Breadcrumb from '../index';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Interest Protocol/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    basePage: {
      control: { type: 'text' },
      description: 'The base/parent page name',
    },
    currentPage: {
      control: { type: 'text' },
      description: 'The current page name',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    basePage: 'Home',
    currentPage: 'Products',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking the breadcrumb structure', async () => {
      const container = canvas.getByRole('navigation');
      expect(
        container,
        'It is expected that the breadcrumb container is rendered'
      ).toBeInTheDocument();
      expect(
        container,
        'It is expected that the container has display flex'
      ).toHaveStyle('display: flex');
      expect(
        container,
        'It is expected that the container has align-items center'
      ).toHaveStyle('align-items: center');
      expect(
        container,
        'It is expected that the container has gap of 0.5rem'
      ).toHaveStyle('gap: 8px');
    });

    await step('Checking the base page link', async () => {
      const link = canvas.getByRole('link');
      expect(
        link,
        'It is expected that the base page link is rendered'
      ).toBeInTheDocument();
      expect(
        link,
        `It is expected that the link has href /${args.basePage.toLowerCase()}`
      ).toHaveAttribute('href', `/${args.basePage.toLowerCase()}`);

      const baseParagraph = link.querySelector('p');
      expect(
        baseParagraph,
        'It is expected that the base page text is rendered'
      ).toBeInTheDocument();
      expect(
        baseParagraph?.textContent,
        `It is expected that the base page text is ${args.basePage}`
      ).toBe(args.basePage);

      await step('Checking the base page font styles', async () => {
        expect(
          baseParagraph,
          'It is expected that the text will be coloured #9CA3AF'
        ).toHaveStyle('color: #9CA3AF');
        expect(
          baseParagraph,
          'It is expected that the text will have a font size of 0.875rem (14px)'
        ).toHaveStyle('font-size: 14px');
        expect(
          baseParagraph,
          'It is expected that the text will have a font-weight of 500'
        ).toHaveStyle('font-weight: 500');
        expect(
          baseParagraph,
          'It is expected that the text will have line-height of 1.25rem'
        ).toHaveStyle('line-height: 20px');
        expect(
          baseParagraph,
          'It is expected that the text will have the font-family Inter'
        ).toHaveStyle('font-family: Satoshi');
      });
    });

    await step('Checking the arrow separator icon', async () => {
      const svg = canvasElement.querySelector('svg');
      expect(
        svg,
        'It is expected that the arrow icon is rendered'
      ).toBeInTheDocument();
      expect(
        svg,
        'It is expected that the icon has max-width of 0.75rem'
      ).toHaveStyle('max-width: 12px');
      expect(
        svg,
        'It is expected that the icon has max-height of 0.75rem'
      ).toHaveStyle('max-height: 12px');
      expect(svg, 'It is expected that the icon has width 100%').toHaveStyle(
        'width: 12px'
      );
      expect(svg, 'It is expected that the icon has color #9CA3AF').toHaveStyle(
        'color: #9CA3AF'
      );
    });

    await step('Checking the current page text', async () => {
      const paragraphs = canvasElement.querySelectorAll('p');
      const currentPageParagraph = paragraphs[1];

      expect(
        currentPageParagraph,
        'It is expected that the current page text is rendered'
      ).toBeInTheDocument();
      expect(
        currentPageParagraph?.textContent,
        `It is expected that the current page text is ${args.currentPage}`
      ).toBe(args.currentPage);

      await step('Checking the current page font styles', async () => {
        expect(
          currentPageParagraph,
          'It is expected that the text will be coloured #9CA3AF'
        ).toHaveStyle('color: #9CA3AF');
        expect(
          currentPageParagraph,
          'It is expected that the text will have a font size of 0.875rem (14px)'
        ).toHaveStyle('font-size: 14px');
        expect(
          currentPageParagraph,
          'It is expected that the text will have a font-weight of 500'
        ).toHaveStyle('font-weight: 500');
        expect(
          currentPageParagraph,
          'It is expected that the text will have line-height of 1.25rem'
        ).toHaveStyle('line-height: 20px');
        expect(
          currentPageParagraph,
          'It is expected that the text will have the font-family Inter'
        ).toHaveStyle('font-family: Satoshi');
      });
    });
  },
};

export const LongPageNames: Story = {
  args: {
    basePage: 'Dashboard',
    currentPage: 'User Settings',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking the breadcrumb with longer names', async () => {
      const link = canvas.getByRole('link');
      const baseParagraph = link.querySelector('p');
      expect(
        baseParagraph?.textContent,
        `It is expected that the base page text is ${args.basePage}`
      ).toBe(args.basePage);

      const paragraphs = canvasElement.querySelectorAll('p');
      const currentPageParagraph = paragraphs[1];
      expect(
        currentPageParagraph?.textContent,
        `It is expected that the current page text is ${args.currentPage}`
      ).toBe(args.currentPage);
    });
  },
};

export const MultipleWords: Story = {
  args: {
    basePage: 'Shopping Cart',
    currentPage: 'Checkout Process',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking breadcrumb with multi-word pages', async () => {
      const link = canvas.getByRole('link');
      expect(
        link,
        'It is expected that the link converts multi-word base page to lowercase'
      ).toHaveAttribute('href', `/${args.basePage.toLowerCase()}`);
    });
  },
};

export const AllStates: Story = {
  render: () => (
    <Div display="flex" flexDirection="column" gap="1rem">
      <Breadcrumb basePage="Home" currentPage="Products" />
      <Breadcrumb basePage="Dashboard" currentPage="Settings" />
      <Breadcrumb basePage="Blog" currentPage="Article Title" />
      <Breadcrumb basePage="Account" currentPage="Profile" />
    </Div>
  ),
};
