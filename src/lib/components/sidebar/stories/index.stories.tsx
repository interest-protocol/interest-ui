import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, waitFor } from '@storybook/test';
import Sidebar from '../index';

import React from 'react';
import { Div } from '@stylin.js/elements';

const meta = {
  title: 'Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    onClose: {
      action: 'onClose',
      description: 'Callback when sidebar closes',
    },
    isDirectionalRight: {
      control: 'boolean',
      description: 'Position sidebar on right side',
    },
    SidebarContent: {
      description: 'Content to display inside sidebar',
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => {},
    isDirectionalRight: false,
    SidebarContent: (
      <Div data-testid="sidebar-content" color="#fff" p="1rem">
        Sidebar Content
      </Div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic sidebar positioned on the left side. The sidebar is closed by default and shows a toggle button to open it.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render sidebar toggle button', async () => {
      const button = canvas.getByRole('button').parentElement;
      await waitFor(() => {
        expect(
          button,
          'It is expected that the sidebar toggle button is rendered'
        ).toBeInTheDocument();
      });
    });

    await step('should not show menu when closed', async () => {
      const menu = canvas.queryByTestId('directional-menu');
      await waitFor(() => {
        expect(
          menu,
          'It is expected that the directional menu is not visible when sidebar is closed'
        ).not.toBeInTheDocument();
      });
    });
  },
};

export const MenuOpen: Story = {
  args: {
    onClose: () => {},
    isDirectionalRight: false,
    SidebarContent: (
      <Div data-testid="sidebar-content" color="#fff">
        Menu Items Here
      </Div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive sidebar that opens when the toggle button is clicked. Demonstrates the open state and content display behavior.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should open menu on click', async () => {
      const toggleButton = canvas.getAllByRole('button')[0];
      toggleButton.click();

      await waitFor(
        () => {
          const content = canvas.getByTestId('sidebar-content');
          expect(
            content,
            'It is expected that the sidebar content is visible after clicking the toggle button'
          ).toBeInTheDocument();
        },
        { timeout: 1000 }
      );
    });

    await step('should display sidebar content when open', async () => {
      const content = canvas.getByTestId('sidebar-content');
      await waitFor(() => {
        expect(
          content,
          "It is expected that the sidebar content displays 'Menu Items Here'"
        ).toHaveTextContent('Menu Items Here');
      });
    });
  },
};

export const DirectionalRight: Story = {
  args: {
    onClose: () => {},
    isDirectionalRight: true,
    SidebarContent: (
      <Div data-testid="sidebar-content" color="#fff" p="1rem">
        Right Side Menu
      </Div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Sidebar positioned on the right side of the screen. The isDirectionalRight prop controls the sidebar's position and slide-in direction.",
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render sidebar with right direction prop', async () => {
      const button = canvas.getAllByRole('button')[0];
      await waitFor(() => {
        expect(
          button,
          'It is expected that the sidebar toggle button is rendered with right direction'
        ).toBeInTheDocument();
      });
    });

    await step('should open menu from right side', async () => {
      const toggleButton = canvas.getAllByRole('button')[0];
      toggleButton.click();

      await waitFor(
        () => {
          const content = canvas.getByTestId('sidebar-content');
          expect(
            content,
            'It is expected that the sidebar content is visible when opened from the right side'
          ).toBeInTheDocument();
        },
        { timeout: 1000 }
      );
    });
  },
};
