import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Checkbox } from '..';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Normal: Story = {
  args: {
    disabled: false,
    defaultValue: false,
    label: 'Checkbox Label',
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    const checkboxWrapper = canvas.getByRole('checkboxWrapper');

    await step('Checking checkbox style', async () => {
      expect(checkbox, "It's expected to has a role of checkbox").toHaveRole(
        'checkbox'
      );
      expect(checkbox.tagName, "It's expected to has an Input").toBe('INPUT');
      expect(
        checkbox.hasAttribute('type'),
        "It' expected the input to has a type attribute"
      ).toBeTruthy();
      expect(
        checkbox.getAttribute('type'),
        "It's expected that the input has the type attribute as checkbox"
      ).toBe('checkbox');
      expect(checkbox, "It's expected width to be 18px").toHaveStyle(
        'width: 18px'
      );
      expect(checkbox, "It's expected height to be 18px").toHaveStyle(
        'height: 18px'
      );
      expect(checkbox, "It's expected to eb cursor pointer").toHaveStyle(
        'cursor: pointer'
      );
      expect(
        checkboxWrapper.childNodes.length,
        'It is expected that the toggle wrapper has two nodes'
      ).toBe(3);
    });

    await step('Checking checkbox label style', async () => {
      expect(
        checkboxWrapper.children[2].tagName,
        "It's expected to has a Label"
      ).toBe('LABEL');
      expect(
        checkboxWrapper.children[2],
        "It's expected to has color of rgb(27, 27, 31)"
      ).toHaveStyle('color: rgb(27, 27, 31)');
      expect(
        checkboxWrapper.children[2],
        "It's expected to has color of font size of 16px"
      ).toHaveStyle('font-size: 16px');
      expect(
        checkboxWrapper.children[2],
        "It's expected to has color of font family of satoshi"
      ).toHaveStyle('font-family: Satoshi');
      expect(
        checkboxWrapper.children[2],
        "It's expected to has cursor pointer"
      ).toHaveStyle('cursor: pointer');
    });

    await step('Checking checkbox user event', async () => {
      await userEvent.click(canvas.getByRole('checkbox'));
      expect(args.onClick).toHaveBeenCalledOnce();
      await userEvent.hover(canvas.getByRole('checkbox'));
      await userEvent.unhover(canvas.getByRole('checkbox'));
      await userEvent.dblClick(canvas.getByRole('checkbox'));
    });

    await step('Checking checkbox args', async () => {
      expect(
        args.disabled,
        "It's expected disabled args to be false"
      ).toBeFalsy();
      expect(
        args.defaultValue,
        "It's expected default value to be false"
      ).toBeFalsy();
      expect(
        args.label,
        "I'ts expected args label to be 'Checkbox Label'"
      ).toBe('Checkbox Label');
    });
  },
};
export const NormalWithoutLabel: Story = {
  args: {
    disabled: false,
    defaultValue: true,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    const checkboxWrapper = canvas.getByRole('checkboxWrapper');

    await step('Checking checkbox style', async () => {
      expect(
        checkbox,
        "It's expected input to be in document"
      ).toBeInTheDocument();
      expect(checkbox, "It's expected to has a role of checkbox").toHaveRole(
        'checkbox'
      );
      expect(checkbox.tagName, "It's expected to has an Input").toBe('INPUT');
      expect(
        checkbox.hasAttribute('type'),
        "It' expected the input to has a type attribute"
      ).toBeTruthy();
      expect(
        checkbox.getAttribute('type'),
        "It's expected that the input has the type attribute as checkbox"
      ).toBe('checkbox');
      expect(checkbox, "It's expected width to be 18px").toHaveStyle(
        'width: 18px'
      );
      expect(checkbox, "It's expected height to be 18px").toHaveStyle(
        'height: 18px'
      );
      expect(checkbox, "It's expected to eb cursor pointer").toHaveStyle(
        'cursor: pointer'
      );
      expect(
        checkboxWrapper.childNodes.length,
        'It is expected that the toggle wrapper has two nodes'
      ).toBe(3);
    });

    await step('Checking checkbox user event', async () => {
      await userEvent.click(canvas.getByRole('checkbox'));
      expect(args.onClick).toHaveBeenCalledOnce();
      await userEvent.hover(canvas.getByRole('checkbox'));
      await userEvent.unhover(canvas.getByRole('checkbox'));
      await userEvent.dblClick(canvas.getByRole('checkbox'));
    });

    await step('Checking checkbox args', async () => {
      expect(
        args.disabled,
        "It's expected disabled args to be false"
      ).toBeFalsy();
      expect(
        args.defaultValue,
        "It's expected default value to be true"
      ).toBeTruthy();
    });
  },
};

