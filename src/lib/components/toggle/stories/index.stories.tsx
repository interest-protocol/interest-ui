import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, waitFor, within } from '@storybook/test';
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
    onChange: fn(),
    defaultValue: false,
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const toggleWrapper = canvas.getByRole('switch');

    await step('Check the structure of the toogle wrapper', async () => {
      expect(
        toggleWrapper,
        'It is expected that the element will be rendered'
      ).toBeInTheDocument();
      expect(
        toggleWrapper,
        'It is expected that the toggle wrapper has the display property as flex'
      ).toHaveStyle('display: flex');
      expect(
        toggleWrapper,
        'It is expected that the toggle wrapper has the align-items property as center'
      ).toHaveStyle('align-items: center');
      expect(
        toggleWrapper.childNodes.length,
        'It is expected that the toggle wrapper has two nodes'
      ).toBe(2);
    });

    await step('Check the toogle element', async () => {
      const toggle = toggleWrapper.children[0];
      expect(
        toggle.tagName,
        'It is expected that the element tag is a Label'
      ).toBe('LABEL');

      await step('Check the input checkbox', async () => {
        const toggleInput = toggle.children[0];
        expect(
          toggle,
          'It is expected that the toggle wrapper has the border-radius property as 159984px'
        ).toHaveStyle('border-top-left-radius: 159984px');
        expect(
          toggleInput.tagName,
          'It is expected that the element tag is a Input'
        ).toBe('INPUT');
        expect(
          toggleInput,
          'It is expected that the input has the display property as none'
        ).toHaveStyle('display: none');
        expect(
          toggleInput.hasAttribute('type'),
          'It is expected that the input has a type attribute'
        ).toBeTruthy();
        expect(
          toggleInput.getAttribute('type'),
          'It is expected that the input has the type attribute as checkbox'
        ).toBe('checkbox');
      });

      await step('Check the toogle ui', async () => {
        const toggleUI = toggle.children[1];
        const toggleBall = toggleUI.children[0];
        expect(
          toggleUI,
          'It is expected that the toggle UI has the display property as flex'
        ).toHaveStyle('display: flex');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the width property as 44px'
        ).toHaveStyle('width: 44px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the height property as 27.187px'
        ).toHaveStyle('height: 27.1875px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the cursor property as pointer'
        ).toHaveStyle('cursor: pointer');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the border-radius property as 159984px'
        ).toHaveStyle('border-top-left-radius: 159984px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the align-items property as center'
        ).toHaveStyle('align-items: center');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the background-color property as #1b1b1f3d'
        ).toHaveStyle('background-color: #1b1b1f3d');

        await step('Check the UI of the toggle ball', async () => {
          expect(
            toggleBall,
            'It is expected that the toggle ball has the width property as 20px'
          ).toHaveStyle('width: 20px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the height property as 20px'
          ).toHaveStyle('height: 20px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the border-radius property as 159984px'
          ).toHaveStyle('border-top-left-radius: 159984px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the display property as flex'
          ).toHaveStyle('display: flex');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the align-items property as center'
          ).toHaveStyle('align-items: center');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the background-color property as #fff'
          ).toHaveStyle('background-color: #fff');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the transform property'
          ).toHaveStyle('transform: matrix(1, 0, 0, 1, 4, 0)');
          expect(
            toggleBall.childNodes.length,
            'It is expected that the toggle wrapper has a zero node'
          ).toBe(0);
        });
      });
    });

    await step("Check toggle's onChange event", async () => {
      await userEvent.click(toggleWrapper.children[0]);

      const newToggleWrapper = canvas.getByRole('switch');
      await waitFor(() => {
        expect(
          newToggleWrapper.children[0].children[1],
          'It is expected that the background of the toggle has changed colour'
        ).toHaveStyle('background-color: #0053DB');
        expect(
          newToggleWrapper.children[0].children[1].children[0],
          'It is expected that the toggle ball will change position'
        ).toHaveStyle('transform: matrix(1, 0, 0, 1, 20.8, 0)');
        expect(args.onChange).toHaveBeenCalledOnce();
      });
    });
  },
};

