import { Meta, StoryObj } from '@storybook/react';
import { clearAllMocks, expect, fn, userEvent, within } from '@storybook/test';

import { Slider } from '..';
import { convertREMtoPX } from '../slider.utils';

const meta: Meta<typeof Slider> = {
  title: 'Slider',
  component: Slider,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    initial: {
      control: { type: 'number' },
    },
    bottomValue: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    showZeroValue: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    max: 100,
    initial: 0,
    disabled: false,
    withoutTooltip: false,
    bottomValue: false,
    showZeroValue: false,
    onChange: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const slider = canvas.getByRole('slider');
    const sliderLine = canvas.getByLabelText('slider-line');
    const computedStyle = getComputedStyle(sliderLine);
    const sliderLineBackground = computedStyle.getPropertyValue('background');
    const tooltip = canvas.getByRole('tooltip');

    await step('Checking if the slider structure', async () => {
      expect(
        sliderLine,
        'It expected that the slider line is being rendered'
      ).toBeInTheDocument();

      expect(
        sliderLine,
        `It's expected that slider has the height of ${convertREMtoPX(0.25)}px`
      ).toHaveStyle('height: 4px');

      expect(
        sliderLineBackground,
        `It is expected that the slider has background of ${sliderLineBackground}`
      ).toContain(
        `linear-gradient(to right, rgb(0, 83, 219) 0%, rgb(0, 83, 219) 0%, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.08) 100%)`
      );

      expect(
        slider,
        `It is expected that the slider pointer has background of #FFFFFF`
      ).toHaveStyle('background-color: #FFFFFF');

      expect(
        slider,
        `It is expected that the slider pointer has border color of #0053DB`
      ).toHaveStyle('border-color: #0053DB');

      expect(
        tooltip,
        "It's expected that the tooltip is visible"
      ).toBeVisible();
    });

    await step('Validating the Slider content', () => {
      const typography = sliderLine.children[0].children[0].children[0];

      expect(
        typography,
        `It's expected that the slider text don't have the initial text "${args.initial}"`
      ).not.toHaveTextContent(String(args.initial));

      expect(
        typography,
        "it's expected that the tooltip text font-size will be 16"
      ).toHaveStyle('font-size: 14px');

      expect(
        typography,
        "it's expected that the tag text font-family will be Satoshi"
      ).toHaveStyle('font-family: Proto');

      expect(
        typography.tagName,
        "It's expected that the slider text has a tag-name P"
      ).toBe('P');
    });

    clearAllMocks();

    await step('Checking interactions with the slider', async () => {
      await userEvent.pointer({ target: slider, keys: '[MouseLeft>]' });
      await userEvent.pointer({ target: slider, offset: 100 });
      await userEvent.pointer({ target: slider, offset: 150 });
      await userEvent.pointer({ target: slider, keys: '[/MouseLeft]' });

      expect(
        args.onChange,
        'It should call the function onChange when the slider is dragged'
      ).toHaveBeenCalled();
    });

    clearAllMocks();

    await userEvent.pointer({ target: undefined });

    await userEvent.unhover(slider);
  },
};

