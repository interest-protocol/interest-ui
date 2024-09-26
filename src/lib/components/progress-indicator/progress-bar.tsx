import { useTheme } from '@emotion/react';
import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../../elements';
import { Theme } from '../../theme';
import { ProgressItemProps } from './progress-indicator.types';
import { getProgressColor } from './progress-indicator.utils';

export const ProgressBar: FC<
  PropsWithChildren<Omit<ProgressItemProps, 'variant'>>
> = ({ size = 16, value, status, isRounded, ...props }) => {
  const { colors } = useTheme() as Theme;
  const CURRENT_VALUE = value > 100 ? 100 : value < 0 ? 0 : value;

  return (
    <Box
      width="100%"
      height={size}
      minHeight={16}
      aria-valuemin={0}
      role="progressbar"
      aria-valuemax={100}
      aria-valuenow={CURRENT_VALUE}
      borderRadius={isRounded ? '999px' : 'unset'}
      backgroundColor={`${status == 'normal' ? 'high' : status}Container`}
      {...props}
    >
      <Box
        minHeight={8}
        height="100%"
        width={`${CURRENT_VALUE}%`}
        minWidth={CURRENT_VALUE ? size : 'unset'}
        borderRadius={isRounded ? '999px' : 'unset'}
        background={getProgressColor(colors, status)}
      />
    </Box>
  );
};