export const NormalWithIndeterminate: Story = {
  args: {
    disabled: false,
    defaultValue: false,
    label: 'Checkbox Label',
    allowIndeterminateValue: true,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    const checkboxWrapper = canvas.getByRole('checkboxWrapper');

    await step('Checking checkbox style', async () => {
      expect(checkbox, "It's expected to has a role of checkbox").toHaveRole(
        'checkbox'
      );
      expect(checkbox.tagName, "It's expected to has an Input").toBe('INPUT');
      expect(
        checkbox.hasAttribute('type'),
        "It' expected the input to has a type attribute"
      ).toBeTruthy();
      expect(
        checkbox.getAttribute('type'),
        "It's expected that the input has the type attribute as checkbox"
      ).toBe('checkbox');
      expect(
        checkbox,
        "It's expected input to be in document"
      ).toBeInTheDocument();
      expect(checkbox, "It's expected width to be 18px").toHaveStyle(
        'width: 18px'
      );
      expect(checkbox, "It's expected height to be 18px").toHaveStyle(
        'height: 18px'
      );
      expect(checkbox, "It's expected to eb cursor pointer").toHaveStyle(
        'cursor: pointer'
      );
      expect(
        checkboxWrapper.childNodes.length,
        'It is expected that the toggle wrapper has two nodes'
      ).toBe(3);
    });

    await step('Checking checkbox label', async () => {
      expect(
        checkboxWrapper.children[2].tagName,
        "It's expected to has a Label"
      ).toBe('LABEL');
      expect(
        checkboxWrapper.children[2],
        "It's expected to has color of rgb(27, 27, 31)"
      ).toHaveStyle('color: rgb(27, 27, 31)');
      expect(
        checkboxWrapper.children[2],
        "It's expected to has color of font size of 16px"
      ).toHaveStyle('font-size: 16px');
      expect(
        checkboxWrapper.children[2],
        "It's expected to has color of font family of satoshi"
      ).toHaveStyle('font-family: Satoshi');
      expect(
        checkboxWrapper.children[2],
        "It's expected to has cursor pointer"
      ).toHaveStyle('cursor: pointer');
    });

    await step('Checking checkbox user event', async () => {
      await userEvent.click(canvas.getByRole('checkbox'));
      expect(args.onClick).toHaveBeenCalledOnce();
      await userEvent.hover(canvas.getByRole('checkbox'));
      await userEvent.unhover(canvas.getByRole('checkbox'));
      await userEvent.dblClick(canvas.getByRole('checkbox'));
    });

    await step('Checking checkbox args', async () => {
      expect(
        args.disabled,
        "It's expected disabled args to be false"
      ).toBeFalsy();
      expect(
        args.defaultValue,
        "It's expected default value to be false"
      ).toBeFalsy();
      expect(
        args.allowIndeterminateValue,
        "It's expect indeterminate value to be true"
      ).toBeTruthy();
      expect(
        args.label,
        "I'ts expected args label to be 'Checkbox Label'"
      ).toBe('Checkbox Label');
    });
  },
};

