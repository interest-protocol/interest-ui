import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../../elements';
import { ThumbWrapperProps } from './slider.types';

export const ThumbWrapper: FC<PropsWithChildren<ThumbWrapperProps>> = (
  props
) => (
  <Box
    {...props}
    display="flex"
    width="1.25rem"
    height="1.25rem"
    borderRadius="50%"
    border="1px solid"
    alignItems="center"
    borderColor={!props.disabled ? 'primary' : `#C8C8C9`}
    justifyContent="center"
    cursor={props.disabled ? 'not-allowed !important' : 'pointer'}
    backgroundColor={!props.disabled ? 'lowestContainer' : `#C8C8C9`}
    boxShadow="0px 2px 4px -2px rgba(13, 16, 23, 0.04), 0px 4px 8px -2px rgba(13, 16, 23, 0.12)"
    nHover={
      !props.disabled && {
        border: '1.33px solid',
        bg: 'primaryContainer',
        borderColor: 'primary',
        boxShadow: `0px 0px 0px 4px rgba(0, 83, 219, 0.08)`,
      }
    }
    nFocus={
      !props.disabled && {
        border: '1px solid',
        bg: 'primaryContainer',
        borderColor: 'primary',
        boxShadow: `0px 0px 0px 4px rgba(0, 83, 219, 0.08)`,
      }
    }
    position="relative"
  >
    {props.children}
  </Box>
);

export * from './slider.types';
