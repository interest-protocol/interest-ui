import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
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
        'It is expected that the button has an internal left spacing of 24px'
      ).toHaveStyle('padding-left: 24px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 24px'
      ).toHaveStyle('padding-right: 24px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
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
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button.childNodes.length,
        'It is expected that the button has only one element'
      ).toBe(1);
      expect(
        button,
        'It is expected that the button has a background #0053db'
      ).toHaveStyle('background-color: #0053db');
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #fff'
        ).toHaveStyle('color: #fff');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Proto'
        ).toHaveStyle('font-family: Proto');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
        expect(
          button,
          'It is expected that the button will have a transparent blue border when clicked'
        ).toHaveStyle('box-shadow: 0 0 0 4px #0053db29');
      });
    });
  },
};

export const FilledWithPrefix: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
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
        'It is expected that the button has an internal left spacing of 16px'
      ).toHaveStyle('padding-left: 16px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 24px'
      ).toHaveStyle('padding-right: 24px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
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
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button.childNodes.length,
        'It is expected that the button has only two element'
      ).toBe(2);
      expect(
        button,
        'It is expected that the button has a background #0053db'
      ).toHaveStyle('background-color: #0053db');
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #fff'
        ).toHaveStyle('color: #fff');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Proto'
        ).toHaveStyle('font-family: Proto');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
        expect(
          button,
          'It is expected that the button will have a transparent blue border when clicked'
        ).toHaveStyle('box-shadow: 0 0 0 4px #0053db29');
      });
    });
  },
};

export const FilledWithSuffix: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    SuffixIcon: <PlusIcon />,
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
        'It is expected that the button has an internal left spacing of 24px'
      ).toHaveStyle('padding-left: 24px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 16px'
      ).toHaveStyle('padding-right: 16px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
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
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button.childNodes.length,
        'It is expected that the button has only two element'
      ).toBe(2);
      expect(
        button,
        'It is expected that the button has a background #0053db'
      ).toHaveStyle('background-color: #0053db');
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #fff'
        ).toHaveStyle('color: #fff');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Proto'
        ).toHaveStyle('font-family: Proto');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
        expect(
          button,
          'It is expected that the button will have a transparent blue border when clicked'
        ).toHaveStyle('box-shadow: 0 0 0 4px #0053db29');
      });
    });
  },
};

export const FilledWithCombined: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
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
        'It is expected that the button has an internal left spacing of 16px'
      ).toHaveStyle('padding-left: 16px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 16px'
      ).toHaveStyle('padding-right: 16px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
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
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button.childNodes.length,
        'It is expected that the button has only three element'
      ).toBe(3);
      expect(
        button,
        'It is expected that the button has a background #0053db'
      ).toHaveStyle('background-color: #0053db');
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #fff'
        ).toHaveStyle('color: #fff');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Proto'
        ).toHaveStyle('font-family: Proto');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
        expect(
          button,
          'It is expected that the button will have a transparent blue border when clicked'
        ).toHaveStyle('box-shadow: 0 0 0 4px #0053db29');
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
        'It is expected that the button has an internal left spacing of 24px'
      ).toHaveStyle('padding-left: 24px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 24px'
      ).toHaveStyle('padding-right: 24px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
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
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button,
        'It is expected that the button has a border 1px solid #000'
      ).toHaveStyle('border: 1px solid #000');
      expect(
        button.childNodes.length,
        'It is expected that the button has only one element'
      ).toBe(1);
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #000');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Proto'
        ).toHaveStyle('font-family: Proto');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
        expect(
          button,
          'It is expected that the button will have a transparent blue border when clicked'
        ).toHaveStyle('box-shadow: 0 0 0 4px #0053db29');
        expect(
          button,
          'It is expected that the button has a border 1px solid #000'
        ).toHaveStyle('border: 1px solid #0053db');
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #0053db');
      });
    });
  },
};

export const OutlineWithPrefix: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
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
        'It is expected that the button has an internal left spacing of 16px'
      ).toHaveStyle('padding-left: 16px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 24px'
      ).toHaveStyle('padding-right: 24px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
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
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button,
        'It is expected that the button has a border 1px solid #000'
      ).toHaveStyle('border: 1px solid #000');
      expect(
        button.childNodes.length,
        'It is expected that the button has only two element'
      ).toBe(2);
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #000');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Proto'
        ).toHaveStyle('font-family: Proto');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
        expect(
          button,
          'It is expected that the button will have a transparent blue border when clicked'
        ).toHaveStyle('box-shadow: 0 0 0 4px #0053db29');
        expect(
          button,
          'It is expected that the button has a border 1px solid #000'
        ).toHaveStyle('border: 1px solid #0053db');
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #0053db');
      });
    });
  },
};

