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
    const checkboxWrapper = canvas.getByRole('checkboxWrapper');

    await step('Checking checkbox wrapper style', async () => {
      expect(
        checkboxWrapper,
        'It is expected that the checkbox will be rendered'
      ).toBeInTheDocument();
      expect(
        checkboxWrapper,
        'It is expected that the wrapper has the display style set to flex'
      ).toHaveStyle('display: flex');
      expect(
        checkboxWrapper,
        'It is expected that the wrapper has the align-items style set to center'
      ).toHaveStyle('align-items: center');
      expect(
        checkboxWrapper,
        'It is expected that the wrapper has the cursor style set to pointer'
      ).toHaveStyle('cursor: pointer');
      expect(
        checkboxWrapper,
        'It is expected that the elements in the wrapper are separated by 20px'
      ).toHaveStyle('gap: 20px');
      expect(
        checkboxWrapper.childNodes.length,
        'it is expected that there will be two elements in the wrapper'
      ).toBe(2);
    });

    await step('Checking checkbox style', async () => {
      const checkbox = checkboxWrapper.children[0].children[0];
      expect(
        checkbox.tagName,
        'It is expected that the checkbox is an input'
      ).toBe('INPUT');
      expect(
        checkbox.getAttribute('type'),
        'It is expected that the input has the type attribute of checkbox'
      ).toBe('checkbox');
      expect(
        checkbox,
        'It is expected that the checkbox has a height of 18px'
      ).toHaveStyle('height: 18px');
      expect(
        checkbox,
        'It is expected that the checkbox has a width of 18px'
      ).toHaveStyle('width: 18px');
      expect(
        checkbox,
        'It is expected that the checkbox will have a border size of 18px'
      ).toHaveStyle('border-top-width: 2px');
      expect(
        checkbox,
        'It is expected that the checkbox has border colors of #1b1b1f'
      ).toHaveStyle('border-top-color: #1b1b1f');
      expect(
        checkbox,
        'It is expected that the checkbox has borders curved by 4px'
      ).toHaveStyle('border-top-left-radius: 4px');
      expect(
        checkbox,
        'It is expected that the checkbox has a transparent background'
      ).toHaveStyle('background-color: #0000');
      await step('Checking the mark checked svg', async () => {
        const svgMark =
          checkboxWrapper.children[0].children[1].children[0].children[0];
        expect(
          svgMark.tagName,
          'It is expected that the checked mark will be an svg'
        ).toBe('svg');
        expect(
          svgMark,
          'It is expected that the check mark will have a height of 16px'
        ).toHaveStyle('height: 16px');
        expect(
          svgMark,
          'It is expected that the check mark will have a width of 16px'
        ).toHaveStyle('width: 16px');
      });
    });

    await step('Checking checkbox label style', async () => {
      const labelWrapper = checkboxWrapper.children[1];
      const label = checkboxWrapper.children[1].children[0];
      expect(
        labelWrapper.tagName,
        'It is expected that the description will be an html tag Label'
      ).toBe('LABEL');
      expect(
        label,
        'It is expected that the description will have a font-size of 16px'
      ).toHaveStyle('font-size: 16px');
      expect(
        label,
        'It is expected that the description will have the font-family as satoshi'
      ).toHaveStyle('font-family: Satoshi');
      expect(
        label,
        'It is expected that the description will have a font-weight of 500'
      ).toHaveStyle('font-weight: 500');
    });

    await step('Checking the user click event on checkbox', async () => {
      await userEvent.click(checkboxWrapper.children[0].children[0]);
      await step(
        'Checking if the click change the style on component when its checked',
        async () => {
          const checkboxWrapper = canvas.getByRole('checkboxWrapper');
          const checkbox = checkboxWrapper.children[0].children[0];
          expect(
            args.onClick,
            'It is expected that the checkbox will appear ticked when clicked'
          ).toHaveBeenCalledOnce();
          expect(
            checkbox,
            'It is expected that the checkbox has border colors of #0053db when clicked'
          ).toHaveStyle('border-top-color: #0053db');
          expect(
            checkbox,
            'It is expected that the checkbox has a color #0053db as background when clicked'
          ).toHaveStyle('background-color: #0053db');
          await userEvent.click(checkbox);
        }
      );
      await step(
        'Checking if the click change the style on component when its unchecked',
        async () => {
          const checkboxWrapper = canvas.getByRole('checkboxWrapper');
          const checkbox = checkboxWrapper.children[0].children[0];
          expect(
            args.onClick,
            'It is expected that the checkbox will appear unchecked when clicked'
          ).toHaveBeenCalledTimes(2);
          expect(
            checkbox,
            'It is expected that the checkbox has border colors of #1b1b1f when clicked'
          ).toHaveStyle('border-top-color: #1b1b1f');
          expect(
            checkbox,
            'It is expected that the checkbox has a transparent as background when clicked'
          ).toHaveStyle('background-color: #0000');
        }
      );
    });
  },
};

