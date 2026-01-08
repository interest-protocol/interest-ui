import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import React from 'react';

import FormFieldBox from '../index';

const meta: Meta<typeof FormFieldBox> = {
  title: 'Interest Protocol/Form Field Box',
  component: FormFieldBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the field',
    },
    status: {
      control: 'select',
      options: ['none', 'error', 'success'],
      description: 'Status of the field',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the field',
    },
    isTextArea: {
      control: 'boolean',
      description: 'Render as textarea instead of input',
    },
    supportingText: {
      control: 'text',
      description: 'Supporting text below the field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormFieldBox>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    status: 'none',
    onChange: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking the field structure', async () => {
      const label = canvas.getByText(args.label!);
      expect(
        label,
        'It is expected that the label is rendered'
      ).toBeInTheDocument();

      const input = canvas.getByPlaceholderText(args.placeholder!);
      expect(
        input,
        'It is expected that the input is rendered'
      ).toBeInTheDocument();
      expect(input.tagName, 'It is expected that the element is an INPUT').toBe(
        'INPUT'
      );
    });

    await step('Checking input interaction', async () => {
      const input = canvas.getByPlaceholderText(args.placeholder!);

      await userEvent.type(input, 'John Doe');

      await waitFor(() => {
        expect(
          args.onChange,
          'It is expected that onChange was called'
        ).toHaveBeenCalled();
      });
    });
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    status: 'error',
    supportingText: 'Please enter a valid email address',
    defaultValue: 'invalid-email',
    onChange: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking error state styling', async () => {
      const label = canvas.getByText(args.label!);

      expect(
        label,
        'It is expected that the label has error color'
      ).toHaveStyle('color: #FED7D7');

      const supportingText = canvas.getByText(args.supportingText!);
      expect(
        supportingText,
        'It is expected that supporting text is rendered'
      ).toBeInTheDocument();
      expect(
        supportingText,
        'It is expected that supporting text has error color'
      ).toHaveStyle('color: #FED7D7');
    });

    await step('Checking error icon presence', async () => {
      const container = canvasElement.querySelector('[data-status="error"]');
      expect(
        container,
        'It is expected that the error status is set'
      ).toBeInTheDocument();
    });
  },
};

export const SuccessState: Story = {
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    status: 'success',
    supportingText: 'Username is available!',
    defaultValue: 'john_doe',
    onChange: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking success state styling', async () => {
      const label = canvas.getByText(args.label!);
      expect(
        label,
        'It is expected that the label has success color'
      ).toHaveStyle('color: #BAF6CF');

      const supportingText = canvas.getByText(args.supportingText!);
      expect(
        supportingText,
        'It is expected that supporting text is rendered'
      ).toBeInTheDocument();
      expect(
        supportingText,
        'It is expected that supporting text has success color'
      ).toHaveStyle('color: #BAF6CF');
    });

    await step('Checking success icon presence', async () => {
      const container = canvasElement.querySelector('[data-status="success"]');
      expect(
        container,
        'It is expected that the success status is set'
      ).toBeInTheDocument();
    });
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    disabled: true,
    defaultValue: 'Cannot edit',
    supportingText: 'This field cannot be edited',
    onChange: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking disabled state', async () => {
      const input = canvas.getByPlaceholderText(args.placeholder!);

      expect(input, 'It is expected that the input is disabled').toBeDisabled();
      expect(
        input,
        'It is expected that the input has opacity styling'
      ).toHaveStyle('opacity: 1');
    });

    await step(
      'Checking that disabled input cannot be interacted with',
      async () => {
        const input = canvas.getByPlaceholderText(args.placeholder!);

        await userEvent.click(input);
        await userEvent.type(input, 'Test');

        await waitFor(() => {
          expect(
            args.onChange,
            'It is expected that onChange was not called'
          ).not.toHaveBeenCalled();
        });
      }
    );
  },
};

