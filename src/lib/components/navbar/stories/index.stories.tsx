import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, waitFor } from '@storybook/test';
import Navbar from '../';

const meta = {
  title: 'Interest Protocol/Navbar',
  component: Navbar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    Routes: {
      control: 'object',
      description: 'Mapping of route keys to route configurations',
    },
    data: {
      control: 'object',
      description: 'Mapping of route keys to display titles',
    },
    asPath: {
      control: 'text',
      description: 'The current active path',
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultRoutes = {
  home: { href: '/', isExternalLink: false },
  about: { href: '/about', isExternalLink: false },
  blog: { href: '/blog', isExternalLink: false },
  contact: { href: '/contact', isExternalLink: false },
};

const defaultData = {
  home: 'Home',
  about: 'About',
  blog: 'Blog',
  contact: 'Contact',
};

export const Default: Story = {
  args: {
    Routes: defaultRoutes,
    data: defaultData,
    asPath: '/',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render navbar navigation', async () => {
      const nav = canvas.getByRole('navigation');
      await waitFor(() =>
        expect(nav, 'Navigation element should be rendered').toBeInTheDocument()
      );
    });

    await step('should render all navbar items', async () => {
      const links = canvas.getAllByRole('link');
      await waitFor(() =>
        expect(links, 'Should render exactly 4 links').toHaveLength(4)
      );
    });

    await step('should display all titles correctly', async () => {
      const homeLink = canvas.getByText('Home');
      const aboutLink = canvas.getByText('About');
      const blogLink = canvas.getByText('Blog');
      const contactLink = canvas.getByText('Contact');

      await waitFor(() => {
        expect(homeLink, 'Home link should be displayed').toBeInTheDocument();
        expect(aboutLink, 'About link should be displayed').toBeInTheDocument();
        expect(blogLink, 'Blog link should be displayed').toBeInTheDocument();
        expect(
          contactLink,
          'Contact link should be displayed'
        ).toBeInTheDocument();
      });
    });

    await step('should highlight the active item', async () => {
      const homeText = canvas.getByText('Home');
      const homeItem = homeText.closest('li');

      await waitFor(() => {
        expect(homeItem, 'Active item should have white color').toHaveStyle({
          color: '#fff',
        });
        expect(homeItem, 'Active item should have font weight 500').toHaveStyle(
          { fontWeight: '500' }
        );
      });
    });

    await step('should render navbar with correct layout', async () => {
      const nav = canvas.getByRole('navigation');

      await waitFor(() => {
        expect(nav, 'Navbar should use flex display').toHaveStyle({
          display: 'flex',
        });
        expect(nav, 'Navbar should have 32px gap between items').toHaveStyle({
          gap: '32px',
        });
        expect(nav, 'Navbar should center items horizontally').toHaveStyle({
          justifyContent: 'center',
        });
      });
    });

    await step(
      'should render inactive items with correct styling',
      async () => {
        const aboutText = canvas.getByText('About');
        const aboutItem = aboutText.closest('li');

        await waitFor(() => {
          expect(aboutItem, 'Inactive item should have gray color').toHaveStyle(
            { color: '#9CA3AF' }
          );
          expect(
            aboutItem,
            'Inactive item should have font weight 400'
          ).toHaveStyle({ fontWeight: '400' });
        });
      }
    );
  },
};

export const WithExternalLink: Story = {
  args: {
    Routes: {
      home: { href: '/', isExternalLink: false },
      about: { href: '/about', isExternalLink: false },
      docs: { href: 'https://docs.example.com', isExternalLink: true },
    },
    data: {
      home: 'Home',
      about: 'About',
      docs: 'Documentation',
    },
    asPath: '/',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render navbar with external link', async () => {
      const links = canvas.getAllByRole('link');
      await waitFor(() =>
        expect(
          links,
          'Should render 3 links including external link'
        ).toHaveLength(3)
      );
    });

    await step('should have external link with target blank', async () => {
      const externalLink = canvas.getByRole('link', { name: /Documentation/i });
      await waitFor(() =>
        expect(
          externalLink,
          "External link should have target='_blank'"
        ).toHaveAttribute('target', '_blank')
      );
    });

    await step('should display external link icon', async () => {
      const svgs = canvas.getAllByRole('img', { hidden: true });
      await waitFor(() =>
        expect(svgs.length, 'Should render external link icon').toBeGreaterThan(
          0
        )
      );
    });
  },
};

export const ActiveAbout: Story = {
  args: {
    Routes: defaultRoutes,
    data: defaultData,
    asPath: '/about',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render navbar with active about item', async () => {
      const nav = canvas.getByRole('navigation');
      await waitFor(() =>
        expect(nav, 'Navigation element should be rendered').toBeInTheDocument()
      );
    });

    await step('should highlight about as active item', async () => {
      const aboutText = canvas.getByText('About');
      const aboutItem = aboutText.closest('li');

      await waitFor(() => {
        expect(
          aboutItem,
          'Active About item should have white color'
        ).toHaveStyle({ color: '#fff' });
        expect(
          aboutItem,
          'Active About item should have font weight 500'
        ).toHaveStyle({ fontWeight: '500' });
      });
    });

    await step('should show home as inactive', async () => {
      const homeText = canvas.getByText('Home');
      const homeItem = homeText.closest('li');

      await waitFor(() => {
        expect(
          homeItem,
          'Inactive Home item should have gray color'
        ).toHaveStyle({ color: '#9CA3AF' });
        expect(
          homeItem,
          'Inactive Home item should have font weight 400'
        ).toHaveStyle({ fontWeight: '400' });
      });
    });

    await step('should show correct href for about link', async () => {
      const aboutLink = canvas.getByRole('link', { name: /About/i });
      await waitFor(() =>
        expect(
          aboutLink,
          'About link should have correct href'
        ).toHaveAttribute('href', '/about')
      );
    });
  },
};

export const SingleItem: Story = {
  args: {
    Routes: {
      home: { href: '/', isExternalLink: false },
    },
    data: {
      home: 'Home',
    },
    asPath: '/',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('should render navbar with single item', async () => {
      const links = canvas.getAllByRole('link');
      await waitFor(() =>
        expect(links, 'Should render exactly 1 link').toHaveLength(1)
      );
    });

    await step('should display single item as active', async () => {
      const homeText = canvas.getByText('Home');
      const homeItem = homeText.closest('li');

      await waitFor(() => {
        expect(
          homeItem,
          'Single item should have white color when active'
        ).toHaveStyle({ color: '#fff' });
        expect(
          homeItem,
          'Single item should have font weight 500 when active'
        ).toHaveStyle({ fontWeight: '500' });
      });
    });
  },
};
