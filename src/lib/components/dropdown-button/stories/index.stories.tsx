import { Meta, StoryObj } from '@storybook/react';
import { clearAllMocks, expect, fn, userEvent, within } from '@storybook/test';
import React from 'react';

import { CircleSVG } from '../../../icons';
import { RadioButton } from '../../radio-button';
import { ToggleButton } from '../../toggle';
import { DropdownButton } from '..';

const meta: Meta<typeof DropdownButton> = {
  title: 'DropdownButton',
  component: DropdownButton,
  argTypes: {
    label: {
      defaultValue: 'Label',
      control: { type: 'text' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownButton>;

export const WithLabel: Story = {
  args: {
    label: 'Label',
    disabled: false,
    items: [
      {
        SuffixIcon: <RadioButton defaultValue={false} />,
        title: 'Option 1',
      },
      {
        SuffixIcon: <RadioButton defaultValue={false} />,
        title: 'Option 2',
      },
    ],
    borderRadius: 'xs',
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const borderColor = computedStyle.getPropertyValue('border-color');
    const svgElements = button.getElementsByTagName('svg');
    const textElements = button.getElementsByTagName('p');

    await step('Checking the button structure', () => {
      expect(
        button,
        'It expects that the button is being rendered'
      ).toBeInTheDocument();

      expect(
        background,
        'It expects that the button background is rgb(255, 255, 255)'
      ).toContain('rgb(255, 255, 255)');

      expect(button, 'It expects that the button height is 40px').toHaveStyle(
        'height: 40px'
      );

      expect(
        button,
        'It expects that the button width is 108.781px'
      ).toHaveStyle('width: 108.781px');

      expect(button, 'It expects that the button padding is 8px').toHaveStyle(
        'border-radius: 8px'
      );

      expect(button, 'It expects that the button padding is 8px').toHaveStyle(
        'padding: 8px 16px'
      );

      expect(
        button,
        'It expects that the button cursor is pointer'
      ).toHaveStyle('cursor: pointer');

      expect(
        button,
        'It expects that the button has a display flex'
      ).toHaveStyle('display: flex');

      expect(
        borderColor,
        'It expects that the button dont have border-color'
      ).toBe('rgba(0, 0, 0, 0)');
    });

    await step('Checking the button content', () => {
      expect(
        button.childElementCount,
        'It expects that the button has 2 elements'
      ).toBe(2);

      expect(
        (button.firstChild as HTMLElement).tagName,
        'It expects that the button first child is a text'
      ).toBe('P');

      expect(
        button,
        `It expects that the button has the label ${args.label}`
      ).toHaveTextContent('' + args.label);

      expect(
        svgElements,
        'It expects that the button has one svg element'
      ).toHaveLength(1);

      expect(
        textElements,
        'It expects that the button has one text element'
      ).toHaveLength(1);
    });

    clearAllMocks();

    await step('Checking the button click event', async () => {
      await userEvent.click(button);

      expect(
        args.onClick,
        'It expects that when to dropdown is clicked, the onclic event is called'
      ).toHaveBeenCalled();
    });

    await step('Checking the dropdown structure', async () => {
      await userEvent.click(button);

      const dropdown = canvas.getByLabelText('dropdown');
      const computedStyle = getComputedStyle(dropdown);
      const background = computedStyle.getPropertyValue('background');

      expect(
        background,
        'It expects that the dropdown background is rgb(255, 255, 255)'
      ).toContain('rgb(255, 255, 255)');

      expect(
        dropdown,
        'It expects that the dropdown position is absolute'
      ).toHaveStyle('position: absolute');

      expect(dropdown, 'It expects that the dropdown top is 56px').toHaveStyle(
        'top: 56px'
      );

      expect(
        dropdown,
        'It expects that the dropdown height is 114px'
      ).toHaveStyle('height: 114px');

      expect(
        dropdown,
        'It expects that the dropdown width is 241px'
      ).toHaveStyle('width: 241px');

      expect(
        dropdown,
        'It expects that the dropdown border is 1px solid'
      ).toHaveStyle('border: 1px solid  rgb(198, 198, 202)');

      expect(
        dropdown,
        'It expects that the dropdown border-color is rgb(198, 198, 202)'
      ).toHaveStyle('border-color: rgb(198, 198, 202)');

      expect(
        dropdown,
        'It expects that the dropdown padding is 8px'
      ).toHaveStyle('border-radius: 8px');

      expect(
        dropdown,
        'It expects that the dropdown shadow is rgba(13, 16, 23, 0.04) 0px 2px 4px -2px, rgba(13, 16, 23, 0.12) 0px 4px 8px -2px'
      ).toHaveStyle(
        'box-shadow: rgba(13, 16, 23, 0.04) 0px 2px 4px -2px, rgba(13, 16, 23, 0.12) 0px 4px 8px -2px'
      );
    });

    await step('Checking the dropdown content', () => {
      const dropdown = canvas.getByLabelText('dropdown');
      const textElements = dropdown.getElementsByTagName('span');
      const firstChild = dropdown.firstChild;
      const lastChild = dropdown.lastChild;
      const radios = canvas.getAllByTestId('radioTest');

      const firstChildLength = firstChild ? firstChild.childNodes.length : 0;
      const lastChildLength = lastChild ? lastChild.childNodes.length : 0;

      expect(
        firstChildLength + lastChildLength,
        'It expects that the dropdown has 4 elements'
      ).toBe(4);

      expect(
        firstChild,
        `It expects that the dropdown first child has the title Option 1`
      ).toHaveTextContent('Option 1');

      expect(
        lastChild,
        `It expects that the dropdown last child has the title Option 2`
      ).toHaveTextContent('Option 2');

      expect(
        textElements,
        'It expects that the dropdown has one text element'
      ).toHaveLength(2);

      expect(
        radios,
        'It expects that the dropdown has 2 radio elements'
      ).toHaveLength(2);
    });
  },
};

export const WithLabelRounded: Story = {
  args: {
    label: 'Label',
    disabled: false,
    title: 'Title',
    Icon: <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />,
    items: [
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={false} />,
        title: 'List item',
      },
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={true} />,
        title: 'List item',
      },
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={false} />,
        title: 'List item',
      },
    ],
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const borderColor = computedStyle.getPropertyValue('border-color');
    const svgElements = button.getElementsByTagName('svg');
    const textElements = button.getElementsByTagName('p');

    await step('Checking the button structure', () => {
      expect(
        button,
        'It expects that the button is being rendered'
      ).toBeInTheDocument();

      expect(
        background,
        'It expects that the button background is rgb(255, 255, 255)'
      ).toContain('rgb(255, 255, 255)');

      expect(button, 'It expects that the button height is 40px').toHaveStyle(
        'height: 40px'
      );

      expect(
        button,
        'It expects that the button width is 132.781px'
      ).toHaveStyle('width: 132.781px');

      expect(
        button,
        'It expects that the button padding is 159984px'
      ).toHaveStyle('border-radius: 159984px');

      expect(
        button,
        'It expects that the button cursor is pointer'
      ).toHaveStyle('cursor: pointer');

      expect(
        button,
        'It expects that the button has a display flex'
      ).toHaveStyle('display: flex');

      expect(
        borderColor,
        'It expects that the button dont have border-color'
      ).toBe('rgba(0, 0, 0, 0)');
    });

    await step('Checking the button content', () => {
      expect(
        button.childElementCount,
        'It expects that the button has 3 elements'
      ).toBe(3);

      expect(
        (button.firstChild?.firstChild as HTMLElement).tagName,
        'It expects that the button first child is an svg'
      ).toBe('svg');

      expect(
        button,
        `It expects that the button has the label ${args.label}`
      ).toHaveTextContent('' + args.label);

      expect(
        svgElements,
        'It expects that the button has 2 svg elements'
      ).toHaveLength(2);

      expect(
        textElements,
        'It expects that the button has one text element'
      ).toHaveLength(1);
    });

    clearAllMocks();

    await step('Checking the button click event', async () => {
      await userEvent.click(button);

      expect(
        args.onClick,
        'It expects that when to dropdown is clicked, the onclic event is called'
      ).toHaveBeenCalled();
    });

    await step('Checking the dropdown structure', async () => {
      await userEvent.click(button);

      const dropdown = canvas.getByLabelText('dropdown');
      const computedStyle = getComputedStyle(dropdown);
      const background = computedStyle.getPropertyValue('background');

      expect(
        background,
        'It expects that the dropdown background is rgb(255, 255, 255)'
      ).toContain('rgb(255, 255, 255)');

      expect(
        dropdown,
        'It expects that the dropdown position is absolute'
      ).toHaveStyle('position: absolute');

      expect(dropdown, 'It expects that the dropdown top is 56px').toHaveStyle(
        'top: 56px'
      );

      expect(
        dropdown,
        'It expects that the dropdown height is 223px'
      ).toHaveStyle('height: 223px');

      expect(
        dropdown,
        'It expects that the dropdown width is 241px'
      ).toHaveStyle('width: 241px');

      expect(
        dropdown,
        'It expects that the dropdown border is 1px solid'
      ).toHaveStyle('border: 1px solid  rgb(198, 198, 202)');

      expect(
        dropdown,
        'It expects that the dropdown border-color is rgb(198, 198, 202)'
      ).toHaveStyle('border-color: rgb(198, 198, 202)');

      expect(
        dropdown,
        'It expects that the dropdown padding is 16px'
      ).toHaveStyle('border-radius: 16px');

      expect(
        dropdown,
        'It expects that the dropdown shadow is rgba(13, 16, 23, 0.04) 0px 2px 4px -2px, rgba(13, 16, 23, 0.12) 0px 4px 8px -2px'
      ).toHaveStyle(
        'box-shadow: rgba(13, 16, 23, 0.04) 0px 2px 4px -2px, rgba(13, 16, 23, 0.12) 0px 4px 8px -2px'
      );
    });

    await step('Checking the dropdown content', () => {
      const dropdown = canvas.getByLabelText('dropdown');
      const textElements = dropdown.getElementsByTagName('span');
      const firstChild = dropdown.childNodes[1];
      const middleChild = dropdown.childNodes[2];
      const lastChild = dropdown.childNodes[3];
      const toggles = dropdown.querySelectorAll('[name="toggle"]');

      const firstChildLength = firstChild
        ? dropdown.childNodes[1].childNodes.length
        : 0;

      const middleChildLength = middleChild
        ? dropdown.childNodes[2].childNodes.length
        : 0;
      const lastChildLength = lastChild
        ? dropdown.childNodes[2].childNodes.length
        : 0;

      expect(
        firstChildLength + middleChildLength + lastChildLength,
        'It expects that the dropdown has 9 elements'
      ).toBe(9);

      expect(
        dropdown,
        `It expects that the dropdown has the title Title`
      ).toHaveTextContent('Title');

      expect(
        dropdown,
        `It expects that the dropdown first child has the title Option 1`
      ).toHaveTextContent('List item');

      expect(
        textElements,
        'It expects that the dropdown has 3 text elements'
      ).toHaveLength(3);

      expect(
        toggles,
        'It expects that the dropdown has 3 toggle elements'
      ).toHaveLength(3);
    });
  },
};

export const WithoutLabelOnlyIcon: Story = {
  args: {
    Icon: <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />,
    items: [
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={false} />,
        title: 'List item',
      },
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={true} />,
        title: 'List item',
      },
      {
        PrefixIcon: (
          <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        ),
        SuffixIcon: <ToggleButton name="toggle" defaultValue={false} />,
        title: 'List item',
      },
    ],
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const computedStyle = getComputedStyle(button);
    const background = computedStyle.getPropertyValue('background');
    const borderColor = computedStyle.getPropertyValue('border-color');
    const svgElements = button.getElementsByTagName('svg');
    await step('Checking the button structure', () => {
      expect(
        button,
        'It expects that the button is being rendered'
      ).toBeInTheDocument();

      expect(
        background,
        'It expects that the button background is rgb(255, 255, 255)'
      ).toContain('rgb(255, 255, 255)');

      expect(button, 'It expects that the button height is 40px').toHaveStyle(
        'height: 40px'
      );

      expect(button, 'It expects that the button width is 140px').toHaveStyle(
        'width: 40px'
      );

      expect(button, 'It expects that the button padding is 8px').toHaveStyle(
        'border-radius: 8px'
      );

      expect(
        button,
        'It expects that the button cursor is pointer'
      ).toHaveStyle('cursor: pointer');

      expect(
        button,
        'It expects that the button has a display flex'
      ).toHaveStyle('display: flex');

      expect(
        borderColor,
        'It expects that the button dont have border-color'
      ).toBe('rgba(0, 0, 0, 0)');
    });

    await step('Checking the button content', () => {
      expect(
        button.childElementCount,
        'It expects that the button has 1 element'
      ).toBe(1);

      expect(
        (button.firstChild?.firstChild as HTMLElement).tagName,
        'It expects that the button first child is an svg'
      ).toBe('svg');

      expect(
        svgElements,
        'It expects that the button has 1 svg element'
      ).toHaveLength(1);
    });

    clearAllMocks();

    await step('Checking the button click event', async () => {
      await userEvent.click(button);

      expect(
        args.onClick,
        'It expects that when to dropdown is clicked, the onclic event is called'
      ).toHaveBeenCalled();
    });

    await step('Checking the dropdown structure', async () => {
      await userEvent.click(button);

      const dropdown = canvas.getByLabelText('dropdown');
      const computedStyle = getComputedStyle(dropdown);
      const background = computedStyle.getPropertyValue('background');

      expect(
        background,
        'It expects that the dropdown background is rgb(255, 255, 255)'
      ).toContain('rgb(255, 255, 255)');

      expect(
        dropdown,
        'It expects that the dropdown position is absolute'
      ).toHaveStyle('position: absolute');

      expect(dropdown, 'It expects that the dropdown top is 56px').toHaveStyle(
        'top: 56px'
      );

      expect(
        dropdown,
        'It expects that the dropdown height is 170px'
      ).toHaveStyle('height: 170px');

      expect(
        dropdown,
        'It expects that the dropdown width is 241px'
      ).toHaveStyle('width: 241px');

      expect(
        dropdown,
        'It expects that the dropdown border is 1px solid'
      ).toHaveStyle('border: 1px solid  rgb(198, 198, 202)');

      expect(
        dropdown,
        'It expects that the dropdown border-color is rgb(198, 198, 202)'
      ).toHaveStyle('border-color: rgb(198, 198, 202)');

      expect(
        dropdown,
        'It expects that the dropdown padding is 16px'
      ).toHaveStyle('border-radius: 16px');

      expect(
        dropdown,
        'It expects that the dropdown shadow is rgba(13, 16, 23, 0.04) 0px 2px 4px -2px, rgba(13, 16, 23, 0.12) 0px 4px 8px -2px'
      ).toHaveStyle(
        'box-shadow: rgba(13, 16, 23, 0.04) 0px 2px 4px -2px, rgba(13, 16, 23, 0.12) 0px 4px 8px -2px'
      );
    });

    await step('Checking the dropdown content', () => {
      const dropdown = canvas.getByLabelText('dropdown');
      const textElements = dropdown.getElementsByTagName('span');

      const toggles = dropdown.querySelectorAll('[name="toggle"]');

      const firstChildLength =
        (dropdown.firstChild && dropdown.firstChild.childNodes.length) || 0;
      const middleChildLength = dropdown.childNodes[1].childNodes.length || 0;
      const lastChildLength =
        (dropdown.lastChild && dropdown.lastChild.childNodes.length) || 0;

      expect(
        firstChildLength + middleChildLength + lastChildLength,
        'It expects that the dropdown has 9 elements'
      ).toBe(9);

      expect(
        dropdown,
        `It expects that the dropdown first child has the title Option 1`
      ).toHaveTextContent('List item');

      expect(
        textElements,
        'It expects that the dropdown has 3 text elements'
      ).toHaveLength(3);

      expect(
        toggles,
        'It expects that the dropdown has 3 toggle elements'
      ).toHaveLength(3);
    });
  },
};
