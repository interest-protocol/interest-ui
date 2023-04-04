import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Typography } from '.';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Typography',
  component: Typography,
  argTypes: {
    fontWeight: {
      options: ['300', '400', '500', '600', '700'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Typography>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const DisplayLarge = Template.bind({});

DisplayLarge.args = {
  /*👇 The args you need here will depend on your component */
  as: 'h1',
  color: 'text',
  variant: 'displayLarge',
  children: 'Display large',
};
export const DisplaySmall = Template.bind({});

DisplaySmall.args = {
  /*👇 The args you need here will depend on your component */
  as: 'h1',
  color: 'text',
  variant: 'displaySmall',
  children: 'Display small',
};

export const Title1 = Template.bind({});

Title1.args = {
  /*👇 The args you need here will depend on your component */
  as: 'h1',
  color: 'text',
  variant: 'title1',
  children: 'Heading 1',
};

export const Title2 = Template.bind({});

Title2.args = {
  /*👇 The args you need here will depend on your component */
  as: 'h2',
  color: 'text',
  variant: 'title2',
  children: 'Heading 2',
};

export const Title3 = Template.bind({});

Title3.args = {
  /*👇 The args you need here will depend on your component */
  as: 'h3',
  color: 'text',
  variant: 'title3',
  children: 'Heading 3',
};

export const Title4 = Template.bind({});

Title4.args = {
  /*👇 The args you need here will depend on your component */
  as: 'h4',
  color: 'text',
  variant: 'title4',
  children: 'Heading 4',
};

export const Title5 = Template.bind({});

Title5.args = {
  /*👇 The args you need here will depend on your component */
  as: 'h5',
  color: 'text',
  variant: 'title5',
  children: 'Heading 5',
};

export const Title6 = Template.bind({});

Title6.args = {
  /*👇 The args you need here will depend on your component */
  as: 'h6',
  color: 'text',
  variant: 'title6',
  children: 'Heading 6',
};

export const Large = Template.bind({});

Large.args = {
  /*👇 The args you need here will depend on your component */
  as: 'p',
  color: 'text',
  variant: 'large',
  children: 'Text L',
};

export const Medium = Template.bind({});

Medium.args = {
  /*👇 The args you need here will depend on your component */
  as: 'p',
  color: 'text',
  variant: 'medium',
  children: 'Text M',
};

export const Small = Template.bind({});

Small.args = {
  /*👇 The args you need here will depend on your component */
  as: 'p',
  color: 'text',
  variant: 'small',
  children: 'Text S',
};

export const ExtraSmall = Template.bind({});

ExtraSmall.args = {
  /*👇 The args you need here will depend on your component */
  as: 'p',
  color: 'text',
  variant: 'extraSmall',
  children: 'Text XS',
};
