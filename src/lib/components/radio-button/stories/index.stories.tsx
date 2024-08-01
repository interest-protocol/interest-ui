import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

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
  args: {
    onClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const radioWrapper = canvas.getByLabelText('radioWrapper');

    await step('Checking Radio wrapper', async () => {
      expect(
        radioWrapper,
        "It's  expected that the Div will be rendered"
      ).toBeInTheDocument();
      expect(
        radioWrapper,
        "It's expected that the radio wrapper has a display of flex"
      ).toHaveStyle('display: flex');
      expect(
        radioWrapper,
        "It's expected radio wrapper has a gap of 16px"
      ).toHaveStyle('gap: 16px');
      expect(radioWrapper, "It's expected to have cursor pointer").toHaveStyle(
        'cursor: pointer'
      );
      expect(
        radioWrapper.childNodes.length,
        "It's expected that there will be one elements in the wrapper"
      ).toBe(1);
    });

    await step('Checking radio style', async () => {
      const radio = canvas.getByRole('radio');
      expect(
        radio,
        "It's  expected that the Div will be rendered"
      ).toBeInTheDocument();
      expect(
        radio.childNodes.length,
        "It's expected that there will be one elements in the radio"
      ).toBe(1);
      expect(radio, "It's expected radio to has a display flex").toHaveStyle(
        'display: flex'
      );
      expect(
        radio,
        "It's expected radio to has a align-items center"
      ).toHaveStyle('align-items: center');
      expect(
        radio,
        "It's expected radio to has a justify-content center"
      ).toHaveStyle('justify-content: center');
      expect(
        radio,
        "It's expected radio to has a border-radius 50%"
      ).toHaveStyle('border-radius: 50%');
      expect(
        radio,
        "It's expected icon container do has a width of 20px"
      ).toHaveStyle('width: 20px');
      expect(
        radio,
        "It's expected icon container has a height of 20px"
      ).toHaveStyle('height: 20px');
      expect(
        radio,
        "It's expected icon container has a color of rgb(27, 27, 31)"
      ).toHaveStyle('color: rgb(27, 27, 31');
      expect(
        radio,
        "It's expected icon container to has an opacity of 1"
      ).toHaveStyle('opacity: 1');
    });

    await step('Checking radio svg style', async () => {
      const radio = canvas.getByRole('radio');
      const radioSVG = radio.children[0];

      expect(
        radioSVG,
        "It's expected that will be rendered a SVG element"
      ).toBeInTheDocument();
      expect(
        radioSVG,
        "It's expected to has a style width of 20px"
      ).toHaveStyle('width: 20px');
      expect(
        radioSVG,
        "It's expected to has a style of height of 20px"
      ).toHaveStyle('height: 20px');
      expect(
        radioSVG,
        "It's expected to has a style max-width of 20px"
      ).toHaveStyle('max-width: 20px');
      expect(
        radioSVG,
        "It's expected to has a style of max-height of 20px"
      ).toHaveStyle('max-height: 20px');
    });

    await step('Checking the user click event on checkbox', async () => {
      const radio = canvas.getByRole('radio');
      const radioSVG = radio.children[0];
      await userEvent.click(radioSVG);
      await step(
        'Checking if the click change the style on component when its checked',
        async () => {
          const radio = canvas.getByRole('radio');
          expect(
            args.onClick,
            'It is expected that the checkbox will appear ticked when clicked'
          ).toHaveBeenCalledOnce();
          expect(
            radio,
            'It is expected that the checkbox has border colors of #0053db when clicked'
          ).toHaveStyle('border-top-color: #0053db');
          expect(
            radio,
            'It is expected that the checkbox has a rgba(0, 0, 0, 0) as background-color when clicked'
          ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
          await userEvent.click(radio);
        }
      );
    });
  },
};

