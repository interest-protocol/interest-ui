import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Box } from '.';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Box',
  component: Box,
} as ComponentMeta<typeof Box>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const BoxStory = Template.bind({});

BoxStory.args = {
  /*👇 The args you need here will depend on your component */
  m: '1rem',
  p: '2rem',
  border: '1px solid',
  borderColor: 'gray',
};