export const OutlineWithSuffix: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    SuffixIcon: <PlusIcon />,
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
        'It is expected that the button has an internal left spacing of 24px'
      ).toHaveStyle('padding-left: 24px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 16px'
      ).toHaveStyle('padding-right: 16px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
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
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button,
        'It is expected that the button has a border 1px solid #000'
      ).toHaveStyle('border: 1px solid #000');
      expect(
        button.childNodes.length,
        'It is expected that the button has only two element'
      ).toBe(2);
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #000');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Proto'
        ).toHaveStyle('font-family: Proto');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
        expect(
          button,
          'It is expected that the button will have a transparent blue border when clicked'
        ).toHaveStyle('box-shadow: 0 0 0 4px #0053db29');
        expect(
          button,
          'It is expected that the button has a border 1px solid #000'
        ).toHaveStyle('border: 1px solid #0053db');
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #0053db');
      });
    });
  },
};

export const OutlineWithCombined: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
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
        'It is expected that the button has an internal left spacing of 16px'
      ).toHaveStyle('padding-left: 16px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 16px'
      ).toHaveStyle('padding-right: 16px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
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
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button,
        'It is expected that the button has a border 1px solid #000'
      ).toHaveStyle('border: 1px solid #000');
      expect(
        button.childNodes.length,
        'It is expected that the button has only two element'
      ).toBe(3);
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #000');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Proto'
        ).toHaveStyle('font-family: Proto');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
        expect(
          button,
          'It is expected that the button will have a transparent blue border when clicked'
        ).toHaveStyle('box-shadow: 0 0 0 4px #0053db29');
        expect(
          button,
          'It is expected that the button has a border 1px solid #000'
        ).toHaveStyle('border: 1px solid #0053db');
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #0053db');
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
        'It is expected that the button has an internal left spacing of 24px'
      ).toHaveStyle('padding-left: 24px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 24px'
      ).toHaveStyle('padding-right: 24px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
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
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button.childNodes.length,
        'It is expected that the button has only one element'
      ).toBe(1);
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #000');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Proto'
        ).toHaveStyle('font-family: Proto');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
        expect(
          button,
          'It is expected that the button will have a transparent blue border when clicked'
        ).toHaveStyle('box-shadow: 0 0 0 4px #0053db29');
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #000');
      });
    });
  },
};

export const TextWithPrefix: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
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
        'It is expected that the button has an internal left spacing of 16px'
      ).toHaveStyle('padding-left: 16px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 24px'
      ).toHaveStyle('padding-right: 24px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
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
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button.childNodes.length,
        'It is expected that the button has only one element'
      ).toBe(2);
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #000');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Proto'
        ).toHaveStyle('font-family: Proto');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
        expect(
          button,
          'It is expected that the button will have a transparent blue border when clicked'
        ).toHaveStyle('box-shadow: 0 0 0 4px #0053db29');
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #000');
      });
    });
  },
};

export const TextWithSuffix: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    SuffixIcon: <PlusIcon />,
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
        'It is expected that the button has an internal left spacing of 24px'
      ).toHaveStyle('padding-left: 24px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 16px'
      ).toHaveStyle('padding-right: 16px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
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
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button.childNodes.length,
        'It is expected that the button has only one element'
      ).toBe(2);
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #000');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Proto'
        ).toHaveStyle('font-family: Proto');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
        expect(
          button,
          'It is expected that the button will have a transparent blue border when clicked'
        ).toHaveStyle('box-shadow: 0 0 0 4px #0053db29');
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #000');
      });
    });
  },
};

export const TextWithCombined: Story = {
  args: {
    variant: 'text',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
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
        'It is expected that the button has an internal left spacing of 16px'
      ).toHaveStyle('padding-left: 16px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 16px'
      ).toHaveStyle('padding-right: 16px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
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
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button.childNodes.length,
        'It is expected that the button has only one element'
      ).toBe(3);
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #000');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Proto'
        ).toHaveStyle('font-family: Proto');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
        expect(
          button,
          'It is expected that the button will have a transparent blue border when clicked'
        ).toHaveStyle('box-shadow: 0 0 0 4px #0053db29');
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #000');
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
        'It is expected that the button has an internal left spacing of 24px'
      ).toHaveStyle('padding-left: 24px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 24px'
      ).toHaveStyle('padding-right: 24px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
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
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button.childNodes.length,
        'It is expected that the button has only one element'
      ).toBe(1);
      expect(
        button,
        'It is expected that the button has a background #0053db14'
      ).toHaveStyle('background-color: #0053db14');
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #000');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Proto'
        ).toHaveStyle('font-family: Proto');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
        expect(
          button,
          'It is expected that the button will have a transparent blue border when clicked'
        ).toHaveStyle('box-shadow: 0 0 0 4px #0053db29');
        expect(
          button,
          'It is expected that the text on the button will be coloured #0053db'
        ).toHaveStyle('color: #0053db');
      });
    });
  },
};