export const WithActiveIcon: Story = {
  args: {
    name: 'toggle',
    defaultValue: true,
    activeIcon: <TickSVG maxWidth=".875rem" maxHeight=".875rem" width="100%" />,
    onChange: fn(),
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const toggleWrapper = canvas.getByRole('switch');

    await step('Check the structure of the toogle wrapper', async () => {
      expect(
        toggleWrapper,
        'It is expected that the element will be rendered'
      ).toBeInTheDocument();
      expect(
        toggleWrapper,
        'It is expected that the toggle wrapper has the display property as flex'
      ).toHaveStyle('display: flex');
      expect(
        toggleWrapper,
        'It is expected that the toggle wrapper has the align-items property as center'
      ).toHaveStyle('align-items: center');
      expect(
        toggleWrapper.childNodes.length,
        'It is expected that the toggle wrapper has two nodes'
      ).toBe(2);
    });

    await step('Check the toogle element', async () => {
      const toggle = toggleWrapper.children[0];
      expect(
        toggle.tagName,
        'It is expected that the element tag is a Label'
      ).toBe('LABEL');

      await step('Check the input checkbox', async () => {
        const toggleInput = toggle.children[0];
        expect(
          toggle,
          'It is expected that the toggle wrapper has the border-radius property as 159984px'
        ).toHaveStyle('border-top-left-radius: 159984px');
        expect(
          toggleInput.tagName,
          'It is expected that the element tag is a Input'
        ).toBe('INPUT');
        expect(
          toggleInput,
          'It is expected that the input has the display property as none'
        ).toHaveStyle('display: none');
        expect(
          toggleInput.hasAttribute('type'),
          'It is expected that the input has a type attribute'
        ).toBeTruthy();
        expect(
          toggleInput.getAttribute('type'),
          'It is expected that the input has the type attribute as checkbox'
        ).toBe('checkbox');
      });

      await step('Check the toogle ui', async () => {
        const toggleUI = toggle.children[1];
        const toggleBall = toggleUI.children[0];
        expect(
          toggleUI,
          'It is expected that the toggle UI has the display property as flex'
        ).toHaveStyle('display: flex');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the width property as 44px'
        ).toHaveStyle('width: 44px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the height property as 27.187px'
        ).toHaveStyle('height: 27.1875px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the cursor property as pointer'
        ).toHaveStyle('cursor: pointer');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the border-radius property as 159984px'
        ).toHaveStyle('border-top-left-radius: 159984px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the align-items property as center'
        ).toHaveStyle('align-items: center');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the background-color property as #0053DB'
        ).toHaveStyle('background-color: #0053DB');

        await step('Check the UI of the toggle ball', async () => {
          expect(
            toggleBall,
            'It is expected that the toggle ball has the width property as 20px'
          ).toHaveStyle('width: 20px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the height property as 20px'
          ).toHaveStyle('height: 20px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the border-radius property as 159984px'
          ).toHaveStyle('border-top-left-radius: 159984px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the display property as flex'
          ).toHaveStyle('display: flex');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the align-items property as center'
          ).toHaveStyle('align-items: center');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the background-color property as #fff'
          ).toHaveStyle('background-color: #fff');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the transform property'
          ).toHaveStyle('transform: matrix(1, 0, 0, 1, 20.8, 0)');
          expect(
            toggleBall.childNodes.length,
            'It is expected that the toggle wrapper has a single node'
          ).toBe(1);
        });
      });
    });

    await step("Check toggle's onChange event", async () => {
      await userEvent.click(toggleWrapper.children[0]);

      const newToggleWrapper = canvas.getByRole('switch');
      await waitFor(() => {
        expect(
          newToggleWrapper.children[0].children[1],
          'It is expected that the background of the toggle has changed colour'
        ).toHaveStyle('background-color: #1b1b1f3d');
        expect(
          newToggleWrapper.children[0].children[1].children[0],
          'It is expected that the toggle ball will change position'
        ).toHaveStyle('transform: matrix(1, 0, 0, 1, 4, 0)');
        expect(args.onChange).toHaveBeenCalledOnce();
      });
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
    onChange: fn(),
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const toggleWrapper = canvas.getByRole('switch');

    await step('Check the structure of the toogle wrapper', async () => {
      expect(
        toggleWrapper,
        'It is expected that the element will be rendered'
      ).toBeInTheDocument();
      expect(
        toggleWrapper,
        'It is expected that the toggle wrapper has the display property as flex'
      ).toHaveStyle('display: flex');
      expect(
        toggleWrapper,
        'It is expected that the toggle wrapper has the align-items property as center'
      ).toHaveStyle('align-items: center');
      expect(
        toggleWrapper.childNodes.length,
        'It is expected that the toggle wrapper has two nodes'
      ).toBe(2);
    });

    await step('Check the toogle element', async () => {
      const toggle = toggleWrapper.children[0];
      expect(
        toggle.tagName,
        'It is expected that the element tag is a Label'
      ).toBe('LABEL');

      await step('Check the input checkbox', async () => {
        const toggleInput = toggle.children[0];
        expect(
          toggle,
          'It is expected that the toggle wrapper has the border-radius property as 159984px'
        ).toHaveStyle('border-top-left-radius: 159984px');
        expect(
          toggleInput.tagName,
          'It is expected that the element tag is a Input'
        ).toBe('INPUT');
        expect(
          toggleInput,
          'It is expected that the input has the display property as none'
        ).toHaveStyle('display: none');
        expect(
          toggleInput.hasAttribute('type'),
          'It is expected that the input has a type attribute'
        ).toBeTruthy();
        expect(
          toggleInput.getAttribute('type'),
          'It is expected that the input has the type attribute as checkbox'
        ).toBe('checkbox');
      });

      await step('Check the toogle ui', async () => {
        const toggleUI = toggle.children[1];
        const toggleBall = toggleUI.children[0];
        expect(
          toggleUI,
          'It is expected that the toggle UI has the display property as flex'
        ).toHaveStyle('display: flex');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the width property as 44px'
        ).toHaveStyle('width: 44px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the height property as 27.187px'
        ).toHaveStyle('height: 27.1875px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the cursor property as pointer'
        ).toHaveStyle('cursor: pointer');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the border-radius property as 159984px'
        ).toHaveStyle('border-top-left-radius: 159984px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the align-items property as center'
        ).toHaveStyle('align-items: center');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the background-color property as #1b1b1f3d'
        ).toHaveStyle('background-color: #1b1b1f3d');

        await step('Check the UI of the toggle ball', async () => {
          expect(
            toggleBall,
            'It is expected that the toggle ball has the width property as 20px'
          ).toHaveStyle('width: 20px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the height property as 20px'
          ).toHaveStyle('height: 20px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the border-radius property as 159984px'
          ).toHaveStyle('border-top-left-radius: 159984px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the display property as flex'
          ).toHaveStyle('display: flex');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the align-items property as center'
          ).toHaveStyle('align-items: center');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the background-color property as #fff'
          ).toHaveStyle('background-color: #fff');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the transform property'
          ).toHaveStyle('transform: matrix(1, 0, 0, 1, 4, 0)');
          expect(
            toggleBall.childNodes.length,
            'It is expected that the toggle wrapper has a single node'
          ).toBe(1);
        });
      });
    });

    await step("Check toggle's onChange event", async () => {
      await userEvent.click(toggleWrapper.children[0]);

      const newToggleWrapper = canvas.getByRole('switch');
      await waitFor(() => {
        expect(
          newToggleWrapper.children[0].children[1],
          'It is expected that the background of the toggle has changed colour'
        ).toHaveStyle('background-color: #0053DB');
        expect(
          newToggleWrapper.children[0].children[1].children[0],
          'It is expected that the toggle ball will change position'
        ).toHaveStyle('transform: matrix(1, 0, 0, 1, 20.8, 0)');
        expect(args.onChange).toHaveBeenCalledOnce();
      });
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
    onChange: fn(),
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const toggleWrapper = canvas.getByRole('switch');

    await step('Check the structure of the toogle wrapper', async () => {
      expect(
        toggleWrapper,
        'It is expected that the element will be rendered'
      ).toBeInTheDocument();
      expect(
        toggleWrapper,
        'It is expected that the toggle wrapper has the display property as flex'
      ).toHaveStyle('display: flex');
      expect(
        toggleWrapper,
        'It is expected that the toggle wrapper has the align-items property as center'
      ).toHaveStyle('align-items: center');
      expect(
        toggleWrapper.childNodes.length,
        'It is expected that the toggle wrapper has two nodes'
      ).toBe(2);
    });

    await step('Check the toogle element', async () => {
      const toggle = toggleWrapper.children[0];
      expect(
        toggle.tagName,
        'It is expected that the element tag is a Label'
      ).toBe('LABEL');

      await step('Check the input checkbox', async () => {
        const toggleInput = toggle.children[0];
        expect(
          toggle,
          'It is expected that the toggle wrapper has the border-radius property as 159984px'
        ).toHaveStyle('border-top-left-radius: 159984px');
        expect(
          toggleInput.tagName,
          'It is expected that the element tag is a Input'
        ).toBe('INPUT');
        expect(
          toggleInput,
          'It is expected that the input has the display property as none'
        ).toHaveStyle('display: none');
        expect(
          toggleInput.hasAttribute('type'),
          'It is expected that the input has a type attribute'
        ).toBeTruthy();
        expect(
          toggleInput.getAttribute('type'),
          'It is expected that the input has the type attribute as checkbox'
        ).toBe('checkbox');
      });

      await step('Check the toogle ui', async () => {
        const toggleUI = toggle.children[1];
        const toggleBall = toggleUI.children[0];
        expect(
          toggleUI,
          'It is expected that the toggle UI has the display property as flex'
        ).toHaveStyle('display: flex');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the width property as 44px'
        ).toHaveStyle('width: 44px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the height property as 27.187px'
        ).toHaveStyle('height: 27.1875px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the cursor property as pointer'
        ).toHaveStyle('cursor: pointer');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the border-radius property as 159984px'
        ).toHaveStyle('border-top-left-radius: 159984px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the align-items property as center'
        ).toHaveStyle('align-items: center');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the background-color property as #1b1b1f3d'
        ).toHaveStyle('background-color: #1b1b1f3d');

        await step('Check the UI of the toggle ball', async () => {
          expect(
            toggleBall,
            'It is expected that the toggle ball has the width property as 20px'
          ).toHaveStyle('width: 20px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the height property as 20px'
          ).toHaveStyle('height: 20px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the border-radius property as 159984px'
          ).toHaveStyle('border-top-left-radius: 159984px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the display property as flex'
          ).toHaveStyle('display: flex');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the align-items property as center'
          ).toHaveStyle('align-items: center');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the background-color property as #fff'
          ).toHaveStyle('background-color: #fff');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the transform property'
          ).toHaveStyle('transform: matrix(1, 0, 0, 1, 4, 0)');
          expect(
            toggleBall.childNodes.length,
            'It is expected that the toggle wrapper has a single node'
          ).toBe(1);
        });
      });
    });

    await step("Check toggle's onChange event", async () => {
      await userEvent.click(toggleWrapper.children[0]);

      const newToggleWrapper = canvas.getByRole('switch');
      await waitFor(() => {
        expect(
          newToggleWrapper.children[0].children[1],
          'It is expected that the background of the toggle has changed colour'
        ).toHaveStyle('background-color: #0053DB');
        expect(
          newToggleWrapper.children[0].children[1].children[0],
          'It is expected that the toggle ball will change position'
        ).toHaveStyle('transform: matrix(1, 0, 0, 1, 20.8, 0)');
        expect(
          newToggleWrapper.children[0].children[1].children[0].childNodes
            .length,
          'It is expected that the toggle ball has a single node'
        ).toBe(1);
        expect(args.onChange).toHaveBeenCalledOnce();
      });
    });
  },
};

