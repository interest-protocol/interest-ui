import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../../elements';
import { ThumbWrapperProps } from './slider.types';

export const ThumbWrapper: FC<PropsWithChildren<ThumbWrapperProps>> = ({
  children,
  disabled,
  thumbDetails,
}) => (
  <Box
    {...thumbDetails}
    display="flex"
    width="1.25rem"
    height="1.25rem"
    borderRadius="50%"
    border="1px solid"
    alignItems="center"
    justifyContent="center"
    borderColor={!disabled ? 'primary' : `#C8C8C9`}
    cursor={disabled ? 'not-allowed !important' : 'pointer'}
    backgroundColor={!disabled ? 'lowestContainer' : `#C8C8C9`}
    boxShadow="0px 2px 4px -2px rgba(13, 16, 23, 0.04), 0px 4px 8px -2px rgba(13, 16, 23, 0.12)"
    nHover={
      !disabled && {
        border: '1.33px solid',
        bg: 'primaryContainer',
        borderColor: 'primary',
        boxShadow: `0px 0px 0px 4px rgba(0, 83, 219, 0.08)`,
      }
    }
    nFocus={
      !disabled && {
        border: '1px solid',
        bg: 'primaryContainer',
        borderColor: 'primary',
        boxShadow: `0px 0px 0px 4px rgba(0, 83, 219, 0.08)`,
      }
    }
    position="relative"
  >
    {children}
  </Box>
);

export * from './slider.types';
