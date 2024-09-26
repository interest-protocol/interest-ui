import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Dialog, IDialogButton } from '..';

const meta: Meta<typeof Dialog> = {
  title: 'Dialog',
  component: Dialog,
  argTypes: {
    title: {
      defaultValue: 'Title',
      control: { type: 'text' },
    },
    message: {
      defaultValue:
        "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Success: Story = {
  args: {
    title: 'Title',
    message:
      "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
    status: 'success',
    primaryButton: {
      label: 'GOT IT',
      onClick: fn(),
    },
    secondaryButton: {
      label: 'CLOSE',
      onClick: fn(),
    },
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog');

    await step('Checking the structure of the Dialog box', () => {
      expect(
        dialog,
        "It's expected that the Dialog has a width of 400px"
      ).toHaveStyle('width: 400px');
      expect(
        dialog,
        "It's expected that the Dialog has a padding of 24px"
      ).toHaveStyle('padding: 24px');
      expect(
        dialog,
        "It's expected that the Dialog box has a border-radius of 8px"
      ).toHaveStyle('border-radius: 8px');
      expect(
        dialog,
        "It's expected that the Dialog box has a background-color #fff"
      ).toHaveStyle('background-color: #fff');
    });

    await step('Checking the dialog box header', () => {
      const headerDialogBox = dialog.children[0].children[0];
      expect(
        headerDialogBox.textContent,
        `It's expected that the dialog box header will be ${args.title}`
      ).toBe(args.title);
      expect(
        headerDialogBox,
        `It's expected that the font-family of the dialog box header is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
      expect(
        headerDialogBox,
        "It's expected that the font-weight of the dialog box header is 500"
      ).toHaveStyle('font-weight: 500');
      expect(
        headerDialogBox,
        "It's expected that the font-size of the box dialog header is 22px"
      ).toHaveStyle('font-size: 22px');
      expect(
        headerDialogBox,
        "It's expected that the box dialog header is centred"
      ).toHaveStyle('text-align: center');
    });

    await step('Checking the body in the box dialog', () => {
      const bodyDialogBox = dialog.children[1].children;

      expect(
        bodyDialogBox.length,
        "It's expected that the body of the box dialog will have two children"
      ).toBe(2);
      expect(
        bodyDialogBox[1].textContent,
        "It's expected that the content of the message will be similar to what was sent"
      ).toBe(args.message);
      expect(
        bodyDialogBox[1],
        `It's expected that the font-family of the message body will be ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
      expect(
        bodyDialogBox[1],
        `It's expected that the font-weight of the message body will be 500`
      ).toHaveStyle('font-weight: 500');
      expect(
        bodyDialogBox[1],
        "It's expected that the font-size of the message body will be 14px"
      ).toHaveStyle('font-size: 14px');
      expect(
        bodyDialogBox[1],
        "It's expected that the body text of the message is centred"
      ).toHaveStyle('text-align: center');
    });

    await step('Checking the footer in the box dialog', () => {
      const footerDialogBox = dialog.children[2].children;
      const primaryButton = footerDialogBox[1];
      const secondaryButton = footerDialogBox[0];
      expect(
        footerDialogBox.length,
        "It's expected that the footer of the box dialog will have two children"
      ).toBe(2);
      expect(
        secondaryButton.tagName,
        "It's expected that the secondary element will be a button"
      ).toBe('BUTTON');
      expect(
        secondaryButton.textContent,
        `It's expected that the text of the secondary button will be ${
          (args.secondaryButton as IDialogButton).label
        }`
      ).toBe((args.secondaryButton as IDialogButton).label);
      expect(
        secondaryButton,
        "It's expected that the secondary button of the footer will have a background-color #0000"
      ).toHaveStyle('background-color: #0000');
      expect(
        primaryButton.tagName,
        "It's expected that the primary element will be a button"
      ).toBe('BUTTON');
      expect(
        primaryButton.textContent,
        `It's expected that the text of the primary button will be ${
          (args.primaryButton as IDialogButton).label
        }`
      ).toBe((args.primaryButton as IDialogButton).label);
      expect(
        primaryButton,
        "It's expected that the primary button of the footer will have a background-color #0053db"
      ).toHaveStyle('background-color: #0053db');
    });

    await step('Checking that the footer buttons are clickable', async () => {
      const footerDialogBox = dialog.children[2].children;
      const primaryButton = footerDialogBox[1];
      const secondaryButton = footerDialogBox[0];

      await userEvent.click(secondaryButton);
      expect(
        (args.secondaryButton as IDialogButton).onClick,
        "It's expected that the secondary button will have received an interaction from the click event"
      ).toHaveBeenCalledOnce();

      await userEvent.click(primaryButton);
      expect(
        (args.primaryButton as IDialogButton).onClick,
        "It's expected that the primary button will have received an interaction from the click event"
      ).toHaveBeenCalledOnce();
    });
  },
};

export const Warning: Story = {
  args: {
    title: 'Title',
    message:
      "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
    status: 'warning',
    primaryButton: {
      label: 'GOT IT',
      onClick: fn(),
    },
    secondaryButton: {
      label: 'CLOSE',
      onClick: fn(),
    },
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog');

    await step('Checking the structure of the Dialog box', () => {
      expect(
        dialog,
        "It's expected that the Dialog has a width of 400px"
      ).toHaveStyle('width: 400px');
      expect(
        dialog,
        "It's expected that the Dialog has a padding of 24px"
      ).toHaveStyle('padding: 24px');
      expect(
        dialog,
        "It's expected that the Dialog box has a border-radius of 8px"
      ).toHaveStyle('border-radius: 8px');
      expect(
        dialog,
        "It's expected that the Dialog box has a background-color #fff"
      ).toHaveStyle('background-color: #fff');
    });

    await step('Checking the dialog box header', () => {
      const headerDialogBox = dialog.children[0].children[0];
      expect(
        headerDialogBox.textContent,
        `It's expected that the dialog box header will be ${args.title}`
      ).toBe(args.title);
      expect(
        headerDialogBox,
        `It's expected that the font-family of the dialog box header is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
      expect(
        headerDialogBox,
        "It's expected that the font-weight of the dialog box header is 500"
      ).toHaveStyle('font-weight: 500');
      expect(
        headerDialogBox,
        "It's expected that the font-size of the box dialog header is 22px"
      ).toHaveStyle('font-size: 22px');
      expect(
        headerDialogBox,
        "It's expected that the box dialog header is centred"
      ).toHaveStyle('text-align: center');
    });

    await step('Checking the body in the box dialog', () => {
      const bodyDialogBox = dialog.children[1].children;

      expect(
        bodyDialogBox.length,
        "It's expected that the body of the box dialog will have two children"
      ).toBe(2);
      expect(
        bodyDialogBox[1].textContent,
        "It's expected that the content of the message will be similar to what was sent"
      ).toBe(args.message);
      expect(
        bodyDialogBox[1],
        `It's expected that the font-family of the message body will be ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
      expect(
        bodyDialogBox[1],
        `It's expected that the font-weight of the message body will be 500`
      ).toHaveStyle('font-weight: 500');
      expect(
        bodyDialogBox[1],
        "It's expected that the font-size of the message body will be 14px"
      ).toHaveStyle('font-size: 14px');
      expect(
        bodyDialogBox[1],
        "It's expected that the body text of the message is centred"
      ).toHaveStyle('text-align: center');
    });

    await step('Checking the footer in the box dialog', () => {
      const footerDialogBox = dialog.children[2].children;
      const primaryButton = footerDialogBox[1];
      const secondaryButton = footerDialogBox[0];
      expect(
        footerDialogBox.length,
        "It's expected that the footer of the box dialog will have two children"
      ).toBe(2);
      expect(
        secondaryButton.tagName,
        "It's expected that the secondary element will be a button"
      ).toBe('BUTTON');
      expect(
        secondaryButton.textContent,
        `It's expected that the text of the secondary button will be ${
          (args.secondaryButton as IDialogButton).label
        }`
      ).toBe((args.secondaryButton as IDialogButton).label);
      expect(
        secondaryButton,
        "It's expected that the secondary button of the footer will have a background-color #0000"
      ).toHaveStyle('background-color: #0000');
      expect(
        primaryButton.tagName,
        "It's expected that the primary element will be a button"
      ).toBe('BUTTON');
      expect(
        primaryButton.textContent,
        `It's expected that the text of the primary button will be ${
          (args.primaryButton as IDialogButton).label
        }`
      ).toBe((args.primaryButton as IDialogButton).label);
      expect(
        primaryButton,
        "It's expected that the primary button of the footer will have a background-color #0053db"
      ).toHaveStyle('background-color: #0053db');
    });

    await step('Checking that the footer buttons are clickable', async () => {
      const footerDialogBox = dialog.children[2].children;
      const primaryButton = footerDialogBox[1];
      const secondaryButton = footerDialogBox[0];

      await userEvent.click(secondaryButton);
      expect(
        (args.secondaryButton as IDialogButton).onClick,
        "It's expected that the secondary button will have received an interaction from the click event"
      ).toHaveBeenCalledOnce();

      await userEvent.click(primaryButton);
      expect(
        (args.primaryButton as IDialogButton).onClick,
        "It's expected that the primary button will have received an interaction from the click event"
      ).toHaveBeenCalledOnce();
    });
  },
};

export const Error: Story = {
  args: {
    title: 'Title',
    message:
      "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
    status: 'error',
    secondaryButton: {
      label: 'CLOSE',
      onClick: fn(),
    },
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog');

    await step('Checking the structure of the Dialog box', () => {
      expect(
        dialog,
        "It's expected that the Dialog has a width of 400px"
      ).toHaveStyle('width: 400px');
      expect(
        dialog,
        "It's expected that the Dialog has a padding of 24px"
      ).toHaveStyle('padding: 24px');
      expect(
        dialog,
        "It's expected that the Dialog box has a border-radius of 8px"
      ).toHaveStyle('border-radius: 8px');
      expect(
        dialog,
        "It's expected that the Dialog box has a background-color #fff"
      ).toHaveStyle('background-color: #fff');
    });

    await step('Checking the dialog box header', () => {
      const headerDialogBox = dialog.children[0].children[0];
      expect(
        headerDialogBox.textContent,
        `It's expected that the dialog box header will be ${args.title}`
      ).toBe(args.title);
      expect(
        headerDialogBox,
        `It's expected that the font-family of the dialog box header is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
      expect(
        headerDialogBox,
        "It's expected that the font-weight of the dialog box header is 500"
      ).toHaveStyle('font-weight: 500');
      expect(
        headerDialogBox,
        "It's expected that the font-size of the box dialog header is 22px"
      ).toHaveStyle('font-size: 22px');
      expect(
        headerDialogBox,
        "It's expected that the box dialog header is centred"
      ).toHaveStyle('text-align: center');
    });

    await step('Checking the body in the box dialog', () => {
      const bodyDialogBox = dialog.children[1].children;

      expect(
        bodyDialogBox.length,
        "It's expected that the body of the box dialog will have two children"
      ).toBe(2);
      expect(
        bodyDialogBox[1].textContent,
        "It's expected that the content of the message will be similar to what was sent"
      ).toBe(args.message);
      expect(
        bodyDialogBox[1],
        `It's expected that the font-family of the message body will be ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
      expect(
        bodyDialogBox[1],
        `It's expected that the font-weight of the message body will be 500`
      ).toHaveStyle('font-weight: 500');
      expect(
        bodyDialogBox[1],
        "It's expected that the font-size of the message body will be 14px"
      ).toHaveStyle('font-size: 14px');
      expect(
        bodyDialogBox[1],
        "It's expected that the body text of the message is centred"
      ).toHaveStyle('text-align: center');
    });

    await step('Checking the footer in the box dialog', () => {
      const footerDialogBox = dialog.children[2].children;
      const secondaryButton = footerDialogBox[0];
      expect(
        footerDialogBox.length,
        "It's expected that the footer of the box dialog will have one children"
      ).toBe(1);
      expect(
        secondaryButton.tagName,
        "It's expected that the secondary element will be a button"
      ).toBe('BUTTON');
      expect(
        secondaryButton.textContent,
        `It's expected that the text of the secondary button will be ${
          (args.secondaryButton as IDialogButton).label
        }`
      ).toBe((args.secondaryButton as IDialogButton).label);
      expect(
        secondaryButton,
        "It's expected that the secondary button of the footer will have a background-color #0000"
      ).toHaveStyle('background-color: #0000');
    });

    await step('Checking that the footer buttons are clickable', async () => {
      const footerDialogBox = dialog.children[2].children;
      const secondaryButton = footerDialogBox[0];

      await userEvent.click(secondaryButton);
      expect(
        (args.secondaryButton as IDialogButton).onClick,
        "It's expected that the secondary button will have received an interaction from the click event"
      ).toHaveBeenCalledOnce();
    });
  },
};

export const Info: Story = {
  args: {
    title: 'Title',
    message:
      "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
    status: 'info',
    primaryButton: {
      label: 'GOT IT',
      onClick: fn(),
    },
    secondaryButton: {
      label: 'CLOSE',
      onClick: fn(),
    },
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog');

    await step('Checking the structure of the Dialog box', () => {
      expect(
        dialog,
        "It's expected that the Dialog has a width of 400px"
      ).toHaveStyle('width: 400px');
      expect(
        dialog,
        "It's expected that the Dialog has a padding of 24px"
      ).toHaveStyle('padding: 24px');
      expect(
        dialog,
        "It's expected that the Dialog box has a border-radius of 8px"
      ).toHaveStyle('border-radius: 8px');
      expect(
        dialog,
        "It's expected that the Dialog box has a background-color #fff"
      ).toHaveStyle('background-color: #fff');
    });

    await step('Checking the dialog box header', () => {
      const headerDialogBox = dialog.children[0].children[0];
      expect(
        headerDialogBox.textContent,
        `It's expected that the dialog box header will be ${args.title}`
      ).toBe(args.title);
      expect(
        headerDialogBox,
        `It's expected that the font-family of the dialog box header is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
      expect(
        headerDialogBox,
        "It's expected that the font-weight of the dialog box header is 500"
      ).toHaveStyle('font-weight: 500');
      expect(
        headerDialogBox,
        "It's expected that the font-size of the box dialog header is 22px"
      ).toHaveStyle('font-size: 22px');
      expect(
        headerDialogBox,
        "It's expected that the box dialog header is centred"
      ).toHaveStyle('text-align: center');
    });

    await step('Checking the body in the box dialog', () => {
      const bodyDialogBox = dialog.children[1].children;

      expect(
        bodyDialogBox.length,
        "It's expected that the body of the box dialog will have two children"
      ).toBe(2);
      expect(
        bodyDialogBox[1].textContent,
        "It's expected that the content of the message will be similar to what was sent"
      ).toBe(args.message);
      expect(
        bodyDialogBox[1],
        `It's expected that the font-family of the message body will be ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
      expect(
        bodyDialogBox[1],
        `It's expected that the font-weight of the message body will be 500`
      ).toHaveStyle('font-weight: 500');
      expect(
        bodyDialogBox[1],
        "It's expected that the font-size of the message body will be 14px"
      ).toHaveStyle('font-size: 14px');
      expect(
        bodyDialogBox[1],
        "It's expected that the body text of the message is centred"
      ).toHaveStyle('text-align: center');
    });

    await step('Checking the footer in the box dialog', () => {
      const footerDialogBox = dialog.children[2].children;
      const primaryButton = footerDialogBox[1];
      const secondaryButton = footerDialogBox[0];
      expect(
        footerDialogBox.length,
        "It's expected that the footer of the box dialog will have two children"
      ).toBe(2);
      expect(
        secondaryButton.tagName,
        "It's expected that the secondary element will be a button"
      ).toBe('BUTTON');
      expect(
        secondaryButton.textContent,
        `It's expected that the text of the secondary button will be ${
          (args.secondaryButton as IDialogButton).label
        }`
      ).toBe((args.secondaryButton as IDialogButton).label);
      expect(
        secondaryButton,
        "It's expected that the secondary button of the footer will have a background-color #0000"
      ).toHaveStyle('background-color: #0000');
      expect(
        primaryButton.tagName,
        "It's expected that the primary element will be a button"
      ).toBe('BUTTON');
      expect(
        primaryButton.textContent,
        `It's expected that the text of the primary button will be ${
          (args.primaryButton as IDialogButton).label
        }`
      ).toBe((args.primaryButton as IDialogButton).label);
      expect(
        primaryButton,
        "It's expected that the primary button of the footer will have a background-color #0053db"
      ).toHaveStyle('background-color: #0053db');
    });

    await step('Checking that the footer buttons are clickable', async () => {
      const footerDialogBox = dialog.children[2].children;
      const primaryButton = footerDialogBox[1];
      const secondaryButton = footerDialogBox[0];

      await userEvent.click(secondaryButton);
      expect(
        (args.secondaryButton as IDialogButton).onClick,
        "It's expected that the secondary button will have received an interaction from the click event"
      ).toHaveBeenCalledOnce();

      await userEvent.click(primaryButton);
      expect(
        (args.primaryButton as IDialogButton).onClick,
        "It's expected that the primary button will have received an interaction from the click event"
      ).toHaveBeenCalledOnce();
    });
  },
};

export const General: Story = {
  args: {
    title: 'Title',
    message:
      "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
    status: 'general',
    primaryButton: {
      label: 'GOT IT',
      onClick: fn(),
    },
    secondaryButton: {
      label: 'CLOSE',
      onClick: fn(),
    },
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog');

    await step('Checking the structure of the Dialog box', () => {
      expect(
        dialog,
        "It's expected that the Dialog has a width of 400px"
      ).toHaveStyle('width: 400px');
      expect(
        dialog,
        "It's expected that the Dialog has a padding of 24px"
      ).toHaveStyle('padding: 24px');
      expect(
        dialog,
        "It's expected that the Dialog box has a border-radius of 8px"
      ).toHaveStyle('border-radius: 8px');
      expect(
        dialog,
        "It's expected that the Dialog box has a background-color #fff"
      ).toHaveStyle('background-color: #fff');
    });

    await step('Checking the dialog box header', () => {
      const headerDialogBox = dialog.children[0].children[0];
      expect(
        headerDialogBox.textContent,
        `It's expected that the dialog box header will be ${args.title}`
      ).toBe(args.title);
      expect(
        headerDialogBox,
        `It's expected that the font-family of the dialog box header is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
      expect(
        headerDialogBox,
        "It's expected that the font-weight of the dialog box header is 500"
      ).toHaveStyle('font-weight: 500');
      expect(
        headerDialogBox,
        "It's expected that the font-size of the box dialog header is 22px"
      ).toHaveStyle('font-size: 22px');
      expect(
        headerDialogBox,
        "It's expected that the box dialog header is centred"
      ).toHaveStyle('text-align: center');
    });

    await step('Checking the body in the box dialog', () => {
      const bodyDialogBox = dialog.children[1].children;

      expect(
        bodyDialogBox.length,
        "It's expected that the body of the box dialog will have two children"
      ).toBe(1);
      expect(
        bodyDialogBox[0].textContent,
        "It's expected that the content of the message will be similar to what was sent"
      ).toBe(args.message);
      expect(
        bodyDialogBox[0],
        `It's expected that the font-family of the message body will be ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
      expect(
        bodyDialogBox[0],
        `It's expected that the font-weight of the message body will be 500`
      ).toHaveStyle('font-weight: 500');
      expect(
        bodyDialogBox[0],
        "It's expected that the font-size of the message body will be 14px"
      ).toHaveStyle('font-size: 14px');
      expect(
        bodyDialogBox[0],
        "It's expected that the body text of the message is centred"
      ).toHaveStyle('text-align: center');
    });

    await step('Checking the footer in the box dialog', () => {
      const footerDialogBox = dialog.children[2].children;
      const primaryButton = footerDialogBox[1];
      const secondaryButton = footerDialogBox[0];
      expect(
        footerDialogBox.length,
        "It's expected that the footer of the box dialog will have two children"
      ).toBe(2);
      expect(
        secondaryButton.tagName,
        "It's expected that the secondary element will be a button"
      ).toBe('BUTTON');
      expect(
        secondaryButton.textContent,
        `It's expected that the text of the secondary button will be ${
          (args.secondaryButton as IDialogButton).label
        }`
      ).toBe((args.secondaryButton as IDialogButton).label);
      expect(
        secondaryButton,
        "It's expected that the secondary button of the footer will have a background-color #0000"
      ).toHaveStyle('background-color: #0000');
      expect(
        primaryButton.tagName,
        "It's expected that the primary element will be a button"
      ).toBe('BUTTON');
      expect(
        primaryButton.textContent,
        `It's expected that the text of the primary button will be ${
          (args.primaryButton as IDialogButton).label
        }`
      ).toBe((args.primaryButton as IDialogButton).label);
      expect(
        primaryButton,
        "It's expected that the primary button of the footer will have a background-color #0053db"
      ).toHaveStyle('background-color: #0053db');
    });

    await step('Checking that the footer buttons are clickable', async () => {
      const footerDialogBox = dialog.children[2].children;
      const primaryButton = footerDialogBox[1];
      const secondaryButton = footerDialogBox[0];

      await userEvent.click(secondaryButton);
      expect(
        (args.secondaryButton as IDialogButton).onClick,
        "It's expected that the secondary button will have received an interaction from the click event"
      ).toHaveBeenCalledOnce();

      await userEvent.click(primaryButton);
      expect(
        (args.primaryButton as IDialogButton).onClick,
        "It's expected that the primary button will have received an interaction from the click event"
      ).toHaveBeenCalledOnce();
    });
  },
};

export const Loading: Story = {
  args: {
    title: 'Title',
    message:
      "This is the error description. It can be anything you want and as long as you want. But please don't make it too long.",
    status: 'loading',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog');

    await step('Checking the structure of the Dialog box', () => {
      expect(
        dialog,
        "It's expected that the Dialog has a width of 400px"
      ).toHaveStyle('width: 400px');
      expect(
        dialog,
        "It's expected that the Dialog has a padding of 24px"
      ).toHaveStyle('padding: 24px');
      expect(
        dialog,
        "It's expected that the Dialog box has a border-radius of 8px"
      ).toHaveStyle('border-radius: 8px');
      expect(
        dialog,
        "It's expected that the Dialog box has a background-color #fff"
      ).toHaveStyle('background-color: #fff');
    });

    await step('Checking the dialog box header', () => {
      const headerDialogBox = dialog.children[0].children[0];
      expect(
        headerDialogBox.textContent,
        `It's expected that the dialog box header will be ${args.title}`
      ).toBe(args.title);
      expect(
        headerDialogBox,
        `It's expected that the font-family of the dialog box header is ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
      expect(
        headerDialogBox,
        "It's expected that the font-weight of the dialog box header is 500"
      ).toHaveStyle('font-weight: 500');
      expect(
        headerDialogBox,
        "It's expected that the font-size of the box dialog header is 22px"
      ).toHaveStyle('font-size: 22px');
      expect(
        headerDialogBox,
        "It's expected that the box dialog header is centred"
      ).toHaveStyle('text-align: center');
    });

    await step('Checking the body in the box dialog', () => {
      const bodyDialogBox = dialog.children[1].children;

      expect(
        bodyDialogBox.length,
        "It's expected that the body of the box dialog will have two children"
      ).toBe(2);
      expect(
        bodyDialogBox[1].textContent,
        "It's expected that the content of the message will be similar to what was sent"
      ).toBe(args.message);
      expect(
        bodyDialogBox[1],
        `It's expected that the font-family of the message body will be ${
          args.fontFamily || 'Satoshi'
        }`
      ).toHaveStyle(`font-family: ${args.fontFamily || 'Satoshi'}`);
      expect(
        bodyDialogBox[1],
        `It's expected that the font-weight of the message body will be 500`
      ).toHaveStyle('font-weight: 500');
      expect(
        bodyDialogBox[1],
        "It's expected that the font-size of the message body will be 14px"
      ).toHaveStyle('font-size: 14px');
      expect(
        bodyDialogBox[1],
        "It's expected that the body text of the message is centred"
      ).toHaveStyle('text-align: center');
    });
  },
};