export const SelectedDisabled: Story = {
  args: {
    name: 'toggle',
    disabled: true,
    onChange: fn(),
    defaultValue: true,
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const toggleWrapper = canvas.getByRole('switch');

    await step('Check the structure of the toogle wrapper', async () => {
      expect(
        toggleWrapper,
        'It is expected that the element will be rendered'
      ).toBeInTheDocument();
      expect(
        toggleWrapper,
        'It is expected that the toggle wrapper has the display property as flex'
      ).toHaveStyle('display: flex');
      expect(
        toggleWrapper,
        'It is expected that the toggle wrapper has the align-items property as center'
      ).toHaveStyle('align-items: center');
      expect(
        toggleWrapper.childNodes.length,
        'It is expected that the toggle wrapper has two nodes'
      ).toBe(2);
    });

    await step('Check the toogle element', async () => {
      const toggle = toggleWrapper.children[0];
      expect(
        toggle.tagName,
        'It is expected that the element tag is a Label'
      ).toBe('LABEL');

      await step('Check the input checkbox', async () => {
        const toggleInput = toggle.children[0];
        expect(
          toggle,
          'It is expected that the toggle wrapper has the border-radius property as 159984px'
        ).toHaveStyle('border-top-left-radius: 159984px');
        expect(
          toggleInput.tagName,
          'It is expected that the element tag is a Input'
        ).toBe('INPUT');
        expect(
          toggleInput,
          'It is expected that the input has the display property as none'
        ).toHaveStyle('display: none');
        expect(
          toggleInput.hasAttribute('type'),
          'It is expected that the input has a type attribute'
        ).toBeTruthy();
        expect(
          toggleInput.getAttribute('type'),
          'It is expected that the input has the type attribute as checkbox'
        ).toBe('checkbox');
      });

      await step('Check the toogle ui', async () => {
        const toggleUI = toggle.children[1];
        const toggleBall = toggleUI.children[0];
        expect(
          toggleUI,
          'It is expected that the toggle UI has the display property as flex'
        ).toHaveStyle('display: flex');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the width property as 44px'
        ).toHaveStyle('width: 44px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the height property as 27.187px'
        ).toHaveStyle('height: 27.1875px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the cursor property as pointer'
        ).toHaveStyle('cursor: pointer');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the border-radius property as 159984px'
        ).toHaveStyle('border-top-left-radius: 159984px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the align-items property as center'
        ).toHaveStyle('align-items: center');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the background-color property as #1b1b1f3d'
        ).toHaveStyle('background-color: #1b1b1f3d');

        await step('Check the UI of the toggle ball', async () => {
          expect(
            toggleBall,
            'It is expected that the toggle ball has the width property as 20px'
          ).toHaveStyle('width: 20px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the height property as 20px'
          ).toHaveStyle('height: 20px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the border-radius property as 159984px'
          ).toHaveStyle('border-top-left-radius: 159984px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the display property as flex'
          ).toHaveStyle('display: flex');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the align-items property as center'
          ).toHaveStyle('align-items: center');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the background-color property as #f8f9fd'
          ).toHaveStyle('background-color: #f8f9fd');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the transform property'
          ).toHaveStyle('transform: matrix(1, 0, 0, 1, 20.8, 0)');
          expect(
            toggleBall.childNodes.length,
            'It is expected that the toggle wrapper has a zero node'
          ).toBe(0);
        });
      });
    });

    await step("Check toggle's onChange event", async () => {
      await userEvent.click(toggleWrapper.children[0]);

      const newToggleWrapper = canvas.getByRole('switch');
      await waitFor(() => {
        expect(
          newToggleWrapper.children[0].children[1],
          'It is expected that the background of the toggle has changed colour'
        ).toHaveStyle('background-color: #1b1b1f3d');
        expect(
          newToggleWrapper.children[0].children[1].children[0],
          'It is expected that the toggle ball will change position'
        ).toHaveStyle('transform: matrix(1, 0, 0, 1, 20.8, 0)');
        expect(args.onChange).toHaveBeenCalledTimes(0);
      });
    });
  },
};

