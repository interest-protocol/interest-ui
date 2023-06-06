import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box } from '.';

const meta: Meta<typeof Box> = {
  title: 'Box',
  component: Box,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Container: Story = {
  args: {
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
  },
};
