import { useTheme } from '@emotion/react';
import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../../elements';
import { Theme } from '../../theme';
import { ProgressItemProps } from './progress-indicator.types';
import { getProgressColor } from './progress-indicator.utils';

export const ProgressBar: FC<PropsWithChildren<ProgressItemProps>> = ({
  size,
  value,
  status,
  variant,
  ...props
}) => {
  const { colors } = useTheme() as Theme;

  return (
    <Box
      width="100%"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      height={size || '1rem'}
      {...(variant == 'bar'
        ? {
            backgroundColor: 'highContainer',
          }
        : {
            backgroundColor: 'primary',
            borderWidth: `${size ? size / 10 : 3}px`,
            borderStyle: 'solid',
            borderColor: 'primary',
            borderRadius: '999px',
          })}
      {...props}
    >
      <Box
        width={`${value}%`}
        {...(variant == 'bar'
          ? {
              background: getProgressColor(colors, status),
              height: '1rem',
            }
          : {
              background: 'container',
              borderRadius: '999px',
              height: '100%',
            })}
      />
    </Box>
  );
};
