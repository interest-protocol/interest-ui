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

export const Container = Template.bind({});

Container.args = {
  /*👇 The args you need here will depend on your component */
  variant: 'container',
  children: (
    <>
      <Box bg="#5af5" height="30rem" width="100%" nHover={{ bg: '#5afa' }} />
      <Box bg="#5af5" height="30rem" width="100%" nHover={{ bg: '#5afa' }} />
      <Box bg="#5af5" height="30rem" width="100%" nHover={{ bg: '#5afa' }} />
      <Box bg="#5af5" height="30rem" width="100%" nHover={{ bg: '#5afa' }} />
      <Box
        bg="#5af5"
        height="30rem"
        width="100%"
        nHover={{ bg: '#5afa' }}
        display={['none', 'block']}
      />
      <Box
        bg="#5af5"
        height="30rem"
        width="100%"
        nHover={{ bg: '#5afa' }}
        display={['none', 'block']}
      />
      <Box
        bg="#5af5"
        width="100%"
        height="30rem"
        nHover={{ bg: '#5afa' }}
        display={['none', 'block']}
      />
      <Box
        bg="#5af5"
        width="100%"
        height="30rem"
        nHover={{ bg: '#5afa' }}
        display={['none', 'block']}
      />
      <Box
        bg="#5af5"
        width="100%"
        height="30rem"
        nHover={{ bg: '#5afa' }}
        display={['none', 'none', 'none', 'block']}
      />
      <Box
        bg="#5af5"
        width="100%"
        height="30rem"
        nHover={{ bg: '#5afa' }}
        display={['none', 'none', 'none', 'block']}
      />
      <Box
        bg="#5af5"
        width="100%"
        height="30rem"
        nHover={{ bg: '#5afa' }}
        display={['none', 'none', 'none', 'block']}
      />
      <Box
        bg="#5af5"
        width="100%"
        height="30rem"
        nHover={{ bg: '#5afa' }}
        display={['none', 'none', 'none', 'block']}
      />
    </>
  ),
};
