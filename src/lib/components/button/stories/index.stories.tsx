import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import React from 'react';
import { Div } from '@stylin.js/elements';

import { Button } from '..';

const meta: Meta<typeof Button> = {
  title: 'Interest Protocol/Button',
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
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const AllVariants: Story = {
  render: () => (
    <Div display="flex" gap="1rem" flexWrap="wrap">
      <Button variant="filled">Filled</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="text">Text</Button>
      <Button variant="tonal">Tonal</Button>
    </Div>
  ),
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    disabled: false,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');

    await step('Checking the button structure', async () => {
      expect(
        button.tagName,
        'It is expected that the button is an html BUTTON element'
      ).toBe('BUTTON');
      expect(
        button,
        'it is expected that the button is rendered'
      ).toBeInTheDocument();
      expect(
        button,
        'It is expected that the button has a border-radius of 12px'
      ).toHaveStyle('border-radius: 12px');
      expect(
        button,
        'It is expected that the button has a cursor pointer'
      ).toHaveStyle('cursor: pointer');
      expect(button, 'It is expected that the button is flex').toHaveStyle(
        'display: flex'
      );
      expect(
        button,
        'It is expected that the button has justify-content center'
      ).toHaveStyle('justify-content: center');
      expect(
        button,
        'It is expected that the button has a background #B4C5FF'
      ).toHaveStyle('background-color: #B4C5FF');
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #002A78'
        ).toHaveStyle('color: #002A78');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Satoshi'
        ).toHaveStyle('font-family: Satoshi');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
      });
    });
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    disabled: false,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');

    await step('Checking the button structure', async () => {
      expect(
        button.tagName,
        'It is expected that the button is an html BUTTON element'
      ).toBe('BUTTON');
      expect(
        button,
        'it is expected that the button is rendered'
      ).toBeInTheDocument();
      expect(
        button,
        'It is expected that the button has a border-radius of 12px'
      ).toHaveStyle('border-radius: 12px');
      expect(
        button,
        'It is expected that the button has a cursor pointer'
      ).toHaveStyle('cursor: pointer');
      expect(button, 'It is expected that the button is flex').toHaveStyle(
        'display: flex'
      );
      expect(
        button,
        'It is expected that the button has justify-content space-between'
      ).toHaveStyle('justify-content: space-between');
      expect(
        button,
        'It is expected that the button has a border 1px solid #909094'
      ).toHaveStyle('border: 1px solid #909094');
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #E2E2E6'
        ).toHaveStyle('color: #E2E2E6');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Satoshi'
        ).toHaveStyle('font-family: Satoshi');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
      });
    });
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    disabled: false,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');

    await step('Checking the button structure', async () => {
      expect(
        button.tagName,
        'It is expected that the button is an html BUTTON element'
      ).toBe('BUTTON');
      expect(
        button,
        'it is expected that the button is rendered'
      ).toBeInTheDocument();
      expect(
        button,
        'It is expected that the button has a border-radius of 12px'
      ).toHaveStyle('border-radius: 12px');
      expect(
        button,
        'It is expected that the button has a cursor pointer'
      ).toHaveStyle('cursor: pointer');
      expect(button, 'It is expected that the button is flex').toHaveStyle(
        'display: flex'
      );
      expect(
        button,
        'It is expected that the button has justify-content space-between'
      ).toHaveStyle('justify-content: space-between');
      expect(
        button,
        'It is expected that the button has a border 1px solid #909094'
      ).toHaveStyle('border: 1px solid #909094');
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #E2E2E6'
        ).toHaveStyle('color: #E2E2E6');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Satoshi'
        ).toHaveStyle('font-family: Satoshi');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
      });
    });
  },
};

export const Tonal: Story = {
  args: {
    variant: 'tonal',
    children: 'Label',
    disabled: false,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');

    await step('Checking the button structure', async () => {
      expect(
        button.tagName,
        'It is expected that the button is an html BUTTON element'
      ).toBe('BUTTON');
      expect(
        button,
        'it is expected that the button is rendered'
      ).toBeInTheDocument();
      expect(
        button,
        'It is expected that the button has a border-radius of 12px'
      ).toHaveStyle('border-radius: 12px');
      expect(
        button,
        'It is expected that the button has a cursor pointer'
      ).toHaveStyle('cursor: pointer');
      expect(button, 'It is expected that the button is flex').toHaveStyle(
        'display: flex'
      );
      expect(
        button,
        'It is expected that the button has justify-content space-between'
      ).toHaveStyle('justify-content: space-between');
      expect(
        button,
        'It is expected that the button has a border 1px solid #909094'
      ).toHaveStyle('border: 1px solid #909094');
      expect(
        button,
        'It is expected that the button has a background color with blue tint'
      ).toHaveStyle('background-color: #B4C5FF14');
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #DBE1FF'
        ).toHaveStyle('color: #DBE1FF');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Satoshi'
        ).toHaveStyle('font-family: Satoshi');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
      });
    });
  },
};

export const DisabledButton: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    disabled: true,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');

    await step('Checking the button structure', async () => {
      expect(
        button.tagName,
        'It is expected that the button is an html BUTTON element'
      ).toBe('BUTTON');
      expect(
        button,
        'it is expected that the button is rendered'
      ).toBeInTheDocument();
      expect(
        button,
        'It is expected that the button has a border-radius of 12px'
      ).toHaveStyle('border-radius: 12px');
      expect(
        button,
        'It is expected that the button has a cursor not-allowed'
      ).toHaveStyle('cursor: not-allowed');
      expect(button, 'It is expected that the button is flex').toHaveStyle(
        'display: flex'
      );
      expect(
        button,
        'It is expected that the button has justify-content center'
      ).toHaveStyle('justify-content: center');
      expect(
        button,
        'It is expected that the button has a disabled background color'
      ).toHaveStyle('background-color: #9CA3AF1A');
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #9CA3AF'
        ).toHaveStyle('color: #9CA3AF');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Satoshi'
        ).toHaveStyle('font-family: Satoshi');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function was not called when the button was clicked'
        ).not.toHaveBeenCalled();
      });
    });
  },
};
