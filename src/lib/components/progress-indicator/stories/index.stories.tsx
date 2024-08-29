import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { ProgressIndicator } from '..';

const meta: Meta<typeof ProgressIndicator> = {
  title: 'Progress Indicator',
  component: ProgressIndicator,
  argTypes: {
    variant: {
      defaultValue: 'bar',
      options: ['special-bar', 'bar', 'circle', 'loading'],
      control: { type: 'radio' },
    },
    status: {
      defaultValue: 'normal',
      options: ['normal', 'success', 'warning', 'danger'],
      control: { type: 'radio' },
    },
    value: {
      control: { type: 'number' },
    },
    size: {
      control: { type: 'number' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressIndicator>;

export const SpecialBar: Story = {
  args: {
    value: 45,
    variant: 'special-bar',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const progressBar = canvas.getByRole('progressbar');

    await step('Check the Special Progress Bar Style', async () => {
      expect(progressBar, 'Should be rendered').toBeInTheDocument();
      expect(progressBar, 'Should have the specific height').toHaveStyle(
        `height: ${args.size}px`
      );
      expect(
        progressBar,
        'Should have the background-color #0053DB'
      ).toHaveStyle(`background-color: #0053DB`);
      expect(progressBar, 'Should have the border-radius 999px').toHaveStyle(
        `border-radius: 999px`
      );
      expect(progressBar, 'Should have the specific border style').toHaveStyle(
        `border: 4px solid #0053DB`
      );
      await step('Check the Special Progress Value', async () => {
        const progressValue = progressBar.children[0];
        expect(
          progressValue.getAttribute('height'),
          'Special Progress Value should be specific height'
        ).toBe(`100%`);
        expect(
          progressValue.getAttribute('width'),
          `Special Progress Value Width should be ${args.value}%`
        ).toBe(`${args.value}%`);
        expect(
          progressValue,
          'Should have the background-color #EDEDF1'
        ).toHaveStyle(`background-color: #EDEDF1`);
        expect(
          progressValue,
          'Should have the border-radius 999px'
        ).toHaveStyle(`border-radius: 999px`);
      });
    });
  },
};

export const NormalBar: Story = {
  args: {
    value: 45,
    variant: 'bar',
    size: 30,
    status: 'normal',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const progressBar = canvas.getByRole('progressbar');

    await step('Check the Normal Progress Bar Style', async () => {
      expect(progressBar, 'Should be rendered').toBeInTheDocument();
      expect(progressBar, 'Should have the specific height').toHaveStyle(
        `height: 16px`
      );
      expect(
        progressBar,
        'Should have the background-color #E7E7EC'
      ).toHaveStyle(`background-color: #E7E7EC`);
      await step('Check the Normal Progress Value', async () => {
        const progressValue = progressBar.children[0];
        expect(
          progressValue.getAttribute('height'),
          'Normal Progress Value should be specific height'
        ).toBe('1rem');
        expect(
          progressValue.getAttribute('width'),
          `Special Progress Value Width should be ${args.value}%`
        ).toBe(`${args.value}%`);
        expect(
          progressValue,
          'Should have the background-color #0053DB'
        ).toHaveStyle(`background-color: #0053DB`);
      });
    });
  },
};

export const WarningBar: Story = {
  args: {
    value: 75,
    variant: 'bar',
    status: 'warning',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const progressBar = canvas.getByRole('progressbar');

    await step('Check the Warning Progress Bar Style', async () => {
      expect(progressBar, 'Should be rendered').toBeInTheDocument();
      expect(progressBar, 'Should have the specific height').toHaveStyle(
        `height: 16px`
      );
      expect(
        progressBar,
        'Should have the background-color #E7E7EC'
      ).toHaveStyle(`background-color: #E7E7EC`);
      await step('Check the Warning Progress Value', async () => {
        const progressValue = progressBar.children[0];
        expect(
          progressValue.getAttribute('height'),
          'Normal Progress Value should be specific height'
        ).toBe('1rem');
        expect(
          progressValue.getAttribute('width'),
          `Special Progress Value Width should be ${args.value}%`
        ).toBe(`${args.value}%`);
        expect(
          progressValue,
          'Should have the background-color #D87706'
        ).toHaveStyle(`background-color: #D87706`);
      });
    });
  },
};

export const DangerousBar: Story = {
  args: {
    value: 95,
    variant: 'bar',
    status: 'danger',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const progressBar = canvas.getByRole('progressbar');

    await step('Check the Dangerous Progress Bar Style', async () => {
      expect(progressBar, 'Should be rendered').toBeInTheDocument();
      expect(progressBar, 'Should have the specific height').toHaveStyle(
        `height: 16px`
      );
      expect(
        progressBar,
        'Should have the background-color #E7E7EC'
      ).toHaveStyle(`background-color: #E7E7EC`);
      await step('Check the Normal Progress Value', async () => {
        const progressValue = progressBar.children[0];
        expect(
          progressValue.getAttribute('height'),
          'Normal Progress Value should be specific height'
        ).toBe('1rem');
        expect(
          progressValue.getAttribute('width'),
          `Special Progress Value Width should be ${args.value}%`
        ).toBe(`${args.value}%`);
        expect(
          progressValue,
          'Should have the background-color #E53E3E'
        ).toHaveStyle(`background-color: #E53E3E`);
      });
    });
  },
};

export const Circle: Story = {
  args: {
    variant: 'circle',
    value: 25,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const progressCircle = canvas.getByRole('progressbar');

    await step('Check the Progress Circle Style', async () => {
      expect(progressCircle, 'Should be rendered').toBeInTheDocument();
      expect(
        progressCircle.childNodes.length,
        'Should be two element inside'
      ).toBe(2);
      await step('Check the Progress Circle Path', async () => {
        const circlePath = progressCircle.children[0];
        expect(circlePath, 'Should be rendered').toBeInTheDocument();
        expect(circlePath.tagName, 'Should be svg tag').toBe('svg');
      });
      await step('Check the Progress Circle Line', async () => {
        const lineFilled = progressCircle.children[1];
        expect(lineFilled, 'Should be rendered').toBeInTheDocument();
        expect(lineFilled, 'Should be specific width').toHaveStyle(
          `width: 50px`
        );
        expect(lineFilled, 'Should be specific height').toHaveStyle(
          `height: 50px`
        );
        expect(
          lineFilled.hasAttribute('clip-path'),
          'Should be a clip-path attribute'
        ).toBeTruthy();
      });
    });
  },
};

export const BigCircle: Story = {
  args: {
    variant: 'circle',
    value: 50,
    size: 80,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const progressCircle = canvas.getByRole('progressbar');

    await step('Check the Progress Circle Style', async () => {
      expect(progressCircle, 'Should be rendered').toBeInTheDocument();
      expect(
        progressCircle.childNodes.length,
        'Should be two element inside'
      ).toBe(2);
      await step('Check the Progress Circle Path', async () => {
        const circlePath = progressCircle.children[0];
        expect(circlePath, 'Should be rendered').toBeInTheDocument();
        expect(circlePath.tagName, 'Should be svg tag').toBe('svg');
      });
      await step('Check the Progress Circle Line', async () => {
        const lineFilled = progressCircle.children[1];
        expect(lineFilled, 'Should be rendered').toBeInTheDocument();
        expect(lineFilled, 'Should be specific width').toHaveStyle(
          `width: 80px`
        );
        expect(lineFilled, 'Should be specific height').toHaveStyle(
          `height: 80px`
        );
        expect(
          lineFilled.hasAttribute('clip-path'),
          'Should be a clip-path attribute'
        ).toBeTruthy();
      });
    });
  },
};

export const LoadingCircle: Story = {
  args: {
    variant: 'loading',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const progressCircle = canvas.getByRole('progressbar');

    await step('Check the Progress Circle Style', async () => {
      expect(progressCircle, 'Should be rendered').toBeInTheDocument();
      expect(
        progressCircle.childNodes.length,
        'Should be two element inside'
      ).toBe(2);
      await step('Check the Progress Circle Path', async () => {
        const circlePath = progressCircle.children[0];
        expect(circlePath, 'Should be rendered').toBeInTheDocument();
        expect(circlePath.tagName, 'Should be svg tag').toBe('svg');
      });
      await step('Check the Progress Circle Line', async () => {
        const lineFilled = progressCircle.children[1];
        expect(lineFilled, 'Should be rendered').toBeInTheDocument();
        expect(lineFilled, 'Should be specific width').toHaveStyle(
          `width: 50px`
        );
        expect(lineFilled, 'Should be specific height').toHaveStyle(
          `height: 50px`
        );
        expect(
          lineFilled.hasAttribute('clip-path'),
          'Should be a clip-path attribute'
        ).toBeTruthy();
      });
    });
  },
};
