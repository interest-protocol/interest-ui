import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

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
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');

    await step('Checking checkbox style', async () => {
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
    });

    await step('Checking checkbox user event', async () => {
      await userEvent.click(canvas.getByRole('checkbox'));
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
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');

    await step('Checking checkbox style', async () => {
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
    });

    await step('Checking checkbox user event', async () => {
      await userEvent.click(canvas.getByRole('checkbox'));
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
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');

    await step('Checking checkbox style', async () => {
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
    });

    await step('Checking checkbox user event', async () => {
      await userEvent.click(canvas.getByRole('checkbox'));
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
    allowIndeterminateValue: false,
    supportingText: 'Supporting Text',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');

    await step('Checking checkbox style ', async () => {
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
    });

    await step('Checking checkbox user event', async () => {
      await userEvent.click(canvas.getByRole('checkbox'));
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
        "It's expected indeterminate value to be false"
      ).toBeFalsy();
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
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');

    await step('Checking checkbox style', async () => {
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
    });

    await step('Checking checkbox user event', async () => {
      await userEvent.click(canvas.getByRole('checkbox'));
      await userEvent.hover(canvas.getByRole('checkbox'));
      await userEvent.unhover(canvas.getByRole('checkbox'));
      await userEvent.dblClick(canvas.getByRole('checkbox'));
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