export const DefaultInterval: Story = {
  args: {
    max: 100,
    initial: [0, 20],
    disabled: false,
    withoutTooltip: false,
    bottomValue: false,
    showZeroValue: false,
    onChange: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const sliders = canvas.getAllByRole('slider');
    const slider1 = sliders[0];
    const slider2 = sliders[1];
    const sliderLine = canvas.getByLabelText('slider-line');
    const computedStyle = getComputedStyle(sliderLine);
    const sliderLineBackground = computedStyle.getPropertyValue('background');

    const firstRange = args.initial && args.initial[0];
    const lastRange = args.initial && args.initial[1];

    await step('Checking the slider structure', async () => {
      expect(
        sliderLine,
        'It expected that the slider line is being rendered'
      ).toBeInTheDocument();

      expect(
        slider1,
        `It is expected that the first the slider pointer has background of #FFFFFF`
      ).toHaveStyle('background-color: #FFFFFF');

      expect(
        slider2,
        `It is expected that the last slider pointer  has background of #FFFFFF`
      ).toHaveStyle('background-color: #FFFFFF');

      expect(
        slider1,
        `It is expected that the first slider pointer  has border color of #0053DB`
      ).toHaveStyle('border-color: #0053DB');

      expect(
        slider2,
        `It is expected that the last slider pointer  has border color of #0053DB`
      ).toHaveStyle('border-color: #0053DB');

      expect(
        sliderLineBackground,
        `It is expected that the slider has background of ${sliderLineBackground}`
      ).toContain(
        `rgba(0, 0, 0, 0) linear-gradient(to right, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.08) 0%, rgb(0, 83, 219) 0%, rgb(0, 83, 219) ${lastRange}%, rgba(0, 0, 0, 0.08) ${lastRange}%, rgba(0, 0, 0, 0.08) 100%)`
      );

      expect(
        sliderLine,
        `It's expected that slider has the height of ${convertREMtoPX(0.25)}px`
      ).toHaveStyle('height: 4px');
    });

    await step('Validating the Slider content', () => {
      const typography1 = sliderLine.children[0].children[0].children[0];
      const typography2 = sliderLine.children[1].children[0].children[0];

      expect(
        typography1.tagName,
        "It's expected that the slider text has a tag-name P"
      ).toBe('P');

      expect(
        typography1,
        "it's expected that the tooltip text font-size will be 16"
      ).toHaveStyle('font-size: 14px');

      expect(
        typography1,
        "it's expected that the tag text font-family will be Satoshi"
      ).toHaveStyle('font-family: Proto');

      expect(
        typography2.tagName,
        "It's expected that the slider text has a tag-name P"
      ).toBe('P');

      expect(
        typography2,
        "it's expected that the tooltip text font-size will be 16"
      ).toHaveStyle('font-size: 14px');

      expect(
        typography2,
        "it's expected that the tag text font-family will be Satoshi"
      ).toHaveStyle('font-family: Proto');

      expect(
        slider1,
        `It is expected that the first slider has not the tooltip with value ${firstRange}`
      ).not.toHaveTextContent(String(firstRange));

      expect(
        slider2,
        `It is expected that the last slider has the tooltip with value ${lastRange}`
      ).toHaveTextContent('' + lastRange);
    });

    await step('Checking interactions with the sliders', async () => {
      await step('Checking interactions with the slider1', async () => {
        await userEvent.pointer({ target: slider1, keys: '[MouseLeft>]' });
        await userEvent.pointer({ target: slider1, offset: 100 });
        await userEvent.pointer({ target: slider1, offset: 150 });
        await userEvent.pointer({ target: slider1, keys: '[/MouseLeft]' });

        expect(
          args.onChange,
          'When the slider1 is moved, it should call the onChange function'
        ).toHaveBeenCalled();
      });

      await step('Checking interactions with the slider2', async () => {
        await userEvent.pointer({ target: slider2, keys: '[MouseLeft>]' });
        await userEvent.pointer({ target: slider2, offset: 100 });
        await userEvent.pointer({ target: slider2, offset: 150 });
        await userEvent.pointer({ target: slider2, keys: '[/MouseLeft]' });

        expect(
          args.onChange,
          'When the slider2 is moved, it should call the onChange function'
        ).toHaveBeenCalled();
      });
    });
  },
};

