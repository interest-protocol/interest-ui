import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import React from 'react';

import { ArrowRightIcon } from '../../../../storybook/icons';
import { ArrowRightSVG } from '../../../icons';
import { RadioButton, ToggleButton } from '../../';
import { ListItem } from '..';

const meta: Meta<typeof ListItem> = {
  title: 'ListItem',
  component: ListItem,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    PrefixIcon: {
      control: { type: 'object' },
    },
    SuffixIcon: {
      control: { type: 'object' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ListItem>;

export const Normal: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const listItem = canvas.getByRole('listitem');
    const numberOfTexts = listItem.getElementsByTagName('span').length;

    await step('Validating the list item structure', () => {
      expect(
        listItem,
        "It's expected that listitem is rendered"
      ).toBeInTheDocument();

      expect(
        listItem,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('cursor: pointer');

      expect(
        listItem.children[0],
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('display: flex');

      expect(
        listItem.children[0],
        `It's expected that the flex-direction of the listitem is column`
      ).toHaveStyle(`flex-direction: column`);

      expect(
        numberOfTexts,
        "It's expected that the lsitem has 2 elements"
      ).toBe(2);
    });

    await step('Validating the list item content', () => {
      const title = listItem.children[0].children[0];
      const description = listItem.children[0].children[1];

      expect(
        title.tagName,
        "It's expected that the title text has a tag-name SPAN"
      ).toBe('SPAN');

      expect(
        title,
        `It's expected that the title text is ${args.children}`
      ).toHaveTextContent(args.title);

      expect(
        title,
        "it's expected that the title text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        title,
        "it's expected that the title text font-size will be 14"
      ).toHaveStyle('font-size: 14px');

      expect(
        title,
        "it's expected that the title text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');

      expect(
        description.tagName,
        "It's expected that the description text has a tag-name SPAN"
      ).toBe('SPAN');

      expect(
        description,
        `It's expected that the description text is ${args.description}`
      ).toHaveTextContent(args.description || '');

      expect(
        description,
        "it's expected that the description text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        description,
        "it's expected that the description text font-size will be 12"
      ).toHaveStyle('font-size: 12px');

      expect(
        description,
        "it's expected that the description text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
    });

    await step('Testing onClick event', async () => {
      await userEvent.click(listItem);

      expect(
        args.onClick,
        'It expects that when the listitem is clicked, the event onClick is called'
      ).toHaveBeenCalled();
    });
  },
};

export const WithoutDescription: Story = {
  args: {
    title: 'List item',
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const listItem = canvas.getByRole('listitem');
    const numberOfTexts = listItem.getElementsByTagName('span').length;

    await step('Validating the list item structure', () => {
      expect(
        listItem,
        "It's expected that listitem is rendered"
      ).toBeInTheDocument();

      expect(
        listItem,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('cursor: pointer');

      expect(
        listItem.children[0],
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('display: flex');

      expect(
        listItem.children[0],
        `It's expected that the flex-direction of the listitem is column`
      ).toHaveStyle(`flex-direction: column`);

      expect(numberOfTexts, "It's expected that the lsitem has 1 element").toBe(
        1
      );
    });

    await step('Validating the list item content', () => {
      const title = listItem.children[0].children[0];

      expect(
        title.tagName,
        "It's expected that the title text has a tag-name SPAN"
      ).toBe('SPAN');

      expect(
        title,
        `It's expected that the title text is ${args.children}`
      ).toHaveTextContent(args.title);

      expect(
        title,
        "it's expected that the title text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        title,
        "it's expected that the title text font-size will be 14"
      ).toHaveStyle('font-size: 14px');

      expect(
        title,
        "it's expected that the title text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
    });

    await step('Testing onClick event', async () => {
      await userEvent.click(listItem);

      expect(
        args.onClick,
        'It expects that when the listitem is clicked, the event onClick is called'
      ).toHaveBeenCalled();
    });
  },
};

export const WithPrefix: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    PrefixIcon: <ArrowRightIcon />,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const listItem = canvas.getByRole('listitem');
    const firstChild = listItem.firstChild?.firstChild
      ?.firstChild as HTMLElement;
    const svgElements = listItem.querySelectorAll('svg');
    const numberOfTexts = listItem.getElementsByTagName('span').length;

    await step('Validating the list item structure', () => {
      expect(
        listItem,
        "It's expected that listitem is rendered"
      ).toBeInTheDocument();

      expect(
        listItem,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('cursor: pointer');

      expect(
        numberOfTexts,
        "It's expected that the listitem has 2 text elements"
      ).toBe(numberOfTexts);

      expect(
        firstChild.tagName,
        'Expect that the first child of the component is a svg'
      ).toBe('svg');

      expect(
        svgElements.length,
        "It's expected that the listitem has 1 svg element"
      ).toBe(1);
    });

    await step('Validating the list item content', () => {
      const title = listItem.children[1].children[0];
      const description = listItem.children[1].children[1];

      expect(
        title.tagName,
        "It's expected that the title text has a tag-name SPAN"
      ).toBe('SPAN');

      expect(
        title,
        `It's expected that the title text is ${args.children}`
      ).toHaveTextContent(args.title);

      expect(
        title,
        "it's expected that the title text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        title,
        "it's expected that the title text font-size will be 14"
      ).toHaveStyle('font-size: 14px');

      expect(
        title,
        "it's expected that the title text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');

      expect(
        description.tagName,
        "It's expected that the description text has a tag-name SPAN"
      ).toBe('SPAN');

      expect(
        description,
        `It's expected that the description text is ${args.description}`
      ).toHaveTextContent(args.description || '');

      expect(
        description,
        "it's expected that the description text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        description,
        "it's expected that the description text font-size will be 12"
      ).toHaveStyle('font-size: 12px');

      expect(
        description,
        "it's expected that the description text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
    });

    await step('Testing onClick event', async () => {
      await userEvent.click(listItem);

      expect(
        args.onClick,
        'It expects that when the listitem is clicked, the event onClick is called'
      ).toHaveBeenCalled();
    });
  },
};

export const WithPrefixWithoutDescription: Story = {
  args: {
    title: 'List item',
    PrefixIcon: <ArrowRightIcon />,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const listItem = canvas.getByRole('listitem');
    const firstChild = listItem.firstChild?.firstChild
      ?.firstChild as HTMLElement;
    const svgElements = listItem.querySelectorAll('svg');
    const numberOfTexts = listItem.getElementsByTagName('span').length;

    await step('Validating the list item structure', () => {
      expect(
        listItem,
        "It's expected that listitem is rendered"
      ).toBeInTheDocument();

      expect(
        listItem,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('cursor: pointer');

      expect(
        numberOfTexts,
        "It's expected that the listitem has 1 text element"
      ).toBe(numberOfTexts);

      expect(
        firstChild.tagName,
        'Expect that the first child of the component is a svg'
      ).toBe('svg');

      expect(
        svgElements.length,
        "It's expected that the listitem has 1 svg element"
      ).toBe(1);
    });

    await step('Validating the list item content', () => {
      const title = listItem.children[1].children[0];

      expect(
        title.tagName,
        "It's expected that the title text has a tag-name SPAN"
      ).toBe('SPAN');

      expect(
        title,
        `It's expected that the title text is ${args.children}`
      ).toHaveTextContent(args.title);

      expect(
        title,
        "it's expected that the title text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        title,
        "it's expected that the title text font-size will be 14"
      ).toHaveStyle('font-size: 14px');

      expect(
        title,
        "it's expected that the title text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
    });

    await step('Testing onClick event', async () => {
      await userEvent.click(listItem);

      expect(
        args.onClick,
        'It expects that when the listitem is clicked, the event onClick is called'
      ).toHaveBeenCalled();
    });
  },
};

export const WithSuffix: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    SuffixIcon: <ArrowRightIcon />,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const listItem = canvas.getByRole('listitem');
    const lastChild = listItem.lastChild?.firstChild as HTMLElement;
    const svgElements = listItem.querySelectorAll('svg');
    const numberOfTexts = listItem.getElementsByTagName('span').length;

    await step('Validating the list item structure', () => {
      expect(
        listItem,
        "It's expected that listitem is rendered"
      ).toBeInTheDocument();

      expect(
        listItem,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('cursor: pointer');

      expect(
        numberOfTexts,
        "It's expected that the listitem has 2 text elements"
      ).toBe(numberOfTexts);

      expect(
        lastChild.tagName,
        'Expect that the last child of the component is a svg'
      ).toBe('svg');

      expect(
        svgElements.length,
        "It's expected that the listitem has 1 svg element"
      ).toBe(1);
    });

    await step('Validating the list item content', () => {
      const title = listItem.children[0].children[0];
      const description = listItem.children[0].children[1];

      expect(
        title.tagName,
        "It's expected that the title text has a tag-name SPAN"
      ).toBe('SPAN');

      expect(
        title,
        `It's expected that the title text is ${args.children}`
      ).toHaveTextContent(args.title);

      expect(
        title,
        "it's expected that the title text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        title,
        "it's expected that the title text font-size will be 14"
      ).toHaveStyle('font-size: 14px');

      expect(
        title,
        "it's expected that the title text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');

      expect(
        description.tagName,
        "It's expected that the description text has a tag-name SPAN"
      ).toBe('SPAN');

      expect(
        description,
        `It's expected that the description text is ${args.description}`
      ).toHaveTextContent(args.description || '');

      expect(
        description,
        "it's expected that the description text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        description,
        "it's expected that the description text font-size will be 12"
      ).toHaveStyle('font-size: 12px');

      expect(
        description,
        "it's expected that the description text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
    });

    await step('Testing onClick event', async () => {
      await userEvent.click(listItem);

      expect(
        args.onClick,
        'It expects that when the listitem is clicked, the event onClick is called'
      ).toHaveBeenCalled();
    });
  },
};

export const WithSuffixWithoutDescription: Story = {
  args: {
    title: 'List item',
    SuffixIcon: <ArrowRightIcon />,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const listItem = canvas.getByRole('listitem');
    const lastChild = listItem.lastChild?.firstChild as HTMLElement;
    const svgElements = listItem.querySelectorAll('svg');
    const numberOfTexts = listItem.getElementsByTagName('span').length;

    await step('Validating the list item structure', () => {
      expect(
        listItem,
        "It's expected that listitem is rendered"
      ).toBeInTheDocument();

      expect(
        listItem,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('cursor: pointer');

      expect(
        numberOfTexts,
        "It's expected that the listitem has 2 text elements"
      ).toBe(numberOfTexts);

      expect(
        lastChild.tagName,
        'Expect that the last child of the component is a svg'
      ).toBe('svg');

      expect(
        svgElements.length,
        "It's expected that the listitem has 1 svg element"
      ).toBe(1);
    });

    await step('Validating the Tag content', () => {
      const title = listItem.children[0].children[0];

      expect(
        title.tagName,
        "It's expected that the title text has a tag-name SPAN"
      ).toBe('SPAN');

      expect(
        title,
        `It's expected that the title text is ${args.children}`
      ).toHaveTextContent(args.title);

      expect(
        title,
        "it's expected that the title text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        title,
        "it's expected that the title text font-size will be 14"
      ).toHaveStyle('font-size: 14px');

      expect(
        title,
        "it's expected that the title text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
    });

    await step('Testing onClick event', async () => {
      await userEvent.click(listItem);

      expect(
        args.onClick,
        'It expects that when the listitem is clicked, the event onClick is called'
      ).toHaveBeenCalled();
    });
  },
};

export const WithSuffixToggle: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    SuffixIcon: <ToggleButton name="switch" defaultValue={false} />,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByRole('listitem');
    const lastChild = listItem.lastChild as HTMLElement;
    const switches = canvas.getAllByRole('switch');
    const numberOfTexts = listItem.getElementsByTagName('span').length;
    const switchToggle = canvas.getByRole('switch');

    await step('Validating the list item structure', () => {
      expect(
        listItem,
        "It's expected that listitem is rendered"
      ).toBeInTheDocument();

      expect(
        listItem,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('cursor: pointer');

      expect(
        numberOfTexts,
        "It's expected that the listitem has 2 text elements"
      ).toBe(numberOfTexts);

      expect(
        lastChild,
        'Expect that the last child of the component is the toggle'
      ).toBe(switchToggle);

      expect(
        switches.length + numberOfTexts,
        "It's expected that the listitem has 3 elements"
      ).toBe(3);
    });

    await step('Validating the Tag content', () => {
      const title = listItem.children[0].children[0];
      const description = listItem.children[0].children[1];

      expect(
        title.tagName,
        "It's expected that the title text has a tag-name SPAN"
      ).toBe('SPAN');

      expect(
        title,
        `It's expected that the title text is ${args.children}`
      ).toHaveTextContent(args.title);

      expect(
        title,
        "it's expected that the title text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        title,
        "it's expected that the title text font-size will be 14"
      ).toHaveStyle('font-size: 14px');

      expect(
        title,
        "it's expected that the title text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');

      expect(
        description.tagName,
        "It's expected that the description text has a tag-name SPAN"
      ).toBe('SPAN');

      expect(
        description,
        `It's expected that the description text is ${args.description}`
      ).toHaveTextContent(args.description || '');

      expect(
        description,
        "it's expected that the description text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        description,
        "it's expected that the description text font-size will be 12"
      ).toHaveStyle('font-size: 12px');

      expect(
        description,
        "it's expected that the description text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
    });

    await step('Testing onClick event', async () => {
      await userEvent.click(listItem);

      expect(
        args.onClick,
        'It expects that when the listitem is clicked, the event onClick is called'
      ).toHaveBeenCalled();
    });
  },
};

export const WithSuffixToggleWithoutDescription: Story = {
  args: {
    title: 'List item',
    SuffixIcon: <ToggleButton name="toggle" defaultValue={false} />,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByRole('listitem');
    const lastChild = listItem.lastChild as HTMLElement;
    const switches = canvas.getAllByRole('switch');
    const numberOfTexts = listItem.getElementsByTagName('span').length;
    const switchToggle = canvas.getByRole('switch');

    await step('Validating the list item structure', () => {
      expect(
        listItem,
        "It's expected that listitem is rendered"
      ).toBeInTheDocument();

      expect(
        listItem,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('cursor: pointer');

      expect(
        numberOfTexts,
        "It's expected that the listitem has 2 text elements"
      ).toBe(numberOfTexts);

      expect(
        lastChild,
        'Expect that the last child of the component is the toggle'
      ).toBe(switchToggle);

      expect(
        switches.length + numberOfTexts,
        "It's expected that the listitem has 2 elements"
      ).toBe(2);
    });

    await step('Validating the list item content', () => {
      const title = listItem.children[0].children[0];

      expect(
        title.tagName,
        "It's expected that the title text has a tag-name SPAN"
      ).toBe('SPAN');

      expect(
        title,
        `It's expected that the title text is ${args.children}`
      ).toHaveTextContent(args.title);

      expect(
        title,
        "it's expected that the title text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        title,
        "it's expected that the title text font-size will be 14"
      ).toHaveStyle('font-size: 14px');

      expect(
        title,
        "it's expected that the title text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
    });

    await step('Testing onClick event', async () => {
      await userEvent.click(listItem);

      expect(
        args.onClick,
        'It expects that when the listitem is clicked, the event onClick is called'
      ).toHaveBeenCalled();
    });
  },
};

export const WithSuffixRadio: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    metadata: '100+',
    SuffixIcon: <RadioButton />,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByRole('listitem');
    const lastChild = listItem.lastChild as HTMLElement;
    const radios = canvas.getAllByLabelText('radioWrapper');
    const numberOfTexts = listItem.getElementsByTagName('span').length;
    const radio = canvas.getByLabelText('radioWrapper');

    await step('Validating the list item structure', () => {
      expect(
        listItem,
        "It's expected that listitem is rendered"
      ).toBeInTheDocument();

      expect(
        listItem,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('cursor: pointer');

      expect(
        numberOfTexts,
        "It's expected that the listitem has 3 text elements"
      ).toBe(3);

      expect(
        lastChild,
        'Expect that the last child of the component is the toggle'
      ).toBe(radio);

      expect(
        radios.length + numberOfTexts,
        "It's expected that the listitem has 4 elements"
      ).toBe(4);
    });

    await step('Validating the list item content', () => {
      const title = listItem.children[0].children[0];
      const description = listItem.children[0].children[1];

      expect(
        title.tagName,
        "It's expected that the title text has a tag-name SPAN"
      ).toBe('SPAN');

      expect(
        title,
        `It's expected that the title text is ${args.children}`
      ).toHaveTextContent(args.title);

      expect(
        title,
        "it's expected that the title text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        title,
        "it's expected that the title text font-size will be 14"
      ).toHaveStyle('font-size: 14px');

      expect(
        title,
        "it's expected that the title text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');

      expect(
        description.tagName,
        "It's expected that the description text has a tag-name SPAN"
      ).toBe('SPAN');

      expect(
        description,
        `It's expected that the description text is ${args.description}`
      ).toHaveTextContent(args.description || '');

      expect(
        description,
        "it's expected that the description text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        description,
        "it's expected that the description text font-size will be 12"
      ).toHaveStyle('font-size: 12px');

      expect(
        description,
        "it's expected that the description text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
    });

    await step('Testing onClick event', async () => {
      await userEvent.click(listItem);

      expect(
        args.onClick,
        'It expects that when the listitem is clicked, the event onClick is called'
      ).toHaveBeenCalled();
    });
  },
};

export const WithSuffixRadioWithoutDescription: Story = {
  args: {
    title: 'List item',
    SuffixIcon: <RadioButton />,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByRole('listitem');
    const lastChild = listItem.lastChild as HTMLElement;
    const radios = canvas.getAllByLabelText('radioWrapper');
    const numberOfTexts = listItem.getElementsByTagName('span').length;
    const radio = canvas.getByLabelText('radioWrapper');

    await step('Validating the list item structure', () => {
      expect(
        listItem,
        "It's expected that listitem is rendered"
      ).toBeInTheDocument();

      expect(
        listItem,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('cursor: pointer');

      expect(
        numberOfTexts,
        "It's expected that the listitem has 1 text element"
      ).toBe(1);

      expect(
        lastChild,
        'Expect that the last child of the component is the toggle'
      ).toBe(radio);

      expect(
        radios.length + numberOfTexts,
        "It's expected that the listitem has 4 elements"
      ).toBe(2);
    });

    await step('Validating the list item content', () => {
      const title = listItem.children[0].children[0];

      expect(
        title.tagName,
        "It's expected that the title text has a tag-name SPAN"
      ).toBe('SPAN');

      expect(
        title,
        `It's expected that the title text is ${args.children}`
      ).toHaveTextContent(args.title);

      expect(
        title,
        "it's expected that the title text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        title,
        "it's expected that the title text font-size will be 14"
      ).toHaveStyle('font-size: 14px');

      expect(
        title,
        "it's expected that the title text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
    });

    await step('Testing onClick event', async () => {
      await userEvent.click(listItem);

      expect(
        args.onClick,
        'It expects that when the listitem is clicked, the event onClick is called'
      ).toHaveBeenCalled();
    });
  },
};

export const WithPrefixAndSuffixRadioWithoutDescription: Story = {
  args: {
    title: 'List item',
    PrefixIcon: (
      <ArrowRightSVG
        maxWidth={'0.313rem'}
        maxHeight={'0.625rem'}
        width="100%"
        height="100%"
      />
    ),
    SuffixIcon: <RadioButton />,
    onClick: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByRole('listitem');
    const firstChild = listItem.firstChild?.firstChild as HTMLElement;

    const lastChild = listItem.lastChild as HTMLElement;

    const svgElements = listItem.querySelectorAll('svg');
    const numberOfTexts = listItem.getElementsByTagName('span').length;
    const radio = canvas.getByLabelText('radioWrapper');

    await step('Validating the list item structure', () => {
      expect(
        listItem,
        "It's expected that listitem is rendered"
      ).toBeInTheDocument();

      expect(
        listItem,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('cursor: pointer');

      expect(
        numberOfTexts,
        "It's expected that the listitem has 2 text elements"
      ).toBe(numberOfTexts);

      expect(
        firstChild.tagName,
        'Expect that the first child of the component is a svg'
      ).toBe('svg');

      expect(
        lastChild,
        'Expect that the last child of the component is the toggle'
      ).toBe(radio);

      expect(
        svgElements.length,
        "It's expected that the listitem has 2 svg element"
      ).toBe(2);
    });

    await step('Validating the list item content', () => {
      const title = listItem.children[1].children[0];

      expect(
        title.tagName,
        "It's expected that the title text has a tag-name SPAN"
      ).toBe('SPAN');

      expect(
        title,
        `It's expected that the title text is ${args.children}`
      ).toHaveTextContent(args.title);

      expect(
        title,
        "it's expected that the title text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');

      expect(
        title,
        "it's expected that the title text font-size will be 14"
      ).toHaveStyle('font-size: 14px');

      expect(
        title,
        "it's expected that the title text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
    });

    await step('Testing onClick event', async () => {
      await userEvent.click(listItem);

      expect(
        args.onClick,
        'It expects that when the listitem is clicked, the event onClick is called'
      ).toHaveBeenCalled();
    });
  },
};