export const NormalWithoutLabel: Story = {
  args: {
    disabled: false,
    defaultValue: false,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const checkboxWrapper = canvas.getByRole('checkboxWrapper');

    await step('Checking checkbox wrapper style', async () => {
      expect(
        checkboxWrapper,
        'It is expected that the checkbox will be rendered'
      ).toBeInTheDocument();
      expect(
        checkboxWrapper,
        'It is expected that the wrapper has the display style set to flex'
      ).toHaveStyle('display: flex');
      expect(
        checkboxWrapper,
        'It is expected that the wrapper has the align-items style set to center'
      ).toHaveStyle('align-items: center');
      expect(
        checkboxWrapper,
        'It is expected that the wrapper has the cursor style set to pointer'
      ).toHaveStyle('cursor: pointer');
      expect(
        checkboxWrapper,
        'It is expected that the elements in the wrapper are separated by 20px'
      ).toHaveStyle('gap: 20px');
      expect(
        checkboxWrapper.childNodes.length,
        'it is expected that there will be one elements in the wrapper'
      ).toBe(1);
    });

    await step('Checking checkbox style', async () => {
      const checkbox = checkboxWrapper.children[0].children[0];
      expect(
        checkbox.tagName,
        'It is expected that the checkbox is an input'
      ).toBe('INPUT');
      expect(
        checkbox.getAttribute('type'),
        'It is expected that the input has the type attribute of checkbox'
      ).toBe('checkbox');
      expect(
        checkbox,
        'It is expected that the checkbox has a height of 18px'
      ).toHaveStyle('height: 18px');
      expect(
        checkbox,
        'It is expected that the checkbox has a width of 18px'
      ).toHaveStyle('width: 18px');
      expect(
        checkbox,
        'It is expected that the checkbox will have a border size of 18px'
      ).toHaveStyle('border-top-width: 2px');
      expect(
        checkbox,
        'It is expected that the checkbox has border colors of #1b1b1f'
      ).toHaveStyle('border-top-color: #1b1b1f');
      expect(
        checkbox,
        'It is expected that the checkbox has borders curved by 4px'
      ).toHaveStyle('border-top-left-radius: 4px');
      expect(
        checkbox,
        'It is expected that the checkbox has a transparent background'
      ).toHaveStyle('background-color: #0000');
      await step('Checking the mark checked svg', async () => {
        const svgMark =
          checkboxWrapper.children[0].children[1].children[0].children[0];
        expect(
          svgMark.tagName,
          'It is expected that the checked mark will be an svg'
        ).toBe('svg');
        expect(
          svgMark,
          'It is expected that the check mark will have a height of 16px'
        ).toHaveStyle('height: 16px');
        expect(
          svgMark,
          'It is expected that the check mark will have a width of 16px'
        ).toHaveStyle('width: 16px');
      });
    });

    await step('Checking the user click event on checkbox', async () => {
      await userEvent.click(checkboxWrapper.children[0].children[0]);
      await step(
        'Checking if the click change the style on component when its checked',
        async () => {
          const checkboxWrapper = canvas.getByRole('checkboxWrapper');
          const checkbox = checkboxWrapper.children[0].children[0];
          expect(
            args.onClick,
            'It is expected that the checkbox will appear ticked when clicked'
          ).toHaveBeenCalledOnce();
          expect(
            checkbox,
            'It is expected that the checkbox has border colors of #0053db when clicked'
          ).toHaveStyle('border-top-color: #0053db');
          expect(
            checkbox,
            'It is expected that the checkbox has a color #0053db as background when clicked'
          ).toHaveStyle('background-color: #0053db');
          await userEvent.click(checkbox);
        }
      );
      await step(
        'Checking if the click change the style on component when its unchecked',
        async () => {
          const checkboxWrapper = canvas.getByRole('checkboxWrapper');
          const checkbox = checkboxWrapper.children[0].children[0];
          expect(
            args.onClick,
            'It is expected that the checkbox will appear unchecked when clicked'
          ).toHaveBeenCalledTimes(2);
          expect(
            checkbox,
            'It is expected that the checkbox has border colors of #1b1b1f when clicked'
          ).toHaveStyle('border-top-color: #1b1b1f');
          expect(
            checkbox,
            'It is expected that the checkbox has a transparent as background when clicked'
          ).toHaveStyle('background-color: #0000');
        }
      );
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
    const checkboxWrapper = canvas.getByRole('checkboxWrapper');

    await step('Checking checkbox wrapper style', async () => {
      expect(
        checkboxWrapper,
        'It is expected that the checkbox will be rendered'
      ).toBeInTheDocument();
      expect(
        checkboxWrapper,
        'It is expected that the wrapper has the display style set to flex'
      ).toHaveStyle('display: flex');
      expect(
        checkboxWrapper,
        'It is expected that the wrapper has the align-items style set to center'
      ).toHaveStyle('align-items: center');
      expect(
        checkboxWrapper,
        'It is expected that the wrapper has the cursor style set to pointer'
      ).toHaveStyle('cursor: pointer');
      expect(
        checkboxWrapper,
        'It is expected that the elements in the wrapper are separated by 20px'
      ).toHaveStyle('gap: 20px');
      expect(
        checkboxWrapper.childNodes.length,
        'it is expected that there will be two elements in the wrapper'
      ).toBe(2);
    });

    await step('Checking checkbox style', async () => {
      const checkbox = checkboxWrapper.children[0].children[0];
      expect(
        checkbox.tagName,
        'It is expected that the checkbox is an input'
      ).toBe('INPUT');
      expect(
        checkbox.getAttribute('type'),
        'It is expected that the input has the type attribute of checkbox'
      ).toBe('checkbox');
      expect(
        checkbox,
        'It is expected that the checkbox has a height of 18px'
      ).toHaveStyle('height: 18px');
      expect(
        checkbox,
        'It is expected that the checkbox has a width of 18px'
      ).toHaveStyle('width: 18px');
      expect(
        checkbox,
        'It is expected that the checkbox will have a border size of 18px'
      ).toHaveStyle('border-top-width: 2px');
      expect(
        checkbox,
        'It is expected that the checkbox has border colors of #1b1b1f'
      ).toHaveStyle('border-top-color: #1b1b1f');
      expect(
        checkbox,
        'It is expected that the checkbox has borders curved by 4px'
      ).toHaveStyle('border-top-left-radius: 4px');
      expect(
        checkbox,
        'It is expected that the checkbox has a transparent background'
      ).toHaveStyle('background-color: #0000');
      await step('Checking the mark checked svg', async () => {
        const svgMark =
          checkboxWrapper.children[0].children[1].children[0].children[0];
        expect(
          svgMark.tagName,
          'It is expected that the checked mark will be an svg'
        ).toBe('svg');
        expect(
          svgMark,
          'It is expected that the check mark will have a height of 16px'
        ).toHaveStyle('height: 16px');
        expect(
          svgMark,
          'It is expected that the check mark will have a width of 16px'
        ).toHaveStyle('width: 16px');
      });
    });

    await step('Checking checkbox label style', async () => {
      const labelWrapper = checkboxWrapper.children[1];
      const label = checkboxWrapper.children[1].children[0];
      expect(
        labelWrapper.tagName,
        'It is expected that the description will be an html tag Label'
      ).toBe('LABEL');
      expect(
        label,
        'It is expected that the description will have a font-size of 16px'
      ).toHaveStyle('font-size: 16px');
      expect(
        label,
        'It is expected that the description will have the font-family as satoshi'
      ).toHaveStyle('font-family: Satoshi');
      expect(
        label,
        'It is expected that the description will have a font-weight of 500'
      ).toHaveStyle('font-weight: 500');
    });

    await step('Checking the user click event on checkbox', async () => {
      await userEvent.click(checkboxWrapper.children[0].children[0]);
      await step(
        'Checking if the click change the style on component when its checked',
        async () => {
          const checkboxWrapper = canvas.getByRole('checkboxWrapper');
          const checkbox = checkboxWrapper.children[0].children[0];
          expect(
            args.onClick,
            'It is expected that the checkbox will appear ticked when clicked'
          ).toHaveBeenCalledOnce();
          expect(
            checkbox,
            'It is expected that the checkbox has border colors of #0053db when clicked'
          ).toHaveStyle('border-top-color: #0053db');
          expect(
            checkbox,
            'It is expected that the checkbox has a color #0053db as background when clicked'
          ).toHaveStyle('background-color: #0053db');
          await userEvent.click(checkbox);
        }
      );
      await step(
        'Checking if the click change the style on component when its indeterminate',
        async () => {
          const checkboxWrapper = canvas.getByRole('checkboxWrapper');
          const checkbox = checkboxWrapper.children[0].children[0];
          expect(
            args.onClick,
            'It is expected that the checkbox will appear ticked when clicked'
          ).toHaveBeenCalledTimes(2);
          expect(
            checkbox,
            'It is expected that the checkbox has border colors of #0053db when clicked'
          ).toHaveStyle('border-top-color: #0053db');
          expect(
            checkbox,
            'It is expected that the checkbox has a color #0053db as background when clicked'
          ).toHaveStyle('background-color: #0053db');
          await userEvent.click(checkbox);
        }
      );
      await step(
        'Checking if the click change the style on component when its unchecked',
        async () => {
          const checkboxWrapper = canvas.getByRole('checkboxWrapper');
          const checkbox = checkboxWrapper.children[0].children[0];
          expect(
            args.onClick,
            'It is expected that the checkbox will appear unchecked when clicked'
          ).toHaveBeenCalledTimes(3);
          expect(
            checkbox,
            'It is expected that the checkbox has border colors of #1b1b1f when clicked'
          ).toHaveStyle('border-top-color: #1b1b1f');
          expect(
            checkbox,
            'It is expected that the checkbox has a transparent as background when clicked'
          ).toHaveStyle('background-color: #0000');
        }
      );
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
    const checkboxWrapper = canvas.getByRole('checkboxWrapper');

    await step('Checking checkbox wrapper style', async () => {
      expect(
        checkboxWrapper,
        'It is expected that the checkbox will be rendered'
      ).toBeInTheDocument();
      expect(
        checkboxWrapper,
        'It is expected that the wrapper has the display style set to flex'
      ).toHaveStyle('display: flex');
      expect(
        checkboxWrapper,
        'It is expected that the wrapper has the align-items style set to center'
      ).toHaveStyle('align-items: center');
      expect(
        checkboxWrapper,
        'It is expected that the wrapper has the cursor style set to pointer'
      ).toHaveStyle('cursor: pointer');
      expect(
        checkboxWrapper,
        'It is expected that the elements in the wrapper are separated by 20px'
      ).toHaveStyle('gap: 20px');
      expect(
        checkboxWrapper.childNodes.length,
        'it is expected that there will be two elements in the wrapper'
      ).toBe(2);
    });

    await step('Checking checkbox style', async () => {
      const checkbox = checkboxWrapper.children[0].children[0];
      expect(
        checkbox.tagName,
        'It is expected that the checkbox is an input'
      ).toBe('INPUT');
      expect(
        checkbox.getAttribute('type'),
        'It is expected that the input has the type attribute of checkbox'
      ).toBe('checkbox');
      expect(
        checkbox,
        'It is expected that the checkbox has a height of 18px'
      ).toHaveStyle('height: 18px');
      expect(
        checkbox,
        'It is expected that the checkbox has a width of 18px'
      ).toHaveStyle('width: 18px');
      expect(
        checkbox,
        'It is expected that the checkbox will have a border size of 18px'
      ).toHaveStyle('border-top-width: 2px');
      expect(
        checkbox,
        'It is expected that the checkbox has border colors of #1b1b1f'
      ).toHaveStyle('border-top-color: #1b1b1f');
      expect(
        checkbox,
        'It is expected that the checkbox has borders curved by 4px'
      ).toHaveStyle('border-top-left-radius: 4px');
      expect(
        checkbox,
        'It is expected that the checkbox has a transparent background'
      ).toHaveStyle('background-color: #0000');
      await step('Checking the mark checked svg', async () => {
        const svgMark =
          checkboxWrapper.children[0].children[1].children[0].children[0];
        expect(
          svgMark.tagName,
          'It is expected that the checked mark will be an svg'
        ).toBe('svg');
        expect(
          svgMark,
          'It is expected that the check mark will have a height of 16px'
        ).toHaveStyle('height: 16px');
        expect(
          svgMark,
          'It is expected that the check mark will have a width of 16px'
        ).toHaveStyle('width: 16px');
      });
    });

    await step('Checking checkbox label style', async () => {
      const labelWrapper = checkboxWrapper.children[1];
      const label = checkboxWrapper.children[1].children[0];
      expect(
        labelWrapper.tagName,
        'It is expected that the description will be an html tag Label'
      ).toBe('LABEL');
      expect(
        label,
        'It is expected that the description will have a font-size of 16px'
      ).toHaveStyle('font-size: 16px');
      expect(
        label,
        'It is expected that the description will have the font-family as satoshi'
      ).toHaveStyle('font-family: Satoshi');
      expect(
        label,
        'It is expected that the description will have a font-weight of 500'
      ).toHaveStyle('font-weight: 500');
      await step('Checking checkbox supporting text style', async () => {
        const supportingText = checkboxWrapper.children[1].children[1];
        expect(
          supportingText,
          'It is expected that the supporting text will have a font-size of 12px'
        ).toHaveStyle('font-size: 12px');
        expect(
          supportingText,
          'It is expected that the supporting text will have the font-family as satoshi'
        ).toHaveStyle('font-family: Satoshi');
        expect(
          supportingText,
          'It is expected that the supporting text will have a font-weight of 500'
        ).toHaveStyle('font-weight: 500');
      });
    });

    await step('Checking the user click event on checkbox', async () => {
      await userEvent.click(checkboxWrapper.children[0].children[0]);
      await step(
        'Checking if the click change the style on component when its checked',
        async () => {
          const checkboxWrapper = canvas.getByRole('checkboxWrapper');
          const checkbox = checkboxWrapper.children[0].children[0];
          expect(
            args.onClick,
            'It is expected that the checkbox will appear ticked when clicked'
          ).toHaveBeenCalledOnce();
          expect(
            checkbox,
            'It is expected that the checkbox has border colors of #0053db when clicked'
          ).toHaveStyle('border-top-color: #0053db');
          expect(
            checkbox,
            'It is expected that the checkbox has a color #0053db as background when clicked'
          ).toHaveStyle('background-color: #0053db');
          await userEvent.click(checkbox);
        }
      );
      await step(
        'Checking if the click change the style on component when its indeterminate',
        async () => {
          const checkboxWrapper = canvas.getByRole('checkboxWrapper');
          const checkbox = checkboxWrapper.children[0].children[0];
          expect(
            args.onClick,
            'It is expected that the checkbox will appear ticked when clicked'
          ).toHaveBeenCalledTimes(2);
          expect(
            checkbox,
            'It is expected that the checkbox has border colors of #0053db when clicked'
          ).toHaveStyle('border-top-color: #0053db');
          expect(
            checkbox,
            'It is expected that the checkbox has a color #0053db as background when clicked'
          ).toHaveStyle('background-color: #0053db');
          await userEvent.click(checkbox);
        }
      );
      await step(
        'Checking if the click change the style on component when its unchecked',
        async () => {
          const checkboxWrapper = canvas.getByRole('checkboxWrapper');
          const checkbox = checkboxWrapper.children[0].children[0];
          expect(
            args.onClick,
            'It is expected that the checkbox will appear unchecked when clicked'
          ).toHaveBeenCalledTimes(3);
          expect(
            checkbox,
            'It is expected that the checkbox has border colors of #1b1b1f when clicked'
          ).toHaveStyle('border-top-color: #1b1b1f');
          expect(
            checkbox,
            'It is expected that the checkbox has a transparent as background when clicked'
          ).toHaveStyle('background-color: #0000');
        }
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
    const checkboxWrapper = canvas.getByRole('checkboxWrapper');

    await step('Checking checkbox wrapper style', async () => {
      expect(
        checkboxWrapper,
        'It is expected that the checkbox will be rendered'
      ).toBeInTheDocument();
      expect(
        checkboxWrapper,
        'It is expected that the wrapper has the display style set to flex'
      ).toHaveStyle('display: flex');
      expect(
        checkboxWrapper,
        'It is expected that the wrapper has the align-items style set to center'
      ).toHaveStyle('align-items: center');
      expect(
        checkboxWrapper,
        'It is expected that the wrapper has the cursor style set to pointer'
      ).toHaveStyle('cursor: not-allowed');
      expect(
        checkboxWrapper,
        'It is expected that the elements in the wrapper are separated by 20px'
      ).toHaveStyle('gap: 20px');
      expect(
        checkboxWrapper.childNodes.length,
        'it is expected that there will be two elements in the wrapper'
      ).toBe(2);
    });

    await step('Checking checkbox style', async () => {
      const checkbox = checkboxWrapper.children[0].children[0];
      expect(
        checkbox.tagName,
        'It is expected that the checkbox is an input'
      ).toBe('INPUT');
      expect(
        checkbox.getAttribute('type'),
        'It is expected that the input has the type attribute of checkbox'
      ).toBe('checkbox');
      expect(
        checkbox,
        'It is expected that the checkbox has a height of 18px'
      ).toHaveStyle('height: 18px');
      expect(
        checkbox,
        'It is expected that the checkbox has a width of 18px'
      ).toHaveStyle('width: 18px');
      expect(
        checkbox,
        'It is expected that the checkbox will have a border size of 18px'
      ).toHaveStyle('border-top-width: 2px');
      expect(
        checkbox,
        'It is expected that the checkbox has border colors of #0000'
      ).toHaveStyle('border-top-color: #0000');
      expect(
        checkbox,
        'It is expected that the checkbox has borders curved by 4px'
      ).toHaveStyle('border-top-left-radius: 4px');
      expect(
        checkbox,
        'It is expected that the checkbox has a gray on background color'
      ).toHaveStyle('background-color: #0000003d');
      await step('Checking the mark checked svg', async () => {
        const svgMark =
          checkboxWrapper.children[0].children[1].children[0].children[0];
        expect(
          svgMark.tagName,
          'It is expected that the checked mark will be an svg'
        ).toBe('svg');
        expect(
          svgMark,
          'It is expected that the check mark will have a height of 16px'
        ).toHaveStyle('height: 16px');
        expect(
          svgMark,
          'It is expected that the check mark will have a width of 16px'
        ).toHaveStyle('width: 16px');
      });
    });

    await step('Checking checkbox label style', async () => {
      const labelWrapper = checkboxWrapper.children[1];
      const label = checkboxWrapper.children[1].children[0];
      expect(
        labelWrapper.tagName,
        'It is expected that the description will be an html tag Label'
      ).toBe('LABEL');
      expect(
        label,
        'It is expected that the description will have a font-size of 16px'
      ).toHaveStyle('font-size: 16px');
      expect(
        label,
        'It is expected that the description will have the font-family as satoshi'
      ).toHaveStyle('font-family: Satoshi');
      expect(
        label,
        'It is expected that the description will have a font-weight of 500'
      ).toHaveStyle('font-weight: 500');
    });

    await step('Checking the user click event on checkbox', async () => {
      await userEvent.click(checkboxWrapper.children[0].children[0]);
      expect(
        args.onClick,
        'It is expected that the click will not be executed because the input is disabled'
      ).not.toHaveBeenCalledOnce();
    });
  },
};
