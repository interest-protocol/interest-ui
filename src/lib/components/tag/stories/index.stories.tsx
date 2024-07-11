import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within } from '@storybook/test';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { ErrorSVG } from '../../../icons';
import theme from '../../../theme/light';
import { Tag } from '..';
import { convertREMtoPX } from '../tag.utils';

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
  argTypes: {
    variant: {
      options: ['filled', 'outline'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Filled: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'filled',
    onClose: undefined,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tag = canvas.getByRole('tag');

    await step('Validating the Tag structure', () => {
      expect(tag, "It's expected that the tag is rendered").toBeInTheDocument();
      expect(
        tag,
        `It's expected that the Tag has a padding of ${convertREMtoPX(
          theme.space['2xs']
        )}`
      ).toHaveStyle(`padding-bottom: ${convertREMtoPX(theme.space['2xs'])}`);
      expect(tag, "It's expected that the Tag background is #fff").toHaveStyle(
        'background-color: #fff'
      );
      expect(tag, "It's expected that the border-radius is full").toHaveStyle(
        'border-top-left-radius: 159984px'
      );
      expect(
        tag.children.length,
        "It's expected that the tag has only one child element"
      ).toBe(1);
    });

    await step('Validating the Tag content', () => {
      const typography = tag.children[0];
      expect(
        typography.tagName,
        "It's expected that the tag text has a tag-name P"
      ).toBe('P');
      expect(
        typography.textContent,
        `It's expected that the tag text is ${args.children}`
      ).toBe(args.children);
      expect(
        typography,
        "it's expected that the tag text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');
      expect(
        typography,
        "it's expected that the tag text font-size will be 16"
      ).toHaveStyle('font-size: 16px');
      expect(
        typography,
        "it's expected that the tag text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
      expect(
        typography,
        "it's expected that the text of the tag has a padding-left of 10px"
      ).toHaveStyle('padding-left: 10px');
      expect(
        typography,
        "it's expected that the text of the tag has a padding-right of 10px"
      ).toHaveStyle('padding-right: 10px');
    });
  },
};

const ErrorSvg = (
  <ErrorSVG maxWidth="1.125rem" maxHeight="1.125rem" width="100%" />
);

export const FilledWithPrefix: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'filled',
    PrefixIcon: ErrorSvg,
    onClose: undefined,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tag = canvas.getByRole('tag');

    await step('Validating the Tag structure', () => {
      expect(tag, "It's expected that the tag is rendered").toBeInTheDocument();
      expect(
        tag,
        `It's expected that the Tag has a padding of ${convertREMtoPX(
          theme.space['2xs']
        )}`
      ).toHaveStyle(`padding-bottom: ${convertREMtoPX(theme.space['2xs'])}`);
      expect(tag, "It's expected that the Tag background is #fff").toHaveStyle(
        'background-color: #fff'
      );
      expect(tag, "It's expected that the border-radius is full").toHaveStyle(
        'border-top-left-radius: 159984px'
      );
      expect(
        tag.children.length,
        "It's expected that the tag has only two child element"
      ).toBe(2);
    });

    await step('Validating the PrefixIcon of the tag', () => {
      const PrefixIcon = tag.children[0];
      expect(
        PrefixIcon.tagName,
        "It's expected that PrefixIcon will be an SVG"
      ).toBe('svg');
      expect(
        PrefixIcon,
        `It's expected that the PrefixIcon has a max-width of ${convertREMtoPX(
          '1.125rem'
        )}`
      ).toHaveStyle(`max-width: ${convertREMtoPX('1.125rem')}`);
      expect(
        PrefixIcon,
        `It's expected that the PrefixIcon has a max-height of ${convertREMtoPX(
          '1.125rem'
        )}`
      ).toHaveStyle(`max-height: ${convertREMtoPX('1.125rem')}`);
    });

    await step('Validating the Tag content', () => {
      const typography = tag.children[1];
      expect(
        typography.tagName,
        "It's expected that the tag text has a tag-name P"
      ).toBe('P');
      expect(
        typography.textContent,
        `It's expected that the tag text is ${args.children}`
      ).toBe(args.children);
      expect(
        typography,
        "it's expected that the tag text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');
      expect(
        typography,
        "it's expected that the tag text font-size will be 16"
      ).toHaveStyle('font-size: 16px');
      expect(
        typography,
        "it's expected that the tag text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
      expect(
        typography,
        "it's expected that the text of the tag has a padding-right of 10px"
      ).toHaveStyle('padding-right: 10px');
    });
  },
};

export const FilledWithCombined: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'filled',
    PrefixIcon: ErrorSvg,
    onClose: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tag = canvas.getByRole('tag');

    await step('Validating the Tag structure', () => {
      expect(tag, "It's expected that the tag is rendered").toBeInTheDocument();
      expect(
        tag,
        `It's expected that the Tag has a padding of ${convertREMtoPX(
          theme.space['2xs']
        )}`
      ).toHaveStyle(`padding-bottom: ${convertREMtoPX(theme.space['2xs'])}`);
      expect(tag, "It's expected that the Tag background is #fff").toHaveStyle(
        'background-color: #fff'
      );
      expect(tag, "It's expected that the border-radius is full").toHaveStyle(
        'border-top-left-radius: 159984px'
      );
      expect(
        tag.children.length,
        "It's expected that the tag has only two child element"
      ).toBe(3);
    });

    await step('Validating the PrefixIcon of the tag', () => {
      const PrefixIcon = tag.children[0];
      expect(
        PrefixIcon.tagName,
        "It's expected that PrefixIcon will be an SVG"
      ).toBe('svg');
      expect(
        PrefixIcon,
        `It's expected that the PrefixIcon has a max-width of ${convertREMtoPX(
          '1.125rem'
        )}`
      ).toHaveStyle(`max-width: ${convertREMtoPX('1.125rem')}`);
      expect(
        PrefixIcon,
        `It's expected that the PrefixIcon has a max-height of ${convertREMtoPX(
          '1.125rem'
        )}`
      ).toHaveStyle(`max-height: ${convertREMtoPX('1.125rem')}`);
    });

    await step('Validating the Tag content', () => {
      const typography = tag.children[1];
      expect(
        typography.tagName,
        "It's expected that the tag text has a tag-name P"
      ).toBe('P');
      expect(
        typography.textContent,
        `It's expected that the tag text is ${args.children}`
      ).toBe(args.children);
      expect(
        typography,
        "it's expected that the tag text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');
      expect(
        typography,
        "it's expected that the tag text font-size will be 16"
      ).toHaveStyle('font-size: 16px');
      expect(
        typography,
        "it's expected that the tag text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
    });

    await step("Validating the tag's close button", async () => {
      const CloseIcon = tag.children[2];
      await userEvent.click(CloseIcon);
      expect(
        args.onClose,
        "It's expected that the onClose button will only be called once after the click"
      ).toHaveBeenCalledOnce();
      expect(
        CloseIcon.children[0].tagName,
        "It's expected that this onClose button will have an SVG Icon"
      ).toBe('svg');
      expect(
        CloseIcon,
        `It's expected that the onClose button will have a width of ${convertREMtoPX(
          '1.125rem'
        )}`
      ).toHaveStyle(`width: ${convertREMtoPX('1.125rem')}`);
      expect(
        CloseIcon,
        `It's expected that the onClose button will have a width of ${convertREMtoPX(
          '1.125rem'
        )}`
      ).toHaveStyle(`height: ${convertREMtoPX('1.125rem')}`);
    });
  },
};

export const Outlined: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'outline',
    onClose: undefined,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tag = canvas.getByRole('tag');

    await step('Validating the Tag structure', () => {
      expect(tag, "It's expected that the tag is rendered").toBeInTheDocument();
      expect(
        tag,
        `It's expected that the Tag has a padding of ${convertREMtoPX(
          theme.space['2xs']
        )}`
      ).toHaveStyle(`padding-bottom: ${convertREMtoPX(theme.space['2xs'])}`);
      expect(tag, "It's expected that the Tag background is #0000").toHaveStyle(
        'background-color: #0000'
      );
      expect(tag, "It's expected that the border-radius is full").toHaveStyle(
        'border-top-left-radius: 159984px'
      );
      expect(
        tag,
        "It's expected that the tag's border will be 1px solid #C6C6CA"
      ).toHaveStyle('border: 1px solid #C6C6CA');
      expect(
        tag.children.length,
        "It's expected that the tag has only one child element"
      ).toBe(1);
    });

    await step('Validating the Tag content', () => {
      const typography = tag.children[0];
      expect(
        typography.tagName,
        "It's expected that the tag text has a tag-name P"
      ).toBe('P');
      expect(
        typography.textContent,
        `It's expected that the tag text is ${args.children}`
      ).toBe(args.children);
      expect(
        typography,
        "it's expected that the tag text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');
      expect(
        typography,
        "it's expected that the tag text font-size will be 16"
      ).toHaveStyle('font-size: 16px');
      expect(
        typography,
        "it's expected that the tag text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
      expect(
        typography,
        "it's expected that the text of the tag has a padding-left of 10px"
      ).toHaveStyle('padding-left: 10px');
      expect(
        typography,
        "it's expected that the text of the tag has a padding-right of 10px"
      ).toHaveStyle('padding-right: 10px');
    });
  },
};

export const OutlinedWithPrefix: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'outline',
    onClose: undefined,
    PrefixIcon: ErrorSvg,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tag = canvas.getByRole('tag');

    await step('Validating the Tag structure', () => {
      expect(tag, "It's expected that the tag is rendered").toBeInTheDocument();
      expect(
        tag,
        `It's expected that the Tag has a padding of ${convertREMtoPX(
          theme.space['2xs']
        )}`
      ).toHaveStyle(`padding-bottom: ${convertREMtoPX(theme.space['2xs'])}`);
      expect(tag, "It's expected that the Tag background is #0000").toHaveStyle(
        'background-color: #0000'
      );
      expect(tag, "It's expected that the border-radius is full").toHaveStyle(
        'border-top-left-radius: 159984px'
      );
      expect(
        tag,
        "It's expected that the tag's border will be 1px solid #C6C6CA"
      ).toHaveStyle('border: 1px solid #C6C6CA');
      expect(
        tag.children.length,
        "It's expected that the tag has only one child element"
      ).toBe(2);
    });

    await step('Validating the PrefixIcon of the tag', () => {
      const PrefixIcon = tag.children[0];
      expect(
        PrefixIcon.tagName,
        "It's expected that PrefixIcon will be an SVG"
      ).toBe('svg');
      expect(
        PrefixIcon,
        `It's expected that the PrefixIcon has a max-width of ${convertREMtoPX(
          '1.125rem'
        )}`
      ).toHaveStyle(`max-width: ${convertREMtoPX('1.125rem')}`);
      expect(
        PrefixIcon,
        `It's expected that the PrefixIcon has a max-height of ${convertREMtoPX(
          '1.125rem'
        )}`
      ).toHaveStyle(`max-height: ${convertREMtoPX('1.125rem')}`);
    });

    await step('Validating the Tag content', () => {
      const typography = tag.children[1];
      expect(
        typography.tagName,
        "It's expected that the tag text has a tag-name P"
      ).toBe('P');
      expect(
        typography.textContent,
        `It's expected that the tag text is ${args.children}`
      ).toBe(args.children);
      expect(
        typography,
        "it's expected that the tag text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');
      expect(
        typography,
        "it's expected that the tag text font-size will be 16"
      ).toHaveStyle('font-size: 16px');
      expect(
        typography,
        "it's expected that the tag text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
      expect(
        typography,
        "it's expected that the text of the tag has a padding-right of 10px"
      ).toHaveStyle('padding-right: 10px');
    });
  },
};

export const OutlinedWithCombined: Story = {
  args: {
    size: 'large',
    children: 'Label',
    variant: 'outline',
    PrefixIcon: ErrorSvg,
    onClose: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const tag = canvas.getByRole('tag');

    await step('Validating the Tag structure', () => {
      expect(tag, "It's expected that the tag is rendered").toBeInTheDocument();
      expect(
        tag,
        `It's expected that the Tag has a padding of ${convertREMtoPX(
          theme.space['2xs']
        )}`
      ).toHaveStyle(`padding-bottom: ${convertREMtoPX(theme.space['2xs'])}`);
      expect(tag, "It's expected that the Tag background is #0000").toHaveStyle(
        'background-color: #0000'
      );
      expect(tag, "It's expected that the border-radius is full").toHaveStyle(
        'border-top-left-radius: 159984px'
      );
      expect(
        tag,
        "It's expected that the tag's border will be 1px solid #C6C6CA"
      ).toHaveStyle('border: 1px solid #C6C6CA');
      expect(
        tag.children.length,
        "It's expected that the tag has only three child element"
      ).toBe(3);
    });

    await step('Validating the PrefixIcon of the tag', () => {
      const PrefixIcon = tag.children[0];
      expect(
        PrefixIcon.tagName,
        "It's expected that PrefixIcon will be an SVG"
      ).toBe('svg');
      expect(
        PrefixIcon,
        `It's expected that the PrefixIcon has a max-width of ${convertREMtoPX(
          '1.125rem'
        )}`
      ).toHaveStyle(`max-width: ${convertREMtoPX('1.125rem')}`);
      expect(
        PrefixIcon,
        `It's expected that the PrefixIcon has a max-height of ${convertREMtoPX(
          '1.125rem'
        )}`
      ).toHaveStyle(`max-height: ${convertREMtoPX('1.125rem')}`);
    });

    await step('Validating the Tag content', () => {
      const typography = tag.children[1];
      expect(
        typography.tagName,
        "It's expected that the tag text has a tag-name P"
      ).toBe('P');
      expect(
        typography.textContent,
        `It's expected that the tag text is ${args.children}`
      ).toBe(args.children);
      expect(
        typography,
        "it's expected that the tag text font-weight will be 500"
      ).toHaveStyle('font-weight: 500');
      expect(
        typography,
        "it's expected that the tag text font-size will be 16"
      ).toHaveStyle('font-size: 16px');
      expect(
        typography,
        "it's expected that the tag text font-family will be Satoshi"
      ).toHaveStyle('font-family: Satoshi');
    });

    await step("Validating the tag's close button", async () => {
      const CloseIcon = tag.children[2];
      await userEvent.click(CloseIcon);
      expect(
        args.onClose,
        "It's expected that the onClose button will only be called once after the click"
      ).toHaveBeenCalledOnce();
      expect(
        CloseIcon.children[0].tagName,
        "It's expected that this onClose button will have an SVG Icon"
      ).toBe('svg');
      expect(
        CloseIcon,
        `It's expected that the onClose button will have a width of ${convertREMtoPX(
          '1.125rem'
        )}`
      ).toHaveStyle(`width: ${convertREMtoPX('1.125rem')}`);
      expect(
        CloseIcon,
        `It's expected that the onClose button will have a width of ${convertREMtoPX(
          '1.125rem'
        )}`
      ).toHaveStyle(`height: ${convertREMtoPX('1.125rem')}`);
    });
  },
};
