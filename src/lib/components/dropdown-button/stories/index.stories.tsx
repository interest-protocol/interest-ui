import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box } from '../../..';
import { CircleSVG } from '../../../icons';
import { ListItem } from '../../list-item';
import { ToggleButton } from '../../toggle';
import { DropdownButton } from '..';

const meta: Meta<typeof DropdownButton> = {
  title: 'DropdownButton',
  component: DropdownButton,
  argTypes: {
    label: {
      defaultValue: 'Label',
      control: { type: 'text' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownButton>;

export const WithLabel: Story = {
  args: {
    label: 'Label',
    disabled: false,
    title: 'Title',
    PrefixIcon: <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />,
    children: (
      <>
        <ListItem
          PrefixIcon={
            <Box width="1.5rem">
              <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
            </Box>
          }
          SuffixIcon={<ToggleButton name="toggle" defaultValue={false} />}
          title="List item"
        />
        <ListItem
          PrefixIcon={
            <Box width="1.5rem">
              <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
            </Box>
          }
          SuffixIcon={<ToggleButton name="toggle" defaultValue={false} />}
          title="List item"
        />
        <ListItem
          PrefixIcon={
            <Box width="1.5rem">
              <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
            </Box>
          }
          SuffixIcon={<ToggleButton name="toggle" defaultValue={false} />}
          title="List item"
        />
      </>
    ),
  },
};

export const WithLabelAndDisableds: Story = {
  args: {
    label: 'Label',
    disabled: false,
    title: 'Title',
    PrefixIcon: <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />,
    children: (
      <>
        <ListItem
          PrefixIcon={
            <Box width="1.5rem">
              <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
            </Box>
          }
          SuffixIcon={<ToggleButton name="toggle" defaultValue={false} />}
          title="List item"
        />
        <ListItem
          disabled
          PrefixIcon={
            <Box width="1.5rem">
              <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
            </Box>
          }
          SuffixIcon={
            <ToggleButton name="toggle" disabled defaultValue={true} />
          }
          title="List item"
        />
        <ListItem
          disabled
          PrefixIcon={
            <Box width="1.5rem">
              <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
            </Box>
          }
          SuffixIcon={
            <ToggleButton name="toggle" disabled defaultValue={false} />
          }
          title="List item"
        />
      </>
    ),
  },
};

export const WithoutLabelAndDisableds: Story = {
  args: {
    PrefixIcon: <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />,
    children: (
      <>
        <ListItem
          PrefixIcon={
            <Box width="1.5rem">
              <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
            </Box>
          }
          SuffixIcon={<ToggleButton name="toggle" defaultValue={false} />}
          title="List item"
        />
        <ListItem
          disabled
          PrefixIcon={
            <Box width="1.5rem">
              <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
            </Box>
          }
          SuffixIcon={
            <ToggleButton name="toggle" disabled defaultValue={true} />
          }
          title="List item"
        />
        <ListItem
          disabled
          PrefixIcon={
            <Box width="1.5rem">
              <CircleSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
            </Box>
          }
          SuffixIcon={
            <ToggleButton name="toggle" disabled defaultValue={false} />
          }
          title="List item"
        />
      </>
    ),
    disabled: false,
  },
};