export const TextArea: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter pool description here...',
    isTextArea: true,
    status: 'none',
    onChange: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking textarea structure', async () => {
      const textarea = canvas.getByPlaceholderText(args.placeholder!);

      expect(
        textarea,
        'It is expected that the textarea is rendered'
      ).toBeInTheDocument();
      expect(
        textarea.tagName,
        'It is expected that the element is a TEXTAREA'
      ).toBe('TEXTAREA');
    });

    await step('Checking textarea interaction', async () => {
      const textarea = canvas.getByPlaceholderText(args.placeholder!);

      await userEvent.type(textarea, 'This is a long description for the pool');

      await waitFor(() => {
        expect(
          args.onChange,
          'It is expected that onChange was called'
        ).toHaveBeenCalled();
      });
    });
  },
};

export const TextAreaError: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter pool description here...',
    isTextArea: true,
    status: 'error',
    supportingText: 'Description must be at least 10 characters',
    defaultValue: 'Too short',
    onChange: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking textarea error state', async () => {
      const textarea = canvas.getByPlaceholderText(args.placeholder!);

      expect(
        textarea.tagName,
        'It is expected that the element is a TEXTAREA'
      ).toBe('TEXTAREA');

      const supportingText = canvas.getByText(args.supportingText!);
      expect(
        supportingText,
        'It is expected that error message is displayed'
      ).toBeInTheDocument();
      expect(
        supportingText,
        'It is expected that supporting text has error color'
      ).toHaveStyle('color: #FED7D7');
    });
  },
};

export const WithSuffix: Story = {
  args: {
    label: 'Amount',
    placeholder: '0.00',
    Suffix: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.5rem',
          color: '#9CA3AF',
          fontWeight: '600',
        }}
      >
        USD
      </div>
    ),
    status: 'none',
    onChange: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking suffix presence', async () => {
      const suffix = canvas.getByText('USD');
      expect(
        suffix,
        'It is expected that the suffix is rendered'
      ).toBeInTheDocument();
    });

    await step('Checking input with suffix interaction', async () => {
      const input = canvas.getByPlaceholderText(args.placeholder!);

      await userEvent.type(input, '100');

      await waitFor(() => {
        expect(
          args.onChange,
          'It is expected that onChange was called'
        ).toHaveBeenCalled();
      });
    });
  },
};

export const NumberInput: Story = {
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    type: 'number',
    status: 'none',
    onChange: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking number input type', async () => {
      const input = canvas.getByPlaceholderText(args.placeholder!);

      expect(
        input,
        'It is expected that the input type is number'
      ).toHaveAttribute('type', 'number');
    });

    await step('Checking number input interaction', async () => {
      const input = canvas.getByPlaceholderText(args.placeholder!);

      await userEvent.type(input, '25');

      await waitFor(() => {
        expect(
          args.onChange,
          'It is expected that onChange was called'
        ).toHaveBeenCalled();
      });
    });
  },
};

export const EmailInput: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
    status: 'none',
    onChange: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking email input type', async () => {
      const input = canvas.getByPlaceholderText(args.placeholder!);

      expect(
        input,
        'It is expected that the input type is email'
      ).toHaveAttribute('type', 'email');
    });

    await step('Checking email input interaction', async () => {
      const input = canvas.getByPlaceholderText(args.placeholder!);

      await userEvent.type(input, 'test@example.com');

      await waitFor(() => {
        expect(
          args.onChange,
          'It is expected that onChange was called'
        ).toHaveBeenCalled();
      });
    });
  },
};

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    status: 'none',
    onChange: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checking password input type', async () => {
      const input = canvas.getByPlaceholderText(args.placeholder!);

      expect(
        input,
        'It is expected that the input type is password'
      ).toHaveAttribute('type', 'password');
    });

    await step('Checking password input interaction', async () => {
      const input = canvas.getByPlaceholderText(args.placeholder!);

      await userEvent.type(input, 'SecurePass123');

      await waitFor(() => {
        expect(
          args.onChange,
          'It is expected that onChange was called'
        ).toHaveBeenCalled();
      });
    });
  },
};