export const InTheMiddleWithoutTooltip: Story = {
  args: {
    max: 100,
    initial: 50,
    disabled: false,
    withoutTooltip: true,
    bottomValue: false,
    showZeroValue: false,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const slider = canvas.getByRole('slider');
    const sliderLine = canvas.getByLabelText('slider-line');
    const computedStyle = getComputedStyle(sliderLine);
    const sliderLineBackground = computedStyle.getPropertyValue('background');

    await step('Checking if the slider structure', async () => {
      expect(
        sliderLine,
        'It expected that the slider line is being rendered'
      ).toBeInTheDocument();

      expect(
        sliderLine,
        `It's expected that slider has the height of ${convertREMtoPX(0.25)}px`
      ).toHaveStyle('height: 4px');

      expect(
        sliderLineBackground,
        `It is expected that the slider has background of ${sliderLineBackground}`
      ).toContain(
        `rgba(0, 0, 0, 0) linear-gradient(to right, rgb(0, 83, 219) 0%, rgb(0, 83, 219) ${args.initial}%, rgba(0, 0, 0, 0.08) 50%, rgba(0, 0, 0, 0.08) 100%)`
      );

      expect(
        slider,
        `It is expected that the slider pointer has background of #FFFFFF`
      ).toHaveStyle('background-color: #FFFFFF');

      expect(
        slider,
        `It is expected that the slider pointer has border color of #0053DB`
      ).toHaveStyle('border-color: #0053DB');
    });

    await step('Validating the Slider content', () => {
      const typography = sliderLine.children[0].children[0].children[0];

      expect(
        typography,
        `It's expected that the slider text don't have the inital text "${args.initial}"`
      ).not.toHaveTextContent(String(args.initial));
    });

    await step('Checking interactions with the slider', async () => {
      await userEvent.pointer({ target: slider, keys: '[MouseLeft>]' });
      await userEvent.pointer({ target: slider, offset: 100 });
      await userEvent.pointer({ target: slider, offset: 150 });
      await userEvent.pointer({ target: slider, keys: '[/MouseLeft]' });

      expect(
        args.onChange,
        'It should call the function onChange when the slider is dragged'
      ).toHaveBeenCalled();
    });
  },
};

export const InTheEndWithoutTooltip: Story = {
  args: {
    max: 100,
    initial: 100,
    disabled: false,
    withoutTooltip: true,
    bottomValue: false,
    showZeroValue: false,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const slider = canvas.getByRole('slider');
    const sliderLine = canvas.getByLabelText('slider-line');
    const computedStyle = getComputedStyle(sliderLine);
    const sliderLineBackground = computedStyle.getPropertyValue('background');

    await step('Checking if the slider structure', async () => {
      expect(
        sliderLine,
        'It expected that the slider line is being rendered'
      ).toBeInTheDocument();

      expect(
        sliderLine,
        `It's expected that slider has the height of ${convertREMtoPX(0.25)}px`
      ).toHaveStyle('height: 4px');

      expect(
        sliderLineBackground,
        `It is expected that the slider has background of ${sliderLineBackground}`
      ).toContain(
        `rgba(0, 0, 0, 0) linear-gradient(to right, rgb(0, 83, 219) 0%, rgb(0, 83, 219) ${args.initial}%, rgba(0, 0, 0, 0.08) ${args.initial}%, rgba(0, 0, 0, 0.08) 100%)`
      );

      expect(
        slider,
        `It is expected that the slider pointer has background of #FFFFFF`
      ).toHaveStyle('background-color: #FFFFFF');

      expect(
        slider,
        `It is expected that the slider pointer has border color of #0053DB`
      ).toHaveStyle('border-color: #0053DB');
    });

    await step('Validating the Slider content', () => {
      const typography = sliderLine.children[0].children[0].children[0];

      expect(
        typography,
        `It's expected that the slider text don't have the inital text "${args.initial}"`
      ).not.toHaveTextContent(String(args.initial));
    });

    await step('Checking interactions with the slider', async () => {
      await userEvent.pointer({ target: slider, keys: '[MouseLeft>]' });
      await userEvent.pointer({ target: slider, offset: 100 });
      await userEvent.pointer({ target: slider, offset: 150 });
      await userEvent.pointer({ target: slider, keys: '[/MouseLeft]' });

      expect(
        args.onChange,
        'It should call the function onChange when the slider is dragged'
      ).toHaveBeenCalled();
    });
  },
};