export const TonalWithPrefix: Story = {
  args: {
    variant: 'tonal',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
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
        'It is expected that the button has an internal left spacing of 16px'
      ).toHaveStyle('padding-left: 16px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 24px'
      ).toHaveStyle('padding-right: 24px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
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
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button.childNodes.length,
        'It is expected that the button has only two element'
      ).toBe(2);
      expect(
        button,
        'It is expected that the button has a background #0053db14'
      ).toHaveStyle('background-color: #0053db14');
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #000');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Proto'
        ).toHaveStyle('font-family: Proto');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
        expect(
          button,
          'It is expected that the button will have a transparent blue border when clicked'
        ).toHaveStyle('box-shadow: 0 0 0 4px #0053db29');
        expect(
          button,
          'It is expected that the text on the button will be coloured #0053db'
        ).toHaveStyle('color: #0053db');
      });
    });
  },
};

export const TonalWithCombined: Story = {
  args: {
    variant: 'tonal',
    children: 'Label',
    PrefixIcon: <PlusIcon />,
    SuffixIcon: <PlusIcon />,
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
        'It is expected that the button has an internal left spacing of 16px'
      ).toHaveStyle('padding-left: 16px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 16px'
      ).toHaveStyle('padding-right: 16px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
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
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button.childNodes.length,
        'It is expected that the button has only three element'
      ).toBe(3);
      expect(
        button,
        'It is expected that the button has a background #0053db14'
      ).toHaveStyle('background-color: #0053db14');
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #000'
        ).toHaveStyle('color: #000');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Proto'
        ).toHaveStyle('font-family: Proto');
      });
    });

    await step('Checking the click event', async () => {
      await userEvent.click(button);
      await waitFor(() => {
        expect(
          args.onClick,
          'It is expected that the function has been called when the button has been clicked'
        ).toHaveBeenCalled();
        expect(
          button,
          'It is expected that the button will have a transparent blue border when clicked'
        ).toHaveStyle('box-shadow: 0 0 0 4px #0053db29');
        expect(
          button,
          'It is expected that the text on the button will be coloured #0053db'
        ).toHaveStyle('color: #0053db');
      });
    });
  },
};

export const Icon: Story = {
  args: {
    variant: 'filled',
    children: <SwapIcon />,
    disabled: false,
    isIcon: true,
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
        'It is expected that the button has an internal left spacing of 8px'
      ).toHaveStyle('padding-left: 8px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 8px'
      ).toHaveStyle('padding-right: 8px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
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
      ).toHaveStyle('justify-content: center');
      expect(
        button,
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button.childNodes.length,
        'It is expected that the button has only one element'
      ).toBe(1);
      expect(
        button,
        'It is expected that the button has a background #0053db'
      ).toHaveStyle('background-color: #0053db');
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
        'It is expected that the button has an internal left spacing of 24px'
      ).toHaveStyle('padding-left: 24px');
      expect(
        button,
        'It is expected that the button has an internal right spacing of 24px'
      ).toHaveStyle('padding-right: 24px');
      expect(
        button,
        'It is expected that the button has a border-radius of 8px'
      ).toHaveStyle('border-radius: 8px');
      expect(
        button,
        'It is expected that the button has a cursor not-allowed'
      ).toHaveStyle('cursor: not-allowed');
      expect(button, 'It is expected that the button is flex').toHaveStyle(
        'display: flex'
      );
      expect(
        button,
        'It is expected that the button has justify-content space-between'
      ).toHaveStyle('justify-content: space-between');
      expect(
        button,
        'It is expected that the button will not have a blue border'
      ).toHaveStyle('box-shadow: none');
      expect(
        button,
        'It is expected that the button has a background #00000029'
      ).toHaveStyle('background-color: #00000029');
      expect(
        button.childNodes.length,
        'It is expected that the button has only one element'
      ).toBe(1);
      expect(
        button.textContent,
        `It is expected that the button has the text ${args.children} as content`
      ).toBe(args.children);
      await step('Checking the font styles', async () => {
        expect(
          button,
          'It is expected that the text on the button will be coloured #1b1b1f'
        ).toHaveStyle('color: #1b1b1f');
        expect(
          button,
          'It is expected that the text on the button will have a font size of 14px'
        ).toHaveStyle('font-size: 14px');
        expect(
          button,
          'It is expected that the text on the button will have the font-family Proto'
        ).toHaveStyle('font-family: Proto');
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