export const NormalDisabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const radioWrapper = canvas.getByLabelText('radioWrapper');

    await step('Checking Radio wrapper', async () => {
      expect(
        radioWrapper,
        "It's  expected that the Div will be rendered"
      ).toBeInTheDocument();
      expect(
        radioWrapper,
        "It's expected that the radio wrapper has a display of flex"
      ).toHaveStyle('display: flex');
      expect(
        radioWrapper,
        "It's expected radio wrapper has a gap of 16px"
      ).toHaveStyle('gap: 16px');
      expect(
        radioWrapper,
        "It's expected to have cursor not-allowed"
      ).toHaveStyle('cursor: not-allowed');
      expect(
        radioWrapper.childNodes.length,
        "It's expected that there will be one elements in the wrapper"
      ).toBe(1);
    });

    await step('Checking radio style', async () => {
      const radio = canvas.getByRole('radio');
      expect(
        radio,
        "It's  expected that the Div will be rendered"
      ).toBeInTheDocument();
      expect(
        radio.childNodes.length,
        "It's expected that there will be one elements in the radio"
      ).toBe(1);
      expect(radio, "It's expected radio to has a display flex").toHaveStyle(
        'display: flex'
      );
      expect(
        radio,
        "It's expected radio to has a align-items center"
      ).toHaveStyle('align-items: center');
      expect(
        radio,
        "It's expected radio to has a justify-content center"
      ).toHaveStyle('justify-content: center');
      expect(
        radio,
        "It's expected radio to has a border-radius 50%"
      ).toHaveStyle('border-radius: 50%');
      expect(
        radio,
        "It's expected icon container do has a width of 20px"
      ).toHaveStyle('width: 20px');
      expect(
        radio,
        "It's expected icon container has a height of 20px"
      ).toHaveStyle('height: 20px');
      expect(
        radio,
        "It's expected icon container has a color of rgb(27, 27, 31)"
      ).toHaveStyle('color: rgb(27, 27, 31');
      expect(
        radio,
        "It's expected icon container to has an opacity of 1"
      ).toHaveStyle('opacity: 0.32');
    });

    await step('Checking radio svg style', async () => {
      const radio = canvas.getByRole('radio');
      const radioSVG = radio.children[0];

      expect(
        radioSVG,
        "It's expected that will be rendered a SVG element"
      ).toBeInTheDocument();
      expect(
        radioSVG,
        "It's expected to has a style width of 20px"
      ).toHaveStyle('width: 20px');
      expect(
        radioSVG,
        "It's expected to has a style of height of 20px"
      ).toHaveStyle('height: 20px');
      expect(
        radioSVG,
        "It's expected to has a style max-width of 20px"
      ).toHaveStyle('max-width: 20px');
      expect(
        radioSVG,
        "It's expected to has a style of max-height of 20px"
      ).toHaveStyle('max-height: 20px');
    });
  },
};

export const Checked: Story = {
  args: {
    defaultValue: true,
    onClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const radioWrapper = canvas.getByLabelText('radioWrapper');

    await step('Checking Radio wrapper', async () => {
      expect(
        radioWrapper,
        "It's  expected that the Div will be rendered"
      ).toBeInTheDocument();
      expect(
        radioWrapper,
        "It's expected that the radio wrapper has a display of flex"
      ).toHaveStyle('display: flex');
      expect(
        radioWrapper,
        "It's expected radio wrapper has a gap of 16px"
      ).toHaveStyle('gap: 16px');
      expect(radioWrapper, "It's expected to have cursor pointer").toHaveStyle(
        'cursor: pointer'
      );
      expect(
        radioWrapper.childNodes.length,
        "It's expected that there will be one elements in the wrapper"
      ).toBe(1);
    });

    await step('Checking radio style', async () => {
      const radio = canvas.getByRole('radio');
      expect(
        radio,
        "It's  expected that the Div will be rendered"
      ).toBeInTheDocument();
      expect(
        radio.childNodes.length,
        "It's expected that there will be one elements in the radio"
      ).toBe(1);
      expect(radio, "It's expected radio to has a display flex").toHaveStyle(
        'display: flex'
      );
      expect(
        radio,
        "It's expected radio to has a align-items center"
      ).toHaveStyle('align-items: center');
      expect(
        radio,
        "It's expected radio to has a justify-content center"
      ).toHaveStyle('justify-content: center');
      expect(
        radio,
        "It's expected radio to has a border-radius 50%"
      ).toHaveStyle('border-radius: 50%');
      expect(
        radio,
        "It's expected icon container do has a width of 20px"
      ).toHaveStyle('width: 20px');
      expect(
        radio,
        "It's expected icon container has a height of 20px"
      ).toHaveStyle('height: 20px');
      expect(
        radio,
        "It's expected icon container has a color of #0053DB"
      ).toHaveStyle('color: #0053DB');
      expect(
        radio,
        "It's expected icon container to has an opacity of 1"
      ).toHaveStyle('opacity: 1');
    });

    await step('Checking radio svg style', async () => {
      const radio = canvas.getByRole('radio');
      const radioSVG = radio.children[0];

      expect(
        radioSVG,
        "It's expected that will be rendered a SVG element"
      ).toBeInTheDocument();
      expect(
        radioSVG,
        "It's expected to has a style width of 20px"
      ).toHaveStyle('width: 20px');
      expect(
        radioSVG,
        "It's expected to has a style of height of 20px"
      ).toHaveStyle('height: 20px');
      expect(
        radioSVG,
        "It's expected to has a style max-width of 20px"
      ).toHaveStyle('max-width: 20px');
      expect(
        radioSVG,
        "It's expected to has a style of max-height of 20px"
      ).toHaveStyle('max-height: 20px');
    });

    await step('Checking the user click event on checkbox', async () => {
      const radio = canvas.getByRole('radio');
      const radioSVG = radio.children[0];
      await userEvent.click(radioSVG);
      await step(
        'Checking if the click change the style on component when its checked',
        async () => {
          const radio = canvas.getByRole('radio');
          expect(
            args.onClick,
            'It is expected that the checkbox will appear ticked when clicked'
          ).toHaveBeenCalledOnce();
          expect(
            radio,
            'It is expected that the checkbox has a rgba(0, 0, 0, 0) as background-color when clicked'
          ).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
          await userEvent.click(radio);
        }
      );
    });
  },
};