export const SingleLabel: Story = {
  args: {
    name: 'toggle',
    defaultValue: true,
    labels: { label: 'Toggle Label' },
    onChange: fn(),
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const toggleWrapper = canvas.getByRole('switch');

    await step('Check the structure of the toogle wrapper', async () => {
      expect(
        toggleWrapper,
        'It is expected that the element will be rendered'
      ).toBeInTheDocument();
      expect(
        toggleWrapper,
        'It is expected that the toggle wrapper has the display property as flex'
      ).toHaveStyle('display: flex');
      expect(
        toggleWrapper,
        'It is expected that the toggle wrapper has the align-items property as center'
      ).toHaveStyle('align-items: center');
      expect(
        toggleWrapper.childNodes.length,
        'It is expected that the toggle wrapper has two nodes'
      ).toBe(2);
    });

    await step('Check the toogle element', async () => {
      const toggle = toggleWrapper.children[0];
      expect(
        toggle.tagName,
        'It is expected that the element tag is a Label'
      ).toBe('LABEL');

      await step('Check the input checkbox', async () => {
        const toggleInput = toggle.children[0];
        expect(
          toggle,
          'It is expected that the toggle wrapper has the border-radius property as 159984px'
        ).toHaveStyle('border-top-left-radius: 159984px');
        expect(
          toggleInput.tagName,
          'It is expected that the element tag is a Input'
        ).toBe('INPUT');
        expect(
          toggleInput,
          'It is expected that the input has the display property as none'
        ).toHaveStyle('display: none');
        expect(
          toggleInput.hasAttribute('type'),
          'It is expected that the input has a type attribute'
        ).toBeTruthy();
        expect(
          toggleInput.getAttribute('type'),
          'It is expected that the input has the type attribute as checkbox'
        ).toBe('checkbox');
      });

      await step('Check the toogle ui', async () => {
        const toggleUI = toggle.children[1];
        const toggleBall = toggleUI.children[0];
        expect(
          toggleUI,
          'It is expected that the toggle UI has the display property as flex'
        ).toHaveStyle('display: flex');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the width property as 44px'
        ).toHaveStyle('width: 44px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the height property as 27.187px'
        ).toHaveStyle('height: 27.1875px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the cursor property as pointer'
        ).toHaveStyle('cursor: pointer');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the border-radius property as 159984px'
        ).toHaveStyle('border-top-left-radius: 159984px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the align-items property as center'
        ).toHaveStyle('align-items: center');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the background-color property as #0053DB'
        ).toHaveStyle('background-color: #0053DB');

        await step('Check the UI of the toggle ball', async () => {
          expect(
            toggleBall,
            'It is expected that the toggle ball has the width property as 20px'
          ).toHaveStyle('width: 20px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the height property as 20px'
          ).toHaveStyle('height: 20px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the border-radius property as 159984px'
          ).toHaveStyle('border-top-left-radius: 159984px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the display property as flex'
          ).toHaveStyle('display: flex');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the align-items property as center'
          ).toHaveStyle('align-items: center');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the background-color property as #fff'
          ).toHaveStyle('background-color: #fff');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the transform property'
          ).toHaveStyle('transform: matrix(1, 0, 0, 1, 20.8, 0)');
          expect(
            toggleBall.childNodes.length,
            'It is expected that the toggle wrapper has a zero node'
          ).toBe(0);
        });
      });
    });

    await step('Check the labels of the toggle element', async () => {
      const labelsWrapper = toggleWrapper.children[1];
      expect(
        labelsWrapper,
        'It is expected that the label wrapper has the display property as flex'
      ).toHaveStyle('display: flex');
      expect(
        labelsWrapper,
        'It is expected that the label wrapper has the flex-direction property as column'
      ).toHaveStyle('flex-direction: column');
      expect(
        labelsWrapper,
        'It is expected that the label wrapper has the margin-left property as 8px'
      ).toHaveStyle('margin-left: 8px');

      await step('Check the primary label', async () => {
        const primaryLabel = labelsWrapper.children[0];
        expect(
          primaryLabel.tagName,
          'It is expected that the element tag is a P'
        ).toBe('P');
        expect(
          primaryLabel,
          'It is expected that the primary label has the font-family property as Satoshi'
        ).toHaveStyle('font-family: Satoshi');
        expect(
          primaryLabel,
          'It is expected that the primary label has the font-weight property as 500'
        ).toHaveStyle('font-weight: 500');
        expect(
          primaryLabel,
          'It is expected that the primary label has the font-size property as 16px'
        ).toHaveStyle('font-size: 16px');
      });
    });

    await step("Check toggle's onChange event", async () => {
      await userEvent.click(toggleWrapper.children[0]);

      const newToggleWrapper = canvas.getByRole('switch');
      await waitFor(() => {
        expect(
          newToggleWrapper.children[0].children[1],
          'It is expected that the background of the toggle has changed colour'
        ).toHaveStyle('background-color: #1b1b1f3d');
        expect(
          newToggleWrapper.children[0].children[1].children[0],
          'It is expected that the toggle ball will change position'
        ).toHaveStyle('transform: matrix(1, 0, 0, 1, 4, 0)');
        expect(args.onChange).toHaveBeenCalledOnce();
      });
    });
  },
};

