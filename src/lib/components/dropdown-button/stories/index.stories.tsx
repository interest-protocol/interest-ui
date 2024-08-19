import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import React, { FC } from 'react';
import { v4 } from 'uuid';

import { Box } from '../../../elements';
import { CircleSVG } from '../../../icons';
import { ListItem, ListItemProps } from '../../list-item';
import { DropdownButton, DropdownButtonProps } from '..';
import { itemsList } from '../dropdown-button.data';
import { isDarkTheme } from '../dropdown-button.utils';

const Dropdown: FC<DropdownButtonProps> = ({ ...props }) => (
  <DropdownButton {...props} containerProps={{ borderRadius: 's' }}>
    {itemsList.map((item: ListItemProps) => (
      <ListItem
        pr="m"
        key={v4()}
        title={item.title}
        disabled={item && item.disabled}
        SuffixIcon={item.SuffixIcon}
        pl={item.PrefixIcon ? 'xs' : 'm'}
        cursor={item.disabled ? 'not-allowed' : 'pointer'}
        PrefixIcon={
          item.PrefixIcon && <Box width="1.5rem">{item.PrefixIcon}</Box>
        }
      />
    ))}
  </DropdownButton>
);

const meta: Meta<typeof Dropdown> = {
  title: 'DropdownButton',
  component: Dropdown,
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

type Story = StoryObj<typeof Dropdown>;

export const WithLabel: Story = {
  args: {
    label: 'Label',
    disabled: false,
    borderRadius: 'xs',
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const isDark = isDarkTheme();

    const button = canvas.getByRole('button');
    const svgElements = button.getElementsByTagName('svg');
    const textElements = button.getElementsByTagName('p');

    await step('Checking the button structure', () => {
      expect(
        button,
        'It expects that the button is being rendered'
      ).toBeInTheDocument();

      if (!isDark) {
        expect(
          button,
          'It expects that the button background is rgb(255, 255, 255)'
        ).toHaveStyle('background-color: rgb(255, 255, 255)');
      } else {
        expect(
          button,
          'It expects that the button background is background-color: rgb(13, 13, 17)'
        ).toHaveStyle('background-color: rgb(13, 13, 17)');
      }

      expect(button, 'It expects that the button height is 40px').toHaveStyle(
        'height: 40px'
      );

      expect(button, 'It expects that the button height is 40px').toHaveStyle(
        'height: 40px'
      );

      expect(
        button,
        'It expects that the button width is 108.781px'
      ).toHaveStyle('width: 108.781px');

      expect(
        button,
        'It expects that the button border-radius is 8px'
      ).toHaveStyle('border-radius: 8px');

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
        button,
        'It expects that the button dont have border-color'
      ).toHaveStyle('border-color: rgba(0, 0, 0, 0)');
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

      if (!isDark) {
        expect(
          dropdown,
          'It expects that the dropdown background is rgb(255, 255, 255)'
        ).toHaveStyle('background-color: rgb(255, 255, 255)');
      } else {
        expect(
          dropdown,
          'It expects that the dropdown background is background-color: rgb(13, 13, 17)'
        ).toHaveStyle('background-color: rgb(13, 13, 17)');
      }

      expect(
        dropdown,
        'It expects that the dropdown position is absolute'
      ).toHaveStyle('position: absolute');

      expect(dropdown, 'It expects that the dropdown top is 56px').toHaveStyle(
        'top: 56px'
      );

      if (!isDark) {
        expect(
          dropdown,
          'It expects that the dropdown border is 1px solid rgb(198, 198, 202)'
        ).toHaveStyle('border: 1px solid rgb(198, 198, 202)');
      } else {
        expect(
          dropdown,
          'It expects that the dropdown border-color is 1px solid rgb(70, 70, 74)'
        ).toHaveStyle('border: 1px solid  rgb(70, 70, 74)');
      }

      expect(
        dropdown,
        'It expects that the dropdown border-radius is 16px'
      ).toHaveStyle('border-radius: 16px');

      expect(
        dropdown,
        'It expects that the dropdown box-shadow is'
      ).toHaveStyle(
        'box-shadow: rgba(13, 16, 23, 0.04) 0px 2px 4px -2px, rgba(13, 16, 23, 0.12) 0px 4px 8px -2px'
      );
    });

    await step('Checking the dropdown content', () => {
      const dropdown = canvas.getByLabelText('dropdown');
      const textElements = dropdown.getElementsByTagName('span');

      const firstChild = dropdown.firstChild && dropdown.firstChild;
      const firstChildLength = firstChild ? firstChild?.childNodes.length : 0;

      const middleChildLength = dropdown.childNodes[1].childNodes.length || 0;

      const lastChild = dropdown.lastChild && dropdown.lastChild;
      const lastChildLength = lastChild ? lastChild?.childNodes.length : 0;

      expect(
        firstChildLength + middleChildLength + lastChildLength,
        'It expects that the dropdown has 6 elements'
      ).toBe(6);

      expect(
        firstChild,
        `It expects that the dropdown first child has the title Option 1`
      ).toHaveTextContent(`${itemsList[0].title}`);

      expect(
        lastChild,
        `It expects that the dropdown first child has the title Option 2`
      ).toHaveTextContent(`${itemsList[1].title}`);

      expect(
        textElements,
        'It expects that the dropdown has 2 text elements'
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
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const isDark = isDarkTheme();

    const button = canvas.getByRole('button');
    const svgElements = button.getElementsByTagName('svg');
    const textElements = button.getElementsByTagName('p');

    await step('Checking the button structure', () => {
      expect(
        button,
        'It expects that the button is being rendered'
      ).toBeInTheDocument();

      if (!isDark) {
        expect(
          button,
          'It expects that the button background is rgb(255, 255, 255)'
        ).toHaveStyle('background-color: rgb(255, 255, 255)');
      } else {
        expect(
          button,
          'It expects that the button background is background-color: rgb(13, 13, 17)'
        ).toHaveStyle('background-color: rgb(13, 13, 17)');
      }

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
        button,
        'It expects that the button dont have border-color'
      ).toHaveStyle('border-color:rgba(0, 0, 0, 0)');
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

      if (!isDark) {
        expect(
          dropdown,
          'It expects that the dropdown background is rgb(255, 255, 255)'
        ).toHaveStyle('background-color: rgb(255, 255, 255)');
      } else {
        expect(
          dropdown,
          'It expects that the dropdown background is background-color: rgb(13, 13, 17)'
        ).toHaveStyle('background-color: rgb(13, 13, 17)');
      }

      expect(
        dropdown,
        'It expects that the dropdown position is absolute'
      ).toHaveStyle('position: absolute');

      expect(dropdown, 'It expects that the dropdown top is 56px').toHaveStyle(
        'top: 56px'
      );

      if (!isDark) {
        expect(
          dropdown,
          'It expects that the dropdown border is 1px solid rgb(198, 198, 202)'
        ).toHaveStyle('border: 1px solid rgb(198, 198, 202)');
      } else {
        expect(
          dropdown,
          'It expects that the dropdown border-color is 1px solid rgb(70, 70, 74)'
        ).toHaveStyle('border: 1px solid  rgb(70, 70, 74)');
      }

      expect(
        dropdown,
        'It expects that the dropdown padding is 16px'
      ).toHaveStyle('border-radius: 16px');

      expect(
        dropdown,
        'It expects that the dropdown box-shadow is'
      ).toHaveStyle(
        'box-shadow: rgba(13, 16, 23, 0.04) 0px 2px 4px -2px, rgba(13, 16, 23, 0.12) 0px 4px 8px -2px'
      );
    });

    await step('Checking the dropdown content', () => {
      const dropdown = canvas.getByLabelText('dropdown');
      const textElements = dropdown.getElementsByTagName('span');
      const firstChild = dropdown.firstChild;
      const middleChild = dropdown.childNodes[1];
      const lastChild = dropdown.lastChild;

      expect(
        dropdown.childNodes.length,
        'It expects that the dropdown has 3 elements'
      ).toBe(3);

      expect(
        firstChild,
        `It expects that the dropdown first child has the title Title`
      ).toHaveTextContent(`${args.title}`);

      expect(
        middleChild,
        `It expects that the dropdown middle child has the title Option 1`
      ).toHaveTextContent(`${itemsList[0].title}`);

      expect(
        lastChild,
        `It expects that the dropdown first child has the title Option 2`
      ).toHaveTextContent(`${itemsList[1].title}`);

      expect(
        textElements,
        'It expects that the dropdown has 2 text elements'
      ).toHaveLength(2);
    });
  },
};

export const WithoutLabelOnlyIcon: Story = {
  args: {
    Icon: <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const svgElements = button.getElementsByTagName('svg');

    const isDark = isDarkTheme();

    await step('Checking the button structure', () => {
      expect(
        button,
        'It expects that the button is being rendered'
      ).toBeInTheDocument();

      if (!isDark) {
        expect(
          button,
          'It expects that the button background is rgb(255, 255, 255)'
        ).toHaveStyle('background-color: rgb(255, 255, 255)');
      } else {
        expect(
          button,
          'It expects that the button background is background-color: rgb(13, 13, 17)'
        ).toHaveStyle('background-color: rgb(13, 13, 17)');
      }

      expect(button, 'It expects that the button height is 40px').toHaveStyle(
        'height: 40px'
      );

      expect(button, 'It expects that the button width is 140px').toHaveStyle(
        'width: 40px'
      );

      expect(
        button,
        'It expects that the button border-radius is 8px'
      ).toHaveStyle('border-radius: 8px');

      expect(
        button,
        'It expects that the button cursor is pointer'
      ).toHaveStyle('cursor: pointer');

      expect(
        button,
        'It expects that the button has a display flex'
      ).toHaveStyle('display: flex');

      expect(
        button,
        'It expects that the button dont have border-color'
      ).toHaveStyle('border-color: rgba(0, 0, 0, 0)');
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

      if (!isDark) {
        expect(
          dropdown,
          'It expects that the dropdown background is rgb(255, 255, 255)'
        ).toHaveStyle('background-color: rgb(255, 255, 255)');
      } else {
        expect(
          dropdown,
          'It expects that the dropdown background is background-color: rgb(13, 13, 17)'
        ).toHaveStyle('background-color: rgb(13, 13, 17)');
      }

      expect(
        dropdown,
        'It expects that the dropdown position is absolute'
      ).toHaveStyle('position: absolute');

      expect(dropdown, 'It expects that the dropdown top is 56px').toHaveStyle(
        'top: 56px'
      );

      if (!isDark) {
        expect(
          dropdown,
          'It expects that the dropdown border is 1px solid rgb(198, 198, 202)'
        ).toHaveStyle('border: 1px solid rgb(198, 198, 202)');
      } else {
        expect(
          dropdown,
          'It expects that the dropdown border-color is 1px solid rgb(70, 70, 74)'
        ).toHaveStyle('border: 1px solid  rgb(70, 70, 74)');
      }

      expect(
        dropdown,
        'It expects that the dropdown border-radius is 16px'
      ).toHaveStyle('border-radius: 16px');

      expect(
        dropdown,
        'It expects that the dropdown box-shadow is'
      ).toHaveStyle(
        'box-shadow: rgba(13, 16, 23, 0.04) 0px 2px 4px -2px, rgba(13, 16, 23, 0.12) 0px 4px 8px -2px'
      );
    });

    await step('Checking the dropdown content', () => {
      const dropdown = canvas.getByLabelText('dropdown');
      const textElements = dropdown.getElementsByTagName('span');

      const firstChild = dropdown.firstChild && dropdown.firstChild;
      const firstChildLength = firstChild ? firstChild?.childNodes.length : 0;

      const middleChildLength = dropdown.childNodes[1].childNodes.length || 0;

      const lastChild = dropdown.lastChild && dropdown.lastChild;
      const lastChildLength = lastChild ? lastChild?.childNodes.length : 0;

      expect(
        firstChildLength + middleChildLength + lastChildLength,
        'It expects that the dropdown has 6 elements'
      ).toBe(6);

      expect(
        firstChild,
        `It expects that the dropdown first child has the title Option 1`
      ).toHaveTextContent(`${itemsList[0].title}`);

      expect(
        lastChild,
        `It expects that the dropdown first child has the title Option 2`
      ).toHaveTextContent(`${itemsList[1].title}`);

      expect(
        textElements,
        'It expects that the dropdown has 2 text elements'
      ).toHaveLength(2);
    });
  },
};