export const NormalWithIndeterminateAndSupportText: Story = {
  args: {
    disabled: false,
    defaultValue: false,
    label: 'Checkbox Label',
    allowIndeterminateValue: true,
    supportingText: 'Supporting Text',
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    const checkboxWrapper = canvas.getByRole('checkboxWrapper');

    await step('Checking checkbox style', async () => {
      expect(checkbox, "It's expected to has a role of checkbox").toHaveRole(
        'checkbox'
      );
      expect(checkbox.tagName, "It's expected to has an Input").toBe('INPUT');
      expect(
        checkbox.hasAttribute('type'),
        "It' expected the input to has a type attribute"
      ).toBeTruthy();
      expect(
        checkbox.getAttribute('type'),
        "It's expected that the input has the type attribute as checkbox"
      ).toBe('checkbox');
      expect(
        checkbox,
        "It's expected input to be in document"
      ).toBeInTheDocument();
      expect(checkbox, "It's expected width to be 18px").toHaveStyle(
        'width: 18px'
      );
      expect(checkbox, "It's expected height to be 18px").toHaveStyle(
        'height: 18px'
      );
      expect(checkbox, "It's expected to eb cursor pointer").toHaveStyle(
        'cursor: pointer'
      );
      expect(
        checkboxWrapper.childNodes.length,
        'It is expected that the toggle wrapper has two nodes'
      ).toBe(3);
    });

    await step('Checking checkbox label style', async () => {
      expect(
        checkboxWrapper.children[2].tagName,
        "It's expected to has a Label"
      ).toBe('LABEL');
      expect(
        checkboxWrapper.children[2],
        "It's expected to has color of rgb(27, 27, 31)"
      ).toHaveStyle('color: rgb(27, 27, 31)');
      expect(
        checkboxWrapper.children[2],
        "It's expected to has color of font size of 16px"
      ).toHaveStyle('font-size: 16px');
      expect(
        checkboxWrapper.children[2],
        "It's expected to has color of font family of satoshi"
      ).toHaveStyle('font-family: Satoshi');
      expect(
        checkboxWrapper.children[2],
        "It's expected to has cursor pointer"
      ).toHaveStyle('cursor: pointer');
    });

    await step('Checking checkbox user event', async () => {
      await userEvent.click(canvas.getByRole('checkbox'));
      expect(args.onClick).toHaveBeenCalledOnce();
      await userEvent.hover(canvas.getByRole('checkbox'));
      await userEvent.unhover(canvas.getByRole('checkbox'));
      await userEvent.dblClick(canvas.getByRole('checkbox'));
    });

    await step('Checking checkbox args', async () => {
      expect(
        args.disabled,
        "It's expected disabled args to be false"
      ).toBeFalsy();
      expect(
        args.defaultValue,
        "It's expected default value to be false"
      ).toBeFalsy();
      expect(
        args.allowIndeterminateValue,
        "It's expected indeterminate value to be true"
      ).toBeTruthy();
      expect(
        args.label,
        "I'ts expected args label to be 'Checkbox Label'"
      ).toBe('Checkbox Label');
      expect(
        args.supportingText,
        "It's expected supporting text to have value equal to 'Supporting text'"
      );
    });
  },
};

export const NormalDisabled: Story = {
  args: {
    disabled: true,
    defaultValue: true,
    label: 'Checkbox Label',
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    const checkboxWrapper = canvas.getByRole('checkboxWrapper');

    await step('Checking checkbox style', async () => {
      expect(checkbox, "It's expected to has a role of checkbox").toHaveRole(
        'checkbox'
      );
      expect(checkbox.tagName, "It's expected to has an Input").toBe('INPUT');
      expect(
        checkbox.hasAttribute('type'),
        "It' expected the input to has a type attribute"
      ).toBeTruthy();
      expect(
        checkbox.getAttribute('type'),
        "It's expected that the input has the type attribute as checkbox"
      ).toBe('checkbox');
      expect(
        checkbox,
        "It's expected input to be in document"
      ).toBeInTheDocument();
      expect(checkbox, "It's expected width to be 18px").toHaveStyle(
        'width: 18px'
      );
      expect(checkbox, "It's expected height to be 18px").toHaveStyle(
        'height: 18px'
      );
      expect(checkbox, "It's expected to eb cursor pointer").toHaveStyle(
        'cursor: not-allowed'
      );
      expect(
        checkboxWrapper.childNodes.length,
        'It is expected that the toggle wrapper has two nodes'
      ).toBe(3);
    });

    await step('Checking checkbox label style', async () => {
      expect(
        checkboxWrapper.children[2].tagName,
        "It's expected to has a Label"
      ).toBe('LABEL');
      expect(
        checkboxWrapper.children[2].tagName,
        "It's expected to has a Label"
      ).toBe('LABEL');
      expect(
        checkboxWrapper.children[2],
        "It's expected to has color of rgb(27, 27, 31)"
      ).toHaveStyle('color: rgb(27, 27, 31)');
      expect(
        checkboxWrapper.children[2],
        "It's expected to has color of font size of 16px"
      ).toHaveStyle('font-size: 16px');
      expect(
        checkboxWrapper.children[2],
        "It's expected to has color of font family of satoshi"
      ).toHaveStyle('font-family: Satoshi');
      expect(
        checkboxWrapper.children[2],
        "It's expected to has cursor not-allowed"
      ).toHaveStyle('cursor: not-allowed');
    });

    await step('Checking checkbox user event', async () => {
      await userEvent.hover(canvas.getByRole('checkbox'));
      await userEvent.unhover(canvas.getByRole('checkbox'));
    });

    await step('Checking checkbox args', async () => {
      expect(
        args.disabled,
        "It's expected disabled args to be true"
      ).toBeTruthy();
      expect(
        args.defaultValue,
        "It's expected default value to be true"
      ).toBeTruthy();
      expect(
        args.label,
        "I'ts expected args label to be 'Checkbox Label'"
      ).toBe('Checkbox Label');
    });
  },
};