export const CheckedDisabled: Story = {
  args: {
    defaultValue: true,
    disabled: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const radioWrapper = canvas.getByLabelText('radioWrapper');

    await step('Checking Radio wrapper', async () => {
      expect(
        radioWrapper,
        "It's  expected that the Div will be rendered"
      ).toBeInTheDocument();
      expect(
        radioWrapper,
        "It's expected that the radio wrapper has a display of flex"
      ).toHaveStyle('display: flex');
      expect(
        radioWrapper,
        "It's expected radio wrapper has a gap of 16px"
      ).toHaveStyle('gap: 16px');
      expect(
        radioWrapper.childNodes.length,
        "It's expected that there will be one elements in the wrapper"
      ).toBe(1);
    });

    await step('Checking radio style', async () => {
      const radio = canvas.getByRole('radio');
      expect(
        radio,
        "It's  expected that the Div will be rendered"
      ).toBeInTheDocument();
      expect(
        radio.childNodes.length,
        "It's expected that there will be one elements in the radio"
      ).toBe(1);
      expect(radio, "It's expected radio to has a display flex").toHaveStyle(
        'display: flex'
      );
      expect(
        radio,
        "It's expected radio to has a align-items center"
      ).toHaveStyle('align-items: center');
      expect(
        radio,
        "It's expected radio to has a justify-content center"
      ).toHaveStyle('justify-content: center');
      expect(
        radio,
        "It's expected radio to has a border-radius 50%"
      ).toHaveStyle('border-radius: 50%');
      expect(
        radio,
        "It's expected icon container do has a width of 20px"
      ).toHaveStyle('width: 20px');
      expect(
        radio,
        "It's expected icon container has a height of 20px"
      ).toHaveStyle('height: 20px');
      expect(
        radio,
        "It's expected icon container has a color of rgb(27, 27, 31)"
      ).toHaveStyle('color: rgb(27, 27, 31');
      expect(
        radio,
        "It's expected icon container to has an opacity of 1"
      ).toHaveStyle('opacity: 0.32');
    });

    await step('Checking radio svg style', async () => {
      const radio = canvas.getByRole('radio');
      const radioSVG = radio.children[0];

      expect(
        radioSVG,
        "It's expected that will be rendered a SVG element"
      ).toBeInTheDocument();
      expect(
        radioSVG,
        "It's expected to has a style width of 20px"
      ).toHaveStyle('width: 20px');
      expect(
        radioSVG,
        "It's expected to has a style of height of 20px"
      ).toHaveStyle('height: 20px');
      expect(
        radioSVG,
        "It's expected to has a style max-width of 20px"
      ).toHaveStyle('max-width: 20px');
      expect(
        radioSVG,
        "It's expected to has a style of max-height of 20px"
      ).toHaveStyle('max-height: 20px');
    });
  },
};
