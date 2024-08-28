import { useTheme } from '@emotion/react';
import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../../elements';
import { Theme } from '../../theme';
import { ProgressItemProps } from './progress-indicator.types';
import { getProgressColor } from './progress-indicator.utils';

export const ProgressBar: FC<PropsWithChildren<ProgressItemProps>> = ({
  size = 16,
  value,
  status,
  variant,
  ...props
}) => {
  const { colors } = useTheme() as Theme;
  const CURRENT_VALUE = value > 100 ? 100 : value < 0 ? 0 : value;

  return (
    <Box
      width="100%"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={CURRENT_VALUE}
      height={size}
      minHeight={16}
      {...(variant == 'bar'
        ? {
            backgroundColor: 'highContainer',
          }
        : {
            p: '1px',
            borderStyle: 'solid',
            borderRadius: '999px',
            borderColor: 'primary',
            backgroundColor: 'primary',
          })}
      {...props}
    >
      <Box
        width={`${CURRENT_VALUE}%`}
        {...(variant == 'bar'
          ? {
              background: getProgressColor(colors, status),
              height: '100%',
            }
          : {
              minHeight: 8,
              height: size - 8,
              borderRadius: '999px',
              background: 'container',
              minWidth: CURRENT_VALUE ? size : 'unset',
            })}
      />
    </Box>
  );
};
