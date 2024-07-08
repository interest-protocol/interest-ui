import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { RadioButton } from '..';

const meta: Meta<typeof RadioButton> = {
  title: 'Radio',
  component: RadioButton,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Normal: Story = {
  args: {},
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByTestId('radioTestContainer');
    const radioIconContainer = canvas.getByTestId('radioTest');
    const svgElements = radio.querySelectorAll('svg');
    const firstChild = radio.firstElementChild;
    const elementTag = firstChild && firstChild.tagName.toLowerCase();

    await step('Checking Radio wrapper', async () => {
      expect(
        radio,
        "It's expected that the radio wrapper has a display of flex"
      ).toHaveStyle('display: flex');
      expect(radio, "It's expected to have cursor pointer").toHaveStyle(
        'cursor: pointer'
      );
      expect(elementTag, "It's expected the wrapper to be a div element").toBe(
        'div'
      );
      expect(
        svgElements,
        "It's expected have at least  a svg element"
      ).toHaveLength(1);
    });

    await step('Checking radio icon Container', async () => {
      expect(
        radioIconContainer,
        "It's expected icon container has a display flex"
      ).toHaveStyle('display: flex');
      expect(
        radioIconContainer,
        "It's expected icon container do has a width of 20px"
      ).toHaveStyle('width: 20px');
      expect(
        radioIconContainer,
        "It's expected icon container has a height of 20px"
      ).toHaveStyle('height: 20px');
      expect(
        radioIconContainer,
        "It's expected icon container has a color of rgb(27, 27, 31)"
      ).toHaveStyle('color: rgb(27, 27, 31');
      expect(
        radioIconContainer,
        "It's expected icon container to has an opacity of 1"
      ).toHaveStyle('opacity: 1');
    });

    await step('Checking radio user event', async () => {
      await userEvent.click(canvas.getByTestId('radioTestContainer'));
      await userEvent.hover(canvas.getByTestId('radioTestContainer'));
      await userEvent.dblClick(canvas.getByTestId('radioTestContainer'));
      await userEvent.unhover(canvas.getByTestId('radioTestContainer'));
    });
  },
};

export const NormalDisabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByTestId('radioTestContainer');
    const svgElements = radio.querySelectorAll('svg');
    const firstChild = radio.firstElementChild;
    const elementTag = firstChild && firstChild.tagName.toLowerCase();

    await step('Checking the style for the Radio wrapper', async () => {
      expect(
        radio,
        "It's expected that the radio wrapper has a display of flex"
      ).toHaveStyle('display: flex');
      expect(radio, "It's expected to have cursor not-allowed").toHaveStyle(
        'cursor: not-allowed'
      );
      expect(elementTag, "It's expected the wrapper to be a div element").toBe(
        'div'
      );
      expect(
        svgElements,
        "It's expected have at least  a svg element"
      ).toHaveLength(1);
    });

    await step('Checking radio user event', async () => {
      await userEvent.click(canvas.getByTestId('radioTestContainer'));
      await userEvent.dblClick(canvas.getByTestId('radioTestContainer'));
    });

    await step('Checking radio args', async () => {
      expect(
        args.disabled,
        "It's expected args disabled to be true"
      ).toBeTruthy();
    });
  },
};

export const Checked: Story = {
  args: {
    defaultValue: true,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByTestId('radioTestContainer');
    const radioChecked = canvas.getByTestId('radioTest');
    const svgElements = radio.querySelectorAll('svg');
    const firstChild = radio.firstElementChild;
    const elementTag = firstChild && firstChild.tagName.toLowerCase();

    await step('Checking the style for the Radio wrapper', async () => {
      expect(
        radio,
        "It's expected that the radio wrapper has a display of flex"
      ).toHaveStyle('display: flex');
      expect(radio, "It's expected to have cursor pointer").toHaveStyle(
        'cursor: pointer'
      );
      expect(elementTag, "It's expected the wrapper to be a div element").toBe(
        'div'
      );
      expect(
        svgElements,
        "It's expected have at least  a svg element"
      ).toHaveLength(1);
    });

    expect(
      radioChecked,
      "It's expected icon container has a display flex"
    ).toHaveStyle('display: flex');
    expect(
      radioChecked,
      "It's expected icon container do has a width of 20px"
    ).toHaveStyle('width: 20px');
    expect(
      radioChecked,
      "It's expected icon container has a height of 20px"
    ).toHaveStyle('height: 20px');
    expect(
      radioChecked,
      "It's expected icon container has a color of rgb(0, 83, 219)"
    ).toHaveStyle('color: rgb(0, 83, 219');
    expect(
      radioChecked,
      "It's expected icon container to has an opacity of 1"
    ).toHaveStyle('opacity: 1');

    await step('Checking radio user event', async () => {
      await userEvent.click(canvas.getByTestId('radioTestContainer'));
      await userEvent.hover(canvas.getByTestId('radioTestContainer'));
      await userEvent.unhover(canvas.getByTestId('radioTestContainer'));
      await userEvent.dblClick(canvas.getByTestId('radioTestContainer'));
    });

    await step('Checking radio args', async () => {
      expect(
        args.defaultValue,
        "It's expected defaultValue to be true"
      ).toBeTruthy();
    });
  },
};

export const CheckedDisabled: Story = {
  args: {
    defaultValue: true,
    disabled: true,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByTestId('radioTestContainer');
    const radioIconContainer = canvas.getByTestId('radioTest');
    const svgElements = radio.querySelectorAll('svg');
    const firstChild = radio.firstElementChild;
    const elementTag = firstChild && firstChild.tagName.toLowerCase();

    await step('Checking Radio wrapper', async () => {
      expect(
        radio,
        "It's expected that the radio wrapper has a display of flex"
      ).toHaveStyle('display: flex');
      expect(radio, "It's expected to have cursor not-allowed").toHaveStyle(
        'cursor: not-allowed'
      );
      expect(elementTag, "It's expected the wrapper to be a div element").toBe(
        'div'
      );
      expect(
        svgElements,
        "It's expected have at least  a svg element"
      ).toHaveLength(1);
    });

    await step('Checking radio icon Container', async () => {
      expect(
        radioIconContainer,
        "It's expected icon container has a display flex"
      ).toHaveStyle('display: flex');
      expect(
        radioIconContainer,
        "It's expected icon container do has a width of 20px"
      ).toHaveStyle('width: 20px');
      expect(
        radioIconContainer,
        "It's expected icon container has a height of 20px"
      ).toHaveStyle('height: 20px');
      expect(
        radioIconContainer,
        "It's expected icon container has a color of rgb(27, 27, 31)"
      ).toHaveStyle('color: rgb(27, 27, 31');
      expect(
        radioIconContainer,
        "It's expected icon container to has an opacity of 0.32"
      ).toHaveStyle('opacity: 0.32');
    });

    await step('Checking radio user event', async () => {
      await userEvent.click(canvas.getByTestId('radioTestContainer'));
      await userEvent.hover(canvas.getByTestId('radioTestContainer'));
      await userEvent.dblClick(canvas.getByTestId('radioTestContainer'));
      await userEvent.unhover(canvas.getByTestId('radioTestContainer'));
    });

    await step('Checking radio args', async () => {
      expect(
        args.defaultValue,
        "It's expected defaultValue to be true"
      ).toBeTruthy();
      expect(args.disabled, "It's expected disabled to be true").toBeTruthy();
    });
  },
};
