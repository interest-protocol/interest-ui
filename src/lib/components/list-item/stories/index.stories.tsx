import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within } from '@storybook/test';
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

    await step('Checking if the component is being rendered', async () => {
      expect(
        listItem,
        'It expected that the listitem is being rendered'
      ).toBeInTheDocument();
    });

    await step('Checking the listitem structure', () => {
      const listItemFirstChild = listItem.firstElementChild as HTMLElement;

      const numberOfTexts = listItem.getElementsByTagName('span').length;
      expect(numberOfTexts, `It's expected that listitem as 2 texts`).toBe(2);

      expect(
        listItem,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('display: flex');

      expect(
        listItem,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('display: flex');

      expect(
        listItemFirstChild,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('display: flex');

      expect(
        listItemFirstChild,
        `It's expected that the flex-direction of the listitem is column`
      ).toHaveStyle(`flex-direction: column`);

      expect(
        listItemFirstChild,
        `It's expected that the display of the listitem is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
    });

    await step('Checking component text content', async () => {
      expect(
        listItem,
        `Expect that the component has the title '${args.title}'`
      ).toHaveTextContent('List item');

      expect(
        listItem,
        `Expect that the component has the descripption '${args.description}'`
      ).toHaveTextContent('Supporting Text');
    });
  },
};

export const WithoutDescription: Story = {
  args: {
    title: 'List item',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByRole('listitem');

    const listItemChilds = listItem.childNodes;

    await step('Checking if the component is being rendered', async () => {
      expect(
        listItem,
        'It expected that the listitem is being rendered'
      ).toBeInTheDocument();
    });

    await step('Checking the listitem structure', () => {
      const listItemFirstChild = listItem.firstElementChild as HTMLElement;

      const numberOfTexts = listItem.getElementsByTagName('span').length;
      expect(numberOfTexts, `It's expected that listitem as 1 texts`).toBe(1);

      expect(
        listItem,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('display: flex');

      expect(
        listItemFirstChild,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('display: flex');

      expect(
        listItemFirstChild,
        `It's expected that the flex-direction of the listitem is column`
      ).toHaveStyle(`flex-direction: column`);

      expect(
        listItemFirstChild,
        `It's expected that the display of the listitem is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
    });

    await step('Checking component text content', async () => {
      expect(
        listItem,
        `Expect that the component has the title '${args.title}'`
      ).toHaveTextContent('List item');

      expect(
        listItemChilds,
        `Expect that the component has only one child '`
      ).toHaveLength(1);
    });
  },
};

export const WithPrefix: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    PrefixIcon: <ArrowRightIcon />,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const listItem = canvas.getByRole('listitem');
    const listItemFirstChild = listItem.firstElementChild?.firstElementChild
      ?.firstElementChild as HTMLElement;

    const firstChildTagName = listItemFirstChild.tagName;
    const svgElements = listItem.querySelectorAll('svg');

    await step('Checking if the component is being rendered', async () => {
      expect(
        listItem,
        'It expected that the listitem is being rendered'
      ).toBeInTheDocument();
    });

    await step('Checking the listitem structure', () => {
      const listItemSecondChild = listItem.childNodes[1] as HTMLElement;

      const numberOfTexts = listItem.getElementsByTagName('span').length;
      expect(numberOfTexts, `It's expected that listitem as 2 texts`).toBe(2);

      expect(
        firstChildTagName,
        'Expect that the first child of the component is a svg'
      ).toBe('svg');

      expect(
        svgElements,
        'Expect that the component only has one svg'
      ).toHaveLength(1);

      expect(
        listItemSecondChild,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('display: flex');

      expect(
        listItemSecondChild,
        `It's expected that the second child style has flex-direction of the listitem is column`
      ).toHaveStyle(`flex-direction: column`);

      expect(
        listItemSecondChild,
        `It's expected that the display of the listitem is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
    });

    await step('Checking component text content', async () => {
      expect(
        listItem,
        `Expect that the component has the title '${args.title}'`
      ).toHaveTextContent('List item');

      expect(
        listItem,
        `Expect that the component has the descripption '${args.description}'`
      ).toHaveTextContent('Supporting Text');
    });
  },
};

export const WithPrefixWithoutDescription: Story = {
  args: {
    title: 'List item',
    PrefixIcon: <ArrowRightIcon />,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByRole('listitem');
    const listItemFirstChild = listItem.firstElementChild?.firstElementChild
      ?.firstElementChild as HTMLElement;

    const firstChildTagName = listItemFirstChild.tagName;
    const svgElements = listItem.querySelectorAll('svg');

    await step('Checking if the component is being rendered', async () => {
      expect(
        listItem,
        'It expected that the listitem is being rendered'
      ).toBeInTheDocument();
    });

    await step('Checking the listitem structure', () => {
      const listItemSecondChild = listItem.childNodes[1] as HTMLElement;

      const numberOfTexts = listItem.getElementsByTagName('span').length;
      expect(numberOfTexts, `It's expected that listitem as 1 texts`).toBe(1);

      expect(
        firstChildTagName,
        'Expect that the first child of the component is a svg'
      ).toBe('svg');

      expect(
        svgElements,
        'Expect that the component only has one svg'
      ).toHaveLength(1);

      expect(
        listItemSecondChild,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('display: flex');

      expect(
        listItemSecondChild,
        `It's expected that the second child style has flex-direction of the listitem is column`
      ).toHaveStyle(`flex-direction: column`);

      expect(
        listItemSecondChild,
        `It's expected that the display of the listitem is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
    });

    await step('Checking component text content', async () => {
      expect(
        listItem,
        `Expect that the component has the title '${args.title}'`
      ).toHaveTextContent('List item');
    });
  },
};

export const WithSuffix: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    SuffixIcon: <ArrowRightIcon />,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByRole('listitem');
    const listItemLastChild = listItem.lastElementChild
      ?.firstElementChild as HTMLElement;

    const lastChildTagName = listItemLastChild.tagName;
    const svgElements = listItem.querySelectorAll('svg');

    await step('Checking if the component is being rendered', async () => {
      expect(
        listItem,
        'It expected that the listitem is being rendered'
      ).toBeInTheDocument();
    });

    await step('Checking the listitem structure', () => {
      const listItemSecondChild = listItem.childNodes[1] as HTMLElement;

      const numberOfTexts = listItem.getElementsByTagName('span').length;
      expect(numberOfTexts, `It's expected that listitem as 2 texts`).toBe(2);

      expect(
        lastChildTagName,
        'Expect that the last child of the component is a svg'
      ).toBe('svg');

      expect(
        svgElements,
        'Expect that the component only has one svg'
      ).toHaveLength(1);

      expect(
        listItemSecondChild,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('display: flex');

      expect(
        listItemSecondChild,
        `It's expected that the second child style has flex-direction of the listitem is row`
      ).toHaveStyle(`flex-direction: row`);

      expect(
        listItemSecondChild,
        `It's expected that the display of the listitem is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
    });

    await step('Checking component text content', async () => {
      expect(
        listItem,
        `Expect that the component has the title '${args.title}'`
      ).toHaveTextContent('List item');

      expect(
        listItem,
        `Expect that the component has the descripption '${args.description}'`
      ).toHaveTextContent('Supporting Text');
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
    const listItemLastChild = listItem.lastElementChild
      ?.firstElementChild as HTMLElement;

    const lastChildTagName = listItemLastChild.tagName;
    const svgElements = listItem.querySelectorAll('svg');

    await step('Checking if the component is being rendered', async () => {
      expect(
        listItem,
        'It expected that the listitem is being rendered'
      ).toBeInTheDocument();
    });

    await step('Checking the listitem structure', () => {
      const listItemSecondChild = listItem.childNodes[1] as HTMLElement;

      const numberOfTexts = listItem.getElementsByTagName('span').length;
      expect(numberOfTexts, `It's expected that listitem as 1 texts`).toBe(1);

      expect(
        lastChildTagName,
        'Expect that the last child of the component is a svg'
      ).toBe('svg');

      expect(
        svgElements,
        'Expect that the component only has one svg'
      ).toHaveLength(1);

      expect(
        listItemSecondChild,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('display: flex');

      expect(
        listItemSecondChild,
        `It's expected that the second child style has flex-direction of the listitem is row`
      ).toHaveStyle(`flex-direction: row`);

      expect(
        listItemSecondChild,
        `It's expected that the display of the listitem is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
    });

    await step('Checking component text content', async () => {
      expect(
        listItem,
        `Expect that the component has the title '${args.title}'`
      ).toHaveTextContent('List item');
    });
  },
};

export const WithSuffixToggle: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    SuffixIcon: <ToggleButton name="toggle" defaultValue={false} />,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByRole('listitem');
    const listItemLastChild = listItem.lastElementChild as HTMLElement;
    const toggle = canvas.getByRole('toggle') as HTMLElement;

    await step('Checking if the component is being rendered', async () => {
      expect(
        listItem,
        'It is expected that the listitem is being rendered'
      ).toBeInTheDocument();
    });

    await step('Checking component text content', async () => {
      expect(
        listItem,
        `Expect that the component has the title '${args.title}'`
      ).toHaveTextContent('List item');
      expect(
        listItem,
        `Expect that the component has the description '${args.description}'`
      ).toHaveTextContent('Supporting Text');
    });

    await step('Checking the listitem structure', () => {
      const listItemSecondChild = listItem.childNodes[1] as HTMLElement;

      const numberOfTexts = listItem.getElementsByTagName('span').length;
      expect(numberOfTexts, `It's expected that listitem as 2 texts`).toBe(2);

      expect(
        listItemSecondChild,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('display: flex');

      expect(
        listItemSecondChild,
        `It's expected that the second child style has flex-direction of the listitem is row`
      ).toHaveStyle(`flex-direction: row`);

      expect(
        listItemSecondChild,
        `It's expected that the display of the listitem is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
    });

    await step('Checking if the toggle is being rendered', async () => {
      expect(
        toggle,
        'It is expected that the toggle is being rendered'
      ).toBeInTheDocument();
    });

    await step(
      'Checking if the last item in the list is the toggle',
      async () => {
        expect(
          listItemLastChild,
          'It is expected that the last child is the toggle button'
        ).toBe(toggle);
      }
    );
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
    const listItemLastChild = listItem.lastElementChild as HTMLElement;
    const toggle = canvas.getByRole('toggle') as HTMLElement;

    await step('Checking if the component is being rendered', async () => {
      expect(
        listItem,
        'It is expected that the listitem is being rendered'
      ).toBeInTheDocument();
    });

    await step('Checking component text content', async () => {
      expect(
        listItem,
        `Expect that the component has the title '${args.title}'`
      ).toHaveTextContent('List item');
    });

    await step('Checking the listitem structure', () => {
      const listItemSecondChild = listItem.childNodes[1] as HTMLElement;

      const numberOfTexts = listItem.getElementsByTagName('span').length;
      expect(numberOfTexts, `It's expected that listitem as 1 texts`).toBe(1);

      expect(
        listItemSecondChild,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('display: flex');

      expect(
        listItemSecondChild,
        `It's expected that the second child style has flex-direction of the listitem is row`
      ).toHaveStyle(`flex-direction: row`);

      expect(
        listItemSecondChild,
        `It's expected that the display of the listitem is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
    });

    await step('Checking if the toggle is being rendered', async () => {
      expect(
        toggle,
        'It is expected that the toggle is being rendered'
      ).toBeInTheDocument();
    });

    await step(
      'Checking if the last item in the list is the toggle',
      async () => {
        expect(
          listItemLastChild,
          'It is expected that the last child is the toggle button'
        ).toBe(toggle);
      }
    );
  },
};

export const WithSuffixRadio: Story = {
  args: {
    title: 'List item',
    description: 'Supporting Text',
    metadata: '100+',
    SuffixIcon: <RadioButton />,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByRole('listitem');
    const listItemLastChild = listItem.lastElementChild as HTMLElement;
    const radio = canvas.getByRole('radioContainer') as HTMLElement;

    await step('Checking if the component is being rendered', async () => {
      expect(
        listItem,
        'It is expected that the listitem is being rendered'
      ).toBeInTheDocument();
    });

    await step('Checking component text content', async () => {
      expect(
        listItem,
        `Expect that the component has the title '${args.title}'`
      ).toHaveTextContent('List item');
      expect(
        listItem,
        `Expect that the component has the description '${args.description}'`
      ).toHaveTextContent('Supporting Text');
      expect(
        listItem,
        `Expect that the component has the description '${args.description}'`
      ).toHaveTextContent('100+');
    });

    await step('Checking the listitem structure', () => {
      const firstItemChild = listItem.childNodes[0] as HTMLElement;

      const numberOfTexts = listItem.getElementsByTagName('span').length;
      expect(numberOfTexts, `It's expected that listitem as 3 texts`).toBe(3);

      expect(
        firstItemChild,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('display: flex');

      expect(
        firstItemChild,
        `It's expected that the first child style has flex-direction of the listitem is row`
      ).toHaveStyle(`flex-direction: column`);

      expect(
        firstItemChild,
        `It's expected that the display of the listitem is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
    });

    await step('Checking if the radio is being rendered', async () => {
      expect(
        radio,
        'It is expected that the radio is being rendered'
      ).toBeInTheDocument();
    });

    await step(
      'Checking if the last item in the list is the radio',
      async () => {
        expect(
          listItemLastChild,
          'It is expected that the last child is the radio button'
        ).toBe(radio);
      }
    );
  },
};

export const WithSuffixRadioWithoutDescription: Story = {
  args: {
    title: 'List item',
    SuffixIcon: <RadioButton />,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByRole('listitem');
    const listItemLastChild = listItem.lastElementChild as HTMLElement;
    const radio = canvas.getByRole('radioContainer') as HTMLElement;

    await step('Checking if the component is being rendered', async () => {
      expect(
        listItem,
        'It is expected that the listitem is being rendered'
      ).toBeInTheDocument();
    });

    await step('Checking component text content', async () => {
      expect(
        listItem,
        `Expect that the component has the title '${args.title}'`
      ).toHaveTextContent('List item');
    });

    await step('Checking if the radio is being rendered', async () => {
      expect(
        radio,
        'It is expected that the radio is being rendered'
      ).toBeInTheDocument();
    });

    await step('Checking the listitem structure', () => {
      const firstItemChild = listItem.childNodes[0] as HTMLElement;

      const numberOfTexts = listItem.getElementsByTagName('span').length;
      expect(numberOfTexts, `It's expected that listitem as 2 texts`).toBe(2);

      expect(
        firstItemChild,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('display: flex');

      expect(
        firstItemChild,
        `It's expected that the first child style has flex-direction of the listitem is row`
      ).toHaveStyle(`flex-direction: column`);

      expect(
        firstItemChild,
        `It's expected that the display of the listitem is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
    });

    await step(
      'Checking if the last item in the list is the radio',
      async () => {
        expect(
          listItemLastChild,
          'It is expected that the last child is the radio button'
        ).toBe(radio);
      }
    );
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
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByRole('listitem');
    const listItemLastChild = listItem.lastElementChild as HTMLElement;
    const listItemFirstChild = listItem.firstElementChild
      ?.firstElementChild as HTMLElement;
    const lastItemChild = listItem.firstElementChild
      ?.lastElementChild as HTMLElement;
    const firstChildTagName = listItemFirstChild.tagName;
    const lastChildTagName = lastItemChild.tagName;
    const svgElements = listItem.querySelectorAll('svg');
    const radio = canvas.getByRole('radioContainer') as HTMLElement;

    await step('Checking if the component is being rendered', async () => {
      expect(
        listItem,
        'It is expected that the listitem is being rendered'
      ).toBeInTheDocument();
    });

    await step('Checking component text content', async () => {
      expect(
        listItem,
        `Expect that the component has the title '${args.title}'`
      ).toHaveTextContent('List item');

      expect(
        firstChildTagName,
        'Expect that the first child of the component is a svg'
      ).toBe('svg');

      expect(
        lastChildTagName,
        'Expect that the last child of the component is a svg'
      ).toBe('svg');

      expect(svgElements, 'Expect that the component has 2 svg').toHaveLength(
        2
      );
    });

    await step('Checking the listitem structure', () => {
      const firstItemChild = listItem.childNodes[0] as HTMLElement;

      const numberOfTexts = listItem.getElementsByTagName('span').length;
      expect(numberOfTexts, `It's expected that listitem as 1 texts`).toBe(1);

      expect(
        firstItemChild,
        `It's expected that the display of the listitem is flex`
      ).toHaveStyle('display: flex');

      expect(
        firstItemChild,
        `It's expected that the first child style has flex-direction of the listitem is row`
      ).toHaveStyle(`flex-direction: row`);

      expect(
        firstItemChild,
        `It's expected that the display of the listitem is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
    });

    await step('Checking if the radio is being rendered', async () => {
      expect(
        radio,
        'It is expected that the radio is being rendered'
      ).toBeInTheDocument();
    });

    await step(
      'Checking if the last item in the list is the radio',
      async () => {
        expect(
          listItemLastChild,
          'It is expected that the last child is the radio button'
        ).toBe(radio);
      }
    );
  },
};