export const InTheMiddleWithTooltip: Story = {
  args: {
    max: 100,
    initial: 50,
    disabled: false,
    withoutTooltip: false,
    bottomValue: true,
    showZeroValue: false,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const slider = canvas.getByRole('slider');
    const sliderLine = canvas.getByLabelText('slider-line');
    const computedStyle = getComputedStyle(sliderLine);
    const sliderLineBackground = computedStyle.getPropertyValue('background');

    await step('Checking if the slider structure', async () => {
      expect(
        sliderLine,
        'It expected that the slider line is being rendered'
      ).toBeInTheDocument();

      expect(
        sliderLine,
        `It's expected that slider has the height of ${convertREMtoPX(0.25)}px`
      ).toHaveStyle('height: 4px');

      expect(
        sliderLineBackground,
        `It is expected that the slider has background of ${sliderLineBackground}`
      ).toContain(
        `rgba(0, 0, 0, 0) linear-gradient(to right, rgb(0, 83, 219) 0%, rgb(0, 83, 219) ${args.initial}%, rgba(0, 0, 0, 0.08) 50%, rgba(0, 0, 0, 0.08) 100%)`
      );

      expect(
        slider,
        `It is expected that the slider pointer has background of #FFFFFF`
      ).toHaveStyle('background-color: #FFFFFF');

      expect(
        slider,
        `It is expected that the slider pointer has border color of #0053DB`
      ).toHaveStyle('border-color: #0053DB');
    });

    await step('Validating the Slider content', () => {
      const typography = sliderLine.children[0].children[0].children[0];

      expect(
        typography,
        "it's expected that the tooltip text font-size will be 16"
      ).toHaveStyle('font-size: 14px');

      expect(
        typography,
        "it's expected that the tag text font-family will be Satoshi"
      ).toHaveStyle('font-family: Proto');

      expect(
        typography,
        `It's expected that the slider has the inital text "${args.initial}"`
      ).toHaveTextContent('' + args.initial);
    });

    await step('Checking interactions with the slider', async () => {
      await userEvent.pointer({ target: slider, keys: '[MouseLeft>]' });
      await userEvent.pointer({ target: slider, offset: 100 });
      await userEvent.pointer({ target: slider, offset: 150 });
      await userEvent.pointer({ target: slider, keys: '[/MouseLeft]' });

      expect(
        args.onChange,
        'It should call the function onChange when the slider is dragged'
      ).toHaveBeenCalled();
    });
  },
};

export const InTheEndWithTooltip: Story = {
  args: {
    max: 100,
    initial: 100,
    disabled: false,
    withoutTooltip: false,
    bottomValue: false,
    showZeroValue: false,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const slider = canvas.getByRole('slider');
    const sliderLine = canvas.getByLabelText('slider-line');
    const computedStyle = getComputedStyle(sliderLine);
    const sliderLineBackground = computedStyle.getPropertyValue('background');

    await step('Checking if the slider structure', async () => {
      expect(
        sliderLine,
        'It expected that the slider line is being rendered'
      ).toBeInTheDocument();

      expect(
        sliderLine,
        `It's expected that slider has the height of ${convertREMtoPX(0.25)}px`
      ).toHaveStyle('height: 4px');

      expect(
        sliderLineBackground,
        `It is expected that the slider has background of ${sliderLineBackground}`
      ).toContain(
        `rgba(0, 0, 0, 0) linear-gradient(to right, rgb(0, 83, 219) 0%, rgb(0, 83, 219) ${args.initial}%, rgba(0, 0, 0, 0.08) ${args.initial}%, rgba(0, 0, 0, 0.08) 100%)`
      );

      expect(
        slider,
        `It is expected that the slider pointer has background of #FFFFFF`
      ).toHaveStyle('background-color: #FFFFFF');

      expect(
        slider,
        `It is expected that the slider pointer has border color of #0053DB`
      ).toHaveStyle('border-color: #0053DB');
    });

    await step('Validating the Slider content', () => {
      const typography = sliderLine.children[0].children[0].children[0];

      expect(
        typography,
        "it's expected that the tooltip text font-size will be 16"
      ).toHaveStyle('font-size: 14px');

      expect(
        typography,
        "it's expected that the tag text font-family will be Satoshi"
      ).toHaveStyle('font-family: Proto');

      expect(
        typography,
        `It's expected that the slider has the inital text "${args.initial}"`
      ).toHaveTextContent('' + args.initial);
    });

    await step('Checking interactions with the slider', async () => {
      await userEvent.pointer({ target: slider, keys: '[MouseLeft>]' });
      await userEvent.pointer({ target: slider, offset: 100 });
      await userEvent.pointer({ target: slider, offset: 150 });
      await userEvent.pointer({ target: slider, keys: '[/MouseLeft]' });

      expect(
        args.onChange,
        'It should call the function onChange when the slider is dragged'
      ).toHaveBeenCalled();
    });
  },
};
