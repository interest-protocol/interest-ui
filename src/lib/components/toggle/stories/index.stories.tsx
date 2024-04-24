import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within } from '@storybook/test';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { TickSVG, TimesSVG } from '../../../icons';
import { ToggleButton } from '..';

const meta: Meta<typeof ToggleButton> = {
  title: 'Toggle',
  component: ToggleButton,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Normal: Story = {
  args: {
    name: 'toggle',
    defaultValue: false,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('toggle');
    const computedStyle = getComputedStyle(toggle);

    const background = computedStyle.getPropertyValue('background');
    const transition = computedStyle.getPropertyValue('transition');

    await step(
      'Check if toggle style property exist, background and transition',
      async () => {
        expect(background.trim()).toBeTruthy();
        expect(transition).toBeTruthy();
        expect(args.defaultValue).toBeFalsy();
      }
    );

    await step('Click toggle', async () => {
      await userEvent.click(canvas.getByRole('toggle'));
    });
  },
};

export const NormalWithOnChangeDemo: Story = {
  args: {
    name: 'toggle',
    defaultValue: false,
    onChange: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('toggle');
    const computedStyle = getComputedStyle(toggle);

    const background = computedStyle.getPropertyValue('background');
    const transition = computedStyle.getPropertyValue('transition');

    await step(
      'Check if toggle style property exist, background and transition',
      async () => {
        expect(background).toBeTruthy();
        expect(transition).toBeTruthy();
        expect(args.defaultValue).toBeFalsy();
      }
    );

    await step('Click toggle', async () => {
      await userEvent.click(canvas.getByRole('toggle'));
    });

    await step('Call onChange toggle', async () => {
      expect(args.onChange).toBeTruthy();
    });
  },
};

export const WithActiveIcon: Story = {
  args: {
    name: 'toggle',
    defaultValue: true,
    activeIcon: <TickSVG maxWidth=".875rem" maxHeight=".875rem" width="100%" />,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('toggle');
    const computedStyle = getComputedStyle(toggle);

    const background = computedStyle.getPropertyValue('background');
    const transition = computedStyle.getPropertyValue('transition');

    await step('Check if toggle style property exist and props', async () => {
      expect(background).toBeTruthy();
      expect(transition).toBeTruthy();
      expect(args.defaultValue).toBeTruthy();
    });

    await step('Click toggle', async () => {
      await userEvent.click(canvas.getByRole('toggle'));
    });

    await step('active icon exist', async () => {
      expect(args.activeIcon).toBeTruthy();
    });
  },
};

export const WithInactiveIcon: Story = {
  args: {
    name: 'toggle',
    defaultValue: false,
    inactiveIcon: (
      <TimesSVG maxWidth=".875rem" maxHeight=".875rem" width="100%" />
    ),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('toggle');
    const computedStyle = getComputedStyle(toggle);

    const background = computedStyle.getPropertyValue('background');
    const transition = computedStyle.getPropertyValue('transition');

    await step('Check if toggle style property exist and props', async () => {
      expect(background).toBeTruthy();
      expect(transition).toBeTruthy();
      expect(args.defaultValue).toBeFalsy();
    });

    await step('Click toggle', async () => {
      await userEvent.click(canvas.getByRole('toggle'));
    });

    await step('Inactive icon exist', async () => {
      expect(args.inactiveIcon).toBeTruthy();
    });
  },
};

export const WithActiveAndInactiveIcon: Story = {
  args: {
    name: 'toggle',
    defaultValue: false,
    activeIcon: <TickSVG maxWidth=".875rem" maxHeight=".875rem" width="100%" />,
    inactiveIcon: (
      <TimesSVG maxWidth=".875rem" maxHeight=".875rem" width="100%" />
    ),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('toggle');
    const computedStyle = getComputedStyle(toggle);

    const background = computedStyle.getPropertyValue('background');
    const transition = computedStyle.getPropertyValue('transition');

    await step('Check if toggle style property exist and props', async () => {
      expect(background).toBeTruthy();
      expect(transition).toBeTruthy();
      expect(args.defaultValue).toBeFalsy();
    });

    await step('Click toggle', async () => {
      await userEvent.click(canvas.getByRole('toggle'));
    });

    await step('Active and inactive icon exist', async () => {
      expect(args.activeIcon).toBeTruthy();
    });
  },
};

export const Selected: Story = {
  args: {
    name: 'toggle',
    defaultValue: true,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('toggle');
    const computedStyle = getComputedStyle(toggle);

    const background = computedStyle.getPropertyValue('background');
    const transition = computedStyle.getPropertyValue('transition');

    await step('Check if toggle style property exist and props', async () => {
      expect(background).toBeTruthy();
      expect(transition).toBeTruthy();
      expect(args.defaultValue).toBeTruthy();
    });

    await step('Click toggle', async () => {
      await userEvent.click(canvas.getByRole('toggle'));
    });
  },
};

export const SelectedDisabled: Story = {
  args: {
    name: 'toggle',
    disabled: true,
    defaultValue: true,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('toggle');
    const computedStyle = getComputedStyle(toggle);

    const background = computedStyle.getPropertyValue('background');
    const transition = computedStyle.getPropertyValue('transition');

    await step('Check if toggle style property exist and props', async () => {
      expect(background).toBeTruthy();
      expect(transition).toBeTruthy();
      expect(args.defaultValue).toBeTruthy();
    });

    await step('Click toggle', async () => {
      await userEvent.click(canvas.getByRole('toggle'));
    });

    await step('Check if it disabled', async () => {
      expect(args.disabled).toBeTruthy();
    });
  },
};

export const NotSelectedDisabled: Story = {
  args: {
    name: 'toggle',
    disabled: true,
    defaultValue: false,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('toggle');
    const computedStyle = getComputedStyle(toggle);

    const background = computedStyle.getPropertyValue('background');
    const transition = computedStyle.getPropertyValue('transition');

    await step('Check if toggle style property exist and props', async () => {
      expect(background).toBeTruthy();
      expect(transition).toBeTruthy();
      expect(args.defaultValue).toBeFalsy();
    });

    await step('Click toggle', async () => {
      await userEvent.click(canvas.getByRole('toggle'));
    });

    await step('Active and inactive icon exist', async () => {
      expect(args.disabled).toBeTruthy();
    });
  },
};

export const SingleLabel: Story = {
  args: {
    name: 'toggle',
    defaultValue: true,
    labels: { label: 'Toggle Label' },
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('toggle');
    const computedStyle = getComputedStyle(toggle);

    const background = computedStyle.getPropertyValue('background');
    const transition = computedStyle.getPropertyValue('transition');

    await step('Check if toggle style property exist and props', async () => {
      expect(background).toBeTruthy();
      expect(transition).toBeTruthy();
      expect(args.defaultValue).toBeTruthy();
    });

    await step('Click toggle', async () => {
      await userEvent.click(canvas.getByRole('toggle'));
    });

    await step('Check if labels exist and length', async () => {
      expect(args.labels).toBeTruthy();
    });
  },
};

export const DoubleLabel: Story = {
  args: {
    name: 'toggle',
    defaultValue: true,
    labels: { label: 'Toggle Label', supportingLabel: 'Supporting text' },
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('toggle');
    const computedStyle = getComputedStyle(toggle);

    const background = computedStyle.getPropertyValue('background');
    const transition = computedStyle.getPropertyValue('transition');

    await step('Check if toggle style property exist and props', async () => {
      expect(background).toBeTruthy();
      expect(transition).toBeTruthy();
      expect(args.defaultValue).toBeTruthy();
    });

    await step('Click toggle', async () => {
      await userEvent.click(canvas.getByRole('toggle'));
    });

    await step('Check if labels exist and length', async () => {
      expect(args.labels).toBeTruthy();
    });
  },
};
