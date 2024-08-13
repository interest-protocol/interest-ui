import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import React from 'react';

import { PlusIcon } from '../../../../storybook/icons';
import { Box } from '../../../elements';
import { TextField } from '..';

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    placeholder: '0.123',
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const textfield = canvas.getByLabelText('textfieldHolder');

    await step('Testing textfield holder', async () => {
      expect(textfield, 'To be rendered').toBeInTheDocument();
      expect(textfield, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );

      expect(textfield, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        textfield,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing textfield input', async () => {
      const inputField = textfield.children[0].children[0].children[0];
      let inputValue = inputField.getAttribute('value');
      inputValue = '123';

      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        inputField,
        'Should have border of 0px none rgb(0, 0, 0)'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        '0.123'
      );
      await step('Should insert 123 text in input', async () => {
        await userEvent.type(inputField, inputValue, {
          delay: 100,
        });

        await waitFor(() =>
          expect(inputValue, 'Should insert 123 as value').toBe('123')
        );
      });
    });
  },
};

export const WithPrefix: Story = {
  args: {
    label: 'Label',
    Prefix: <PlusIcon />,
    placeholder: '0.123',
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const textfield = canvas.getByLabelText('textfieldHolder');

    await step('Testing textfield holder', async () => {
      expect(textfield, 'To be rendered').toBeInTheDocument();
      expect(textfield, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(textfield, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        textfield,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing SVG ', async () => {
      const svgHolder = textfield.children[1].children[0];
      expect(svgHolder, 'Should have display flex').toHaveStyle(
        'display: flex'
      );
      const svgElements = svgHolder.querySelectorAll('svg');
      expect(svgElements, 'Should have 1 svg').toHaveLength(1);

      const svg = svgHolder.children[0].tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing Supporting text', async () => {
      const supportingText = textfield.children[2];

      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should display Supporting text'
      ).toHaveTextContent('Supporting text');
      expect(supportingText, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
    });

    await step('Testing args', () => {
      expect(args.placeholder).toBe('0.123');
      expect(args.supportingText).toBe('Supporting text');
      expect(args.label).toBe('Label');
    });

    await step('Testing label', async () => {
      const label = textfield.children[0];
      expect(label, 'To be rendered').toBeInTheDocument();
      expect(label, 'Should have display inline').toHaveStyle(
        'display: inline'
      );
      expect(label, 'Should have height of auto').toHaveStyle('height: auto');
      expect(label, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(label.childNodes.length, 'Should have 1 element as child').toBe(1);
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing textfield input', async () => {
      const inputField = textfield.children[1].children[1].children[0];
      let inputValue = inputField.getAttribute('value');
      inputValue = '123';
      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        inputField,
        'Should have border of 0px none rgb(0, 0, 0)'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        '0.123'
      );
      await step('Should insert 123 text in input', async () => {
        await userEvent.type(inputField, inputValue, {
          delay: 100,
        });
        await waitFor(() =>
          expect(inputValue, 'Should insert 123 as value').toBe('123')
        );
      });
    });
  },
};

export const WithPrefixSuccess: Story = {
  args: {
    label: 'Label',
    status: 'success',
    Prefix: <PlusIcon />,
    placeholder: '0.123',
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const textfield = canvas.getByLabelText('textfieldHolder');

    await step('Testing textfield holder', async () => {
      expect(textfield, 'To be rendered').toBeInTheDocument();
      expect(textfield, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(textfield, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        textfield,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing SVG ', async () => {
      const svgHolder = textfield.children[1].children[0];
      expect(svgHolder, 'Should have display flex').toHaveStyle(
        'display: flex'
      );
      const svgElements = svgHolder.querySelectorAll('svg');
      expect(svgElements, 'Should have 1 svg').toHaveLength(1);

      const svg = svgHolder.children[0].tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing Supporting text', async () => {
      const supportingText = textfield.children[2];

      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should display Supporting text'
      ).toHaveTextContent('Supporting text');
      expect(
        supportingText,
        'Should have color of rgb(22, 162, 74)'
      ).toHaveStyle('color: rgb(22, 162, 74)');
    });

    await step('Testing args', () => {
      expect(args.placeholder).toBe('0.123');
      expect(args.supportingText).toBe('Supporting text');
      expect(args.label).toBe('Label');
    });

    await step('Testing label', async () => {
      const label = textfield.children[0];
      expect(label, 'To be rendered').toBeInTheDocument();
      expect(label, 'Should have display inline').toHaveStyle(
        'display: inline'
      );
      expect(label, 'Should have height of auto').toHaveStyle('height: auto');
      expect(label, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(label.childNodes.length, 'Should have 1 element as child').toBe(1);
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing textfield input', async () => {
      const inputField = textfield.children[1].children[1].children[0];
      let inputValue = inputField.getAttribute('value');
      inputValue = '123';
      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        '0.123'
      );
      await step("Should insert '0.123' text in input", async () => {
        await userEvent.type(inputField, inputValue, {
          delay: 100,
        });
        await waitFor(() =>
          expect(inputValue, 'Should insert 123 as value').toBe('123')
        );
      });
    });
  },
};

export const WithTopLabel: Story = {
  args: {
    placeholder: '0.123',
    label: 'Label',
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const textfield = canvas.getByLabelText('textfieldHolder');

    await step('Testing textfield holder', async () => {
      expect(textfield, 'To be rendered').toBeInTheDocument();
      expect(textfield, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(textfield, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        textfield,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing label', async () => {
      const label = textfield.children[0];
      expect(label, 'To be rendered').toBeInTheDocument();
      expect(label, 'Should have display inline').toHaveStyle(
        'display: inline'
      );
      expect(label, 'Should have height of auto').toHaveStyle('height: auto');
      expect(label, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(label.childNodes.length, 'Should have 1 element as child').toBe(1);
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing Supporting text', async () => {
      const supportingText = textfield.children[2];

      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should display Supporting text'
      ).toHaveTextContent('Supporting text');
      expect(supportingText, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
    });

    await step('Testing args', () => {
      expect(args.placeholder).toBe('0.123');
      expect(args.supportingText).toBe('Supporting text');
      expect(args.label).toBe('Label');
    });

    await step('Testing textfield input', async () => {
      const inputField = textfield.children[1].children[0].children[0];
      let inputValue = inputField.getAttribute('value');
      inputValue = '123';

      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        inputField,
        'Should have border of 0px none rgb(0, 0, 0)'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        '0.123'
      );
      await step("Should insert '0.123' text in input", async () => {
        await userEvent.type(inputField, inputValue, {
          delay: 100,
        });
        expect(inputValue, 'Should receive 0.123 as value').toBe('123');
      });
    });
  },
};

export const Combined: Story = {
  args: {
    placeholder: '0.123',
    label: 'Label',
    Prefix: <PlusIcon />,
    Suffix: <PlusIcon />,
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const textfield = canvas.getByLabelText('textfieldHolder');

    await step('Testing textfield holder', async () => {
      expect(textfield, 'To be rendered').toBeInTheDocument();
      expect(textfield, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(textfield, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        textfield,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing label', async () => {
      const label = textfield.children[0];
      expect(label, 'To be rendered').toBeInTheDocument();
      expect(label, 'Should have display inline').toHaveStyle(
        'display: inline'
      );
      expect(label, 'Should have height of auto').toHaveStyle('height: auto');
      expect(label, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(label.childNodes.length, 'Should have 1 element as child').toBe(1);
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing SVG ', async () => {
      const svgHolder = textfield.children[1].children[0];
      expect(svgHolder, 'Should have display flex').toHaveStyle(
        'display: flex'
      );
      const svgElements = svgHolder.querySelectorAll('svg');
      expect(svgElements, 'Should have 1 svg').toHaveLength(1);

      const svg = svgHolder.children[0].tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing Supporting text', async () => {
      const supportingText = textfield.children[2];

      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should display Supporting text'
      ).toHaveTextContent('Supporting text');
      expect(supportingText, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
    });

    await step('Testing args', () => {
      expect(args.placeholder).toBe('0.123');
      expect(args.supportingText).toBe('Supporting text');
      expect(args.label).toBe('Label');
    });

    await step('Testing textfield input', async () => {
      const inputField = textfield.children[1].children[1].children[0];
      let inputValue = inputField.getAttribute('value');
      inputValue = '123';
      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(
        inputField,
        'Should have border of 0px none rgb(0, 0, 0)'
      ).toHaveStyle('border: 0px none rgb(0, 0, 0)');
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        '0.123'
      );
      await step("Should insert '0.123' text in input", async () => {
        await userEvent.type(inputField, inputValue, {
          delay: 100,
        });
        expect(inputValue, 'Should receive 0.123 as value').toBe('123');
      });
    });
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    Suffix: <PlusIcon />,
    placeholder: '0.123',
    supportingText: 'Enter a valid amount',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const textfield = canvas.getByLabelText('textfieldHolder');

    await step('Testing textfield holder', async () => {
      expect(textfield, 'To be rendered').toBeInTheDocument();
      expect(textfield, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(textfield, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        textfield,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing label', async () => {
      const label = textfield.children[0];

      expect(label, 'To be rendered').toBeInTheDocument();
      expect(label, 'Should have display flex').toHaveStyle('display: flex');
      expect(label, 'Should have height of 40px').toHaveStyle('height: 40px');
      expect(label, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(label.childNodes.length, 'Should have 2 element as child').toBe(2);
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing SVG ', async () => {
      const svgHolder = textfield.children[0].children[1];
      expect(svgHolder, 'Should have display flex').toHaveStyle(
        'display: flex'
      );
      const svgElements = svgHolder.querySelectorAll('svg');
      expect(svgElements, 'Should have 1 svg').toHaveLength(1);

      const svg = svgHolder.children[0].tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing Supporting text', async () => {
      const validAmount = textfield.children[1];

      expect(validAmount, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(validAmount, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        validAmount,
        'Should display Enter a valid amount'
      ).toHaveTextContent('Enter a valid amount');
      expect(validAmount, 'Should have color of rgb(229, 62, 62)').toHaveStyle(
        'color: rgb(229, 62, 62)'
      );
    });

    await step('Testing args', () => {
      expect(args.placeholder).toBe('0.123');
      expect(args.supportingText).toBe('Enter a valid amount');
    });

    await step('Testing textfield input', async () => {
      const inputField = textfield.children[0].children[0].children[0];
      let inputValue = inputField.getAttribute('value');
      inputValue = '123';

      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        '0.123'
      );
      await step("Should insert '0.123' text in input", async () => {
        await userEvent.type(inputField, inputValue, {
          delay: 100,
        });
        expect(inputValue, 'Should receive 0.123 as value').toBe('123');
      });
    });
  },
};

export const ErrorCombined: Story = {
  args: {
    status: 'error',
    placeholder: '0.123',
    label: 'Label',
    Prefix: <PlusIcon />,
    Suffix: <PlusIcon />,
    supportingText: 'Supporting text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const textfield = canvas.getByLabelText('textfieldHolder');

    await step('Testing textfield holder', async () => {
      expect(textfield, 'To be rendered').toBeInTheDocument();
      expect(textfield, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(textfield, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        textfield,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing label', async () => {
      const label = textfield.children[0];

      expect(label, 'To be rendered').toBeInTheDocument();
      expect(label, 'Should have display inline').toHaveStyle(
        'display: inline'
      );
      expect(label, 'Should have height of auto').toHaveStyle('height: auto');
      expect(label, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(label.childNodes.length, 'Should have 1 element as child').toBe(1);
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing SVG ', async () => {
      const svgHolder = textfield.children[1].children[0];
      expect(svgHolder, 'Should have display flex').toHaveStyle(
        'display: flex'
      );
      const svgElements = svgHolder.querySelectorAll('svg');
      expect(svgElements, 'Should have 1 svg').toHaveLength(1);

      const svg = svgHolder.children[0].tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing Supporting text', async () => {
      const supportingText = textfield.children[2];

      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should display Supporting text'
      ).toHaveTextContent('Supporting text');
      expect(
        supportingText,
        'Should have color of rgb(229, 62, 62)'
      ).toHaveStyle('color: rgb(229, 62, 62)');
    });

    await step('Testing args', () => {
      expect(args.placeholder).toBe('0.123');
      expect(args.supportingText).toBe('Supporting text');
      expect(args.label).toBe('Label');
    });

    await step('Testing textfield input', async () => {
      const inputField = textfield.children[1].children[1].children[0];
      let inputValue = inputField.getAttribute('value');
      inputValue = '123';

      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        '0.123'
      );
      await step("Should insert '0.123' text in input", async () => {
        await userEvent.type(inputField, inputValue, {
          delay: 100,
        });
        expect(inputValue, 'Should receive 0.123 as value').toBe('123');
      });
    });
  },
};

export const ErrorCombinedWithWrapper: Story = {
  args: {
    status: 'error',
    placeholder: '0.123',
    label: 'Label',
    Prefix: <PlusIcon />,
    Suffix: <PlusIcon />,
    supportingText: 'Supporting text',
  },
  render: (args) => (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <TextField {...args} />
    </Box>
  ),
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const textfield = canvas.getByLabelText('textfieldHolder');

    await step('Testing textfield holder', async () => {
      expect(textfield, 'To be rendered').toBeInTheDocument();
      expect(textfield, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(textfield, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(
        textfield,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing label', async () => {
      const label = textfield.children[0];
      expect(label, 'To be rendered').toBeInTheDocument();
      expect(label, 'Should have display block').toHaveStyle('display: block');
      expect(label, 'Should have height of 20px').toHaveStyle('height: 20px');
      expect(label, 'Should have color of rgb(0, 0, 0)').toHaveStyle(
        'color: rgb(0, 0, 0)'
      );
      expect(label, 'Should have opacity of 1').toHaveStyle('opacity: 1');
      expect(label.childNodes.length, 'Should have 1 element as child').toBe(1);
      expect(
        label,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing SVG ', async () => {
      const svgHolder = textfield.children[1].children[0];
      expect(svgHolder, 'Should have display flex').toHaveStyle(
        'display: flex'
      );
      const svgElements = svgHolder.querySelectorAll('svg');
      expect(svgElements, 'Should have 1 svg').toHaveLength(1);

      const svg = svgHolder.children[0].tagName.toLowerCase();
      expect(svg, 'Should have svg element').toEqual('svg');
    });

    await step('Testing Supporting text', async () => {
      const supportingText = textfield.children[2];

      expect(supportingText, 'Should have font-size of 12px').toHaveStyle(
        'font-size: 12px'
      );
      expect(supportingText, 'Should have font-weight of 400').toHaveStyle(
        'font-weight: 400'
      );
      expect(
        supportingText,
        'Should display Supporting text'
      ).toHaveTextContent('Supporting text');
      expect(
        supportingText,
        'Should have color of rgb(229, 62, 62)'
      ).toHaveStyle('color: rgb(229, 62, 62)');
    });

    await step('Testing args', () => {
      expect(args.placeholder).toBe('0.123');
      expect(args.supportingText).toBe('Supporting text');
      expect(args.label).toBe('Label');
    });

    await step('Testing textfield input', async () => {
      const inputField = textfield.children[1].children[1].children[0];
      let inputValue = inputField.getAttribute('value');
      inputValue = '123';

      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have cursor default').toHaveStyle(
        'cursor: default'
      );
      expect(inputField, 'Should have a placeholder').toHaveAttribute(
        'placeholder'
      );

      const placeholderValue = inputField.getAttribute('placeholder');
      expect(placeholderValue, 'Should have placeholder of Input').toBe(
        '0.123'
      );
      await step("Should insert '0.123' text in input", async () => {
        await userEvent.type(inputField, inputValue, {
          delay: 100,
        });
        expect(inputValue, 'Should receive 0.123 as value').toBe('123');
      });
    });
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '0.123',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const textfield = canvas.getByLabelText('textfieldHolder');

    await step('Testing textfield holder', async () => {
      expect(textfield, 'To be rendered').toBeInTheDocument();
      expect(textfield, 'Should have cursor not-allowed').toHaveStyle(
        'cursor: not-allowed'
      );
      expect(textfield, 'Should have opacity of 0.32').toHaveStyle(
        'opacity: 0.32'
      );
      expect(
        textfield,
        'Should have background-color of rgba(0, 0, 0, 0)'
      ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });

    await step('Testing textfield input', async () => {
      const inputField = textfield.children[0].children[0].children[0];

      expect(inputField.tagName, 'Should be an input').toBe('INPUT');
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
      expect(inputField, 'Should have font-weight of 500').toHaveStyle(
        'font-weight: 500'
      );
      expect(inputField, 'Should have font-size of 16px').toHaveStyle(
        'font-size: 16px'
      );
    });
  },
};