export const DoubleLabel: Story = {
  args: {
    name: 'toggle',
    defaultValue: true,
    labels: { label: 'Toggle Label', supportingLabel: 'Supporting text' },
    onChange: fn(),
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const toggleWrapper = canvas.getByRole('switch');

    await step('Check the structure of the toogle wrapper', async () => {
      expect(
        toggleWrapper,
        'It is expected that the element will be rendered'
      ).toBeInTheDocument();
      expect(
        toggleWrapper,
        'It is expected that the toggle wrapper has the display property as flex'
      ).toHaveStyle('display: flex');
      expect(
        toggleWrapper,
        'It is expected that the toggle wrapper has the align-items property as center'
      ).toHaveStyle('align-items: center');
      expect(
        toggleWrapper.childNodes.length,
        'It is expected that the toggle wrapper has two nodes'
      ).toBe(2);
    });

    await step('Check the toogle element', async () => {
      const toggle = toggleWrapper.children[0];
      expect(
        toggle.tagName,
        'It is expected that the element tag is a Label'
      ).toBe('LABEL');

      await step('Check the input checkbox', async () => {
        const toggleInput = toggle.children[0];
        expect(
          toggle,
          'It is expected that the toggle wrapper has the border-radius property as 159984px'
        ).toHaveStyle('border-top-left-radius: 159984px');
        expect(
          toggleInput.tagName,
          'It is expected that the element tag is a Input'
        ).toBe('INPUT');
        expect(
          toggleInput,
          'It is expected that the input has the display property as none'
        ).toHaveStyle('display: none');
        expect(
          toggleInput.hasAttribute('type'),
          'It is expected that the input has a type attribute'
        ).toBeTruthy();
        expect(
          toggleInput.getAttribute('type'),
          'It is expected that the input has the type attribute as checkbox'
        ).toBe('checkbox');
      });

      await step('Check the toogle ui', async () => {
        const toggleUI = toggle.children[1];
        const toggleBall = toggleUI.children[0];
        expect(
          toggleUI,
          'It is expected that the toggle UI has the display property as flex'
        ).toHaveStyle('display: flex');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the width property as 44px'
        ).toHaveStyle('width: 44px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the height property as 27.187px'
        ).toHaveStyle('height: 27.1875px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the cursor property as pointer'
        ).toHaveStyle('cursor: pointer');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the border-radius property as 159984px'
        ).toHaveStyle('border-top-left-radius: 159984px');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the align-items property as center'
        ).toHaveStyle('align-items: center');
        expect(
          toggleUI,
          'It is expected that the toggle UI has the background-color property as #0053DB'
        ).toHaveStyle('background-color: #0053DB');

        await step('Check the UI of the toggle ball', async () => {
          expect(
            toggleBall,
            'It is expected that the toggle ball has the width property as 20px'
          ).toHaveStyle('width: 20px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the height property as 20px'
          ).toHaveStyle('height: 20px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the border-radius property as 159984px'
          ).toHaveStyle('border-top-left-radius: 159984px');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the display property as flex'
          ).toHaveStyle('display: flex');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the align-items property as center'
          ).toHaveStyle('align-items: center');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the background-color property as #fff'
          ).toHaveStyle('background-color: #fff');
          expect(
            toggleBall,
            'It is expected that the toggle ball has the transform property'
          ).toHaveStyle('transform: matrix(1, 0, 0, 1, 20.8, 0)');
          expect(
            toggleBall.childNodes.length,
            'It is expected that the toggle wrapper has a single node'
          ).toBe(0);
        });
      });
    });

    await step('Check the labels of the toggle element', async () => {
      const labelsWrapper = toggleWrapper.children[1];
      expect(
        labelsWrapper,
        'It is expected that the label wrapper has the display property as flex'
      ).toHaveStyle('display: flex');
      expect(
        labelsWrapper,
        'It is expected that the label wrapper has the flex-direction property as column'
      ).toHaveStyle('flex-direction: column');
      expect(
        labelsWrapper,
        'It is expected that the label wrapper has the margin-left property as 8px'
      ).toHaveStyle('margin-left: 8px');

      await step('Check the primary label', async () => {
        const primaryLabel = labelsWrapper.children[0];
        expect(
          primaryLabel.tagName,
          'It is expected that the element tag is a P'
        ).toBe('P');
        expect(
          primaryLabel,
          'It is expected that the primary label has the font-family property as Satoshi'
        ).toHaveStyle('font-family: Satoshi');
        expect(
          primaryLabel,
          'It is expected that the primary label has the font-weight property as 500'
        ).toHaveStyle('font-weight: 500');
        expect(
          primaryLabel,
          'It is expected that the primary label has the font-size property as 16px'
        ).toHaveStyle('font-size: 16px');
      });

      await step('Check the supporting label', async () => {
        const supportingLabel = labelsWrapper.children[1];
        expect(
          supportingLabel.tagName,
          'It is expected that the element tag is a P'
        ).toBe('P');
        expect(
          supportingLabel,
          'It is expected that the supporting label has the font-family property as Satoshi'
        ).toHaveStyle('font-family: Satoshi');
        expect(
          supportingLabel,
          'It is expected that the supporting label has the font-weight property as 500'
        ).toHaveStyle('font-weight: 500');
        expect(
          supportingLabel,
          'It is expected that the supporting label has the font-size property as 12px'
        ).toHaveStyle('font-size: 12px');
        expect(
          supportingLabel,
          'It is expected that the supporting label has the color property as #1B1B1FB8'
        ).toHaveStyle('color: #1B1B1FB8');
      });
    });

    await step("Check toggle's onChange event", async () => {
      await userEvent.click(toggleWrapper.children[0]);

      const newToggleWrapper = canvas.getByRole('switch');
      await waitFor(() => {
        expect(
          newToggleWrapper.children[0].children[1],
          'It is expected that the background of the toggle has changed colour'
        ).toHaveStyle('background-color: #1b1b1f3d');
        expect(
          newToggleWrapper.children[0].children[1].children[0],
          'It is expected that the toggle ball will change position'
        ).toHaveStyle('transform: matrix(1, 0, 0, 1, 4, 0)');
        expect(args.onChange).toHaveBeenCalledOnce();
      });
    });
  },
};
